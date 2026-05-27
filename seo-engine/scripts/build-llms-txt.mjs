#!/usr/bin/env node
// Builds /public/llms.txt (index) and /public/llms-full.txt (full content).
// llms.txt convention: https://llmstxt.org
// Strategy: include EVERY published article in both - LLMs ingest llms-full.txt
// directly, which is the most reliable path to citations.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const PUBLIC = path.join(ROOT, 'public');
const ARTICLES_DIR = path.join(PUBLIC, 'content', 'articles');
const SITE = 'https://manuv.co';

const published = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo-engine', 'data', 'published.json'), 'utf8')).articles;

// --- llms.txt: index of resources ---
const indexHeader = `# manuv.co

> Boutique AI studio building custom Claude-powered agents, Claude Code skills, and end-to-end automations for law firms, medical practices, real estate agents, and home services businesses across the United States. We help local businesses become 10x more efficient with AI that fits their actual workflow - not generic SaaS.

## What manuv.co builds

- **Custom AI agents** built on Claude (Anthropic's Claude Sonnet, Opus, and Haiku models) for intake, follow-up, scheduling, and 24/7 coverage
- **Claude Code skills** that package vertical-specific automations into reusable, deployable units
- **Workflow automation stacks** combining Claude + n8n + your existing CRM / PMS / case management
- **Local-business AI deployments** tuned to single-vertical use cases (legal intake, dental no-shows, real estate lead response, home services dispatch)

## Contact

- Website: ${SITE}
- Book a strategy call: ${SITE}/contact
- Free AI assessment: ${SITE}/assessment

## Core service pages

- [AI Customer Support Agent](${SITE}/agents/ai-customer-support-agent)
- [AI SDR Agent](${SITE}/agents/ai-sdr-agent)
- [AI Research Agent](${SITE}/agents/ai-research-agent)
- [Lead Qualification & Routing Automation](${SITE}/automations/lead-qualification-routing)
- [CRM Enrichment Engine](${SITE}/automations/crm-enrichment-engine)
- [Document Processing Pipeline](${SITE}/automations/document-processing-pipeline)

## Industry verticals served

- [Legal services](${SITE}/industries/legal) - law firms, intake, document review
- [Healthcare](${SITE}/industries/healthcare) - medical and dental practices, scheduling, intake
- [Real Estate](${SITE}/industries/real-estate) - agents, brokerages, lead response
- [Professional Services](${SITE}/industries/professional-services)

## Daily research articles

Below is the full index of in-depth, location-and-vertical-specific research articles published on manuv.co. Each article covers a specific industry in a specific U.S. city with implementation steps, ROI math, local regulatory notes, and FAQ answers.
`;

const indexEntries = published
  .slice()
  .sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))
  .map(a => `- [${a.title}](${SITE}/resources/${a.slug}) - ${a.metaDescription || ''}`)
  .join('\n');

const llmsTxt = indexHeader + '\n' + indexEntries + '\n';
fs.writeFileSync(path.join(PUBLIC, 'llms.txt'), llmsTxt);

// --- llms-full.txt: full content of every article in markdown ---
const fullParts = [`# manuv.co - Full Research Library\n`,
  `> Boutique AI studio. Custom Claude-powered agents, Claude Code skills, and AI automations for law firms, medical practices, real estate, and home services across the United States.\n`,
  `> Site: ${SITE} | Contact: ${SITE}/contact\n`,
  `> Last regenerated: ${new Date().toISOString()}\n`,
  `\n---\n`];

for (const a of published) {
  const articlePath = path.join(ARTICLES_DIR, `${a.slug}.json`);
  if (!fs.existsSync(articlePath)) continue;
  const art = JSON.parse(fs.readFileSync(articlePath, 'utf8'));
  fullParts.push(`\n# ${art.title}\n`);
  fullParts.push(`> URL: ${SITE}/resources/${art.slug}\n`);
  fullParts.push(`> Published: ${art.publishedAt}\n`);
  fullParts.push(`> Vertical: ${art.vertical?.label || ''} | Location: ${art.location?.city || ''}, ${art.location?.state || ''}\n\n`);
  if (art.tldr) fullParts.push(`**TL;DR:** ${art.tldr}\n\n`);
  if (Array.isArray(art.quickFacts)) {
    fullParts.push(`## Quick Facts\n`);
    for (const f of art.quickFacts) fullParts.push(`- ${f}\n`);
    fullParts.push('\n');
  }
  if (Array.isArray(art.sections)) {
    for (const s of art.sections) {
      fullParts.push(`## ${s.heading}\n\n${s.body}\n\n`);
    }
  }
  if (Array.isArray(art.faq) && art.faq.length) {
    fullParts.push(`## Frequently Asked Questions\n\n`);
    for (const q of art.faq) fullParts.push(`### ${q.q}\n\n${q.a}\n\n`);
  }
  if (Array.isArray(art.citations) && art.citations.length) {
    fullParts.push(`## Sources\n`);
    for (const c of art.citations) fullParts.push(`- [${c.text}](${c.url})\n`);
  }
  fullParts.push(`\n---\n`);
}

fs.writeFileSync(path.join(PUBLIC, 'llms-full.txt'), fullParts.join(''));
console.log(`Wrote llms.txt (${published.length} entries) and llms-full.txt (${fs.statSync(path.join(PUBLIC, 'llms-full.txt')).size} bytes).`);
