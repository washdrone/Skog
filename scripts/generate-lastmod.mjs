#!/usr/bin/env node
/**
 * Genererar src/lib/seo/lastmod.json från git-historiken.
 *
 * Varje route mappas till datumet för den senaste commit som faktiskt
 * ändrade sidans källfil. Det gör <lastmod> i sitemap.xml verifierbart
 * korrekt, vilket är Googles krav för att värdet ska användas:
 *
 *   "Google uses the <lastmod> value if it's consistently and verifiably
 *    (for example by comparing to the last modification of the page) accurate."
 *   https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 *
 * Kör efter innehållsändringar:  npm run seo:lastmod
 */

import { execSync } from 'node:child_process'
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const APP_DIR = join(ROOT, 'src/app')
const OUT_FILE = join(ROOT, 'src/lib/seo/lastmod.json')

/** Hittar alla page.tsx rekursivt under src/app. */
function findPages(dir) {
  const found = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      found.push(...findPages(full))
    } else if (entry === 'page.tsx') {
      found.push(full)
    }
  }
  return found
}

/** src/app/tjanster/skogsinventering/page.tsx -> /tjanster/skogsinventering */
function toRoute(file) {
  const rel = relative(APP_DIR, dirname(file)).split(/[\\/]/).join('/')
  return rel === '' || rel === '.' ? '/' : `/${rel}`
}

/** Senaste commit-datum (YYYY-MM-DD) som rörde filen. */
function lastCommitDate(file) {
  const rel = relative(ROOT, file).split(/[\\/]/).join('/')
  const out = execSync(`git log -1 --format=%cs -- "${rel}"`, {
    cwd: ROOT,
    encoding: 'utf8',
  }).trim()
  return out || null
}

const map = {}
const missing = []

for (const file of findPages(APP_DIR).sort()) {
  const route = toRoute(file)
  const date = lastCommitDate(file)
  if (date) {
    map[route] = date
  } else {
    missing.push(route)
  }
}

const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)))

writeFileSync(OUT_FILE, `${JSON.stringify(sorted, null, 2)}\n`, 'utf8')

console.log(`Skrev ${Object.keys(sorted).length} lastmod-datum till ${relative(ROOT, OUT_FILE)}`)
if (missing.length > 0) {
  console.warn(`Saknar git-historik för: ${missing.join(', ')}`)
}
