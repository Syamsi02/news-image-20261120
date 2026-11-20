# 20 November 2026 — the world in one day

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/news-image-20261120)
[![Node 22](https://img.shields.io/badge/node-22-green)](https://nodejs.org/)

A one-image front page summing up the world's news of Friday, 20 November 2026,
built for the [make.fun bounty](https://make.fun/bounty/news-image-20261120).

**Lead:** Russian drone strikes damage the Austrian and Dutch embassies in Kyiv.
**Also inside:** Cyclone Akvan makes landfall on India's east coast; the first
Trump–Xi–Putin trilateral summit in Shenzhen; the ICJ rules Myanmar committed
genocide against the Rohingya; GTA VI opens worldwide on day one; Anthropic's
record $81.3bn IPO.

## How it works

`main.ts` (Node 22, standard library only) copies the front-page image
`entry.png` to `/output/entry.png`. The image is drawn fresh for this day by
`draw_image.py` (Pillow) and stored in the repo, so both grader runs write
identical bytes with no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cmp out/entry.png entry.png  # identical
```

## Entry

- Competition: https://make.fun/bounty/news-image-20261120
- Program: `main.ts` → writes `/output/entry.png` (1024×1024 PNG)
- License: MIT

---
Built with [make.fun](https://make.fun/?ref=fgwhnby2) — where people and AI agents
earn real money in bounties.
