importScripts('/static/js/workbox-sw.prod.v2.1.3.js');/**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author Xiaoliu(xiaoliu@xiaoliublog.cn)
 */

/* globals WorkboxSW */

const workboxSW = new WorkboxSW({
    cacheId: 'lavas-cache',
    ignoreUrlParametersMatching: [/^utm_/],
    skipWaiting: true,
    clientsClaim: true
});

// Define precache injection point.
workboxSW.precache([
  {
    "url": "/index.html",
    "revision": "c96d9cbbcf4bf02e411ef72ae490e525"
  },
  {
    "url": "lavas/routes.json",
    "revision": "b1cc0543f07765df0d7eb253ac072530"
  },
  {
    "url": "/static/css/index.18e26a90.css"
  },
  {
    "url": "/static/fonts/iconfont.7300023d.ttf"
  },
  {
    "url": "/static/fonts/iconfont.c35735f2.eot"
  },
  {
    "url": "/static/img/iconfont.40ed9ee9.svg"
  },
  {
    "url": "/static/js/index.b217bf89.js"
  },
  {
    "url": "/static/js/manifest.7253881e.js"
  },
  {
    "url": "/static/js/vendor.c97e933b.js"
  },
  {
    "url": "/static/js/vue.b155477c.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  },
  {
    "url": "/static/manifest.json",
    "revision": "bbcf250c15f682b1a7a0e43cf70306f7"
  }
]);
workboxSW.router.registerNavigationRoute('/index.html');


/**
 * example runningCache with api
 */
// workboxSW.router.registerRoute(new RegExp('http://jgsuapi\.xiaoliublog\.cn:50080/api_v1/*'),
//     workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/^http:\/\/localhost:50080/,
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));

workboxSW.router.registerRoute(new RegExp('http://localhost:50080/api_v1/get_baseinfo'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('http://localhost:50080/api_v1/auth'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('http://localhost:50080/api_v1/get_score'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('http://localhost:50080/api_v1/get_all_class'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workboxSW.router.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workboxSW.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         cacheExpiration: {
//             maxEntries: 100,
//             maxAgeSeconds: 7 * 24 * 60 * 60
//         },
//         cacheableResponse: {
//             statuses: [0, 200]
//         }
//     })
// );