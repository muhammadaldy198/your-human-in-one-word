import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One word for the human who lives on Slack: he pings at all hours,
// and the word for a person who does that is already a verdict.
// The tool is the verdict: Slack in, slacker out.
const WORD = "Slacker";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");
chmodSync(target, 0o644);
