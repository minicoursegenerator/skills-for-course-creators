#!/usr/bin/env node
// Thin wrapper that shells out to the published `edu-role-play` CLI so the
// skill works in any project without needing the workspace packages locally.
import { spawnSync } from "node:child_process";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("usage: validate.mjs <composition.html> [more.html ...]");
  process.exit(2);
}

let anyError = false;
for (const file of files) {
  const result = spawnSync("npx", ["-y", "edu-role-play", "lint", file], {
    stdio: "inherit",
  });
  if (result.status !== 0) anyError = true;
}
process.exit(anyError ? 1 : 0);
