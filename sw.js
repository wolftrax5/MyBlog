const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
});
self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== 'GET') return

    // find in cache
    event.respondWith(cachesResponse(request));
    // update cache
    event.waitUntil(updateCache(request));
})
async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/src/index.js',
        '/css/main.css',
        '/assets/fonts/code.svg',
        '/assets/fonts/code_green.svg',
        '/assets/fonts/contact.svg',
        '/assets/fonts/contact_green.svg',
        '/assets/fonts/home.svg',
        '/assets/fonts/home_green.svg',
        '/assets/fonts/linkedin.svg',
        '/assets/fonts/linkedin_green.svg',
        '/assets/fonts/profile.svg',
        '/assets/fonts/profile_green.svg',
        '/assets/fonts/toxic.svg',
        '/assets/fonts/toxic_green.svg',
        '/assets/fonts/twitter.svg',
        '/assets/fonts/twitter_green.svg',
        '/assets/img/completeLogo.png',
        '/assets/img/logo.png',
        '/assets/img/cover.png',
        '/favicon.ico',
    ])
}

async function cachesResponse(request) {
    const cache = await caches.open(VERSION);
    const res = await cache.match(request);
    return res || fetch(request);
}
async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}