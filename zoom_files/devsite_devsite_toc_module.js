(function(_ds){var window=this;'use strict';var q5=function(a){var b=a.qs,c=a.Sp,d=a.Io;a=a.rq;var e='<ul class="devsite-nav-list" scrollbars><li class="devsite-nav-item devsite-nav-heading devsite-toc-toggle" role="heading" aria-level="2"><span class="devsite-nav-title"><span class="devsite-nav-text">Table of contents</span></span>';c&&(e=e+'<button type="button" title="'+_ds.sC("Expand/collapse contents"),e+='" class="devsite-nav-show-all button-transparent material-icons"></button>');e+="</li>";for(var f=b.length,h=0;h<f;h++){var k=
b[h];e+='<li class="devsite-nav-item"'+(c&&k.index<a?" visible":"")+'><a href="#'+_ds.X(k.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.X(h)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+_ds.X(h)+'" track-metadata-link-destination="#'+_ds.X(k.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.W(k.text)+"</span></a>";
if(_ds.mC(k.children).length){e+='<ul class="devsite-nav-list">';k=k.children;for(var l=k.length,m=0;m<l;m++){var n=k[m];e+='<li class="devsite-nav-item"'+(c&&n.index<a?" visible":"")+'><a href="#'+_ds.X(n.id)+'" class="devsite-nav-title gc-analytics-event" data-category="Site-Wide Custom Events" data-action="click" data-label="'+(c?"Embedded nav":"Right nav")+'" data-value="'+_ds.X(h)+"."+_ds.X(m)+'" track-type="navigation" track-name="'+(c?"embeddedNav":"rightNav")+'" track-metadata-position="'+
_ds.X(h)+"."+_ds.X(m)+'" track-metadata-link-destination="#'+_ds.X(n.id)+'"><span class="devsite-nav-text" tooltip>'+_ds.W(n.text)+"</span></a></li>"}e+="</ul>"}e+="</li>"}d&&(e=c?e+'<li class="devsite-nav-item devsite-apix-link"><a href="#try-it" class="devsite-nav-title"><span class="devsite-nav-text" tooltip>Try it</span></a></li>':e+'<button type="button" class="devsite-show-apix button-primary">Try it!</button>');c&&(e=e+'<li class="devsite-toc-toggle"><button type="button" class="button-flat devsite-nav-more-items material-icons" track-type="navigation" track-name="embeddedNavExpand" title="'+
_ds.sC("Expand/collapse contents"),e+='"></button></li>');return(0,_ds.T)(e+"</ul>")},t5=function(){var a=_ds.N.call(this)||this;a.h=!1;a.j=[];a.K=!1;a.F=new _ds.yl;a.m=null;a.oa=[];a.R=0;a.L=[];a.T=new _ds.vl(function(){return r5(a)},16);a.N=new _ds.vl(function(){return s5(a)},33);a.D=null;a.M=new _ds.Fl;a.J=new Set;a.H=new Map;a.C=null;return a},u5=function(a){a.h||a.F.listen(document.body,"devsite-content-updated devsite-element-hidden devsite-element-visible devsite-page-loaded devsite-sticky-resize devsite-sticky-scroll".split(" "),
function(){return a.N.xa()});a.F.listen(document.body,"devsite-content-updated",function(){r5(a)})},v5=function(a){var b,c,d;_ds.Va(function(e){switch(e.j){case 1:if(!("IntersectionObserver"in _ds.fi())){e.G(2);break}a.D&&a.D.disconnect();b=document.querySelector("devsite-header");c=152;if(!b){e.G(3);break}return _ds.x(e,window.customElements.whenDefined("devsite-header"),4);case 4:(d=parseFloat(b.getAttribute("top-row--height")||0)+parseFloat(b.getAttribute("bottom-row--height")||0))&&(c=d);case 3:a.D=
new IntersectionObserver(function(f){f=_ds.p(f);for(var h=f.next();!h.done;h=f.next())h=h.value,h.isIntersecting?a.J.add(h.target):a.J.delete(h.target);a.N.xa()},{rootMargin:c+"px 0px 0px 0px",threshold:[0,1]});case 2:a.M.resolve(),_ds.y(e)}})},w5=function(a){_ds.mi(a);a.dispatchEvent(new CustomEvent("devsite-element-hidden",{bubbles:!0}));a.removeAttribute("visible");a.setAttribute("hidden","");a.h||(a=document.querySelector(".devsite-main-content"))&&a.removeAttribute("has-toc")},x5=function(a){a.dispatchEvent(new CustomEvent("devsite-element-visible",
{bubbles:!0}));a.removeAttribute("hidden");a.setAttribute("visible","");if(!a.h){var b=document.querySelector(".devsite-main-content");b&&b.setAttribute("has-toc","");v5(a)}},s5=function(a){return _ds.Va(function(b){if(1==b.j)return _ds.x(b,y5(a),2);if(a.m){var c="#"+a.m.id,d=encodeURI(c);c=a.H.get(c)||a.H.get(d);a.C!==c&&(a.C&&a.C.classList.remove("devsite-nav-active"),c&&(c.classList.add("devsite-nav-active"),a.C=c))}_ds.y(b)})},r5=function(a){if(!a.hasAttribute("disabled")){var b=document.querySelector("devsite-content .devsite-article-body");
b?(a.h?a.classList.add("devsite-toc-embedded"):a.classList.add("devsite-toc"),z5(a,b),a.K=!0,a.h||(A5(a),B5(a))):w5(a)}},z5=function(a,b){var c,d,e,f,h,k,l,m,n,q;_ds.Va(function(t){c=[];d=!1;a.j=[].concat(_ds.qa(b.querySelectorAll("h2:not(.hide-from-toc):not(#contents):not(#table-of-contents), h3:not(.hide-from-toc):not(#contents):not(#table-of-contents)"))).filter(function(u){return u.id&&u.dataset.text}).filter(function(u){return C5(u)});e=_ds.p(a.j.entries());for(f=e.next();!f.done;f=e.next())h=
f.value,k=_ds.p(h),l=k.next().value,m=k.next().value,n={id:m.id,level:m.tagName.toLowerCase(),text:m.dataset.text,children:[],index:l},"h2"===n.level?(c.push(n),d=!0):d?c[c.length-1].children.push(n):c.push(n);if((q=_ds.Lb(a.L,c,a.Aj.bind(a)))&&a.K)return t.return();c.length?(D5(a,c),x5(a),a.h||E5(a)):w5(a);a.L=c;a.h||(A5(a),B5(a),a.dispatchEvent(new CustomEvent("devsite-toc-updated",{bubbles:!0})));_ds.y(t)})},y5=function(a){var b,c,d,e,f,h,k;return _ds.Va(function(l){switch(l.j){case 1:b=0;c=document.querySelector("devsite-header");
if(!c){l.G(2);break}return _ds.x(l,window.customElements.whenDefined("devsite-header"),3);case 3:b=c.C+c.j-c.h;case 2:d=a.j.findIndex(function(m){return a.J.has(m)&&m.getBoundingClientRect().top>=b});e=a.j[d];if(!e){a.m&&a.m.getBoundingClientRect().top>window.innerHeight&&(f=a.j.indexOf(a.m),0<f&&(a.m=a.j[f-1]));l.G(0);break}return _ds.x(l,F5(),5);case 5:h=l.h,k=e.getBoundingClientRect().top-b,a.m=k>h&&0<d?a.j[d-1]:e,_ds.y(l)}})},F5=function(){var a,b,c,d;return _ds.Va(function(e){if(1==e.j)return b=
a=0,(c=document.querySelector("devsite-header"))?_ds.x(e,window.customElements.whenDefined("devsite-header"),3):e.G(2);2!=e.j&&(a=c.C+c.j-c.h,b=Number(c.getAttribute("top-row--height"))+Number(c.getAttribute("bottom-row--height")));d=window.innerHeight-a;return e.return(Math.max(b-a,Math.floor(d/5)))})},E5=function(a){var b,c,d;_ds.Va(function(e){if(1==e.j)return _ds.x(e,a.M.promise,2);if(!a.D)return e.return();a.D.disconnect();a.J.clear();a.C&&a.C.classList.remove("devsite-nav-active");a.C=null;
b=_ds.p(a.j);for(c=b.next();!c.done;c=b.next())d=c.value,a.D.observe(d);_ds.y(e)})},C5=function(a){return _ds.IJ.find(function(b){return!!_ds.Ri(a,b,6)})||_ds.Qi(a,"devsite-selector",null,6)||_ds.Ri(a,"devsite-dialog",3)?!1:!0},D5=function(a,b){var c=_ds.hD(q5,{qs:b,Sp:a.h,Io:!!document.body.querySelector("devsite-apix, .devsite-apix"),rq:5});b=_ds.p(c.querySelectorAll("a.devsite-nav-title"));for(var d=b.next();!d.done;d=b.next()){d=d.value;var e=d.hash,f=encodeURI(d.hash);a.H.set(e,d);a.H.set(f,
d)}_ds.mi(a);a.h&&c.setAttribute("hidden","");a.appendChild(c);a.h&&(8<=a.getElementsByClassName("devsite-nav-item").length&&(Array.from(a.querySelectorAll(".devsite-nav-show-all, .devsite-nav-more-items")).forEach(function(h){a.F.listen(h,"click",function(){a.hasAttribute("expanded")?a.removeAttribute("expanded"):a.setAttribute("expanded","")})}),a.setAttribute("expandable","")),setTimeout(function(){c.removeAttribute("hidden")},0))},B5=function(a){var b=a.getAttribute("offset")||0;(a=a.querySelector(".devsite-nav-list"))&&
_ds.Il(a,"transform","translate3d(0, -"+b+"px, 0)")},A5=function(a){var b=a.getAttribute("max-height")||0;(a=a.querySelector(".devsite-nav-list"))&&_ds.Il(a,"max-height",b+"px")};_ds.r(t5,_ds.N);_ds.g=t5.prototype;_ds.g.connectedCallback=function(){this.h=this.hasAttribute("devsite-toc-embedded");r5(this);u5(this)};_ds.g.disconnectedCallback=function(){w5(this);this.K=!1;_ds.El(this.F)};_ds.g.attributeChangedCallback=function(a){switch(a){case "offset":B5(this);break;case "max-height":A5(this)}};_ds.g.Qh=function(a){a=a&&"false"===a.toLowerCase();this.L=[];_ds.mi(this);a?(this.setAttribute("disabled",""),w5(this)):(this.removeAttribute("disabled"),x5(this),this.T.xa())};
_ds.g.Aj=function(a,b){var c=!0;if(a.children.length||b.children.length)c=_ds.Lb(a.children,b.children,this.Aj.bind(this));return c&&a.id===b.id&&a.text===b.text};_ds.ka.Object.defineProperties(t5,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["max-height","offset"]}}});t5.prototype.renderUpdatedContent=t5.prototype.Qh;t5.prototype.attributeChangedCallback=t5.prototype.attributeChangedCallback;t5.prototype.disconnectedCallback=t5.prototype.disconnectedCallback;
t5.prototype.connectedCallback=t5.prototype.connectedCallback;try{window.customElements.define("devsite-toc",t5)}catch(a){console.warn("devsite.app.customElement.DevsiteToc",a)};})(_ds_www);
