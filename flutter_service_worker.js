'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "61de123d5bd4876f60587840e398a903",
"index.html": "0f1d29b5ed483e1775177bdff0b10fcb",
"/": "0f1d29b5ed483e1775177bdff0b10fcb",
"main.dart.js": "3c685d0a84035c41675bc59587a4aa9b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0abe5cbd94929372f2521dff442a6a7a",
"assets/AssetManifest.json": "e517e7bd18f22b7a99282b9a1ffef323",
"assets/NOTICES": "beb8092d209eeddbe3009eff1db7d497",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "c972354017582bad91f12993164ad41c",
"assets/assets/svip_card_back.webp": "55f58f6d4713257f0f996a6d0bc06860",
"assets/assets/b6.webp": "3b48d8058a92d55fb104df7763dad7aa",
"assets/assets/buy_vip_back.webp": "b29f778a2cf0b8b9a371646b2fb3faff",
"assets/assets/sssvip_card.webp": "f9f251f5876bb2b37b9a8683b68beb92",
"assets/assets/cube_left.webp": "2e3455058be70e8878bbd139e8aab919",
"assets/assets/vip/ssvip_%25E6%25B5%25B7%25E7%258B%25AE.webp": "4cff34078fd97643461102318ea9ebd0",
"assets/assets/vip/ssvip_%25E7%25AB%25A0%25E9%25B1%25BC.webp": "96eea34f5761db7a15b3004989b5f6a4",
"assets/assets/vip/ssvip_%25E9%25B2%25A8%25E9%25B1%25BC.webp": "b42db369306822730e0c4b2e906eddb0",
"assets/assets/vip/svip_%25E6%25B2%25B3%25E8%25B1%259A.webp": "055f22132c5fa632445d1537ff564399",
"assets/assets/vip/svip_%25E8%259E%2583%25E8%259F%25B9.webp": "b3119c8c8709b44091a9af40f589c3e5",
"assets/assets/vip/sssvip.webp": "0daa5fbfd11a214703e368a4ecbb875b",
"assets/assets/vip/svip_%25E6%25B5%25B7%25E9%25A9%25AC.webp": "d5c2cfe3d2418098f8aabbc0171e599b",
"assets/assets/vip/svip_%25E6%25B5%25B7%25E6%2598%259F.webp": "03e8faa1ad7520e04f93831a71dec1ba",
"assets/assets/vip/svip_%25E6%25B0%25B4%25E6%25AF%258D.webp": "f46430a465f4542702fb4710be3b0aaf",
"assets/assets/vip/svip_%25E5%25B0%258F%25E9%25BB%2584%25E9%25B1%25BC.webp": "ea3f4d112a94db921d9fe660499c9036",
"assets/assets/vip/svip_%25E7%2581%25AF%25E7%25AC%25BC%25E9%25B1%25BC.webp": "986202e672124db51221548579c4d333",
"assets/assets/vip/ssvip_%25E5%2589%2591%25E9%25B2%25A8.webp": "30d1a12810bca89292c8f52b894d321c",
"assets/assets/sssvip_back.webp": "df16855608d1f14a0592bfec4755d328",
"assets/assets/ssvip_card_back.webp": "ac8607cdb7506031fb1c6ca7884bddcd",
"assets/assets/sssvip_id.webp": "619c410b98cfec71dff1372e9caf25b0",
"assets/assets/svip_top.webp": "72309df122445f82a0a8965780f5bf74",
"assets/assets/b1.webp": "807dc5235c61cc8ecb81120cd6ac57e7",
"assets/assets/cube_left_2.webp": "02ebbfe0f6c6270e2bd6a22e4c714479",
"assets/assets/svip_id.webp": "77541990ee93cac0a793ff942c80d39b",
"assets/assets/cube_right.webp": "ce27a4936c06aae9d5cf14bf4c6c48c9",
"assets/assets/sssvip_top.webp": "13523ab77a30e055cf28080f52c18bd5",
"assets/assets/b2.webp": "83177d2d3c44fe1ebc4363468d5ef6be",
"assets/assets/ssvip_back.webp": "6548db8691cfaf5d2a2008c7a03f6bdd",
"assets/assets/ssvip_card.webp": "947e5e5568d47e7a5665a5bdca6df3eb",
"assets/assets/ssvip_id.webp": "e0aeb24b4919a280d3fbec8a2caaee8e",
"assets/assets/b3.webp": "2a02bd468d5e144eb91914e7427c9382",
"assets/assets/b4.webp": "bb09542a2beffb382895c2b6fd0a9e83",
"assets/assets/ssvip_top.webp": "2e1d4024dbd9844aa03aab50b7fd04ea",
"assets/assets/buy_vip_card_top.webp": "78b13486c35770d53470f77a189de5a4",
"assets/assets/svip_back.webp": "6ba87518ef5dcc932714bbc6717574d2",
"assets/assets/svip_card.webp": "8a7898a47ec94860df5df932b8f08df6",
"assets/assets/cube_right_2.webp": "41a5feb633a408414ba8a2632b18e78a",
"assets/assets/b5.webp": "85ed193014fdfbfefabd2ee612efb6a0",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
