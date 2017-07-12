var cacheName = 'pwa-marketing-site-10';
var imageCacheName = 'flickr-5';
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
                if (key !== cacheName && key !== imageCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);

                    return caches.delete(key);
                }
            }));
        })
    );

    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    var requestURL = e.request.url;

    e.respondWith(
        caches.match(e.request).then(function(response) {
            // If we found our response in cache, return it
            if (response) {
                console.log('[Service Worker] Fetch', requestURL, 'from cache.');

                return response;
            }

            // Clone our request before we consume it
            var requestClone = e.request.clone();

            // Fetch the request
            return fetch(e.request).then(function(response) {
                // If the response is valid and from Flickr
                if (response && requestURL.indexOf('flickr') > -1) {
                    // Clone our response before we consume it
                    var responseClone = response.clone();

                    // Open our image cache
                    caches.open(imageCacheName).then(function(cache) {
                        // Cache the response for the request
                        cache.put(requestClone, responseClone);
                    });
                }

                console.log('[Service Worker] Fetch', requestURL, 'from network.');

                // Return the response
                return response;
            });
        })
    );
});
