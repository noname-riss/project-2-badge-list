if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let n={};const o=e=>r(e,f),t={module:{uri:f},exports:n,require:o};i[f]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(d(...e),n)))}}define(["./workbox-919adfb7"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"7be7f637.js",revision:"5965337c75b29dd4eedea8940e092693"},{url:"97c077f2.js",revision:"c84e553e4afb4df75d82af845353308e"},{url:"b55db197.js",revision:"9ae68f1b87f43201e26dde0d03b9108f"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"d3e26dff.js",revision:"a26c03c54bc6d10438f1f0b69e7064fc"},{url:"index.html",revision:"5f5ef43563b22fc890434a7d5d3434c6"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
