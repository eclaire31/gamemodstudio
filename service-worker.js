const CACHE_NAME = 'test-cache-v1';
const urlsToCache = ['./nav.html', './Index.html', './style.css', './jeux.html', './membres.html', './archive.html', './nav.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => console.log('Fichier ajouté au cache !'))
      .catch(error => console.error('Erreur :', error))
  );
});
