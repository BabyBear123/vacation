(this["webpackJsonpvocation-frontend"]=this["webpackJsonpvocation-frontend"]||[]).push([[30],{1133:function(e,t,n){var r;e.exports=(r=n(0),function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function a(){y&&p&&(y=!1,p.length?d=p.concat(d):h=-1,d.length&&i())}function i(){if(!y){var e=o(a);y=!0;for(var t=d.length;t;){for(p=d,d=[];++h<t;)p&&p[h].run();h=-1,t=d.length}p=null,y=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,l,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,d=[],y=!1,h=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new u(e,t)),1!==d.length||y||o(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,a,i,u,c){if(n(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,a,i,u,c],f=0;(s=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var r=n(1);if("production"!==t.env.NODE_ENV){var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(e){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];o.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.containerStyles={position:"relative"},t.inputStyles={width:"100%"},t.buttonStyles={position:"absolute",top:"50%",right:"6px",marginTop:"-13px",padding:"4px 10px",background:"#e2e2e2",borderRadius:"2px",color:"#000",textAlign:"center",textDecoration:"none",WebkitUserSelect:"none",MozUserSelect:"none",userSelect:"none"}},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(12)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(11)()}).call(t,n(0))},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7),c=r(u),s=r(n(6)),l=n(5),f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=Array(a),u=0;u<a;u++)i[u]=arguments[u];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={passwordShown:!1,hasBeenFocused:!1},o(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"invokeCallbacks",value:function(e,t){var n=this.props,r=n.onShow,o=n.onHide,a=n.onToggle;a&&a(e),r&&t&&r(e),o&&!t&&o(e)}},{key:"focusVisibleInput",value:function(){(this.state.passwordShown?this.textInput:this.passwordInput).focus()}},{key:"componentWillUpdate",value:function(e,t){var n=this.state.passwordShown;t.passwordShown!==n&&this.invokeCallbacks(e.value,t.passwordShown)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,r=n.passwordShown;n.hasBeenFocused&&t.passwordShown!==r&&this.focusVisibleInput()}},{key:"togglePasswordMask",value:function(){this.setState({passwordShown:!this.state.passwordShown})}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,r=t.id,o=t.name,i=t.className,u=t.inputClassName,s=t.buttonClassName,f=t.placeholder,p=t.autoFocus,d=t.minLength,y=t.maxLength,h=t.onChange,v=t.onBlur,b=t.onKeyDown,m=t.showButtonContent,g=t.hideButtonContent,O=t.useVendorStyles,w=t.readOnly,j=t.disabled,k=t.required,x=this.state.passwordShown,_=O?l.containerStyles:{},E=O?l.inputStyles:{},S=O?l.buttonStyles:{};return c.default.createElement("div",{className:i,style:_},c.default.createElement("input",{type:"password",ref:function(t){return e.passwordInput=t},value:n,id:x?"_"+r:r,name:x?"":o,className:u,placeholder:f,autoFocus:p,minLength:d,maxLength:y,readOnly:w,disabled:j,required:k,style:a({},E,this.props.inputStyles,{display:x?"none":"block"}),onChange:h,onBlur:v,onKeyDown:b,onFocus:function(){return e.setState({hasBeenFocused:!0})}}),c.default.createElement("input",{type:"text",ref:function(t){return e.textInput=t},value:n,id:x?r:"_"+r,name:x?o:"",className:u,placeholder:f,minLength:d,maxLength:y,readOnly:w,disabled:j,required:k,style:a({},E,this.props.inputStyles,{display:x?"block":"none"}),onChange:h,onBlur:v,onKeyDown:b,onFocus:function(){return e.setState({hasBeenFocused:!0})}}),c.default.createElement("a",{href:"",className:s,style:a({},S,this.props.buttonStyles),onMouseDown:function(e){return e.preventDefault()},onClick:function(t){t.preventDefault(),e.togglePasswordMask()},tabIndex:-1},x?g||"Hide":m||"Show"))}}]),t}(u.Component);f.propTypes={value:s.default.any.isRequired,id:s.default.string,name:s.default.string,className:s.default.string,inputClassName:s.default.string,buttonClassName:s.default.string,placeholder:s.default.string,autoFocus:s.default.bool,minLength:s.default.number,maxLength:s.default.number,onChange:s.default.func,onBlur:s.default.func,onKeyDown:s.default.func,onShow:s.default.func,onHide:s.default.func,onToggle:s.default.func,useVendorStyles:s.default.bool,readOnly:s.default.bool,required:s.default.bool,disabled:s.default.bool,inputStyles:s.default.any,buttonStyles:s.default.any,showButtonContent:s.default.oneOfType([s.default.element,s.default.string]),hideButtonContent:s.default.oneOfType([s.default.element,s.default.string])},f.defaultProps={inputClassName:"",buttonClassName:"",placeholder:"",useVendorStyles:!0,onChange:function(){},onBlur:function(){},onKeyDown:function(){}},t.default=f,e.exports=t.default},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=r(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))a.call(n,l)&&(c[l]=n[l]);if(o){u=o(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(c[u[f]]=n[u[f]])}}return c}},function(e,t,n){"use strict";(function(t){if("production"!==t.env.NODE_ENV)var r=n(2),o=n(4),a=n(3),i={};e.exports=function(e,n,u,c,s){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{r("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",u,l,typeof e[l]),f=e[l](n,l,c,u,null,a)}catch(e){f=e}if(o(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",u,l,typeof f),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var p=s?s():"";o(!1,"Failed %s type: %s%s",u,f.message,null!=p?p:"")}}}}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(3);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(2),a=n(4),i=n(9),u=n(3),c=n(10);e.exports=function(e,n){function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function f(e){function r(r,s,f,p,d,y,h){if(p=p||g,y=y||f,h!==u)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+f;!i[v]&&c<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),i[v]=!0,c++)}return null==s[f]?r?new l(null===s[f]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,f,p,d,y)}if("production"!==t.env.NODE_ENV)var i={},c=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function p(e){return f((function(t,n,r,o,a,i){var u=t[n];return y(u)!==e?new l("Invalid "+o+" `"+a+"` of type `"+h(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function d(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(d);if(null===t||e(t))return!0;var n=function(e){var t=e&&(b&&e[b]||e[m]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!d(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!d(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function h(e){if(void 0===e||null===e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=h(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}var b="function"==typeof Symbol&&Symbol.iterator,m="@@iterator",g="<<anonymous>>",O={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:f(r.thatReturnsNull),arrayOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i))return new l("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<i.length;c++){var s=e(i,c,r,o,a+"["+c+"]",u);if(s instanceof Error)return s}return null}))},element:f((function(t,n,r,o,a){var i=t[n];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return f((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||g;return new l("Invalid "+o+" `"+a+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:g}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:f((function(e,t,n,r,o){return d(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var i=t[n],c=y(i);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in i)if(i.hasOwnProperty(s)){var f=e(i,s,r,o,a+"."+s,u);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(s(i,e[u]))return null;return new l("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")})):("production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!=typeof o)return a(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",v(o),n),r.thatReturnsNull}return f((function(t,n,r,o,a){for(var i=0;i<e.length;i++)if(null==(0,e[i])(t,n,r,o,a,u))return null;return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return f((function(t,n,r,o,a){var i=t[n],c=y(i);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var p=f(i,s,r,o,a+"."+s,u);if(p)return p}}return null}))},exact:function(e){return f((function(t,n,r,o,a){var c=t[n],s=y(c);if("object"!==s)return new l("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var f=i({},t[n],e);for(var p in f){var d=e[p];if(!d)return new l("Invalid "+o+" `"+a+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(c,p,r,o,a+"."+p,u);if(h)return h}return null}))}};return l.prototype=Error.prototype,O.checkPropTypes=c,O.PropTypes=O,O}}).call(t,n(0))}]))},1134:function(e,t,n){},1261:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(4),o=n(5),a=n(10),i=n(9),u=n(3),c=n(11),s=n(0),l=n.n(s),f=n(1133),p=n.n(f),d=n(87),y=n(15),h=(n(1134),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(i.a)(t).call(this,e))).state={public_api_key:"",secret_api_key:""},n.handleGenerateApiKeys=n.handleGenerateApiKeys.bind(Object(u.a)(n)),n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.getApiKey().then((function(t){t?e.setState({public_api_key:t.public_api_key,secret_api_key:t.secret_api_key}):y.a.showError("Get API key")}))}},{key:"handleGenerateApiKeys",value:function(e){var t=this;e.preventDefault(),d.a.generateApiKey().then((function(e){e?t.setState({public_api_key:e.public_api_key,secret_api_key:e.secret_api_key}):y.a.showError("Generate API key")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"aside-main-content"},l.a.createElement("div",{className:"side-cnt"},l.a.createElement("div",{className:"head-label"},l.a.createElement("h4",null,"API Keys")),l.a.createElement("div",{className:"aside-main-cn"},l.a.createElement("form",{onSubmit:this.handleGenerateApiKeys},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"public_api_key"},"Public Key:"),l.a.createElement(p.a,{id:"public-password",name:"password",placeholder:"Public API Key",readOnly:!0,value:this.state.public_api_key,buttonStyles:{marginTop:"-14px"}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"secret_api_key"},"Secret Key:"),l.a.createElement(p.a,{id:"secret-password",name:"password",placeholder:"Secret API Key",readOnly:!0,value:this.state.secret_api_key,buttonStyles:{marginTop:"-14px"}})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},this.state.public_api_key?"Re-":"","Generate")))))}}]),t}(l.a.PureComponent))},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(4),o=n(5),a=n(7),i=new(function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getContent",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/index"))}},{key:"getRoomList",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/getlistings"))}},{key:"getRoomData",value:function(e,t){return Object(a.d)("".concat(a.a,"/ba/api/set_baroomid?roomid=").concat(e,"&&ba_roomid=").concat(t))}},{key:"changeRoomState",value:function(e){return Object(a.e)("".concat(a.a,"/ajax/change_status_of_room"),e)}},{key:"getRoomReservation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?Object(a.d)("".concat(a.a,"/ajax/dashboard/my_reservations")+e):Object(a.d)("".concat(a.a,"/ajax/dashboard/my_reservations"))}},{key:"acceptReservation",value:function(e,t){return Object(a.e)("".concat(a.a,"/ajax/reservation/accept/").concat(e),t)}},{key:"declineReservation",value:function(e,t){return Object(a.e)("".concat(a.a,"/ajax/reservation/decline/").concat(e),t)}},{key:"getOldTripList",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/getOldTripsList"))}},{key:"geCurrTripList",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/getcurrentTripsList"))}},{key:"removeUserPhoneNubmer",value:function(e){return Object(a.e)("".concat(a.a,"/ajax/removeUserPhoneNumber"),e)}},{key:"saveUserProfile",value:function(e){return Object(a.e)("".concat(a.a,"/ajax/saveuserprofile"),e)}},{key:"uploadProfilePhoto",value:function(e){return Object(a.f)("".concat(a.a,"/ajax/profilepictureupload"),e)}},{key:"getVerification",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/getverifycation"))}},{key:"updateVerifyCode",value:function(e){return Object(a.e)("".concat(a.a,"/ajax/sendVerifyCode"),e)}},{key:"verifyPhoneNumber",value:function(e){return Object(a.e)("".concat(a.a,"/ajax/verifyPhoneNumber"),e)}},{key:"getBACredential",value:function(){return Object(a.d)("".concat(a.a,"/ba/account/get_ba_credential"))}},{key:"submitBAKeys",value:function(e){return Object(a.e)("".concat(a.a,"/ba/account/register"),e)}},{key:"updateBAKeys",value:function(){return Object(a.d)("".concat(a.a,"/ba/api/update"))}},{key:"getApiKey",value:function(){return Object(a.d)("".concat(a.a,"/ajax/dashboard/getapikeys"))}},{key:"generateApiKey",value:function(){return Object(a.e)("".concat(a.a,"/ajax/dashboard/generateapikeys"))}}]),e}())}}]);
//# sourceMappingURL=30.5a98ba55.chunk.js.map