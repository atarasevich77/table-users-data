(this["webpackJsonptable-users-data"]=this["webpackJsonptable-users-data"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),m=(a(23),a(24),a(3)),d=a(14),s=a.n(d),i=a(44),o=function(e){var t=Object(n.useState)(e.data.value),a=Object(m.a)(t,2),r=a[0],c=a[1],d=Object(n.useState)(!1),s=Object(m.a)(d,2),i=s[0],o=s[1];return l.a.createElement(l.a.Fragment,null,i?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement("button",{className:"btn btn-success btn-sm m-1",onClick:function(t){t.preventDefault(),e.handleData({id:e.data.id,key:e.data.key,value:r}),o(!1)}},"Save"),l.a.createElement("button",{className:"btn btn-secondary btn-sm m-1",onClick:function(t){t.preventDefault(),c(e.data.value),o(!1)}},"Cancel")):l.a.createElement("div",null,l.a.createElement("div",null,r,l.a.createElement("button",{className:"btn btn-outline-primary btn-sm m-1",onClick:function(){return o(!0)}},"Edit"))))};var u=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=function(e){a.map((function(t){t.id===e.id&&(t[e.key]=e.value)}))};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("h1",{className:"display-5"},"Users")),l.a.createElement("div",{className:"row p-2"},l.a.createElement("button",{className:"btn btn-primary btn-sm ml-auto m-1",onClick:function(){s.a.get("https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users/",{}).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}},"Add Users"),l.a.createElement("button",{className:"btn btn-secondary btn-sm m-1",onClick:function(){return r([])}},"Clear Table")),l.a.createElement("div",{className:"row-md"},l.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,["#","Name","User Name","Email","Address","Phone","Website","Company"].map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.id),l.a.createElement("td",null,l.a.createElement(o,{data:{id:e.id,key:"name",value:e.name},handleData:c})),l.a.createElement("td",null,l.a.createElement(o,{data:{id:e.id,key:"username",value:e.username},handleData:c})),l.a.createElement("td",null,l.a.createElement(o,{data:{id:e.id,key:"email",value:e.email},handleData:c})),l.a.createElement("td",null,l.a.createElement("div",null,"street: ",e.address.street),l.a.createElement("div",null,"suite: ",e.address.suite),l.a.createElement("div",null,"city: ",e.address.city),l.a.createElement("div",null,"zipcode: ",e.address.zipcode),l.a.createElement("div",null,"geo:",l.a.createElement("div",null,"lat:",e.address.geo.lat),l.a.createElement("div",null,"lng:",e.address.geo.lng))),l.a.createElement("td",null,l.a.createElement(o,{data:{id:e.id,key:"phone",value:e.phone},handleData:c})),l.a.createElement("td",null,l.a.createElement(o,{data:{id:e.id,key:"website",value:e.website},handleData:c})),l.a.createElement("td",null,l.a.createElement("div",null,"name: ",e.company.name),l.a.createElement("div",null,"catch Phrase: ",e.company.catchPhrase),l.a.createElement("div",null,"bs: ",e.company.bs)))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4da685e9.chunk.js.map