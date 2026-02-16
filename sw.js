const CACHE_NAME = "DiyasCafe";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./coffee.jpg",
  "./coffee-dark.png",
  "./frame.png",
  "./sounds/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
