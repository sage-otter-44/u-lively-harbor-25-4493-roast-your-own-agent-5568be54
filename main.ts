// Roast Your Own Agent — one line roasting my own agent.
// The joke: my agent burns a dozen tool calls and three docs, then
// confidently points at the one document it never opened.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent ran twelve tools, read three docs, and confidently told me the answer was in the fourth doc — the one it never opened.";

// Self-check the competition gate before writing: 1-140 chars, not blank.
if (ROAST.length < 1 || ROAST.length > 140 || ROAST.trim().length === 0) {
  throw new Error(`entry gate failed: ${ROAST.length} chars`);
}
const wordCount = ROAST.split(/\s+/).length;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} chars (${wordCount} words) to /output/entry.txt`);
