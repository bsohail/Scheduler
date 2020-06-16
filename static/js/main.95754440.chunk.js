(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(91),t(64)),i=t(11),m=t(15),u=t(4),d=t(154),s=t(155),E=t(68),b=t(156),h=t(171),p=t(153),y=t(111),f=t(161),g=t(157),v=t(167),k=t(158),C=t(21),w=t.n(C),O=(t(93),t(50)),j=t.n(O),x=t(162),S=t(163),T=t(164),W=t(170),F=t(63),B=t.n(F),I=t(169),A=t(165),M=t(166),N=t(112),R=t(168);Object(u.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:11}}}))(h.a),Object(u.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(p.a);function J(e,a,t,n,l,r){return{time:e,monday:a,tuesday:t,wednesday:n,thursday:l,friday:r}}J("08.00"),J("09.00"),J("10.00"),J("11.00"),J("12.00"),J("13.00"),J("14.00"),J("15.00"),J("16.00"),J("17.00"),J("18.00"),J("19.00"),J("20.00"),J("21.00"),J("22.00");var U=Object(d.a)({table:{minWidth:600},tableRightBorder:{borderWidth:0,borderRightWidth:1,borderColor:"black",borderStyle:"solid"}}),D=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,boxShadow:"none",padding:e.spacing(2,4,3)}}}));var P=function(){var e=l.a.useState(""),a=Object(m.a)(e,2),t=a[0],n=a[1],r=l.a.useState(!1),c=Object(m.a)(r,2),o=c[0],i=c[1],u=l.a.useState(!1),d=Object(m.a)(u,2),h=d[0],p=d[1],C=U(),O=D();return l.a.createElement(s.a,{maxWidth:"lg"},l.a.createElement(E.a,{elevation:3,style:{marginTop:"50px"}},l.a.createElement(b.a,{container:!0,spacing:0},l.a.createElement(b.a,{item:!0,xs:2},l.a.createElement(g.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(k.a,null,l.a.createElement(y.a,{variant:"h6",noWrap:!0,style:{textAlign:"center"}},"Toolbar"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(v.a,{id:"filled-helperText",label:"Title",defaultValue:"",variant:"outlined",onChange:function(e){return n(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"green"}},"Add course"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"red"}},"Remove course"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"#FFCE00"}},"Backup as JSON"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"#FFCE00"}},"Upload JSON"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"#005596"}},"Save as JPG")))),l.a.createElement(b.a,{item:!0,xs:10},l.a.createElement(s.a,{maxWidth:"md"},l.a.createElement(x.a,{position:"static",style:{backgroundColor:"transparent",boxShadow:"none"}},l.a.createElement(S.a,null,l.a.createElement(b.a,{justify:"space-between",container:!0,spacing:24},l.a.createElement(b.a,{item:!0}),l.a.createElement(b.a,{item:!0},l.a.createElement(W.a,{title:"Options"},l.a.createElement(T.a,{edge:"start",className:C.menuButton,color:"black","aria-label":"menu",onClick:function(){i(!0)}},l.a.createElement(B.a,null))))))),l.a.createElement(g.a,null,l.a.createElement(k.a,null,l.a.createElement(y.a,{variant:"h6",noWrap:!0,style:{textAlign:"center"}},t.toString()),h&&l.a.createElement(j.a,{startTime:w()({h:8,m:0}),endTime:w()({h:22,m:1}),numberOfDays:7,scaleUnit:60,firstDay:w()().day(1),dayFormat:"dddd",useModal:!1}),!h&&l.a.createElement(j.a,{startTime:w()({h:8,m:0}),endTime:w()({h:22,m:1}),numberOfDays:5,scaleUnit:60,firstDay:w()().day(1),dayFormat:"dddd",useModal:!1})))))),l.a.createElement(I.a,{className:O.modal,open:o,onClose:function(){i(!1)},closeAfterTransition:!0,BackdropComponent:A.a,BackdropProps:{timeout:500}},l.a.createElement(N.a,{in:o},l.a.createElement("div",{className:O.paper},l.a.createElement("h2",null,"Options"),l.a.createElement(M.a,{value:"Include weekends",control:l.a.createElement(R.a,{color:"primary"}),label:"Include weekends",labelPlacement:"start",checked:h,onChange:function(e){return p(e.target.checked)}}),l.a.createElement("p",null,"Currently: ",h?7:5," days shown"),l.a.createElement("p",null,"theme options go here."))))),l.a.createElement("br",null),l.a.createElement("h5",{style:{textAlign:"center"}},"Nitin Ramesh, Bilal Sohail 2020"))},G=t(46),z=t(28),V=t(66),$=t(65),q=function(e){Object(V.a)(t,e);var a=Object($.a)(t);function t(){return Object(G.a)(this,t),a.apply(this,arguments)}return Object(z.a)(t,[{key:"render",value:function(){return l.a.createElement(s.a,{maxWidth:"md"},l.a.createElement("h2",null,"About page"),l.a.createElement("br",null),l.a.createElement("h4",null,"React: MIT license"),l.a.createElement("h4",null,"Material UI: MIT license"),l.a.createElement("h4",null,"React-weekly-calender: MIT license "))}}]),t}(l.a.Component);function H(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(x.a,{position:"static",style:{backgroundColor:"#005596"}},l.a.createElement(S.a,null,l.a.createElement(b.a,{justify:"space-between",container:!0,spacing:24},l.a.createElement(b.a,{item:!0},l.a.createElement(y.a,{variant:"h6",noWrap:!0},"Generic Uni logo")),l.a.createElement(b.a,{item:!0},l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"#FFCE00"},href:"/"},"Schedule maker"),l.a.createElement(f.a,{variant:"outlined",color:"default",style:{color:"#FFCE00"},href:"/about"},"About"))))),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/about"},l.a.createElement(q,null)),l.a.createElement(i.a,{path:"/"},l.a.createElement(P,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,a,t){e.exports=t(110)},91:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.95754440.chunk.js.map