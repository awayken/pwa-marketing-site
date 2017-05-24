var cacheName = 'pwa-marketing-site-6';
var filesToCache = [
    '/',
    '/index.cfm',
    '/index.cfm/',
    '/index.cfm/about',
    '/index.cfm/gallery',
    '/index.cfm/products',
    '/includes/css/bootstrap.min.css',
    '/includes/js/app.js',
    '/includes/js/bootstrap.min.js',
    '/includes/js/jquery.js',
    '/includes/images/ColdBoxLogo2015_300.png',
    '/includes/fonts/glyphicons-halflings-regular.eot',
    '/includes/fonts/glyphicons-halflings-regular.svg',
    '/includes/fonts/glyphicons-halflings-regular.ttf',
    '/includes/fonts/glyphicons-halflings-regular.woff',
    '/includes/fonts/glyphicons-halflings-regular.woff2'
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');

    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);

                    return caches.delete(key);
                }
            }));
        })
    );

    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);

    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
