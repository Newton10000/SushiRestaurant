(function(_ds){var window=this;'use strict';var G5=function(a){return(0,_ds.T)('<span class="devsite-tooltip-msg">'+_ds.W(a.Bs)+"</span>")},I5=function(){var a=_ds.iF.call(this)||this;a.h=new _ds.yl;a.j=null;a.m=null;a.C=new _ds.vl(function(){return H5(a)},250);return a},M5=function(a){a.h.listen(document.body,"devsite-content-updated",function(){return a.C.xa()});a.h.listen(document.body,"onpointermove"in window?"pointermove":"mousemove",function(b){b=b.target;for(var c=!1;b;){b.hasAttribute&&(c=J5(b));if(c)break;b=b.parentNode}b&&
c?K5(a,b):L5(a)});a.h.listen(document.body,"focusin",function(b){b=b.target;var c=b.firstElementChild;(b.classList.contains("devsite-nav-title")&&c?J5(c):J5(b))?K5(a,b):L5(a)});a.h.listen(document.body,["devsite-sticky-scroll","devsite-sticky-resize"],function(){return L5(a)})},J5=function(a){return a.hasAttribute("no-tooltip")?!1:a.hasAttribute("data-title")||a.hasAttribute("data-tooltip")||a.hasAttribute("tooltip")&&a.clientWidth<a.scrollWidth},K5=function(a,b){if(a.j!==b){L5(a);var c=b.getAttribute("data-tooltip")||
b.getAttribute("data-title")||b.textContent.trim(),d=_ds.hD(G5,{Bs:c});d.style.opacity=0;document.body.appendChild(d);var e=_ds.ai(window),f=_ds.Tl(b),h=_ds.Tl(d),k=_ds.Pl(b);c=k.y+f.height;f=k.x+f.width/2-h.width/2;h.width>e.width?f=0:(f=Math.max(f,8),e=e.width-(f+h.width+8),0>e&&(f=f+e-8));d.style.top=c+"px";d.style.left=f+"px";a.j=b;a.m=d;window.requestAnimationFrame(function(){d.style.opacity=1})}},L5=function(a){if(a.j){a.j=null;var b=a.m;a.m=null;_ds.lh(b,_ds.nI,function(){_ds.qi(b);_ds.mi(b)});
window.setTimeout(function(){_ds.qi(b);_ds.mi(b)},1E3);b.style.opacity=0}},H5=function(a){Array.from(document.querySelectorAll(".devsite-article-body [title]")).forEach(function(b){b.setAttribute("data-title",b.getAttribute("title"));b.removeAttribute("title")});a.hasAttribute("blocked-link")&&Array.from(document.getElementsByTagName("a")).forEach(function(b){if(b.hasAttribute("href")){for(var c=(new URL(b.getAttribute("href"),document.location.origin)).hostname.replace("www.",""),d=0;d<N5.length;d++)if(-1!==
c.indexOf(N5[d]))return;for(d=0;d<O5.length;d++)if(-1!==c.indexOf(O5[d])){b.setAttribute("data-title","This link may not be accessible in your region.");b.removeAttribute("title");break}}})};var N5=["dl.google.com"],O5="abc.xyz admob.com android.com blogger.com blogspot.com chrome.com chromium.org domains.google doubleclick.com feedburner.com g.co ggpht.com gmail.com gmodules.com goo.gl google.com google.org googleapis.com googleapps.com googlecode.com googledrive.com googlemail.com googlesource.com googlesyndication.com googletagmanager.com googleusercontent.com gv.com keyhole.com madewithcode.com panoramio.com urchin.com withgoogle.com youtu.be youtube.com ytimg.com".split(" ");
_ds.r(I5,_ds.iF);I5.prototype.connectedCallback=function(){document.body.hasAttribute("touch")?_ds.qi(this):(M5(this),this.C.xa())};I5.prototype.disconnectedCallback=function(){_ds.iF.prototype.disconnectedCallback.call(this);_ds.El(this.h)};I5.prototype.disconnectedCallback=I5.prototype.disconnectedCallback;I5.prototype.connectedCallback=I5.prototype.connectedCallback;try{window.customElements.define("devsite-tooltip",I5)}catch(a){console.warn("devsite.app.customElement.DevsiteTooltip",a)};})(_ds_www);
