"use strict";(self.webpackChunktodolist_app=self.webpackChunktodolist_app||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"body {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  align-content: center;\r\n  justify-content: center;\r\n  padding: 20%;\r\n}\r\n\r\nmain {\r\n  display: inline-block;\r\n  width: 35vw;\r\n  padding: 10px 5px;\r\n  -moz-box-shadow: 0 0 3px #ccc;\r\n  -webkit-box-shadow: 0 0 3px #ccc;\r\n  box-shadow: 0 0 3px #ccc;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.single-item {\r\n  display: grid;\r\n  grid-template-columns: 10% 70% 10%;\r\n  align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n  border: 0;\r\n  margin-left: 20px;\r\n  width: 100%;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.foot {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\n.title {\r\n  margin-left: 20px;\r\n}\r\n\r\n.mytaskinput {\r\n  border: 0;\r\n  margin-left: 20px;\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=r(n,i),l=0;l<o.length;l++){var p=t(o[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},987:(n,e,t)=>{var r=t(379),i=t.n(r),o=t(795),a=t.n(o),s=t(569),c=t.n(s),l=t(565),p=t.n(l),d=t(216),u=t.n(d),f=t(589),m=t.n(f),v=t(426),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),i()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const y=[{id:"1",description:"Bath the dogs",completed:!1},{id:"2",description:"Ali Baaba",completed:!1},{id:"3",description:"Mudasir Issah",completed:!1}];y.sort(((n,e)=>n.index-e.index)),y.forEach((n=>{document.querySelector(".tasks").insertAdjacentHTML("beforeend",`<li> <div class="single-item"> <input type="checkbox"> ${n.description} <i class="fa-solid fa-ellipsis-vertical"></i></div></li><hr>`)}))}},n=>{n(n.s=987)}]);