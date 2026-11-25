import { mkdirSync, writeFileSync } from "node:fs";

// Fortune voice first (oracular setup), then the punchline breaks it:
// the promised windfall turns out to be the exchange's own paperwork.
const SETUP = "A windfall is coming your way:";
const PUNCH =
  " the exchange will return your remaining balance of $0.00.";

const LINE = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
