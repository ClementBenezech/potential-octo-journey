(this.webpackJsonpmansa=this.webpackJsonpmansa||[]).push([[0],[,,,,function(e,a,s){},,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){},,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),n=s(5),i=s.n(n),r=(s(10),s(2)),l=(s(11),s(12),function(e){var a=Object(t.useState)(null),s=Object(r.a)(a,2),c=s[0],n=s[1];return Object(t.useEffect)((function(){null===c&&fetch(e,{mode:"cors"}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[c,e]),[c,n]}),u=(s(13),s(0)),d=function(e){return null!==e.data?Object(u.jsxs)("div",{className:"business-card",children:[Object(u.jsx)("div",{className:"business-card__name",children:e.title+" "+e.last+" "+e.first}),Object(u.jsx)("img",{className:"business-card__picture",src:e.picture,alt:"photo of "+e.first}),Object(u.jsx)("div",{className:"business-card__company__data",children:e.legalName}),Object(u.jsxs)("div",{className:"business-card__company__data",children:[Object(u.jsx)("i",{class:"fas fa-fingerprint"}),e.siret]}),Object(u.jsxs)("div",{className:"business-card__company__data",children:[Object(u.jsx)("i",{class:"fas fa-map-marker-alt"}),e.address]}),Object(u.jsxs)("div",{className:"business-card__company__data",children:[Object(u.jsx)("i",{class:"fas fa-phone-square-alt"}),e.phoneNumber]})]}):Object(u.jsx)("div",{children:"Loading"})},j=(s(15),s.p+"static/media/mansa.2dd54c92.gif"),o=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("img",{alt:"mansa_logo",src:j})})},m=(s(16),function(){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)("i",{class:"fas fa-coins nav__menu-item  nav__menu-item--current"}),Object(u.jsx)("i",{class:"fas fa-user-alt nav__menu-item"}),Object(u.jsx)("i",{class:"fas fa-sign-out-alt nav__menu-item"})]})}),b=(s(4),s(17),function(e){return Object(u.jsxs)("div",{className:"account-card",children:[Object(u.jsx)("div",{className:"account-card__label",children:"Account Number"}),Object(u.jsx)("div",{className:"account-card__value",children:e.account.account_number}),Object(u.jsx)("div",{className:"account-card__label",children:"Balance"}),Object(u.jsx)("div",{className:"account-card__value",children:e.account.available+" "+e.account.currency})]})}),f=function(e){var a=Array.from(e.data).map((function(e){return Object(u.jsx)(b,{account:e},e.iban)}));return Object(u.jsx)("div",{className:"accounts",children:a})};var _=function(){var e=l("https://randomuser.me/api/"),a=Object(r.a)(e,2),s=a[0],t=(a[1],l("https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890")),c=Object(r.a)(t,2),n=c[0],i=(c[1],l("https://kata.getmansa.com/accounts")),j=Object(r.a)(i,2),b=j[0];return j[1],null!==s&&null!==n&&null!==b?Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{}),Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"main-content",children:[Object(u.jsx)(d,{title:s.results[0].name.title,last:s.results[0].name.last,first:s.results[0].name.first,legalName:n.unite_legale.denomination,siret:n.unite_legale.etablissement_siege.siret,address:n.unite_legale.etablissement_siege.geo_adresse,phoneNumber:s.results[0].phone,picture:s.results[0].picture.large}),Object(u.jsx)(f,{data:b})]})]}):Object(u.jsx)("i",{class:"fas fa-cog fa-spin loader"})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;s(e),t(e),c(e),n(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.adc3ac26.chunk.js.map