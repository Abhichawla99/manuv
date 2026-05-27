#!/usr/bin/env node
// Generates seo-engine/data/queue.json by combining verticals × cities × topics
// then sorting by priority (tier 1 cities first, then interleaved verticals)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(__dirname, '..', 'data');

const verticals = JSON.parse(fs.readFileSync(path.join(DATA, 'verticals.json'), 'utf8')).verticals;
const cities    = JSON.parse(fs.readFileSync(path.join(DATA, 'cities.json'), 'utf8')).cities;
const topics    = JSON.parse(fs.readFileSync(path.join(DATA, 'topics.json'), 'utf8')).topics;
const published = JSON.parse(fs.readFileSync(path.join(DATA, 'published.json'), 'utf8')).articles;
const publishedSlugs = new Set(published.map(a => a.slug));

// Build all combos
const combos = [];
for (const city of cities) {
  for (const vertical of verticals) {
    for (const topic of topics) {
      const slug = `${topic.id}-${vertical.id}-${city.id}`;
      if (publishedSlugs.has(slug)) continue;
      combos.push({
        slug,
        verticalId: vertical.id,
        cityId: city.id,
        topicId: topic.id,
        cityTier: city.tier,
        priorityScore: (4 - city.tier) * 10 + (topic.id === 'ai-agents-implementation' ? 5 : 0)
      });
    }
  }
}

// Interleave so we don't dump 12 topics for one city before moving to the next.
// Sort by (tier desc, then round-robin city, then vertical, then topic)
combos.sort((a, b) => {
  if (a.cityTier !== b.cityTier) return a.cityTier - b.cityTier;
  if (a.cityId   !== b.cityId)   return a.cityId.localeCompare(b.cityId);
  // First pass: topic 0 across all verticals for this city, then topic 1, ...
  const topicAIdx = topics.findIndex(t => t.id === a.topicId);
  const topicBIdx = topics.findIndex(t => t.id === b.topicId);
  if (topicAIdx !== topicBIdx) return topicAIdx - topicBIdx;
  const vertAIdx = verticals.findIndex(v => v.id === a.verticalId);
  const vertBIdx = verticals.findIndex(v => v.id === b.verticalId);
  return vertAIdx - vertBIdx;
});

// Round-robin across cities so we cover breadth quickly
const byCity = new Map();
for (const c of combos) {
  if (!byCity.has(c.cityId)) byCity.set(c.cityId, []);
  byCity.get(c.cityId).push(c);
}
const cityOrder = [...cities].sort((a, b) => a.tier - b.tier).map(c => c.id);
const interleaved = [];
let added = true;
let i = 0;
while (added) {
  added = false;
  for (const cityId of cityOrder) {
    const list = byCity.get(cityId);
    if (list && list[i]) {
      interleaved.push(list[i]);
      added = true;
    }
  }
  i++;
}

const queue = {
  generatedAt: new Date().toISOString(),
  totalItems: interleaved.length,
  items: interleaved
};

fs.writeFileSync(path.join(DATA, 'queue.json'), JSON.stringify(queue, null, 2));
console.log(`Built queue with ${interleaved.length} items.`);
console.log(`First 5:`);
interleaved.slice(0, 5).forEach((c, idx) => console.log(`  ${idx + 1}. ${c.slug}`));
