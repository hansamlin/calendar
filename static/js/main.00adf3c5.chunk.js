(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{17:function(n,e,t){n.exports=t(42)},42:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),c=t(1),u=t(2);function l(){var n=Object(c.a)(["\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: #4a4a4a;\n  font-weight: 600;\n}\n\n#root {\n  display: flex;\n  height: 100vh;\n}\n\na {\n  text-decoration: none;\n}\n\n"]);return l=function(){return n},n}var s=Object(u.a)(l()),d=t(4),f=Object(r.createContext)(),p=function(n){var e=n.children,t=Object(r.useState)(0),o=Object(d.a)(t,2),i=o[0],c=o[1];return a.a.createElement(f.Provider,{value:{sum:i,setSum:c}},e)},m=t(3),b=t.n(m);function v(){var n=Object(c.a)(["\n  flex-basis: 80%;\n  text-align: center;\n  color: #fff;\n"]);return v=function(){return n},n}var h=function(){var n=Object(r.useContext)(f).sum,e=b()().add(n,"month"),t=e.format("MMMM"),o=e.format("YYYY");return a.a.createElement(x,null,t," ",o)},x=u.b.div(v()),g=Object(r.createContext)(),O=function(n){var e=n.children,t=Object(r.useState)(1),o=Object(d.a)(t,2),i=o[0],c=o[1];return a.a.createElement(g.Provider,{value:{opacity:i,setOpacity:c}},e)};function j(){var n=Object(c.a)(['\n  flex-basis: 10%;\n  background: transparent;\n  border: 0;\n  position: relative;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-width: 7.5px 0 7.5px 10px;\n    border-style: solid;\n    border-color: transparent transparent transparent rgba(160, 159, 160, 1);\n    transform: translate(-50%, -50%) ',";\n  }\n"]);return j=function(){return n},n}var k=function(n){var e=n.reverse,t=n.handleSum,o=Object(r.useContext)(g).setOpacity,i=function(){o(0),t()};return Object(r.useMemo)((function(){return a.a.createElement(E,{reverse:e,onClick:i})}),[])},E=u.b.button(j(),(function(n){return n.reverse&&"scale(-1)"}));function y(){var n=Object(c.a)(["\n  padding: 0;\n  font-size: 20px;\n  line-height: 50px;\n  font-weight: 100;\n  letter-spacing: 1px;\n  background: rgba(66, 66, 66, 1);\n  display: flex;\n"]);return y=function(){return n},n}var w=function(){var n=Object(r.useContext)(f).setSum;return a.a.createElement(M,null,a.a.createElement(k,{reverse:!0,handleSum:function(){return n((function(n){return n-1}))}}),a.a.createElement(h,null),a.a.createElement(k,{handleSum:function(){return n((function(n){return n+1}))}}))},M=u.b.header(y()),C=Object(r.createContext)(),D=function(n){var e=n.children,t=Object(r.useState)(b()().format("Y-MM-DD")),o=Object(d.a)(t,2),i=o[0],c=o[1];return a.a.createElement(C.Provider,{value:{date:i,setDate:c}},e)},S=Object(r.createContext)(),N=function(n){var e=n.children,t=Object(r.useState)(!1),o=Object(d.a)(t,2),i=o[0],c=o[1];return a.a.createElement(S.Provider,{value:{show:i,setShow:c}},e)},z=new Map([["work","rgba(247,167,0,1)"],["sports","rgba(156,202,235,1)"],["kids","#f9e900"],["other","#99c66d"]]);function I(){var n=Object(c.a)(["\n  display: inline-block;\n  padding: 0 0 0 7px;\n  font-size: 16px;\n"]);return I=function(){return n},n}function Y(){var n=Object(c.a)(['\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  color: #fff;\n  padding: 2px 16px;\n  display: block;\n\n  &:before {\n    content: "";\n    width: 10px;\n    height: 10px;\n    margin: 6px 0 0;\n    display: inline-block;\n    background: ',";\n  }\n"]);return Y=function(){return n},n}function P(){var n=Object(c.a)(["\n  animation: "," 0.3s ease 0.5s both;\n"]);return P=function(){return n},n}function W(){var n=Object(c.a)(["\nfrom {\n  opacity: 0;\n}\n\nto {\n  opacity: 1;\n}\n"]);return W=function(){return n},n}function J(){var n=Object(c.a)(["\n  position: absolute;\n  left: calc(-60px * ",");\n  top: calc(100% - 16px - 5px);\n  width: 420px;\n  background: rgba(164, 164, 164, 1);\n  margin-top: 16px;\n  border-radius: 4px;\n  color: #ffffff;\n  padding: 7px 0;\n  animation: ",' forwards 0.5s ease;\n  text-align: justify;\n\n  &:before {\n    content: "";\n    top: -5px;\n    left: calc((60px * ',") + 30px);\n    transform: translateX(-50%);\n    width: 0px;\n    height: 0px;\n    border-style: solid;\n    border-width: 0 5px 5px 5px;\n    border-color: transparent transparent rgba(164, 164, 164, 1) transparent;\n    position: absolute;\n  }\n"]);return J=function(){return n},n}function B(){var n=Object(c.a)(["\nfrom {\n  height: 0px;\n}\n\nto {\n  height: 75px;\n}\n"]);return B=function(){return n},n}var G=function(n){var e=n.index,t=n.event,o=Object(r.useContext)(S).show,i=null;return i=t.length>0?t.map((function(n,e){return a.a.createElement(H,{href:"",theme:{background:z.get(n.calendar)},onClick:function(n){return n.preventDefault()},key:e},a.a.createElement(L,null,n.eventName))})):a.a.createElement(L,null,"No Events"),o&&a.a.createElement(T,{theme:{index:e}},a.a.createElement(F,null,i))},K=Object(u.c)(B()),T=u.b.div(J(),(function(n){return n.theme.index}),K,(function(n){return n.theme.index})),A=Object(u.c)(W()),F=u.b.div(P(),A),H=u.b.a(Y(),(function(n){return n.theme.background})),L=u.b.span(I()),R=[{calendar:"work",eventName:"Lunch Meeting w/ Mark",date:"2020-03-15"},{calendar:"work",eventName:"Interview - Jr. Web Developer",date:"2020-03-16"},{calendar:"work",eventName:"Dinner w/ Marketing",date:"2020-03-21"},{calendar:"sports",eventName:"Game vs Houston",date:"2020-03-18"},{calendar:"sports",eventName:"Game vs Denver",date:"2020-03-21"},{calendar:"kids",eventName:"Ice Cream Night",date:"2020-03-31"},{calendar:"other",eventName:"Teach Kids to Code",date:"2020-03-24"}];function X(){var n=Object(c.a)(["\n  vertical-align: top;\n  display: inline-block;\n  padding: 0;\n  width: 5px;\n  height: 5px;\n  line-height: 5px;\n  margin: 0 1px;\n  background: ",";\n"]);return X=function(){return n},n}function $(){var n=Object(c.a)(["\n  list-style: none;\n  margin-top: 3px;\n  text-align: center;\n  height: 12px;\n  line-height: 6px;\n  overflow: hidden;\n"]);return $=function(){return n},n}function q(){var n=Object(c.a)(["\n  font-size: 24px;\n  letter-spacing: 1.5px;\n  color: rgba(255, 255, 255, ",");\n"]);return q=function(){return n},n}function Q(){var n=Object(c.a)(["\n  font-size: 9px;\n  text-transform: uppercase;\n  margin-bottom: 5px;\n  color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 0.7px;\n"]);return Q=function(){return n},n}function U(){var n=Object(c.a)(["\n  flex-basis: calc(100% / 7);\n  text-align: center;\n  border: 0;\n  display: inline-block;\n  background: transparent;\n  width: 60px;\n  padding: 5px;\n  vertical-align: top;\n  cursor: pointer;\n  z-index: 100;\n  position: relative;\n"]);return U=function(){return n},n}var V=function(n){var e=n.item,t=n.index,o=Object(r.useContext)(C),i=o.date,c=o.setDate,u=R.filter((function(n){return n.date===e.date})),l=null;u&&(l=u.map((function(n,e){return a.a.createElement(rn,{work:z.get(n.calendar),key:e})})));var s=null;return i===e.date&&(s=a.a.createElement(G,{index:t,event:u})),a.a.createElement(_,{onClick:function(n){n.preventDefault(),c(e.date)}},a.a.createElement(nn,null,e.day),a.a.createElement(en,{active:e.active?1:.3},Z(e.num)),a.a.createElement(tn,null,l),s)},Z=function(n){return n<10?"0".concat(n):n},_=u.b.div(U()),nn=u.b.div(Q()),en=u.b.div(q(),(function(n){return n.active})),tn=u.b.div($()),rn=u.b.span(X(),(function(n){return n.work}));function an(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  transition: margin 0.3s ease;\n  margin: ",";\n"]);return an=function(){return n},n}var on=function(n){var e=n.week,t=n.theme;return a.a.createElement(cn,{theme:t},e.map((function(n,e){return a.a.createElement(V,{item:n,key:e,index:e})})))},cn=u.b.div(an(),(function(n){return n.theme.margin})),un=t(15),ln=t.n(un);function sn(){var n=Object(c.a)(["\n  opacity: ",";\n  width: 420px;\n  margin: auto;\n  background: #4a4a4a;\n  transition: opacity 0.7s ease-out;\n\n  &.init {\n    animation: "," ease-out 1s both;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\nfrom {\n  opacity: 0;\n}\n\nto {\n  opacity: 1;\n}\n"]);return dn=function(){return n},n}var fn=function(){var n=Object(r.useContext)(C),e=n.date,t=n.setDate,o=Object(r.useContext)(f).sum,i=Object(r.useContext)(S),c=i.show,u=i.setShow,l=Object(r.useContext)(g),s=l.opacity,d=l.setOpacity,p=pn(o,s),m=Object(r.useCallback)((function(){return 0===s&&d(1)}),[s]),b=Object(r.useRef)();return Object(r.useEffect)((function(){b.current&&1===s?t(null):b.current=!0}),[s]),a.a.createElement(bn,{theme:{opacity:s},className:c?"":"init",onAnimationEnd:function(){return u(!0)},onTransitionEnd:m},p.map((function(n,t){var r=n.find((function(n){return n.date===e}));return a.a.createElement(on,{week:n,key:t,theme:{margin:r&&"0 0 75px"}})})))},pn=function(n,e){var t=Object(r.useState)([]),a=Object(d.a)(t,2),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(1===e){for(var t=b()().add(n,"month"),r=t.daysInMonth(),a=[],o=1;o<=r;o++)a.push({num:o,day:b()(t).set("date",o).format("ddd"),date:b()(t).set("date",o).format("Y-MM-DD"),active:!0});var c=parseInt(b()(t).set("date",1).format("d"));if(0!==c)for(var u=b()(t).subtract(1,"month").daysInMonth(),l=u-c,s=u;s>l;s--){var d=b()().subtract(1,"month").set("date",s);a=[{num:s,day:d.format("ddd"),date:d.format("Y-MM-DD"),active:!1}].concat(a)}var f=parseInt(b()(t).set("date",b()(t).daysInMonth()).format("d"));if(6!==f)for(var p=1;p<=6-f;p++){var m=b()(t).add(1,"month").set("date",p);a.push({num:p,day:m.format("ddd"),date:m.format("Y-MM-DD"),active:!1})}var v=ln()(a,7);i(v)}}),[n,e]),o},mn=Object(u.c)(dn()),bn=u.b.div(sn(),(function(n){return n.theme.opacity}),mn);function vn(){var n=Object(c.a)(['\n  position: relative;\n  padding: 0 0 0 25px;\n  font-size: 13px;\n  display: inline-block;\n  line-height: 30px;\n  background: transparent;\n  color: rgba(255, 255, 255, 1);\n\n  &:after {\n    position: absolute;\n    content: "";\n    height: 5px;\n    width: 5px;\n    top: 12px;\n    left: 14px;\n    background: ',";\n  }\n"]);return vn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 30px;\n  background: rgba(60, 60, 60, 1);\n  line-height: 30px;\n"]);return hn=function(){return n},n}var xn=[{color:"rgba(247, 167, 0, 1)",name:"Work"},{color:"rgba(156, 202, 235, 1)",name:"Sports"},{color:"rgba(249, 233, 0, 1)",name:"Kids"},{color:"rgba(153, 198, 109, 1)",name:"Other"}],gn=function(){return a.a.createElement(On,null,xn.map((function(n,e){return a.a.createElement(jn,{key:e,color:n.color},n.name)})))},On=u.b.div(hn()),jn=u.b.span(vn(),(function(n){return n.color})),kn=function(n){var e=n.children;return a.a.createElement(p,null,a.a.createElement(D,null,a.a.createElement(N,null,a.a.createElement(O,null,e))))};function En(){var n=Object(c.a)(["\n  position: relative;\n  width: 420px;\n  margin: auto;\n  background: #4a4a4a;\n"]);return En=function(){return n},n}var yn=u.b.div(En()),wn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,null),a.a.createElement(yn,null,a.a.createElement(kn,null,a.a.createElement(w,null),a.a.createElement(fn,null)),a.a.createElement(gn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(wn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.00adf3c5.chunk.js.map