self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shift-finance-store').then((cache) => cache.addAll([
      './index.html',
      'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
