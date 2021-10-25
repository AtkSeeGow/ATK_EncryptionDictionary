/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});

;/*



     Creative Tim Modifications

     Lines: 238, 239 was changed from top: 5px to top: 50% and we added margin-top: -13px. In this way the close button will be aligned vertically
     Line:222 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.




*/


/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */

/* global define:false, require: false, jQuery:false */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  // Create the defaults once
  var defaults = {
    element: 'body',
    position: null,
    type: "info",
    allow_dismiss: true,
    allow_duplicates: true,
    newest_on_top: false,
    showProgressbar: false,
    placement: {
      from: "top",
      align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1060,
    delay: 5000,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: 'class',
    template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="tim-icons icon-simple-remove"></i></button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
  };

  String.format = function() {
    var args = arguments;
    var str = arguments[0];
    return str.replace(/(\{\{\d\}\}|\{\d\})/g, function(str) {
      if (str.substring(0, 2) === "{{") return str;
      var num = parseInt(str.match(/\d/)[0]);
      return args[num + 1];
    });
  };

  function isDuplicateNotification(notification) {
    var isDupe = false;

    $('[data-notify="container"]').each(function(i, el) {
      var $el = $(el);
      var title = $el.find('[data-notify="title"]').html().trim();
      var message = $el.find('[data-notify="message"]').html().trim();

      // The input string might be different than the actual parsed HTML string!
      // (<br> vs <br /> for example)
      // So we have to force-parse this as HTML here!
      var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
      var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
      var isSameType = $el.hasClass('alert-' + notification.settings.type);

      if (isSameTitle && isSameMsg && isSameType) {
        //we found the dupe. Set the var and stop checking.
        isDupe = true;
      }
      return !isDupe;
    });

    return isDupe;
  }

  function Notify(element, content, options) {
    // Setup Content of Notify
    var contentObj = {
      content: {
        message: typeof content === 'object' ? content.message : content,
        title: content.title ? content.title : '',
        icon: content.icon ? content.icon : '',
        url: content.url ? content.url : '#',
        target: content.target ? content.target : '-'
      }
    };

    options = $.extend(true, {}, contentObj, options);
    this.settings = $.extend(true, {}, defaults, options);
    this._defaults = defaults;
    if (this.settings.content.target === "-") {
      this.settings.content.target = this.settings.url_target;
    }
    this.animations = {
      start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
      end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
    };

    if (typeof this.settings.offset === 'number') {
      this.settings.offset = {
        x: this.settings.offset,
        y: this.settings.offset
      };
    }

    //if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing
    if (this.settings.allow_duplicates || (!this.settings.allow_duplicates && !isDuplicateNotification(this))) {
      this.init();
    }
  }

  $.extend(Notify.prototype, {
    init: function() {
      var self = this;

      this.buildNotify();
      if (this.settings.content.icon) {
        this.setIcon();
      }
      if (this.settings.content.url != "#") {
        this.styleURL();
      }
      this.styleDismiss();
      this.placement();
      this.bind();

      this.notify = {
        $ele: this.$ele,
        update: function(command, update) {
          var commands = {};
          if (typeof command === "string") {
            commands[command] = update;
          } else {
            commands = command;
          }
          for (var cmd in commands) {
            switch (cmd) {
              case "type":
                this.$ele.removeClass('alert-' + self.settings.type);
                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
                self.settings.type = commands[cmd];
                this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
                break;
              case "icon":
                var $icon = this.$ele.find('[data-notify="icon"]');
                if (self.settings.icon_type.toLowerCase() === 'class') {
                  $icon.removeClass(self.settings.content.icon).addClass(commands[cmd]);
                } else {
                  if (!$icon.is('img')) {
                    $icon.find('img');
                  }
                  $icon.attr('src', commands[cmd]);
                }
                self.settings.content.icon = commands[command];
                break;
              case "progress":
                var newDelay = self.settings.delay - (self.settings.delay * (commands[cmd] / 100));
                this.$ele.data('notify-delay', newDelay);
                this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
                break;
              case "url":
                this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
                break;
              case "target":
                this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
                break;
              default:
                this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
            }
          }
          var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
          self.reposition(posX);
        },
        close: function() {
          self.close();
        }
      };

    },
    buildNotify: function() {
      var content = this.settings.content;
      this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
      this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
      if (!this.settings.allow_dismiss) {
        this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
      }
      if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
        this.$ele.find('[data-notify="progressbar"]').remove();
      }
    },
    setIcon: function() {
      this.$ele.addClass('alert-with-icon');

      if (this.settings.icon_type.toLowerCase() === 'class') {
        this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
      } else {
        if (this.$ele.find('[data-notify="icon"]').is('img')) {
          this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
        } else {
          this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
        }
      }
    },
    styleDismiss: function() {
      this.$ele.find('[data-notify="dismiss"]').css({
        position: 'absolute',
        right: '10px',
        top: '50%',
        marginTop: '-13px',
        zIndex: this.settings.z_index + 2
      });
    },
    styleURL: function() {
      this.$ele.find('[data-notify="url"]').css({
        backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: this.settings.z_index + 1
      });
    },
    placement: function() {
      var self = this,
        offsetAmt = this.settings.offset.y,
        css = {
          display: 'inline-block',
          margin: '0px auto',
          position: this.settings.position ? this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
          transition: 'all .5s ease-in-out',
          zIndex: this.settings.z_index
        },
        hasAnimation = false,
        settings = this.settings;

      $('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
        offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
      });
      if (this.settings.newest_on_top === true) {
        offsetAmt = this.settings.offset.y;
      }
      css[this.settings.placement.from] = offsetAmt + 'px';

      switch (this.settings.placement.align) {
        case "left":
        case "right":
          css[this.settings.placement.align] = this.settings.offset.x + 'px';
          break;
        case "center":
          css.left = 0;
          css.right = 0;
          break;
      }
      this.$ele.css(css).addClass(this.settings.animate.enter);
      $.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function(index, prefix) {
        self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
      });

      $(this.settings.element).append(this.$ele);

      if (this.settings.newest_on_top === true) {
        offsetAmt = (parseInt(offsetAmt) + parseInt(this.settings.spacing)) + this.$ele.outerHeight();
        this.reposition(offsetAmt);
      }

      if ($.isFunction(self.settings.onShow)) {
        self.settings.onShow.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function() {
        hasAnimation = true;
      }).one(this.animations.end, function() {
        self.$ele.removeClass(self.settings.animate.enter);
        if ($.isFunction(self.settings.onShown)) {
          self.settings.onShown.call(this);
        }
      });

      setTimeout(function() {
        if (!hasAnimation) {
          if ($.isFunction(self.settings.onShown)) {
            self.settings.onShown.call(this);
          }
        }
      }, 600);
    },
    bind: function() {
      var self = this;

      this.$ele.find('[data-notify="dismiss"]').on('click', function() {
        self.close();
      });

      if ($.isFunction(self.settings.onClick)) {
        this.$ele.on('click', function(event) {
          if (event.target != self.$ele.find('[data-notify="dismiss"]')[0]) {
            self.settings.onClick.call(this, event);
          }
        });
      }

      this.$ele.mouseover(function() {
        $(this).data('data-hover', "true");
      }).mouseout(function() {
        $(this).data('data-hover', "false");
      });
      this.$ele.data('data-hover', "false");

      if (this.settings.delay > 0) {
        self.$ele.data('notify-delay', self.settings.delay);
        var timer = setInterval(function() {
          var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
          if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause") || self.settings.mouse_over != "pause") {
            var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
            self.$ele.data('notify-delay', delay);
            self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
          }
          if (delay <= -(self.settings.timer)) {
            clearInterval(timer);
            self.close();
          }
        }, self.settings.timer);
      }
    },
    close: function() {
      var self = this,
        posX = parseInt(this.$ele.css(this.settings.placement.from)),
        hasAnimation = false;

      this.$ele.attr('data-closing', 'true').addClass(this.settings.animate.exit);
      self.reposition(posX);

      if ($.isFunction(self.settings.onClose)) {
        self.settings.onClose.call(this.$ele);
      }

      this.$ele.one(this.animations.start, function() {
        hasAnimation = true;
      }).one(this.animations.end, function() {
        $(this).remove();
        if ($.isFunction(self.settings.onClosed)) {
          self.settings.onClosed.call(this);
        }
      });

      setTimeout(function() {
        if (!hasAnimation) {
          self.$ele.remove();
          if (self.settings.onClosed) {
            self.settings.onClosed(self.$ele);
          }
        }
      }, 600);
    },
    reposition: function(posX) {
      var self = this,
        notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
        $elements = this.$ele.nextAll(notifies);
      if (this.settings.newest_on_top === true) {
        $elements = this.$ele.prevAll(notifies);
      }
      $elements.each(function() {
        $(this).css(self.settings.placement.from, posX);
        posX = (parseInt(posX) + parseInt(self.settings.spacing)) + $(this).outerHeight();
      });
    }
  });

  $.notify = function(content, options) {
    var plugin = new Notify(this, content, options);
    return plugin.notify;
  };
  $.notifyDefaults = function(options) {
    defaults = $.extend(true, {}, defaults, options);
    return defaults;
  };

  $.notifyClose = function(selector) {

    if (typeof selector === "undefined" || selector === "all") {
      $('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('.alert-' + selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else if (selector) {
      $(selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify-position="' + selector + '"]').find('[data-notify="dismiss"]').trigger('click');
    }
  };

  $.notifyCloseExcept = function(selector) {

    if (selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger') {
      $('[data-notify]').not('.alert-' + selector).find('[data-notify="dismiss"]').trigger('click');
    } else {
      $('[data-notify]').not(selector).find('[data-notify="dismiss"]').trigger('click');
    }
  };


}));
;/*! jQuery UI - v1.11.1 - 2014-09-17
* http://jqueryui.com
* Includes: widget.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.1
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));

;/*
 * jQuery File Upload Plugin 5.42.0
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (limitSize && (!filesLength || files[0].size === undefined)) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                clone = $(this.element[0].cloneNode(false));
            // Initialize options set via HTML5 data-attributes:
            $.each(
                clone.data(),
                function (key, value) {
                    var dataAttributeName = 'data-' +
                        // Convert camelCase to hyphen-ated key:
                        key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (clone.attr(dataAttributeName)) {
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

;/* @license
morris.js v0.5.0
Copyright 2014 Olly Smith All rights reserved.
Licensed under the BSD-2-Clause License.
*/


