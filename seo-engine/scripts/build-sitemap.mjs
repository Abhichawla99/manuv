#!/usr/bin/env node
// Rebuilds /public/sitemap.xml from the static page list + published articles.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const PUBLIC = path.join(ROOT, 'public');
const SITE = 'https://manuv.co';

const staticUrls = [
  '/', '/services', '/work', '/case-studies', '/about', '/contact', '/assessment'
];
const published = JSON.parse(fs.readFileSync(path.join(ROOT, 'seo-engine', 'data', 'published.json'), 'utf8')).articles;
const articleUrls = published.map(a => `/resources/${a.slug}`);

const today = new Date().toISOString().slice(0, 10);
const urls = [...staticUrls.map(u => ({ loc: u, priority: u === '/' ? '1.0' : '0.8', changefreq: 'weekly' })),
              ...articleUrls.map(u => ({ loc: u, priority: '0.7', changefreq: 'monthly' }))];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(u => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), xml);
console.log(`Wrote sitemap with ${urls.length} URLs (${articleUrls.length} articles).`);
