webpackJsonp([1],{"0+Zi":function(t,i){},"0FZS":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("0xDb"),o={methods:{touchDom:function(t,i){Object(s.f)(t,i)}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"account"},[e("div",{staticClass:"account-top"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("ul",{on:{touchstart:function(i){t.touchDom(i,"add")},touchend:function(i){t.touchDom(i,"rem")}}},[e("router-link",{staticClass:"account-sisint",attrs:{tag:"li",to:{path:"/anomaly"}}},[e("span",[e("i",{staticClass:"iconfont icon-weibiaoti3"})]),t._v(" "),e("p",{staticClass:"account-p"},[t._v("我的消息")])]),t._v(" "),e("router-link",{staticClass:"account-sisint account-sisint2",attrs:{tag:"li",to:{path:"/miningList"}}},[e("span",{staticClass:"account-color"},[e("i",{staticClass:"iconfont icon-wodekuangji"})]),t._v(" "),e("p",{staticClass:"account-p account-color"},[t._v("我的矿机")])]),t._v(" "),e("router-link",{staticClass:"account-sisint account-sisint3",attrs:{tag:"li",to:{path:"/setting"}}},[e("span",{staticClass:"account-color2"},[e("i",{staticClass:"iconfont icon-shezhi"})]),t._v(" "),e("p",{staticClass:"account-p account-color2"},[t._v("我的设置")])])],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"account-img"},[i("img",{attrs:{src:e("ICQ2")}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"account-center"},[i("ul",{staticClass:"account-center_ul"},[i("li",[i("p",[this._v("我的矿机数量")]),this._v(" "),i("span",[this._v("13")])]),this._v(" "),i("li",[i("p",[this._v("矿机总算力")]),this._v(" "),i("span",[this._v("13")])])])])}]};var r=e("VU/8")(o,n,!1,function(t){e("49Cw")},"data-v-4448acc3",null);i.default=r.exports},"0tE7":function(t,i,e){"use strict";var s=function(){return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,i){var e=[],s=!0,o=!1,n=void 0;try{for(var r,a=t[Symbol.iterator]();!(s=(r=a.next()).done)&&(e.push(r.value),!i||e.length!==i);s=!0);}catch(t){o=!0,n=t}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return e}(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)};var n=navigator.userAgent.toLowerCase(),r=/wechatdevtools/.test(n),a=n.indexOf("android")>0;function h(){return window.performance&&window.performance.now?window.performance.now()+window.performance.timing.navigationStart:+new Date}function l(t){for(var i=arguments.length,e=Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];for(var o=0;o<e.length;o++){var n=e[o];for(var r in n)t[r]=n[r]}return t}var c=document.createElement("div").style,p=function(){var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var i in t)if(void 0!==c[t[i]])return i;return!1}();function u(t){return!1!==p&&("standard"===p?"transitionEnd"===t?"transitionend":t:p+t.charAt(0).toUpperCase()+t.substr(1))}function d(t,i,e,s){t.addEventListener(i,e,{passive:!1,capture:!!s})}function m(t,i,e,s){t.removeEventListener(i,e,{passive:!1,capture:!!s})}function f(t){for(var i=0,e=0;t;)i-=t.offsetLeft,e-=t.offsetTop,t=t.offsetParent;return{left:i,top:e}}var g=u("transform"),v=u("perspective")in c,y="ontouchstart"in window||r,x=!1!==g,w=u("transition")in c,_={transform:g,transitionTimingFunction:u("transitionTimingFunction"),transitionDuration:u("transitionDuration"),transitionProperty:u("transitionProperty"),transitionDelay:u("transitionDelay"),transformOrigin:u("transformOrigin"),transitionEnd:u("transitionEnd")},b=1,T={touchstart:b,touchmove:b,touchend:b,mousedown:2,mousemove:2,mouseup:2};function S(t){if(t instanceof window.SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function P(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}function M(t,i){t.removeChild(i)}var X={startX:0,startY:0,scrollX:!1,scrollY:!0,freeScroll:!1,directionLockThreshold:5,eventPassthrough:"",click:!1,tap:!1,bounce:!0,bounceTime:700,momentum:!0,momentumLimitTime:300,momentumLimitDistance:15,swipeTime:2500,swipeBounceTime:500,deceleration:.001,flickLimitTime:200,flickLimitDistance:100,resizePolling:60,probeType:0,preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:!1,disableMouse:y,disableTouch:!y,observeDOM:!0,autoBlur:!0,wheel:!1,snap:!1,scrollbar:!1,pullDownRefresh:!1,pullUpLoad:!1};var Y={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}};function C(t,i,e,s,o,n){var r=t-i,a=Math.abs(r)/e,h=n.deceleration,l=n.itemHeight,c=n.swipeBounceTime,p=n.wheel,u=n.swipeTime,d=p?4:15,m=t+a/h*(r<0?-1:1);return p&&l&&(m=Math.round(m/l)*l),m<s?(m=o?s-o/d*a:s,u=c):m>0&&(m=o?o/d*a:0,u=c),{destination:Math.round(m),duration:u}}var D=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||100/60)/2)},k=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||function(t){window.clearTimeout(t)},E=1,H=-1,L=1,z=-1;function O(t){console.error("[BScroll warn]: "+t)}var W,A,I,F,j,R,N,U;function B(t){var i=document.createElement("div"),e=document.createElement("div");return i.style.cssText="position:absolute;z-index:9999;pointerEvents:none",e.style.cssText="box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;",e.className="bscroll-indicator","horizontal"===t?(i.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",e.style.height="100%",i.className="bscroll-horizontal-scrollbar"):(i.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",e.style.width="100%",i.className="bscroll-vertical-scrollbar"),i.style.cssText+=";overflow:hidden",i.appendChild(e),i}function V(t,i){this.wrapper=i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.direction=i.direction,i.fade?(this.visible=0,this.wrapperStyle.opacity="0"):this.visible=1}function $(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.wrapper||O("can not resolve the wrapper dom"),this.scroller=this.wrapper.children[0],this.scroller||O("the wrapper need at least one child element to be scroller"),this.scrollerStyle=this.scroller.style,this._init(t,i)}V.prototype.refresh=function(){this.transitionTime(),this._calculate(),this.updatePosition()},V.prototype.fade=function(t,i){var e=this;if(!i||this.visible){var s=t?250:500;t=t?"1":"0",this.wrapperStyle[_.transitionDuration]=s+"ms",clearTimeout(this.fadeTimeout),this.fadeTimeout=setTimeout(function(){e.wrapperStyle.opacity=t,e.visible=+t},0)}},V.prototype.updatePosition=function(){if("vertical"===this.direction){var t=Math.round(this.sizeRatioY*this.scroller.y);if(t<0){this.transitionTime(500);var i=Math.max(this.indicatorHeight+3*t,8);this.indicatorStyle.height=i+"px",t=0}else if(t>this.maxPosY){this.transitionTime(500);var e=Math.max(this.indicatorHeight-3*(t-this.maxPosY),8);this.indicatorStyle.height=e+"px",t=this.maxPosY+this.indicatorHeight-e}else this.indicatorStyle.height=this.indicatorHeight+"px";this.y=t,this.scroller.options.useTransform?this.indicatorStyle[_.transform]="translateY("+t+"px)"+this.scroller.translateZ:this.indicatorStyle.top=t+"px"}else{var s=Math.round(this.sizeRatioX*this.scroller.x);if(s<0){this.transitionTime(500);var o=Math.max(this.indicatorWidth+3*s,8);this.indicatorStyle.width=o+"px",s=0}else if(s>this.maxPosX){this.transitionTime(500);var n=Math.max(this.indicatorWidth-3*(s-this.maxPosX),8);this.indicatorStyle.width=n+"px",s=this.maxPosX+this.indicatorWidth-n}else this.indicatorStyle.width=this.indicatorWidth+"px";this.x=s,this.scroller.options.useTransform?this.indicatorStyle[_.transform]="translateX("+s+"px)"+this.scroller.translateZ:this.indicatorStyle.left=s+"px"}},V.prototype.transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.indicatorStyle[_.transitionDuration]=t+"ms"},V.prototype.transitionTimingFunction=function(t){this.indicatorStyle[_.transitionTimingFunction]=t},V.prototype.remove=function(){this.wrapper.parentNode.removeChild(this.wrapper)},V.prototype._calculate=function(){if("vertical"===this.direction){var t=this.wrapper.clientHeight;this.indicatorHeight=Math.max(Math.round(t*t/(this.scroller.scrollerHeight||t||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px",this.maxPosY=t-this.indicatorHeight,this.sizeRatioY=this.maxPosY/this.scroller.maxScrollY}else{var i=this.wrapper.clientWidth;this.indicatorWidth=Math.max(Math.round(i*i/(this.scroller.scrollerWidth||i||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px",this.maxPosX=i-this.indicatorWidth,this.sizeRatioX=this.maxPosX/this.scroller.maxScrollX}},(W=$).prototype._init=function(t,i){this._handleOptions(i),this._events={},this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._addDOMEvents(),this._initExtFeatures(),this._watchTransition(),this.options.observeDOM&&this._initDOMObserver(),this.options.autoBlur&&this._handleAutoBlur(),this.refresh(),this.options.snap||this.scrollTo(this.options.startX,this.options.startY),this.enable()},W.prototype._handleOptions=function(t){this.options=l({},X,t),this.translateZ=this.options.HWCompositing&&v?" translateZ(0)":"",this.options.useTransition=this.options.useTransition&&w,this.options.useTransform=this.options.useTransform&&x,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollX="horizontal"!==this.options.eventPassthrough&&this.options.scrollX,this.options.scrollY="vertical"!==this.options.eventPassthrough&&this.options.scrollY,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,!0===this.options.tap&&(this.options.tap="tap")},W.prototype._addDOMEvents=function(){var t=d;this._handleDOMEvents(t)},W.prototype._removeDOMEvents=function(){var t=m;this._handleDOMEvents(t)},W.prototype._handleDOMEvents=function(t){var i=this.options.bindToWrapper?this.wrapper:window;t(window,"orientationchange",this),t(window,"resize",this),this.options.click&&t(this.wrapper,"click",this,!0),this.options.disableMouse||(t(this.wrapper,"mousedown",this),t(i,"mousemove",this),t(i,"mousecancel",this),t(i,"mouseup",this)),y&&!this.options.disableTouch&&(t(this.wrapper,"touchstart",this),t(i,"touchmove",this),t(i,"touchcancel",this),t(i,"touchend",this)),t(this.scroller,_.transitionEnd,this)},W.prototype._initExtFeatures=function(){this.options.snap&&this._initSnap(),this.options.scrollbar&&this._initScrollbar(),this.options.pullUpLoad&&this._initPullUp(),this.options.pullDownRefresh&&this._initPullDown(),this.options.wheel&&this._initWheel()},W.prototype._watchTransition=function(){if("function"==typeof Object.defineProperty){var t=this,i=!1;Object.defineProperty(this,"isInTransition",{get:function(){return i},set:function(e){i=e;for(var s=t.scroller.children.length?t.scroller.children:[t.scroller],o=i&&!t.pulling?"none":"auto",n=0;n<s.length;n++)s[n].style.pointerEvents=o}})}},W.prototype._handleAutoBlur=function(){this.on("beforeScrollStart",function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()})},W.prototype._initDOMObserver=function(){var t=this;if("undefined"!=typeof MutationObserver){var i=void 0,e=new MutationObserver(function(e){if(!t._shouldNotRefresh()){for(var s=!1,o=!1,n=0;n<e.length;n++){var r=e[n];if("attributes"!==r.type){s=!0;break}if(r.target!==t.scroller){o=!0;break}}s?t.refresh():o&&(clearTimeout(i),i=setTimeout(function(){t._shouldNotRefresh()||t.refresh()},60))}});e.observe(this.scroller,{attributes:!0,childList:!0,subtree:!0}),this.on("destroy",function(){e.disconnect()})}else this._checkDOMUpdate()},W.prototype._shouldNotRefresh=function(){var t=this.x>0||this.x<this.maxScrollX||this.y>0||this.y<this.maxScrollY;return this.isInTransition||this.stopFromTransition||t},W.prototype._checkDOMUpdate=function(){var t=S(this.scroller),i=t.width,e=t.height;function s(){var o=this;setTimeout(function(){(function(){if(!this.destroyed){var o=(t=S(this.scroller)).width,n=t.height;i===o&&e===n||this.refresh(),i=o,e=n,s.call(this)}}).call(o)},1e3)}s.call(this)},W.prototype.handleEvent=function(t){switch(t.type){case"touchstart":case"mousedown":this._start(t);break;case"touchmove":case"mousemove":this._move(t);break;case"touchend":case"mouseup":case"touchcancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"click":this.enabled&&!t._constructed&&(P(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation()))}},W.prototype.refresh=function(){var t=S(this.wrapper);this.wrapperWidth=t.width,this.wrapperHeight=t.height;var i=S(this.scroller);this.scrollerWidth=i.width,this.scrollerHeight=i.height;var e=this.options.wheel;e?(this.items=this.scroller.children,this.options.itemHeight=this.itemHeight=this.items.length?this.scrollerHeight/this.items.length:0,void 0===this.selectedIndex&&(this.selectedIndex=e.selectedIndex||0),this.options.startY=-this.selectedIndex*this.itemHeight,this.maxScrollX=0,this.maxScrollY=-this.itemHeight*(this.items.length-1)):(this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight),this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=f(this.wrapper),this.trigger("refresh"),this.resetPosition()},W.prototype.enable=function(){this.enabled=!0},W.prototype.disable=function(){this.enabled=!1},(A=$).prototype._start=function(t){var i=T[t.type];if((i===b||0===t.button)&&!(!this.enabled||this.destroyed||this.initiated&&this.initiated!==i)){this.initiated=i,this.options.preventDefault&&!P(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.movingDirectionX=0,this.movingDirectionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=h(),this.options.wheel&&(this.target=t.target),this.stop();var e=t.touches?t.touches[0]:t;this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this.trigger("beforeScrollStart")}},A.prototype._move=function(t){if(this.enabled&&!this.destroyed&&T[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i=t.touches?t.touches[0]:t,e=i.pageX-this.pointX,s=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=e,this.distY+=s;var o=Math.abs(this.distX),n=Math.abs(this.distY),r=h();if(!(r-this.endTime>this.options.momentumLimitTime&&n<this.options.momentumLimitDistance&&o<this.options.momentumLimitDistance)){if(this.directionLocked||this.options.freeScroll||(o>n+this.options.directionLockThreshold?this.directionLocked="h":n>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"===this.directionLocked){if("vertical"===this.options.eventPassthrough)t.preventDefault();else if("horizontal"===this.options.eventPassthrough)return void(this.initiated=!1);s=0}else if("v"===this.directionLocked){if("horizontal"===this.options.eventPassthrough)t.preventDefault();else if("vertical"===this.options.eventPassthrough)return void(this.initiated=!1);e=0}e=this.hasHorizontalScroll?e:0,s=this.hasVerticalScroll?s:0,this.movingDirectionX=e>0?z:e<0?L:0,this.movingDirectionY=s>0?H:s<0?E:0;var a=this.x+e,l=this.y+s;(a>0||a<this.maxScrollX)&&(a=this.options.bounce?this.x+e/3:a>0?0:this.maxScrollX),(l>0||l<this.maxScrollY)&&(l=this.options.bounce?this.y+s/3:l>0?0:this.maxScrollY),this.moved||(this.moved=!0,this.trigger("scrollStart")),this._translate(a,l),r-this.startTime>this.options.momentumLimitTime&&(this.startTime=r,this.startX=this.x,this.startY=this.y,1===this.options.probeType&&this.trigger("scroll",{x:this.x,y:this.y})),this.options.probeType>1&&this.trigger("scroll",{x:this.x,y:this.y});var c=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,p=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=this.pointX-c,d=this.pointY-p;(u>document.documentElement.clientWidth-this.options.momentumLimitDistance||u<this.options.momentumLimitDistance||d<this.options.momentumLimitDistance||d>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this._end(t)}}},A.prototype._end=function(t){if(this.enabled&&!this.destroyed&&T[t.type]===this.initiated){this.initiated=!1,this.options.preventDefault&&!P(t.target,this.options.preventDefaultException)&&t.preventDefault(),this.trigger("touchEnd",{x:this.x,y:this.y}),this.isInTransition=!1;var i=Math.round(this.x),e=Math.round(this.y),s=i-this.absStartX,o=e-this.absStartY;if(this.directionX=s>0?z:s<0?L:0,this.directionY=o>0?H:o<0?E:0,!this.options.pullDownRefresh||!this._checkPullDown())if(this._checkClick(t))this.trigger("scrollCancel");else if(!this.resetPosition(this.options.bounceTime,Y.bounce)){this.scrollTo(i,e),this.endTime=h();var n=this.endTime-this.startTime,r=Math.abs(i-this.startX),a=Math.abs(e-this.startY);if(this._events.flick&&n<this.options.flickLimitTime&&r<this.options.flickLimitDistance&&a<this.options.flickLimitDistance)this.trigger("flick");else{var l=0;if(this.options.momentum&&n<this.options.momentumLimitTime&&(a>this.options.momentumLimitDistance||r>this.options.momentumLimitDistance)){var c=this.hasHorizontalScroll?C(this.x,this.startX,n,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options):{destination:i,duration:0},p=this.hasVerticalScroll?C(this.y,this.startY,n,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options):{destination:e,duration:0};i=c.destination,e=p.destination,l=Math.max(c.duration,p.duration),this.isInTransition=!0}else this.options.wheel&&(e=Math.round(e/this.itemHeight)*this.itemHeight,l=this.options.wheel.adjustTime||400);var u=Y.swipe;if(this.options.snap){var d=this._nearestSnap(i,e);this.currentPage=d,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-d.x),1e3),Math.min(Math.abs(e-d.y),1e3)),300),i=d.x,e=d.y,this.directionX=0,this.directionY=0,u=this.options.snap.easing||Y.bounce}if(i!==this.x||e!==this.y)return(i>0||i<this.maxScrollX||e>0||e<this.maxScrollY)&&(u=Y.swipeBounce),void this.scrollTo(i,e,l,u);this.options.wheel&&(this.selectedIndex=Math.round(Math.abs(this.y/this.itemHeight))),this.trigger("scrollEnd",{x:this.x,y:this.y})}}}},A.prototype._checkClick=function(t){var i,e,s,o=this.stopFromTransition&&!this.pulling;if(this.stopFromTransition=!1,!this.moved){if(this.options.wheel){if(this.target&&this.target.className===this.options.wheel.wheelWrapperClass){var n=Math.abs(Math.round(this.y/this.itemHeight)),r=Math.round((this.pointY+f(this.target).top-this.itemHeight/2)/this.itemHeight);this.target=this.items[n+r]}return this.scrollToElement(this.target,this.options.wheel.adjustTime||400,!0,!0,Y.swipe),!0}return!o&&(this.options.tap&&(i=t,e=this.options.tap,(s=document.createEvent("Event")).initEvent(e,!0,!0),s.pageX=i.pageX,s.pageY=i.pageY,i.target.dispatchEvent(s)),this.options.click&&!P(t.target,this.options.preventDefaultException)&&function(t){var i=void 0;"mouseup"===t.type||"mousecancel"===t.type?i=t:"touchend"!==t.type&&"touchcancel"!==t.type||(i=t.changedTouches[0]);var e={};i&&(e.screenX=i.screenX||0,e.screenY=i.screenY||0,e.clientX=i.clientX||0,e.clientY=i.clientY||0);var s=void 0;"undefined"!=typeof MouseEvent?s=new MouseEvent("click",l({bubbles:!0,cancelable:!1},e)):((s=document.createEvent("Event")).initEvent("click",!0,!1),l(s,e)),s._constructed=!0,t.target.dispatchEvent(s)}(t),!0)}return!1},A.prototype._resize=function(){var t=this;this.enabled&&(a&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling))},A.prototype._startProbe=function(){k(this.probeTimer),this.probeTimer=D(function i(){var e=t.getComputedPosition();t.trigger("scroll",e),t.isInTransition?t.probeTimer=D(i):t.trigger("scrollEnd",e)});var t=this},A.prototype._transitionProperty=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";this.scrollerStyle[_.transitionProperty]=t},A.prototype._transitionTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.scrollerStyle[_.transitionDuration]=t+"ms",this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[_.transitionDuration]=t+"ms";if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTime(t)},A.prototype._transitionTimingFunction=function(t){if(this.scrollerStyle[_.transitionTimingFunction]=t,this.options.wheel)for(var i=0;i<this.items.length;i++)this.items[i].style[_.transitionTimingFunction]=t;if(this.indicators)for(var e=0;e<this.indicators.length;e++)this.indicators[e].transitionTimingFunction(t)},A.prototype._transitionEnd=function(t){t.target===this.scroller&&this.isInTransition&&(this._transitionTime(),this.pulling||this.resetPosition(this.options.bounceTime,Y.bounce)||(this.isInTransition=!1,3!==this.options.probeType&&this.trigger("scrollEnd",{x:this.x,y:this.y})))},A.prototype._translate=function(t,i){if(this.options.useTransform?this.scrollerStyle[_.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.options.wheel)for(var e=this.options.wheel.rotate,s=void 0===e?25:e,o=0;o<this.items.length;o++){var n=s*(i/this.itemHeight+o);this.items[o].style[_.transform]="rotateX("+n+"deg)"}if(this.x=t,this.y=i,this.indicators)for(var r=0;r<this.indicators.length;r++)this.indicators[r].updatePosition()},A.prototype._animate=function(t,i,e,s){var o=this,n=this.x,r=this.y,a=h(),l=a+e;this.isAnimating=!0,k(this.animateTimer),function c(){var p=h();if(p>=l)return o.isAnimating=!1,o._translate(t,i),void(o.pulling||o.resetPosition(o.options.bounceTime)||o.trigger("scrollEnd",{x:o.x,y:o.y}));var u=s(p=(p-a)/e),d=(t-n)*u+n,m=(i-r)*u+r;o._translate(d,m),o.isAnimating&&(o.animateTimer=D(c)),3===o.options.probeType&&o.trigger("scroll",{x:o.x,y:o.y})}()},A.prototype.scrollBy=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;t=this.x+t,i=this.y+i,this.scrollTo(t,i,e,s)},A.prototype.scrollTo=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Y.bounce;this.isInTransition=this.options.useTransition&&e>0&&(t!==this.x||i!==this.y),!e||this.options.useTransition?(this._transitionProperty(),this._transitionTimingFunction(s.style),this._transitionTime(e),this._translate(t,i),e&&3===this.options.probeType&&this._startProbe(),this.options.wheel&&(i>0?this.selectedIndex=0:i<this.maxScrollY?this.selectedIndex=this.items.length-1:this.selectedIndex=Math.round(Math.abs(i/this.itemHeight)))):this._animate(t,i,e,s.fn)},A.prototype.scrollToElement=function(t,i,e,s,o){if(t&&(t=t.nodeType?t:this.scroller.querySelector(t),!this.options.wheel||t.className===this.options.wheel.wheelItemClass)){var n=f(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===e&&(e=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===s&&(s=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=e||0,n.top-=s||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,this.options.wheel&&(n.top=Math.round(n.top/this.itemHeight)*this.itemHeight),this.scrollTo(n.left,n.top,i,o)}},A.prototype.resetPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y.bounce,e=this.x,s=Math.round(e);!this.hasHorizontalScroll||s>0?e=0:s<this.maxScrollX&&(e=this.maxScrollX);var o=this.y,n=Math.round(o);return!this.hasVerticalScroll||n>0?o=0:n<this.maxScrollY&&(o=this.maxScrollY),(e!==this.x||o!==this.y)&&(this.scrollTo(e,o,t,i),!0)},A.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.scroller,null),i=void 0,e=void 0;return this.options.useTransform?(i=+((t=t[_.transform].split(")")[0].split(", "))[12]||t[4]),e=+(t[13]||t[5])):(i=+t.left.replace(/[^-\d.]/g,""),e=+t.top.replace(/[^-\d.]/g,"")),{x:i,y:e}},A.prototype.stop=function(){if(this.options.useTransition&&this.isInTransition){this.isInTransition=!1;var t=this.getComputedPosition();this._translate(t.x,t.y),this.options.wheel?this.target=this.items[Math.round(-t.y/this.itemHeight)]:this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0}else!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this.trigger("scrollEnd",{x:this.x,y:this.y}),this.stopFromTransition=!0)},A.prototype.destroy=function(){this.destroyed=!0,this.trigger("destroy"),this._removeDOMEvents(),this._events={}},(I=$).prototype.on=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;this._events[t]||(this._events[t]=[]),this._events[t].push([i,e])},I.prototype.once=function(t,i){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;function s(){this.off(t,s),i.apply(e,arguments)}s.fn=i,this.on(t,s)},I.prototype.off=function(t,i){var e=this._events[t];if(e)for(var s=e.length;s--;)(e[s][0]===i||e[s][0]&&e[s][0].fn===i)&&(e[s][0]=void 0)},I.prototype.trigger=function(t){var i=this._events[t];if(i)for(var e=i.length,n=[].concat(o(i)),r=0;r<e;r++){var a=n[r],h=s(a,2),l=h[0],c=h[1];l&&l.apply(c,[].slice.call(arguments,1))}},(F=$).prototype._initSnap=function(){var t=this;this.currentPage={};var i,e,s,o,n=this.options.snap;if(n.loop){var r=this.scroller.children;r.length>0&&(i=r[r.length-1].cloneNode(!0),(e=this.scroller).firstChild?(s=i,(o=e.firstChild).parentNode.insertBefore(s,o)):e.appendChild(i),this.scroller.appendChild(r[1].cloneNode(!0)))}var a=n.el;"string"==typeof a&&(a=this.scroller.querySelectorAll(a)),this.on("refresh",function(){if(t.pages=[],t.wrapperWidth&&t.wrapperHeight&&t.scrollerWidth&&t.scrollerHeight){var i=n.stepX||t.wrapperWidth,e=n.stepY||t.wrapperHeight,s=0,o=void 0,r=void 0,h=void 0,l=0,c=void 0,p=0,u=void 0,d=void 0;if(a)for(c=a.length,u=-1;l<c;l++)d=S(a[l]),(0===l||d.left<=S(a[l-1]).left)&&(p=0,u++),t.pages[p]||(t.pages[p]=[]),s=Math.max(-d.left,t.maxScrollX),o=Math.max(-d.top,t.maxScrollY),r=s-Math.round(d.width/2),h=o-Math.round(d.height/2),t.pages[p][u]={x:s,y:o,width:d.width,height:d.height,cx:r,cy:h},s>t.maxScrollX&&p++;else for(r=Math.round(i/2),h=Math.round(e/2);s>-t.scrollerWidth;){for(t.pages[l]=[],c=0,o=0;o>-t.scrollerHeight;)t.pages[l][c]={x:Math.max(s,t.maxScrollX),y:Math.max(o,t.maxScrollY),width:i,height:e,cx:s-r,cy:o-h},o-=e,c++;s-=i,l++}var m=n.loop?1:0;t._goToPage(t.currentPage.pageX||m,t.currentPage.pageY||0,0);var f=n.threshold;f%1==0?(t.snapThresholdX=f,t.snapThresholdY=f):(t.snapThresholdX=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width*f),t.snapThresholdY=Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height*f))}}),this.on("scrollEnd",function(){n.loop&&(0===t.currentPage.pageX&&t._goToPage(t.pages.length-2,t.currentPage.pageY,0),t.currentPage.pageX===t.pages.length-1&&t._goToPage(1,t.currentPage.pageY,0))}),!1!==n.listenFlick&&this.on("flick",function(){var i=n.speed||Math.max(Math.max(Math.min(Math.abs(t.x-t.startX),1e3),Math.min(Math.abs(t.y-t.startY),1e3)),300);t._goToPage(t.currentPage.pageX+t.directionX,t.currentPage.pageY+t.directionY,i)}),this.on("destroy",function(){if(n.loop){var i=t.scroller.children;i.length>2&&(M(t.scroller,i[i.length-1]),M(t.scroller,i[0]))}})},F.prototype._nearestSnap=function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var e=0;if(Math.abs(t-this.absStartX)<=this.snapThresholdX&&Math.abs(i-this.absStartY)<=this.snapThresholdY)return this.currentPage;t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);for(var s=this.pages.length;e<s;e++)if(t>=this.pages[e][0].cx){t=this.pages[e][0].x;break}s=this.pages[e].length;for(var o=0;o<s;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return e===this.currentPage.pageX&&((e+=this.directionX)<0?e=0:e>=this.pages.length&&(e=this.pages.length-1),t=this.pages[e][0].x),o===this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:e,pageY:o}},F.prototype._goToPage=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments[2],s=arguments[3],o=this.options.snap;if(o&&this.pages&&(s=s||o.easing||Y.bounce,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),this.pages[t])){i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var n=this.pages[t][i].x,r=this.pages[t][i].y;e=void 0===e?o.speed||Math.max(Math.max(Math.min(Math.abs(n-this.x),1e3),Math.min(Math.abs(r-this.y),1e3)),300):e,this.currentPage={x:n,y:r,pageX:t,pageY:i},this.scrollTo(n,r,e,s)}},F.prototype.goToPage=function(t,i,e,s){var o=this.options.snap;if(o){if(o.loop){var n=this.pages.length-2;t>=n?t=n-1:t<0&&(t=0),t+=1}this._goToPage(t,i,e,s)}},F.prototype.next=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;++e>=this.pages.length&&this.hasVerticalScroll&&(e=0,s++),this._goToPage(e,s,t,i)},F.prototype.prev=function(t,i){var e=this.currentPage.pageX,s=this.currentPage.pageY;--e<0&&this.hasVerticalScroll&&(e=0,s--),this._goToPage(e,s,t,i)},F.prototype.getCurrentPage=function(){var t=this.options.snap;return t?t.loop?l({},this.currentPage,{pageX:this.currentPage.pageX-1}):this.currentPage:null},(j=$).prototype.wheelTo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.options.wheel&&(this.y=-t*this.itemHeight,this.scrollTo(0,this.y))},j.prototype.getSelectedIndex=function(){return this.options.wheel&&this.selectedIndex},j.prototype._initWheel=function(){var t=this.options.wheel;t.wheelWrapperClass||(t.wheelWrapperClass="wheel-scroll"),t.wheelItemClass||(t.wheelItemClass="wheel-item"),void 0===t.selectedIndex&&(t.selectedIndex=0,O("wheel option selectedIndex is required!"))},(R=$).prototype._initScrollbar=function(){var t=this,i=this.options.scrollbar.fade,e=void 0===i||i;this.indicators=[];var s=void 0;this.options.scrollX&&(s={el:B("horizontal"),direction:"horizontal",fade:e},this._insertScrollBar(s.el),this.indicators.push(new V(this,s))),this.options.scrollY&&(s={el:B("vertical"),direction:"vertical",fade:e},this._insertScrollBar(s.el),this.indicators.push(new V(this,s))),this.on("refresh",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].refresh()}),e&&(this.on("scrollEnd",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollCancel",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade()}),this.on("scrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0)}),this.on("beforeScrollStart",function(){for(var i=0;i<t.indicators.length;i++)t.indicators[i].fade(!0,!0)})),this.on("destroy",function(){t._removeScrollBars()})},R.prototype._insertScrollBar=function(t){this.wrapper.appendChild(t)},R.prototype._removeScrollBars=function(){for(var t=0;t<this.indicators.length;t++)this.indicators[t].remove()},(N=$).prototype._initPullDown=function(){this.options.probeType=3},N.prototype._checkPullDown=function(){var t=this.options.pullDownRefresh,i=t.threshold,e=void 0===i?90:i,s=t.stop,o=void 0===s?40:s;return!(this.directionY!==H||this.y<e)&&(this.pulling||(this.pulling=!0,this.trigger("pullingDown")),this.scrollTo(this.x,o,this.options.bounceTime,Y.bounce),this.pulling)},N.prototype.finishPullDown=function(){this.pulling=!1,this.resetPosition(this.options.bounceTime,Y.bounce)},(U=$).prototype._initPullUp=function(){this.options.probeType=3,this.pullupWatching=!1,this._watchPullUp()},U.prototype._watchPullUp=function(){this.pullupWatching=!0;var t=this.options.pullUpLoad.threshold,i=void 0===t?0:t;this.on("scroll",function t(e){var s=this;this.movingDirectionY===E&&e.y<=this.maxScrollY+i&&(this.once("scrollEnd",function(){s.pullupWatching=!1}),this.trigger("pullingUp"),this.off("scroll",t))})},U.prototype.finishPullUp=function(){var t=this;this.pullupWatching?this.once("scrollEnd",function(){t._watchPullUp()}):this._watchPullUp()},$.Version="1.7.2";var q=$,Z={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},listenScroll:{type:Boolean,default:!0}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){if(this.$refs.wrapper){this.scroll=new q(this.$refs.wrapper,{probeType:this.probeType,click:this.click});var t=this;this.scroll.on("scroll",function(i){t.$emit("scroll",i)}),this.scroll.on("touchend",function(i){t.$emit("scrollEnd",i)})}},enable:function(){this.scr&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},J={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var Q=e("VU/8")(Z,J,!1,function(t){e("0+Zi")},null,null);i.a=Q.exports},"4+e5":function(t,i){},"49Cw":function(t,i){},"85gW":function(t,i){},ICQ2:function(t,i,e){t.exports=e.p+"static/img/toxian.dbc47b6.jpg"},JzjZ:function(t,i,e){t.exports=e.p+"static/img/longbo.e811f80.jpg"},KR8f:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("0tE7"),o=e("0xDb"),n={data:function(){return{id:"",index:null,popupVisible:!1,slots:[{flex:1,values:["双优","鱼池","星火[广州]","星火[华北]","星火[华南]","鱼池2"],className:"slot1",textAlign:"right"}],list:[{name:"矿机1",gpu:2,mine:"星火[广州]",date:"2018.10.01",id:"12323"},{name:"矿机2",gpu:2,mine:"双优",date:"2018.10.01",id:"123323"},{name:"矿机3",gpu:2,mine:"星火",date:"2018.10.01",id:"121233"},{name:"矿机4",gpu:2,mine:"星火[华北]",date:"2018.10.01",id:"12123323"},{name:"矿机1",gpu:2,mine:"双优",date:"2018.10.01",id:"12121sf32fs3"},{name:"矿机1",gpu:2,mine:"星火[华北]",date:"2018.10.01",id:"12123df232fs3"},{name:"矿机1",gpu:2,mine:"星火[华南]",date:"2018.10.01",id:"12123asdf232fs3"}]}},methods:{screenList:function(){this.$router.push({path:"/miningList"})},goPage:function(t){this.$router.push({path:"/mineDetails",query:{id:t}})},clickMining:function(t,i){this.id=t,this.index=i,this.popupVisible=!0},onValuesChange:function(t,i){(this.index||0===this.index)&&(this.list[this.index].mine=i[0])},touchDom:function(t,i){Object(o.f)(t,i)}},components:{Scroll:s.a}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home"},[s("mt-swipe",{staticClass:"home-lun",attrs:{auto:4e3}},[s("mt-swipe-item",[s("img",{staticClass:"home-lun_img",attrs:{src:e("JzjZ")}})]),t._v(" "),s("mt-swipe-item",[s("img",{staticClass:"home-lun_img",attrs:{src:e("opx+")}})]),t._v(" "),s("mt-swipe-item",[s("img",{staticClass:"home-lun_img",attrs:{src:e("svfi")}})])],1),t._v(" "),s("div",{staticClass:"home-center"},[s("div",{staticClass:"home-statistics"},[s("div",[t._v("矿机台数\n        "),s("span",{staticClass:"bold"},[t._v(t._s(2))]),t._v("台")]),t._v(" "),s("div",[t._v("\n        gpu数\n        "),s("span",{staticClass:"bold"},[t._v(t._s(3))]),t._v("个\n      ")])]),t._v(" "),s("div",{staticClass:"home-global"},[s("div",{staticClass:"home-global_header"},[t._v("\n        全局统计\n        "),s("mt-button",{staticClass:"global-header_btn",attrs:{size:"small",type:"primary"},on:{click:t.screenList}},[t._v("筛选")])],1),t._v(" "),s("Scroll",{staticClass:"home-scroll",attrs:{data:t.list}},[s("ul",{staticClass:"home-global_ul",on:{touchstart:function(i){t.touchDom(i,"add")},touchend:function(i){t.touchDom(i,"rem")}}},t._l(t.list,function(i,e){return s("li",{key:i.id,staticClass:"home-global_li"},[s("div",{staticClass:"global-li_left"},[s("span",{staticClass:"li-left_span"},[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"li-left_bottom"},[s("span",[t._v("gpu数"+t._s(i.gpu))]),t._v(" "),s("span",{staticClass:"li-left_btn",on:{click:function(s){t.clickMining(i.id,e)}}},[t._v(t._s(i.mine))]),t._v(" "),s("p",[t._v(t._s(i.date))])])]),t._v(" "),s("div",{staticClass:"li-right_icon",on:{click:function(e){t.goPage(i.id)}}},[s("i",{staticClass:"iconfont icon-jiantouyou"})])])}))])],1)]),t._v(" "),s("mt-popup",{attrs:{position:"center","popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(i){t.popupVisible=i},expression:"popupVisible"}},[s("mt-picker",{attrs:{slots:t.slots},on:{change:t.onValuesChange}})],1)],1)},staticRenderFns:[]};var a=e("VU/8")(n,r,!1,function(t){e("4+e5"),e("85gW")},"data-v-fe1b2272",null);i.default=a.exports},NCvq:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("0tE7"),o=e("0xDb"),n={data:function(){return{list:[{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"2"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"323"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"4"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"5"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"8"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"326"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"77"},{img:"../../assets/img/kuan.jpg",title:"1号矿机",temperature:"50",hashrate:"58.65",card:"33"}]}},components:{Scroll:s.a},methods:{getAnomaly:function(t){this.$router.push({path:"/anomalyDetals",query:{id:t}})},touchDom:function(t,i){Object(o.f)(t,i)}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"home"},[s("Scroll",{staticClass:"home-scroll",attrs:{data:t.list}},[s("ul",{staticClass:"hom-ul",on:{touchstart:function(i){t.touchDom(i,"add")},touchend:function(i){t.touchDom(i,"rem")}}},t._l(t.list,function(i,o){return s("router-link",{key:i.card,staticClass:"home-li",attrs:{tag:"li",to:{path:"/anomalyDetals",query:{id:i.card}}}},[s("div",{staticClass:"home-img"},[s("img",{attrs:{src:e("svfi")}})]),t._v(" "),s("div",{staticClass:"home-text"},[s("h3",[t._v(t._s(i.title))]),t._v(" "),s("div",{staticClass:"home-text_bottom"},[s("span",[t._v("温度:"+t._s(i.temperature))]),t._v(" "),s("span",[t._v("算力:"+t._s(i.hashrate))]),t._v(" "),s("span",[t._v("显卡:"+t._s(i.card)+"个")])])])])}))])],1)},staticRenderFns:[]};var a=e("VU/8")(n,r,!1,function(t){e("z54i")},"data-v-72f88cfd",null);i.default=a.exports},"opx+":function(t,i,e){t.exports=e.p+"static/img/lunbo2.b42b736.jpg"},svfi:function(t,i,e){t.exports=e.p+"static/img/kuan.6f163f6.jpg"},z54i:function(t,i){}});