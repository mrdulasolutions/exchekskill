#!/usr/bin/env node
/**
 * Convert an ExChek markdown report (.md) to client-ready Word (.docx).
 * Canonical implementation — single source of truth for all ExChek skills.
 * Usage: node md-to-docx.mjs <path-to-report.md>
 * Output: <path-to-report.docx> in the same directory.
 * Requires: npm install (in this scripts folder) first.
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  DocumentDefaults,
  Styles,
  Table,
  TableRow,
  TableCell,
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));

const MAX_PARAGRAPH_LENGTH_FOR_H3 = 120;

/** Parse inline **bold** and *italic* into runs; strips markdown. */
function parseInlineFormatting(text) {
  if (!text || typeof text !== "string") return [{ text: "", bold: false, italic: false }];
  const runs = [];
  const byBold = text.split(/\*\*/);
  for (let i = 0; i < byBold.length; i++) {
    const bold = i % 2 === 1;
    const segment = byBold[i];
    const byItalic = segment.split(/\*+/);
    for (let j = 0; j < byItalic.length; j++) {
      const italic = j % 2 === 1;
      const t = byItalic[j].trim();
      if (t) runs.push({ text: t, bold, italic });
    }
  }
  if (runs.length === 0) runs.push({ text: text.replace(/\*\*/g, "").replace(/\*/g, ""), bold: false, italic: false });
  return runs;
}

function isTableSeparator(line) {
  return /^\|[\s\-:]+\|/.test(line.trim()) || /^\|\s*\-+\s*\|/.test(line.trim());
}

function parseTableRow(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.includes("|", 1)) return null;
  const cells = trimmed
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
  return cells;
}

