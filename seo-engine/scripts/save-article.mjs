#!/usr/bin/env node
// Records that an article has been published. Updates published.json,
// then rebuilds sitemap + llms.txt + llms-full.txt.
// Usage: node save-article.mjs <slug>
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const DATA = path.join(ROOT, 'seo-engine', 'data');

const slug = process.argv[2];
if (!slug) { console.error('Usage: save-article.mjs <slug>'); process.exit(1); }

const articlePath = path.join(ROOT, 'public', 'content', 'articles', `${slug}.json`);
if (!fs.existsSync(articlePath)) {
  console.error(`Article JSON not found at ${articlePath}`);
  process.exit(1);
}
const article = JSON.parse(fs.readFileSync(articlePath, 'utf8'));

const pubPath = path.join(DATA, 'published.json');
const pub = JSON.parse(fs.readFileSync(pubPath, 'utf8'));

// dedupe
pub.articles = pub.articles.filter(a => a.slug !== slug);
pub.articles.push({
  slug: article.slug,
  title: article.title,
  metaDescription: article.metaDescription,
  publishedAt: article.publishedAt,
  vertical: article.vertical?.id,
  city: article.location?.city,
  state: article.location?.state,
  topic: article.topic?.id,
  wordCount: article.wordCount || 0
});
pub.lastRunAt = new Date().toISOString();
pub.totalPublished = pub.articles.length;
fs.writeFileSync(pubPath, JSON.stringify(pub, null, 2));

// Rebuild dependent files
execSync(`node ${path.join(__dirname, 'build-sitemap.mjs')}`, { stdio: 'inherit' });
execSync(`node ${path.join(__dirname, 'build-llms-txt.mjs')}`, { stdio: 'inherit' });

console.log(`Saved ${slug} - total published: ${pub.totalPublished}`);
