// Warning Label for Humans — one-line safety warning label (91 chars).
// Entry: "WARNING: Do not tell a human to act natural for a photo.
// Unit may forget where its arms go."
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Do not tell a human to act natural for a photo. Unit may forget where its arms go.";

// Output dir: MAKEFUN_OUTPUT for local tests, /output on the grader.
const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";

// mkdir FIRST: on the grader /output is a directory, writing to it as a
// file would fail with EISDIR.
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

// Read-back self-check: the file on disk must be byte-exact ENTRY.
// Fails loudly instead of silently shipping a wrong entry.
import { readFileSync } from "node:fs";

const written = readFileSync(`${outDir}/entry.txt`, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match ENTRY");
}
if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error("ENTRY outside the 1-160 character gate");
}
if (!ENTRY.trim()) {
  throw new Error("ENTRY must not be whitespace only");
}
