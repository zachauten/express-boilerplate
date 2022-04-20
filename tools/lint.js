#! /usr/bin/env node
import { denolint, lint } from "@node-rs/deno-lint";

// denolint(process.cwd(), "");

import * as fs from "fs";
import * as path from "path";

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function main() {
  for await (const p of walk("src")) {
    if (p.endsWith(".ts")) {
      const buf = fs.readFileSync(p);
      const src = buf.toString("utf-8");
      const res = lint(p, src, false);
      res.forEach(x => console.log(x));
    }
  }
}

main();
