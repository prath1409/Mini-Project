(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},22:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(12),c=n.n(o),i=(n(22),n(9)),l=n.n(i),u=n(13),s=n(6),m=(n(24),n(3)),d=n.n(m),p=(n(25),n(29),n(45),n(15)),f=n(16),g=new(n(31));d.a.initializeApp({apiKey:"AIzaSyB2tRp5HQtPpUOVk-jdCP2U4fp4lXyXVJI",authDomain:"mini-project-ca10d.firebaseapp.com",projectId:"mini-project-ca10d",storageBucket:"mini-project-ca10d.appspot.com",messagingSenderId:"605424166905",appId:"1:605424166905:web:001bbcd9dcbb2478317f28"});var h=d.a.auth(),b=d.a.firestore();d.a.analytics();function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)}},"Sign in with Google"),r.a.createElement("p",null,"Do not violate the community guidelines or you will be banned for life!"))}function v(){return h.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return h.signOut()}},"Sign Out")}function w(){return r.a.createElement("button",{className:"sign-out",onClick:function(){return h.signOut()}},"BANNED")}function j(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=h.currentUser,i=c.uid;c.photoURL,b.collection("banned").where("uid","==",i).get().then((function(e){return e.forEach((function(e){o(!0)})),e})).catch((function(e){return console.log("Error getting documents: ",e),!1}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(w,null):r.a.createElement(O,null))}function O(){var e=Object(a.useRef)(),t=b.collection("messages"),n=b.collection("banned"),o=t.orderBy("createdAt").limit(25),c=Object(f.a)(o,{idField:"id"}),i=Object(s.a)(c,1)[0],m=Object(a.useState)(""),p=Object(s.a)(m,2),E=p[0],v=p[1],w=function(){var a=Object(u.a)(l.a.mark((function a(r){var o,c,i,u,s,m;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),o=h.currentUser,c=o.uid,i=o.photoURL,u=E,s=!1,m=function(){console.log(s),s=!0,console.log(s)},b.collection("banned").where("uid","==",c).get().then((function(e){return e.forEach((function(e){m()})),e})).catch((function(e){return console.log("Error getting documents: ",e),!1})),g.isProfane(E)&&(window.location.reload(),u=g.clean(E),n.add({text:E,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:i})),a.next=9,t.add({text:u,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:i});case 9:v(""),e.current.scrollIntoView({behavior:"smooth"});case 11:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,i&&i.map((function(e){return r.a.createElement(y,{key:e.id,message:e})})),r.a.createElement("span",{ref:e})),r.a.createElement("form",{onSubmit:w},r.a.createElement("input",{value:E,onChange:function(e){return v(e.target.value)},placeholder:"say something nice"}),r.a.createElement("button",{type:"submit",disabled:!E},"\ud83d\udd4a\ufe0f")))}function y(e){var t=e.message,n=t.text,a=t.uid,o=t.photoURL,c=a===h.currentUser.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message ".concat(c)},r.a.createElement("img",{src:o||"https://api.adorable.io/avatars/23/abott@adorable.png"}),r.a.createElement("p",null,n)))}var k=function(){var e=Object(p.a)(h),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"),r.a.createElement(v,null)),r.a.createElement("section",null,t?r.a.createElement(j,null):r.a.createElement(E,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6cfd985d.chunk.js.map