(function() {
  var $, Morris, minutesSpecHelper, secondsSpecHelper,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Morris = window.Morris = {};

  $ = jQuery;

  Morris.EventEmitter = (function() {
    function EventEmitter() {}

    EventEmitter.prototype.on = function(name, handler) {
      if (this.handlers == null) {
        this.handlers = {};
      }
      if (this.handlers[name] == null) {
        this.handlers[name] = [];
      }
      this.handlers[name].push(handler);
      return this;
    };

    EventEmitter.prototype.fire = function() {
      var args, handler, name, _i, _len, _ref, _results;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((this.handlers != null) && (this.handlers[name] != null)) {
        _ref = this.handlers[name];
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          handler = _ref[_i];
          _results.push(handler.apply(null, args));
        }
        return _results;
      }
    };

    return EventEmitter;

  })();

  Morris.commas = function(num) {
    var absnum, intnum, ret, strabsnum;
    if (num != null) {
      ret = num < 0 ? "-" : "";
      absnum = Math.abs(num);
      intnum = Math.floor(absnum).toFixed(0);
      ret += intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
      strabsnum = absnum.toString();
      if (strabsnum.length > intnum.length) {
        ret += strabsnum.slice(intnum.length);
      }
      return ret;
    } else {
      return '-';
    }
  };

  Morris.pad2 = function(number) {
    return (number < 10 ? '0' : '') + number;
  };

  Morris.Grid = (function(_super) {
    __extends(Grid, _super);

    function Grid(options) {
      this.resizeHandler = __bind(this.resizeHandler, this);
      var _this = this;
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if ((this.el == null) || this.el.length === 0) {
        throw new Error("Graph container element not found");
      }
      if (this.el.css('position') === 'static') {
        this.el.css('position', 'relative');
      }
      this.options = $.extend({}, this.gridDefaults, this.defaults || {}, options);
      if (typeof this.options.units === 'string') {
        this.options.postUnits = options.units;
      }
      this.raphael = new Raphael(this.el[0]);
      this.elementWidth = null;
      this.elementHeight = null;
      this.dirty = false;
      this.selectFrom = null;
      if (this.init) {
        this.init();
      }
      this.setData(this.options.data);
      this.el.bind('mousemove', function(evt) {
        var left, offset, right, width, x;
        offset = _this.el.offset();
        x = evt.pageX - offset.left;
        if (_this.selectFrom) {
          left = _this.data[_this.hitTest(Math.min(x, _this.selectFrom))]._x;
          right = _this.data[_this.hitTest(Math.max(x, _this.selectFrom))]._x;
          width = right - left;
          return _this.selectionRect.attr({
            x: left,
            width: width
          });
        } else {
          return _this.fire('hovermove', x, evt.pageY - offset.top);
        }
      });
      this.el.bind('mouseleave', function(evt) {
        if (_this.selectFrom) {
          _this.selectionRect.hide();
          _this.selectFrom = null;
        }
        return _this.fire('hoverout');
      });
      this.el.bind('touchstart touchmove touchend', function(evt) {
        var offset, touch;
        touch = evt.originalEvent.touches[0] || evt.originalEvent.changedTouches[0];
        offset = _this.el.offset();
        return _this.fire('hovermove', touch.pageX - offset.left, touch.pageY - offset.top);
      });
      this.el.bind('click', function(evt) {
        var offset;
        offset = _this.el.offset();
        return _this.fire('gridclick', evt.pageX - offset.left, evt.pageY - offset.top);
      });
      if (this.options.rangeSelect) {
        this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
          fill: this.options.rangeSelectColor,
          stroke: false
        }).toBack().hide();
        this.el.bind('mousedown', function(evt) {
          var offset;
          offset = _this.el.offset();
          return _this.startRange(evt.pageX - offset.left);
        });
        this.el.bind('mouseup', function(evt) {
          var offset;
          offset = _this.el.offset();
          _this.endRange(evt.pageX - offset.left);
          return _this.fire('hovermove', evt.pageX - offset.left, evt.pageY - offset.top);
        });
      }
      if (this.options.resize) {
        $(window).bind('resize', function(evt) {
          if (_this.timeoutId != null) {
            window.clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = window.setTimeout(_this.resizeHandler, 100);
        });
      }
      this.el.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
      if (this.postInit) {
        this.postInit();
      }
    }

    Grid.prototype.gridDefaults = {
      dateFormat: null,
      axes: true,
      grid: true,
      gridLineColor: '#aaa',
      gridStrokeWidth: 0.5,
      gridTextColor: '#888',
      gridTextSize: 12,
      gridTextFamily: 'gensen',
      gridTextWeight: 'normal',
      hideHover: false,
      yLabelFormat: null,
      xLabelAngle: 0,
      numLines: 5,
      padding: 25,
      parseTime: true,
      postUnits: '',
      preUnits: '',
      ymax: 'auto',
      ymin: 'auto 0',
      goals: [],
      goalStrokeWidth: 1.0,
      goalLineColors: ['#666633', '#999966', '#cc6666', '#663333'],
      events: [],
      eventStrokeWidth: 1.0,
      eventLineColors: ['#005a04', '#ccffbb', '#3a5f0b', '#005502'],
      rangeSelect: null,
      rangeSelectColor: '#eef',
      resize: false
    };

    Grid.prototype.setData = function(data, redraw) {
      var e, idx, index, maxGoal, minGoal, ret, row, step, total, y, ykey, ymax, ymin, yval, _ref;
      if (redraw == null) {
        redraw = true;
      }
      this.options.data = data;
      if ((data == null) || data.length === 0) {
        this.data = [];
        this.raphael.clear();
        if (this.hover != null) {
          this.hover.hide();
        }
        return;
      }
      ymax = this.cumulative ? 0 : null;
      ymin = this.cumulative ? 0 : null;
      if (this.options.goals.length > 0) {
        minGoal = Math.min.apply(Math, this.options.goals);
        maxGoal = Math.max.apply(Math, this.options.goals);
        ymin = ymin != null ? Math.min(ymin, minGoal) : minGoal;
        ymax = ymax != null ? Math.max(ymax, maxGoal) : maxGoal;
      }
      this.data = (function() {
        var _i, _len, _results;
        _results = [];
        for (index = _i = 0, _len = data.length; _i < _len; index = ++_i) {
          row = data[index];
          ret = {
            src: row
          };
          ret.label = row[this.options.xkey];
          if (this.options.parseTime) {
            ret.x = Morris.parseDate(ret.label);
            if (this.options.dateFormat) {
              ret.label = this.options.dateFormat(ret.x);
            } else if (typeof ret.label === 'number') {
              ret.label = new Date(ret.label).toString();
            }
          } else {
            ret.x = index;
            if (this.options.xLabelFormat) {
              ret.label = this.options.xLabelFormat(ret);
            }
          }
          total = 0;
          ret.y = (function() {
            var _j, _len1, _ref, _results1;
            _ref = this.options.ykeys;
            _results1 = [];
            for (idx = _j = 0, _len1 = _ref.length; _j < _len1; idx = ++_j) {
              ykey = _ref[idx];
              yval = row[ykey];
              if (typeof yval === 'string') {
                yval = parseFloat(yval);
              }
              if ((yval != null) && typeof yval !== 'number') {
                yval = null;
              }
              if (yval != null) {
                if (this.cumulative) {
                  total += yval;
                } else {
                  if (ymax != null) {
                    ymax = Math.max(yval, ymax);
                    ymin = Math.min(yval, ymin);
                  } else {
                    ymax = ymin = yval;
                  }
                }
              }
              if (this.cumulative && (total != null)) {
                ymax = Math.max(total, ymax);
                ymin = Math.min(total, ymin);
              }
              _results1.push(yval);
            }
            return _results1;
          }).call(this);
          _results.push(ret);
        }
        return _results;
      }).call(this);
      if (this.options.parseTime) {
        this.data = this.data.sort(function(a, b) {
          return (a.x > b.x) - (b.x > a.x);
        });
      }
      this.xmin = this.data[0].x;
      this.xmax = this.data[this.data.length - 1].x;
      this.events = [];
      if (this.options.events.length > 0) {
        if (this.options.parseTime) {
          this.events = (function() {
            var _i, _len, _ref, _results;
            _ref = this.options.events;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              e = _ref[_i];
              _results.push(Morris.parseDate(e));
            }
            return _results;
          }).call(this);
        } else {
          this.events = this.options.events;
        }
        this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events));
        this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events));
      }
      if (this.xmin === this.xmax) {
        this.xmin -= 1;
        this.xmax += 1;
      }
      this.ymin = this.yboundary('min', ymin);
      this.ymax = this.yboundary('max', ymax);
      if (this.ymin === this.ymax) {
        if (ymin) {
          this.ymin -= 1;
        }
        this.ymax += 1;
      }
      if (((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'y') || this.options.grid === true) {
        if (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin) {
          this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines);
          this.ymin = Math.min(this.ymin, this.grid[0]);
          this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1]);
        } else {
          step = (this.ymax - this.ymin) / (this.options.numLines - 1);
          this.grid = (function() {
            var _i, _ref1, _ref2, _results;
            _results = [];
            for (y = _i = _ref1 = this.ymin, _ref2 = this.ymax; step > 0 ? _i <= _ref2 : _i >= _ref2; y = _i += step) {
              _results.push(y);
            }
            return _results;
          }).call(this);
        }
      }
      this.dirty = true;
      if (redraw) {
        return this.redraw();
      }
    };

    Grid.prototype.yboundary = function(boundaryType, currentValue) {
      var boundaryOption, suggestedValue;
      boundaryOption = this.options["y" + boundaryType];
      if (typeof boundaryOption === 'string') {
        if (boundaryOption.slice(0, 4) === 'auto') {
          if (boundaryOption.length > 5) {
            suggestedValue = parseInt(boundaryOption.slice(5), 10);
            if (currentValue == null) {
              return suggestedValue;
            }
            return Math[boundaryType](currentValue, suggestedValue);
          } else {
            if (currentValue != null) {
              return currentValue;
            } else {
              return 0;
            }
          }
        } else {
          return parseInt(boundaryOption, 10);
        }
      } else {
        return boundaryOption;
      }
    };

    Grid.prototype.autoGridLines = function(ymin, ymax, nlines) {
      var gmax, gmin, grid, smag, span, step, unit, y, ymag;
      span = ymax - ymin;
      ymag = Math.floor(Math.log(span) / Math.log(10));
      unit = Math.pow(10, ymag);
      gmin = Math.floor(ymin / unit) * unit;
      gmax = Math.ceil(ymax / unit) * unit;
      step = (gmax - gmin) / (nlines - 1);
      if (unit === 1 && step > 1 && Math.ceil(step) !== step) {
        step = Math.ceil(step);
        gmax = gmin + step * (nlines - 1);
      }
      if (gmin < 0 && gmax > 0) {
        gmin = Math.floor(ymin / step) * step;
        gmax = Math.ceil(ymax / step) * step;
      }
      if (step < 1) {
        smag = Math.floor(Math.log(step) / Math.log(10));
        grid = (function() {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(parseFloat(y.toFixed(1 - smag)));
          }
          return _results;
        })();
      } else {
        grid = (function() {
          var _i, _results;
          _results = [];
          for (y = _i = gmin; step > 0 ? _i <= gmax : _i >= gmax; y = _i += step) {
            _results.push(y);
          }
          return _results;
        })();
      }
      return grid;
    };

    Grid.prototype._calc = function() {
      var bottomOffsets, gridLine, h, i, w, yLabelWidths, _ref, _ref1;
      w = this.el.width();
      h = this.el.height();
      if (this.elementWidth !== w || this.elementHeight !== h || this.dirty) {
        this.elementWidth = w;
        this.elementHeight = h;
        this.dirty = false;
        this.left = this.options.padding;
        this.right = this.elementWidth - this.options.padding;
        this.top = this.options.padding;
        this.bottom = this.elementHeight - this.options.padding;
        if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'y') {
          yLabelWidths = (function() {
            var _i, _len, _ref1, _results;
            _ref1 = this.grid;
            _results = [];
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              gridLine = _ref1[_i];
              _results.push(this.measureText(this.yAxisFormat(gridLine)).width);
            }
            return _results;
          }).call(this);
          this.left += Math.max.apply(Math, yLabelWidths);
        }
        if ((_ref1 = this.options.axes) === true || _ref1 === 'both' || _ref1 === 'x') {
          bottomOffsets = (function() {
            var _i, _ref2, _results;
            _results = [];
            for (i = _i = 0, _ref2 = this.data.length; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; i = 0 <= _ref2 ? ++_i : --_i) {
              _results.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
            }
            return _results;
          }).call(this);
          this.bottom -= Math.max.apply(Math, bottomOffsets);
        }
        this.width = Math.max(1, this.right - this.left);
        this.height = Math.max(1, this.bottom - this.top);
        this.dx = this.width / (this.xmax - this.xmin);
        this.dy = this.height / (this.ymax - this.ymin);
        if (this.calc) {
          return this.calc();
        }
      }
    };

    Grid.prototype.transY = function(y) {
      return this.bottom - (y - this.ymin) * this.dy;
    };

    Grid.prototype.transX = function(x) {
      if (this.data.length === 1) {
        return (this.left + this.right) / 2;
      } else {
        return this.left + (x - this.xmin) * this.dx;
      }
    };

    Grid.prototype.redraw = function() {
      this.raphael.clear();
      this._calc();
      this.drawGrid();
      this.drawGoals();
      this.drawEvents();
      if (this.draw) {
        return this.draw();
      }
    };

    Grid.prototype.measureText = function(text, angle) {
      var ret, tt;
      if (angle == null) {
        angle = 0;
      }
      tt = this.raphael.text(100, 100, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).rotate(angle);
      ret = tt.getBBox();
      tt.remove();
      return ret;
    };

    Grid.prototype.yAxisFormat = function(label) {
      return this.yLabelFormat(label);
    };

    Grid.prototype.yLabelFormat = function(label) {
      if (typeof this.options.yLabelFormat === 'function') {
        return this.options.yLabelFormat(label);
      } else {
        return "" + this.options.preUnits + (Morris.commas(label)) + this.options.postUnits;
      }
    };

    Grid.prototype.drawGrid = function() {
      var lineY, y, _i, _len, _ref, _ref1, _ref2, _results;
      if (this.options.grid === false && ((_ref = this.options.axes) !== true && _ref !== 'both' && _ref !== 'y')) {
        return;
      }
      _ref1 = this.grid;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        lineY = _ref1[_i];
        y = this.transY(lineY);
        if ((_ref2 = this.options.axes) === true || _ref2 === 'both' || _ref2 === 'y') {
          this.drawYAxisLabel(this.left - this.options.padding / 2, y, this.yAxisFormat(lineY));
        }
        if (this.options.grid) {
          _results.push(this.drawGridLine("M" + this.left + "," + y + "H" + (this.left + this.width)));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Grid.prototype.drawGoals = function() {
      var color, goal, i, _i, _len, _ref, _results;
      _ref = this.options.goals;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        goal = _ref[i];
        color = this.options.goalLineColors[i % this.options.goalLineColors.length];
        _results.push(this.drawGoal(goal, color));
      }
      return _results;
    };

    Grid.prototype.drawEvents = function() {
      var color, event, i, _i, _len, _ref, _results;
      _ref = this.events;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        event = _ref[i];
        color = this.options.eventLineColors[i % this.options.eventLineColors.length];
        _results.push(this.drawEvent(event, color));
      }
      return _results;
    };

    Grid.prototype.drawGoal = function(goal, color) {
      return this.raphael.path("M" + this.left + "," + (this.transY(goal)) + "H" + this.right).attr('stroke', color).attr('stroke-width', this.options.goalStrokeWidth);
    };

    Grid.prototype.drawEvent = function(event, color) {
      return this.raphael.path("M" + (this.transX(event)) + "," + this.bottom + "V" + this.top).attr('stroke', color).attr('stroke-width', this.options.eventStrokeWidth);
    };

    Grid.prototype.drawYAxisLabel = function(xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor).attr('text-anchor', 'end');
    };

    Grid.prototype.drawGridLine = function(path) {
      return this.raphael.path(path).attr('stroke', this.options.gridLineColor).attr('stroke-width', this.options.gridStrokeWidth);
    };

    Grid.prototype.startRange = function(x) {
      this.hover.hide();
      this.selectFrom = x;
      return this.selectionRect.attr({
        x: x,
        width: 0
      }).show();
    };

    Grid.prototype.endRange = function(x) {
      var end, start;
      if (this.selectFrom) {
        start = Math.min(this.selectFrom, x);
        end = Math.max(this.selectFrom, x);
        this.options.rangeSelect.call(this.el, {
          start: this.data[this.hitTest(start)].x,
          end: this.data[this.hitTest(end)].x
        });
        return this.selectFrom = null;
      }
    };

    Grid.prototype.resizeHandler = function() {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };

    return Grid;

  })(Morris.EventEmitter);

  Morris.parseDate = function(date) {
    var isecs, m, msecs, n, o, offsetmins, p, q, r, ret, secs;
    if (typeof date === 'number') {
      return date;
    }
    m = date.match(/^(\d+) Q(\d)$/);
    n = date.match(/^(\d+)-(\d+)$/);
    o = date.match(/^(\d+)-(\d+)-(\d+)$/);
    p = date.match(/^(\d+) W(\d+)$/);
    q = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);
    r = date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);
    if (m) {
      return new Date(parseInt(m[1], 10), parseInt(m[2], 10) * 3 - 1, 1).getTime();
    } else if (n) {
      return new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime();
    } else if (o) {
      return new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime();
    } else if (p) {
      ret = new Date(parseInt(p[1], 10), 0, 1);
      if (ret.getDay() !== 4) {
        ret.setMonth(0, 1 + ((4 - ret.getDay()) + 7) % 7);
      }
      return ret.getTime() + parseInt(p[2], 10) * 604800000;
    } else if (q) {
      if (!q[6]) {
        return new Date(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10)).getTime();
      } else {
        offsetmins = 0;
        if (q[6] !== 'Z') {
          offsetmins = parseInt(q[8], 10) * 60 + parseInt(q[9], 10);
          if (q[7] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10) + offsetmins);
      }
    } else if (r) {
      secs = parseFloat(r[6]);
      isecs = Math.floor(secs);
      msecs = Math.round((secs - isecs) * 1000);
      if (!r[8]) {
        return new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), isecs, msecs).getTime();
      } else {
        offsetmins = 0;
        if (r[8] !== 'Z') {
          offsetmins = parseInt(r[10], 10) * 60 + parseInt(r[11], 10);
          if (r[9] === '+') {
            offsetmins = 0 - offsetmins;
          }
        }
        return Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10) + offsetmins, isecs, msecs);
      }
    } else {
      return new Date(parseInt(date, 10), 0, 1).getTime();
    }
  };

  Morris.Hover = (function() {
    Hover.defaults = {
      "class": 'morris-hover morris-default-style'
    };

    function Hover(options) {
      if (options == null) {
        options = {};
      }
      this.options = $.extend({}, Morris.Hover.defaults, options);
      this.el = $("<div class='" + this.options["class"] + "'></div>");
      this.el.hide();
      this.options.parent.append(this.el);
    }

    Hover.prototype.update = function(html, x, y) {
      if (!html) {
        return this.hide();
      } else {
        this.html(html);
        this.show();
        return this.moveTo(x, y);
      }
    };

    Hover.prototype.html = function(content) {
      return this.el.html(content);
    };

    Hover.prototype.moveTo = function(x, y) {
      var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
      parentWidth = this.options.parent.innerWidth();
      parentHeight = this.options.parent.innerHeight();
      hoverWidth = this.el.outerWidth();
      hoverHeight = this.el.outerHeight();
      left = Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth);
      if (y != null) {
        top = y - hoverHeight - 10;
        if (top < 0) {
          top = y + 10;
          if (top + hoverHeight > parentHeight) {
            top = parentHeight / 2 - hoverHeight / 2;
          }
        }
      } else {
        top = parentHeight / 2 - hoverHeight / 2;
      }
      return this.el.css({
        left: left + "px",
        top: parseInt(top) + "px"
      });
    };

    Hover.prototype.show = function() {
      return this.el.show();
    };

    Hover.prototype.hide = function() {
      return this.el.hide();
    };

    return Hover;

  })();

  Morris.Line = (function(_super) {
    __extends(Line, _super);

    function Line(options) {
      this.hilight = __bind(this.hilight, this);
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Line)) {
        return new Morris.Line(options);
      }
      Line.__super__.constructor.call(this, options);
    }

    Line.prototype.init = function() {
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };

    Line.prototype.defaults = {
      lineWidth: 3,
      pointSize: 4,
      lineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      pointStrokeWidths: [1],
      pointStrokeColors: ['#ffffff'],
      pointFillColors: [],
      smooth: true,
      xLabels: 'auto',
      xLabelFormat: null,
      xLabelMargin: 24,
      hideHover: false
    };

    Line.prototype.calc = function() {
      this.calcPoints();
      return this.generatePaths();
    };

    Line.prototype.calcPoints = function() {
      var row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(y);
            }
          }
          return _results1;
        }).call(this);
        _results.push(row._ymax = Math.min.apply(Math, [this.bottom].concat((function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row._y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(y);
            }
          }
          return _results1;
        })())));
      }
      return _results;
    };

    Line.prototype.hitTest = function(x) {
      var index, r, _i, _len, _ref;
      if (this.data.length === 0) {
        return null;
      }
      _ref = this.data.slice(1);
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        r = _ref[index];
        if (x < (r._x + this.data[index]._x) / 2) {
          break;
        }
      }
      return index;
    };

    Line.prototype.onGridClick = function(x, y) {
      var index;
      index = this.hitTest(x);
      return this.fire('click', index, this.data[index].src, x, y);
    };

    Line.prototype.onHoverMove = function(x, y) {
      var index;
      index = this.hitTest(x);
      return this.displayHoverForRow(index);
    };

    Line.prototype.onHoverOut = function() {
      if (this.options.hideHover !== false) {
        return this.displayHoverForRow(null);
      }
    };

    Line.prototype.displayHoverForRow = function(index) {
      var _ref;
      if (index != null) {
        (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
        return this.hilight(index);
      } else {
        this.hover.hide();
        return this.hilight();
      }
    };

    Line.prototype.hoverContentForRow = function(index) {
      var content, j, row, y, _i, _len, _ref;
      row = this.data[index];
      content = "<div class='morris-hover-row-label'>" + row.label + "</div>";
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        content += "<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y)) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      return [content, row._x, row._ymax];
    };

    Line.prototype.generatePaths = function() {
      var coords, i, r, smooth;
      return this.paths = (function() {
        var _i, _ref, _ref1, _results;
        _results = [];
        for (i = _i = 0, _ref = this.options.ykeys.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          smooth = typeof this.options.smooth === "boolean" ? this.options.smooth : (_ref1 = this.options.ykeys[i], __indexOf.call(this.options.smooth, _ref1) >= 0);
          coords = (function() {
            var _j, _len, _ref2, _results1;
            _ref2 = this.data;
            _results1 = [];
            for (_j = 0, _len = _ref2.length; _j < _len; _j++) {
              r = _ref2[_j];
              if (r._y[i] !== void 0) {
                _results1.push({
                  x: r._x,
                  y: r._y[i]
                });
              }
            }
            return _results1;
          }).call(this);
          if (coords.length > 1) {
            _results.push(Morris.Line.createPath(coords, smooth, this.bottom));
          } else {
            _results.push(null);
          }
        }
        return _results;
      }).call(this);
    };

    Line.prototype.draw = function() {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      this.drawSeries();
      if (this.options.hideHover === false) {
        return this.displayHoverForRow(this.data.length - 1);
      }
    };

    Line.prototype.drawXAxis = function() {
      var drawLabel, l, labels, prevAngleMargin, prevLabelMargin, row, ypos, _i, _len, _results,
        _this = this;
      ypos = this.bottom + this.options.padding / 2;
      prevLabelMargin = null;
      prevAngleMargin = null;
      drawLabel = function(labelText, xpos) {
        var label, labelBox, margin, offset, textBox;
        label = _this.drawXAxisLabel(_this.transX(xpos), ypos, labelText);
        textBox = label.getBBox();
        label.transform("r" + (-_this.options.xLabelAngle));
        labelBox = label.getBBox();
        label.transform("t0," + (labelBox.height / 2) + "...");
        if (_this.options.xLabelAngle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(_this.options.xLabelAngle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        labelBox = label.getBBox();
        if (((prevLabelMargin == null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < _this.el.width()) {
          if (_this.options.xLabelAngle !== 0) {
            margin = 1.25 * _this.options.gridTextSize / Math.sin(_this.options.xLabelAngle * Math.PI / 180.0);
            prevAngleMargin = labelBox.x - margin;
          }
          return prevLabelMargin = labelBox.x - _this.options.xLabelMargin;
        } else {
          return label.remove();
        }
      };
      if (this.options.parseTime) {
        if (this.data.length === 1 && this.options.xLabels === 'auto') {
          labels = [[this.data[0].label, this.data[0].x]];
        } else {
          labels = Morris.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat);
        }
      } else {
        labels = (function() {
          var _i, _len, _ref, _results;
          _ref = this.data;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            row = _ref[_i];
            _results.push([row.label, row.x]);
          }
          return _results;
        }).call(this);
      }
      labels.reverse();
      _results = [];
      for (_i = 0, _len = labels.length; _i < _len; _i++) {
        l = labels[_i];
        _results.push(drawLabel(l[0], l[1]));
      }
      return _results;
    };

    Line.prototype.drawSeries = function() {
      var i, _i, _j, _ref, _ref1, _results;
      this.seriesPoints = [];
      for (i = _i = _ref = this.options.ykeys.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; i = _ref <= 0 ? ++_i : --_i) {
        this._drawLineFor(i);
      }
      _results = [];
      for (i = _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; i = _ref1 <= 0 ? ++_j : --_j) {
        _results.push(this._drawPointFor(i));
      }
      return _results;
    };

    Line.prototype._drawPointFor = function(index) {
      var circle, row, _i, _len, _ref, _results;
      this.seriesPoints[index] = [];
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        circle = null;
        if (row._y[index] != null) {
          circle = this.drawLinePoint(row._x, row._y[index], this.colorFor(row, index, 'point'), index);
        }
        _results.push(this.seriesPoints[index].push(circle));
      }
      return _results;
    };

    Line.prototype._drawLineFor = function(index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        return this.drawLinePath(path, this.colorFor(null, index, 'line'), index);
      }
    };

    Line.createPath = function(coords, smooth, bottom) {
      var coord, g, grads, i, ix, lg, path, prevCoord, x1, x2, y1, y2, _i, _len;
      path = "";
      if (smooth) {
        grads = Morris.Line.gradients(coords);
      }
      prevCoord = {
        y: null
      };
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          if (prevCoord.y != null) {
            if (smooth) {
              g = grads[i];
              lg = grads[i - 1];
              ix = (coord.x - prevCoord.x) / 4;
              x1 = prevCoord.x + ix;
              y1 = Math.min(bottom, prevCoord.y + ix * lg);
              x2 = coord.x - ix;
              y2 = Math.min(bottom, coord.y - ix * g);
              path += "C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + coord.x + "," + coord.y;
            } else {
              path += "L" + coord.x + "," + coord.y;
            }
          } else {
            if (!smooth || (grads[i] != null)) {
              path += "M" + coord.x + "," + coord.y;
            }
          }
        }
        prevCoord = coord;
      }
      return path;
    };

    Line.gradients = function(coords) {
      var coord, grad, i, nextCoord, prevCoord, _i, _len, _results;
      grad = function(a, b) {
        return (a.y - b.y) / (a.x - b.x);
      };
      _results = [];
      for (i = _i = 0, _len = coords.length; _i < _len; i = ++_i) {
        coord = coords[i];
        if (coord.y != null) {
          nextCoord = coords[i + 1] || {
            y: null
          };
          prevCoord = coords[i - 1] || {
            y: null
          };
          if ((prevCoord.y != null) && (nextCoord.y != null)) {
            _results.push(grad(prevCoord, nextCoord));
          } else if (prevCoord.y != null) {
            _results.push(grad(prevCoord, coord));
          } else if (nextCoord.y != null) {
            _results.push(grad(coord, nextCoord));
          } else {
            _results.push(null);
          }
        } else {
          _results.push(null);
        }
      }
      return _results;
    };

    Line.prototype.hilight = function(index) {
      var i, _i, _j, _ref, _ref1;
      if (this.prevHilight !== null && this.prevHilight !== index) {
        for (i = _i = 0, _ref = this.seriesPoints.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          if (this.seriesPoints[i][this.prevHilight]) {
            this.seriesPoints[i][this.prevHilight].animate(this.pointShrinkSeries(i));
          }
        }
      }
      if (index !== null && this.prevHilight !== index) {
        for (i = _j = 0, _ref1 = this.seriesPoints.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          if (this.seriesPoints[i][index]) {
            this.seriesPoints[i][index].animate(this.pointGrowSeries(i));
          }
        }
      }
      return this.prevHilight = index;
    };

    Line.prototype.colorFor = function(row, sidx, type) {
      if (typeof this.options.lineColors === 'function') {
        return this.options.lineColors.call(this, row, sidx, type);
      } else if (type === 'point') {
        return this.options.pointFillColors[sidx % this.options.pointFillColors.length] || this.options.lineColors[sidx % this.options.lineColors.length];
      } else {
        return this.options.lineColors[sidx % this.options.lineColors.length];
      }
    };

    Line.prototype.drawXAxisLabel = function(xPos, yPos, text) {
      return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };

    Line.prototype.drawLinePath = function(path, lineColor, lineIndex) {
      return this.raphael.path(path).attr('stroke', lineColor).attr('stroke-width', this.lineWidthForSeries(lineIndex));
    };

    Line.prototype.drawLinePoint = function(xPos, yPos, pointColor, lineIndex) {
      return this.raphael.circle(xPos, yPos, this.pointSizeForSeries(lineIndex)).attr('fill', pointColor).attr('stroke-width', this.pointStrokeWidthForSeries(lineIndex)).attr('stroke', this.pointStrokeColorForSeries(lineIndex));
    };

    Line.prototype.pointStrokeWidthForSeries = function(index) {
      return this.options.pointStrokeWidths[index % this.options.pointStrokeWidths.length];
    };

    Line.prototype.pointStrokeColorForSeries = function(index) {
      return this.options.pointStrokeColors[index % this.options.pointStrokeColors.length];
    };

    Line.prototype.lineWidthForSeries = function(index) {
      if (this.options.lineWidth instanceof Array) {
        return this.options.lineWidth[index % this.options.lineWidth.length];
      } else {
        return this.options.lineWidth;
      }
    };

    Line.prototype.pointSizeForSeries = function(index) {
      if (this.options.pointSize instanceof Array) {
        return this.options.pointSize[index % this.options.pointSize.length];
      } else {
        return this.options.pointSize;
      }
    };

    Line.prototype.pointGrowSeries = function(index) {
      return Raphael.animation({
        r: this.pointSizeForSeries(index) + 3
      }, 25, 'linear');
    };

    Line.prototype.pointShrinkSeries = function(index) {
      return Raphael.animation({
        r: this.pointSizeForSeries(index)
      }, 25, 'linear');
    };

    return Line;

  })(Morris.Grid);

  Morris.labelSeries = function(dmin, dmax, pxwidth, specName, xLabelFormat) {
    var d, d0, ddensity, name, ret, s, spec, t, _i, _len, _ref;
    ddensity = 200 * (dmax - dmin) / pxwidth;
    d0 = new Date(dmin);
    spec = Morris.LABEL_SPECS[specName];
    if (spec === void 0) {
      _ref = Morris.AUTO_LABEL_ORDER;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        name = _ref[_i];
        s = Morris.LABEL_SPECS[name];
        if (ddensity >= s.span) {
          spec = s;
          break;
        }
      }
    }
    if (spec === void 0) {
      spec = Morris.LABEL_SPECS["second"];
    }
    if (xLabelFormat) {
      spec = $.extend({}, spec, {
        fmt: xLabelFormat
      });
    }
    d = spec.start(d0);
    ret = [];
    while ((t = d.getTime()) <= dmax) {
      if (t >= dmin) {
        ret.push([spec.fmt(d), t]);
      }
      spec.incr(d);
    }
    return ret;
  };

  minutesSpecHelper = function(interval) {
    return {
      span: interval * 60 * 1000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
      },
      fmt: function(d) {
        return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes()));
      },
      incr: function(d) {
        return d.setUTCMinutes(d.getUTCMinutes() + interval);
      }
    };
  };

  secondsSpecHelper = function(interval) {
    return {
      span: interval * 1000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      },
      fmt: function(d) {
        return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes())) + ":" + (Morris.pad2(d.getSeconds()));
      },
      incr: function(d) {
        return d.setUTCSeconds(d.getUTCSeconds() + interval);
      }
    };
  };

  Morris.LABEL_SPECS = {
    "decade": {
      span: 172800000000,
      start: function(d) {
        return new Date(d.getFullYear() - d.getFullYear() % 10, 0, 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear());
      },
      incr: function(d) {
        return d.setFullYear(d.getFullYear() + 10);
      }
    },
    "year": {
      span: 17280000000,
      start: function(d) {
        return new Date(d.getFullYear(), 0, 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear());
      },
      incr: function(d) {
        return d.setFullYear(d.getFullYear() + 1);
      }
    },
    "month": {
      span: 2419200000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1));
      },
      incr: function(d) {
        return d.setMonth(d.getMonth() + 1);
      }
    },
    "week": {
      span: 604800000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
      },
      incr: function(d) {
        return d.setDate(d.getDate() + 7);
      }
    },
    "day": {
      span: 86400000,
      start: function(d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
      },
      fmt: function(d) {
        return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
      },
      incr: function(d) {
        return d.setDate(d.getDate() + 1);
      }
    },
    "hour": minutesSpecHelper(60),
    "30min": minutesSpecHelper(30),
    "15min": minutesSpecHelper(15),
    "10min": minutesSpecHelper(10),
    "5min": minutesSpecHelper(5),
    "minute": minutesSpecHelper(1),
    "30sec": secondsSpecHelper(30),
    "15sec": secondsSpecHelper(15),
    "10sec": secondsSpecHelper(10),
    "5sec": secondsSpecHelper(5),
    "second": secondsSpecHelper(1)
  };

  Morris.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"];

  Morris.Area = (function(_super) {
    var areaDefaults;

    __extends(Area, _super);

    areaDefaults = {
      fillOpacity: 'auto',
      behaveLikeLine: false
    };

    function Area(options) {
      var areaOptions;
      if (!(this instanceof Morris.Area)) {
        return new Morris.Area(options);
      }
      areaOptions = $.extend({}, areaDefaults, options);
      this.cumulative = !areaOptions.behaveLikeLine;
      if (areaOptions.fillOpacity === 'auto') {
        areaOptions.fillOpacity = areaOptions.behaveLikeLine ? .8 : 1;
      }
      Area.__super__.constructor.call(this, areaOptions);
    }

    Area.prototype.calcPoints = function() {
      var row, total, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        row._x = this.transX(row.x);
        total = 0;
        row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (this.options.behaveLikeLine) {
              _results1.push(this.transY(y));
            } else {
              total += y || 0;
              _results1.push(this.transY(total));
            }
          }
          return _results1;
        }).call(this);
        _results.push(row._ymax = Math.max.apply(Math, row._y));
      }
      return _results;
    };

    Area.prototype.drawSeries = function() {
      var i, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
      this.seriesPoints = [];
      if (this.options.behaveLikeLine) {
        range = (function() {
          _results = [];
          for (var _i = 0, _ref = this.options.ykeys.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
          return _results;
        }).apply(this);
      } else {
        range = (function() {
          _results1 = [];
          for (var _j = _ref1 = this.options.ykeys.length - 1; _ref1 <= 0 ? _j <= 0 : _j >= 0; _ref1 <= 0 ? _j++ : _j--){ _results1.push(_j); }
          return _results1;
        }).apply(this);
      }
      _results2 = [];
      for (_k = 0, _len = range.length; _k < _len; _k++) {
        i = range[_k];
        this._drawFillFor(i);
        this._drawLineFor(i);
        _results2.push(this._drawPointFor(i));
      }
      return _results2;
    };

    Area.prototype._drawFillFor = function(index) {
      var path;
      path = this.paths[index];
      if (path !== null) {
        path = path + ("L" + (this.transX(this.xmax)) + "," + this.bottom + "L" + (this.transX(this.xmin)) + "," + this.bottom + "Z");
        return this.drawFilledPath(path, this.fillForSeries(index));
      }
    };

    Area.prototype.fillForSeries = function(i) {
      var color;
      color = Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'line'));
      return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9 : color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2 : color.l * 1.25));
    };

    Area.prototype.drawFilledPath = function(path, fill) {
      return this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke', 'none');
    };

    return Area;

  })(Morris.Line);

  Morris.Bar = (function(_super) {
    __extends(Bar, _super);

    function Bar(options) {
      this.onHoverOut = __bind(this.onHoverOut, this);
      this.onHoverMove = __bind(this.onHoverMove, this);
      this.onGridClick = __bind(this.onGridClick, this);
      if (!(this instanceof Morris.Bar)) {
        return new Morris.Bar(options);
      }
      Bar.__super__.constructor.call(this, $.extend({}, options, {
        parseTime: false
      }));
    }

    Bar.prototype.init = function() {
      this.cumulative = this.options.stacked;
      if (this.options.hideHover !== 'always') {
        this.hover = new Morris.Hover({
          parent: this.el
        });
        this.on('hovermove', this.onHoverMove);
        this.on('hoverout', this.onHoverOut);
        return this.on('gridclick', this.onGridClick);
      }
    };

    Bar.prototype.defaults = {
      barSizeRatio: 0.75,
      barGap: 3,
      barColors: ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
      barOpacity: 1.0,
      barRadius: [0, 0, 0, 0],
      xLabelMargin: 50
    };

    Bar.prototype.calc = function() {
      var _ref;
      this.calcBars();
      if (this.options.hideHover === false) {
        return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1));
      }
    };

    Bar.prototype.calcBars = function() {
      var idx, row, y, _i, _len, _ref, _results;
      _ref = this.data;
      _results = [];
      for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
        row = _ref[idx];
        row._x = this.left + this.width * (idx + 0.5) / this.data.length;
        _results.push(row._y = (function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = row.y;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            y = _ref1[_j];
            if (y != null) {
              _results1.push(this.transY(y));
            } else {
              _results1.push(null);
            }
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    Bar.prototype.draw = function() {
      var _ref;
      if ((_ref = this.options.axes) === true || _ref === 'both' || _ref === 'x') {
        this.drawXAxis();
      }
      return this.drawSeries();
    };

    Bar.prototype.drawXAxis = function() {
      var i, label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
      ypos = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2);
      prevLabelMargin = null;
      prevAngleMargin = null;
      _results = [];
      for (i = _i = 0, _ref = this.data.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        row = this.data[this.data.length - 1 - i];
        label = this.drawXAxisLabel(row._x, ypos, row.label);
        textBox = label.getBBox();
        label.transform("r" + (-this.options.xLabelAngle));
        labelBox = label.getBBox();
        label.transform("t0," + (labelBox.height / 2) + "...");
        if (this.options.xLabelAngle !== 0) {
          offset = -0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
          label.transform("t" + offset + ",0...");
        }
        if (((prevLabelMargin == null) || prevLabelMargin >= labelBox.x + labelBox.width || (prevAngleMargin != null) && prevAngleMargin >= labelBox.x) && labelBox.x >= 0 && (labelBox.x + labelBox.width) < this.el.width()) {
          if (this.options.xLabelAngle !== 0) {
            margin = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
            prevAngleMargin = labelBox.x - margin;
          }
          _results.push(prevLabelMargin = labelBox.x - this.options.xLabelMargin);
        } else {
          _results.push(label.remove());
        }
      }
      return _results;
    };

    Bar.prototype.drawSeries = function() {
      var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, sidx, size, spaceLeft, top, ypos, zeroPos;
      groupWidth = this.width / this.options.data.length;
      numBars = this.options.stacked ? 1 : this.options.ykeys.length;
      barWidth = (groupWidth * this.options.barSizeRatio - this.options.barGap * (numBars - 1)) / numBars;
      if (this.options.barSize) {
        barWidth = Math.min(barWidth, this.options.barSize);
      }
      spaceLeft = groupWidth - barWidth * numBars - this.options.barGap * (numBars - 1);
      leftPadding = spaceLeft / 2;
      zeroPos = this.ymin <= 0 && this.ymax >= 0 ? this.transY(0) : null;
      return this.bars = (function() {
        var _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
          row = _ref[idx];
          lastTop = 0;
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = row._y;
            _results1 = [];
            for (sidx = _j = 0, _len1 = _ref1.length; _j < _len1; sidx = ++_j) {
              ypos = _ref1[sidx];
              if (ypos !== null) {
                if (zeroPos) {
                  top = Math.min(ypos, zeroPos);
                  bottom = Math.max(ypos, zeroPos);
                } else {
                  top = ypos;
                  bottom = this.bottom;
                }
                left = this.left + idx * groupWidth + leftPadding;
                if (!this.options.stacked) {
                  left += sidx * (barWidth + this.options.barGap);
                }
                size = bottom - top;
                if (this.options.verticalGridCondition && this.options.verticalGridCondition(row.x)) {
                  this.drawBar(this.left + idx * groupWidth, this.top, groupWidth, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius);
                }
                if (this.options.stacked) {
                  top -= lastTop;
                }
                this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), this.options.barOpacity, this.options.barRadius);
                _results1.push(lastTop += size);
              } else {
                _results1.push(null);
              }
            }
            return _results1;
          }).call(this));
        }
        return _results;
      }).call(this);
    };

    Bar.prototype.colorFor = function(row, sidx, type) {
      var r, s;
      if (typeof this.options.barColors === 'function') {
        r = {
          x: row.x,
          y: row.y[sidx],
          label: row.label
        };
        s = {
          index: sidx,
          key: this.options.ykeys[sidx],
          label: this.options.labels[sidx]
        };
        return this.options.barColors.call(this, r, s, type);
      } else {
        return this.options.barColors[sidx % this.options.barColors.length];
      }
    };

    Bar.prototype.hitTest = function(x) {
      if (this.data.length === 0) {
        return null;
      }
      x = Math.max(Math.min(x, this.right), this.left);
      return Math.min(this.data.length - 1, Math.floor((x - this.left) / (this.width / this.data.length)));
    };

    Bar.prototype.onGridClick = function(x, y) {
      var index;
      index = this.hitTest(x);
      return this.fire('click', index, this.data[index].src, x, y);
    };

    Bar.prototype.onHoverMove = function(x, y) {
      var index, _ref;
      index = this.hitTest(x);
      return (_ref = this.hover).update.apply(_ref, this.hoverContentForRow(index));
    };

    Bar.prototype.onHoverOut = function() {
      if (this.options.hideHover !== false) {
        return this.hover.hide();
      }
    };

    Bar.prototype.hoverContentForRow = function(index) {
      var content, j, row, x, y, _i, _len, _ref;
      row = this.data[index];
      content = "<div class='morris-hover-row-label'>" + row.label + "</div>";
      _ref = row.y;
      for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
        y = _ref[j];
        content += "<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y)) + "\n</div>";
      }
      if (typeof this.options.hoverCallback === 'function') {
        content = this.options.hoverCallback(index, this.options, content, row.src);
      }
      x = this.left + (index + 0.5) * this.width / this.data.length;
      return [content, x];
    };

    Bar.prototype.drawXAxisLabel = function(xPos, yPos, text) {
      var label;
      return label = this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
    };

    Bar.prototype.drawBar = function(xPos, yPos, width, height, barColor, opacity, radiusArray) {
      var maxRadius, path;
      maxRadius = Math.max.apply(Math, radiusArray);
      if (maxRadius === 0 || maxRadius > height) {
        path = this.raphael.rect(xPos, yPos, width, height);
      } else {
        path = this.raphael.path(this.roundedRect(xPos, yPos, width, height, radiusArray));
      }
      return path.attr('fill', barColor).attr('fill-opacity', opacity).attr('stroke', 'none');
    };

    Bar.prototype.roundedRect = function(x, y, w, h, r) {
      if (r == null) {
        r = [0, 0, 0, 0];
      }
      return ["M", x, r[0] + y, "Q", x, y, x + r[0], y, "L", x + w - r[1], y, "Q", x + w, y, x + w, y + r[1], "L", x + w, y + h - r[2], "Q", x + w, y + h, x + w - r[2], y + h, "L", x + r[3], y + h, "Q", x, y + h, x, y + h - r[3], "Z"];
    };

    return Bar;

  })(Morris.Grid);

  Morris.Donut = (function(_super) {
    __extends(Donut, _super);

    Donut.prototype.defaults = {
      colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
      backgroundColor: '#FFFFFF',
      labelColor: '#000000',
      formatter: Morris.commas,
      resize: false
    };

    function Donut(options) {
      this.resizeHandler = __bind(this.resizeHandler, this);
      this.select = __bind(this.select, this);
      this.click = __bind(this.click, this);
      var _this = this;
      if (!(this instanceof Morris.Donut)) {
        return new Morris.Donut(options);
      }
      this.options = $.extend({}, this.defaults, options);
      if (typeof options.element === 'string') {
        this.el = $(document.getElementById(options.element));
      } else {
        this.el = $(options.element);
      }
      if (this.el === null || this.el.length === 0) {
        throw new Error("Graph placeholder not found.");
      }
      if (options.data === void 0 || options.data.length === 0) {
        return;
      }
      this.raphael = new Raphael(this.el[0]);
      if (this.options.resize) {
        $(window).bind('resize', function(evt) {
          if (_this.timeoutId != null) {
            window.clearTimeout(_this.timeoutId);
          }
          return _this.timeoutId = window.setTimeout(_this.resizeHandler, 100);
        });
      }
      this.setData(options.data);
    }

    Donut.prototype.redraw = function() {
      var C, cx, cy, i, idx, last, max_value, min, next, seg, total, value, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
      this.raphael.clear();
      cx = this.el.width() / 2;
      cy = this.el.height() / 2;
      w = (Math.min(cx, cy) - 10) / 3;
      total = 0;
      _ref = this.values;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        total += value;
      }
      min = 5 / (2 * w);
      C = 1.9999 * Math.PI - min * this.data.length;
      last = 0;
      idx = 0;
      this.segments = [];
      _ref1 = this.values;
      for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
        value = _ref1[i];
        next = last + min + C * (value / total);
        seg = new Morris.DonutSegment(cx, cy, w * 2, w, last, next, this.data[i].color || this.options.colors[idx % this.options.colors.length], this.options.backgroundColor, idx, this.raphael);
        seg.render();
        this.segments.push(seg);
        seg.on('hover', this.select);
        seg.on('click', this.click);
        last = next;
        idx += 1;
      }
      this.text1 = this.drawEmptyDonutLabel(cx, cy - 10, this.options.labelColor, 15, 800);
      this.text2 = this.drawEmptyDonutLabel(cx, cy + 10, this.options.labelColor, 14);
      max_value = Math.max.apply(Math, this.values);
      idx = 0;
      _ref2 = this.values;
      _results = [];
      for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
        value = _ref2[_k];
        if (value === max_value) {
          this.select(idx);
          break;
        }
        _results.push(idx += 1);
      }
      return _results;
    };

    Donut.prototype.setData = function(data) {
      var row;
      this.data = data;
      this.values = (function() {
        var _i, _len, _ref, _results;
        _ref = this.data;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          row = _ref[_i];
          _results.push(parseFloat(row.value));
        }
        return _results;
      }).call(this);
      return this.redraw();
    };

    Donut.prototype.click = function(idx) {
      return this.fire('click', idx, this.data[idx]);
    };

    Donut.prototype.select = function(idx) {
      var row, s, segment, _i, _len, _ref;
      _ref = this.segments;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        s = _ref[_i];
        s.deselect();
      }
      segment = this.segments[idx];
      segment.select();
      row = this.data[idx];
      return this.setLabels(row.label, this.options.formatter(row.value, row));
    };

    Donut.prototype.setLabels = function(label1, label2) {
      var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
      inner = (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
      maxWidth = 1.8 * inner;
      maxHeightTop = inner / 2;
      maxHeightBottom = inner / 3;
      this.text1.attr({
        text: label1,
        transform: ''
      });
      text1bbox = this.text1.getBBox();
      text1scale = Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
      this.text1.attr({
        transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
      });
      this.text2.attr({
        text: label2,
        transform: ''
      });
      text2bbox = this.text2.getBBox();
      text2scale = Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
      return this.text2.attr({
        transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
      });
    };

    Donut.prototype.drawEmptyDonutLabel = function(xPos, yPos, color, fontSize, fontWeight) {
      var text;
      text = this.raphael.text(xPos, yPos, '').attr('font-size', fontSize).attr('fill', color);
      if (fontWeight != null) {
        text.attr('font-weight', fontWeight);
      }
      return text;
    };

    Donut.prototype.resizeHandler = function() {
      this.timeoutId = null;
      this.raphael.setSize(this.el.width(), this.el.height());
      return this.redraw();
    };

    return Donut;

  })(Morris.EventEmitter);

  Morris.DonutSegment = (function(_super) {
    __extends(DonutSegment, _super);

    function DonutSegment(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael) {
      this.cx = cx;
      this.cy = cy;
      this.inner = inner;
      this.outer = outer;
      this.color = color;
      this.backgroundColor = backgroundColor;
      this.index = index;
      this.raphael = raphael;
      this.deselect = __bind(this.deselect, this);
      this.select = __bind(this.select, this);
      this.sin_p0 = Math.sin(p0);
      this.cos_p0 = Math.cos(p0);
      this.sin_p1 = Math.sin(p1);
      this.cos_p1 = Math.cos(p1);
      this.is_long = (p1 - p0) > Math.PI ? 1 : 0;
      this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5);
      this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer);
      this.hilight = this.calcArc(this.inner);
    }

    DonutSegment.prototype.calcArcPoints = function(r) {
      return [this.cx + r * this.sin_p0, this.cy + r * this.cos_p0, this.cx + r * this.sin_p1, this.cy + r * this.cos_p1];
    };

    DonutSegment.prototype.calcSegment = function(r1, r2) {
      var ix0, ix1, iy0, iy1, ox0, ox1, oy0, oy1, _ref, _ref1;
      _ref = this.calcArcPoints(r1), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      _ref1 = this.calcArcPoints(r2), ox0 = _ref1[0], oy0 = _ref1[1], ox1 = _ref1[2], oy1 = _ref1[3];
      return ("M" + ix0 + "," + iy0) + ("A" + r1 + "," + r1 + ",0," + this.is_long + ",0," + ix1 + "," + iy1) + ("L" + ox1 + "," + oy1) + ("A" + r2 + "," + r2 + ",0," + this.is_long + ",1," + ox0 + "," + oy0) + "Z";
    };

    DonutSegment.prototype.calcArc = function(r) {
      var ix0, ix1, iy0, iy1, _ref;
      _ref = this.calcArcPoints(r), ix0 = _ref[0], iy0 = _ref[1], ix1 = _ref[2], iy1 = _ref[3];
      return ("M" + ix0 + "," + iy0) + ("A" + r + "," + r + ",0," + this.is_long + ",0," + ix1 + "," + iy1);
    };

    DonutSegment.prototype.render = function() {
      var _this = this;
      this.arc = this.drawDonutArc(this.hilight, this.color);
      return this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function() {
        return _this.fire('hover', _this.index);
      }, function() {
        return _this.fire('click', _this.index);
      });
    };

    DonutSegment.prototype.drawDonutArc = function(path, color) {
      return this.raphael.path(path).attr({
        stroke: color,
        'stroke-width': 2,
        opacity: 0
      });
    };

    DonutSegment.prototype.drawDonutSegment = function(path, fillColor, strokeColor, hoverFunction, clickFunction) {
      return this.raphael.path(path).attr({
        fill: fillColor,
        stroke: strokeColor,
        'stroke-width': 3
      }).hover(hoverFunction).click(clickFunction);
    };

    DonutSegment.prototype.select = function() {
      if (!this.selected) {
        this.seg.animate({
          path: this.selectedPath
        }, 150, '<>');
        this.arc.animate({
          opacity: 1
        }, 150, '<>');
        return this.selected = true;
      }
    };

    DonutSegment.prototype.deselect = function() {
      if (this.selected) {
        this.seg.animate({
          path: this.path
        }, 150, '<>');
        this.arc.animate({
          opacity: 0
        }, 150, '<>');
        return this.selected = false;
      }
    };

    return DonutSegment;

  })(Morris.EventEmitter);

}).call(this);

;// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

// ┌──────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.3.4 - JavaScript Events Library                                                │ \\
// ├──────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://dmitry.baranovskiy.com/)          │ \\
// │ Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license. │ \\
// └──────────────────────────────────────────────────────────────────────────────────────┘ \\

(function (glob) {
  var version = "0.3.4",
      has = "hasOwnProperty",
      separator = /[\.\/]/,
      wildcard = "*",
      fun = function () {},
      numsort = function (a, b) {
          return a - b;
      },
      current_event,
      stop,
      events = {n: {}},
  
      eve = function (name, scope) {
          var e = events,
              oldstop = stop,
              args = Array.prototype.slice.call(arguments, 2),
              listeners = eve.listeners(name),
              z = 0,
              f = false,
              l,
              indexed = [],
              queue = {},
              out = [],
              ce = current_event,
              errors = [];
          current_event = name;
          stop = 0;
          for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
              indexed.push(listeners[i].zIndex);
              if (listeners[i].zIndex < 0) {
                  queue[listeners[i].zIndex] = listeners[i];
              }
          }
          indexed.sort(numsort);
          while (indexed[z] < 0) {
              l = queue[indexed[z++]];
              out.push(l.apply(scope, args));
              if (stop) {
                  stop = oldstop;
                  return out;
              }
          }
          for (i = 0; i < ii; i++) {
              l = listeners[i];
              if ("zIndex" in l) {
                  if (l.zIndex == indexed[z]) {
                      out.push(l.apply(scope, args));
                      if (stop) {
                          break;
                      }
                      do {
                          z++;
                          l = queue[indexed[z]];
                          l && out.push(l.apply(scope, args));
                          if (stop) {
                              break;
                          }
                      } while (l)
                  } else {
                      queue[l.zIndex] = l;
                  }
              } else {
                  out.push(l.apply(scope, args));
                  if (stop) {
                      break;
                  }
              }
          }
          stop = oldstop;
          current_event = ce;
          return out.length ? out : null;
      };
  
  eve.listeners = function (name) {
      var names = name.split(separator),
          e = events,
          item,
          items,
          k,
          i,
          ii,
          j,
          jj,
          nes,
          es = [e],
          out = [];
      for (i = 0, ii = names.length; i < ii; i++) {
          nes = [];
          for (j = 0, jj = es.length; j < jj; j++) {
              e = es[j].n;
              items = [e[names[i]], e[wildcard]];
              k = 2;
              while (k--) {
                  item = items[k];
                  if (item) {
                      nes.push(item);
                      out = out.concat(item.f || []);
                  }
              }
          }
          es = nes;
      }
      return out;
  };
  
  
  eve.on = function (name, f) {
      var names = name.split(separator),
          e = events;
      for (var i = 0, ii = names.length; i < ii; i++) {
          e = e.n;
          !e[names[i]] && (e[names[i]] = {n: {}});
          e = e[names[i]];
      }
      e.f = e.f || [];
      for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
          return fun;
      }
      e.f.push(f);
      return function (zIndex) {
          if (+zIndex == +zIndex) {
              f.zIndex = +zIndex;
          }
      };
  };
  
  eve.stop = function () {
      stop = 1;
  };
  
  eve.nt = function (subname) {
      if (subname) {
          return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
      }
      return current_event;
  };
  
  
  eve.off = eve.unbind = function (name, f) {
      var names = name.split(separator),
          e,
          key,
          splice,
          i, ii, j, jj,
          cur = [events];
      for (i = 0, ii = names.length; i < ii; i++) {
          for (j = 0; j < cur.length; j += splice.length - 2) {
              splice = [j, 1];
              e = cur[j].n;
              if (names[i] != wildcard) {
                  if (e[names[i]]) {
                      splice.push(e[names[i]]);
                  }
              } else {
                  for (key in e) if (e[has](key)) {
                      splice.push(e[key]);
                  }
              }
              cur.splice.apply(cur, splice);
          }
      }
      for (i = 0, ii = cur.length; i < ii; i++) {
          e = cur[i];
          while (e.n) {
              if (f) {
                  if (e.f) {
                      for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
                          e.f.splice(j, 1);
                          break;
                      }
                      !e.f.length && delete e.f;
                  }
                  for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                      var funcs = e.n[key].f;
                      for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
                          funcs.splice(j, 1);
                          break;
                      }
                      !funcs.length && delete e.n[key].f;
                  }
              } else {
                  delete e.f;
                  for (key in e.n) if (e.n[has](key) && e.n[key].f) {
                      delete e.n[key].f;
                  }
              }
              e = e.n;
          }
      }
  };
  
  eve.once = function (name, f) {
      var f2 = function () {
          var res = f.apply(this, arguments);
          eve.unbind(name, f2);
          return res;
      };
      return eve.on(name, f2);
  };
  
  eve.version = version;
  eve.toString = function () {
      return "You are running Eve " + version;
  };
  (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define != "undefined" ? (define("eve", [], function() { return eve; })) : (glob.eve = eve));
})(this);


// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ "Raphaël 2.1.0" - JavaScript Vector Library                         │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\
(function () {
  
  function R(first) {
      if (R.is(first, "function")) {
          return loaded ? first() : eve.on("raphael.DOMload", first);
      } else if (R.is(first, array)) {
          return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
      } else {
          var args = Array.prototype.slice.call(arguments, 0);
          if (R.is(args[args.length - 1], "function")) {
              var f = args.pop();
              return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
                  f.call(R._engine.create[apply](R, args));
              });
          } else {
              return R._engine.create[apply](R, arguments);
          }
      }
  }
  R.version = "2.1.0";
  R.eve = eve;
  var loaded,
      separator = /[, ]+/,
      elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
      formatrg = /\{(\d+)\}/g,
      proto = "prototype",
      has = "hasOwnProperty",
      g = {
          doc: document,
          win: window
      },
      oldRaphael = {
          was: Object.prototype[has].call(g.win, "Raphael"),
          is: g.win.Raphael
      },
      Paper = function () {
          
          
          this.ca = this.customAttributes = {};
      },
      paperproto,
      appendChild = "appendChild",
      apply = "apply",
      concat = "concat",
      supportsTouch = "createTouch" in g.doc,
      E = "",
      S = " ",
      Str = String,
      split = "split",
      events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
      touchMap = {
          mousedown: "touchstart",
          mousemove: "touchmove",
          mouseup: "touchend"
      },
      lowerCase = Str.prototype.toLowerCase,
      math = Math,
      mmax = math.max,
      mmin = math.min,
      abs = math.abs,
      pow = math.pow,
      PI = math.PI,
      nu = "number",
      string = "string",
      array = "array",
      toString = "toString",
      fillString = "fill",
      objectToString = Object.prototype.toString,
      paper = {},
      push = "push",
      ISURL = R._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
      colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
      isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
      bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
      round = math.round,
      setAttribute = "setAttribute",
      toFloat = parseFloat,
      toInt = parseInt,
      upperCase = Str.prototype.toUpperCase,
      availableAttrs = R._availableAttrs = {
          "arrow-end": "none",
          "arrow-start": "none",
          blur: 0,
          "clip-rect": "0 0 1e9 1e9",
          cursor: "default",
          cx: 0,
          cy: 0,
          fill: "#fff",
          "fill-opacity": 1,
          font: '10px "Arial"',
          "font-family": '"Arial"',
          "font-size": "10",
          "font-style": "normal",
          "font-weight": 400,
          gradient: 0,
          height: 0,
          href: "http://raphaeljs.com/",
          "letter-spacing": 0,
          opacity: 1,
          path: "M0,0",
          r: 0,
          rx: 0,
          ry: 0,
          src: "",
          stroke: "#000",
          "stroke-dasharray": "",
          "stroke-linecap": "butt",
          "stroke-linejoin": "butt",
          "stroke-miterlimit": 0,
          "stroke-opacity": 1,
          "stroke-width": 1,
          target: "_blank",
          "text-anchor": "middle",
          title: "Raphael",
          transform: "",
          width: 0,
          x: 0,
          y: 0
      },
      availableAnimAttrs = R._availableAnimAttrs = {
          blur: nu,
          "clip-rect": "csv",
          cx: nu,
          cy: nu,
          fill: "colour",
          "fill-opacity": nu,
          "font-size": nu,
          height: nu,
          opacity: nu,
          path: "path",
          r: nu,
          rx: nu,
          ry: nu,
          stroke: "colour",
          "stroke-opacity": nu,
          "stroke-width": nu,
          transform: "transform",
          width: nu,
          x: nu,
          y: nu
      },
      whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
      commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
      hsrg = {hs: 1, rg: 1},
      p2s = /,?([achlmqrstvxz]),?/gi,
      pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
      tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
      pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
      radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
      eldata = {},
      sortByKey = function (a, b) {
          return a.key - b.key;
      },
      sortByNumber = function (a, b) {
          return toFloat(a) - toFloat(b);
      },
      fun = function () {},
      pipe = function (x) {
          return x;
      },
      rectPath = R._rectPath = function (x, y, w, h, r) {
          if (r) {
              return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
          }
          return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
      },
      ellipsePath = function (x, y, rx, ry) {
          if (ry == null) {
              ry = rx;
          }
          return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
      },
      getPath = R._getPath = {
          path: function (el) {
              return el.attr("path");
          },
          circle: function (el) {
              var a = el.attrs;
              return ellipsePath(a.cx, a.cy, a.r);
          },
          ellipse: function (el) {
              var a = el.attrs;
              return ellipsePath(a.cx, a.cy, a.rx, a.ry);
          },
          rect: function (el) {
              var a = el.attrs;
              return rectPath(a.x, a.y, a.width, a.height, a.r);
          },
          image: function (el) {
              var a = el.attrs;
              return rectPath(a.x, a.y, a.width, a.height);
          },
          text: function (el) {
              var bbox = el._getBBox();
              return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
          }
      },
      
      mapPath = R.mapPath = function (path, matrix) {
          if (!matrix) {
              return path;
          }
          var x, y, i, j, ii, jj, pathi;
          path = path2curve(path);
          for (i = 0, ii = path.length; i < ii; i++) {
              pathi = path[i];
              for (j = 1, jj = pathi.length; j < jj; j += 2) {
                  x = matrix.x(pathi[j], pathi[j + 1]);
                  y = matrix.y(pathi[j], pathi[j + 1]);
                  pathi[j] = x;
                  pathi[j + 1] = y;
              }
          }
          return path;
      };

  R._g = g;
  
  R.type = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
  if (R.type == "VML") {
      var d = g.doc.createElement("div"),
          b;
      d.innerHTML = '<v:shape adj="1"/>';
      b = d.firstChild;
      b.style.behavior = "url(#default#VML)";
      if (!(b && typeof b.adj == "object")) {
          return (R.type = E);
      }
      d = null;
  }
  
  
  R.svg = !(R.vml = R.type == "VML");
  R._Paper = Paper;
  
  R.fn = paperproto = Paper.prototype = R.prototype;
  R._id = 0;
  R._oid = 0;
  
  R.is = function (o, type) {
      type = lowerCase.call(type);
      if (type == "finite") {
          return !isnan[has](+o);
      }
      if (type == "array") {
          return o instanceof Array;
      }
      return  (type == "null" && o === null) ||
              (type == typeof o && o !== null) ||
              (type == "object" && o === Object(o)) ||
              (type == "array" && Array.isArray && Array.isArray(o)) ||
              objectToString.call(o).slice(8, -1).toLowerCase() == type;
  };

  function clone(obj) {
      if (Object(obj) !== obj) {
          return obj;
      }
      var res = new obj.constructor;
      for (var key in obj) if (obj[has](key)) {
          res[key] = clone(obj[key]);
      }
      return res;
  }

  
  R.angle = function (x1, y1, x2, y2, x3, y3) {
      if (x3 == null) {
          var x = x1 - x2,
              y = y1 - y2;
          if (!x && !y) {
              return 0;
          }
          return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
      } else {
          return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
      }
  };
  
  R.rad = function (deg) {
      return deg % 360 * PI / 180;
  };
  
  R.deg = function (rad) {
      return rad * 180 / PI % 360;
  };
  
  R.snapTo = function (values, value, tolerance) {
      tolerance = R.is(tolerance, "finite") ? tolerance : 10;
      if (R.is(values, array)) {
          var i = values.length;
          while (i--) if (abs(values[i] - value) <= tolerance) {
              return values[i];
          }
      } else {
          values = +values;
          var rem = value % values;
          if (rem < tolerance) {
              return value - rem;
          }
          if (rem > values - tolerance) {
              return value - rem + values;
          }
      }
      return value;
  };
  
  
  var createUUID = R.createUUID = (function (uuidRegEx, uuidReplacer) {
      return function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
      };
  })(/[xy]/g, function (c) {
      var r = math.random() * 16 | 0,
          v = c == "x" ? r : (r & 3 | 8);
      return v.toString(16);
  });

  
  R.setWindow = function (newwin) {
      eve("raphael.setWindow", R, g.win, newwin);
      g.win = newwin;
      g.doc = g.win.document;
      if (R._engine.initWin) {
          R._engine.initWin(g.win);
      }
  };
  var toHex = function (color) {
      if (R.vml) {
          // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
          var trim = /^\s+|\s+$/g;
          var bod;
          try {
              var docum = new ActiveXObject("htmlfile");
              docum.write("<body>");
              docum.close();
              bod = docum.body;
          } catch(e) {
              bod = createPopup().document.body;
          }
          var range = bod.createTextRange();
          toHex = cacher(function (color) {
              try {
                  bod.style.color = Str(color).replace(trim, E);
                  var value = range.queryCommandValue("ForeColor");
                  value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
                  return "#" + ("000000" + value.toString(16)).slice(-6);
              } catch(e) {
                  return "none";
              }
          });
      } else {
          var i = g.doc.createElement("i");
          i.title = "Rapha\xebl Colour Picker";
          i.style.display = "none";
          g.doc.body.appendChild(i);
          toHex = cacher(function (color) {
              i.style.color = color;
              return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
          });
      }
      return toHex(color);
  },
  hsbtoString = function () {
      return "hsb(" + [this.h, this.s, this.b] + ")";
  },
  hsltoString = function () {
      return "hsl(" + [this.h, this.s, this.l] + ")";
  },
  rgbtoString = function () {
      return this.hex;
  },
  prepareRGB = function (r, g, b) {
      if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
          b = r.b;
          g = r.g;
          r = r.r;
      }
      if (g == null && R.is(r, string)) {
          var clr = R.getRGB(r);
          r = clr.r;
          g = clr.g;
          b = clr.b;
      }
      if (r > 1 || g > 1 || b > 1) {
          r /= 255;
          g /= 255;
          b /= 255;
      }
      
      return [r, g, b];
  },
  packageRGB = function (r, g, b, o) {
      r *= 255;
      g *= 255;
      b *= 255;
      var rgb = {
          r: r,
          g: g,
          b: b,
          hex: R.rgb(r, g, b),
          toString: rgbtoString
      };
      R.is(o, "finite") && (rgb.opacity = o);
      return rgb;
  };
  
  
  R.color = function (clr) {
      var rgb;
      if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
          rgb = R.hsb2rgb(clr);
          clr.r = rgb.r;
          clr.g = rgb.g;
          clr.b = rgb.b;
          clr.hex = rgb.hex;
      } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
          rgb = R.hsl2rgb(clr);
          clr.r = rgb.r;
          clr.g = rgb.g;
          clr.b = rgb.b;
          clr.hex = rgb.hex;
      } else {
          if (R.is(clr, "string")) {
              clr = R.getRGB(clr);
          }
          if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
              rgb = R.rgb2hsl(clr);
              clr.h = rgb.h;
              clr.s = rgb.s;
              clr.l = rgb.l;
              rgb = R.rgb2hsb(clr);
              clr.v = rgb.b;
          } else {
              clr = {hex: "none"};
              clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
          }
      }
      clr.toString = rgbtoString;
      return clr;
  };
  
  R.hsb2rgb = function (h, s, v, o) {
      if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
          v = h.b;
          s = h.s;
          h = h.h;
          o = h.o;
      }
      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = v * s;
      X = C * (1 - abs(h % 2 - 1));
      R = G = B = v - C;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return packageRGB(R, G, B, o);
  };
  
  R.hsl2rgb = function (h, s, l, o) {
      if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
          l = h.l;
          s = h.s;
          h = h.h;
      }
      if (h > 1 || s > 1 || l > 1) {
          h /= 360;
          s /= 100;
          l /= 100;
      }
      h *= 360;
      var R, G, B, X, C;
      h = (h % 360) / 60;
      C = 2 * s * (l < .5 ? l : 1 - l);
      X = C * (1 - abs(h % 2 - 1));
      R = G = B = l - C / 2;

      h = ~~h;
      R += [C, X, 0, 0, X, C][h];
      G += [X, C, C, X, 0, 0][h];
      B += [0, 0, X, C, C, X][h];
      return packageRGB(R, G, B, o);
  };
  
  R.rgb2hsb = function (r, g, b) {
      b = prepareRGB(r, g, b);
      r = b[0];
      g = b[1];
      b = b[2];

      var H, S, V, C;
      V = mmax(r, g, b);
      C = V - mmin(r, g, b);
      H = (C == 0 ? null :
           V == r ? (g - b) / C :
           V == g ? (b - r) / C + 2 :
                    (r - g) / C + 4
          );
      H = ((H + 360) % 6) * 60 / 360;
      S = C == 0 ? 0 : C / V;
      return {h: H, s: S, b: V, toString: hsbtoString};
  };
  
  R.rgb2hsl = function (r, g, b) {
      b = prepareRGB(r, g, b);
      r = b[0];
      g = b[1];
      b = b[2];

      var H, S, L, M, m, C;
      M = mmax(r, g, b);
      m = mmin(r, g, b);
      C = M - m;
      H = (C == 0 ? null :
           M == r ? (g - b) / C :
           M == g ? (b - r) / C + 2 :
                    (r - g) / C + 4);
      H = ((H + 360) % 6) * 60 / 360;
      L = (M + m) / 2;
      S = (C == 0 ? 0 :
           L < .5 ? C / (2 * L) :
                    C / (2 - 2 * L));
      return {h: H, s: S, l: L, toString: hsltoString};
  };
  R._path2string = function () {
      return this.join(",").replace(p2s, "$1");
  };
  function repush(array, item) {
      for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
          return array.push(array.splice(i, 1)[0]);
      }
  }
  function cacher(f, scope, postprocessor) {
      function newf() {
          var arg = Array.prototype.slice.call(arguments, 0),
              args = arg.join("\u2400"),
              cache = newf.cache = newf.cache || {},
              count = newf.count = newf.count || [];
          if (cache[has](args)) {
              repush(count, args);
              return postprocessor ? postprocessor(cache[args]) : cache[args];
          }
          count.length >= 1e3 && delete cache[count.shift()];
          count.push(args);
          cache[args] = f[apply](scope, arg);
          return postprocessor ? postprocessor(cache[args]) : cache[args];
      }
      return newf;
  }

  var preload = R._preload = function (src, f) {
      var img = g.doc.createElement("img");
      img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
      img.onload = function () {
          f.call(this);
          this.onload = null;
          g.doc.body.removeChild(this);
      };
      img.onerror = function () {
          g.doc.body.removeChild(this);
      };
      g.doc.body.appendChild(img);
      img.src = src;
  };
  
  function clrToString() {
      return this.hex;
  }

  
  R.getRGB = cacher(function (colour) {
      if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
          return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
      }
      if (colour == "none") {
          return {r: -1, g: -1, b: -1, hex: "none", toString: clrToString};
      }
      !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
      var res,
          red,
          green,
          blue,
          opacity,
          t,
          values,
          rgb = colour.match(colourRegExp);
      if (rgb) {
          if (rgb[2]) {
              blue = toInt(rgb[2].substring(5), 16);
              green = toInt(rgb[2].substring(3, 5), 16);
              red = toInt(rgb[2].substring(1, 3), 16);
          }
          if (rgb[3]) {
              blue = toInt((t = rgb[3].charAt(3)) + t, 16);
              green = toInt((t = rgb[3].charAt(2)) + t, 16);
              red = toInt((t = rgb[3].charAt(1)) + t, 16);
          }
          if (rgb[4]) {
              values = rgb[4][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
          }
          if (rgb[5]) {
              values = rgb[5][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return R.hsb2rgb(red, green, blue, opacity);
          }
          if (rgb[6]) {
              values = rgb[6][split](commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return R.hsl2rgb(red, green, blue, opacity);
          }
          rgb = {r: red, g: green, b: blue, toString: clrToString};
          rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
          R.is(opacity, "finite") && (rgb.opacity = opacity);
          return rgb;
      }
      return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
  }, R);
  
  R.hsb = cacher(function (h, s, b) {
      return R.hsb2rgb(h, s, b).hex;
  });
  
  R.hsl = cacher(function (h, s, l) {
      return R.hsl2rgb(h, s, l).hex;
  });
  
  R.rgb = cacher(function (r, g, b) {
      return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
  });
  
  R.getColor = function (value) {
      var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
          rgb = this.hsb2rgb(start.h, start.s, start.b);
      start.h += .075;
      if (start.h > 1) {
          start.h = 0;
          start.s -= .2;
          start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
      }
      return rgb.hex;
  };
  
  R.getColor.reset = function () {
      delete this.start;
  };

  // http://schepers.cc/getting-to-the-point
  function catmullRom2bezier(crp, z) {
      var d = [];
      for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
          var p = [
                      {x: +crp[i - 2], y: +crp[i - 1]},
                      {x: +crp[i],     y: +crp[i + 1]},
                      {x: +crp[i + 2], y: +crp[i + 3]},
                      {x: +crp[i + 4], y: +crp[i + 5]}
                  ];
          if (z) {
              if (!i) {
                  p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
              } else if (iLen - 4 == i) {
                  p[3] = {x: +crp[0], y: +crp[1]};
              } else if (iLen - 2 == i) {
                  p[2] = {x: +crp[0], y: +crp[1]};
                  p[3] = {x: +crp[2], y: +crp[3]};
              }
          } else {
              if (iLen - 4 == i) {
                  p[3] = p[2];
              } else if (!i) {
                  p[0] = {x: +crp[i], y: +crp[i + 1]};
              }
          }
          d.push(["C",
                (-p[0].x + 6 * p[1].x + p[2].x) / 6,
                (-p[0].y + 6 * p[1].y + p[2].y) / 6,
                (p[1].x + 6 * p[2].x - p[3].x) / 6,
                (p[1].y + 6*p[2].y - p[3].y) / 6,
                p[2].x,
                p[2].y
          ]);
      }

      return d;
  }
  
  R.parsePathString = function (pathString) {
      if (!pathString) {
          return null;
      }
      var pth = paths(pathString);
      if (pth.arr) {
          return pathClone(pth.arr);
      }
      
      var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0},
          data = [];
      if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
          data = pathClone(pathString);
      }
      if (!data.length) {
          Str(pathString).replace(pathCommand, function (a, b, c) {
              var params = [],
                  name = b.toLowerCase();
              c.replace(pathValues, function (a, b) {
                  b && params.push(+b);
              });
              if (name == "m" && params.length > 2) {
                  data.push([b][concat](params.splice(0, 2)));
                  name = "l";
                  b = b == "m" ? "l" : "L";
              }
              if (name == "r") {
                  data.push([b][concat](params));
              } else while (params.length >= paramCounts[name]) {
                  data.push([b][concat](params.splice(0, paramCounts[name])));
                  if (!paramCounts[name]) {
                      break;
                  }
              }
          });
      }
      data.toString = R._path2string;
      pth.arr = pathClone(data);
      return data;
  };
  
  R.parseTransformString = cacher(function (TString) {
      if (!TString) {
          return null;
      }
      var paramCounts = {r: 3, s: 4, t: 2, m: 6},
          data = [];
      if (R.is(TString, array) && R.is(TString[0], array)) { // rough assumption
          data = pathClone(TString);
      }
      if (!data.length) {
          Str(TString).replace(tCommand, function (a, b, c) {
              var params = [],
                  name = lowerCase.call(b);
              c.replace(pathValues, function (a, b) {
                  b && params.push(+b);
              });
              data.push([b][concat](params));
          });
      }
      data.toString = R._path2string;
      return data;
  });
  // PATHS
  var paths = function (ps) {
      var p = paths.ps = paths.ps || {};
      if (p[ps]) {
          p[ps].sleep = 100;
      } else {
          p[ps] = {
              sleep: 100
          };
      }
      setTimeout(function () {
          for (var key in p) if (p[has](key) && key != ps) {
              p[key].sleep--;
              !p[key].sleep && delete p[key];
          }
      });
      return p[ps];
  };
  
  R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
      var t1 = 1 - t,
          t13 = pow(t1, 3),
          t12 = pow(t1, 2),
          t2 = t * t,
          t3 = t2 * t,
          x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
          y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
          mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
          my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
          nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
          ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
          ax = t1 * p1x + t * c1x,
          ay = t1 * p1y + t * c1y,
          cx = t1 * c2x + t * p2x,
          cy = t1 * c2y + t * p2y,
          alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
      (mx > nx || my < ny) && (alpha += 180);
      return {
          x: x,
          y: y,
          m: {x: mx, y: my},
          n: {x: nx, y: ny},
          start: {x: ax, y: ay},
          end: {x: cx, y: cy},
          alpha: alpha
      };
  };
  
  R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
      if (!R.is(p1x, "array")) {
          p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
      }
      var bbox = curveDim.apply(null, p1x);
      return {
          x: bbox.min.x,
          y: bbox.min.y,
          x2: bbox.max.x,
          y2: bbox.max.y,
          width: bbox.max.x - bbox.min.x,
          height: bbox.max.y - bbox.min.y
      };
  };
  
  R.isPointInsideBBox = function (bbox, x, y) {
      return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
  };
  
  R.isBBoxIntersect = function (bbox1, bbox2) {
      var i = R.isPointInsideBBox;
      return i(bbox2, bbox1.x, bbox1.y)
          || i(bbox2, bbox1.x2, bbox1.y)
          || i(bbox2, bbox1.x, bbox1.y2)
          || i(bbox2, bbox1.x2, bbox1.y2)
          || i(bbox1, bbox2.x, bbox2.y)
          || i(bbox1, bbox2.x2, bbox2.y)
          || i(bbox1, bbox2.x, bbox2.y2)
          || i(bbox1, bbox2.x2, bbox2.y2)
          || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
          && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
  };
  function base3(t, p1, p2, p3, p4) {
      var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
          t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
      return t * t2 - 3 * p1 + 3 * p2;
  }
  function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
      if (z == null) {
          z = 1;
      }
      z = z > 1 ? 1 : z < 0 ? 0 : z;
      var z2 = z / 2,
          n = 12,
          Tvalues = [-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],
          Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
          sum = 0;
      for (var i = 0; i < n; i++) {
          var ct = z2 * Tvalues[i] + z2,
              xbase = base3(ct, x1, x2, x3, x4),
              ybase = base3(ct, y1, y2, y3, y4),
              comb = xbase * xbase + ybase * ybase;
          sum += Cvalues[i] * math.sqrt(comb);
      }
      return z2 * sum;
  }
  function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
      if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
          return;
      }
      var t = 1,
          step = t / 2,
          t2 = t - step,
          l,
          e = .01;
      l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
      while (abs(l - ll) > e) {
          step /= 2;
          t2 += (l < ll ? 1 : -1) * step;
          l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
      }
      return t2;
  }
  function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
      if (
          mmax(x1, x2) < mmin(x3, x4) ||
          mmin(x1, x2) > mmax(x3, x4) ||
          mmax(y1, y2) < mmin(y3, y4) ||
          mmin(y1, y2) > mmax(y3, y4)
      ) {
          return;
      }
      var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
          ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
          denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

      if (!denominator) {
          return;
      }
      var px = nx / denominator,
          py = ny / denominator,
          px2 = +px.toFixed(2),
          py2 = +py.toFixed(2);
      if (
          px2 < +mmin(x1, x2).toFixed(2) ||
          px2 > +mmax(x1, x2).toFixed(2) ||
          px2 < +mmin(x3, x4).toFixed(2) ||
          px2 > +mmax(x3, x4).toFixed(2) ||
          py2 < +mmin(y1, y2).toFixed(2) ||
          py2 > +mmax(y1, y2).toFixed(2) ||
          py2 < +mmin(y3, y4).toFixed(2) ||
          py2 > +mmax(y3, y4).toFixed(2)
      ) {
          return;
      }
      return {x: px, y: py};
  }
  function inter(bez1, bez2) {
      return interHelper(bez1, bez2);
  }
  function interCount(bez1, bez2) {
      return interHelper(bez1, bez2, 1);
  }
  function interHelper(bez1, bez2, justCount) {
      var bbox1 = R.bezierBBox(bez1),
          bbox2 = R.bezierBBox(bez2);
      if (!R.isBBoxIntersect(bbox1, bbox2)) {
          return justCount ? 0 : [];
      }
      var l1 = bezlen.apply(0, bez1),
          l2 = bezlen.apply(0, bez2),
          n1 = ~~(l1 / 5),
          n2 = ~~(l2 / 5),
          dots1 = [],
          dots2 = [],
          xy = {},
          res = justCount ? 0 : [];
      for (var i = 0; i < n1 + 1; i++) {
          var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
          dots1.push({x: p.x, y: p.y, t: i / n1});
      }
      for (i = 0; i < n2 + 1; i++) {
          p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
          dots2.push({x: p.x, y: p.y, t: i / n2});
      }
      for (i = 0; i < n1; i++) {
          for (var j = 0; j < n2; j++) {
              var di = dots1[i],
                  di1 = dots1[i + 1],
                  dj = dots2[j],
                  dj1 = dots2[j + 1],
                  ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                  cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                  is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
              if (is) {
                  if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                      continue;
                  }
                  xy[is.x.toFixed(4)] = is.y.toFixed(4);
                  var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                      t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                  if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                      if (justCount) {
                          res++;
                      } else {
                          res.push({
                              x: is.x,
                              y: is.y,
                              t1: t1,
                              t2: t2
                          });
                      }
                  }
              }
          }
      }
      return res;
  }
  
  R.pathIntersection = function (path1, path2) {
      return interPathHelper(path1, path2);
  };
  R.pathIntersectionNumber = function (path1, path2) {
      return interPathHelper(path1, path2, 1);
  };
  function interPathHelper(path1, path2, justCount) {
      path1 = R._path2curve(path1);
      path2 = R._path2curve(path2);
      var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
          res = justCount ? 0 : [];
      for (var i = 0, ii = path1.length; i < ii; i++) {
          var pi = path1[i];
          if (pi[0] == "M") {
              x1 = x1m = pi[1];
              y1 = y1m = pi[2];
          } else {
              if (pi[0] == "C") {
                  bez1 = [x1, y1].concat(pi.slice(1));
                  x1 = bez1[6];
                  y1 = bez1[7];
              } else {
                  bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                  x1 = x1m;
                  y1 = y1m;
              }
              for (var j = 0, jj = path2.length; j < jj; j++) {
                  var pj = path2[j];
                  if (pj[0] == "M") {
                      x2 = x2m = pj[1];
                      y2 = y2m = pj[2];
                  } else {
                      if (pj[0] == "C") {
                          bez2 = [x2, y2].concat(pj.slice(1));
                          x2 = bez2[6];
                          y2 = bez2[7];
                      } else {
                          bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                          x2 = x2m;
                          y2 = y2m;
                      }
                      var intr = interHelper(bez1, bez2, justCount);
                      if (justCount) {
                          res += intr;
                      } else {
                          for (var k = 0, kk = intr.length; k < kk; k++) {
                              intr[k].segment1 = i;
                              intr[k].segment2 = j;
                              intr[k].bez1 = bez1;
                              intr[k].bez2 = bez2;
                          }
                          res = res.concat(intr);
                      }
                  }
              }
          }
      }
      return res;
  }
  
  R.isPointInsidePath = function (path, x, y) {
      var bbox = R.pathBBox(path);
      return R.isPointInsideBBox(bbox, x, y) &&
             interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
  };
  R._removedFactory = function (methodname) {
      return function () {
          eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object", methodname);
      };
  };
  
  var pathDimensions = R.pathBBox = function (path) {
      var pth = paths(path);
      if (pth.bbox) {
          return pth.bbox;
      }
      if (!path) {
          return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
      }
      path = path2curve(path);
      var x = 0, 
          y = 0,
          X = [],
          Y = [],
          p;
      for (var i = 0, ii = path.length; i < ii; i++) {
          p = path[i];
          if (p[0] == "M") {
              x = p[1];
              y = p[2];
              X.push(x);
              Y.push(y);
          } else {
              var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
              X = X[concat](dim.min.x, dim.max.x);
              Y = Y[concat](dim.min.y, dim.max.y);
              x = p[5];
              y = p[6];
          }
      }
      var xmin = mmin[apply](0, X),
          ymin = mmin[apply](0, Y),
          xmax = mmax[apply](0, X),
          ymax = mmax[apply](0, Y),
          bb = {
              x: xmin,
              y: ymin,
              x2: xmax,
              y2: ymax,
              width: xmax - xmin,
              height: ymax - ymin
          };
      pth.bbox = clone(bb);
      return bb;
  },
      pathClone = function (pathArray) {
          var res = clone(pathArray);
          res.toString = R._path2string;
          return res;
      },
      pathToRelative = R._pathToRelative = function (pathArray) {
          var pth = paths(pathArray);
          if (pth.rel) {
              return pathClone(pth.rel);
          }
          if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
              pathArray = R.parsePathString(pathArray);
          }
          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0;
          if (pathArray[0][0] == "M") {
              x = pathArray[0][1];
              y = pathArray[0][2];
              mx = x;
              my = y;
              start++;
              res.push(["M", x, y]);
          }
          for (var i = start, ii = pathArray.length; i < ii; i++) {
              var r = res[i] = [],
                  pa = pathArray[i];
              if (pa[0] != lowerCase.call(pa[0])) {
                  r[0] = lowerCase.call(pa[0]);
                  switch (r[0]) {
                      case "a":
                          r[1] = pa[1];
                          r[2] = pa[2];
                          r[3] = pa[3];
                          r[4] = pa[4];
                          r[5] = pa[5];
                          r[6] = +(pa[6] - x).toFixed(3);
                          r[7] = +(pa[7] - y).toFixed(3);
                          break;
                      case "v":
                          r[1] = +(pa[1] - y).toFixed(3);
                          break;
                      case "m":
                          mx = pa[1];
                          my = pa[2];
                      default:
                          for (var j = 1, jj = pa.length; j < jj; j++) {
                              r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                          }
                  }
              } else {
                  r = res[i] = [];
                  if (pa[0] == "m") {
                      mx = pa[1] + x;
                      my = pa[2] + y;
                  }
                  for (var k = 0, kk = pa.length; k < kk; k++) {
                      res[i][k] = pa[k];
                  }
              }
              var len = res[i].length;
              switch (res[i][0]) {
                  case "z":
                      x = mx;
                      y = my;
                      break;
                  case "h":
                      x += +res[i][len - 1];
                      break;
                  case "v":
                      y += +res[i][len - 1];
                      break;
                  default:
                      x += +res[i][len - 2];
                      y += +res[i][len - 1];
              }
          }
          res.toString = R._path2string;
          pth.rel = pathClone(res);
          return res;
      },
      pathToAbsolute = R._pathToAbsolute = function (pathArray) {
          var pth = paths(pathArray);
          if (pth.abs) {
              return pathClone(pth.abs);
          }
          if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
              pathArray = R.parsePathString(pathArray);
          }
          if (!pathArray || !pathArray.length) {
              return [["M", 0, 0]];
          }
          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0;
          if (pathArray[0][0] == "M") {
              x = +pathArray[0][1];
              y = +pathArray[0][2];
              mx = x;
              my = y;
              start++;
              res[0] = ["M", x, y];
          }
          var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
          for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
              res.push(r = []);
              pa = pathArray[i];
              if (pa[0] != upperCase.call(pa[0])) {
                  r[0] = upperCase.call(pa[0]);
                  switch (r[0]) {
                      case "A":
                          r[1] = pa[1];
                          r[2] = pa[2];
                          r[3] = pa[3];
                          r[4] = pa[4];
                          r[5] = pa[5];
                          r[6] = +(pa[6] + x);
                          r[7] = +(pa[7] + y);
                          break;
                      case "V":
                          r[1] = +pa[1] + y;
                          break;
                      case "H":
                          r[1] = +pa[1] + x;
                          break;
                      case "R":
                          var dots = [x, y][concat](pa.slice(1));
                          for (var j = 2, jj = dots.length; j < jj; j++) {
                              dots[j] = +dots[j] + x;
                              dots[++j] = +dots[j] + y;
                          }
                          res.pop();
                          res = res[concat](catmullRom2bezier(dots, crz));
                          break;
                      case "M":
                          mx = +pa[1] + x;
                          my = +pa[2] + y;
                      default:
                          for (j = 1, jj = pa.length; j < jj; j++) {
                              r[j] = +pa[j] + ((j % 2) ? x : y);
                          }
                  }
              } else if (pa[0] == "R") {
                  dots = [x, y][concat](pa.slice(1));
                  res.pop();
                  res = res[concat](catmullRom2bezier(dots, crz));
                  r = ["R"][concat](pa.slice(-2));
              } else {
                  for (var k = 0, kk = pa.length; k < kk; k++) {
                      r[k] = pa[k];
                  }
              }
              switch (r[0]) {
                  case "Z":
                      x = mx;
                      y = my;
                      break;
                  case "H":
                      x = r[1];
                      break;
                  case "V":
                      y = r[1];
                      break;
                  case "M":
                      mx = r[r.length - 2];
                      my = r[r.length - 1];
                  default:
                      x = r[r.length - 2];
                      y = r[r.length - 1];
              }
          }
          res.toString = R._path2string;
          pth.abs = pathClone(res);
          return res;
      },
      l2c = function (x1, y1, x2, y2) {
          return [x1, y1, x2, y2, x2, y2];
      },
      q2c = function (x1, y1, ax, ay, x2, y2) {
          var _13 = 1 / 3,
              _23 = 2 / 3;
          return [
                  _13 * x1 + _23 * ax,
                  _13 * y1 + _23 * ay,
                  _13 * x2 + _23 * ax,
                  _13 * y2 + _23 * ay,
                  x2,
                  y2
              ];
      },
      a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
          // for more information of where this math came from visit:
          // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
          var _120 = PI * 120 / 180,
              rad = PI / 180 * (+angle || 0),
              res = [],
              xy,
              rotate = cacher(function (x, y, rad) {
                  var X = x * math.cos(rad) - y * math.sin(rad),
                      Y = x * math.sin(rad) + y * math.cos(rad);
                  return {x: X, y: Y};
              });
          if (!recursive) {
              xy = rotate(x1, y1, -rad);
              x1 = xy.x;
              y1 = xy.y;
              xy = rotate(x2, y2, -rad);
              x2 = xy.x;
              y2 = xy.y;
              var cos = math.cos(PI / 180 * angle),
                  sin = math.sin(PI / 180 * angle),
                  x = (x1 - x2) / 2,
                  y = (y1 - y2) / 2;
              var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
              if (h > 1) {
                  h = math.sqrt(h);
                  rx = h * rx;
                  ry = h * ry;
              }
              var rx2 = rx * rx,
                  ry2 = ry * ry,
                  k = (large_arc_flag == sweep_flag ? -1 : 1) *
                      math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                  cx = k * rx * y / ry + (x1 + x2) / 2,
                  cy = k * -ry * x / rx + (y1 + y2) / 2,
                  f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                  f2 = math.asin(((y2 - cy) / ry).toFixed(9));

              f1 = x1 < cx ? PI - f1 : f1;
              f2 = x2 < cx ? PI - f2 : f2;
              f1 < 0 && (f1 = PI * 2 + f1);
              f2 < 0 && (f2 = PI * 2 + f2);
              if (sweep_flag && f1 > f2) {
                  f1 = f1 - PI * 2;
              }
              if (!sweep_flag && f2 > f1) {
                  f2 = f2 - PI * 2;
              }
          } else {
              f1 = recursive[0];
              f2 = recursive[1];
              cx = recursive[2];
              cy = recursive[3];
          }
          var df = f2 - f1;
          if (abs(df) > _120) {
              var f2old = f2,
                  x2old = x2,
                  y2old = y2;
              f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
              x2 = cx + rx * math.cos(f2);
              y2 = cy + ry * math.sin(f2);
              res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
          }
          df = f2 - f1;
          var c1 = math.cos(f1),
              s1 = math.sin(f1),
              c2 = math.cos(f2),
              s2 = math.sin(f2),
              t = math.tan(df / 4),
              hx = 4 / 3 * rx * t,
              hy = 4 / 3 * ry * t,
              m1 = [x1, y1],
              m2 = [x1 + hx * s1, y1 - hy * c1],
              m3 = [x2 + hx * s2, y2 - hy * c2],
              m4 = [x2, y2];
          m2[0] = 2 * m1[0] - m2[0];
          m2[1] = 2 * m1[1] - m2[1];
          if (recursive) {
              return [m2, m3, m4][concat](res);
          } else {
              res = [m2, m3, m4][concat](res).join()[split](",");
              var newres = [];
              for (var i = 0, ii = res.length; i < ii; i++) {
                  newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
              }
              return newres;
          }
      },
      findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
          var t1 = 1 - t;
          return {
              x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
              y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
          };
      },
      curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
          var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
              b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
              c = p1x - c1x,
              t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
              t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
              y = [p1y, p2y],
              x = [p1x, p2x],
              dot;
          abs(t1) > "1e12" && (t1 = .5);
          abs(t2) > "1e12" && (t2 = .5);
          if (t1 > 0 && t1 < 1) {
              dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
              x.push(dot.x);
              y.push(dot.y);
          }
          if (t2 > 0 && t2 < 1) {
              dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
              x.push(dot.x);
              y.push(dot.y);
          }
          a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
          b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
          c = p1y - c1y;
          t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
          t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
          abs(t1) > "1e12" && (t1 = .5);
          abs(t2) > "1e12" && (t2 = .5);
          if (t1 > 0 && t1 < 1) {
              dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
              x.push(dot.x);
              y.push(dot.y);
          }
          if (t2 > 0 && t2 < 1) {
              dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
              x.push(dot.x);
              y.push(dot.y);
          }
          return {
              min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
              max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
          };
      }),
      path2curve = R._path2curve = cacher(function (path, path2) {
          var pth = !path2 && paths(path);
          if (!path2 && pth.curve) {
              return pathClone(pth.curve);
          }
          var p = pathToAbsolute(path),
              p2 = path2 && pathToAbsolute(path2),
              attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
              attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
              processPath = function (path, d) {
                  var nx, ny;
                  if (!path) {
                      return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                  }
                  !(path[0] in {T:1, Q:1}) && (d.qx = d.qy = null);
                  switch (path[0]) {
                      case "M":
                          d.X = path[1];
                          d.Y = path[2];
                          break;
                      case "A":
                          path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
                          break;
                      case "S":
                          nx = d.x + (d.x - (d.bx || d.x));
                          ny = d.y + (d.y - (d.by || d.y));
                          path = ["C", nx, ny][concat](path.slice(1));
                          break;
                      case "T":
                          d.qx = d.x + (d.x - (d.qx || d.x));
                          d.qy = d.y + (d.y - (d.qy || d.y));
                          path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                          break;
                      case "Q":
                          d.qx = path[1];
                          d.qy = path[2];
                          path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                          break;
                      case "L":
                          path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
                          break;
                      case "H":
                          path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
                          break;
                      case "V":
                          path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
                          break;
                      case "Z":
                          path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
                          break;
                  }
                  return path;
              },
              fixArc = function (pp, i) {
                  if (pp[i].length > 7) {
                      pp[i].shift();
                      var pi = pp[i];
                      while (pi.length) {
                          pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
                      }
                      pp.splice(i, 1);
                      ii = mmax(p.length, p2 && p2.length || 0);
                  }
              },
              fixM = function (path1, path2, a1, a2, i) {
                  if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                      path2.splice(i, 0, ["M", a2.x, a2.y]);
                      a1.bx = 0;
                      a1.by = 0;
                      a1.x = path1[i][1];
                      a1.y = path1[i][2];
                      ii = mmax(p.length, p2 && p2.length || 0);
                  }
              };
          for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
              p[i] = processPath(p[i], attrs);
              fixArc(p, i);
              p2 && (p2[i] = processPath(p2[i], attrs2));
              p2 && fixArc(p2, i);
              fixM(p, p2, attrs, attrs2, i);
              fixM(p2, p, attrs2, attrs, i);
              var seg = p[i],
                  seg2 = p2 && p2[i],
                  seglen = seg.length,
                  seg2len = p2 && seg2.length;
              attrs.x = seg[seglen - 2];
              attrs.y = seg[seglen - 1];
              attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
              attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
              attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
              attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
              attrs2.x = p2 && seg2[seg2len - 2];
              attrs2.y = p2 && seg2[seg2len - 1];
          }
          if (!p2) {
              pth.curve = pathClone(p);
          }
          return p2 ? [p, p2] : p;
      }, null, pathClone),
      parseDots = R._parseDots = cacher(function (gradient) {
          var dots = [];
          for (var i = 0, ii = gradient.length; i < ii; i++) {
              var dot = {},
                  par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
              dot.color = R.getRGB(par[1]);
              if (dot.color.error) {
                  return null;
              }
              dot.color = dot.color.hex;
              par[2] && (dot.offset = par[2] + "%");
              dots.push(dot);
          }
          for (i = 1, ii = dots.length - 1; i < ii; i++) {
              if (!dots[i].offset) {
                  var start = toFloat(dots[i - 1].offset || 0),
                      end = 0;
                  for (var j = i + 1; j < ii; j++) {
                      if (dots[j].offset) {
                          end = dots[j].offset;
                          break;
                      }
                  }
                  if (!end) {
                      end = 100;
                      j = ii;
                  }
                  end = toFloat(end);
                  var d = (end - start) / (j - i + 1);
                  for (; i < j; i++) {
                      start += d;
                      dots[i].offset = start + "%";
                  }
              }
          }
          return dots;
      }),
      tear = R._tear = function (el, paper) {
          el == paper.top && (paper.top = el.prev);
          el == paper.bottom && (paper.bottom = el.next);
          el.next && (el.next.prev = el.prev);
          el.prev && (el.prev.next = el.next);
      },
      tofront = R._tofront = function (el, paper) {
          if (paper.top === el) {
              return;
          }
          tear(el, paper);
          el.next = null;
          el.prev = paper.top;
          paper.top.next = el;
          paper.top = el;
      },
      toback = R._toback = function (el, paper) {
          if (paper.bottom === el) {
              return;
          }
          tear(el, paper);
          el.next = paper.bottom;
          el.prev = null;
          paper.bottom.prev = el;
          paper.bottom = el;
      },
      insertafter = R._insertafter = function (el, el2, paper) {
          tear(el, paper);
          el2 == paper.top && (paper.top = el);
          el2.next && (el2.next.prev = el);
          el.next = el2.next;
          el.prev = el2;
          el2.next = el;
      },
      insertbefore = R._insertbefore = function (el, el2, paper) {
          tear(el, paper);
          el2 == paper.bottom && (paper.bottom = el);
          el2.prev && (el2.prev.next = el);
          el.prev = el2.prev;
          el2.prev = el;
          el.next = el2;
      },
      
      toMatrix = R.toMatrix = function (path, transform) {
          var bb = pathDimensions(path),
              el = {
                  _: {
                      transform: E
                  },
                  getBBox: function () {
                      return bb;
                  }
              };
          extractTransform(el, transform);
          return el.matrix;
      },
      
      transformPath = R.transformPath = function (path, transform) {
          return mapPath(path, toMatrix(path, transform));
      },
      extractTransform = R._extractTransform = function (el, tstr) {
          if (tstr == null) {
              return el._.transform;
          }
          tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
          var tdata = R.parseTransformString(tstr),
              deg = 0,
              dx = 0,
              dy = 0,
              sx = 1,
              sy = 1,
              _ = el._,
              m = new Matrix;
          _.transform = tdata || [];
          if (tdata) {
              for (var i = 0, ii = tdata.length; i < ii; i++) {
                  var t = tdata[i],
                      tlen = t.length,
                      command = Str(t[0]).toLowerCase(),
                      absolute = t[0] != command,
                      inver = absolute ? m.invert() : 0,
                      x1,
                      y1,
                      x2,
                      y2,
                      bb;
                  if (command == "t" && tlen == 3) {
                      if (absolute) {
                          x1 = inver.x(0, 0);
                          y1 = inver.y(0, 0);
                          x2 = inver.x(t[1], t[2]);
                          y2 = inver.y(t[1], t[2]);
                          m.translate(x2 - x1, y2 - y1);
                      } else {
                          m.translate(t[1], t[2]);
                      }
                  } else if (command == "r") {
                      if (tlen == 2) {
                          bb = bb || el.getBBox(1);
                          m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                          deg += t[1];
                      } else if (tlen == 4) {
                          if (absolute) {
                              x2 = inver.x(t[2], t[3]);
                              y2 = inver.y(t[2], t[3]);
                              m.rotate(t[1], x2, y2);
                          } else {
                              m.rotate(t[1], t[2], t[3]);
                          }
                          deg += t[1];
                      }
                  } else if (command == "s") {
                      if (tlen == 2 || tlen == 3) {
                          bb = bb || el.getBBox(1);
                          m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                          sx *= t[1];
                          sy *= t[tlen - 1];
                      } else if (tlen == 5) {
                          if (absolute) {
                              x2 = inver.x(t[3], t[4]);
                              y2 = inver.y(t[3], t[4]);
                              m.scale(t[1], t[2], x2, y2);
                          } else {
                              m.scale(t[1], t[2], t[3], t[4]);
                          }
                          sx *= t[1];
                          sy *= t[2];
                      }
                  } else if (command == "m" && tlen == 7) {
                      m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                  }
                  _.dirtyT = 1;
                  el.matrix = m;
              }
          }

          
          el.matrix = m;

          _.sx = sx;
          _.sy = sy;
          _.deg = deg;
          _.dx = dx = m.e;
          _.dy = dy = m.f;

          if (sx == 1 && sy == 1 && !deg && _.bbox) {
              _.bbox.x += +dx;
              _.bbox.y += +dy;
          } else {
              _.dirtyT = 1;
          }
      },
      getEmpty = function (item) {
          var l = item[0];
          switch (l.toLowerCase()) {
              case "t": return [l, 0, 0];
              case "m": return [l, 1, 0, 0, 1, 0, 0];
              case "r": if (item.length == 4) {
                  return [l, 0, item[2], item[3]];
              } else {
                  return [l, 0];
              }
              case "s": if (item.length == 5) {
                  return [l, 1, 1, item[3], item[4]];
              } else if (item.length == 3) {
                  return [l, 1, 1];
              } else {
                  return [l, 1];
              }
          }
      },
      equaliseTransform = R._equaliseTransform = function (t1, t2) {
          t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
          t1 = R.parseTransformString(t1) || [];
          t2 = R.parseTransformString(t2) || [];
          var maxlength = mmax(t1.length, t2.length),
              from = [],
              to = [],
              i = 0, j, jj,
              tt1, tt2;
          for (; i < maxlength; i++) {
              tt1 = t1[i] || getEmpty(t2[i]);
              tt2 = t2[i] || getEmpty(tt1);
              if ((tt1[0] != tt2[0]) ||
                  (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
                  (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
                  ) {
                  return;
              }
              from[i] = [];
              to[i] = [];
              for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
                  j in tt1 && (from[i][j] = tt1[j]);
                  j in tt2 && (to[i][j] = tt2[j]);
              }
          }
          return {
              from: from,
              to: to
          };
      };
  R._getContainer = function (x, y, w, h) {
      var container;
      container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
      if (container == null) {
          return;
      }
      if (container.tagName) {
          if (y == null) {
              return {
                  container: container,
                  width: container.style.pixelWidth || container.offsetWidth,
                  height: container.style.pixelHeight || container.offsetHeight
              };
          } else {
              return {
                  container: container,
                  width: y,
                  height: w
              };
          }
      }
      return {
          container: 1,
          x: x,
          y: y,
          width: w,
          height: h
      };
  };
  
  R.pathToRelative = pathToRelative;
  R._engine = {};
  
  R.path2curve = path2curve;
  
  R.matrix = function (a, b, c, d, e, f) {
      return new Matrix(a, b, c, d, e, f);
  };
  function Matrix(a, b, c, d, e, f) {
      if (a != null) {
          this.a = +a;
          this.b = +b;
          this.c = +c;
          this.d = +d;
          this.e = +e;
          this.f = +f;
      } else {
          this.a = 1;
          this.b = 0;
          this.c = 0;
          this.d = 1;
          this.e = 0;
          this.f = 0;
      }
  }
  (function (matrixproto) {
      
      matrixproto.add = function (a, b, c, d, e, f) {
          var out = [[], [], []],
              m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
              matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
              x, y, z, res;

          if (a && a instanceof Matrix) {
              matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
          }

          for (x = 0; x < 3; x++) {
              for (y = 0; y < 3; y++) {
                  res = 0;
                  for (z = 0; z < 3; z++) {
                      res += m[x][z] * matrix[z][y];
                  }
                  out[x][y] = res;
              }
          }
          this.a = out[0][0];
          this.b = out[1][0];
          this.c = out[0][1];
          this.d = out[1][1];
          this.e = out[0][2];
          this.f = out[1][2];
      };
      
      matrixproto.invert = function () {
          var me = this,
              x = me.a * me.d - me.b * me.c;
          return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
      };
      
      matrixproto.clone = function () {
          return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
      };
      
      matrixproto.translate = function (x, y) {
          this.add(1, 0, 0, 1, x, y);
      };
      
      matrixproto.scale = function (x, y, cx, cy) {
          y == null && (y = x);
          (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
          this.add(x, 0, 0, y, 0, 0);
          (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
      };
      
      matrixproto.rotate = function (a, x, y) {
          a = R.rad(a);
          x = x || 0;
          y = y || 0;
          var cos = +math.cos(a).toFixed(9),
              sin = +math.sin(a).toFixed(9);
          this.add(cos, sin, -sin, cos, x, y);
          this.add(1, 0, 0, 1, -x, -y);
      };
      
      matrixproto.x = function (x, y) {
          return x * this.a + y * this.c + this.e;
      };
      
      matrixproto.y = function (x, y) {
          return x * this.b + y * this.d + this.f;
      };
      matrixproto.get = function (i) {
          return +this[Str.fromCharCode(97 + i)].toFixed(4);
      };
      matrixproto.toString = function () {
          return R.svg ?
              "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" :
              [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
      };
      matrixproto.toFilter = function () {
          return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) +
              ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +
              ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
      };
      matrixproto.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)];
      };
      function norm(a) {
          return a[0] * a[0] + a[1] * a[1];
      }
      function normalize(a) {
          var mag = math.sqrt(norm(a));
          a[0] && (a[0] /= mag);
          a[1] && (a[1] /= mag);
      }
      
      matrixproto.split = function () {
          var out = {};
          // translation
          out.dx = this.e;
          out.dy = this.f;

          // scale and shear
          var row = [[this.a, this.c], [this.b, this.d]];
          out.scalex = math.sqrt(norm(row[0]));
          normalize(row[0]);

          out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
          row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

          out.scaley = math.sqrt(norm(row[1]));
          normalize(row[1]);
          out.shear /= out.scaley;

          // rotation
          var sin = -row[0][1],
              cos = row[1][1];
          if (cos < 0) {
              out.rotate = R.deg(math.acos(cos));
              if (sin < 0) {
                  out.rotate = 360 - out.rotate;
              }
          } else {
              out.rotate = R.deg(math.asin(sin));
          }

          out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
          out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
          out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
          return out;
      };
      
      matrixproto.toTransformString = function (shorter) {
          var s = shorter || this[split]();
          if (s.isSimple) {
              s.scalex = +s.scalex.toFixed(4);
              s.scaley = +s.scaley.toFixed(4);
              s.rotate = +s.rotate.toFixed(4);
              return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) + 
                      (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
                      (s.rotate ? "r" + [s.rotate, 0, 0] : E);
          } else {
              return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
          }
      };
  })(Matrix.prototype);

  // WebKit rendering bug workaround method
  var version = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
  if ((navigator.vendor == "Apple Computer, Inc.") && (version && version[1] < 4 || navigator.platform.slice(0, 2) == "iP") ||
      (navigator.vendor == "Google Inc." && version && version[1] < 8)) {
      
      paperproto.safari = function () {
          var rect = this.rect(-99, -99, this.width + 99, this.height + 99).attr({stroke: "none"});
          setTimeout(function () {rect.remove();});
      };
  } else {
      paperproto.safari = fun;
  }

  var preventDefault = function () {
      this.returnValue = false;
  },
  preventTouch = function () {
      return this.originalEvent.preventDefault();
  },
  stopPropagation = function () {
      this.cancelBubble = true;
  },
  stopTouch = function () {
      return this.originalEvent.stopPropagation();
  },
  addEvent = (function () {
      if (g.doc.addEventListener) {
          return function (obj, type, fn, element) {
              var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
                  f = function (e) {
                      var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                          scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                          x = e.clientX + scrollX,
                          y = e.clientY + scrollY;
                  if (supportsTouch && touchMap[has](type)) {
                      for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                          if (e.targetTouches[i].target == obj) {
                              var olde = e;
                              e = e.targetTouches[i];
                              e.originalEvent = olde;
                              e.preventDefault = preventTouch;
                              e.stopPropagation = stopTouch;
                              break;
                          }
                      }
                  }
                  return fn.call(element, e, x, y);
              };
              obj.addEventListener(realName, f, false);
              return function () {
                  obj.removeEventListener(realName, f, false);
                  return true;
              };
          };
      } else if (g.doc.attachEvent) {
          return function (obj, type, fn, element) {
              var f = function (e) {
                  e = e || g.win.event;
                  var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
                      scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
                      x = e.clientX + scrollX,
                      y = e.clientY + scrollY;
                  e.preventDefault = e.preventDefault || preventDefault;
                  e.stopPropagation = e.stopPropagation || stopPropagation;
                  return fn.call(element, e, x, y);
              };
              obj.attachEvent("on" + type, f);
              var detacher = function () {
                  obj.detachEvent("on" + type, f);
                  return true;
              };
              return detacher;
          };
      }
  })(),
  drag = [],
  dragMove = function (e) {
      var x = e.clientX,
          y = e.clientY,
          scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
          scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
          dragi,
          j = drag.length;
      while (j--) {
          dragi = drag[j];
          if (supportsTouch) {
              var i = e.touches.length,
                  touch;
              while (i--) {
                  touch = e.touches[i];
                  if (touch.identifier == dragi.el._drag.id) {
                      x = touch.clientX;
                      y = touch.clientY;
                      (e.originalEvent ? e.originalEvent : e).preventDefault();
                      break;
                  }
              }
          } else {
              e.preventDefault();
          }
          var node = dragi.el.node,
              o,
              next = node.nextSibling,
              parent = node.parentNode,
              display = node.style.display;
          g.win.opera && parent.removeChild(node);
          node.style.display = "none";
          o = dragi.el.paper.getElementByPoint(x, y);
          node.style.display = display;
          g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
          o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
          x += scrollX;
          y += scrollY;
          eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
      }
  },
  dragUp = function (e) {
      R.unmousemove(dragMove).unmouseup(dragUp);
      var i = drag.length,
          dragi;
      while (i--) {
          dragi = drag[i];
          dragi.el._drag = {};
          eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
      }
      drag = [];
  },
  
  elproto = R.el = {};
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  for (var i = events.length; i--;) {
      (function (eventName) {
          R[eventName] = elproto[eventName] = function (fn, scope) {
              if (R.is(fn, "function")) {
                  this.events = this.events || [];
                  this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)});
              }
              return this;
          };
          R["un" + eventName] = elproto["un" + eventName] = function (fn) {
              var events = this.events || [],
                  l = events.length;
              while (l--) if (events[l].name == eventName && events[l].f == fn) {
                  events[l].unbind();
                  events.splice(l, 1);
                  !events.length && delete this.events;
                  return this;
              }
              return this;
          };
      })(events[i]);
  }
  
  
  elproto.data = function (key, value) {
      var data = eldata[this.id] = eldata[this.id] || {};
      if (arguments.length == 1) {
          if (R.is(key, "object")) {
              for (var i in key) if (key[has](i)) {
                  this.data(i, key[i]);
              }
              return this;
          }
          eve("raphael.data.get." + this.id, this, data[key], key);
          return data[key];
      }
      data[key] = value;
      eve("raphael.data.set." + this.id, this, value, key);
      return this;
  };
  
  elproto.removeData = function (key) {
      if (key == null) {
          eldata[this.id] = {};
      } else {
          eldata[this.id] && delete eldata[this.id][key];
      }
      return this;
  };
  
  elproto.hover = function (f_in, f_out, scope_in, scope_out) {
      return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
  };
  
  elproto.unhover = function (f_in, f_out) {
      return this.unmouseover(f_in).unmouseout(f_out);
  };
  var draggable = [];
  
  elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
      function start(e) {
          (e.originalEvent || e).preventDefault();
          var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
              scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
          this._drag.x = e.clientX + scrollX;
          this._drag.y = e.clientY + scrollY;
          this._drag.id = e.identifier;
          !drag.length && R.mousemove(dragMove).mouseup(dragUp);
          drag.push({el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
          onstart && eve.on("raphael.drag.start." + this.id, onstart);
          onmove && eve.on("raphael.drag.move." + this.id, onmove);
          onend && eve.on("raphael.drag.end." + this.id, onend);
          eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
      }
      this._drag = {};
      draggable.push({el: this, start: start});
      this.mousedown(start);
      return this;
  };
  
  elproto.onDragOver = function (f) {
      f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
  };
  
  elproto.undrag = function () {
      var i = draggable.length;
      while (i--) if (draggable[i].el == this) {
          this.unmousedown(draggable[i].start);
          draggable.splice(i, 1);
          eve.unbind("raphael.drag.*." + this.id);
      }
      !draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
  };
  
  paperproto.circle = function (x, y, r) {
      var out = R._engine.circle(this, x || 0, y || 0, r || 0);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.rect = function (x, y, w, h, r) {
      var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.ellipse = function (x, y, rx, ry) {
      var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.path = function (pathString) {
      pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
      var out = R._engine.path(R.format[apply](R, arguments), this);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.image = function (src, x, y, w, h) {
      var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.text = function (x, y, text) {
      var out = R._engine.text(this, x || 0, y || 0, Str(text));
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.set = function (itemsArray) {
      !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
      var out = new Set(itemsArray);
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  paperproto.setStart = function (set) {
      this.__set__ = set || this.set();
  };
  
  paperproto.setFinish = function (set) {
      var out = this.__set__;
      delete this.__set__;
      return out;
  };
  
  paperproto.setSize = function (width, height) {
      return R._engine.setSize.call(this, width, height);
  };
  
  paperproto.setViewBox = function (x, y, w, h, fit) {
      return R._engine.setViewBox.call(this, x, y, w, h, fit);
  };
  
  
  paperproto.top = paperproto.bottom = null;
  
  paperproto.raphael = R;
  var getOffset = function (elem) {
      var box = elem.getBoundingClientRect(),
          doc = elem.ownerDocument,
          body = doc.body,
          docElem = doc.documentElement,
          clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
          top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
          left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
      return {
          y: top,
          x: left
      };
  };
  
  paperproto.getElementByPoint = function (x, y) {
      var paper = this,
          svg = paper.canvas,
          target = g.doc.elementFromPoint(x, y);
      if (g.win.opera && target.tagName == "svg") {
          var so = getOffset(svg),
              sr = svg.createSVGRect();
          sr.x = x - so.x;
          sr.y = y - so.y;
          sr.width = sr.height = 1;
          var hits = svg.getIntersectionList(sr, null);
          if (hits.length) {
              target = hits[hits.length - 1];
          }
      }
      if (!target) {
          return null;
      }
      while (target.parentNode && target != svg.parentNode && !target.raphael) {
          target = target.parentNode;
      }
      target == paper.canvas.parentNode && (target = svg);
      target = target && target.raphael ? paper.getById(target.raphaelid) : null;
      return target;
  };
  
  paperproto.getById = function (id) {
      var bot = this.bottom;
      while (bot) {
          if (bot.id == id) {
              return bot;
          }
          bot = bot.next;
      }
      return null;
  };
  
  paperproto.forEach = function (callback, thisArg) {
      var bot = this.bottom;
      while (bot) {
          if (callback.call(thisArg, bot) === false) {
              return this;
          }
          bot = bot.next;
      }
      return this;
  };
  
  paperproto.getElementsByPoint = function (x, y) {
      var set = this.set();
      this.forEach(function (el) {
          if (el.isPointInside(x, y)) {
              set.push(el);
          }
      });
      return set;
  };
  function x_y() {
      return this.x + S + this.y;
  }
  function x_y_w_h() {
      return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
  }
  
  elproto.isPointInside = function (x, y) {
      var rp = this.realPath = this.realPath || getPath[this.type](this);
      return R.isPointInsidePath(rp, x, y);
  };
  
  elproto.getBBox = function (isWithoutTransform) {
      if (this.removed) {
          return {};
      }
      var _ = this._;
      if (isWithoutTransform) {
          if (_.dirty || !_.bboxwt) {
              this.realPath = getPath[this.type](this);
              _.bboxwt = pathDimensions(this.realPath);
              _.bboxwt.toString = x_y_w_h;
              _.dirty = 0;
          }
          return _.bboxwt;
      }
      if (_.dirty || _.dirtyT || !_.bbox) {
          if (_.dirty || !this.realPath) {
              _.bboxwt = 0;
              this.realPath = getPath[this.type](this);
          }
          _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
          _.bbox.toString = x_y_w_h;
          _.dirty = _.dirtyT = 0;
      }
      return _.bbox;
  };
  
  elproto.clone = function () {
      if (this.removed) {
          return null;
      }
      var out = this.paper[this.type]().attr(this.attr());
      this.__set__ && this.__set__.push(out);
      return out;
  };
  
  elproto.glow = function (glow) {
      if (this.type == "text") {
          return null;
      }
      glow = glow || {};
      var s = {
          width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
          fill: glow.fill || false,
          opacity: glow.opacity || .5,
          offsetx: glow.offsetx || 0,
          offsety: glow.offsety || 0,
          color: glow.color || "#000"
      },
          c = s.width / 2,
          r = this.paper,
          out = r.set(),
          path = this.realPath || getPath[this.type](this);
      path = this.matrix ? mapPath(path, this.matrix) : path;
      for (var i = 1; i < c + 1; i++) {
          out.push(r.path(path).attr({
              stroke: s.color,
              fill: s.fill ? s.color : "none",
              "stroke-linejoin": "round",
              "stroke-linecap": "round",
              "stroke-width": +(s.width / c * i).toFixed(3),
              opacity: +(s.opacity / c).toFixed(3)
          }));
      }
      return out.insertBefore(this).translate(s.offsetx, s.offsety);
  };
  var curveslengths = {},
  getPointAtSegmentLength = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
      if (length == null) {
          return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
      } else {
          return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
      }
  },
  getLengthFactory = function (istotal, subpath) {
      return function (path, length, onlystart) {
          path = path2curve(path);
          var x, y, p, l, sp = "", subpaths = {}, point,
              len = 0;
          for (var i = 0, ii = path.length; i < ii; i++) {
              p = path[i];
              if (p[0] == "M") {
                  x = +p[1];
                  y = +p[2];
              } else {
                  l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                  if (len + l > length) {
                      if (subpath && !subpaths.start) {
                          point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                          sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
                          if (onlystart) {return sp;}
                          subpaths.start = sp;
                          sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
                          len += l;
                          x = +p[5];
                          y = +p[6];
                          continue;
                      }
                      if (!istotal && !subpath) {
                          point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                          return {x: point.x, y: point.y, alpha: point.alpha};
                      }
                  }
                  len += l;
                  x = +p[5];
                  y = +p[6];
              }
              sp += p.shift() + p;
          }
          subpaths.end = sp;
          point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
          point.alpha && (point = {x: point.x, y: point.y, alpha: point.alpha});
          return point;
      };
  };
  var getTotalLength = getLengthFactory(1),
      getPointAtLength = getLengthFactory(),
      getSubpathsAtLength = getLengthFactory(0, 1);
  
  R.getTotalLength = getTotalLength;
  
  R.getPointAtLength = getPointAtLength;
  
  R.getSubpath = function (path, from, to) {
      if (this.getTotalLength(path) - to < 1e-6) {
          return getSubpathsAtLength(path, from).end;
      }
      var a = getSubpathsAtLength(path, to, 1);
      return from ? getSubpathsAtLength(a, from).end : a;
  };
  
  elproto.getTotalLength = function () {
      if (this.type != "path") {return;}
      if (this.node.getTotalLength) {
          return this.node.getTotalLength();
      }
      return getTotalLength(this.attrs.path);
  };
  
  elproto.getPointAtLength = function (length) {
      if (this.type != "path") {return;}
      return getPointAtLength(this.attrs.path, length);
  };
  
  elproto.getSubpath = function (from, to) {
      if (this.type != "path") {return;}
      return R.getSubpath(this.attrs.path, from, to);
  };
  
  var ef = R.easing_formulas = {
      linear: function (n) {
          return n;
      },
      "<": function (n) {
          return pow(n, 1.7);
      },
      ">": function (n) {
          return pow(n, .48);
      },
      "<>": function (n) {
          var q = .48 - n / 1.04,
              Q = math.sqrt(.1734 + q * q),
              x = Q - q,
              X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
              y = -Q - q,
              Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
              t = X + Y + .5;
          return (1 - t) * 3 * t * t + t * t * t;
      },
      backIn: function (n) {
          var s = 1.70158;
          return n * n * ((s + 1) * n - s);
      },
      backOut: function (n) {
          n = n - 1;
          var s = 1.70158;
          return n * n * ((s + 1) * n + s) + 1;
      },
      elastic: function (n) {
          if (n == !!n) {
              return n;
          }
          return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;
      },
      bounce: function (n) {
          var s = 7.5625,
              p = 2.75,
              l;
          if (n < (1 / p)) {
              l = s * n * n;
          } else {
              if (n < (2 / p)) {
                  n -= (1.5 / p);
                  l = s * n * n + .75;
              } else {
                  if (n < (2.5 / p)) {
                      n -= (2.25 / p);
                      l = s * n * n + .9375;
                  } else {
                      n -= (2.625 / p);
                      l = s * n * n + .984375;
                  }
              }
          }
          return l;
      }
  };
  ef.easeIn = ef["ease-in"] = ef["<"];
  ef.easeOut = ef["ease-out"] = ef[">"];
  ef.easeInOut = ef["ease-in-out"] = ef["<>"];
  ef["back-in"] = ef.backIn;
  ef["back-out"] = ef.backOut;

  var animationElements = [],
      requestAnimFrame = window.requestAnimationFrame       ||
                         window.webkitRequestAnimationFrame ||
                         window.mozRequestAnimationFrame    ||
                         window.oRequestAnimationFrame      ||
                         window.msRequestAnimationFrame     ||
                         function (callback) {
                             setTimeout(callback, 16);
                         },
      animation = function () {
          var Now = +new Date,
              l = 0;
          for (; l < animationElements.length; l++) {
              var e = animationElements[l];
              if (e.el.removed || e.paused) {
                  continue;
              }
              var time = Now - e.start,
                  ms = e.ms,
                  easing = e.easing,
                  from = e.from,
                  diff = e.diff,
                  to = e.to,
                  t = e.t,
                  that = e.el,
                  set = {},
                  now,
                  init = {},
                  key;
              if (e.initstatus) {
                  time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
                  e.status = e.initstatus;
                  delete e.initstatus;
                  e.stop && animationElements.splice(l--, 1);
              } else {
                  e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
              }
              if (time < 0) {
                  continue;
              }
              if (time < ms) {
                  var pos = easing(time / ms);
                  for (var attr in from) if (from[has](attr)) {
                      switch (availableAnimAttrs[attr]) {
                          case nu:
                              now = +from[attr] + pos * ms * diff[attr];
                              break;
                          case "colour":
                              now = "rgb(" + [
                                  upto255(round(from[attr].r + pos * ms * diff[attr].r)),
                                  upto255(round(from[attr].g + pos * ms * diff[attr].g)),
                                  upto255(round(from[attr].b + pos * ms * diff[attr].b))
                              ].join(",") + ")";
                              break;
                          case "path":
                              now = [];
                              for (var i = 0, ii = from[attr].length; i < ii; i++) {
                                  now[i] = [from[attr][i][0]];
                                  for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                      now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
                                  }
                                  now[i] = now[i].join(S);
                              }
                              now = now.join(S);
                              break;
                          case "transform":
                              if (diff[attr].real) {
                                  now = [];
                                  for (i = 0, ii = from[attr].length; i < ii; i++) {
                                      now[i] = [from[attr][i][0]];
                                      for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                          now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
                                      }
                                  }
                              } else {
                                  var get = function (i) {
                                      return +from[attr][i] + pos * ms * diff[attr][i];
                                  };
                                  // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
                                  now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];
                              }
                              break;
                          case "csv":
                              if (attr == "clip-rect") {
                                  now = [];
                                  i = 4;
                                  while (i--) {
                                      now[i] = +from[attr][i] + pos * ms * diff[attr][i];
                                  }
                              }
                              break;
                          default:
                              var from2 = [][concat](from[attr]);
                              now = [];
                              i = that.paper.customAttributes[attr].length;
                              while (i--) {
                                  now[i] = +from2[i] + pos * ms * diff[attr][i];
                              }
                              break;
                      }
                      set[attr] = now;
                  }
                  that.attr(set);
                  (function (id, that, anim) {
                      setTimeout(function () {
                          eve("raphael.anim.frame." + id, that, anim);
                      });
                  })(that.id, that, e.anim);
              } else {
                  (function(f, el, a) {
                      setTimeout(function() {
                          eve("raphael.anim.frame." + el.id, el, a);
                          eve("raphael.anim.finish." + el.id, el, a);
                          R.is(f, "function") && f.call(el);
                      });
                  })(e.callback, that, e.anim);
                  that.attr(to);
                  animationElements.splice(l--, 1);
                  if (e.repeat > 1 && !e.next) {
                      for (key in to) if (to[has](key)) {
                          init[key] = e.totalOrigin[key];
                      }
                      e.el.attr(init);
                      runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
                  }
                  if (e.next && !e.stop) {
                      runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
                  }
              }
          }
          R.svg && that && that.paper && that.paper.safari();
          animationElements.length && requestAnimFrame(animation);
      },
      upto255 = function (color) {
          return color > 255 ? 255 : color < 0 ? 0 : color;
      };
  
  elproto.animateWith = function (el, anim, params, ms, easing, callback) {
      var element = this;
      if (element.removed) {
          callback && callback.call(element);
          return element;
      }
      var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
          x, y;
      runAnimation(a, element, a.percents[0], null, element.attr());
      for (var i = 0, ii = animationElements.length; i < ii; i++) {
          if (animationElements[i].anim == anim && animationElements[i].el == el) {
              animationElements[ii - 1].start = animationElements[i].start;
              break;
          }
      }
      return element;
      // 
      // 
      // var a = params ? R.animation(params, ms, easing, callback) : anim,
      //     status = element.status(anim);
      // return this.animate(a).status(a, status * anim.ms / a.ms);
  };
  function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
      var cx = 3 * p1x,
          bx = 3 * (p2x - p1x) - cx,
          ax = 1 - cx - bx,
          cy = 3 * p1y,
          by = 3 * (p2y - p1y) - cy,
          ay = 1 - cy - by;
      function sampleCurveX(t) {
          return ((ax * t + bx) * t + cx) * t;
      }
      function solve(x, epsilon) {
          var t = solveCurveX(x, epsilon);
          return ((ay * t + by) * t + cy) * t;
      }
      function solveCurveX(x, epsilon) {
          var t0, t1, t2, x2, d2, i;
          for(t2 = x, i = 0; i < 8; i++) {
              x2 = sampleCurveX(t2) - x;
              if (abs(x2) < epsilon) {
                  return t2;
              }
              d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
              if (abs(d2) < 1e-6) {
                  break;
              }
              t2 = t2 - x2 / d2;
          }
          t0 = 0;
          t1 = 1;
          t2 = x;
          if (t2 < t0) {
              return t0;
          }
          if (t2 > t1) {
              return t1;
          }
          while (t0 < t1) {
              x2 = sampleCurveX(t2);
              if (abs(x2 - x) < epsilon) {
                  return t2;
              }
              if (x > x2) {
                  t0 = t2;
              } else {
                  t1 = t2;
              }
              t2 = (t1 - t0) / 2 + t0;
          }
          return t2;
      }
      return solve(t, 1 / (200 * duration));
  }
  elproto.onAnimation = function (f) {
      f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
      return this;
  };
  function Animation(anim, ms) {
      var percents = [],
          newAnim = {};
      this.ms = ms;
      this.times = 1;
      if (anim) {
          for (var attr in anim) if (anim[has](attr)) {
              newAnim[toFloat(attr)] = anim[attr];
              percents.push(toFloat(attr));
          }
          percents.sort(sortByNumber);
      }
      this.anim = newAnim;
      this.top = percents[percents.length - 1];
      this.percents = percents;
  }
  
  Animation.prototype.delay = function (delay) {
      var a = new Animation(this.anim, this.ms);
      a.times = this.times;
      a.del = +delay || 0;
      return a;
  };
  
  Animation.prototype.repeat = function (times) { 
      var a = new Animation(this.anim, this.ms);
      a.del = this.del;
      a.times = math.floor(mmax(times, 0)) || 1;
      return a;
  };
  function runAnimation(anim, element, percent, status, totalOrigin, times) {
      percent = toFloat(percent);
      var params,
          isInAnim,
          isInAnimSet,
          percents = [],
          next,
          prev,
          timestamp,
          ms = anim.ms,
          from = {},
          to = {},
          diff = {};
      if (status) {
          for (i = 0, ii = animationElements.length; i < ii; i++) {
              var e = animationElements[i];
              if (e.el.id == element.id && e.anim == anim) {
                  if (e.percent != percent) {
                      animationElements.splice(i, 1);
                      isInAnimSet = 1;
                  } else {
                      isInAnim = e;
                  }
                  element.attr(e.totalOrigin);
                  break;
              }
          }
      } else {
          status = +to; // NaN
      }
      for (var i = 0, ii = anim.percents.length; i < ii; i++) {
          if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
              percent = anim.percents[i];
              prev = anim.percents[i - 1] || 0;
              ms = ms / anim.top * (percent - prev);
              next = anim.percents[i + 1];
              params = anim.anim[percent];
              break;
          } else if (status) {
              element.attr(anim.anim[anim.percents[i]]);
          }
      }
      if (!params) {
          return;
      }
      if (!isInAnim) {
          for (var attr in params) if (params[has](attr)) {
              if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
                  from[attr] = element.attr(attr);
                  (from[attr] == null) && (from[attr] = availableAttrs[attr]);
                  to[attr] = params[attr];
                  switch (availableAnimAttrs[attr]) {
                      case nu:
                          diff[attr] = (to[attr] - from[attr]) / ms;
                          break;
                      case "colour":
                          from[attr] = R.getRGB(from[attr]);
                          var toColour = R.getRGB(to[attr]);
                          diff[attr] = {
                              r: (toColour.r - from[attr].r) / ms,
                              g: (toColour.g - from[attr].g) / ms,
                              b: (toColour.b - from[attr].b) / ms
                          };
                          break;
                      case "path":
                          var pathes = path2curve(from[attr], to[attr]),
                              toPath = pathes[1];
                          from[attr] = pathes[0];
                          diff[attr] = [];
                          for (i = 0, ii = from[attr].length; i < ii; i++) {
                              diff[attr][i] = [0];
                              for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
                                  diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
                              }
                          }
                          break;
                      case "transform":
                          var _ = element._,
                              eq = equaliseTransform(_[attr], to[attr]);
                          if (eq) {
                              from[attr] = eq.from;
                              to[attr] = eq.to;
                              diff[attr] = [];
                              diff[attr].real = true;
                              for (i = 0, ii = from[attr].length; i < ii; i++) {
                                  diff[attr][i] = [from[attr][i][0]];
                                  for (j = 1, jj = from[attr][i].length; j < jj; j++) {
                                      diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
                                  }
                              }
                          } else {
                              var m = (element.matrix || new Matrix),
                                  to2 = {
                                      _: {transform: _.transform},
                                      getBBox: function () {
                                          return element.getBBox(1);
                                      }
                                  };
                              from[attr] = [
                                  m.a,
                                  m.b,
                                  m.c,
                                  m.d,
                                  m.e,
                                  m.f
                              ];
                              extractTransform(to2, to[attr]);
                              to[attr] = to2._.transform;
                              diff[attr] = [
                                  (to2.matrix.a - m.a) / ms,
                                  (to2.matrix.b - m.b) / ms,
                                  (to2.matrix.c - m.c) / ms,
                                  (to2.matrix.d - m.d) / ms,
                                  (to2.matrix.e - m.e) / ms,
                                  (to2.matrix.f - m.f) / ms
                              ];
                              // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
                              // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
                              // extractTransform(to2, to[attr]);
                              // diff[attr] = [
                              //     (to2._.sx - _.sx) / ms,
                              //     (to2._.sy - _.sy) / ms,
                              //     (to2._.deg - _.deg) / ms,
                              //     (to2._.dx - _.dx) / ms,
                              //     (to2._.dy - _.dy) / ms
                              // ];
                          }
                          break;
                      case "csv":
                          var values = Str(params[attr])[split](separator),
                              from2 = Str(from[attr])[split](separator);
                          if (attr == "clip-rect") {
                              from[attr] = from2;
                              diff[attr] = [];
                              i = from2.length;
                              while (i--) {
                                  diff[attr][i] = (values[i] - from[attr][i]) / ms;
                              }
                          }
                          to[attr] = values;
                          break;
                      default:
                          values = [][concat](params[attr]);
                          from2 = [][concat](from[attr]);
                          diff[attr] = [];
                          i = element.paper.customAttributes[attr].length;
                          while (i--) {
                              diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
                          }
                          break;
                  }
              }
          }
          var easing = params.easing,
              easyeasy = R.easing_formulas[easing];
          if (!easyeasy) {
              easyeasy = Str(easing).match(bezierrg);
              if (easyeasy && easyeasy.length == 5) {
                  var curve = easyeasy;
                  easyeasy = function (t) {
                      return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
                  };
              } else {
                  easyeasy = pipe;
              }
          }
          timestamp = params.start || anim.start || +new Date;
          e = {
              anim: anim,
              percent: percent,
              timestamp: timestamp,
              start: timestamp + (anim.del || 0),
              status: 0,
              initstatus: status || 0,
              stop: false,
              ms: ms,
              easing: easyeasy,
              from: from,
              diff: diff,
              to: to,
              el: element,
              callback: params.callback,
              prev: prev,
              next: next,
              repeat: times || anim.times,
              origin: element.attr(),
              totalOrigin: totalOrigin
          };
          animationElements.push(e);
          if (status && !isInAnim && !isInAnimSet) {
              e.stop = true;
              e.start = new Date - ms * status;
              if (animationElements.length == 1) {
                  return animation();
              }
          }
          if (isInAnimSet) {
              e.start = new Date - e.ms * status;
          }
          animationElements.length == 1 && requestAnimFrame(animation);
      } else {
          isInAnim.initstatus = status;
          isInAnim.start = new Date - isInAnim.ms * status;
      }
      eve("raphael.anim.start." + element.id, element, anim);
  }
  
  R.animation = function (params, ms, easing, callback) {
      if (params instanceof Animation) {
          return params;
      }
      if (R.is(easing, "function") || !easing) {
          callback = callback || easing || null;
          easing = null;
      }
      params = Object(params);
      ms = +ms || 0;
      var p = {},
          json,
          attr;
      for (attr in params) if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
          json = true;
          p[attr] = params[attr];
      }
      if (!json) {
          return new Animation(params, ms);
      } else {
          easing && (p.easing = easing);
          callback && (p.callback = callback);
          return new Animation({100: p}, ms);
      }
  };
  
  elproto.animate = function (params, ms, easing, callback) {
      var element = this;
      if (element.removed) {
          callback && callback.call(element);
          return element;
      }
      var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
      runAnimation(anim, element, anim.percents[0], null, element.attr());
      return element;
  };
  
  elproto.setTime = function (anim, value) {
      if (anim && value != null) {
          this.status(anim, mmin(value, anim.ms) / anim.ms);
      }
      return this;
  };
  
  elproto.status = function (anim, value) {
      var out = [],
          i = 0,
          len,
          e;
      if (value != null) {
          runAnimation(anim, this, -1, mmin(value, 1));
          return this;
      } else {
          len = animationElements.length;
          for (; i < len; i++) {
              e = animationElements[i];
              if (e.el.id == this.id && (!anim || e.anim == anim)) {
                  if (anim) {
                      return e.status;
                  }
                  out.push({
                      anim: e.anim,
                      status: e.status
                  });
              }
          }
          if (anim) {
              return 0;
          }
          return out;
      }
  };
  
  elproto.pause = function (anim) {
      for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
          if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
              animationElements[i].paused = true;
          }
      }
      return this;
  };
  
  elproto.resume = function (anim) {
      for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
          var e = animationElements[i];
          if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
              delete e.paused;
              this.status(e.anim, e.status);
          }
      }
      return this;
  };
  
  elproto.stop = function (anim) {
      for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
          if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
              animationElements.splice(i--, 1);
          }
      }
      return this;
  };
  function stopAnimation(paper) {
      for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.paper == paper) {
          animationElements.splice(i--, 1);
      }
  }
  eve.on("raphael.remove", stopAnimation);
  eve.on("raphael.clear", stopAnimation);
  elproto.toString = function () {
      return "Rapha\xebl\u2019s object";
  };

  // Set
  var Set = function (items) {
      this.items = [];
      this.length = 0;
      this.type = "set";
      if (items) {
          for (var i = 0, ii = items.length; i < ii; i++) {
              if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
                  this[this.items.length] = this.items[this.items.length] = items[i];
                  this.length++;
              }
          }
      }
  },
  setproto = Set.prototype;
  
  setproto.push = function () {
      var item,
          len;
      for (var i = 0, ii = arguments.length; i < ii; i++) {
          item = arguments[i];
          if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
              len = this.items.length;
              this[len] = this.items[len] = item;
              this.length++;
          }
      }
      return this;
  };
  
  setproto.pop = function () {
      this.length && delete this[this.length--];
      return this.items.pop();
  };
  
  setproto.forEach = function (callback, thisArg) {
      for (var i = 0, ii = this.items.length; i < ii; i++) {
          if (callback.call(thisArg, this.items[i], i) === false) {
              return this;
          }
      }
      return this;
  };
  for (var method in elproto) if (elproto[has](method)) {
      setproto[method] = (function (methodname) {
          return function () {
              var arg = arguments;
              return this.forEach(function (el) {
                  el[methodname][apply](el, arg);
              });
          };
      })(method);
  }
  setproto.attr = function (name, value) {
      if (name && R.is(name, array) && R.is(name[0], "object")) {
          for (var j = 0, jj = name.length; j < jj; j++) {
              this.items[j].attr(name[j]);
          }
      } else {
          for (var i = 0, ii = this.items.length; i < ii; i++) {
              this.items[i].attr(name, value);
          }
      }
      return this;
  };
  
  setproto.clear = function () {
      while (this.length) {
          this.pop();
      }
  };
  
  setproto.splice = function (index, count, insertion) {
      index = index < 0 ? mmax(this.length + index, 0) : index;
      count = mmax(0, mmin(this.length - index, count));
      var tail = [],
          todel = [],
          args = [],
          i;
      for (i = 2; i < arguments.length; i++) {
          args.push(arguments[i]);
      }
      for (i = 0; i < count; i++) {
          todel.push(this[index + i]);
      }
      for (; i < this.length - index; i++) {
          tail.push(this[index + i]);
      }
      var arglen = args.length;
      for (i = 0; i < arglen + tail.length; i++) {
          this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
      }
      i = this.items.length = this.length -= count - arglen;
      while (this[i]) {
          delete this[i++];
      }
      return new Set(todel);
  };
  
  setproto.exclude = function (el) {
      for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
          this.splice(i, 1);
          return true;
      }
  };
  setproto.animate = function (params, ms, easing, callback) {
      (R.is(easing, "function") || !easing) && (callback = easing || null);
      var len = this.items.length,
          i = len,
          item,
          set = this,
          collector;
      if (!len) {
          return this;
      }
      callback && (collector = function () {
          !--len && callback.call(set);
      });
      easing = R.is(easing, string) ? easing : collector;
      var anim = R.animation(params, ms, easing, collector);
      item = this.items[--i].animate(anim);
      while (i--) {
          this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
      }
      return this;
  };
  setproto.insertAfter = function (el) {
      var i = this.items.length;
      while (i--) {
          this.items[i].insertAfter(el);
      }
      return this;
  };
  setproto.getBBox = function () {
      var x = [],
          y = [],
          x2 = [],
          y2 = [];
      for (var i = this.items.length; i--;) if (!this.items[i].removed) {
          var box = this.items[i].getBBox();
          x.push(box.x);
          y.push(box.y);
          x2.push(box.x + box.width);
          y2.push(box.y + box.height);
      }
      x = mmin[apply](0, x);
      y = mmin[apply](0, y);
      x2 = mmax[apply](0, x2);
      y2 = mmax[apply](0, y2);
      return {
          x: x,
          y: y,
          x2: x2,
          y2: y2,
          width: x2 - x,
          height: y2 - y
      };
  };
  setproto.clone = function (s) {
      s = new Set;
      for (var i = 0, ii = this.items.length; i < ii; i++) {
          s.push(this.items[i].clone());
      }
      return s;
  };
  setproto.toString = function () {
      return "Rapha\xebl\u2018s set";
  };

  
  R.registerFont = function (font) {
      if (!font.face) {
          return font;
      }
      this.fonts = this.fonts || {};
      var fontcopy = {
              w: font.w,
              face: {},
              glyphs: {}
          },
          family = font.face["font-family"];
      for (var prop in font.face) if (font.face[has](prop)) {
          fontcopy.face[prop] = font.face[prop];
      }
      if (this.fonts[family]) {
          this.fonts[family].push(fontcopy);
      } else {
          this.fonts[family] = [fontcopy];
      }
      if (!font.svg) {
          fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
          for (var glyph in font.glyphs) if (font.glyphs[has](glyph)) {
              var path = font.glyphs[glyph];
              fontcopy.glyphs[glyph] = {
                  w: path.w,
                  k: {},
                  d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {
                          return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[command] || "M";
                      }) + "z"
              };
              if (path.k) {
                  for (var k in path.k) if (path[has](k)) {
                      fontcopy.glyphs[glyph].k[k] = path.k[k];
                  }
              }
          }
      }
      return font;
  };
  
  paperproto.getFont = function (family, weight, style, stretch) {
      stretch = stretch || "normal";
      style = style || "normal";
      weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;
      if (!R.fonts) {
          return;
      }
      var font = R.fonts[family];
      if (!font) {
          var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
          for (var fontName in R.fonts) if (R.fonts[has](fontName)) {
              if (name.test(fontName)) {
                  font = R.fonts[fontName];
                  break;
              }
          }
      }
      var thefont;
      if (font) {
          for (var i = 0, ii = font.length; i < ii; i++) {
              thefont = font[i];
              if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
                  break;
              }
          }
      }
      return thefont;
  };
  
  paperproto.print = function (x, y, string, font, size, origin, letter_spacing) {
      origin = origin || "middle"; // baseline|middle
      letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
      var letters = Str(string)[split](E),
          shift = 0,
          notfirst = 0,
          path = E,
          scale;
      R.is(font, string) && (font = this.getFont(font));
      if (font) {
          scale = (size || 16) / font.face["units-per-em"];
          var bb = font.face.bbox[split](separator),
              top = +bb[0],
              lineHeight = bb[3] - bb[1],
              shifty = 0,
              height = +bb[1] + (origin == "baseline" ? lineHeight + (+font.face.descent) : lineHeight / 2);
          for (var i = 0, ii = letters.length; i < ii; i++) {
              if (letters[i] == "\n") {
                  shift = 0;
                  curr = 0;
                  notfirst = 0;
                  shifty += lineHeight;
              } else {
                  var prev = notfirst && font.glyphs[letters[i - 1]] || {},
                      curr = font.glyphs[letters[i]];
                  shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;
                  notfirst = 1;
              }
              if (curr && curr.d) {
                  path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
              }
          }
      }
      return this.path(path).attr({
          fill: "#000",
          stroke: "none"
      });
  };

  
  paperproto.add = function (json) {
      if (R.is(json, "array")) {
          var res = this.set(),
              i = 0,
              ii = json.length,
              j;
          for (; i < ii; i++) {
              j = json[i] || {};
              elements[has](j.type) && res.push(this[j.type]().attr(j));
          }
      }
      return res;
  };

  
  R.format = function (token, params) {
      var args = R.is(params, array) ? [0][concat](params) : arguments;
      token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
          return args[++i] == null ? E : args[i];
      }));
      return token || E;
  };
  
  R.fullfill = (function () {
      var tokenRegex = /\{([^\}]+)\}/g,
          objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
          replacer = function (all, key, obj) {
              var res = obj;
              key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                  name = name || quotedName;
                  if (res) {
                      if (name in res) {
                          res = res[name];
                      }
                      typeof res == "function" && isFunc && (res = res());
                  }
              });
              res = (res == null || res == obj ? all : res) + "";
              return res;
          };
      return function (str, obj) {
          return String(str).replace(tokenRegex, function (all, key) {
              return replacer(all, key, obj);
          });
      };
  })();
  
  R.ninja = function () {
      oldRaphael.was ? (g.win.Raphael = oldRaphael.is) : delete Raphael;
      return R;
  };
  
  R.st = setproto;
  // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
  (function (doc, loaded, f) {
      if (doc.readyState == null && doc.addEventListener){
          doc.addEventListener(loaded, f = function () {
              doc.removeEventListener(loaded, f, false);
              doc.readyState = "complete";
          }, false);
          doc.readyState = "loading";
      }
      function isLoaded() {
          (/in/).test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
      }
      isLoaded();
  })(document, "DOMContentLoaded");

  oldRaphael.was ? (g.win.Raphael = R) : (Raphael = R);
  
  eve.on("raphael.DOMload", function () {
      loaded = true;
  });
})();


// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël - JavaScript Vector Library                                 │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ SVG Module                                                          │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\
window.Raphael.svg && function (R) {
  var has = "hasOwnProperty",
      Str = String,
      toFloat = parseFloat,
      toInt = parseInt,
      math = Math,
      mmax = math.max,
      abs = math.abs,
      pow = math.pow,
      separator = /[, ]+/,
      eve = R.eve,
      E = "",
      S = " ";
  var xlink = "http://www.w3.org/1999/xlink",
      markers = {
          block: "M5,0 0,2.5 5,5z",
          classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
          diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
          open: "M6,1 1,3.5 6,6",
          oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
      },
      markerCounter = {};
  R.toString = function () {
      return  "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
  };
  var $ = function (el, attr) {
      if (attr) {
          if (typeof el == "string") {
              el = $(el);
          }
          for (var key in attr) if (attr[has](key)) {
              if (key.substring(0, 6) == "xlink:") {
                  el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
              } else {
                  el.setAttribute(key, Str(attr[key]));
              }
          }
      } else {
          el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
          el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
      }
      return el;
  },
  addGradientFill = function (element, gradient) {
      var type = "linear",
          id = element.id + gradient,
          fx = .5, fy = .5,
          o = element.node,
          SVG = element.paper,
          s = o.style,
          el = R._g.doc.getElementById(id);
      if (!el) {
          gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
              type = "radial";
              if (_fx && _fy) {
                  fx = toFloat(_fx);
                  fy = toFloat(_fy);
                  var dir = ((fy > .5) * 2 - 1);
                  pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&
                      (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) &&
                      fy != .5 &&
                      (fy = fy.toFixed(5) - 1e-5 * dir);
              }
              return E;
          });
          gradient = gradient.split(/\s*\-\s*/);
          if (type == "linear") {
              var angle = gradient.shift();
              angle = -toFloat(angle);
              if (isNaN(angle)) {
                  return null;
              }
              var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
                  max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
              vector[2] *= max;
              vector[3] *= max;
              if (vector[2] < 0) {
                  vector[0] = -vector[2];
                  vector[2] = 0;
              }
              if (vector[3] < 0) {
                  vector[1] = -vector[3];
                  vector[3] = 0;
              }
          }
          var dots = R._parseDots(gradient);
          if (!dots) {
              return null;
          }
          id = id.replace(/[\(\)\s,\xb0#]/g, "_");
          
          if (element.gradient && id != element.gradient.id) {
              SVG.defs.removeChild(element.gradient);
              delete element.gradient;
          }

          if (!element.gradient) {
              el = $(type + "Gradient", {id: id});
              element.gradient = el;
              $(el, type == "radial" ? {
                  fx: fx,
                  fy: fy
              } : {
                  x1: vector[0],
                  y1: vector[1],
                  x2: vector[2],
                  y2: vector[3],
                  gradientTransform: element.matrix.invert()
              });
              SVG.defs.appendChild(el);
              for (var i = 0, ii = dots.length; i < ii; i++) {
                  el.appendChild($("stop", {
                      offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
                      "stop-color": dots[i].color || "#fff"
                  }));
              }
          }
      }
      $(o, {
          fill: "url(#" + id + ")",
          opacity: 1,
          "fill-opacity": 1
      });
      s.fill = E;
      s.opacity = 1;
      s.fillOpacity = 1;
      return 1;
  },
  updatePosition = function (o) {
      var bbox = o.getBBox(1);
      $(o.pattern, {patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"});
  },
  addArrow = function (o, value, isEnd) {
      if (o.type == "path") {
          var values = Str(value).toLowerCase().split("-"),
              p = o.paper,
              se = isEnd ? "end" : "start",
              node = o.node,
              attrs = o.attrs,
              stroke = attrs["stroke-width"],
              i = values.length,
              type = "classic",
              from,
              to,
              dx,
              refX,
              attr,
              w = 3,
              h = 3,
              t = 5;
          while (i--) {
              switch (values[i]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                      type = values[i];
                      break;
                  case "wide": h = 5; break;
                  case "narrow": h = 2; break;
                  case "long": w = 5; break;
                  case "short": w = 2; break;
              }
          }
          if (type == "open") {
              w += 2;
              h += 2;
              t += 2;
              dx = 1;
              refX = isEnd ? 4 : 1;
              attr = {
                  fill: "none",
                  stroke: attrs.stroke
              };
          } else {
              refX = dx = w / 2;
              attr = {
                  fill: attrs.stroke,
                  stroke: "none"
              };
          }
          if (o._.arrows) {
              if (isEnd) {
                  o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
                  o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
              } else {
                  o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
                  o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
              }
          } else {
              o._.arrows = {};
          }
          if (type != "none") {
              var pathId = "raphael-marker-" + type,
                  markerId = "raphael-marker-" + se + type + w + h;
              if (!R._g.doc.getElementById(pathId)) {
                  p.defs.appendChild($($("path"), {
                      "stroke-linecap": "round",
                      d: markers[type],
                      id: pathId
                  }));
                  markerCounter[pathId] = 1;
              } else {
                  markerCounter[pathId]++;
              }
              var marker = R._g.doc.getElementById(markerId),
                  use;
              if (!marker) {
                  marker = $($("marker"), {
                      id: markerId,
                      markerHeight: h,
                      markerWidth: w,
                      orient: "auto",
                      refX: refX,
                      refY: h / 2
                  });
                  use = $($("use"), {
                      "xlink:href": "#" + pathId,
                      transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
                      "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
                  });
                  marker.appendChild(use);
                  p.defs.appendChild(marker);
                  markerCounter[markerId] = 1;
              } else {
                  markerCounter[markerId]++;
                  use = marker.getElementsByTagName("use")[0];
              }
              $(use, attr);
              var delta = dx * (type != "diamond" && type != "oval");
              if (isEnd) {
                  from = o._.arrows.startdx * stroke || 0;
                  to = R.getTotalLength(attrs.path) - delta * stroke;
              } else {
                  from = delta * stroke;
                  to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
              }
              attr = {};
              attr["marker-" + se] = "url(#" + markerId + ")";
              if (to || from) {
                  attr.d = Raphael.getSubpath(attrs.path, from, to);
              }
              $(node, attr);
              o._.arrows[se + "Path"] = pathId;
              o._.arrows[se + "Marker"] = markerId;
              o._.arrows[se + "dx"] = delta;
              o._.arrows[se + "Type"] = type;
              o._.arrows[se + "String"] = value;
          } else {
              if (isEnd) {
                  from = o._.arrows.startdx * stroke || 0;
                  to = R.getTotalLength(attrs.path) - from;
              } else {
                  from = 0;
                  to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
              }
              o._.arrows[se + "Path"] && $(node, {d: Raphael.getSubpath(attrs.path, from, to)});
              delete o._.arrows[se + "Path"];
              delete o._.arrows[se + "Marker"];
              delete o._.arrows[se + "dx"];
              delete o._.arrows[se + "Type"];
              delete o._.arrows[se + "String"];
          }
          for (attr in markerCounter) if (markerCounter[has](attr) && !markerCounter[attr]) {
              var item = R._g.doc.getElementById(attr);
              item && item.parentNode.removeChild(item);
          }
      }
  },
  dasharray = {
      "": [0],
      "none": [0],
      "-": [3, 1],
      ".": [1, 1],
      "-.": [3, 1, 1, 1],
      "-..": [3, 1, 1, 1, 1, 1],
      ". ": [1, 3],
      "- ": [4, 3],
      "--": [8, 3],
      "- .": [4, 3, 1, 3],
      "--.": [8, 3, 1, 3],
      "--..": [8, 3, 1, 3, 1, 3]
  },
  addDashes = function (o, value, params) {
      value = dasharray[Str(value).toLowerCase()];
      if (value) {
          var width = o.attrs["stroke-width"] || "1",
              butt = {round: width, square: width, butt: 0}[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
              dashes = [],
              i = value.length;
          while (i--) {
              dashes[i] = value[i] * width + ((i % 2) ? 1 : -1) * butt;
          }
          $(o.node, {"stroke-dasharray": dashes.join(",")});
      }
  },
  setFillAndStroke = function (o, params) {
      var node = o.node,
          attrs = o.attrs,
          vis = node.style.visibility;
      node.style.visibility = "hidden";
      for (var att in params) {
          if (params[has](att)) {
              if (!R._availableAttrs[has](att)) {
                  continue;
              }
              var value = params[att];
              attrs[att] = value;
              switch (att) {
                  case "blur":
                      o.blur(value);
                      break;
                  case "href":
                  case "title":
                  case "target":
                      var pn = node.parentNode;
                      if (pn.tagName.toLowerCase() != "a") {
                          var hl = $("a");
                          pn.insertBefore(hl, node);
                          hl.appendChild(node);
                          pn = hl;
                      }
                      if (att == "target") {
                          pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
                      } else {
                          pn.setAttributeNS(xlink, att, value);
                      }
                      break;
                  case "cursor":
                      node.style.cursor = value;
                      break;
                  case "transform":
                      o.transform(value);
                      break;
                  case "arrow-start":
                      addArrow(o, value);
                      break;
                  case "arrow-end":
                      addArrow(o, value, 1);
                      break;
                  case "clip-rect":
                      var rect = Str(value).split(separator);
                      if (rect.length == 4) {
                          o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
                          var el = $("clipPath"),
                              rc = $("rect");
                          el.id = R.createUUID();
                          $(rc, {
                              x: rect[0],
                              y: rect[1],
                              width: rect[2],
                              height: rect[3]
                          });
                          el.appendChild(rc);
                          o.paper.defs.appendChild(el);
                          $(node, {"clip-path": "url(#" + el.id + ")"});
                          o.clip = rc;
                      }
                      if (!value) {
                          var path = node.getAttribute("clip-path");
                          if (path) {
                              var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
                              clip && clip.parentNode.removeChild(clip);
                              $(node, {"clip-path": E});
                              delete o.clip;
                          }
                      }
                  break;
                  case "path":
                      if (o.type == "path") {
                          $(node, {d: value ? attrs.path = R._pathToAbsolute(value) : "M0,0"});
                          o._.dirty = 1;
                          if (o._.arrows) {
                              "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                              "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                          }
                      }
                      break;
                  case "width":
                      node.setAttribute(att, value);
                      o._.dirty = 1;
                      if (attrs.fx) {
                          att = "x";
                          value = attrs.x;
                      } else {
                          break;
                      }
                  case "x":
                      if (attrs.fx) {
                          value = -attrs.x - (attrs.width || 0);
                      }
                  case "rx":
                      if (att == "rx" && o.type == "rect") {
                          break;
                      }
                  case "cx":
                      node.setAttribute(att, value);
                      o.pattern && updatePosition(o);
                      o._.dirty = 1;
                      break;
                  case "height":
                      node.setAttribute(att, value);
                      o._.dirty = 1;
                      if (attrs.fy) {
                          att = "y";
                          value = attrs.y;
                      } else {
                          break;
                      }
                  case "y":
                      if (attrs.fy) {
                          value = -attrs.y - (attrs.height || 0);
                      }
                  case "ry":
                      if (att == "ry" && o.type == "rect") {
                          break;
                      }
                  case "cy":
                      node.setAttribute(att, value);
                      o.pattern && updatePosition(o);
                      o._.dirty = 1;
                      break;
                  case "r":
                      if (o.type == "rect") {
                          $(node, {rx: value, ry: value});
                      } else {
                          node.setAttribute(att, value);
                      }
                      o._.dirty = 1;
                      break;
                  case "src":
                      if (o.type == "image") {
                          node.setAttributeNS(xlink, "href", value);
                      }
                      break;
                  case "stroke-width":
                      if (o._.sx != 1 || o._.sy != 1) {
                          value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
                      }
                      if (o.paper._vbSize) {
                          value *= o.paper._vbSize;
                      }
                      node.setAttribute(att, value);
                      if (attrs["stroke-dasharray"]) {
                          addDashes(o, attrs["stroke-dasharray"], params);
                      }
                      if (o._.arrows) {
                          "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                          "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                      }
                      break;
                  case "stroke-dasharray":
                      addDashes(o, value, params);
                      break;
                  case "fill":
                      var isURL = Str(value).match(R._ISURL);
                      if (isURL) {
                          el = $("pattern");
                          var ig = $("image");
                          el.id = R.createUUID();
                          $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
                          $(ig, {x: 0, y: 0, "xlink:href": isURL[1]});
                          el.appendChild(ig);

                          (function (el) {
                              R._preload(isURL[1], function () {
                                  var w = this.offsetWidth,
                                      h = this.offsetHeight;
                                  $(el, {width: w, height: h});
                                  $(ig, {width: w, height: h});
                                  o.paper.safari();
                              });
                          })(el);
                          o.paper.defs.appendChild(el);
                          $(node, {fill: "url(#" + el.id + ")"});
                          o.pattern = el;
                          o.pattern && updatePosition(o);
                          break;
                      }
                      var clr = R.getRGB(value);
                      if (!clr.error) {
                          delete params.gradient;
                          delete attrs.gradient;
                          !R.is(attrs.opacity, "undefined") &&
                              R.is(params.opacity, "undefined") &&
                              $(node, {opacity: attrs.opacity});
                          !R.is(attrs["fill-opacity"], "undefined") &&
                              R.is(params["fill-opacity"], "undefined") &&
                              $(node, {"fill-opacity": attrs["fill-opacity"]});
                      } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
                          if ("opacity" in attrs || "fill-opacity" in attrs) {
                              var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                              if (gradient) {
                                  var stops = gradient.getElementsByTagName("stop");
                                  $(stops[stops.length - 1], {"stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)});
                              }
                          }
                          attrs.gradient = value;
                          attrs.fill = "none";
                          break;
                      }
                      clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
                  case "stroke":
                      clr = R.getRGB(value);
                      node.setAttribute(att, clr.hex);
                      att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
                      if (att == "stroke" && o._.arrows) {
                          "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
                          "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
                      }
                      break;
                  case "gradient":
                      (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
                      break;
                  case "opacity":
                      if (attrs.gradient && !attrs[has]("stroke-opacity")) {
                          $(node, {"stroke-opacity": value > 1 ? value / 100 : value});
                      }
                      // fall
                  case "fill-opacity":
                      if (attrs.gradient) {
                          gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
                          if (gradient) {
                              stops = gradient.getElementsByTagName("stop");
                              $(stops[stops.length - 1], {"stop-opacity": value});
                          }
                          break;
                      }
                  default:
                      att == "font-size" && (value = toInt(value, 10) + "px");
                      var cssrule = att.replace(/(\-.)/g, function (w) {
                          return w.substring(1).toUpperCase();
                      });
                      node.style[cssrule] = value;
                      o._.dirty = 1;
                      node.setAttribute(att, value);
                      break;
              }
          }
      }

      tuneText(o, params);
      node.style.visibility = vis;
  },
  leading = 1.2,
  tuneText = function (el, params) {
      if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
          return;
      }
      var a = el.attrs,
          node = el.node,
          fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

      if (params[has]("text")) {
          a.text = params.text;
          while (node.firstChild) {
              node.removeChild(node.firstChild);
          }
          var texts = Str(params.text).split("\n"),
              tspans = [],
              tspan;
          for (var i = 0, ii = texts.length; i < ii; i++) {
              tspan = $("tspan");
              i && $(tspan, {dy: fontSize * leading, x: a.x});
              tspan.appendChild(R._g.doc.createTextNode(texts[i]));
              node.appendChild(tspan);
              tspans[i] = tspan;
          }
      } else {
          tspans = node.getElementsByTagName("tspan");
          for (i = 0, ii = tspans.length; i < ii; i++) if (i) {
              $(tspans[i], {dy: fontSize * leading, x: a.x});
          } else {
              $(tspans[0], {dy: 0});
          }
      }
      $(node, {x: a.x, y: a.y});
      el._.dirty = 1;
      var bb = el._getBBox(),
          dif = a.y - (bb.y + bb.height / 2);
      dif && R.is(dif, "finite") && $(tspans[0], {dy: dif});
  },
  Element = function (node, svg) {
      var X = 0,
          Y = 0;
      
      this[0] = this.node = node;
      
      node.raphael = true;
      
      this.id = R._oid++;
      node.raphaelid = this.id;
      this.matrix = R.matrix();
      this.realPath = null;
      
      this.paper = svg;
      this.attrs = this.attrs || {};
      this._ = {
          transform: [],
          sx: 1,
          sy: 1,
          deg: 0,
          dx: 0,
          dy: 0,
          dirty: 1
      };
      !svg.bottom && (svg.bottom = this);
      
      this.prev = svg.top;
      svg.top && (svg.top.next = this);
      svg.top = this;
      
      this.next = null;
  },
  elproto = R.el;

  Element.prototype = elproto;
  elproto.constructor = Element;

  R._engine.path = function (pathString, SVG) {
      var el = $("path");
      SVG.canvas && SVG.canvas.appendChild(el);
      var p = new Element(el, SVG);
      p.type = "path";
      setFillAndStroke(p, {
          fill: "none",
          stroke: "#000",
          path: pathString
      });
      return p;
  };
  
  elproto.rotate = function (deg, cx, cy) {
      if (this.removed) {
          return this;
      }
      deg = Str(deg).split(separator);
      if (deg.length - 1) {
          cx = toFloat(deg[1]);
          cy = toFloat(deg[2]);
      }
      deg = toFloat(deg[0]);
      (cy == null) && (cx = cy);
      if (cx == null || cy == null) {
          var bbox = this.getBBox(1);
          cx = bbox.x + bbox.width / 2;
          cy = bbox.y + bbox.height / 2;
      }
      this.transform(this._.transform.concat([["r", deg, cx, cy]]));
      return this;
  };
  
  elproto.scale = function (sx, sy, cx, cy) {
      if (this.removed) {
          return this;
      }
      sx = Str(sx).split(separator);
      if (sx.length - 1) {
          sy = toFloat(sx[1]);
          cx = toFloat(sx[2]);
          cy = toFloat(sx[3]);
      }
      sx = toFloat(sx[0]);
      (sy == null) && (sy = sx);
      (cy == null) && (cx = cy);
      if (cx == null || cy == null) {
          var bbox = this.getBBox(1);
      }
      cx = cx == null ? bbox.x + bbox.width / 2 : cx;
      cy = cy == null ? bbox.y + bbox.height / 2 : cy;
      this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
      return this;
  };
  
  elproto.translate = function (dx, dy) {
      if (this.removed) {
          return this;
      }
      dx = Str(dx).split(separator);
      if (dx.length - 1) {
          dy = toFloat(dx[1]);
      }
      dx = toFloat(dx[0]) || 0;
      dy = +dy || 0;
      this.transform(this._.transform.concat([["t", dx, dy]]));
      return this;
  };
  
  elproto.transform = function (tstr) {
      var _ = this._;
      if (tstr == null) {
          return _.transform;
      }
      R._extractTransform(this, tstr);

      this.clip && $(this.clip, {transform: this.matrix.invert()});
      this.pattern && updatePosition(this);
      this.node && $(this.node, {transform: this.matrix});
  
      if (_.sx != 1 || _.sy != 1) {
          var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;
          this.attr({"stroke-width": sw});
      }

      return this;
  };
  
  elproto.hide = function () {
      !this.removed && this.paper.safari(this.node.style.display = "none");
      return this;
  };
  
  elproto.show = function () {
      !this.removed && this.paper.safari(this.node.style.display = "");
      return this;
  };
  
  elproto.remove = function () {
      if (this.removed || !this.node.parentNode) {
          return;
      }
      var paper = this.paper;
      paper.__set__ && paper.__set__.exclude(this);
      eve.unbind("raphael.*.*." + this.id);
      if (this.gradient) {
          paper.defs.removeChild(this.gradient);
      }
      R._tear(this, paper);
      if (this.node.parentNode.tagName.toLowerCase() == "a") {
          this.node.parentNode.parentNode.removeChild(this.node.parentNode);
      } else {
          this.node.parentNode.removeChild(this.node);
      }
      for (var i in this) {
          this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
      }
      this.removed = true;
  };
  elproto._getBBox = function () {
      if (this.node.style.display == "none") {
          this.show();
          var hide = true;
      }
      var bbox = {};
      try {
          bbox = this.node.getBBox();
      } catch(e) {
          // Firefox 3.0.x plays badly here
      } finally {
          bbox = bbox || {};
      }
      hide && this.hide();
      return bbox;
  };
  
  elproto.attr = function (name, value) {
      if (this.removed) {
          return this;
      }
      if (name == null) {
          var res = {};
          for (var a in this.attrs) if (this.attrs[has](a)) {
              res[a] = this.attrs[a];
          }
          res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
          res.transform = this._.transform;
          return res;
      }
      if (value == null && R.is(name, "string")) {
          if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
              return this.attrs.gradient;
          }
          if (name == "transform") {
              return this._.transform;
          }
          var names = name.split(separator),
              out = {};
          for (var i = 0, ii = names.length; i < ii; i++) {
              name = names[i];
              if (name in this.attrs) {
                  out[name] = this.attrs[name];
              } else if (R.is(this.paper.customAttributes[name], "function")) {
                  out[name] = this.paper.customAttributes[name].def;
              } else {
                  out[name] = R._availableAttrs[name];
              }
          }
          return ii - 1 ? out : out[names[0]];
      }
      if (value == null && R.is(name, "array")) {
          out = {};
          for (i = 0, ii = name.length; i < ii; i++) {
              out[name[i]] = this.attr(name[i]);
          }
          return out;
      }
      if (value != null) {
          var params = {};
          params[name] = value;
      } else if (name != null && R.is(name, "object")) {
          params = name;
      }
      for (var key in params) {
          eve("raphael.attr." + key + "." + this.id, this, params[key]);
      }
      for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
          var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
          this.attrs[key] = params[key];
          for (var subkey in par) if (par[has](subkey)) {
              params[subkey] = par[subkey];
          }
      }
      setFillAndStroke(this, params);
      return this;
  };
  
  elproto.toFront = function () {
      if (this.removed) {
          return this;
      }
      if (this.node.parentNode.tagName.toLowerCase() == "a") {
          this.node.parentNode.parentNode.appendChild(this.node.parentNode);
      } else {
          this.node.parentNode.appendChild(this.node);
      }
      var svg = this.paper;
      svg.top != this && R._tofront(this, svg);
      return this;
  };
  
  elproto.toBack = function () {
      if (this.removed) {
          return this;
      }
      var parent = this.node.parentNode;
      if (parent.tagName.toLowerCase() == "a") {
          parent.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild); 
      } else if (parent.firstChild != this.node) {
          parent.insertBefore(this.node, this.node.parentNode.firstChild);
      }
      R._toback(this, this.paper);
      var svg = this.paper;
      return this;
  };
  
  elproto.insertAfter = function (element) {
      if (this.removed) {
          return this;
      }
      var node = element.node || element[element.length - 1].node;
      if (node.nextSibling) {
          node.parentNode.insertBefore(this.node, node.nextSibling);
      } else {
          node.parentNode.appendChild(this.node);
      }
      R._insertafter(this, element, this.paper);
      return this;
  };
  
  elproto.insertBefore = function (element) {
      if (this.removed) {
          return this;
      }
      var node = element.node || element[0].node;
      node.parentNode.insertBefore(this.node, node);
      R._insertbefore(this, element, this.paper);
      return this;
  };
  elproto.blur = function (size) {
      // Experimental. No Safari support. Use it on your own risk.
      var t = this;
      if (+size !== 0) {
          var fltr = $("filter"),
              blur = $("feGaussianBlur");
          t.attrs.blur = size;
          fltr.id = R.createUUID();
          $(blur, {stdDeviation: +size || 1.5});
          fltr.appendChild(blur);
          t.paper.defs.appendChild(fltr);
          t._blur = fltr;
          $(t.node, {filter: "url(#" + fltr.id + ")"});
      } else {
          if (t._blur) {
              t._blur.parentNode.removeChild(t._blur);
              delete t._blur;
              delete t.attrs.blur;
          }
          t.node.removeAttribute("filter");
      }
  };
  R._engine.circle = function (svg, x, y, r) {
      var el = $("circle");
      svg.canvas && svg.canvas.appendChild(el);
      var res = new Element(el, svg);
      res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};
      res.type = "circle";
      $(el, res.attrs);
      return res;
  };
  R._engine.rect = function (svg, x, y, w, h, r) {
      var el = $("rect");
      svg.canvas && svg.canvas.appendChild(el);
      var res = new Element(el, svg);
      res.attrs = {x: x, y: y, width: w, height: h, r: r || 0, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000"};
      res.type = "rect";
      $(el, res.attrs);
      return res;
  };
  R._engine.ellipse = function (svg, x, y, rx, ry) {
      var el = $("ellipse");
      svg.canvas && svg.canvas.appendChild(el);
      var res = new Element(el, svg);
      res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};
      res.type = "ellipse";
      $(el, res.attrs);
      return res;
  };
  R._engine.image = function (svg, src, x, y, w, h) {
      var el = $("image");
      $(el, {x: x, y: y, width: w, height: h, preserveAspectRatio: "none"});
      el.setAttributeNS(xlink, "href", src);
      svg.canvas && svg.canvas.appendChild(el);
      var res = new Element(el, svg);
      res.attrs = {x: x, y: y, width: w, height: h, src: src};
      res.type = "image";
      return res;
  };
  R._engine.text = function (svg, x, y, text) {
      var el = $("text");
      svg.canvas && svg.canvas.appendChild(el);
      var res = new Element(el, svg);
      res.attrs = {
          x: x,
          y: y,
          "text-anchor": "middle",
          text: text,
          font: R._availableAttrs.font,
          stroke: "none",
          fill: "#000"
      };
      res.type = "text";
      setFillAndStroke(res, res.attrs);
      return res;
  };
  R._engine.setSize = function (width, height) {
      this.width = width || this.width;
      this.height = height || this.height;
      this.canvas.setAttribute("width", this.width);
      this.canvas.setAttribute("height", this.height);
      if (this._viewBox) {
          this.setViewBox.apply(this, this._viewBox);
      }
      return this;
  };
  R._engine.create = function () {
      var con = R._getContainer.apply(0, arguments),
          container = con && con.container,
          x = con.x,
          y = con.y,
          width = con.width,
          height = con.height;
      if (!container) {
          throw new Error("SVG container not found.");
      }
      var cnvs = $("svg"),
          css = "overflow:hidden;",
          isFloating;
      x = x || 0;
      y = y || 0;
      width = width || 512;
      height = height || 342;
      $(cnvs, {
          height: height,
          version: 1.1,
          width: width,
          xmlns: "http://www.w3.org/2000/svg"
      });
      if (container == 1) {
          cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";
          R._g.doc.body.appendChild(cnvs);
          isFloating = 1;
      } else {
          cnvs.style.cssText = css + "position:relative";
          if (container.firstChild) {
              container.insertBefore(cnvs, container.firstChild);
          } else {
              container.appendChild(cnvs);
          }
      }
      container = new R._Paper;
      container.width = width;
      container.height = height;
      container.canvas = cnvs;
      container.clear();
      container._left = container._top = 0;
      isFloating && (container.renderfix = function () {});
      container.renderfix();
      return container;
  };
  R._engine.setViewBox = function (x, y, w, h, fit) {
      eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
      var size = mmax(w / this.width, h / this.height),
          top = this.top,
          aspectRatio = fit ? "meet" : "xMinYMin",
          vb,
          sw;
      if (x == null) {
          if (this._vbSize) {
              size = 1;
          }
          delete this._vbSize;
          vb = "0 0 " + this.width + S + this.height;
      } else {
          this._vbSize = size;
          vb = x + S + y + S + w + S + h;
      }
      $(this.canvas, {
          viewBox: vb,
          preserveAspectRatio: aspectRatio
      });
      while (size && top) {
          sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;
          top.attr({"stroke-width": sw});
          top._.dirty = 1;
          top._.dirtyT = 1;
          top = top.prev;
      }
      this._viewBox = [x, y, w, h, !!fit];
      return this;
  };
  
  R.prototype.renderfix = function () {
      var cnvs = this.canvas,
          s = cnvs.style,
          pos;
      try {
          pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
      } catch (e) {
          pos = cnvs.createSVGMatrix();
      }
      var left = -pos.e % 1,
          top = -pos.f % 1;
      if (left || top) {
          if (left) {
              this._left = (this._left + left) % 1;
              s.left = this._left + "px";
          }
          if (top) {
              this._top = (this._top + top) % 1;
              s.top = this._top + "px";
          }
      }
  };
  
  R.prototype.clear = function () {
      R.eve("raphael.clear", this);
      var c = this.canvas;
      while (c.firstChild) {
          c.removeChild(c.firstChild);
      }
      this.bottom = this.top = null;
      (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));
      c.appendChild(this.desc);
      c.appendChild(this.defs = $("defs"));
  };
  
  R.prototype.remove = function () {
      eve("raphael.remove", this);
      this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
      for (var i in this) {
          this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
      }
  };
  var setproto = R.st;
  for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
      setproto[method] = (function (methodname) {
          return function () {
              var arg = arguments;
              return this.forEach(function (el) {
                  el[methodname].apply(el, arg);
              });
          };
      })(method);
  }
}(window.Raphael);

