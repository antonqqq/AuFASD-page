'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "774f4a0e2e2d010c902786579ad14e0f",
".git/config": "fa4e655f19e6eb6093d0ba79bc467f7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e5dd52a34ea1f918c3386686498d9e84",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ab0d4f700596933ef8ab9e1003d77b51",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5cd3145c9eaadea1b3f03db14d317fc3",
".git/logs/refs/heads/main": "7e50da0fbe6ca641d6c7937dd0f75e6d",
".git/logs/refs/remotes/origin/main": "b6d879102a41b165c8087909ca07d6b1",
".git/objects/05/035a06b7995571d0aca622c4f54fc137c07229": "447794e46ab24dec135872ca0b0458eb",
".git/objects/07/444cc25fce4730f86261617a9d6495ea621eb1": "1146fb85502325be1a43fff2eafb5ff6",
".git/objects/0a/297266f08965a8a902e80c3cdfa70832299c5e": "a1de474e106ba21910720b748cf90200",
".git/objects/0d/220a981b60673f42c2e107163f4759509c8e55": "e2ab95ebbc5b5159c506f16126715dfc",
".git/objects/17/2b99b60ade93c0aeb1e2c5d19c9e6aa045d429": "c629dbba256ffa3d964f6383e66c56b0",
".git/objects/18/1a06cceedac15ec83f79b57cd79263940855a7": "342d179abdd5e96c2d286a837091b3d3",
".git/objects/1f/892eef067129f0023bc92a0d5fd14ff4d88cee": "2057c2fd9a0bd94dcf5232af96111654",
".git/objects/22/8c21c7e54f92140c26f8d49745e438756dc578": "038d12cce19f641d5bfb71cb8c2a09cf",
".git/objects/26/519e807114db0de9a4761e0bc0a52f7d31c317": "64d66c77f7d7c124f4363ecb3622136b",
".git/objects/2d/dcb9af1c79997ee8798107f36c7629c27d8551": "38ea8f9560fa4e5866677755c57f0082",
".git/objects/31/7862dee968970118c5ab8bb1a7d6b5367e3598": "9346249dae6b1c270194175553e53287",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/7c7a981314895c3a42b546424d1961903de368": "2f47369c37c2be0944ddcde90a45fc3e",
".git/objects/42/77b72d9968b75270e58ceff90ab103dee04ce0": "ff85efc4e64f315307e24b4d5d0c09f6",
".git/objects/43/ab07eb9fb9072459f02e66709eb6b670071864": "76aba07a7b7fec04b48ad9419e8e34b1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/9c2f6232ead5a23944ec83bbf0a65c08fe70b8": "21791b0ecbbd4c881fe8a1cee8c5a1e1",
".git/objects/4c/5f4ca16dcb46d24b759e5e5b3c49516900f870": "d31552642f46df1199eff545e56f5332",
".git/objects/53/e59e3cd212b3143d741ea3bbf4c212a30c8740": "27dc729543a3f4afd073ce878af6604f",
".git/objects/58/0ee2fde9e6789b3c16c8d2f55c71b9cf6058dc": "73c987ccd9ca1db17c9e8a39a766ac03",
".git/objects/61/27ead1de215a99295de1e84f0a625449b04b6b": "593be06f609828ac9da81a3fcf971db3",
".git/objects/65/c76ee7200ec330eeeeda2f76878dea8353c608": "21184f3107e3eb13815492208ea2a6e0",
".git/objects/66/2b31d692328d32474eedd32a02651289532063": "d69983b76052996f2bd912b47e68f043",
".git/objects/73/b513b75fea1c3c6ee53f13d12004484085d501": "1186ad350964548f995a61b958a834dc",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/7967fbcd98d0c6d8b3171919b86b2bf733d81f": "60ec1eae3574fc62d1d185c5dabb8704",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1cd2e290afafb3072d15f0171bb3dd75f93dc2": "d2b316662a4578c629ceec6d54c9428e",
".git/objects/8c/60c5d857353d05ab6ccf68f171c55ed6460472": "5c764f00682207b241cef9efe4f6d901",
".git/objects/93/3a5aa5d6e4017f64b4e24628dc281662d5a5f4": "eb95e5fa31eae72cb0c68a7b6b5cf582",
".git/objects/9d/8f9af74d92fec9948f092892852d00a54593c2": "d97bfd2d6fde7ac26a16f8378ad733bf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/caa4dd41ac4d4c692bf2883e7f7364fc346951": "9dd866b180e23d8c5dd593a494d86bfb",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/ea30fc0972b4ae5f2a1b3f57c06c1695330d03": "97c01d3bfb076c7efe4b548c2b821916",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/10d0110885aa4787dd84f9e67b78498b9ddb04": "01b05176d188a5949d5314aa915d534a",
".git/objects/b1/8005c0ef4f4797e49b906e681361e52e541862": "80934a0f660175a9f893017d55e42b0c",
".git/objects/b5/d45b6a1da70605cb35531b4c82a63aa8c8f457": "ef295866319194519fc34ebd44179e11",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/7be5e2613ff4baab9895bb8584636d0000c924": "3c6e4ba0c61b0c434e5b032ecca13b2f",
".git/objects/bf/469e21407060eb75839e481173adfc4b96a195": "ac50d3d47f81cf9b39d7b40ccf176ed6",
".git/objects/cc/49a71c331769e8158882f42d8ed689042e01b1": "ba539dbb5e5f7a6cec5f4487f74f2ef8",
".git/objects/d2/25cf78b670bdd3acc3250128b52aef11315def": "4038035f44cb71248b37bed944f3fa6a",
".git/objects/d2/a5ff6574492073743eb4d3cf2607da3551fdcd": "993172e280dd5c072fd7a0aead66a083",
".git/objects/d3/0bffc9a26fdaff6483630fb68a5be524fc39d5": "ba96743a26f5b5f0c514f97ea627358a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/4f6fb2bff23960faec9d3951d21eaa17eaa313": "8cd65321da3457849dd9e5a05a6b71bd",
".git/objects/dd/0799ac5c1c34c00abfc6469e7f7858bbebbbe6": "5d4cd49d48d10441a1795ee2a4f3145b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ea/cfad407f70914d6f7f66531c77c5ac2b753731": "13fd69333e793ae5cc171f8a1e2e061d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/db4ad4cd24ae1cc7f9de680a65728cbe5f3f9b": "b86759a0ba6b9afea567c8385eeb5ba8",
".git/objects/f1/fbdc47e49316a9cf8208fd423fe3fb8a97ffe7": "c1e085858ba619cab1489bc134b6f904",
".git/objects/f9/5e9ef20b54d05c676e6c258ef3dad122da12cf": "1dccaf8cf789493c2cb9c6488526cc1a",
".git/objects/fc/92b9ba0e1dd72ae539efeda8e2c2d6fc384699": "c6f9ec4b49fad56b3a749feb472a99ee",
".git/objects/fc/cdfc960c3418692924ce9bd3a4a1a0572b7117": "abec0ff8414a3f49b997043c3cf42f94",
".git/objects/fd/eb5c277b3d68279620f9f78b68dc2caac6e909": "d8ed0b8db078c2f7f296ef38ccf6e052",
".git/ORIG_HEAD": "d2d6c383122e742a0ac1a537cd35d8e4",
".git/refs/heads/main": "567c5ec555fea9189ea4a73ac0238cad",
".git/refs/remotes/origin/main": "567c5ec555fea9189ea4a73ac0238cad",
"assets/AssetManifest.json": "aa91a1b42d03e883b58776f7e3cca7dc",
"assets/assets/2.jpeg": "96102efd32bc71966cbf0754560d9fa4",
"assets/assets/a.png": "d549be412d4a5b7d1624c69725c6ac70",
"assets/assets/b.png": "c3670daa24326b34d43633ac5250b6dd",
"assets/assets/guide.png": "bc5ec91a0a598573f11977dfd2cadb59",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "5f323727af07188e85a0f2e74479b05b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "e1fe2bc2b3455994b19151eb64383c0a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "09095c018920135c795b72a4250ac225",
"/": "09095c018920135c795b72a4250ac225",
"main.dart.js": "ae4c06b25280eefd951449bc3ee5c8bf",
"manifest.json": "1ea3af58372fb635ec268d4779abf599",
"server.txt": "693fcce21138538ff0d36fd6d81ee86a",
"version.json": "74c4c5a96cf403e943afac6a506de195"
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
