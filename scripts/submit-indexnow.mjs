#!/usr/bin/env node
/**
 * Anmäler samtliga sitemap-URL:er till IndexNow (Bing, Yandex, Seznam m.fl.).
 *
 * IndexNow når INTE Google — Googles indexering begärs manuellt i Search
 * Console. Bing-indexet används dock av bl.a. ChatGPT och DuckDuckGo,
 * vilket gör detta viktigt för AI-synlighet.
 *
 * Körs EFTER deploy (nyckelfilen i public/ måste vara live):
 *   npm run seo:indexnow
 */

const HOST = 'www.timberdrone.se'
const KEY = 'a3b30418123e6c1c425ca77cd2bffece'

const sitemapUrl = `https://${HOST}/sitemap.xml`

const res = await fetch(sitemapUrl)
if (!res.ok) {
  console.error(`Kunde inte hämta ${sitemapUrl}: ${res.status}`)
  process.exit(1)
}
const xml = await res.text()
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
if (urls.length === 0) {
  console.error('Inga URL:er hittades i sitemapen')
  process.exit(1)
}

const keyUrl = `https://${HOST}/${KEY}.txt`
const keyRes = await fetch(keyUrl)
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`Nyckelfilen ${keyUrl} är inte live ännu — deploya först.`)
  process.exit(1)
}

const submit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: keyUrl,
    urlList: urls,
  }),
})

console.log(`Skickade ${urls.length} URL:er till IndexNow — svar: ${submit.status}`)
if (!submit.ok) {
  console.error(await submit.text())
  process.exit(1)
}
