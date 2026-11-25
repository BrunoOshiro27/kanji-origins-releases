const PRECACHE = {"version":"2ca02bea90fc","files":["./","assets/index-fWaH0evk.js","assets/dist-js-C5SpAY-c.js","assets/dist-js-ChFHphKx.js","assets/dist-js-hsueq6O8.js","assets/web-db-yY6_hTbp.js","assets/index-DvxPQpOf.css","assets/sqlite3-k2cTanUO.wasm","assets/sqlite3-opfs-async-proxy-DeAec6oc.js","assets/sqlite3-worker1-DyPUOnjg.js","index.html","kanji.sqlite","favicon.svg","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","manifest.webmanifest"]}
// Service worker da versão web (docs/features/web.md). O web-build-plugin.ts põe
// antes deste código a constante PRECACHE: { version, files } do build.
/* global PRECACHE */

const PREFIX = 'omniji-'
const CACHE = `${PREFIX}${PRECACHE.version}`

// Guarda o app inteiro e o banco na instalação: depois do primeiro acesso, tudo
// funciona offline. Uma versão nova do build vira um cache novo.
// Sem skipWaiting: a versão nova só assume quando nenhuma aba usa a antiga. Assim
// uma página aberta nunca pede arquivos de um build que o cache já apagou.
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE.files)))
})

// Ao assumir, apaga os caches de builds anteriores.
self.addEventListener('activate', (event) => {
  const old = (key) => key.startsWith(PREFIX) && key !== CACHE
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter(old).map((key) => caches.delete(key))))
  )
})

// Primeiro o cache; o que não estiver nele (nada, no build normal) vai à rede.
// Qualquer página do app é o mesmo index.html: as rotas ficam no hash.
// ignoreVary: o script de módulo vai com `Origin`, o guardado no install não, e um
// servidor com `Vary: Origin` faria o cache nunca casar.
async function cached(request) {
  const cache = await caches.open(CACHE)
  const key = request.mode === 'navigate' ? './' : request
  return (await cache.match(key, { ignoreSearch: true, ignoreVary: true })) ?? fetch(request)
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return
  event.respondWith(cached(request))
})
