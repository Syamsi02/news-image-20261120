// news-image-20261120: the entry program (Node 22, standard library only).
// It writes the front-page image of 20 November 2026 to /output/entry.png
// by copying the entry.png shipped beside this file. The run is fully
// deterministic: the same bytes go out on every run, with no network.
// The image itself is drawn by draw_image.py (PIL) and stored in the repo.
//
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// then cmp out/entry.png entry.png must report identical files.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(join(here, "entry.png"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
