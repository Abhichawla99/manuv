#!/usr/bin/env node
// Commits and pushes all SEO engine changes using GITHUB_TOKEN.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');

let token = process.env.GITHUB_TOKEN || process.env.MANUV_GH_TOKEN;
if (!token) {
  const envPath = path.join(ROOT, '.env');
  if (fs.existsSync(envPath)) {
    const env = fs.readFileSync(envPath, 'utf8');
    const m = env.match(/(?:GITHUB_TOKEN|MANUV_GH_TOKEN)\s*=\s*(.+)/);
    if (m) token = m[1].trim().replace(/^["']|["']$/g, '');
  }
}
if (!token) {
  console.error('No GITHUB_TOKEN found in env or .env');
  process.exit(1);
}

const slug = process.argv[2] || 'daily-seo-update';
const today = new Date().toISOString().slice(0, 10);
const message = `seo: ${slug} (${today})`;

const sh = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: ROOT });
const shq = (cmd) => execSync(cmd, { stdio: 'pipe', cwd: ROOT }).toString();

async function main() {
  sh('git config user.email "seo-bot@manuv.co"');
  sh('git config user.name "manuv SEO bot"');
  sh('git add -A');
  const staged = shq('git diff --cached --name-only').trim();
  if (!staged) {
    console.log('Nothing to commit.');
    return;
  }
  sh(`git commit -m "${message}"`);
  const remote = `https://x-access-token:${token}@github.com/Abhichawla99/manuv.git`;
  sh(`git remote set-url origin "${remote}"`);
  sh('git push origin HEAD:main');
  sh('git remote set-url origin https://github.com/Abhichawla99/manuv.git');
  console.log(`Pushed: ${message}`);
}

main().catch(e => { console.error('Push failed:', e.message); process.exit(1); });
