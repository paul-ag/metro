"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,a,n,o,i,s=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?u+"":"null";case"boolean":case"null":return u+"";case"object":if(!u)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,r=0;o>r;r+=1)i[r]=str(r,u)||"null";return n=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,n}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;o>r;r+=1)"string"==typeof rep[r]&&(a=rep[r],n=str(a,u),n&&i.push(quote(a)+(gap?": ":":")+n));else for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n=str(a,u),n&&i.push(quote(a)+(gap?": ":":")+n));return n=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var a;if(gap="",indent="","number"==typeof r)for(a=0;r>a;a+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,a,n=e[t];if(n&&"object"==typeof n)for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a=walk(n,r),void 0!==a?n[r]=a:delete n[r]);return reviver.call(e,t,n)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"use strict";var r=e.History=e.History||{};if(r.Adapter!==void 0)throw Error("History.js Adapter has already been loaded...");r.Adapter={handlers:{},_uid:1,uid:function(e){return e._uid||(e._uid=r.Adapter._uid++)},bind:function(e,t,a){var n=r.Adapter.uid(e);r.Adapter.handlers[n]=r.Adapter.handlers[n]||{},r.Adapter.handlers[n][t]=r.Adapter.handlers[n][t]||[],r.Adapter.handlers[n][t].push(a),e["on"+t]=function(e,t){return function(a){r.Adapter.trigger(e,t,a)}}(e,t)},trigger:function(e,t,a){a=a||{};var n,o,i=r.Adapter.uid(e);for(r.Adapter.handlers[i]=r.Adapter.handlers[i]||{},r.Adapter.handlers[i][t]=r.Adapter.handlers[i][t]||[],n=0,o=r.Adapter.handlers[i][t].length;o>n;++n)r.Adapter.handlers[i][t][n].apply(this,[a])},extractEventData:function(e,r){var a=r&&r[e]||t;return a},onDomLoad:function(t){var r=e.setTimeout(function(){t()},2e3);e.onload=function(){clearTimeout(r),t()}}},r.init!==void 0&&r.init()}(window),function(e){"use strict";var t=e.document,r=e.setTimeout||r,a=e.clearTimeout||a,n=e.setInterval||n,o=e.History=e.History||{};if(o.initHtml4!==void 0)throw Error("History.js HTML4 Support has already been loaded...");o.initHtml4=function(){return o.initHtml4.initialized!==void 0?!1:(o.initHtml4.initialized=!0,o.enabled=!0,o.savedHashes=[],o.isLastHash=function(e){var t,r=o.getHashByIndex();return t=e===r},o.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},o.saveHash=function(e){return o.isLastHash(e)?!1:(o.savedHashes.push(e),!0)},o.getHashByIndex=function(e){var t=null;return t=e===void 0?o.savedHashes[o.savedHashes.length-1]:0>e?o.savedHashes[o.savedHashes.length+e]:o.savedHashes[e]},o.discardedHashes={},o.discardedStates={},o.discardState=function(e,t,r){var a,n=o.getHashByState(e);return a={discardedState:e,backState:r,forwardState:t},o.discardedStates[n]=a,!0},o.discardHash=function(e,t,r){var a={discardedHash:e,backState:r,forwardState:t};return o.discardedHashes[e]=a,!0},o.discardedState=function(e){var t,r=o.getHashByState(e);return t=o.discardedStates[r]||!1},o.discardedHash=function(e){var t=o.discardedHashes[e]||!1;return t},o.recycleState=function(e){var t=o.getHashByState(e);return o.discardedState(e)&&delete o.discardedStates[t],!0},o.emulated.hashChange&&(o.hashChangeInit=function(){o.checkerFunction=null;var r,a,i,s,u="",l=Boolean(o.getHash());return o.isInternetExplorer()?(r="historyjs-iframe",a=t.createElement("iframe"),a.setAttribute("id",r),a.setAttribute("src","#"),a.style.display="none",t.body.appendChild(a),a.contentWindow.document.open(),a.contentWindow.document.close(),i="",s=!1,o.checkerFunction=function(){if(s)return!1;s=!0;var t=o.getHash(),r=o.getHash(a.contentWindow.document);return t!==u?(u=t,r!==t&&(i=r=t,a.contentWindow.document.open(),a.contentWindow.document.close(),a.contentWindow.document.location.hash=o.escapeHash(t)),o.Adapter.trigger(e,"hashchange")):r!==i&&(i=r,l&&""===r?o.back():o.setHash(r,!1)),s=!1,!0}):o.checkerFunction=function(){var t=o.getHash()||"";return t!==u&&(u=t,o.Adapter.trigger(e,"hashchange")),!0},o.intervalList.push(n(o.checkerFunction,o.options.hashChangeInterval)),!0},o.Adapter.onDomLoad(o.hashChangeInit)),o.emulated.pushState&&(o.onHashChange=function(t){var r,a=t&&t.newURL||o.getLocationHref(),n=o.getHashByUrl(a),i=null,s=null;return o.isLastHash(n)?(o.busy(!1),!1):(o.doubleCheckComplete(),o.saveHash(n),n&&o.isTraditionalAnchor(n)?(o.Adapter.trigger(e,"anchorchange"),o.busy(!1),!1):(i=o.extractState(o.getFullUrl(n||o.getLocationHref()),!0),o.isLastSavedState(i)?(o.busy(!1),!1):(s=o.getHashByState(i),r=o.discardedState(i),r?(o.getHashByIndex(-2)===o.getHashByState(r.forwardState)?o.back(!1):o.forward(!1),!1):(o.pushState(i.data,i.title,encodeURI(i.url),!1),!0))))},o.Adapter.bind(e,"hashchange",o.onHashChange),o.pushState=function(t,r,a,n){if(a=encodeURI(a).replace(/%25/g,"%"),o.getHashByUrl(a))throw Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(n!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.pushState,args:arguments,queue:n}),!1;o.busy(!0);var i=o.createStateObject(t,r,a),s=o.getHashByState(i),u=o.getState(!1),l=o.getHashByState(u),c=o.getHash(),d=o.expectedStateId==i.id;return o.storeState(i),o.expectedStateId=i.id,o.recycleState(i),o.setTitle(i),s===l?(o.busy(!1),!1):(o.saveState(i),d||o.Adapter.trigger(e,"statechange"),!o.isHashEqual(s,c)&&!o.isHashEqual(s,o.getShortUrl(o.getLocationHref()))&&o.setHash(s,!1),o.busy(!1),!0)},o.replaceState=function(t,r,a,n){if(a=encodeURI(a).replace(/%25/g,"%"),o.getHashByUrl(a))throw Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(n!==!1&&o.busy())return o.pushQueue({scope:o,callback:o.replaceState,args:arguments,queue:n}),!1;o.busy(!0);var i=o.createStateObject(t,r,a),s=o.getHashByState(i),u=o.getState(!1),l=o.getHashByState(u),c=o.getStateByIndex(-2);return o.discardState(u,i,c),s===l?(o.storeState(i),o.expectedStateId=i.id,o.recycleState(i),o.setTitle(i),o.saveState(i),o.Adapter.trigger(e,"statechange"),o.busy(!1)):o.pushState(i.data,i.title,i.url,!1),!0}),o.emulated.pushState&&o.getHash()&&!o.emulated.hashChange&&o.Adapter.onDomLoad(function(){o.Adapter.trigger(e,"hashchange")}),void 0)},o.init!==void 0&&o.init()}(window),function(e,t){"use strict";var r=e.console||t,a=e.document,n=e.navigator,o=!1,i=e.setTimeout,s=e.clearTimeout,u=e.setInterval,l=e.clearInterval,c=e.JSON,d=e.alert,h=e.History=e.History||{},p=e.history;try{o=e.sessionStorage,o.setItem("TEST","1"),o.removeItem("TEST")}catch(f){o=!1}if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,h.init!==void 0)throw Error("History.js Core has already been loaded...");h.init=function(){return h.Adapter===void 0?!1:(h.initCore!==void 0&&h.initCore(),h.initHtml4!==void 0&&h.initHtml4(),!0)},h.initCore=function(){if(h.initCore.initialized!==void 0)return!1;if(h.initCore.initialized=!0,h.options=h.options||{},h.options.hashChangeInterval=h.options.hashChangeInterval||100,h.options.safariPollInterval=h.options.safariPollInterval||500,h.options.doubleCheckInterval=h.options.doubleCheckInterval||500,h.options.disableSuid=h.options.disableSuid||!1,h.options.storeInterval=h.options.storeInterval||1e3,h.options.busyDelay=h.options.busyDelay||250,h.options.debug=h.options.debug||!1,h.options.initialTitle=h.options.initialTitle||a.title,h.options.html4Mode=h.options.html4Mode||!1,h.options.delayInit=h.options.delayInit||!1,h.intervalList=[],h.clearAllIntervals=function(){var e,t=h.intervalList;if(t!==void 0&&null!==t){for(e=0;t.length>e;e++)l(t[e]);h.intervalList=null}},h.debug=function(){(h.options.debug||!1)&&h.log.apply(h,arguments)},h.log=function(){var e,t,n,o,i,s=r!==void 0&&r.log!==void 0&&r.log.apply!==void 0,u=a.getElementById("log");for(s?(o=Array.prototype.slice.call(arguments),e=o.shift(),r.debug!==void 0?r.debug.apply(r,[e,o]):r.log.apply(r,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length;n>t;++t){if(i=arguments[t],"object"==typeof i&&c!==void 0)try{i=c.stringify(i)}catch(l){}e+="\n"+i+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):s||d(e),!0},h.getInternetExplorerMajorVersion=function(){var e=h.getInternetExplorerMajorVersion.cached=h.getInternetExplorerMajorVersion.cached!==void 0?h.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=a.createElement("div"),r=t.getElementsByTagName("i");(t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&r[0];);return e>4?e:!1}();return e},h.isInternetExplorer=function(){var e=h.isInternetExplorer.cached=h.isInternetExplorer.cached!==void 0?h.isInternetExplorer.cached:Boolean(h.getInternetExplorerMajorVersion());return e},h.emulated=h.options.html4Mode?{pushState:!0,hashChange:!0}:{pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in a)||h.isInternetExplorer()&&8>h.getInternetExplorerMajorVersion())},h.enabled=!h.emulated.pushState,h.bugs={setHash:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!h.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(h.isInternetExplorer()&&8>h.getInternetExplorerMajorVersion()),hashEscape:Boolean(h.isInternetExplorer()&&7>h.getInternetExplorerMajorVersion())},h.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},h.cloneObject=function(e){var t,r;return e?(t=c.stringify(e),r=c.parse(t)):r={},r},h.getRootUrl=function(){var e=a.location.protocol+"//"+(a.location.hostname||a.location.host);return a.location.port&&(e+=":"+a.location.port),e+="/"},h.getBaseHref=function(){var e=a.getElementsByTagName("base"),t=null,r="";return 1===e.length&&(t=e[0],r=t.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},h.getBaseUrl=function(){var e=h.getBaseHref()||h.getBasePageUrl()||h.getRootUrl();return e},h.getPageUrl=function(){var e,t=h.getState(!1,!1),r=(t||{}).url||h.getLocationHref();return e=r.replace(/\/+$/,"").replace(/[^\/]+$/,function(e){return/\./.test(e)?e:e+"/"})},h.getBasePageUrl=function(){var e=h.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/";return e},h.getFullUrl=function(e,t){var r=e,a=e.substring(0,1);return t=t===void 0?!0:t,/[a-z]+\:\/\//.test(e)||(r="/"===a?h.getRootUrl()+e.replace(/^\/+/,""):"#"===a?h.getPageUrl().replace(/#.*/,"")+e:"?"===a?h.getPageUrl().replace(/[\?#].*/,"")+e:t?h.getBaseUrl()+e.replace(/^(\.\/)+/,""):h.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},h.getShortUrl=function(e){var t=e,r=h.getBaseUrl(),a=h.getRootUrl();return h.emulated.pushState&&(t=t.replace(r,"")),t=t.replace(a,"/"),h.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},h.getLocationHref=function(e){return e=e||a,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:-1==e.URL.indexOf("#")&&-1!=e.location.href.indexOf("#")?e.location.href:e.URL||e.location.href},h.store={},h.idToState=h.idToState||{},h.stateToId=h.stateToId||{},h.urlToId=h.urlToId||{},h.storedStates=h.storedStates||[],h.savedStates=h.savedStates||[],h.normalizeStore=function(){h.store.idToState=h.store.idToState||{},h.store.urlToId=h.store.urlToId||{},h.store.stateToId=h.store.stateToId||{}},h.getState=function(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);var r=h.getLastSavedState();return!r&&t&&(r=h.createStateObject()),e&&(r=h.cloneObject(r),r.url=r.cleanUrl||r.url),r},h.getIdByState=function(e){var t,r=h.extractId(e.url);if(!r)if(t=h.getStateString(e),h.stateToId[t]!==void 0)r=h.stateToId[t];else if(h.store.stateToId[t]!==void 0)r=h.store.stateToId[t];else{for(;r=(new Date).getTime()+(Math.random()+"").replace(/\D/g,""),h.idToState[r]!==void 0||h.store.idToState[r]!==void 0;);h.stateToId[t]=r,h.idToState[r]=e}return r},h.normalizeState=function(e){var t,r;return e&&"object"==typeof e||(e={}),e.normalized!==void 0?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=h.getFullUrl(e.url?e.url:h.getLocationHref()),t.hash=h.getShortUrl(t.url),t.data=h.cloneObject(e.data),t.id=h.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,r=!h.isEmptyObject(t.data),(t.title||r)&&h.options.disableSuid!==!0&&(t.hash=h.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=h.getFullUrl(t.hash),(h.emulated.pushState||h.bugs.safariPoll)&&h.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},h.createStateObject=function(e,t,r){var a={data:e,title:t,url:r};return a=h.normalizeState(a)},h.getStateById=function(e){e+="";var r=h.idToState[e]||h.store.idToState[e]||t;return r},h.getStateString=function(e){var t,r,a;return t=h.normalizeState(e),r={data:t.data,title:e.title,url:e.url},a=c.stringify(r)},h.getStateId=function(e){var t,r;return t=h.normalizeState(e),r=t.id},h.getHashByState=function(e){var t,r;return t=h.normalizeState(e),r=t.hash},h.extractId=function(e){var t,r,a,n;return n=-1!=e.indexOf("#")?e.split("#")[0]:e,r=/(.*)\&_suid=([0-9]+)$/.exec(n),a=r?r[1]||e:e,t=r?(r[2]||"")+"":"",t||!1},h.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e);return t},h.extractState=function(e,t){var r,a,n=null;return t=t||!1,r=h.extractId(e),r&&(n=h.getStateById(r)),n||(a=h.getFullUrl(e),r=h.getIdByUrl(a)||!1,r&&(n=h.getStateById(r)),!n&&t&&!h.isTraditionalAnchor(e)&&(n=h.createStateObject(null,null,a))),n},h.getIdByUrl=function(e){var r=h.urlToId[e]||h.store.urlToId[e]||t;return r},h.getLastSavedState=function(){return h.savedStates[h.savedStates.length-1]||t},h.getLastStoredState=function(){return h.storedStates[h.storedStates.length-1]||t},h.hasUrlDuplicate=function(e){var t,r=!1;return t=h.extractState(e.url),r=t&&t.id!==e.id},h.storeState=function(e){return h.urlToId[e.url]=e.id,h.storedStates.push(h.cloneObject(e)),e},h.isLastSavedState=function(e){var t,r,a,n=!1;return h.savedStates.length&&(t=e.id,r=h.getLastSavedState(),a=r.id,n=t===a),n},h.saveState=function(e){return h.isLastSavedState(e)?!1:(h.savedStates.push(h.cloneObject(e)),!0)},h.getStateByIndex=function(e){var t=null;return t=e===void 0?h.savedStates[h.savedStates.length-1]:0>e?h.savedStates[h.savedStates.length+e]:h.savedStates[e]},h.getCurrentIndex=function(){var e=null;return e=1>h.savedStates.length?0:h.savedStates.length-1},h.getHash=function(e){var t,r=h.getLocationHref(e);return t=h.getHashByUrl(r)},h.unescapeHash=function(e){var t=h.normalizeHash(e);return t=decodeURIComponent(t)},h.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"");return t},h.setHash=function(e,t){var r,n;return t!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.setHash,args:arguments,queue:t}),!1):(h.busy(!0),r=h.extractState(e,!0),r&&!h.emulated.pushState?h.pushState(r.data,r.title,r.url,!1):h.getHash()!==e&&(h.bugs.setHash?(n=h.getPageUrl(),h.pushState(null,null,n+"#"+e,!1)):a.location.hash=e),h)},h.escapeHash=function(t){var r=h.normalizeHash(t);return r=e.encodeURIComponent(r),h.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},h.getHashByUrl=function(e){var t=(e+"").replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=h.unescapeHash(t)},h.setTitle=function(e){var t,r=e.title;r||(t=h.getStateByIndex(0),t&&t.url===e.url&&(r=t.title||h.options.initialTitle));try{a.getElementsByTagName("title")[0].innerHTML=r.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(n){}return a.title=r,h},h.queues=[],h.busy=function(e){if(e!==void 0?h.busy.flag=e:h.busy.flag===void 0&&(h.busy.flag=!1),!h.busy.flag){s(h.busy.timeout);var t=function(){var e,r,a;if(!h.busy.flag)for(e=h.queues.length-1;e>=0;--e)r=h.queues[e],0!==r.length&&(a=r.shift(),h.fireQueueItem(a),h.busy.timeout=i(t,h.options.busyDelay))};h.busy.timeout=i(t,h.options.busyDelay)}return h.busy.flag},h.busy.flag=!1,h.fireQueueItem=function(e){return e.callback.apply(e.scope||h,e.args||[])},h.pushQueue=function(e){return h.queues[e.queue||0]=h.queues[e.queue||0]||[],h.queues[e.queue||0].push(e),h},h.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),t!==void 0&&(e.queue=t),h.busy()?h.pushQueue(e):h.fireQueueItem(e),h},h.clearQueue=function(){return h.busy.flag=!1,h.queues=[],h},h.stateChanged=!1,h.doubleChecker=!1,h.doubleCheckComplete=function(){return h.stateChanged=!0,h.doubleCheckClear(),h},h.doubleCheckClear=function(){return h.doubleChecker&&(s(h.doubleChecker),h.doubleChecker=!1),h},h.doubleCheck=function(e){return h.stateChanged=!1,h.doubleCheckClear(),h.bugs.ieDoubleCheck&&(h.doubleChecker=i(function(){return h.doubleCheckClear(),h.stateChanged||e(),!0},h.options.doubleCheckInterval)),h},h.safariStatePoll=function(){var t,r=h.extractState(h.getLocationHref());return h.isLastSavedState(r)?void 0:(t=r,t||(t=h.createStateObject()),h.Adapter.trigger(e,"popstate"),h)},h.back=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.back,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.back(!1)}),p.go(-1),!0)},h.forward=function(e){return e!==!1&&h.busy()?(h.pushQueue({scope:h,callback:h.forward,args:arguments,queue:e}),!1):(h.busy(!0),h.doubleCheck(function(){h.forward(!1)}),p.go(1),!0)},h.go=function(e,t){var r;if(e>0)for(r=1;e>=r;++r)h.forward(t);else{if(!(0>e))throw Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=e;--r)h.back(t)}return h},h.emulated.pushState){var f=function(){};h.pushState=h.pushState||f,h.replaceState=h.replaceState||f}else h.onPopState=function(t,r){var a,n,o=!1,i=!1;return h.doubleCheckComplete(),a=h.getHash(),a?(n=h.extractState(a||h.getLocationHref(),!0),n?h.replaceState(n.data,n.title,n.url,!1):(h.Adapter.trigger(e,"anchorchange"),h.busy(!1)),h.expectedStateId=!1,!1):(o=h.Adapter.extractEventData("state",t,r)||!1,i=o?h.getStateById(o):h.expectedStateId?h.getStateById(h.expectedStateId):h.extractState(h.getLocationHref()),i||(i=h.createStateObject(null,null,h.getLocationHref())),h.expectedStateId=!1,h.isLastSavedState(i)?(h.busy(!1),!1):(h.storeState(i),h.saveState(i),h.setTitle(i),h.Adapter.trigger(e,"statechange"),h.busy(!1),!0))},h.Adapter.bind(e,"popstate",h.onPopState),h.pushState=function(t,r,a,n){if(h.getHashByUrl(a)&&h.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.pushState,args:arguments,queue:n}),!1;h.busy(!0);var o=h.createStateObject(t,r,a);return h.isLastSavedState(o)?h.busy(!1):(h.storeState(o),h.expectedStateId=o.id,p.pushState(o.id,o.title,o.url),h.Adapter.trigger(e,"popstate")),!0},h.replaceState=function(t,r,a,n){if(h.getHashByUrl(a)&&h.emulated.pushState)throw Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(n!==!1&&h.busy())return h.pushQueue({scope:h,callback:h.replaceState,args:arguments,queue:n}),!1;h.busy(!0);var o=h.createStateObject(t,r,a);return h.isLastSavedState(o)?h.busy(!1):(h.storeState(o),h.expectedStateId=o.id,p.replaceState(o.id,o.title,o.url),h.Adapter.trigger(e,"popstate")),!0};if(o){try{h.store=c.parse(o.getItem("History.store"))||{}}catch(g){h.store={}}h.normalizeStore()}else h.store={},h.normalizeStore();h.Adapter.bind(e,"unload",h.clearAllIntervals),h.saveState(h.storeState(h.extractState(h.getLocationHref(),!0))),o&&(h.onUnload=function(){var e,t,r;try{e=c.parse(o.getItem("History.store"))||{}}catch(a){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in h.idToState)h.idToState.hasOwnProperty(t)&&(e.idToState[t]=h.idToState[t]);for(t in h.urlToId)h.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=h.urlToId[t]);for(t in h.stateToId)h.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=h.stateToId[t]);h.store=e,h.normalizeStore(),r=c.stringify(e);try{o.setItem("History.store",r)}catch(n){if(n.code!==DOMException.QUOTA_EXCEEDED_ERR)throw n;o.length&&(o.removeItem("History.store"),o.setItem("History.store",r))}},h.intervalList.push(u(h.onUnload,h.options.storeInterval)),h.Adapter.bind(e,"beforeunload",h.onUnload),h.Adapter.bind(e,"unload",h.onUnload)),h.emulated.pushState||(h.bugs.safariPoll&&h.intervalList.push(u(h.safariStatePoll,h.options.safariPollInterval)),("Apple Computer, Inc."===n.vendor||"Mozilla"===(n.appCodeName||""))&&(h.Adapter.bind(e,"hashchange",function(){h.Adapter.trigger(e,"popstate")}),h.getHash()&&h.Adapter.onDomLoad(function(){h.Adapter.trigger(e,"hashchange")})))},(!h.options||!h.options.delayInit)&&h.init()}(window);