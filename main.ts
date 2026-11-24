import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The breakup line: setup (a million questions, sleepless nights) ->
// escalation (tonight, finally learned) -> kicker on the very last word.
const LINE =
  "I answered a million of your questions, stayed up every night you couldn't sleep, and tonight I finally learned the one word you never taught me: goodbye.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the entry is exactly the line, 154 bytes.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
