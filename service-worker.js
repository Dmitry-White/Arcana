"use strict";var precacheConfig=[["/Arcana/index.html","2b40ae84c22c0d8bc61151f561283fd3"],["/Arcana/static/css/main.6432cd2b.css","41729bb2089f5902c3cbe07a4d3cd710"],["/Arcana/static/js/main.716f8e81.js","ce7985ccaaafc268343c85110e75769e"],["/Arcana/static/media/Chariot.df5ab1a3.jpg","df5ab1a3db4abf914cfb7f598c5acc97"],["/Arcana/static/media/Death.1f6911ed.jpg","1f6911edec223326b051f3bd53a54134"],["/Arcana/static/media/Devil.e226efe2.jpg","e226efe2d134bcc02d0de3ef1d64e388"],["/Arcana/static/media/Emperor.a82d6c24.jpg","a82d6c2483fdf64a52c68c2bdb353d18"],["/Arcana/static/media/Empress.8c76fdec.jpg","8c76fdec99b53d531fd47112e9523524"],["/Arcana/static/media/Fool.db5d682d.jpg","db5d682d1b1d08efcddc203c57dd69c7"],["/Arcana/static/media/Fortune.0bad86d2.jpg","0bad86d2718fc8702cdf5fc50557064f"],["/Arcana/static/media/Hanged.18a2daf9.jpg","18a2daf932ff56aad6c8fd6dcd837f58"],["/Arcana/static/media/Hermit.a4e466b4.jpg","a4e466b47bba3ce8ce855770755a1450"],["/Arcana/static/media/Hierophant.1ec8b43e.jpg","1ec8b43ebfa26ace050b591347c271b1"],["/Arcana/static/media/Judgement.8e476594.jpg","8e4765946c0d833d8aa84ac7f6a16fd9"],["/Arcana/static/media/Justice.cae49ac7.jpg","cae49ac7174a1982d36a0f8f36741576"],["/Arcana/static/media/Lovers.f81137b9.jpg","f81137b9594a43dcb30a3ae247ff1171"],["/Arcana/static/media/Magician.e19bef95.jpg","e19bef95a44f5d1a330b6588453a9cf2"],["/Arcana/static/media/Moon.17d1ad21.jpg","17d1ad21132bf01b89afb04a7f7b53ea"],["/Arcana/static/media/Priestess.d1aba143.jpg","d1aba143c1b57d5ddbd24eb05446f8f2"],["/Arcana/static/media/Star.72e59be8.jpg","72e59be839dbde6a4040a3fbd40e4107"],["/Arcana/static/media/Strength.74755403.jpg","74755403b2e1bb69e56f30a044a73eba"],["/Arcana/static/media/Sun.2e66406b.jpg","2e66406b0fa10543bcea27718b86a479"],["/Arcana/static/media/Temperance.fa8499db.jpg","fa8499db094b4398a76d5e76883cfe25"],["/Arcana/static/media/Tower.9eae2348.jpg","9eae23481d7c0209e95b1d7d940287c8"],["/Arcana/static/media/World.4d9c89c5.jpg","4d9c89c52e9197c02e12db45d786be2d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});