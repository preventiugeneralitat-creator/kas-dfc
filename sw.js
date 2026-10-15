const CACHE_NAME = 'kas-dfc-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Petición directa a la red para garantizar datos siempre actualizados
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});