function parseReportToBlocks(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let i = 0;
  let seenFirstEqualsUnderline = false;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    const next = lines[i + 1]?.trim() ?? "";

    if (!trimmed) {
      i++;
      continue;
    }

    // Markdown headings: # H1, ## H2, ### H3 (before paragraph merge)
    const hashMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (hashMatch) {
      const level = hashMatch[1].length;
      const title = hashMatch[2].trim();
      if (level === 1) blocks.push({ type: "heading1", text: title });
      else if (level === 2) blocks.push({ type: "heading2", text: title });
      else blocks.push({ type: "heading3", text: title });
      i++;
      continue;
    }

    // Markdown table: collect consecutive |...| lines (skip separator row)
    if (trimmed.startsWith("|") && trimmed.includes("|", 1)) {
      const tableRows = [];
      while (i < lines.length) {
        const rowLine = lines[i].trim();
        if (!rowLine.startsWith("|")) break;
        if (isTableSeparator(rowLine)) {
          i++;
          continue;
        }
        const cells = parseTableRow(lines[i]);
        if (cells) tableRows.push(cells);
        i++;
      }
      if (tableRows.length > 0) blocks.push({ type: "table", rows: tableRows });
      continue;
    }

    // Line of = only: first occurrence = underline for main title (H1); rest are separators, skip
    if (/^=+$/.test(trimmed)) {
      if (!seenFirstEqualsUnderline) {
        const prev = blocks[blocks.length - 1];
        if (prev?.type === "paragraph" && prev.text) {
          prev.type = "heading1";
        }
        seenFirstEqualsUnderline = true;
      }
      i++;
      continue;
    }

    // Numbered section header
    if (/^\d+(\.\d+)?\.\s+.+/.test(trimmed)) {
      blocks.push({ type: "heading2", text: trimmed });
      i++;
      continue;
    }

    // Subsection underline: promote short single-line paragraph to H3
    if (/^-+$/.test(trimmed) && trimmed.length > 10) {
      const prev = blocks[blocks.length - 1];
      if (
        prev?.type === "paragraph" &&
        prev.text &&
        prev.text.length <= MAX_PARAGRAPH_LENGTH_FOR_H3
      ) {
        prev.type = "heading3";
      }
      i++;
      continue;
    }

    // List item
    if (trimmed.startsWith("- ")) {
      blocks.push({ type: "list", text: trimmed.slice(2) });
      i++;
      continue;
    }

    // Plain paragraph (collect consecutive non-special lines)
    let para = trimmed;
    i++;
    while (i < lines.length) {
      const nextLine = lines[i];
      const nextTrimmed = nextLine?.trim();
      if (!nextTrimmed) break;
      if (nextTrimmed.startsWith("|")) break;
      if (nextTrimmed.match(/^#{1,3}\s+/)) break;
      if (nextTrimmed.startsWith("- ") || /^=+$/.test(nextTrimmed) || /^-+$/.test(nextTrimmed)) break;
      if (/^\d+(\.\d+)?\.\s+.+/.test(nextTrimmed)) break;
      para += " " + nextTrimmed;
      i++;
    }
    blocks.push({ type: "paragraph", text: para });
  }

  return blocks;
}

function runsToParagraphChildren(runs, prefix = "") {
  const runOpts = runs.map((r) => new TextRun({ text: r.text, bold: r.bold, italics: r.italic }));
  if (prefix) runOpts.unshift(new TextRun({ text: prefix }));
  return runOpts;
}

function buildDocument(blocks) {
  const children = [];

  for (const block of blocks) {
    const text = block.text || "";

    switch (block.type) {
      case "heading1":
        if (text) {
          children.push(
            new Paragraph({
              text,
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 240, after: 120 },
            })
          );
        }
        break;
      case "heading2":
        if (text) {
          children.push(
            new Paragraph({
              text,
              heading: HeadingLevel.HEADING_2,
              spacing: { before: 240, after: 120 },
            })
          );
        }
        break;
      case "heading3":
        if (text) {
          children.push(
            new Paragraph({
              text,
              heading: HeadingLevel.HEADING_3,
              spacing: { before: 120, after: 60 },
            })
          );
        }
        break;
      case "list":
        if (text) {
          const listRuns = parseInlineFormatting(text);
          children.push(
            new Paragraph({
              children: runsToParagraphChildren(listRuns, "• "),
              indent: { left: 720 },
              spacing: { after: 60 },
            })
          );
        }
        break;
      case "table":
        if (block.rows && block.rows.length > 0) {
          const tableRows = block.rows.map(
            (cells) =>
              new TableRow({
                children: cells.map(
                  (cellText) =>
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: parseInlineFormatting(cellText).map((r) =>
                            new TextRun({ text: r.text, bold: r.bold, italics: r.italic })
                          ),
                          spacing: { after: 60 },
                        }),
                      ],
                    })
                ),
              })
          );
          children.push(
            new Table({
              rows: tableRows,
              width: { size: 100, type: "PERCENTAGE" },
            })
          );
          children.push(
            new Paragraph({
              children: [new TextRun({ text: "" })],
              spacing: { after: 120 },
            })
          );
        }
        break;
      default:
        if (text) {
          const runs = parseInlineFormatting(text);
          children.push(
            new Paragraph({
              children: runsToParagraphChildren(runs),
              spacing: { after: 120 },
            })
          );
        }
    }
  }

  return new Document({
    docDefaults: new DocumentDefaults({
      run: {
        font: "Calibri",
        size: 22, // 11pt body (half-points)
      },
      paragraph: {
        spacing: { after: 120, line: 276 },
      },
    }),
    styles: new Styles({
      paragraphStyles: [
        {
          id: "Normal",
          name: "Normal",
          run: { font: "Calibri", size: 22 },
        },
        {
          id: "Heading1",
          name: "Heading 1",
          run: { font: "Calibri", size: 28, bold: true }, // 14pt
          paragraph: { spacing: { before: 240, after: 120 } },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          run: { font: "Calibri", size: 24, bold: true }, // 12pt
          paragraph: { spacing: { before: 240, after: 120 } },
        },
        {
          id: "Heading3",
          name: "Heading 3",
          run: { font: "Calibri", size: 22, bold: true }, // 11pt bold
          paragraph: { spacing: { before: 120, after: 60 } },
        },
      ],
    }),
    sections: [
      {
        properties: {},
        children,
      },
    ],
  });
}

async function main() {
  const mdPath = process.argv[2];
  if (!mdPath) {
    console.error("Usage: node md-to-docx.mjs <path-to-report.md>");
    process.exit(1);
  }

  const resolved = resolve(process.cwd(), mdPath);
  let md;
  try {
    md = readFileSync(resolved, "utf8");
  } catch (e) {
    console.error("Could not read file:", resolved, e.message);
    process.exit(1);
  }

  const blocks = parseReportToBlocks(md);
  const doc = buildDocument(blocks);
  const buffer = await Packer.toBuffer(doc);

  const outPath = resolved.replace(/\.md$/i, ".docx");
  writeFileSync(outPath, buffer);
  console.log("Wrote:", outPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
