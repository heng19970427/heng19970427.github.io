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
    "revision": "8ae9cd46388d8407d7104c97787217ae"
  },
  {
    "url": "/static/css/index.9cb4bc2a.css"
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
    "url": "/static/js/index.a5d31ed8.js"
  },
  {
    "url": "/static/js/manifest.7253881e.js"
  },
  {
    "url": "/static/js/vendor.9b22a1ea.js"
  },
  {
    "url": "/static/js/vue.b155477c.js"
  },
  {
    "url": "/static/js/workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);
workboxSW.router.registerNavigationRoute('/index.html');


/**
 * example runningCache with api
 */
workboxSW.router.registerRoute(/^https:\/\/jgsu\.xiaoliublog\.cn:50080/,
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));

workboxSW.router.registerRoute(new RegExp('https://jgsu.xiaoliublog.cn:50080/api_v1/get_baseinfo'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('https://jgsu.xiaoliublog.cn:50080/api_v1/auth'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('https://jgsu.xiaoliublog.cn:50080/api_v1/get_score'),
    workboxSW.strategies.cacheFirst({
        cacheableResponse: {
            statuses: [0, 200]
        }
    }));
workboxSW.router.registerRoute(new RegExp('https://jgsu.xiaoliublog.cn:50080/api_v1/get_all_class'),
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
