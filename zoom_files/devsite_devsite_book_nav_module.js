(function(_ds){var window=this;'use strict';var YP=function(a,b){a.href=_ds.Jh(b)},$P=function(){var a=_ds.N.call(this)||this;a.m=!1;a.h=null;a.eventHandler=new _ds.yl;a.D=function(){};a.j=new Set;a.background=document.createElement("div");a.background.classList.add("devsite-book-nav-bg");a.F=new Promise(function(b){a.D=b});a.C=new _ds.vl(function(){ZP(a)},20);return a},bQ=function(a,b,c){c=void 0===c?!0:c;b=Array.from((void 0===b?a:b).querySelectorAll(".devsite-nav-title"));a.j=new Set(b);if(!_ds.Wj().hash&&c)aQ(a,a.j);else for(c=
new _ds.jF,a=_ds.p(a.j),b=a.next();!b.done;b=a.next())_ds.lF(c,b.value)},aQ=function(a,b){_ds.M(a,function d(){var e=this,f,h,k,l,m,n,q;return _ds.F(d,function(t){if(1==t.j)return f=e,_ds.x(t,(0,_ds.Cn)(),2);h=t.h;k=new _ds.jF;l=function(u){u=u.target;_ds.lF(k,u);f.j.delete(u);h.unregisterIntersectionForElement(u)};m=_ds.p(b);for(n=m.next();!n.done;n=m.next()){q=n.value;try{h.registerIntersectionForElement(q,l)}catch(u){l({target:q})}}_ds.y(t)})})},ZP=function(a){var b=0<a.querySelectorAll(".devsite-nav-item").length,
c=document.querySelector("#devsite-hamburger-menu");c&&(b?c.removeAttribute("visually-hidden"):_ds.En(a,"visually-hidden","",c))},fQ=function(a){a.eventHandler.listen(a,"click",function(b){var c;if(!b.defaultPrevented){var d=b.target;"devsite-close-nav"===d.getAttribute("id")&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.hasAttribute("top-level-nav")?a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})):_ds.En(a,"top-level-nav",""));if(d.hasAttribute("menu")){var e=d.getAttribute("menu");
e&&cQ(a,e)&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.removeAttribute("top-level-nav"))}if(!(d.classList.contains("devsite-nav-toggle")||d.classList.contains("devsite-nav-title-no-path")||(null===(c=d.parentElement)||void 0===c?0:c.classList.contains("devsite-nav-title-no-path")))){a.h&&(b=a.h.querySelector("[menu=_book]"))&&b.contains(d)&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0}));var f;d instanceof Element&&d.matches("a.devsite-nav-title")?f=d:f=_ds.Qi(d,
"a","devsite-nav-title");f&&!f.classList.contains("devsite-nav-has-children")&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0}))}}});a.eventHandler.listen(a,[dQ,"focusin"],function(b){return void eQ(a,b)});a.eventHandler.listen(document.body,"devsite-sitemask-hidden",function(){a.h&&(cQ(a,"_book")?a.removeAttribute("top-level-nav"):_ds.En(a,"top-level-nav",""))});a.eventHandler.listen(document.body,"devsite-page-loaded",function(){return void a.C.xa()});a.eventHandler.listen(a,
"devsite-content-updated",function(){a.C.xa()});a.eventHandler.listen(a,"scroll",function(){return a.m=!0})},cQ=function(a,b){var c=!1;if(a.h)for(var d=_ds.p(a.h.querySelectorAll("[menu]")),e=d.next();!e.done;e=d.next())e=e.value,e.getAttribute("menu")===b?(e.removeAttribute("hidden"),c=!0):_ds.En(a,"hidden","",e);return c},eQ=function(a,b){b.defaultPrevented||(b=_ds.Pi(b.target,function(c){return c instanceof HTMLAnchorElement&&c.hasAttribute("href")||c===a},!0),b!==a&&YP(b,_ds.Rm(_ds.dk(b.href).href)))},
hQ=function(a){return _ds.M(a,function c(){var d=this;return _ds.F(c,function(e){switch(e.j){case 1:return d.m=!1,_ds.x(e,_ds.nk(),2);case 2:return _ds.x(e,gQ(d),3);case 3:return _ds.x(e,d.F,4);case 4:return _ds.x(e,(0,_ds.Cn)(),5);case 5:return _ds.x(e,_ds.nk(),6);case 6:return _ds.x(e,gQ(d),0)}})})},iQ=function(a,b){(b=void 0===b?a:b)||(b=a);var c=_ds.p(b.querySelectorAll(".devsite-nav-active"));for(a=c.next();!a.done;a=c.next())a.value.classList.remove("devsite-nav-active");a=_ds.sk(_ds.Wj().pathname);
a='[href="'+_ds.dk(a).href+'"], [href="'+a+'"],\n        [alt-paths~="'+a+'"]';b=_ds.p(b.querySelectorAll(a));for(a=b.next();!a.done;a=b.next())a.value.classList.add("devsite-nav-active")},jQ=function(a,b){(b=void 0===b?a:b)||(b=a);var c=b.querySelector(".devsite-mobile-nav-bottom");if(c)for(var d=c.querySelector(".devsite-nav-active");d&&d.parentElement&&d.parentElement!==b;)d.hasAttribute("collapsed")&&(d.removeAttribute("animatable"),_ds.Cl(a.eventHandler,d,"devsite-expandable-nav-transition-end",
function(){d&&_ds.En(a,"animatable","",d)}),d.removeAttribute("collapsed")),d=d.parentElement},gQ=function(a){return _ds.M(a,function c(){var d=this,e;return _ds.F(c,function(f){if(1==f.j)return d.h?_ds.x(f,(0,_ds.Cn)(),2):f.return();if(4!=f.j)return(e=d.h.querySelector(".devsite-nav-active"))?d.m?f.G(4):_ds.x(f,kQ(d,e),4):f.G(0);_ds.En(d,"animatable","");_ds.y(f)})})},kQ=function(a,b){return _ds.M(a,function d(){var e=this,f,h;return _ds.F(d,function(k){if(1==k.j)return f=e.m,h=_ds.Sl(b,e,!0),e.scrollTop=
h.y,_ds.x(k,_ds.nk(),2);e.m=f;_ds.y(k)})})},lQ=function(a){return _ds.M(a,function c(){var d,e=this,f,h,k;return _ds.F(c,function(l){if(1==l.j)return _ds.x(l,(0,_ds.Cn)(),2);d=l.h;f=_ds.p(e.j);for(h=f.next();!h.done;h=f.next())k=h.value,d.unregisterIntersectionForElement(k);_ds.y(l)})})},mQ=_ds.pa(["animatable"]),nQ=_ds.pa(["fixed"]),oQ=_ds.pa(["has-book-nav"]),pQ=_ds.pa(["hidden"]),qQ=_ds.pa(["top-level-nav"]),rQ=_ds.pa(["visually-hidden"]),dQ="onpointerover"in window?"pointerover":"mouseover";
_ds.r($P,_ds.N);_ds.g=$P.prototype;_ds.g.connectedCallback=function(){return _ds.M(this,function b(){var c=this;return _ds.F(b,function(d){if(1==d.j)return c.Da(c.v(mQ),c.v(nQ),c.v(oQ),c.v(pQ),c.v(qQ),c.v(rQ)),_ds.ni(c.background,c),ZP(c),fQ(c),_ds.x(d,c.init(),2);bQ(c);_ds.y(d)})})};
_ds.g.disconnectedCallback=function(){_ds.El(this.eventHandler);lQ(this);this.j.clear();var a=document.querySelector("#devsite-hamburger-menu");a&&_ds.En(this,"visually-hidden","",a);this.background&&_ds.qi(this.background);this.removeAttribute("animatable")};
_ds.g.attributeChangedCallback=function(a){if("hidden"===a){var b=this.hasAttribute("hidden");this.dispatchEvent(new CustomEvent(b?"devsite-element-hidden":"devsite-element-visible",{bubbles:!0}));var c=document.querySelector(".devsite-main-content");c&&(b?c.removeAttribute("has-book-nav"):_ds.En(this,"has-book-nav","",c))}if("fixed"===a||"hidden"===a)b=this.hasAttribute(a),this.background&&(b?_ds.En(this,a,"",this.background):this.background.removeAttribute(a));"fixed"===a&&this.D()};
_ds.g.init=function(a){a=void 0===a?!0:a;return _ds.M(this,function c(){var d=this,e,f,h;return _ds.F(c,function(k){if(1==k.j){d.h=d.querySelector(".devsite-mobile-nav-bottom");!d.hasAttribute("hidden")&&d.h&&d.h.querySelector(".devsite-nav-active")||_ds.En(d,"animatable","");_ds.En(d,"top-level-nav","");d.h&&d.h.querySelector("[menu=_book]")&&d.removeAttribute("top-level-nav");0===d.children.length&&_ds.En(d,"hidden","");if(d.background)for(e=_ds.p(["hidden","fixed"]),f=e.next();!f.done;f=e.next())h=
f.value,d.hasAttribute(h)&&_ds.En(d,h,"",d.background);return!d.hasAttribute("hidden")&&a?(iQ(d),jQ(d),_ds.x(k,hQ(d),0)):_ds.x(k,_ds.nk(),4)}return _ds.x(k,gQ(d),0)})})};
_ds.g.Xa=function(a){return _ds.M(this,function c(){var d=this,e;return _ds.F(c,function(f){switch(f.j){case 1:if(!a){_ds.mi(d);f.G(2);break}d.removeAttribute("animatable");e=a.querySelector("nav")||null;iQ(d,e);jQ(d,e);if(!e){f.G(3);break}return _ds.x(f,lQ(d),4);case 4:d.j.clear(),bQ(d,e,!1);case 3:_ds.Fn(d,d.querySelector("nav"),e);case 2:return _ds.x(f,_ds.nk(),5);case 5:return _ds.x(f,d.init(!1),0)}})})};
_ds.ka.Object.defineProperties($P,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["hidden","fixed"]}}});$P.prototype.updateContent=$P.prototype.Xa;$P.prototype.attributeChangedCallback=$P.prototype.attributeChangedCallback;$P.prototype.disconnectedCallback=$P.prototype.disconnectedCallback;$P.prototype.connectedCallback=$P.prototype.connectedCallback;try{window.customElements.define("devsite-book-nav",$P)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookNav",a)};})(_ds_www);
