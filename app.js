!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t,n){e.exports=n.p+"goblin.png"},function(e,t,n){"use strict";n.r(t);n(0);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.points=0,this.miss=0}var t,n,r;return t=e,(n=[{key:"hit",value:function(e){var t=this,n=setTimeout((function(){t.miss+=1,t.stats()}),1e3);e.addEventListener("click",(function(){e.parentNode.innerHTML="",t.points+=1,clearTimeout(n),t.stats()}))}},{key:"stats",value:function(){if("undefined"!=typeof document){var e=document.getElementById("miss"),t=document.getElementById("points");null!==e&&(e.textContent=this.miss),null!==t&&(t.textContent=this.points)}}},{key:"checkWin",value:function(){if("undefined"!=typeof document)return this.miss>=5&&(document.getElementById("stat").textContent="Игра закончена. Вы набрали ".concat(this.points," очков!"),!0)}}])&&o(t.prototype,n),r&&o(t,r),e}();function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.game=new r,this.start=null}var t,n,o;return t=e,(n=[{key:"drawBoard",value:function(e){var t=this;if("undefined"!=typeof document){for(var n=document.getElementById("board-container"),o=0;o<e;o+=1){var r=document.createElement("div");r.className="field",r.id="field".concat(o),n.appendChild(r)}this.start=setInterval((function(){t.changeCell(e)}),1e3)}}},{key:"changeCell",value:function(e){if("undefined"!=typeof document){var t=Math.floor(Math.random()*e),n=document.getElementById("field".concat(t)),o=document.querySelector("img.goblin");o&&(o.parentNode.innerHTML=""),n.innerHTML='<img class="goblin" src="goblin.png">';var r=document.querySelector("img.goblin");this.game.hit(r),this.game.checkWin()&&this.stop()}}},{key:"stop",value:function(){clearInterval(this.start)}}])&&i(t.prototype,n),o&&i(t,o),e}())).drawBoard(16);n(1)}]);