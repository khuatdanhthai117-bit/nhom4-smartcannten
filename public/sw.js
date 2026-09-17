const DEMO_STATE_PATCH='smart-canteen-demo-v3';
self.addEventListener('install',event=>{self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim())});

self.addEventListener('fetch',event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method==='GET'&&request.mode==='navigate'&&/\/public\/app\.html$/i.test(url.pathname)){
    event.respondWith((async()=>{
      const response=await fetch(request);
      const html=await response.text();
      const needle='const savedState=JSON.parse(localStorage.getItem("smartCanteenState")||"null")||{};';
      const replacement=`const savedState=(()=>{try{const s=JSON.parse(localStorage.getItem("smartCanteenState")||"null")||{};const users=Array.isArray(s.users)?s.users:[];for(const demo of defaultUsers){const found=users.find(u=>u.identifier===demo.identifier||u.email===demo.email);if(found)Object.assign(found,demo);else users.push(structuredClone(demo))}s.users=users;return s}catch(error){try{localStorage.removeItem("smartCanteenState")}catch{}return{users:structuredClone(defaultUsers)}}})();`;
      const patched=html.includes(needle)?html.replace(needle,replacement):html;
      return new Response(patched,{
        status:response.status,
        statusText:response.statusText,
        headers:response.headers
      });
    })());
  }
});
