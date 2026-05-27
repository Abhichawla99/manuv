#!/usr/bin/env node
// Picks the next unpublished combo from queue.json.
// Prints a context bundle (vertical, city, topic) for Claude to use when writing.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(__dirname, '..', 'data');

let queue;
try {
  queue = JSON.parse(fs.readFileSync(path.join(DATA, 'queue.json'), 'utf8'));
} catch {
  console.error('queue.json missing. Run build-queue.mjs first.');
  process.exit(1);
}
const verticals = JSON.parse(fs.readFileSync(path.join(DATA, 'verticals.json'), 'utf8')).verticals;
const cities    = JSON.parse(fs.readFileSync(path.join(DATA, 'cities.json'), 'utf8')).cities;
const topics    = JSON.parse(fs.readFileSync(path.join(DATA, 'topics.json'), 'utf8')).topics;
const published = JSON.parse(fs.readFileSync(path.join(DATA, 'published.json'), 'utf8')).articles;
const publishedSlugs = new Set(published.map(a => a.slug));

const next = queue.items.find(it => !publishedSlugs.has(it.slug));
if (!next) {
  console.error('Queue exhausted. Rebuild with build-queue.mjs.');
  process.exit(2);
}

const vertical = verticals.find(v => v.id === next.verticalId);
const city     = cities.find(c => c.id === next.cityId);
const topic    = topics.find(t => t.id === next.topicId);

const fill = (tmpl) => tmpl
  .replace(/\{VERTICAL\}/g, vertical.shortLabel)
  .replace(/\{CITY\}/g, city.city)
  .replace(/\{STATE\}/g, city.stateName);

const context = {
  slug: next.slug,
  title: fill(topic.titleTemplate),
  metaDescription: fill(topic.metaDescriptionTemplate),
  primaryKeyword: fill(topic.primaryKeyword),
  angle: topic.angle,
  vertical,
  city,
  topic,
  publishedAt: new Date().toISOString().slice(0, 10),
  recommendedWordCount: 3200,
  outputPath: `public/content/articles/${next.slug}.json`
};

console.log(JSON.stringify(context, null, 2));
