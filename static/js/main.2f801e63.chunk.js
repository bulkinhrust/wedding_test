(this.webpackJsonpwedding_test=this.webpackJsonpwedding_test||[]).push([[0],[,,,,function(t,e,n){t.exports={middleText:"Start_middleText__ABC8s",smallText:"Start_smallText__2KdWU",lightText:"Start_lightText__23jlj",blueText:"Start_blueText__1Whar",needBlock:"Start_needBlock__kw1jQ",arrow:"Start_arrow__1LDTE",button:"Start_button__2v2Or"}},,function(t,e,n){t.exports={component:"Button_component__1zOHU",fill:"Button_fill__2xA88",danger:"Button_danger__MFy4p",large:"Button_large__3WaeW",small:"Button_small__2alWC",disabled:"Button_disabled__ihgWn",fullWidth:"Button_fullWidth__1a_SP"}},,,,,function(t,e,n){t.exports={container:"Invitation_container__1Vlu8",bar:"Invitation_bar__1Heen",link:"Invitation_link__3HT17",share:"Invitation_share__sbbLG"}},,function(t,e,n){t.exports={title:"Question_title__1w5lR",smallTitle:"Question_smallTitle__3zn2S",list:"Question_list__33-H8",buttons:"Question_buttons__39mPh"}},function(t,e,n){t.exports={popover:"Modal_popover__1tfVp",modal:"Modal_modal__3x_Xo",title:"Modal_title__lM996",actions:"Modal_actions__1I0aC"}},,,,,function(t,e,n){t.exports={component:"Field_component__1sguj",active:"Field_active__3TEki"}},function(t,e,n){t.exports={container:"Details_container__IL-Ba",palette:"Details_palette__1ZQNg"}},function(t,e,n){t.exports={component:"Card_component__3MhYV"}},function(t,e,n){t.exports={component:"Arrow_component__20Jdy"}},function(t,e,n){t.exports={container:"End_container__2w1y2",details:"End_details__2WPsB",pic:"End_pic__lLhUl",bar:"End_bar__8fHV9"}},,function(t,e,n){t.exports={container:"App_container__1AVF8"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(15),s=n.n(i),l=n(2),r=n(18),o=n(5),j=n(3),b=n(13),d=n.n(b),u=n(21),O=n.n(u),h=n(0),p=function(t){var e=t.children,n=t.className;return Object(h.jsx)("div",{className:Object(j.a)(O.a.component,n),children:e})},x=n(19),_=n.n(x),m=function(t){var e,n=t.children,c=t.active,a=t.onClick,i=t.className;return Object(h.jsx)("button",{className:Object(j.a)((e={},Object(l.a)(e,_.a.component,!0),Object(l.a)(e,_.a.active,!!c),Object(l.a)(e,"".concat(i),!!i),e)),onClick:a,children:n})},v=n(6),f=n.n(v),g=function(t){var e,n=t.children,c=t.fullWidth,a=t.variant,i=void 0===a?"outline":a,s=t.type,r=void 0===s?"primary":s,o=t.size,b=void 0===o?"large":o,d=t.disabled,u=t.onClick,O=t.className;return Object(h.jsx)("button",{className:Object(j.a)((e={},Object(l.a)(e,f.a.component,!0),Object(l.a)(e,f.a[i],!0),Object(l.a)(e,f.a[r],!0),Object(l.a)(e,f.a[b],!0),Object(l.a)(e,f.a.fullWidth,c),Object(l.a)(e,f.a.disabled,d),Object(l.a)(e,"".concat(O),!!O),e)),onClick:u,children:n})},y=n(22),w=n.n(y),N=function(t){var e=t.direction,n=t.className;return Object(h.jsx)("svg",{width:"33",height:"21",viewBox:"0 0 33 21",xmlns:"http://www.w3.org/2000/svg",className:Object(j.a)(w.a.component,n),children:"right"===e?Object(h.jsx)("path",{d:"M0 10.5H30M30 10.5L21.3559 2M30 10.5L21.3559 19",strokeWidth:"3"}):Object(h.jsx)("path",{d:"M33 10.5L3 10.5M3 10.5L11.6441 19M3 10.5L11.6441 2",strokeWidth:"3"})})},k=function(t){var e=t.question,n=e.question,a=e.answers,i=t.handleAnswer,s=t.goBack,l=Object(c.useState)(null),r=Object(o.a)(l,2),b=r[0],u=r[1];return Object(h.jsxs)(p,{children:[Object(h.jsx)("h2",{className:Object(j.a)(d.a.title,n.length>2?d.a.smallTitle:""),children:n.map((function(t){return Object(h.jsx)("span",{children:t},t)}))}),Object(h.jsxs)("ul",{className:d.a.list,children:[Object(h.jsx)(m,{onClick:function(){return u(a.a.type)},active:b===a.a.type,children:a.a.title}),Object(h.jsx)(m,{onClick:function(){return u(a.b.type)},active:b===a.b.type,children:a.b.title}),Object(h.jsx)(m,{onClick:function(){return u(a.c.type)},active:b===a.c.type,children:a.c.title})]}),Object(h.jsxs)("div",{className:d.a.buttons,children:[Object(h.jsx)(g,{onClick:function(){u(null),s()},children:Object(h.jsx)(N,{direction:"left"})}),Object(h.jsx)(g,{onClick:function(){b&&i(b),u(null)},disabled:!b,children:Object(h.jsx)(N,{direction:"right"})})]})]})},S=n(4),C=n.n(S),T=n.p+"static/media/hourglass.987b9247.svg",B=n.p+"static/media/brain.5593032a.svg",I=function(t){var e=t.start;return Object(h.jsxs)(p,{children:[Object(h.jsx)("h1",{children:"\u041f\u0440\u0438\u0432\u0435\u0442!"}),Object(h.jsxs)("span",{className:Object(j.a)(C.a.middleText),children:["\u042d\u0442\u043e \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435,",Object(h.jsx)("br",{}),"\u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u043e\u0438\u0442 \u043f\u0440\u043e\u0439\u0442\u0438"]}),Object(h.jsx)("span",{className:Object(j.a)(C.a.middleText,C.a.blueText),children:"\u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f:"}),Object(h.jsxs)("div",{className:Object(j.a)(C.a.needBlock,C.a.smallText,C.a.blueText),children:[Object(h.jsx)("img",{src:T,alt:"\u041f\u0435\u0441\u043e\u0447\u043d\u044b\u0435 \u0447\u0430\u0441\u044b"}),Object(h.jsx)("img",{src:B,alt:"\u041c\u043e\u0437\u0433"}),Object(h.jsx)("span",{children:"5 \u043c\u0438\u043d\u0443\u0442"}),Object(h.jsx)("span",{children:"(\u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e)"})]}),Object(h.jsxs)("span",{className:Object(j.a)(C.a.smallText,C.a.lightText),children:["\u041e\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435 \u0447\u0435\u0441\u0442\u043d\u043e, \u0432\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u043c\u0443\u0434\u0440\u043e",Object(h.jsx)("br",{}),"\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435,",Object(h.jsx)("br",{}),"\u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f"]}),Object(h.jsxs)(g,{onClick:e,className:C.a.button,children:[Object(h.jsx)("span",{children:"\u0427\u0442\u043e \u0436, \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043c"}),Object(h.jsx)(N,{className:C.a.arrow,direction:"right"})]})]})},M=n(26),W=n(23),E=n.n(W),q=n(35),A=n(36),L=n(37),z=n(38),D=n(39),F=n(40),H={pic21:n.p+"static/media/pic21.daf427b3.png"},J=n(14),Q=n.n(J),V=function(t){var e=t.children,n=t.onClose,c=t.onSubmit,a=t.title,s=t.submitTitle,l=t.cancelTitle,r=t.visible,o=document.getElementById("root");if(!o||!r)return null;var j=Object(h.jsx)("div",{className:Q.a.popover,onClick:n,children:Object(h.jsxs)("div",{className:Q.a.modal,children:[Object(h.jsx)("h3",{className:Q.a.title,children:a}),e,Object(h.jsxs)("div",{className:Q.a.actions,children:[s&&Object(h.jsx)(g,{type:"danger",variant:"fill",size:"small",onClick:c,children:s}),l&&Object(h.jsx)(g,{type:"danger",size:"small",onClick:n,children:l})]})]})});return Object(i.createPortal)(j,o)},P=n(11),R=n.n(P),U=function(t){var e=t.reset,n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],s=a[1],l=Object(c.useState)(!1),r=Object(o.a)(l,2),j=r[0],b=r[1];return Object(h.jsxs)("div",{className:R.a.container,children:[Object(h.jsx)(V,{visible:j,title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitTitle:"\u0414\u0430",cancelTitle:"\u041e\u0439!",onSubmit:e,onClose:function(){return b(!1)},children:Object(h.jsx)("p",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b"})}),Object(h.jsx)(V,{visible:i,title:"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.png",cancelTitle:"\u041e\u0442\u043c\u0435\u043d\u0430",onClose:function(){return s(!1)},children:Object(h.jsxs)("div",{className:R.a.share,children:[Object(h.jsx)(q.a,{title:"\u041e\u043d\u0438 \u0436\u0435\u043d\u044f\u0442\u0441\u044f!!",url:"http://localhost:3000".concat(H.pic21),children:Object(h.jsx)(A.a,{size:40,borderRadius:20})}),Object(h.jsx)(L.a,{title:"\u041e\u043d\u0438 \u0436\u0435\u043d\u044f\u0442\u0441\u044f!!",url:"http://localhost:3000".concat(H.pic21),children:Object(h.jsx)(z.a,{size:40,borderRadius:20})}),Object(h.jsx)(D.a,{title:"\u041e\u043d\u0438 \u0436\u0435\u043d\u044f\u0442\u0441\u044f!!",url:"http://localhost:3000".concat(H.pic21),children:Object(h.jsx)(F.a,{size:40,borderRadius:20})})]})}),Object(h.jsx)("img",{src:H.pic21,alt:"\u043e\u0442\u043a\u0440\u044b\u0442\u043a\u0430",className:R.a.invitation}),Object(h.jsxs)("div",{className:R.a.bar,children:[Object(h.jsx)("a",{href:H.pic21,target:"_blank",rel:"noopener noreferrer",download:"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.png",className:R.a.link,children:Object(h.jsx)(g,{variant:"fill",fullWidth:!0,children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"})}),Object(h.jsx)(g,{onClick:function(){return s(!0)},fullWidth:!0,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),Object(h.jsx)(g,{onClick:function(){return b(!0)},type:"danger",fullWidth:!0,children:"\u0425\u043e\u0447\u0443 \u043f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]})},G=n(20),K=n.n(G),X=["#FAE5D9","#F4DCE1","#DCECD4","#BEC7D1","#6A3517","#671729","#2F6316","#143458"],Y=function(){return Object(h.jsxs)("div",{className:K.a.container,children:[Object(h.jsx)("h2",{children:"\u0423\u0440\u0430, \u044d\u0442\u043e \u043d\u0430\u043a\u043e\u043d\u0435\u0446 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u043e\u0441\u044c!"}),Object(h.jsx)("h3",{children:"\u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435\u043c, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432, \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0438\u0436\u0435."}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u0414\u0430\u0442\u0430 \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u0438: "}),"20 \u0430\u0432\u0433\u0443\u0441\u0442\u0430"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u0412\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430: "}),"17:00 (\u043f\u0440\u0438\u0435\u0437\u0436\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435)"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("strong",{children:"\u041c\u0435\u0441\u0442\u043e: "}),"\u0433.\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c, \u0443\u043b.\u041c\u0438\u0447\u0443\u0440\u0438\u043d\u0430 102/2"]}),Object(h.jsx)("h4",{children:"\u0414\u0435\u0442\u0430\u043b\u0438:"}),Object(h.jsx)("div",{children:"- \u0417\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u0435 \u043a\u0443\u043f\u0430\u043b\u044c\u043d\u0438\u043a\u0438 \u0438 \u043f\u043b\u0430\u0432\u043a\u0438, \u043d\u0430 \u0432\u0442\u043e\u0440\u043e\u0439 \u0434\u0435\u043d\u044c \u0431\u0443\u0434\u0435\u0442 \u0431\u0430\u043d\u044f \u0438 \u0434\u0436\u0430\u043a\u0443\u0437\u0438."}),Object(h.jsx)("div",{children:"- \u0412\u0441\u0435\u043c \u043f\u0440\u0438\u0435\u0437\u0436\u0438\u043c \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u043f\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430."}),Object(h.jsx)("div",{children:"- \u0412\u044b\u0435\u0437\u0434 \u0438\u0437 \u0433\u043e\u0441\u0442\u0435\u0432\u043e\u0433\u043e \u0434\u043e\u043c\u0430 \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d 22 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 \u0432 12:00, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0434\u0432\u0435 \u043d\u043e\u0447\u0438."}),Object(h.jsx)("div",{children:"- \u0423\u043a\u0440\u0430\u0448\u0430\u0442\u044c \u0441\u0432\u043e\u0451 \u0430\u0432\u0442\u043e \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0432\u0441\u0451 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0438 \u043c\u0430\u0448\u0438\u043d\u0430 \u0432\u0430\u043c \u043d\u0435 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f."}),Object(h.jsx)("div",{children:"- \u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043e\u043b\u043d\u0446\u0435\u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u043b\u0438\u0446\u0430 \u0438 \u0442\u0435\u043b\u0430."}),Object(h.jsx)("div",{children:"- \u041d\u0435 \u043d\u0430\u0434\u0435\u0432\u0430\u0439\u0442\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u044f\u0440\u043a\u0443\u044e \u0438\u043b\u0438 \u043f\u0451\u0441\u0442\u0440\u0443\u044e \u043e\u0434\u0435\u0436\u0434\u0443. \u041f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435 \u044d\u0442\u043e\u043c\u0443 \u043f\u0430\u0441\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u043b\u0438 \u043f\u0440\u0438\u0433\u043b\u0443\u0448\u0435\u043d\u043d\u044b\u0435 \u0442\u0451\u043c\u043d\u044b\u0435 \u043e\u0442\u0442\u0435\u043d\u043a\u0438. \u0412 \u043f\u043e\u043c\u043e\u0449\u044c \u0432\u0430\u043c \u0432\u043d\u0438\u0437\u0443 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u044b\u0435 \u0446\u0432\u0435\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0440\u0430\u0432\u044f\u0442\u0441\u044f \u043d\u0435\u0432\u0435\u0441\u0442\u0435."}),Object(h.jsx)("div",{className:K.a.palette,children:X.map((function(t){return Object(h.jsx)("span",{style:{backgroundColor:t}},t)}))})]})},Z={1:"\u0422\u044b \u043f\u044c\u044f\u043d\u0447\u0443\u0433\u0430",2:"\u0422\u044b \u043e\u0431\u0436\u043e\u0440\u0430",3:"\u0422\u044b \u043f\u0440\u0438\u0442\u043e\u0440\u043d\u044b\u0439",none:"\u0422\u044b \u0432\u043e\u043e\u0431\u0449\u0435 \u043a\u0442\u043e \u0442\u0430\u043a\u043e\u0439?"},$=function(t){var e=t.answers,n=t.age,a=t.reset;return Object(c.useEffect)((function(){if(!localStorage.getItem("result")){var t=Math.max.apply(Math,Object(M.a)(Object.values(e))),c=Object.keys(e).find((function(n){return e[n]===t}));localStorage.setItem("result","pic".concat(n).concat(Z[c||"none"]))}}),[]),Object(h.jsxs)("div",{className:E.a.container,children:[Object(h.jsx)(U,{reset:a}),Object(h.jsx)("hr",{}),Object(h.jsx)(Y,{})]})},tt=[{question:["\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?","(\u043c\u044b \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0441\u043a\u0430\u0436\u0435\u043c)"],value:"age",answers:{a:{title:"\u041c\u0435\u043d\u044c\u0448\u0435 35",type:"1"},b:{title:"\u041e\u0442 35 \u0434\u043e 45",type:"2"},c:{title:"\u041e\u0442 45",type:"3"}}},{question:["\u0427\u0442\u043e \u0432\u0430\u0436\u043d\u0435\u0435 \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043c","\u0441\u0432\u0438\u0434\u0430\u043d\u0438\u0438?"],value:"type",answers:{a:{title:"\u0420\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",type:"3"},b:{title:"\u0412\u043a\u0443\u0441\u043d\u043e \u043f\u043e\u0435\u0441\u0442\u044c",type:"2"},c:{title:"\u041d\u0435 \u043e\u043f\u043e\u0437\u043e\u0440\u0438\u0442\u044c\u0441\u044f",type:"1"}}},{question:["\u0412 \u0434\u043e\u043c\u0435 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u043b\u0438 \u0441\u0432\u0435\u0442.","\u0427\u0435\u043c \u0432\u044b \u0437\u0430\u0439\u043c\u0451\u0442\u0435\u0441\u044c?"],value:"type",answers:{a:{title:"\u041f\u043e\u0435\u043c \u0438 \u043f\u043e\u0439\u0434\u0443 \u0441\u043f\u0430\u0442\u044c",type:"2"},b:{title:"\u0410 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c \u0431\u0430\u0440\u0435 \u0435\u0441\u0442\u044c \u0441\u0432\u0435\u0442?",type:"1"},c:{title:"\u041e\u0442\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u0432\u043e\u0434 \u0437\u0430\u0436\u0435\u0447\u044c \u0430\u0440\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0432\u0435\u0447\u0438",type:"3"}}},{question:["\u041a\u0435\u043c \u0431\u044b \u0432\u044b \u0431\u044b\u043b\u0438","\u0432 \u0444\u0438\u043b\u044c\u043c\u0435 \u043f\u0440\u043e \u0437\u043e\u043c\u0431\u0438?"],value:"type",answers:{a:{title:"\u0427\u043b\u0435\u043d\u043e\u043c \u0431\u0430\u043d\u0434\u044b \u0430\u043d\u0430\u0440\u0445\u0438\u0441\u0442\u043e\u0432",type:"1"},b:{title:"\u0425\u043e\u0437\u044f\u0438\u043d\u043e\u043c \u0445\u043e\u0440\u043e\u0448\u043e \u0437\u0430\u0449\u0438\u0449\u0451\u043d\u043d\u043e\u0439 \u0444\u0435\u0440\u043c\u044b",type:"2"},c:{title:"\u0411\u0435\u0441\u0441\u0442\u0440\u0430\u0448\u043d\u044b\u043c \u043b\u0438\u0434\u0435\u0440\u043e\u043c \u0433\u0440\u0443\u043f\u043f\u044b \u0432\u044b\u0436\u0438\u0432\u0448\u0438\u0445",type:"3"}}},{question:["\u0412\u044b \u043b\u0438\u0434\u0435\u0440","\u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b.","\u041e \u0447\u0451\u043c \u0432\u0430\u0448 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0445\u0438\u0442?"],value:"type",answers:{a:{title:"\u041e \u043b\u044e\u0431\u0432\u0438, \u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0436\u0435",type:"3"},b:{title:"\u041e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0439 \u0436\u0438\u0437\u043d\u0438",type:"2"},c:{title:"\u041e \u043f\u0440\u043e\u0433\u043d\u0438\u0432\u0448\u0435\u043c \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u0438 \u0442\u0443\u043f\u044b\u0445 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430\u0445",type:"1"}}},{question:["\u041a\u0435\u043c \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0441\u0442\u0430\u0442\u044c","\u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?"],value:"type",answers:{a:{title:"\u041a\u043e\u0441\u043c\u043e\u043d\u0430\u0432\u0442\u043e\u043c",type:"3"},b:{title:"\u0420\u043e\u043a-\u0437\u0432\u0435\u0437\u0434\u043e\u0439",type:"1"},c:{title:"\u041c\u0438\u043b\u043b\u0438\u043e\u043d\u0435\u0440\u043e\u043c",type:"2"}}},{question:["\u0412 \u043a\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0435 \u0432\u0430\u043c","\u0431\u044b\u043b\u043e \u0431\u044b \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u0435\u0435?"],value:"type",answers:{a:{title:"\u0418\u0442\u0430\u043b\u0438\u044f",type:"2"},b:{title:"\u0413\u0435\u0440\u043c\u0430\u043d\u0438\u044f",type:"1"},c:{title:"\u0424\u0440\u0430\u043d\u0446\u0438\u044f",type:"3"}}},{question:["\u041a\u0443\u0434\u0430 \u0431\u044b \u0432\u044b","\u0445\u043e\u0442\u0435\u043b\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f","20 \u0430\u0432\u0433\u0443\u0441\u0442\u0430?"],value:"type",answers:{a:{title:"\u041d\u0430 \u0431\u043e\u0433\u0430\u0442\u043e\u0435 \u0437\u0430\u0441\u0442\u043e\u043b\u044c\u0435",type:"2"},b:{title:"\u041d\u0430 \u0440\u043e\u043c\u0430\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0443\u044e \u0446\u0435\u0440\u0435\u043c\u043e\u043d\u0438\u044e",type:"3"},c:{title:"\u041d\u0430 \u0432\u0435\u0441\u0451\u043b\u0443\u044e \u0433\u0443\u043b\u044f\u043d\u043a\u0443",type:"1"}}}],et={1:0,2:0,3:0},nt=n(25),ct=n.n(nt),at=function(){var t=Object(c.useState)(!0),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)("start"),s=Object(o.a)(i,2),j=s[0],b=s[1],d=Object(c.useState)(),u=Object(o.a)(d,2),O=u[0],p=u[1],x=Object(c.useState)(et),_=Object(o.a)(x,2),m=_[0],v=_[1];if(Object(c.useEffect)((function(){localStorage.getItem("result")?(v(JSON.parse(localStorage.getItem("answers")||"")),p(JSON.parse(localStorage.getItem("age")||"")),b(tt.length)):b("start"),a(!1)}),[]),n)return null;return Object(h.jsxs)("div",{className:ct.a.container,children:["start"===j&&Object(h.jsx)(I,{start:function(){b(0)}}),j>-1&&j<tt.length&&Object(h.jsx)(k,{question:tt[+j],handleAnswer:function(t){if(0===j)p(t),localStorage.setItem("age",t);else{var e=Object(r.a)(Object(r.a)({},m),{},Object(l.a)({},t,m[t]+1));v(e),localStorage.setItem("answers",JSON.stringify(e))}b(+j+1)},goBack:function(){b(j>0?+j-1:"start")}}),j===tt.length&&Object(h.jsx)($,{answers:m,reset:function(){b("start"),v(et),localStorage.setItem("answers",""),localStorage.setItem("age",""),localStorage.setItem("result","")},age:O})]})};n(32);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(at,{})}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.2f801e63.chunk.js.map