(this.webpackJsonprate_watch=this.webpackJsonprate_watch||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),c=n.n(o),a=n(19),i=n.n(a),s=n(2),u=n(4),l=n(25),f=n(7),h=n(3),p=n(17),b=n(20),j=n(5),d=n(6),v=n(9),m=n(8),O=[{from:"BTC",to:"USD",api:"cc"},{from:"BTC",to:"INR",api:"cc"},{from:"ETH",to:"USD",api:"cc"},{from:"ETH",to:"INR",api:"cc"},{from:"ETC",to:"USD",api:"cc"},{from:"ZEC",to:"USD",api:"cc"},{from:"NMR",to:"USD",api:"cc"},{from:"USD",to:"ZCL",api:"cc"},{from:"USD",to:"DOGE",api:"cc",precision:4},{from:"DOGE",to:"USD",api:"cc",precision:4},{from:"DOGE",to:"INR",api:"cc",precision:4},{from:"ETC",to:"DOGE",api:"cc",precision:4},{from:"ETH",to:"ZEC",api:"cc"},{from:"BTC",to:"ETH",api:"cc"},{from:"BTC",to:"ETC",api:"cc"},{from:"BTC",to:"ZEC",api:"cc"}],x=function(t,e){return"https://jj-api.netlify.app/.netlify/functions/proxy?from=".concat(t,"&to=").concat(e)};var g,w=(g=function(t){var e=t.ratios;return e?Object(r.jsx)(b.a,{width:"100%",height:"250px",chartType:"LineChart",loader:Object(r.jsx)("div",{children:"Loading Chart"}),data:e,options:{colors:["#357EDD"],curveType:"function",legend:"none",lineWidth:.5,chartArea:{width:"80%",height:"80%"},animation:{startup:!0,duration:1e3,easing:"out"},titleTextStyle:{color:"#232323",fontName:"Consolas",bold:!0,fontSize:16},hAxis:{format:"MMM, YY",textStyle:{color:"#232323",fontName:"Consolas",fontSize:12}},vAxis:{textPosition:"in",textStyle:{color:"#232323",fontName:"Consolas",fontSize:12}}}}):Object(r.jsx)("div",{children:"Waiting for Data"})},function(t){Object(v.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={ratios:[],isLoading:!0},t.fetchRate=function(){var e=t.props,n=e.from,r=e.to,o=x(n,r);console.log(o),fetch(o).then((function(e){return e.json().then((function(e){e&&(t.setState({ratios:e.payload.ratios}),t.setState({isLoading:!1}))}))}))},t}return Object(d.a)(n,[{key:"componentWillReceiveProps",value:function(t){this.fetchRate()}},{key:"componentDidMount",value:function(){this.fetchRate()}},{key:"render",value:function(){return this.isLoading?Object(r.jsx)("div",{children:"Loading!"}):Object(r.jsx)(g,Object(u.a)(Object(u.a)({},this.props),this.state))}}]),n}(c.a.Component)),C=n(13);function y(t,e,n){return function(r){return"rgba(".concat(t,", ").concat(e,", ").concat(n,", ").concat(r/100,")")}}var k=function(){function t(e,n){Object(j.a)(this,t),this.from=e,this.to=n}return Object(d.a)(t,[{key:"url",value:function(){return"".concat("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=").concat(this.from,"&tsyms=").concat(this.to)}},{key:"extract",value:function(t,e){var n=!!t.Response,r=null,o=null;n?o=t.Message:r=t.RAW[this.from][this.to].PRICE,e.setState((function(t){return{rate:r,error:o}}))}}]),t}(),S=function(){function t(){Object(j.a)(this,t)}return Object(d.a)(t,[{key:"url",value:function(t,e){return"https://shapeshift.io/rate/".concat(t,"_").concat(e)}},{key:"extract",value:function(t,e){e.setState((function(e){return{rate:t.rate,error:t.error}}))}}]),t}();function N(){var t=Object(s.a)(["\n  background: ",";\n\n  &:hover {\n    background: ",";\n  }\n"]);return N=function(){return t},t}function E(){var t=Object(s.a)([""]);return E=function(){return t},t}var R=y(255,153,153),D={ss:Object(p.a)(.3,"#5A739C"),cc:Object(p.a)(.3,"#58CA71")};var T=function(t){return function(e){Object(v.a)(o,e);var n=Object(m.a)(o);function o(){var t;Object(j.a)(this,o);for(var e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={rate:null,error:null},t.fetchRate=function(){var e=t.props.API,n=t.props,r=n.from,o=n.to,c=new e(r,o);!t.state.rate||t.setState((function(t){return{rate:null,error:null}}));var a=c.url(r,o);fetch(a).then((function(e){return e.json().then((function(e){return c.extract(e,Object(C.a)(t))}))}))},t}return Object(d.a)(o,[{key:"componentWillReceiveProps",value:function(t){this.setState((function(t){return{rate:null,error:null}})),this.fetchRate()}},{key:"componentDidMount",value:function(){this.fetchRate()}},{key:"render",value:function(){return Object(r.jsx)(t,Object(u.a)(Object(u.a)(Object(u.a)({},this.props),this.state),{},{handleClick:this.fetchRate}))}}]),o}(c.a.Component)}((function(t){var e=t.from,n=t.to,c=t.rate,a=t.precision,i=void 0===a?2:a,s=t.error,u=t.editMode,l=(t.handleClick,t.handleRemove),h=void 0===l?function(){return console.log("will remove!")}:l,p=t.api,b=(t.API,!!c),j=c&&parseFloat(c).toFixed(i),d=Object(o.useState)(!1),v=Object(f.a)(d,2),m=v[0],O=v[1],x=b?"1 ".concat(e," = ").concat(j," ").concat(n):"Loading rate..";return s&&(x="Error: ".concat(s)),Object(r.jsxs)("div",{className:"flex",children:[u&&Object(r.jsx)(A,{onClick:h,children:"x"}),Object(r.jsxs)("div",{className:"flex-column w-100",children:[Object(r.jsx)(I,{onClick:function(){return O(!m)},isError:!!s,color:D[p],children:x}),m&&Object(r.jsx)(w,{from:e,to:n})]})]})})),A=h.a.div.attrs({className:"bg-red code f4 f3-l black-60 pv2 pv3-m pv3-m pv3-l ph3 pointer bb-black-10 mr1 mb1"})(E()),I=h.a.div.attrs({className:"code f4 f3-l b black-60 pv2 pv3-m pv3-l ph3 pointer bb b--black-10 w-100 mb1"})(N(),(function(t){return t.isError?R(10):t.color}),(function(t){return t.isError?R(15):t.color})),L=n(11),U=n(26);function M(){var t=Object(s.a)(["\n  background: ",";\n"]);return M=function(){return t},t}function W(){var t=Object(s.a)(["\n  max-width: 500px;\n"]);return W=function(){return t},t}function P(){var t=Object(s.a)([""]);return P=function(){return t},t}function B(){var t=Object(s.a)([""]);return B=function(){return t},t}function _(){var t=Object(s.a)([""]);return _=function(){return t},t}var F=y(255,212,0);function G(t){var e=t.placeholder,n=Object(U.a)(t,["placeholder"]);return Object(r.jsx)(H,{children:Object(r.jsx)(J,Object(u.a)({placeholder:e},n))})}var H=h.a.div.attrs({className:"ba mb2 br2 b--black-10"})(_()),J=h.a.input.attrs({className:"w-100 br2 pa2 f3 code bn",type:"text"})(B()),Z=h.a.input.attrs({className:"w-100 br3 pa2 f3 code bn bg-black-10 pointer",type:"button"})(P()),z=h.a.div.attrs({className:"flex flex-column w-100 ph3"})(W()),Y=h.a.div.attrs({className:"flex pa4-ns pv4 w-100 justify-center"})(M(),F(9)),$=function(t){Object(v.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(j.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={from:"",to:""},t.handleChange=function(e){return function(n){n.persist(),t.setState((function(t){return Object(L.a)({},e,n.target.value.toUpperCase())}))}},t.submit=function(){return t.props.handleSubmit(t.state.from,t.state.to)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.from,n=t.to;return Object(r.jsx)(Y,{children:Object(r.jsxs)(z,{children:[Object(r.jsx)(G,{value:e,placeholder:"From",onChange:this.handleChange("from")}),Object(r.jsx)(G,{value:n,placeholder:"To",onChange:this.handleChange("to")}),Object(r.jsx)(Z,{value:"Add Pair",onClick:this.submit})]})})}}]),n}(c.a.Component);function q(){var t=Object(s.a)([""]);return q=function(){return t},t}function K(){var t=Object(s.a)([""]);return K=function(){return t},t}function Q(){var t=Object(s.a)(["\n  max-width: 960px;\n"]);return Q=function(){return t},t}function V(){var t=Object(s.a)([""]);return V=function(){return t},t}function X(){var t=Object(o.useState)(!0),e=Object(f.a)(t,2),n=e[0],c=e[1],a=function(t,e){var n=Object(o.useState)((function(){try{var n=window.localStorage.getItem(t);return n?JSON.parse(n):e}catch(r){return console.log(r),e}})),r=Object(f.a)(n,2),c=r[0],a=r[1];return[c,function(e){try{var n=e instanceof Function?e(c):e;a(n),window.localStorage.setItem(t,JSON.stringify(n))}catch(r){console.log(r)}}]}("pairs",O),i=Object(f.a)(a,2),s=i[0],h=i[1],p=Object(o.useState)(!1),b=Object(f.a)(p,2),j=b[0],d=b[1];console.log("pairs",s);var v={ss:S,cc:k};return Object(r.jsx)(tt,{children:Object(r.jsxs)(et,{children:[n&&s.map((function(t,e){return Object(r.jsx)(T,Object(u.a)(Object(u.a)({handleRemove:function(){return t=e,console.log("remove",t),void h(s.filter((function(e,n){return n!=t})));var t}},t),{},{API:v[t.api],editMode:j}),e)})),!n&&Object(r.jsx)($,{handleSubmit:function(t,e){h([].concat(Object(l.a)(s),[{from:t,to:e,api:"cc"}])),c(!n)}}),Object(r.jsx)(rt,{children:Object(r.jsxs)("div",{className:"f",children:[n&&!j&&Object(r.jsx)(nt,{onClick:function(){return c(!n)},children:"Add"}),n&&!j&&Object(r.jsx)(nt,{onClick:function(){return d(!j)},children:"Remove"}),!n&&Object(r.jsx)(nt,{onClick:function(){return c(!0)},children:"Cancel"}),j&&Object(r.jsx)(nt,{onClick:function(){return d(!1)},children:"Cancel"})]})})]})})}var tt=h.a.div.attrs({className:"flex justify-center"})(V()),et=h.a.div.attrs({className:"w-100 flex flex-column mt4-ns"})(Q()),nt=h.a.a.attrs({className:"link b pointer mr2"})(K()),rt=h.a.div.attrs({className:"f6 code pa3 ph0-ns flex justify-between"})(q()),ot=(n(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ct(t){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(t){console.error("Error during service worker registration:",t)}))}console.log("v0.25"),i.a.render(Object(r.jsx)(X,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rate_watch",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/rate_watch","/service-worker.js");ot?function(t){fetch(t).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):ct(t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t):ct(t)}))}}()}},[[38,1,2]]]);
//# sourceMappingURL=main.64fc42de.chunk.js.map