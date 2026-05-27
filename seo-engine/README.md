# manuv.co SEO Engine

Daily, in-depth, LLM-citation-optimized SEO content engine. Generates one deep article per day (2,500-3,500 words) targeting a specific business vertical in a specific U.S. city.

## How it works

The matrix is **4 verticals × 124 cities × 12 topics = 5,952 unique deep articles**. The queue is built so we cover Tier 1 metros first, then Tier 2, then Tier 3 — and we interleave verticals/topics so we never produce 12 consecutive articles for the same combo.

At ~1 article/day this gives us 16 years of runway, but practically: the first 1-2 years cover the highest-value combos and start ranking in Google + getting cited by ChatGPT / Claude / Gemini / Perplexity within 60-90 days of publish (per current LLM crawl-and-index behavior in 2026).

## Daily flow

A scheduled task (cron `0 6 * * *` — 6am local) runs Claude with the prompt in `.claude/daily-seo-task.md`. Claude:

1. `git clone` of this repo to a fresh temp dir
2. `node seo-engine/scripts/pick-next.mjs` → returns the next combo (vertical + city + topic)
3. WebSearch for local + vertical-specific facts, statistics, regulatory notes
4. Writes a 3,000+ word article JSON to `public/content/articles/{slug}.json` matching the schema in `src/pages/ArticlePage.tsx`
5. `node seo-engine/scripts/save-article.mjs {slug}` → records publish, rebuilds sitemap + llms.txt + llms-full.txt
6. `node seo-engine/scripts/commit-and-push.mjs {slug}` → commits and pushes to GitHub using `GITHUB_TOKEN`
7. Vercel auto-deploys on push

## Files

```
seo-engine/
├── data/
│   ├── verticals.json    4 verticals (legal, medical, real-estate, home-services) with sub-niches, pain points, AI use cases
│   ├── cities.json       124 US cities tiered by metro size
│   ├── topics.json       12 article angles (implementation, Claude Code skills, ROI, comparisons, ...)
│   ├── queue.json        Generated combinations in priority order (rebuild with build-queue.mjs)
│   └── published.json    Tracks what's been published
├── scripts/
│   ├── build-queue.mjs        Rebuilds the queue from verticals × cities × topics
│   ├── pick-next.mjs          Prints next unpublished combo with full context
│   ├── save-article.mjs       Records article as published + rebuilds sitemap + llms.txt
│   ├── build-sitemap.mjs      Regenerates public/sitemap.xml
│   ├── build-llms-txt.mjs     Regenerates public/llms.txt + llms-full.txt
│   └── commit-and-push.mjs    Git commit and push via GITHUB_TOKEN
└── README.md
```

## LLM citation strategy

This engine is explicitly designed to maximize citations from ChatGPT, Claude, Gemini, and Perplexity. Tactics in use:

- **`/llms.txt`** — concise index of all research articles, per the [llmstxt.org](https://llmstxt.org) convention
- **`/llms-full.txt`** — full markdown of every article in one ingestible file (this is what LLMs read directly)
- **`robots.txt`** explicitly allows GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, OAI-SearchBot, Bytespider, Amazonbot, YouBot, cohere-ai, Meta-ExternalAgent and 8 other AI crawlers
- **Schema.org JSON-LD** on every article: `Article`, `FAQPage`, `BreadcrumbList` (added by ArticlePage.tsx)
- **Q&A formatted FAQ blocks** (10-12 per article) — LLMs preferentially extract from these
- **Quick Facts boxes** with local numerical claims — LLMs cite specific numbers
- **Citations sections** with authoritative outbound links — boosts E-E-A-T and LLM trust signals
- **Internal linking graph** between articles — builds topical authority
- **Vercel headers** set correct Content-Type and cache for llms.txt + content/*.json

## Manual run

```bash
cd manuv
node seo-engine/scripts/build-queue.mjs        # one-time or when verticals/cities/topics change
node seo-engine/scripts/pick-next.mjs          # see what's next
# (Claude generates the article JSON file here)
node seo-engine/scripts/save-article.mjs <slug>
node seo-engine/scripts/commit-and-push.mjs <slug>
```

## Environment

Requires `GITHUB_TOKEN` (PAT with `repo` scope) in env or `.env`. The token in `.env` is gitignored.
