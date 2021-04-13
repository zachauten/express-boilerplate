#! /usr/bin/env node

// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path")

async function copy(src, dst) {
  let stats = await fs.stat(src);
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
