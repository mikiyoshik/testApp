'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5991d02d78fbeae4dc969588f54809d7",
"index.html": "a87f4807e87c8bbc96558fa7e7526e30",
"/": "a87f4807e87c8bbc96558fa7e7526e30",
"main.dart.js": "35d23290621210febe5f18ba09d0cf0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2ba8fe784cfb6c1c1f7260ac6dbeb950",
"assets/AssetManifest.json": "e7e2331842750b38c9a836877b6a8c4e",
"assets/NOTICES": "1c2658e0df82464a713519979b53b5a4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/playList_header.jpg": "17141eee5f1d4d221b8f652f92080da0",
"assets/assets/Radio/Layer%25201686%2520copy.png": "146b14e9cd4cd41a54c52eaa6fa3f1a7",
"assets/assets/Radio/Layer%25201694-1.png": "6e64c8a0d67dc2da1f67477aedec1ac5",
"assets/assets/Radio/Layer%25201694.png": "bfde01350144380ac3c682010c7d651a",
"assets/assets/payment%2520successful.png": "388c699e721ec826546ca38a11a273c0",
"assets/assets/app_icon.png": "1f1de6e356bc74fb7576a816b164859c",
"assets/assets/album%2520cover/Layer%2520943ee.png": "4deeac434f159faf61cad5739b635e49",
"assets/assets/album%2520cover/Layer%25201097.jpg": "c3c3de3d4a9cd848a91f75d23c9553aa",
"assets/assets/album%2520cover/Layer%2520922.png": "c96177f01c0a6e534605f80cee236a9f",
"assets/assets/album%2520cover/album%2520bg.png": "5868a144997dfd92a71b31c7d3ebb391",
"assets/assets/album%2520cover/Layer%2520942.png": "b2fb9caa97449b863a0d1448ef3f8456",
"assets/assets/album%2520cover/Layer%2520943.png": "3b8f63dc313ac5182b95b97e77b84475",
"assets/assets/ic_ggl.png": "6c1540a99b71d6e2f030c40abaf825b7",
"assets/assets/subscribebg.png": "51809c4ea2608ffa26b1045a5a362e5d",
"assets/assets/splash.png": "88ca40bd5d9c75073711d146f2e88d2b",
"assets/assets/logo.png": "f292c725b2272643bacf1869ca567cda",
"assets/assets/ic_fb.png": "089ba8d8429c71c19518bc4957f017cb",
"assets/assets/Payment%2520failed.png": "e60b81e0b5c7a67eb815a532bd63dde8",
"assets/assets/Avatars/Layer%25201174.png": "f72ff69cde006caf2e7868b852be504d",
"assets/assets/Avatars/Layer%25201171.png": "a6526ce72306893be86fa148f25fd0e7",
"assets/assets/Avatars/Layer%25201170.png": "36a69fa0c4c410d5f744ac7180e2ddb0",
"assets/assets/Avatars/Layer%25201169-1.png": "6ed2093735f7d6e488cb424280bcc839",
"assets/assets/Avatars/stories/Layer%2520579.png": "c5731090c03e5e35a3c8e983d3620704",
"assets/assets/Avatars/stories/Layer%2520579-1.png": "8c6429751bf2b1625e417c60e9fb3630",
"assets/assets/Avatars/stories/Layer%2520576.png": "32640bbaa48201a293354901ba23800a",
"assets/assets/Avatars/stories/Layer%2520575.png": "c4f51fe1e995a156f57591c40f81180c",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520948.png": "c8004d7a176715cb5dfb0970ad4048dd",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520949.png": "a8b563a8ccf614ddbafaa01ee34c0504",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520946.png": "5cc0d28d25329cff81106d30cca72db9",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520941.png": "3b2c01f5863065887b14cf8e6279f208",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520942.png": "b8a96265113fbc3cff166dd6b4f3357e",
"assets/assets/Avatars/stories/New%2520folder/album%2520cover/Layer%2520943.png": "25a808d168c0777a3db64219fc7601aa",
"assets/assets/Avatars/Change%2520pic%2520copy.png": "240178fbd6df47d03344ebfc732dae83",
"assets/assets/Avatars/Layer%25201169.png": "5c89540448f8cfa245bd7091286dd6a2",
"assets/assets/Banner/banner%25202.png": "2b1319ddcbb912d8ab34c27b9f23199f",
"assets/assets/Banner/banner%25201.png": "aaf3245938a9f09a719fc0272f700e6a",
"assets/assets/bg.png": "d667ad56f4cefd3abe5ff0ddff491ac2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
