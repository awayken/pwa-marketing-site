(function() {
    'use strict';

    console.log('It works!');

    var messageForm = document.getElementById('messageform');
    var messageBox = document.getElementById('message');

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../../service-worker.js')
        .then(function() {
            console.log('Service Worker Registered');

            messageForm.addEventListener('submit', sendMessageToServiceWorker);
        });

        function sendMessage(message) {
            return new Promise(function(resolve, reject) {
                var messageChannel = new MessageChannel();

                messageChannel.port1.onmessage = function(event) {
                    if (event.data.error) {
                        reject(event.data.error);
                    } else {
                        resolve(event.data);
                    }
                };

                navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
            });
        }

        var sendMessageToServiceWorker = function(e) {
            e.preventDefault();
            var message = messageBox.value;
            console.log('Message to send:', message);
            sendMessage( message );
        };
    }
})();
