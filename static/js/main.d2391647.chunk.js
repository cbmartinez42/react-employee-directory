(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),s=a.n(r),i=(a(12),a(3)),l=(a(13),a(14),a(0));var o=function(e){return Object(l.jsx)("div",{className:"wrapper",children:e.children})};a(16),a(17);var j=function(e){var t=e.search,a=e.setSearch;return Object(l.jsxs)("form",{className:"d-flex align-middle",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})};var u=function(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(l.jsxs)("div",{className:"container-fluid align-middle",children:[Object(l.jsx)("h2",{className:"navbar-brand align-middle",children:"Employee List"}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsx)(j,{search:e.search,setSearch:e.setSearch})})]})})},b=a(4);a(18),a(19);var d=function(e){var t=e.search,a=e.empData,c=e.setEmpData;return Object(n.useEffect)((function(){fetch("https://randomuser.me/api/?inc=name,email,phone,picture&results=25").then((function(e){return e.json()})).then((function(e){c(e.results)}))}),[]),Object(l.jsx)(l.Fragment,{children:a.filter((function(e){return e.name.first.toUpperCase().includes(t.toUpperCase())||e.name.last.toUpperCase().includes(t.toUpperCase())})).map((function(e){return Object(l.jsxs)("tr",{className:"align-middle",children:[Object(l.jsxs)("th",{scope:"row",children:[" ",Object(l.jsx)("img",{src:e.picture.medium,alt:"Employee"})," "]}),Object(l.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(l.jsx)("td",{children:e.phone}),Object(l.jsx)("td",{children:e.email})]},e.email)}))})};var h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),j=o[0],u=o[1];return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Picture"}),Object(l.jsx)("th",{scope:"col",onClick:function(){if(u(!j),j){var e=Object(b.a)(c);e.sort((function(e,t){return(e.name.first+" "+e.name.last).localeCompare(t.name.first+" "+t.name.last)})),r(e)}else{var t=Object(b.a)(c);t.sort((function(e,t){return(t.name.first+" "+t.name.last).localeCompare(e.name.first+" "+e.name.last)})),r(t)}},children:"Name"}),Object(l.jsx)("th",{scope:"col",children:"Phone"}),Object(l.jsx)("th",{scope:"col",onClick:function(){if(u(!j),j){var e=Object(b.a)(c);e.sort((function(e,t){return e.email.localeCompare(t.email)})),r(e)}else{var t=Object(b.a)(c);t.sort((function(e,t){return t.email.localeCompare(e.email)})),r(t)}},children:"Email"})]})}),Object(l.jsx)("tbody",{children:Object(l.jsx)(d,{empData:c,setEmpData:r,search:e.search})})]})};var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)(o,{children:[Object(l.jsx)(u,{search:a,setSearch:c}),Object(l.jsx)(h,{search:a})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(20);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),p()}],[[21,1,2]]]);
//# sourceMappingURL=main.d2391647.chunk.js.map