(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[1726],{1726:(e,t,n)=>{function l(e){var t,n=[].forEach,l=[].some,o="undefined"!=typeof window&&document.body,r=!0,s=" ";function i(t,l){var o=l.appendChild(function(t){var l=document.createElement("li"),o=document.createElement("a");e.listItemClass&&l.setAttribute("class",e.listItemClass);e.onClick&&(o.onclick=e.onClick);e.includeTitleTags&&o.setAttribute("title",t.textContent);e.includeHtml&&t.childNodes.length?n.call(t.childNodes,(function(e){o.appendChild(e.cloneNode(!0))})):o.textContent=t.textContent;return o.setAttribute("href",e.basePath+"#"+t.id),o.setAttribute("class",e.linkClass+s+"node-name--"+t.nodeName+s+e.extraLinkClasses),l.appendChild(o),l}(t));if(t.children.length){var r=c(t.isCollapsed);t.children.forEach((function(e){i(e,r)})),o.appendChild(r)}}function c(t){var n=e.orderedList?"ol":"ul",l=document.createElement(n),o=e.listClass+s+e.extraListClasses;return t&&(o=(o=o+s+e.collapsibleClass)+s+e.isCollapsedClass),l.setAttribute("class",o),l}function a(t){var n=0;return null!==t&&(n=t.offsetTop,e.hasInnerContainers&&(n+=a(t.offsetParent))),n}function u(e,t){return e&&e.className!==t&&(e.className=t),e}function d(t){return t&&-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(u(t,t.className.replace(s+e.isCollapsedClass,"")),d(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){r=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(r=!1)},render:function(e,n){var l=c(!1);if(n.forEach((function(e){i(e,l)})),null!==(t=e||t))return t.firstChild&&t.removeChild(t.firstChild),0===n.length?t:t.appendChild(l)},updateToc:function(i){var c;c=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var n;n=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var l=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===l.className.indexOf(e.positionFixedClass)&&(l.className+=s+e.positionFixedClass):l.className=l.className.replace(s+e.positionFixedClass,"")}();var f,m=i;if(r&&null!==t&&m.length>0){l.call(m,(function(t,n){return a(t)>c+e.headingsOffset+10?(f=m[0===n?n:n-1],!0):n===m.length-1?(f=m[m.length-1],!0):void 0}));var h=t.querySelector("."+e.activeLinkClass),C=t.querySelector("."+e.linkClass+".node-name--"+f.nodeName+'[href="'+e.basePath+"#"+f.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(h===C)return;var p=t.querySelectorAll("."+e.linkClass);n.call(p,(function(t){u(t,t.className.replace(s+e.activeLinkClass,""))}));var g=t.querySelectorAll("."+e.listItemClass);n.call(g,(function(t){u(t,t.className.replace(s+e.activeListItemClass,""))})),C&&-1===C.className.indexOf(e.activeLinkClass)&&(C.className+=s+e.activeLinkClass);var v=C&&C.parentNode;v&&-1===v.className.indexOf(e.activeListItemClass)&&(v.className+=s+e.activeListItemClass);var S=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(S,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=s+e.isCollapsedClass)})),C&&C.nextSibling&&-1!==C.nextSibling.className.indexOf(e.isCollapsedClass)&&u(C.nextSibling,C.nextSibling.className.replace(s+e.isCollapsedClass,"")),d(C&&C.parentNode.parentNode)}}}}n.r(t),n.d(t,{default:()=>b,destroy:()=>C,init:()=>h,refresh:()=>p});const o={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0};function r(e){var t=[].reduce;function n(e){return e[e.length-1]}function l(e){return+e.nodeName.toUpperCase().replace("H","")}function o(t){if(!function(e){try{return e instanceof window.HTMLElement||e instanceof window.parent.HTMLElement}catch(t){return e instanceof window.HTMLElement}}(t))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;const n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.innerText)):(t.innerText||t.textContent).trim());var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:l(t),textContent:n};return e.includeHtml&&(o.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(o,t):o}return{nestHeadingsArray:function(l){return t.call(l,(function(t,l){var r=o(l);return r&&function(t,l){for(var r=o(t),s=r.headingLevel,i=l,c=n(i),a=s-(c?c.headingLevel:0);a>0&&(!(c=n(i))||s!==c.headingLevel);)c&&void 0!==c.children&&(i=c.children),a--;s>=e.collapseDepth&&(r.isCollapsed=!0),i.push(r)}(r,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var l=n;e.ignoreSelector&&(l=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return t.querySelectorAll(l)}catch(e){return console.warn("Headers not found with selector: "+l),null}}}}function s(e){var t=e.duration,n=e.offset;if("undefined"!=typeof window&&"undefined"!=typeof location){var l=location.hash?o(location.href):location.href;document.body.addEventListener("click",(function(r){var s;"a"!==(s=r.target).tagName.toLowerCase()||!(s.hash.length>0||"#"===s.href.charAt(s.href.length-1))||o(s.href)!==l&&o(s.href)+"#"!==l||r.target.className.indexOf("no-smooth-scroll")>-1||"#"===r.target.href.charAt(r.target.href.length-2)&&"!"===r.target.href.charAt(r.target.href.length-1)||-1===r.target.className.indexOf(e.linkClass)||function(e,t){var n,l,o=window.pageYOffset,r={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||d},s=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),i="string"==typeof e?r.offset+(e?s&&s.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,c="function"==typeof r.duration?r.duration(i):r.duration;function a(e){l=e-n,window.scrollTo(0,r.easing(l,o,i,c)),l<c?requestAnimationFrame(a):u()}function u(){window.scrollTo(0,o+i),"function"==typeof r.callback&&r.callback()}function d(e,t,n,l){return(e/=l/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame((function(e){n=e,a(e)}))}(r.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=r.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}function o(e){return e.slice(0,e.lastIndexOf("#"))}}const i=30;let c,a,u,d,f,m={};function h(e){m=function(){const e={};for(let t=0;t<arguments.length;t++){const n=arguments[t];for(const t in n)g.call(n,t)&&(e[t]=n[t])}return e}(o,e||{}),m.scrollSmooth&&(m.duration=m.scrollSmoothDuration,m.offset=m.scrollSmoothOffset,s(m)),c=l(m),a=r(m),C();const t=function(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}(m);if(null===t)return;const n=S(m);if(null===n)return;if(u=a.selectHeadings(t,m.headingSelector),null===u)return;const h=a.nestHeadingsArray(u).nest;if(m.skipRendering)return this;c.render(n,h),d=v((function(e){c.updateToc(u),!m.disableTocScrollSync&&function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);if(n){var l=t.scrollTop,o=l+t.clientHeight,r=n.offsetTop,s=r+n.clientHeight;r<l+e.tocScrollOffset?t.scrollTop-=l-r+e.tocScrollOffset:s>o-e.tocScrollOffset-i&&(t.scrollTop+=s-o+e.tocScrollOffset+2*i)}}}(m);const t=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||t)&&(c.updateToc(u),m.scrollEndCallback&&m.scrollEndCallback(e))}),m.throttleTimeout),d(),m.scrollContainer&&document.querySelector(m.scrollContainer)?(document.querySelector(m.scrollContainer).addEventListener("scroll",d,!1),document.querySelector(m.scrollContainer).addEventListener("resize",d,!1)):(document.addEventListener("scroll",d,!1),document.addEventListener("resize",d,!1));let p=null;f=v((function(e){m.scrollSmooth&&c.disableTocAnimation(e),c.updateToc(u),p&&clearTimeout(p),p=setTimeout((function(){c.enableTocAnimation()}),m.scrollSmoothDuration)}),m.throttleTimeout),m.scrollContainer&&document.querySelector(m.scrollContainer)?document.querySelector(m.scrollContainer).addEventListener("click",f,!1):document.addEventListener("click",f,!1)}function C(){const e=S(m);null!==e&&(m.skipRendering||e&&(e.innerHTML=""),m.scrollContainer&&document.querySelector(m.scrollContainer)?(document.querySelector(m.scrollContainer).removeEventListener("scroll",d,!1),document.querySelector(m.scrollContainer).removeEventListener("resize",d,!1),c&&document.querySelector(m.scrollContainer).removeEventListener("click",f,!1)):(document.removeEventListener("scroll",d,!1),document.removeEventListener("resize",d,!1),c&&document.removeEventListener("click",f,!1)))}function p(e){C(),h(e||m)}const g=Object.prototype.hasOwnProperty;function v(e,t,n){let l,o;return t||(t=250),function(){const r=n||this,s=+new Date,i=arguments;l&&s<l+t?(clearTimeout(o),o=setTimeout((function(){l=s,e.apply(r,i)}),t)):(l=s,e.apply(r,i))}}function S(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}const b={destroy:C,init:h,refresh:p}}}]);
//# sourceMappingURL=1726.js.map