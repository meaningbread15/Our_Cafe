const CACHE_NAME = "DiyasCafe-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./coffee.jpg",
  "./coffee-dark.png",
  "./frame.png",

  "./sounds/cafe-ambiance.mp3",
  "./sounds/lofi-1.mp3",
  "./sounds/lofi-2.mp3",
  "./sounds/lofi-3.mp3",
  "./sounds/rain.mp3",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE)),
  );
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
