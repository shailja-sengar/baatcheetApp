(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{150:function(e,t,a){e.exports=a(342)},155:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),u=a.n(r),i=(a(155),a(62)),o=a(6),l=a(11),s=a(42),p=a.n(s),m=(a(158),p.a.initializeApp({apiKey:"AIzaSyDfe4Kuj8YtnKXIB-XPcmBha3st7ZGHHXM",authDomain:"baatcheet-f4595.firebaseapp.com",projectId:"baatcheet-f4595",storageBucket:"baatcheet-f4595.appspot.com",messagingSenderId:"608952254584",appId:"1:608952254584:web:269b8b16f444171267ad8d"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),i(!1),e&&b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!u&&t)},f=a(15),b=a.n(f),g=a(28),v=a(148),E=a(4),j=a.n(E),O=function(){var e=Object(o.f)(),t=Object(n.useContext)(h).user,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=function(){var t=Object(g.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var e=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?j.a.get("https://api.chatengine.io/users/me",{headers:{"project-id":"9a5c2844-8c66-4000-b0cc-fa2d71401b14","user-name":t.email,"user-secret":t.uid}}).then((function(){i(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),p(t.photoURL).then((function(t){e.append("avatar",t,t.name),j.a.post("https://api.chatengine.io/users",e,{headers:{"private-key":"58d624c7-d9e9-4224-a053-7494e53c5f7e"}}).then((function(){return i(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||u?"Loading...":c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Baatcheet"),c.a.createElement("div",{onClick:s,className:"logout-tab"},"Logout")),c.a.createElement(v.d,{height:"calc(100vh-66px)",projectID:"9a5c2844-8c66-4000-b0cc-fa2d71401b14",userName:t.email,userSecret:t.uid}))},w=a(344),x=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Baatcheet!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," Sign In with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null)))};var y=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:x})))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.0993c985.chunk.js.map