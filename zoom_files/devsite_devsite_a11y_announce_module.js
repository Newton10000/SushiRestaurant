(function(_ds){var window=this;'use strict';var pL=function(){var a=_ds.N.call(this)||this;a.eventHandler=new _ds.yl;return a},qL=function(){return"devsite-a11y-announce"},rL=function(a,b){_ds.M(a,function d(){var e=this;return _ds.F(d,function(f){if(1==f.j){if(_ds.Mi(e)!==b)return f.G(2);_ds.Di(e,"");return _ds.x(f,_ds.nk(),3)}if(2!=f.j)return _ds.x(f,_ds.nk(),2);_ds.Di(e,b);_ds.y(f)})})};_ds.r(pL,_ds.N);
pL.prototype.connectedCallback=function(){var a=this;this.setAttribute("aria-live","assertive");this.setAttribute("aria-atomic","true");this.eventHandler.listen(document.body,"devsite-a11y-announce",function(b){b=b.ra;(b=b.detail&&b.detail.message)&&rL(a,b)})};pL.prototype.disconnectedCallback=function(){_ds.El(this.eventHandler)};pL.prototype.connectedCallback=pL.prototype.connectedCallback;pL.getTagName=qL;try{window.customElements.define(qL(),pL)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteA11yAnnounce",a)};})(_ds_www);
