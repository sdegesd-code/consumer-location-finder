self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // This minimal fetch listener is strictly required by Chrome to trigger the install prompt.
});