// ┌─────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël - JavaScript Vector Library                                 │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ VML Module                                                          │ \\
// ├─────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright (c) 2008-2011 Dmitry Baranovskiy (http://raphaeljs.com)   │ \\
// │ Copyright (c) 2008-2011 Sencha Labs (http://sencha.com)             │ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license. │ \\
// └─────────────────────────────────────────────────────────────────────┘ \\
window.Raphael.vml && function (R) {
  var has = "hasOwnProperty",
      Str = String,
      toFloat = parseFloat,
      math = Math,
      round = math.round,
      mmax = math.max,
      mmin = math.min,
      abs = math.abs,
      fillString = "fill",
      separator = /[, ]+/,
      eve = R.eve,
      ms = " progid:DXImageTransform.Microsoft",
      S = " ",
      E = "",
      map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
      bites = /([clmz]),?([^clmz]*)/gi,
      blurregexp = / progid:\S+Blur\([^\)]+\)/g,
      val = /-?[^,\s-]+/g,
      cssDot = "position:absolute;left:0;top:0;width:1px;height:1px",
      zoom = 21600,
      pathTypes = {path: 1, rect: 1, image: 1},
      ovalTypes = {circle: 1, ellipse: 1},
      path2vml = function (path) {
          var total =  /[ahqstv]/ig,
              command = R._pathToAbsolute;
          Str(path).match(total) && (command = R._path2curve);
          total = /[clmz]/g;
          if (command == R._pathToAbsolute && !Str(path).match(total)) {
              var res = Str(path).replace(bites, function (all, command, args) {
                  var vals = [],
                      isMove = command.toLowerCase() == "m",
                      res = map[command];
                  args.replace(val, function (value) {
                      if (isMove && vals.length == 2) {
                          res += vals + map[command == "m" ? "l" : "L"];
                          vals = [];
                      }
                      vals.push(round(value * zoom));
                  });
                  return res + vals;
              });
              return res;
          }
          var pa = command(path), p, r;
          res = [];
          for (var i = 0, ii = pa.length; i < ii; i++) {
              p = pa[i];
              r = pa[i][0].toLowerCase();
              r == "z" && (r = "x");
              for (var j = 1, jj = p.length; j < jj; j++) {
                  r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
              }
              res.push(r);
          }
          return res.join(S);
      },
      compensation = function (deg, dx, dy) {
          var m = R.matrix();
          m.rotate(-deg, .5, .5);
          return {
              dx: m.x(dx, dy),
              dy: m.y(dx, dy)
          };
      },
      setCoords = function (p, sx, sy, dx, dy, deg) {
          var _ = p._,
              m = p.matrix,
              fillpos = _.fillpos,
              o = p.node,
              s = o.style,
              y = 1,
              flip = "",
              dxdy,
              kx = zoom / sx,
              ky = zoom / sy;
          s.visibility = "hidden";
          if (!sx || !sy) {
              return;
          }
          o.coordsize = abs(kx) + S + abs(ky);
          s.rotation = deg * (sx * sy < 0 ? -1 : 1);
          if (deg) {
              var c = compensation(deg, dx, dy);
              dx = c.dx;
              dy = c.dy;
          }
          sx < 0 && (flip += "x");
          sy < 0 && (flip += " y") && (y = -1);
          s.flip = flip;
          o.coordorigin = (dx * -kx) + S + (dy * -ky);
          if (fillpos || _.fillsize) {
              var fill = o.getElementsByTagName(fillString);
              fill = fill && fill[0];
              o.removeChild(fill);
              if (fillpos) {
                  c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
                  fill.position = c.dx * y + S + c.dy * y;
              }
              if (_.fillsize) {
                  fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
              }
              o.appendChild(fill);
          }
          s.visibility = "visible";
      };
  R.toString = function () {
      return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
  };
  var addArrow = function (o, value, isEnd) {
      var values = Str(value).toLowerCase().split("-"),
          se = isEnd ? "end" : "start",
          i = values.length,
          type = "classic",
          w = "medium",
          h = "medium";
      while (i--) {
          switch (values[i]) {
              case "block":
              case "classic":
              case "oval":
              case "diamond":
              case "open":
              case "none":
                  type = values[i];
                  break;
              case "wide":
              case "narrow": h = values[i]; break;
              case "long":
              case "short": w = values[i]; break;
          }
      }
      var stroke = o.node.getElementsByTagName("stroke")[0];
      stroke[se + "arrow"] = type;
      stroke[se + "arrowlength"] = w;
      stroke[se + "arrowwidth"] = h;
  },
  setFillAndStroke = function (o, params) {
      // o.paper.canvas.style.display = "none";
      o.attrs = o.attrs || {};
      var node = o.node,
          a = o.attrs,
          s = node.style,
          xy,
          newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
          isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
          res = o;


      for (var par in params) if (params[has](par)) {
          a[par] = params[par];
      }
      if (newpath) {
          a.path = R._getPath[o.type](o);
          o._.dirty = 1;
      }
      params.href && (node.href = params.href);
      params.title && (node.title = params.title);
      params.target && (node.target = params.target);
      params.cursor && (s.cursor = params.cursor);
      "blur" in params && o.blur(params.blur);
      if (params.path && o.type == "path" || newpath) {
          node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
          if (o.type == "image") {
              o._.fillpos = [a.x, a.y];
              o._.fillsize = [a.width, a.height];
              setCoords(o, 1, 1, 0, 0, 0);
          }
      }
      "transform" in params && o.transform(params.transform);
      if (isOval) {
          var cx = +a.cx,
              cy = +a.cy,
              rx = +a.rx || +a.r || 0,
              ry = +a.ry || +a.r || 0;
          node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
      }
      if ("clip-rect" in params) {
          var rect = Str(params["clip-rect"]).split(separator);
          if (rect.length == 4) {
              rect[2] = +rect[2] + (+rect[0]);
              rect[3] = +rect[3] + (+rect[1]);
              var div = node.clipRect || R._g.doc.createElement("div"),
                  dstyle = div.style;
              dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
              if (!node.clipRect) {
                  dstyle.position = "absolute";
                  dstyle.top = 0;
                  dstyle.left = 0;
                  dstyle.width = o.paper.width + "px";
                  dstyle.height = o.paper.height + "px";
                  node.parentNode.insertBefore(div, node);
                  div.appendChild(node);
                  node.clipRect = div;
              }
          }
          if (!params["clip-rect"]) {
              node.clipRect && (node.clipRect.style.clip = "auto");
          }
      }
      if (o.textpath) {
          var textpathStyle = o.textpath.style;
          params.font && (textpathStyle.font = params.font);
          params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
          params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
          params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
          params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
      }
      if ("arrow-start" in params) {
          addArrow(res, params["arrow-start"]);
      }
      if ("arrow-end" in params) {
          addArrow(res, params["arrow-end"], 1);
      }
      if (params.opacity != null || 
          params["stroke-width"] != null ||
          params.fill != null ||
          params.src != null ||
          params.stroke != null ||
          params["stroke-width"] != null ||
          params["stroke-opacity"] != null ||
          params["fill-opacity"] != null ||
          params["stroke-dasharray"] != null ||
          params["stroke-miterlimit"] != null ||
          params["stroke-linejoin"] != null ||
          params["stroke-linecap"] != null) {
          var fill = node.getElementsByTagName(fillString),
              newfill = false;
          fill = fill && fill[0];
          !fill && (newfill = fill = createNode(fillString));
          if (o.type == "image" && params.src) {
              fill.src = params.src;
          }
          params.fill && (fill.on = true);
          if (fill.on == null || params.fill == "none" || params.fill === null) {
              fill.on = false;
          }
          if (fill.on && params.fill) {
              var isURL = Str(params.fill).match(R._ISURL);
              if (isURL) {
                  fill.parentNode == node && node.removeChild(fill);
                  fill.rotate = true;
                  fill.src = isURL[1];
                  fill.type = "tile";
                  var bbox = o.getBBox(1);
                  fill.position = bbox.x + S + bbox.y;
                  o._.fillpos = [bbox.x, bbox.y];

                  R._preload(isURL[1], function () {
                      o._.fillsize = [this.offsetWidth, this.offsetHeight];
                  });
              } else {
                  fill.color = R.getRGB(params.fill).hex;
                  fill.src = E;
                  fill.type = "solid";
                  if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
                      a.fill = "none";
                      a.gradient = params.fill;
                      fill.rotate = false;
                  }
              }
          }
          if ("fill-opacity" in params || "opacity" in params) {
              var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
              opacity = mmin(mmax(opacity, 0), 1);
              fill.opacity = opacity;
              if (fill.src) {
                  fill.color = "none";
              }
          }
          node.appendChild(fill);
          var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),
          newstroke = false;
          !stroke && (newstroke = stroke = createNode("stroke"));
          if ((params.stroke && params.stroke != "none") ||
              params["stroke-width"] ||
              params["stroke-opacity"] != null ||
              params["stroke-dasharray"] ||
              params["stroke-miterlimit"] ||
              params["stroke-linejoin"] ||
              params["stroke-linecap"]) {
              stroke.on = true;
          }
          (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
          var strokeColor = R.getRGB(params.stroke);
          stroke.on && params.stroke && (stroke.color = strokeColor.hex);
          opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
          var width = (toFloat(params["stroke-width"]) || 1) * .75;
          opacity = mmin(mmax(opacity, 0), 1);
          params["stroke-width"] == null && (width = a["stroke-width"]);
          params["stroke-width"] && (stroke.weight = width);
          width && width < 1 && (opacity *= width) && (stroke.weight = 1);
          stroke.opacity = opacity;
      
          params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
          stroke.miterlimit = params["stroke-miterlimit"] || 8;
          params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
          if (params["stroke-dasharray"]) {
              var dasharray = {
                  "-": "shortdash",
                  ".": "shortdot",
                  "-.": "shortdashdot",
                  "-..": "shortdashdotdot",
                  ". ": "dot",
                  "- ": "dash",
                  "--": "longdash",
                  "- .": "dashdot",
                  "--.": "longdashdot",
                  "--..": "longdashdotdot"
              };
              stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
          }
          newstroke && node.appendChild(stroke);
      }
      if (res.type == "text") {
          res.paper.canvas.style.display = E;
          var span = res.paper.span,
              m = 100,
              fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
          s = span.style;
          a.font && (s.font = a.font);
          a["font-family"] && (s.fontFamily = a["font-family"]);
          a["font-weight"] && (s.fontWeight = a["font-weight"]);
          a["font-style"] && (s.fontStyle = a["font-style"]);
          fontSize = toFloat(a["font-size"] || fontSize && fontSize[0]) || 10;
          s.fontSize = fontSize * m + "px";
          res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
          var brect = span.getBoundingClientRect();
          res.W = a.w = (brect.right - brect.left) / m;
          res.H = a.h = (brect.bottom - brect.top) / m;
          // res.paper.canvas.style.display = "none";
          res.X = a.x;
          res.Y = a.y + res.H / 2;

          ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
          var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
          for (var d = 0, dd = dirtyattrs.length; d < dd; d++) if (dirtyattrs[d] in params) {
              res._.dirty = 1;
              break;
          }
      
          // text-anchor emulation
          switch (a["text-anchor"]) {
              case "start":
                  res.textpath.style["v-text-align"] = "left";
                  res.bbx = res.W / 2;
              break;
              case "end":
                  res.textpath.style["v-text-align"] = "right";
                  res.bbx = -res.W / 2;
              break;
              default:
                  res.textpath.style["v-text-align"] = "center";
                  res.bbx = 0;
              break;
          }
          res.textpath.style["v-text-kern"] = true;
      }
      // res.paper.canvas.style.display = E;
  },
  addGradientFill = function (o, gradient, fill) {
      o.attrs = o.attrs || {};
      var attrs = o.attrs,
          pow = Math.pow,
          opacity,
          oindex,
          type = "linear",
          fxfy = ".5 .5";
      o.attrs.gradient = gradient;
      gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {
          type = "radial";
          if (fx && fy) {
              fx = toFloat(fx);
              fy = toFloat(fy);
              pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
              fxfy = fx + S + fy;
          }
          return E;
      });
      gradient = gradient.split(/\s*\-\s*/);
      if (type == "linear") {
          var angle = gradient.shift();
          angle = -toFloat(angle);
          if (isNaN(angle)) {
              return null;
          }
      }
      var dots = R._parseDots(gradient);
      if (!dots) {
          return null;
      }
      o = o.shape || o.node;
      if (dots.length) {
          o.removeChild(fill);
          fill.on = true;
          fill.method = "none";
          fill.color = dots[0].color;
          fill.color2 = dots[dots.length - 1].color;
          var clrs = [];
          for (var i = 0, ii = dots.length; i < ii; i++) {
              dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
          }
          fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
          if (type == "radial") {
              fill.type = "gradientTitle";
              fill.focus = "100%";
              fill.focussize = "0 0";
              fill.focusposition = fxfy;
              fill.angle = 0;
          } else {
              // fill.rotate= true;
              fill.type = "gradient";
              fill.angle = (270 - angle) % 360;
          }
          o.appendChild(fill);
      }
      return 1;
  },
  Element = function (node, vml) {
      this[0] = this.node = node;
      node.raphael = true;
      this.id = R._oid++;
      node.raphaelid = this.id;
      this.X = 0;
      this.Y = 0;
      this.attrs = {};
      this.paper = vml;
      this.matrix = R.matrix();
      this._ = {
          transform: [],
          sx: 1,
          sy: 1,
          dx: 0,
          dy: 0,
          deg: 0,
          dirty: 1,
          dirtyT: 1
      };
      !vml.bottom && (vml.bottom = this);
      this.prev = vml.top;
      vml.top && (vml.top.next = this);
      vml.top = this;
      this.next = null;
  };
  var elproto = R.el;

  Element.prototype = elproto;
  elproto.constructor = Element;
  elproto.transform = function (tstr) {
      if (tstr == null) {
          return this._.transform;
      }
      var vbs = this.paper._viewBoxShift,
          vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
          oldt;
      if (vbs) {
          oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
      }
      R._extractTransform(this, vbt + tstr);
      var matrix = this.matrix.clone(),
          skew = this.skew,
          o = this.node,
          split,
          isGrad = ~Str(this.attrs.fill).indexOf("-"),
          isPatt = !Str(this.attrs.fill).indexOf("url(");
      matrix.translate(-.5, -.5);
      if (isPatt || isGrad || this.type == "image") {
          skew.matrix = "1 0 0 1";
          skew.offset = "0 0";
          split = matrix.split();
          if ((isGrad && split.noRotation) || !split.isSimple) {
              o.style.filter = matrix.toFilter();
              var bb = this.getBBox(),
                  bbt = this.getBBox(1),
                  dx = bb.x - bbt.x,
                  dy = bb.y - bbt.y;
              o.coordorigin = (dx * -zoom) + S + (dy * -zoom);
              setCoords(this, 1, 1, dx, dy, 0);
          } else {
              o.style.filter = E;
              setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
          }
      } else {
          o.style.filter = E;
          skew.matrix = Str(matrix);
          skew.offset = matrix.offset();
      }
      oldt && (this._.transform = oldt);
      return this;
  };
  elproto.rotate = function (deg, cx, cy) {
      if (this.removed) {
          return this;
      }
      if (deg == null) {
          return;
      }
      deg = Str(deg).split(separator);
      if (deg.length - 1) {
          cx = toFloat(deg[1]);
          cy = toFloat(deg[2]);
      }
      deg = toFloat(deg[0]);
      (cy == null) && (cx = cy);
      if (cx == null || cy == null) {
          var bbox = this.getBBox(1);
          cx = bbox.x + bbox.width / 2;
          cy = bbox.y + bbox.height / 2;
      }
      this._.dirtyT = 1;
      this.transform(this._.transform.concat([["r", deg, cx, cy]]));
      return this;
  };
  elproto.translate = function (dx, dy) {
      if (this.removed) {
          return this;
      }
      dx = Str(dx).split(separator);
      if (dx.length - 1) {
          dy = toFloat(dx[1]);
      }
      dx = toFloat(dx[0]) || 0;
      dy = +dy || 0;
      if (this._.bbox) {
          this._.bbox.x += dx;
          this._.bbox.y += dy;
      }
      this.transform(this._.transform.concat([["t", dx, dy]]));
      return this;
  };
  elproto.scale = function (sx, sy, cx, cy) {
      if (this.removed) {
          return this;
      }
      sx = Str(sx).split(separator);
      if (sx.length - 1) {
          sy = toFloat(sx[1]);
          cx = toFloat(sx[2]);
          cy = toFloat(sx[3]);
          isNaN(cx) && (cx = null);
          isNaN(cy) && (cy = null);
      }
      sx = toFloat(sx[0]);
      (sy == null) && (sy = sx);
      (cy == null) && (cx = cy);
      if (cx == null || cy == null) {
          var bbox = this.getBBox(1);
      }
      cx = cx == null ? bbox.x + bbox.width / 2 : cx;
      cy = cy == null ? bbox.y + bbox.height / 2 : cy;
  
      this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
      this._.dirtyT = 1;
      return this;
  };
  elproto.hide = function () {
      !this.removed && (this.node.style.display = "none");
      return this;
  };
  elproto.show = function () {
      !this.removed && (this.node.style.display = E);
      return this;
  };
  elproto._getBBox = function () {
      if (this.removed) {
          return {};
      }
      return {
          x: this.X + (this.bbx || 0) - this.W / 2,
          y: this.Y - this.H,
          width: this.W,
          height: this.H
      };
  };
  elproto.remove = function () {
      if (this.removed || !this.node.parentNode) {
          return;
      }
      this.paper.__set__ && this.paper.__set__.exclude(this);
      R.eve.unbind("raphael.*.*." + this.id);
      R._tear(this, this.paper);
      this.node.parentNode.removeChild(this.node);
      this.shape && this.shape.parentNode.removeChild(this.shape);
      for (var i in this) {
          this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
      }
      this.removed = true;
  };
  elproto.attr = function (name, value) {
      if (this.removed) {
          return this;
      }
      if (name == null) {
          var res = {};
          for (var a in this.attrs) if (this.attrs[has](a)) {
              res[a] = this.attrs[a];
          }
          res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
          res.transform = this._.transform;
          return res;
      }
      if (value == null && R.is(name, "string")) {
          if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
              return this.attrs.gradient;
          }
          var names = name.split(separator),
              out = {};
          for (var i = 0, ii = names.length; i < ii; i++) {
              name = names[i];
              if (name in this.attrs) {
                  out[name] = this.attrs[name];
              } else if (R.is(this.paper.customAttributes[name], "function")) {
                  out[name] = this.paper.customAttributes[name].def;
              } else {
                  out[name] = R._availableAttrs[name];
              }
          }
          return ii - 1 ? out : out[names[0]];
      }
      if (this.attrs && value == null && R.is(name, "array")) {
          out = {};
          for (i = 0, ii = name.length; i < ii; i++) {
              out[name[i]] = this.attr(name[i]);
          }
          return out;
      }
      var params;
      if (value != null) {
          params = {};
          params[name] = value;
      }
      value == null && R.is(name, "object") && (params = name);
      for (var key in params) {
          eve("raphael.attr." + key + "." + this.id, this, params[key]);
      }
      if (params) {
          for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
              var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
              this.attrs[key] = params[key];
              for (var subkey in par) if (par[has](subkey)) {
                  params[subkey] = par[subkey];
              }
          }
          // this.paper.canvas.style.display = "none";
          if (params.text && this.type == "text") {
              this.textpath.string = params.text;
          }
          setFillAndStroke(this, params);
          // this.paper.canvas.style.display = E;
      }
      return this;
  };
  elproto.toFront = function () {
      !this.removed && this.node.parentNode.appendChild(this.node);
      this.paper && this.paper.top != this && R._tofront(this, this.paper);
      return this;
  };
  elproto.toBack = function () {
      if (this.removed) {
          return this;
      }
      if (this.node.parentNode.firstChild != this.node) {
          this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
          R._toback(this, this.paper);
      }
      return this;
  };
  elproto.insertAfter = function (element) {
      if (this.removed) {
          return this;
      }
      if (element.constructor == R.st.constructor) {
          element = element[element.length - 1];
      }
      if (element.node.nextSibling) {
          element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
      } else {
          element.node.parentNode.appendChild(this.node);
      }
      R._insertafter(this, element, this.paper);
      return this;
  };
  elproto.insertBefore = function (element) {
      if (this.removed) {
          return this;
      }
      if (element.constructor == R.st.constructor) {
          element = element[0];
      }
      element.node.parentNode.insertBefore(this.node, element.node);
      R._insertbefore(this, element, this.paper);
      return this;
  };
  elproto.blur = function (size) {
      var s = this.node.runtimeStyle,
          f = s.filter;
      f = f.replace(blurregexp, E);
      if (+size !== 0) {
          this.attrs.blur = size;
          s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
          s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
      } else {
          s.filter = f;
          s.margin = 0;
          delete this.attrs.blur;
      }
  };

  R._engine.path = function (pathString, vml) {
      var el = createNode("shape");
      el.style.cssText = cssDot;
      el.coordsize = zoom + S + zoom;
      el.coordorigin = vml.coordorigin;
      var p = new Element(el, vml),
          attr = {fill: "none", stroke: "#000"};
      pathString && (attr.path = pathString);
      p.type = "path";
      p.path = [];
      p.Path = E;
      setFillAndStroke(p, attr);
      vml.canvas.appendChild(el);
      var skew = createNode("skew");
      skew.on = true;
      el.appendChild(skew);
      p.skew = skew;
      p.transform(E);
      return p;
  };
  R._engine.rect = function (vml, x, y, w, h, r) {
      var path = R._rectPath(x, y, w, h, r),
          res = vml.path(path),
          a = res.attrs;
      res.X = a.x = x;
      res.Y = a.y = y;
      res.W = a.width = w;
      res.H = a.height = h;
      a.r = r;
      a.path = path;
      res.type = "rect";
      return res;
  };
  R._engine.ellipse = function (vml, x, y, rx, ry) {
      var res = vml.path(),
          a = res.attrs;
      res.X = x - rx;
      res.Y = y - ry;
      res.W = rx * 2;
      res.H = ry * 2;
      res.type = "ellipse";
      setFillAndStroke(res, {
          cx: x,
          cy: y,
          rx: rx,
          ry: ry
      });
      return res;
  };
  R._engine.circle = function (vml, x, y, r) {
      var res = vml.path(),
          a = res.attrs;
      res.X = x - r;
      res.Y = y - r;
      res.W = res.H = r * 2;
      res.type = "circle";
      setFillAndStroke(res, {
          cx: x,
          cy: y,
          r: r
      });
      return res;
  };
  R._engine.image = function (vml, src, x, y, w, h) {
      var path = R._rectPath(x, y, w, h),
          res = vml.path(path).attr({stroke: "none"}),
          a = res.attrs,
          node = res.node,
          fill = node.getElementsByTagName(fillString)[0];
      a.src = src;
      res.X = a.x = x;
      res.Y = a.y = y;
      res.W = a.width = w;
      res.H = a.height = h;
      a.path = path;
      res.type = "image";
      fill.parentNode == node && node.removeChild(fill);
      fill.rotate = true;
      fill.src = src;
      fill.type = "tile";
      res._.fillpos = [x, y];
      res._.fillsize = [w, h];
      node.appendChild(fill);
      setCoords(res, 1, 1, 0, 0, 0);
      return res;
  };
  R._engine.text = function (vml, x, y, text) {
      var el = createNode("shape"),
          path = createNode("path"),
          o = createNode("textpath");
      x = x || 0;
      y = y || 0;
      text = text || "";
      path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
      path.textpathok = true;
      o.string = Str(text);
      o.on = true;
      el.style.cssText = cssDot;
      el.coordsize = zoom + S + zoom;
      el.coordorigin = "0 0";
      var p = new Element(el, vml),
          attr = {
              fill: "#000",
              stroke: "none",
              font: R._availableAttrs.font,
              text: text
          };
      p.shape = el;
      p.path = path;
      p.textpath = o;
      p.type = "text";
      p.attrs.text = Str(text);
      p.attrs.x = x;
      p.attrs.y = y;
      p.attrs.w = 1;
      p.attrs.h = 1;
      setFillAndStroke(p, attr);
      el.appendChild(o);
      el.appendChild(path);
      vml.canvas.appendChild(el);
      var skew = createNode("skew");
      skew.on = true;
      el.appendChild(skew);
      p.skew = skew;
      p.transform(E);
      return p;
  };
  R._engine.setSize = function (width, height) {
      var cs = this.canvas.style;
      this.width = width;
      this.height = height;
      width == +width && (width += "px");
      height == +height && (height += "px");
      cs.width = width;
      cs.height = height;
      cs.clip = "rect(0 " + width + " " + height + " 0)";
      if (this._viewBox) {
          R._engine.setViewBox.apply(this, this._viewBox);
      }
      return this;
  };
  R._engine.setViewBox = function (x, y, w, h, fit) {
      R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
      var width = this.width,
          height = this.height,
          size = 1 / mmax(w / width, h / height),
          H, W;
      if (fit) {
          H = height / h;
          W = width / w;
          if (w * H < width) {
              x -= (width - w * H) / 2 / H;
          }
          if (h * W < height) {
              y -= (height - h * W) / 2 / W;
          }
      }
      this._viewBox = [x, y, w, h, !!fit];
      this._viewBoxShift = {
          dx: -x,
          dy: -y,
          scale: size
      };
      this.forEach(function (el) {
          el.transform("...");
      });
      return this;
  };
  var createNode;
  R._engine.initWin = function (win) {
          var doc = win.document;
          doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
          try {
              !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
              createNode = function (tagName) {
                  return doc.createElement('<rvml:' + tagName + ' class="rvml">');
              };
          } catch (e) {
              createNode = function (tagName) {
                  return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
              };
          }
      };
  R._engine.initWin(R._g.win);
  R._engine.create = function () {
      var con = R._getContainer.apply(0, arguments),
          container = con.container,
          height = con.height,
          s,
          width = con.width,
          x = con.x,
          y = con.y;
      if (!container) {
          throw new Error("VML container not found.");
      }
      var res = new R._Paper,
          c = res.canvas = R._g.doc.createElement("div"),
          cs = c.style;
      x = x || 0;
      y = y || 0;
      width = width || 512;
      height = height || 342;
      res.width = width;
      res.height = height;
      width == +width && (width += "px");
      height == +height && (height += "px");
      res.coordsize = zoom * 1e3 + S + zoom * 1e3;
      res.coordorigin = "0 0";
      res.span = R._g.doc.createElement("span");
      res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
      c.appendChild(res.span);
      cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
      if (container == 1) {
          R._g.doc.body.appendChild(c);
          cs.left = x + "px";
          cs.top = y + "px";
          cs.position = "absolute";
      } else {
          if (container.firstChild) {
              container.insertBefore(c, container.firstChild);
          } else {
              container.appendChild(c);
          }
      }
      res.renderfix = function () {};
      return res;
  };
  R.prototype.clear = function () {
      R.eve("raphael.clear", this);
      this.canvas.innerHTML = E;
      this.span = R._g.doc.createElement("span");
      this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
      this.canvas.appendChild(this.span);
      this.bottom = this.top = null;
  };
  R.prototype.remove = function () {
      R.eve("raphael.remove", this);
      this.canvas.parentNode.removeChild(this.canvas);
      for (var i in this) {
          this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
      }
      return true;
  };

  var setproto = R.st;
  for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
      setproto[method] = (function (methodname) {
          return function () {
              var arg = arguments;
              return this.forEach(function (el) {
                  el[methodname].apply(el, arg);
              });
          };
      })(method);
  }
}(window.Raphael);
;/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var f=a.commonAncestorContainer;if(e!==f&&t!==f||i.contains(n))return p(f)?f:r(f);var l=s(e);return l.host?d(l.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function l(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return _(t['offset'+e],o['client'+e],o['offset'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=window.document.body,t=window.document.documentElement,o=ie()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,f=e.offsetWidth-s,m=e.offsetHeight-d;if(f||m){var g=t(e);f-=l(g,'x'),m-=l(g,'y'),r.width-=f,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),l=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],h=c({top:p.top-s.top-l,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];h.top-=l-u,h.bottom-=l-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=f(h,o)),h}function b(e){var t=window.document.documentElement,o=u(e,t),i=_(t.clientWidth,window.innerWidth||0),n=_(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var f=u(a,s);if('HTML'===a.nodeName&&!y(s)){var l=h(),m=l.height,c=l.width;p.top+=f.top-f.marginTop,p.bottom=m+f.top,p.left+=f.left-f.marginLeft,p.right=c+f.left}else p=f}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function v(e){var t=e.width,o=e.height;return t*o}function E(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:v(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),f=0<a.length?a[0].key:d[0].key,l=e.split('-')[1];return f+(l?'-'+l:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function D(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function P(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=P(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?_(document.documentElement.clientHeight,window.innerHeight||0):_(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}for(var z=Math.min,V=Math.floor,_=Math.max,X=['native code','[object MutationObserverConstructor]'],Q=function(e){return X.some(function(t){return-1<(e||'').toString().indexOf(t)})},J='undefined'!=typeof window,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(J&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=J&&Q(window.MutationObserver),oe=te?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},le=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return D.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return le.Utils=('undefined'==typeof window?global:window).PopperUtils,le.placements=de,le.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',f={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,f[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=_(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=z(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=V,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var o=t.element;if('string'==typeof o){if(o=e.instance.popper.querySelector(o),!o)return e;}else if(!e.instance.popper.contains(o))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],n=e.offsets,r=n.popper,p=n.reference,s=-1!==['left','right'].indexOf(i),d=s?'height':'width',a=s?'top':'left',f=s?'left':'top',l=s?'bottom':'right',m=O(o)[d];p[l]-m<r[a]&&(e.offsets.popper[a]-=r[a]-(p[l]-m)),p[a]+m>r[l]&&(e.offsets.popper[a]+=p[a]+m-r[l]);var h=p[a]+p[d]/2-m/2,g=h-c(e.offsets.popper)[a];return g=_(z(r[d]-m,g),0),e.arrowElement=o,e.offsets.arrow={},e.offsets.arrow[a]=Math.round(g),e.offsets.arrow[f]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,f=e.offsets.reference,l=V,m='left'===i&&l(a.right)>l(f.left)||'right'===i&&l(a.left)<l(f.right)||'top'===i&&l(a.bottom)>l(f.top)||'bottom'===i&&l(a.top)<l(f.bottom),h=l(a.left)<l(o.left),c=l(a.right)>l(o.right),g=l(a.top)<l(o.top),u=l(a.bottom)>l(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[t]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,f=r(e.instance.popper),l=g(f),m={position:n.position},h={left:V(n.left),top:V(n.top),bottom:V(n.bottom),right:V(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==c?-l.height+h.bottom:h.top,s='right'==u?-l.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==u?-1:1;m[c]=d*y,m[u]=s*w,m.willChange=c+', '+u}var v={"x-placement":e.placement};return e.attributes=se({},v,e.attributes),e.styles=se({},m,e.styles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.offsets.arrow&&U(e.arrowElement,e.offsets.arrow),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=E(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},le});

;/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.PerfectScrollbar=e()}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function r(t,e){if(!v)throw new Error("No element matching method supported");return v.call(t,e)}function l(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function n(t,e){return Array.prototype.filter.call(t.children,function(t){return r(t,e)})}function o(t,e){var i=t.element.classList,r=m.state.scrolling(e);i.contains(r)?clearTimeout(Y[e]):i.add(r)}function s(t,e){Y[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){o(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,r,l){var n=i[0],o=i[1],s=i[2],h=i[3],u=i[4],d=i[5];void 0===r&&(r=!0),void 0===l&&(l=!1);var f=t.element;t.reach[h]=null,f[s]<1&&(t.reach[h]="start"),f[s]>t[n]-t[o]-1&&(t.reach[h]="end"),e&&(f.dispatchEvent(c("ps-scroll-"+h)),e<0?f.dispatchEvent(c("ps-scroll-"+u)):e>0&&f.dispatchEvent(c("ps-scroll-"+d)),r&&a(t,h)),t.reach[h]&&(e||l)&&f.dispatchEvent(c("ps-"+h+"-reach-"+t.reach[h]))}function u(t){return parseInt(t,10)||0}function d(t){return r(t,"input,[contenteditable]")||r(t,"select,[contenteditable]")||r(t,"textarea,[contenteditable]")||r(t,"button,[contenteditable]")}function f(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function p(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var r={width:i.railXWidth},l=Math.floor(t.scrollTop);i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:r.left=t.scrollLeft,i.isScrollbarXUsingBottom?r.bottom=i.scrollbarXBottom-l:r.top=i.scrollbarXTop+l,e(i.scrollbarXRail,r);var n={top:l,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?n.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:n.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:n.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,n),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){b[d]=g+Y*(e[a]-v),o(t,f),R(t),e.stopPropagation(),e.preventDefault()}function r(){s(t,f),t[p].classList.remove(m.state.clicking),t.event.unbind(t.ownerDocument,"mousemove",i)}var l=e[0],n=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],f=e[7],p=e[8],b=t.element,g=null,v=null,Y=null;t.event.bind(t[h],"mousedown",function(e){g=b[d],v=e[a],Y=(t[n]-t[l])/(t[c]-t[u]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",r),t[p].classList.add(m.state.clicking),e.stopPropagation(),e.preventDefault()})}var v="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),m={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},Y={x:null,y:null},X=function(t){this.element=t,this.handlers={}},w={isEmpty:{configurable:!0}};X.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},X.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},X.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},w.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(X.prototype,w);var y=function(){this.eventElements=[]};y.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new X(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},y.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},y.prototype.once=function(t,e,i){var r=this.eventElement(t),l=function(t){r.unbind(e,l),i(t)};r.bind(e,l)};var W=function(t,e,i,r,l){void 0===r&&(r=!0),void 0===l&&(l=!1);var n;if("top"===e)n=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");n=["contentWidth","containerWidth","scrollLeft","x","left","right"]}h(t,i,n,r,l)},L={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},R=function(t){var e=t.element,i=Math.floor(e.scrollTop);t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(n(e,m.element.rail("x")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(n(e,m.element.rail("y")).forEach(function(t){return l(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=p(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=p(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=0),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)},T={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=i*t.containerHeight,R(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=i*t.containerWidth,R(t),e.stopPropagation()})},"drag-thumb":function(t){g(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),g(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){function e(e,r){var l=Math.floor(i.scrollTop);if(0===e){if(!t.scrollbarYActive)return!1;if(0===l&&r>0||l>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var n=i.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===n&&e<0||n>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,l=function(){return r(i,":hover")},n=function(){return r(t.scrollbarX,":focus")||r(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(r){if(!(r.isDefaultPrevented&&r.isDefaultPrevented()||r.defaultPrevented)&&(l()||n())){var o=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(o){if("IFRAME"===o.tagName)o=o.contentDocument.activeElement;else for(;o.shadowRoot;)o=o.shadowRoot.activeElement;if(d(o))return}var s=0,a=0;switch(r.which){case 37:s=r.metaKey?-t.contentWidth:r.altKey?-t.containerWidth:-30;break;case 38:a=r.metaKey?t.contentHeight:r.altKey?t.containerHeight:30;break;case 39:s=r.metaKey?t.contentWidth:r.altKey?t.containerWidth:30;break;case 40:a=r.metaKey?-t.contentHeight:r.altKey?-t.containerHeight:-30;break;case 32:a=r.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(i.scrollTop-=a,i.scrollLeft+=s,R(t),e(s,a)&&r.preventDefault())}})},wheel:function(e){function i(t,i){var r=Math.floor(o.scrollTop),l=0===o.scrollTop,n=r+o.offsetHeight===o.scrollHeight,s=0===o.scrollLeft,a=o.scrollLeft+o.offsetWidth===o.scrollWidth;return!(Math.abs(i)>Math.abs(t)?l||n:s||a)||!e.settings.wheelPropagation}function r(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function l(e,i,r){if(!L.isWebKit&&o.querySelector("select:focus"))return!0;if(!o.contains(e))return!1;for(var l=e;l&&l!==o;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&!(0===l.scrollTop&&r>0||l.scrollTop===s&&r<0))return!0;var a=l.scrollWidth-l.clientWidth;if(a>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===a&&i>0))return!0}l=l.parentNode}return!1}function n(t){var n=r(t),s=n[0],a=n[1];if(!l(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?o.scrollTop-=a*e.settings.wheelSpeed:o.scrollTop+=s*e.settings.wheelSpeed,c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?o.scrollLeft+=s*e.settings.wheelSpeed:o.scrollLeft-=a*e.settings.wheelSpeed,c=!0):(o.scrollTop-=a*e.settings.wheelSpeed,o.scrollLeft+=s*e.settings.wheelSpeed),R(e),(c=c||i(s,a))&&!t.ctrlKey&&(t.stopPropagation(),t.preventDefault())}}var o=e.element;void 0!==window.onwheel?e.event.bind(o,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(o,"mousewheel",n)},touch:function(e){function i(t,i){var r=Math.floor(h.scrollTop),l=h.scrollLeft,n=Math.abs(t),o=Math.abs(i);if(o>n){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&L.isChrome}else if(n>o&&(t<0&&l===e.contentWidth-e.containerWidth||t>0&&0===l))return!0;return!0}function r(t,i){h.scrollTop-=i,h.scrollLeft-=t,R(e)}function l(t){return t.targetTouches?t.targetTouches[0]:t}function n(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function o(t){if(n(t)){var e=l(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==p&&clearInterval(p)}}function s(e,i,r){if(!h.contains(e))return!1;for(var l=e;l&&l!==h;){if(l.classList.contains(m.element.consuming))return!0;var n=t(l);if([n.overflow,n.overflowX,n.overflowY].join("").match(/(scroll|auto)/)){var o=l.scrollHeight-l.clientHeight;if(o>0&&!(0===l.scrollTop&&r>0||l.scrollTop===o&&r<0))return!0;var s=l.scrollLeft-l.clientWidth;if(s>0&&!(0===l.scrollLeft&&i<0||l.scrollLeft===s&&i>0))return!0}l=l.parentNode}return!1}function a(t){if(n(t)){var e=l(t),o={pageX:e.pageX,pageY:e.pageY},a=o.pageX-u.pageX,c=o.pageY-u.pageY;if(s(t.target,a,c))return;r(a,c),u=o;var h=(new Date).getTime(),p=h-d;p>0&&(f.x=a/p,f.y=c/p,d=h),i(a,c)&&t.preventDefault()}}function c(){e.settings.swipeEasing&&(clearInterval(p),p=setInterval(function(){e.isInitialized?clearInterval(p):f.x||f.y?Math.abs(f.x)<.01&&Math.abs(f.y)<.01?clearInterval(p):(r(30*f.x,30*f.y),f.x*=.8,f.y*=.8):clearInterval(p)},10))}if(L.supportsTouch||L.supportsIePointer){var h=e.element,u={},d=0,f={},p=null;L.supportsTouch?(e.event.bind(h,"touchstart",o),e.event.bind(h,"touchmove",a),e.event.bind(h,"touchend",c)):L.supportsIePointer&&(window.PointerEvent?(e.event.bind(h,"pointerdown",o),e.event.bind(h,"pointermove",a),e.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(e.event.bind(h,"MSPointerDown",o),e.event.bind(h,"MSPointerMove",a),e.event.bind(h,"MSPointerUp",c)))}}},H=function(r,l){var n=this;if(void 0===l&&(l={}),"string"==typeof r&&(r=document.querySelector(r)),!r||!r.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=r,r.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1};for(var o in l)n.settings[o]=l[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return r.classList.add(m.state.focus)},a=function(){return r.classList.remove(m.state.focus)};this.isRtl="rtl"===t(r).direction,this.isNegativeScroll=function(){var t=r.scrollLeft,e=null;return r.scrollLeft=-1,e=r.scrollLeft<0,r.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?r.scrollWidth-r.clientWidth:0,this.event=new y,this.ownerDocument=r.ownerDocument||document,this.scrollbarXRail=i(m.element.rail("x")),r.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail("y")),r.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?f(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:r.scrollLeft<=0?"start":r.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:r.scrollTop<=0?"start":r.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return T[t](n)}),this.lastScrollTop=Math.floor(r.scrollTop),this.lastScrollLeft=r.scrollLeft,this.event.bind(this.element,"scroll",function(t){return n.onScroll(t)}),R(this)};return H.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),R(this),W(this,"top",0,!1,!0),W(this,"left",0,!1,!0),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},H.prototype.onScroll=function(t){this.isAlive&&(R(this),W(this,"top",this.element.scrollTop-this.lastScrollTop),W(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},H.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),l(this.scrollbarX),l(this.scrollbarY),l(this.scrollbarXRail),l(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},H.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},H});

;var sidebar_mini_active = false;

var $html = $('html');

$(document).on('click', '.navbar-toggle', function () {
    var $toggle = $(this);

    if (blackDashboard.misc.navbar_menu_visible == 1) {
        $html.removeClass('nav-open');
        blackDashboard.misc.navbar_menu_visible = 0;
        setTimeout(function () {
            $toggle.removeClass('toggled');
            $('.bodyClick').remove();
        }, 550);

    } else {
        setTimeout(function () {
            $toggle.addClass('toggled');
        }, 580);

        var div = '<div class="bodyClick"></div>';
        $(div).appendTo('body').click(function () {
            $html.removeClass('nav-open');
            blackDashboard.misc.navbar_menu_visible = 0;
            setTimeout(function () {
                $toggle.removeClass('toggled');
                $('.bodyClick').remove();
            }, 550);
        });

        $html.addClass('nav-open');
        blackDashboard.misc.navbar_menu_visible = 1;
    }
});

blackDashboard = {
    misc: {
        navbar_menu_visible: 0
    },

    initMinimizeSidebar: function () {
        if ($('.sidebar-mini').length != 0) {
            sidebar_mini_active = true;
        }

        $('#minimizeSidebar').click(function () {
            var $btn = $(this);

            if (sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                sidebar_mini_active = false;
                blackDashboard.showSidebarMessage('Sidebar mini deactivated...');
            } else {
                $('body').addClass('sidebar-mini');
                sidebar_mini_active = true;
                blackDashboard.showSidebarMessage('Sidebar mini activated...');
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    },

    showSidebarMessage: function (message) {
        try {
            $.notify({
                icon: "tim-icons ui-1_bell-53",
                message: message
            }, {
                type: 'info',
                timer: 4000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        } catch (e) {
            console.log('Notify library is missing, please make sure you have the notifications library added.');
        }
    }
};
;
//# sourceMappingURL=scripts.js.map