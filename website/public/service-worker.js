const CACHE_NAME = "astro-cache-v1";

// Install the ServiceWorker and cache initial resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/", // Cache the root
        "/index.html",
        "/manifest.json",
        "/styles/global.css", // Add your stylesheet
        "/scripts/app.js", // Add your JavaScript file
        // Add other resources you want to cache initially
      ]);
    })
  );
  self.skipWaiting(); // Force the waiting ServiceWorker to become the active one
});

// Activate the ServiceWorker and remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Delete old caches
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of all clients
});

// Fetch event handler
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return; // Only cache GET requests
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // If the cached response exists, check if it's still valid
        return fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return cachedResponse; // Return the cached response if the network fails
            }

            // Update the cache with the new response
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });

            return networkResponse;
          })
          .catch(() => cachedResponse); // If fetch fails, return the cached response
      }

      // If no cache is found, fetch from network
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        // Cache the fetched response
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });

        return networkResponse;
      });
    })
  );
});
