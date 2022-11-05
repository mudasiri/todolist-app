"use strict";(self.webpackChunktodolist_app=self.webpackChunktodolist_app||[]).push([[179],{426:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([t.id,"body {\r\n  display: grid;\r\n  grid-template-columns: auto;\r\n  align-content: center;\r\n  justify-content: center;\r\n  padding: 20%;\r\n}\r\n\r\nmain {\r\n  display: inline-block;\r\n  width: 35vw;\r\n  padding: 10px 5px;\r\n  -moz-box-shadow: 0 0 3px #ccc;\r\n  -webkit-box-shadow: 0 0 3px #ccc;\r\n  box-shadow: 0 0 3px #ccc;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.single-item {\r\n  display: grid;\r\n  grid-template-columns: 10% 70% 10%;\r\n  align-items: center;\r\n}\r\n\r\ninput[type=text] {\r\n  border: 0;\r\n  margin-left: 20px;\r\n  width: 100%;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\n.foot {\r\n  text-align: center;\r\n}\r\n\r\nli {\r\n  padding: 10px 0 10px 0;\r\n}\r\n\r\n.title {\r\n  margin-left: 20px;\r\n}\r\n\r\n.mytaskinput {\r\n  border: 0;\r\n  margin-left: 20px;\r\n}\r\n",""]);const a=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var s={},i=[],a=0;a<t.length;a++){var c=t[a],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var s=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var a=n(s[i]);e[a].references--}for(var c=r(t,o),l=0;l<s.length;l++){var d=n(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},671:(t,e,n)=>{var r=n(379),o=n.n(r),s=n(795),i=n.n(s),a=n(569),c=n.n(a),l=n(565),d=n.n(l),u=n(216),p=n.n(u),f=n(589),h=n.n(f),m=n(426),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(t,e,n=!1){this.index=t,this.description=e,this.completed=n}}class y{static setLocalStorageList=t=>{localStorage.setItem("todoListItems",JSON.stringify(t))};static getLocalStorageList=()=>{let t;return t=null===JSON.parse(localStorage.getItem("todoListItems"))?[]:JSON.parse(localStorage.getItem("todoListItems")),t};static reassignIndex=t=>{t.forEach(((t,e)=>{t.index=e+1}))};static updateTask=(t,e)=>{const n=this.getLocalStorageList(),r=n[e];n.forEach((e=>{e===r&&(r.description=t)})),this.setLocalStorageList(n),this.showToDoItems()};static deleteItem=t=>{let e=this.getLocalStorageList();const n=e[t];e=e.filter((t=>t!==n)),this.reassignIndex(e),this.setLocalStorageList(e)};static addRemoveEvent=()=>{document.querySelectorAll(".delete-btn").forEach((t=>t.addEventListener("click",(e=>{e.preventDefault();const n=t.id-1;this.deleteItem(n),this.showToDoItems()}))))};static setupEdit=t=>{const e=this.getLocalStorageList()[t];document.getElementById("to-do-input").style.display="none";const n=document.querySelector(".edit-item");n.value=e.description,n.style.display="block",n.setAttribute("id",t),n.focus()};static addEditEvent=()=>{document.querySelectorAll(".edit-btn").forEach((t=>t.addEventListener("click",(e=>{e.preventDefault();const n=t.id-1;this.setupEdit(n)}))))};static createToDoItemHtml=({description:t,index:e},n,r)=>{const o=document.createElement("div");return o.className="to-do-item",o.innerHTML=`\n          <div class="to-do-detail">\n          <input type="checkbox" class="checkbox" id="${e}" ${n}>\n          <h3 class="to-do-dsc ${r}">${t}</h3>\n      </div>\n      <div>\n          <button class="edit-btn" id="${e}"><i class="fa-regular fa-pen-to-square"></i></button>\n          <button class="delete-btn" id="${e}"><i class="fa-solid fa-trash-can"></i></button>\n      </div>\n      `,o};static showToDoItems=()=>{const t=this.getLocalStorageList();t.sort(((t,e)=>t.index-e.index)),t.forEach((t=>{let e,n;!0===t.completed?(e="checked",n="is-completed"):(e="",n=""),document.querySelector(".tasks").insertAdjacentHTML("beforeend",`<li> <div class="single-item"> <input type="checkbox" ${e}> <h3 class="${n}"> ${t.description} </h3> <div class="actions"> <i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i> </div></div></li><hr>`)}))};static addTodoTask=t=>{const e=this.getLocalStorageList(),n=e.length+1,r=new g(n,t);e.push(r),this.setLocalStorageList(e),this.showToDoItems()}}document.getElementById("addtaskform").addEventListener("submit",(t=>{t.preventDefault(),y.addTodoTask(input.value),input.value=""}))}},t=>{t(t.s=671)}]);