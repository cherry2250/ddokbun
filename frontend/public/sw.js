if (!self.define) {
  let e,
    s = {};
  const c = (c, a) => (
    (c = new URL(c + ".js", a).href),
    s[c] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const d = e => c(e, n),
      r = { module: { uri: n }, exports: t, require: d };
    s[n] = Promise.all(a.map(e => r[e] || d(e))).then(e => (i(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/LKI1pQA4PYSj_mC9PZZRP/_buildManifest.js",
          revision: "1e7c073af5dfe53224246edc8e5184ff",
        },
        {
          url: "/_next/static/LKI1pQA4PYSj_mC9PZZRP/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/1123-7237abda2e391639.js",
          revision: "7237abda2e391639",
        },
        {
          url: "/_next/static/chunks/1585.f9580099bb281324.js",
          revision: "f9580099bb281324",
        },
        {
          url: "/_next/static/chunks/1876-583cc298beb74739.js",
          revision: "583cc298beb74739",
        },
        {
          url: "/_next/static/chunks/2489-493fd8a52f68976f.js",
          revision: "493fd8a52f68976f",
        },
        {
          url: "/_next/static/chunks/2739-0e93d1e7f6c6870b.js",
          revision: "0e93d1e7f6c6870b",
        },
        {
          url: "/_next/static/chunks/2741.734764f66d43e501.js",
          revision: "734764f66d43e501",
        },
        {
          url: "/_next/static/chunks/3253-2e8e37117a00dacc.js",
          revision: "2e8e37117a00dacc",
        },
        {
          url: "/_next/static/chunks/3698.4dc16663bca496a2.js",
          revision: "4dc16663bca496a2",
        },
        {
          url: "/_next/static/chunks/3fff1979-bb37b24d4da1c9a4.js",
          revision: "bb37b24d4da1c9a4",
        },
        {
          url: "/_next/static/chunks/4544-0e9a735ab5f6b402.js",
          revision: "0e9a735ab5f6b402",
        },
        {
          url: "/_next/static/chunks/6833-63e757afa9f4b123.js",
          revision: "63e757afa9f4b123",
        },
        {
          url: "/_next/static/chunks/6859-29acce5db18d878a.js",
          revision: "29acce5db18d878a",
        },
        {
          url: "/_next/static/chunks/7129.98cff297729ba001.js",
          revision: "98cff297729ba001",
        },
        {
          url: "/_next/static/chunks/7405-42d0f72c6fe583c5.js",
          revision: "42d0f72c6fe583c5",
        },
        {
          url: "/_next/static/chunks/8023-32fa7e1e3e23c144.js",
          revision: "32fa7e1e3e23c144",
        },
        {
          url: "/_next/static/chunks/8570-2c6322938441b091.js",
          revision: "2c6322938441b091",
        },
        {
          url: "/_next/static/chunks/8589-d407ce90e6ff34d1.js",
          revision: "d407ce90e6ff34d1",
        },
        {
          url: "/_next/static/chunks/8811-4d3ecfe2f8c0180a.js",
          revision: "4d3ecfe2f8c0180a",
        },
        {
          url: "/_next/static/chunks/9376-8b19c5b5a5e51ca9.js",
          revision: "8b19c5b5a5e51ca9",
        },
        {
          url: "/_next/static/chunks/9552-73a6bd88dde722ef.js",
          revision: "73a6bd88dde722ef",
        },
        {
          url: "/_next/static/chunks/9651.f273097d59decf3d.js",
          revision: "f273097d59decf3d",
        },
        {
          url: "/_next/static/chunks/c16184b3-84598d65ced9e4c3.js",
          revision: "84598d65ced9e4c3",
        },
        {
          url: "/_next/static/chunks/fb7d5399-3fe2fdd15208259d.js",
          revision: "3fe2fdd15208259d",
        },
        {
          url: "/_next/static/chunks/framework-d51ece3d757c7ed2.js",
          revision: "d51ece3d757c7ed2",
        },
        {
          url: "/_next/static/chunks/main-7635c2bc71cd2946.js",
          revision: "7635c2bc71cd2946",
        },
        {
          url: "/_next/static/chunks/pages/_app-4d5337222cf60769.js",
          revision: "4d5337222cf60769",
        },
        {
          url: "/_next/static/chunks/pages/_error-da349fa2dbc03188.js",
          revision: "da349fa2dbc03188",
        },
        {
          url: "/_next/static/chunks/pages/admin-7e261575f11d1264.js",
          revision: "7e261575f11d1264",
        },
        {
          url: "/_next/static/chunks/pages/admin/commerce-2f468d96d5dcfafe.js",
          revision: "2f468d96d5dcfafe",
        },
        {
          url: "/_next/static/chunks/pages/admin/product-183e335c4cb4a610.js",
          revision: "183e335c4cb4a610",
        },
        {
          url: "/_next/static/chunks/pages/admin/product/register-0c063732bd7ebe0a.js",
          revision: "0c063732bd7ebe0a",
        },
        {
          url: "/_next/static/chunks/pages/admin/user-a830fba76a94d2df.js",
          revision: "a830fba76a94d2df",
        },
        {
          url: "/_next/static/chunks/pages/commerce-22a2626b62b12434.js",
          revision: "22a2626b62b12434",
        },
        {
          url: "/_next/static/chunks/pages/commerce/cart-812721171b59719e.js",
          revision: "812721171b59719e",
        },
        {
          url: "/_next/static/chunks/pages/commerce/list/%5Bparams%5D-34df10d5c2549752.js",
          revision: "34df10d5c2549752",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/cancled-939a09b6f88796c5.js",
          revision: "939a09b6f88796c5",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/complete-e813a8f745c98fd9.js",
          revision: "e813a8f745c98fd9",
        },
        {
          url: "/_next/static/chunks/pages/commerce/order/order-form-ef75ad3b9dedf5d9.js",
          revision: "ef75ad3b9dedf5d9",
        },
        {
          url: "/_next/static/chunks/pages/commerce/product/%5Bproductid%5D-f55d7f4166ad9c6c.js",
          revision: "f55d7f4166ad9c6c",
        },
        {
          url: "/_next/static/chunks/pages/commerce/survey-39eddaab17e4ed14.js",
          revision: "39eddaab17e4ed14",
        },
        {
          url: "/_next/static/chunks/pages/index-5d1636bf8883c717.js",
          revision: "5d1636bf8883c717",
        },
        {
          url: "/_next/static/chunks/pages/login/google-092b74c5afa8ed24.js",
          revision: "092b74c5afa8ed24",
        },
        {
          url: "/_next/static/chunks/pages/login/kakao-bed7855124a3f2eb.js",
          revision: "bed7855124a3f2eb",
        },
        {
          url: "/_next/static/chunks/pages/manage/%5Buserseq%5D-3fff040ba382c445.js",
          revision: "3fff040ba382c445",
        },
        {
          url: "/_next/static/chunks/pages/manage/add-4ae6f1003ee29bf9.js",
          revision: "4ae6f1003ee29bf9",
        },
        {
          url: "/_next/static/chunks/pages/manage/add/search-7f58e9668ec185d1.js",
          revision: "7f58e9668ec185d1",
        },
        {
          url: "/_next/static/chunks/pages/manage/myplant/%5Bpotseq%5D-59616b0fffd0aa5f.js",
          revision: "59616b0fffd0aa5f",
        },
        {
          url: "/_next/static/chunks/pages/mypage/%5Buserseq%5D-c98282386ae89a96.js",
          revision: "c98282386ae89a96",
        },
        {
          url: "/_next/static/chunks/pages/offline-4cd6d8db60504012.js",
          revision: "4cd6d8db60504012",
        },
        {
          url: "/_next/static/chunks/pages/search-5d7dc30af4d94cc6.js",
          revision: "5d7dc30af4d94cc6",
        },
        {
          url: "/_next/static/chunks/pages/search/camera-fe3d38822d2b9771.js",
          revision: "fe3d38822d2b9771",
        },
        {
          url: "/_next/static/chunks/pages/temp-e7f7e45d3bd66e72.js",
          revision: "e7f7e45d3bd66e72",
        },
        {
          url: "/_next/static/chunks/pages/test-59cfc02d0b25fc29.js",
          revision: "59cfc02d0b25fc29",
        },
        {
          url: "/_next/static/chunks/pages/welcome-dab44b5f568d3e33.js",
          revision: "dab44b5f568d3e33",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-189bb74767f58012.js",
          revision: "189bb74767f58012",
        },
        {
          url: "/_next/static/css/2220c5d31dbaf048.css",
          revision: "2220c5d31dbaf048",
        },
        {
          url: "/_next/static/css/f1d5a30b5a4d1378.css",
          revision: "f1d5a30b5a4d1378",
        },
        {
          url: "/_next/static/css/f8aee2f66a30e49b.css",
          revision: "f8aee2f66a30e49b",
        },
        {
          url: "/_next/static/media/KOTRA_SONGEULSSI.4a55bbc0.ttf",
          revision: "4a55bbc0",
        },
        {
          url: "/_next/static/media/calander.bde8ef0c.png",
          revision: "91ed21e692edb0e38ef3792cd4895d7f",
        },
        {
          url: "/_next/static/media/googleLogin.81810f80.png",
          revision: "cf0304e47a43639a964b4c4fb559fd2f",
        },
        {
          url: "/_next/static/media/humid.1353c34d.png",
          revision: "ef26c4cb6486888b440839927435d325",
        },
        {
          url: "/_next/static/media/humidity.ea26d183.png",
          revision: "d9247f80eea861bd7360e168c8a5c52c",
        },
        {
          url: "/_next/static/media/illuminance.d8dd4a28.png",
          revision: "218b09f2652470c06c7b15b0a73ddaf3",
        },
        {
          url: "/_next/static/media/kakaoLogin.0e0e069d.png",
          revision: "b2df8abced56e0bbd49f7878a411e9c0",
        },
        {
          url: "/_next/static/media/mainImg.63ffc221.jpg",
          revision: "c4dac5fccec3d69162c2798d903db90b",
        },
        {
          url: "/_next/static/media/plant1.70242e1d.jpg",
          revision: "05cc8d10cdad9eb7cfac2595c25f82c3",
        },
        {
          url: "/_next/static/media/smartpot.c9097ee1.jpg",
          revision: "b79ee4d721fe11caeeaab988f6b3f64c",
        },
        {
          url: "/_next/static/media/soil.259a18bf.png",
          revision: "c5aa7422c03b9bf50e4342023e817c1d",
        },
        {
          url: "/_next/static/media/starter.2f1127ea.jpg",
          revision: "ee608d611058dfd39a64bea19d18ee62",
        },
        {
          url: "/_next/static/media/temp.eaf47b1e.jpg",
          revision: "5504d8dadd0ac13f1f6aabcc6ab074df",
        },
        {
          url: "/_next/static/media/temp2.abfd095e.png",
          revision: "9ee80cdace0570554d0f3d069091da9e",
        },
        {
          url: "/_next/static/media/tempAdvice01.60e02d9e.jpg",
          revision: "ef72611a545224d548e726dc4272b9c8",
        },
        {
          url: "/_next/static/media/tempRecommend01.369cb9f9.jpg",
          revision: "916463a9cbf9e27c435880f6f1660e99",
        },
        {
          url: "/_next/static/media/tempRecommend02.45b82b14.jpg",
          revision: "dad074aa2b60307154df02414613710c",
        },
        {
          url: "/_next/static/media/tempRecommend03.99ba5747.jpg",
          revision: "ebb30e0d14f121afed0857ac6164d3ae",
        },
        {
          url: "/_next/static/media/tempRecommend04.ec3a7288.jpg",
          revision: "a61713b8da3343d830e316d813a0bb91",
        },
        {
          url: "/_next/static/media/tempSearch01.59ad8604.jpg",
          revision: "26a84aeb4f9c2bf56ca3622acaebde9e",
        },
        {
          url: "/_next/static/media/tempSearch02.0bb7884d.jpg",
          revision: "33f9cc31891eadc1ca10282760233aea",
        },
        {
          url: "/_next/static/media/tempSmartPot.74f50956.jpg",
          revision: "5c84f6268227493c2801c74b3b09a311",
        },
        {
          url: "/_next/static/media/tempSmartPot02.c3b9d3f8.jpg",
          revision: "52fb162c9a66c5ce5d9b41b079186354",
        },
        {
          url: "/_next/static/media/tempSmartPot03.9540c898.jpg",
          revision: "a999e5a2647f07f432bdd634699d2c50",
        },
        {
          url: "/_next/static/media/temper.f0e8c87a.png",
          revision: "bd36ddc4b757e7baa672661e2640efb8",
        },
        {
          url: "/_next/static/media/temperature.fc910988.png",
          revision: "764b43fe4083e282cb7347faa76bd78a",
        },
        {
          url: "/_next/static/media/water.4c07f191.png",
          revision: "9cdabba63c1bf11bb1b54e0b146bf1cf",
        },
        {
          url: "/_next/static/media/waterbottle.25e4f84f.png",
          revision: "ac3e76d2d1b091c6836e569618726972",
        },
        {
          url: "/_next/static/media/김포평화B.a2badafc.ttf",
          revision: "a2badafc",
        },
        {
          url: "/background.hdr",
          revision: "7ff4d46b6876cf990c60865900dd9437",
        },
        { url: "/color.jpg", revision: "5f0cf4defd6f6a3ece641281f631a499" },
        { url: "/disp.png", revision: "6982709bfd213dd370329dac67f22598" },
        { url: "/favicon.ico", revision: "9f656ee89db90bea3c81fee0e6902da7" },
        {
          url: "/firebase-messaging-sw.js",
          revision: "cb85bc8d08fbb77dc3f4d06aa7b34a10",
        },
        { url: "/icon.png", revision: "2a13a7a6acd7e37856c423254beebef8" },
        {
          url: "/icons/icon-128x128.png",
          revision: "096e74c01fe0f495d6bda7d2d7542183",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "821e9213687b679f1f24b1d0f8025ff7",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "29741634752b5c7cd053cd25fe6088c9",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "3034c3944deb8205427304f51430c8ed",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "0b16376d1cfd03727465eee7fdeb9f86",
        },
        {
          url: "/icons/icon-48x48.png",
          revision: "2a13a7a6acd7e37856c423254beebef8",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "0fc31447997f8807ba4f2f0fa9e9b259",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "8e013b6e7a57f5b4e28232397c6b82b6",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "c1f21b829b154ca1a554150c13c455cc",
        },
        { url: "/manifest.json", revision: "45d6bd97adb5325fe973bb0dee629b97" },
        {
          url: "/models/model-transformed.glb",
          revision: "5023c9965437ccc0fc62e6e6b02c0b4d",
        },
        {
          url: "/models/model.glb",
          revision: "c135ba0b8a515404400cf24aad1fb886",
        },
        { url: "/normal.jpg", revision: "0357fa3ffc406161ec16ee9ca666df73" },
        { url: "/roughness.jpg", revision: "08f946ffbaeb16cf92bb7b1725b897fb" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
