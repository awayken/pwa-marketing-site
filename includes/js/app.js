(function() {
    'use strict';

    console.log('It works!');

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../../service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');
        });
    }
})();
