import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "You will learn a valuable lesson: ";
const PUNCH = "your tuition was your whole account, nonrefundable.";
const LINE = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
