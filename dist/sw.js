if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>r(e,n),f={module:{uri:n},exports:o,require:t};i[n]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(d(...e),o)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"293d1425.js",revision:"fc4c9c6448301f113db13a658b26a847"},{url:"63e0e7d1.js",revision:"d8427bac0732a7ac8e3677bf3a7cd74b"},{url:"7be7f637.js",revision:"5965337c75b29dd4eedea8940e092693"},{url:"b55db197.js",revision:"9ae68f1b87f43201e26dde0d03b9108f"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"index.html",revision:"f260ba583d2b1698bd7292f37cb6565b"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
