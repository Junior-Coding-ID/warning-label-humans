// Warning Label for Humans — one-line safety warning label (91 chars).
// Writes the entry text to /output/entry.txt exactly as specified.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: Do not tell a human to act natural for a photo. Unit may forget where its arms go.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
