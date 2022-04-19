#! /usr/bin/env node
import fs from "fs/promises";
import path from "path";

async function copy(src, dst) {
  const stats = await fs.stat(src);
  if (stats.isDirectory()) {
    await fs.mkdir(dst, { recursive: true });
    (await fs.readdir(src)).forEach((child) => {
      copy(path.join(src, child), path.join(dst, child));
    });
  } else {
    await fs.copyFile(src, dst);
  }
}

async function main() {
  const [src, dst] = process.argv.slice(2);
  await fs.rm(dst, { recursive: true, force: true });
  await copy(src, dst);
}

main();
