importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );
console.log("entereddd");

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "c2ee4bd463b2d6fef5fe32799173accb"
  },
  {
    "url": "main.js",
    "revision": "0f55b7ddb5da47bd3758ae52b5763461"
  }
]);