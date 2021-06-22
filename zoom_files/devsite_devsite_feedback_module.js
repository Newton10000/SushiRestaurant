(function(_ds){var window=this;'use strict';var SS=function(){var a=void 0===a?_ds.PK.length:a;return _ds.PK.slice(0,a)},TS=function(a){var b=a.projectName,c=a.jr,d=a.lr,e=a.np,f=a.Vo,h=a.gs;a='<devsite-dialog class="devsite-feedback"><div class="devsite-dialog-contents"><h3 class="no-link">Send feedback about...</h3><div class="devsite-feedback-items"><a href="#" class="devsite-feedback-item" feedback-type="documentation" data-label="Docs Feedback Image" track-type="feedback" track-name="feedbackDocIcon"><div class="devsite-feedback-item-icon-container devsite-feedback-item-icon-color"><div class="devsite-feedback-item-icon material-icons" aria-hidden="true">description</div></div><div>This page</div><div class="devsite-feedback-item-type">Documentation feedback</div></a>';
f||(c=d?'<div class="devsite-feedback-item-icon material-icons" aria-hidden="true">'+_ds.W(d)+"</div>":c?'<img src="'+_ds.X(_ds.RC(c))+'" loading="lazy" alt="">':"",a+="<a"+(e?' href="'+_ds.X(_ds.PC(e))+'"':' href="#"')+' class="devsite-feedback-item" feedback-type="product" data-label="Product Feedback Image" track-type="feedback" track-name="feedbackProductIcon"><div class="devsite-feedback-item-icon-container '+(d?"devsite-feedback-item-icon-color devsite-theme-primary":"devsite-feedback-item-icon-img")+
'">'+c+"</div><div>"+_ds.W(b)+'</div><div class="devsite-feedback-item-type">',a+="Product feedback</div></a>");a+='</div><div class="devsite-feedback-notice">We appreciate your feedback! Please note that we cannot respond.</div>';h&&(a+='<div class="devsite-feedback-support"><span class="devsite-feedback-support-icon material-icons" aria-hidden="true">help</span><span>',b='Need help? Visit our <a href="'+(_ds.X(_ds.PC(h))+'">support page</a>.'),a=a+b+"</span></div>");return(0,_ds.T)(a+'<div class="devsite-feedback-buttons"><button class="button-white" tabindex="1" data-label="Cancel Feedback Button" track-type="feedback" track-name="cancelFeedbackButton" feedback-cancel>Close</button></div></div></devsite-dialog>')},
cT=function(){var a=_ds.N.call(this,["devsite-dialog"])||this;a.eventHandler=new _ds.yl;a.h=null;a.j=!1;a.Da(_ds.vk(US),_ds.vk(VS),_ds.vk(WS),_ds.vk(XS),_ds.vk(YS),_ds.vk(ZS),_ds.vk($S),_ds.vk(aT),_ds.vk(bT));return a},gT=function(a){var b,c=a.querySelector("a, button");c&&a.eventHandler.listen(c,"click",function(e){e.preventDefault();e.stopPropagation();a.h&&(document.body.appendChild(a.h),_ds.lm.Pb([_ds.vk(dT)],a.h,"open",""),e={action:"click",category:a.getAttribute("data-category")||"Site-Wide Custom Events",
label:a.getAttribute("data-label")},eT(a,e))});if(a.h){c=Array.from(a.h.querySelectorAll("[feedback-type]"));c=_ds.p(c);for(var d=c.next();!d.done;d=c.next())a.eventHandler.listen(d.value,"click",function(e){fT(a,e)});(c=null===(b=a.h)||void 0===b?void 0:b.querySelector("button[feedback-cancel]"))&&a.eventHandler.listen(c,"click",function(){var e;null===(e=a.h)||void 0===e?void 0:e.removeAttribute("open");_ds.qi(a.h);var f;e=null===(f=a.h)||void 0===f?void 0:f.querySelector("button[feedback-cancel]");
f={action:"click",label:null===e||void 0===e?void 0:e.getAttribute("data-label"),category:(null===e||void 0===e?void 0:e.getAttribute("data-category"))||"Site-Wide Custom Events"};eT(a,f)});a.eventHandler.listen(a.h,"devsite-dialog-hide",function(){_ds.qi(a.h)})}},fT=function(a,b){var c=b.currentTarget,d=c.getAttribute("feedback-type"),e="#"===c.getAttribute("href");d={context:a.getAttribute("context"),type:d};var f=SS();f.length&&(d.errorStack=f);a.hasAttribute("rating-type")&&(d.ratingType=a.getAttribute("rating-type"));
a.hasAttribute("rating-category")&&(d.ratingCategory=a.getAttribute("rating-category"));f={productId:a.getAttribute("product-id"),locale:DevsiteApp.getLocale(),bucket:a.getAttribute("bucket"),productVersion:a.getAttribute("version"),callback:function(){return void hT()},onLoadCallback:function(){}};c={action:"click",label:c.getAttribute("data-label"),category:c.getAttribute("data-category")||"Site-Wide Custom Events"};eT(a,c);e&&(b.preventDefault(),b.stopPropagation(),_ds.AD(f,d))},hT=function(){Array.from(document.querySelectorAll('script[src*="www.google.com/tools/feedback/"]')).forEach(function(a){return _ds.qi(a)})},
eT=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:b,bubbles:!0}))};var US=_ds.pa(["bucket"]),VS=_ds.pa(["context"]),WS=_ds.pa(["product-id"]),XS=_ds.pa(["data-label"]),YS=_ds.pa(["track-metadata-position"]),ZS=_ds.pa(["track-name"]),$S=_ds.pa(["track-type"]),aT=_ds.pa(["disable"]),bT=_ds.pa(["project-"]),dT=_ds.pa(["open"]);_ds.r(cT,_ds.N);
cT.prototype.connectedCallback=function(){if(!this.j){var a=this.querySelector(".google-feedback"),b=new Map([["data-b","bucket"],["data-context","context"],["data-p","product-id"]]),c=new Map([["data-label","Send Feedback Button"],["track-metadata-position","content"],["track-name","sendFeedbackLink"],["track-type","feedback"]]);if(a){b=_ds.p(b.entries());for(var d=b.next();!d.done;d=b.next()){var e=_ds.p(d.value);d=e.next().value;e=e.next().value;if(a.hasAttribute(d)){var f=a.getAttribute(d)||"";
_ds.En(this,e,f);a.removeAttribute(d)}}c=_ds.p(c.entries());for(b=c.next();!b.done;b=c.next())d=_ds.p(b.value),b=d.next().value,d=d.next().value,a.hasAttribute(b)?(d=a.getAttribute(b)||"",_ds.En(this,b,d),a.removeAttribute(b)):_ds.En(this,b,d);a.classList.remove("google-feedback")}!this.hasAttribute("project-name")&&(a=document.querySelector('meta[property="og:site_name"]'))&&(a=a.getAttribute("content")||"",_ds.En(this,"project-name",a));this.hasAttribute("project-icon")?_ds.En(this,"project-icon",
_ds.dk(this.getAttribute("project-icon")||"").href||""):(a=document.querySelector('link[rel="apple-touch-icon"]'))&&_ds.En(this,"project-icon",a.getAttribute("href")||"");this.h=_ds.hD(TS,{Vo:this.hasAttribute("disable-product-feedback"),np:this.getAttribute("project-feedback-url"),jr:this.getAttribute("project-icon"),lr:this.getAttribute("project-icon-name"),projectName:this.getAttribute("project-name")||"",gs:this.getAttribute("project-support-url")});this.j=!0}gT(this)};
cT.prototype.disconnectedCallback=function(){_ds.El(this.eventHandler)};cT.prototype.disconnectedCallback=cT.prototype.disconnectedCallback;cT.prototype.connectedCallback=cT.prototype.connectedCallback;try{window.customElements.define("devsite-feedback",cT)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteFeedback",a)};})(_ds_www);
