(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),s=(n(15),n(8)),o=(n(19),n(3)),a=n(1),r=Object(a.createContext)({timer:null,setTimer:null,cycles:null,setCycles:null,restTime:null,setRestTime:null,longRestTime:null,setLongRestTime:null,inRest:null,setInRest:null,inLongRest:null,setInLongRest:null}),l=n(0);function u(e){var t=e.children,n=Object(a.useState)("00:00"),c=Object(o.a)(n,2),i=c[0],s=c[1],u=Object(a.useState)(0),j=Object(o.a)(u,2),b=j[0],d=j[1],f=Object(a.useState)("00:00"),O=Object(o.a)(f,2),m=O[0],p=O[1],h=Object(a.useState)("00:00"),v=Object(o.a)(h,2),g=v[0],x=v[1],R=Object(a.useState)(!0),y=Object(o.a)(R,2),I=y[0],T=y[1],S=Object(a.useState)(!1),w=Object(o.a)(S,2),C=w[0],E=w[1],L=Object(a.useState)(!1),k=Object(o.a)(L,2),P=k[0],A=k[1];return Object(l.jsx)(r.Provider,{value:{timer:i,setTimer:s,cycles:b,setCycles:d,restTime:m,setRestTime:p,longRestTime:g,setLongRestTime:x,inRest:I,setInRest:T,active:C,setActive:E,inLongRest:P,setInLongRest:A},children:t})}var j=n(4),b=n.n(j),d=n(6);n(22);function f(){var e=Object(a.useContext)(r),t=e.timer,n=e.setTimer,c=e.cycles,i=e.setCycles,s=e.restTime,o=e.setRestTime,u=e.longRestTime,j=e.setLongRestTime,b=(e.inRest,e.setInRest,e.active,e.setActive);e.inLongRest,e.setInLongRest;return Object(l.jsxs)("form",{onSubmit:function(e){b(!0),e.preventDefault()},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"cycles-count",children:"Ciclos: "}),Object(l.jsx)("input",{type:"number",id:"cycles-count",name:"cycles-count",value:c,onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"cycle-time",children:"Tempo de ciclo: "}),Object(l.jsx)("input",{type:"time",id:"cycle-time",value:t,onChange:function(e){n(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"pause-time",children:"Tempo de descan\xe7o: "}),Object(l.jsx)("input",{type:"time",id:"pause-time",value:s,onChange:function(e){o(e.target.value)}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{for:"last-pause-time",children:"Descan\xe7o final: "}),Object(l.jsx)("input",{type:"time",id:"last-pause-time",value:u,onChange:function(e){j(e.target.value)}})]}),Object(l.jsx)("div",{style:{flexBasis:"100%",height:"30px"},children:Object(l.jsx)("button",{type:"submit",children:"Iniciar"})})]})}n(23);var O={hasPermission:!1,init:function(){var e=this;return Object(d.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Notification.requestPermission();case 2:if("granted"===t.sent){t.next=5;break}throw new Error("ERROR! Permission to access notifier denied");case 5:return e.hasPermission=!0,t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))()},notify:function(e){var t=e.title,n=e.body,c=e.icon;this.hasPermission&&new Notification(t,{body:n,icon:c})}};function m(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useContext)(r),s=i.timer,u=i.setTimer,j=i.cycles,m=i.setCycles,p=i.restTime,h=i.setRestTime,v=i.longRestTime,g=i.setLongRestTime,x=i.inRest,R=i.setInRest,y=i.active,I=i.setActive,T=i.inLongRest,S=i.setInLongRest,w=Object(a.useState)(s),C=Object(o.a)(w,2),E=C[0],L=C[1],k=Object(a.useState)(p),P=Object(o.a)(k,2),A=P[0],N=P[1],D=Object(a.useState)(v),H=Object(o.a)(D,2),V=H[0],q=H[1],B=E.split(":"),J=Object(o.a)(B,2),z=J[0],F=J[1],G=A.split(":"),K=Object(o.a)(G,2),M=K[0],Q=K[1],U=V.split(":"),W=Object(o.a)(U,2),X=W[0],Y=W[1];return Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.init();case 3:e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))(),Object(a.useEffect)((function(){L(s)}),[s]),Object(a.useEffect)((function(){N(p)}),[p]),Object(a.useEffect)((function(){q(v)}),[v]),Object(a.useEffect)((function(){R(!1)}),[y]),Object(a.useEffect)((function(){y&&(x||T?x&&c(window.setInterval((function(){var e=[parseInt(M),parseInt(Q)];M=e[0],Q=e[1],"-1"===(--Q).toString()&&(M--,Q=59),M.toString().length<2&&(M="0"+M),Q.toString().length<2&&(Q="0"+Q),N("".concat(M,":").concat(Q))}),1e3)):c(window.setInterval((function(){var e=[parseInt(z),parseInt(F)];z=e[0],F=e[1],"-1"===(--F).toString()&&(z--,F=59),z.toString().length<2&&(z="0"+z),F.toString().length<2&&(F="0"+F),L("".concat(z,":").concat(F))}),1e3)))}),[y,x]),Object(a.useEffect)((function(){T&&c(window.setInterval((function(){var e=[parseInt(X),parseInt(Y)];X=e[0],Y=e[1],"-1"===(--Y).toString()&&(X--,Y=59),X.toString().length<2&&(X="0"+X),Y.toString().length<2&&(Y="0"+Y),q("".concat(X,":").concat(Y))}),1e3))}),[T]),Object(a.useEffect)((function(){"-1"==z&&(O.notify({title:"Hora do descan\xe7o!",body:"Voc\xea ter\xe1 ".concat(p," minutos de descan\xe7o antes de voltar ao trabalho."),icon:null}),clearInterval(n),R(!x))}),[z]),Object(a.useEffect)((function(){if("-1"==M){if(clearInterval(n),m(j-1),1==j)return R(!1),S(!0),void O.notify({title:"Fim dos ciclos!",body:"Voc\xea completou todos os ciclos e pode descan\xe7ar por "+"".concat(v," minutos antes de come\xe7ar novamente."),icon:null});O.notify({title:"Hora de trabalhar!",body:"O seu descan\xe7o terminou. Hora de voltar ao trabalho!.",icon:null}),L(s),N(p),R(!x)}}),[M]),Object(a.useEffect)((function(){"-1"==X&&(clearInterval(n),O.notify({title:"Pomodoro finalizado!",body:"O descan\xe7o final terminou. Voc\xea pode reiniciar o pomodoro se quiser.",icon:null}),I(!1),R(!1),S(!1),m(0),u("00:00"),h("00:00"),g("00:00"),R(!1))}),[X]),Object(l.jsxs)("div",{id:"clock-settings",children:[Object(l.jsx)("h1",{id:"clock-title",children:"Rel\xf3gio pomodoro"}),Object(l.jsx)("h3",{id:"clock-how-to-use-advice",children:"Digite um tempo em minutos para o rel\xf3gio tocar um alarme."}),Object(l.jsx)(f,{}),Object(l.jsx)("div",{id:"clock-container",children:Object(l.jsx)("div",{id:"clock",children:x?A:T?V:E})})]})}function p(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(s.a,{children:Object(l.jsx)("title",{children:"Rel\xf3gio pomodoro"})}),Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(u,{children:Object(l.jsx)(m,{})})})]})}i.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.e38d302f.chunk.js.map