(function(_ds){var window=this;'use strict';var o0=function(){return _ds.N.apply(this,arguments)||this},p0=function(a){_ds.mi(a);switch(a.getAttribute("type")){case "indeterminate":var b=a.getAttribute("color"),c=document.createElement("div");c.classList.add("devsite-progress--indeterminate");for(var d=1;4>=d;d++){var e=document.createElement("div");e.classList.add("devsite-progress--indeterminate-"+d);!b||1!=d&&3!=d||(e.style.backgroundColor=b);c.appendChild(e)}a.appendChild(c)}};_ds.r(o0,_ds.N);
o0.prototype.connectedCallback=function(){p0(this)};o0.prototype.attributeChangedCallback=function(a,b,c){b!==c&&p0(this)};_ds.ka.Object.defineProperties(o0,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["color","type"]}}});o0.prototype.attributeChangedCallback=o0.prototype.attributeChangedCallback;o0.prototype.connectedCallback=o0.prototype.connectedCallback;try{window.customElements.define("devsite-progress",o0)}catch(a){console.warn("devsite.app.customElement.DevsiteProgress",a)};})(_ds_www);
