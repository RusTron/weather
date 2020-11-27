(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},203:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(1),r=n.n(c),s=n(26),i=n.n(s),o=n(17),d=n(37),l=n(8),u="SET_NEW_COORDINATES",p="SET_NEW_ADDRESS",j="SELECTED_ADDRESS",h="SET_TEMPERATURE",b="LOADED_DATA",f=function(e){return{type:p,payload:e}},O=function(e){return{type:j,payload:e}},g={lat:null,lng:null,address:"",selectedAddress:""},m=function(e){return{type:h,payload:e}},x={data:null},v=function(e){return{type:b,payload:e}},y={loaded:!1},w=Object(d.b)({places:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{lat:t.payload.lat,lng:t.payload.lng});case p:return Object(l.a)(Object(l.a)({},e),{},{address:t.payload});case j:return Object(l.a)(Object(l.a)({},e),{},{selectedAddress:t.payload});default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{data:t.payload});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{loaded:t.payload});default:return e}}}),N=Object(d.c)(w),E=(n(195),n(196),function(){return Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("span",{className:"App-title",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Weather Forecast"})})}),A=(n(197),n(83)),S=n.n(A),_=n(145),D=n(55),T=n.n(D),k=(n(203),n(146)),F=n.n(k),L=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.places})),n=Object(o.c)((function(e){return e.loading.loaded})),c=function(t){var n=f(t);e(n)},r=function(t){var n=O(t);e(n)},s=function(t){(function(e){var t=e.lat,n=e.lng;return F.a.get("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t,"&lon=").concat(n,"&appid=").concat("bad46dfee1ae1125ec4faf31e63449de"))})(t).then((function(t){var n=m(t.data.list.map((function(e){return{date:e.dt_txt,temp:+(e.main.temp-273.15).toFixed(2)}})));e(n)}))},i=function(t){var n=v(t);e(n)},d=function(){var e=Object(_.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(D.geocodeByAddress)(t);case 3:return n=e.sent,e.next=6,Object(D.getLatLng)(n[0]);case 6:a=e.sent,c(t),r(t),s(a),i(!0),console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"form-input",children:[Object(a.jsx)(T.a,{value:t.address,onChange:c,onSelect:d,searchOptions:{types:["(cities)"]},highlightFirstSuggestion:!0,children:function(e){var t=e.getInputProps,n=e.suggestions,c=e.getSuggestionItemProps,r=e.loading;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",Object(l.a)({},t({placeholder:"Type address",className:"form-control","aria-haspopup":!0}))),Object(a.jsx)("div",{className:"mt-2 position-relative",children:r?Object(a.jsx)("div",{className:"dropdown-menu",children:"...loading"}):n&&n.length>0&&Object(a.jsx)("div",{className:"dropdown-menu show",children:n.map((function(e){return Object(a.jsx)("div",Object(l.a)(Object(l.a)({},c(e,{className:"dropdown-item",key:e.description})),{},{children:e.description}))}))})})]})}}),n?Object(a.jsx)("h2",{className:"title",children:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u0432 ".concat(t.selectedAddress," \u043d\u0430 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 5 \u0441\u0443\u0442\u043e\u043a")}):Object(a.jsx)("h2",{className:"title",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442"})]})},C=n(33),I=(n(394),function(){var e=Object(o.c)((function(e){var t=e.weather;return t.data?t.data.map((function(e,t){return{date:e.date.split(/ /g)[0],time:e.date.split(/ /g)[1].slice(0,5),temperature:e.temp,index:t}})):null})),t=Object(c.useMemo)((function(){var t=null;return e?((t=e.filter((function(e,t,n){return 0===t||e.date!==n[t-1].date})))[1].index<=4?t.shift():t.pop(),t):null}),[e]);return console.log(e),Object(a.jsx)("div",{className:"weather",children:null!==e&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(C.c,{width:1200,height:300,data:e,children:[Object(a.jsx)(C.a,{strokeDasharray:"3 3"}),Object(a.jsx)(C.d,{dataKey:"time",interval:1,angle:0,dx:10}),Object(a.jsx)(C.e,{type:"number"}),Object(a.jsx)(C.b,{type:"monotone",dataKey:"temperature",stroke:"#8884d8",activeDot:{r:1}})]}),Object(a.jsx)("div",{className:"weather__dates",style:{paddingLeft:t[0].index?"".concat(100+10*(t[0].index+t[1].index/2),"px"):"50px"},children:t.map((function(e){return Object(a.jsx)("span",{className:"weather__dates-item",children:e.date},e.date)}))})]})})});var P=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(E,{}),Object(a.jsx)(L,{}),Object(a.jsx)(I,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(o.a,{store:N,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(P,{})})}),document.getElementById("root")),R()}},[[395,1,2]]]);
//# sourceMappingURL=main.94b69fd9.chunk.js.map