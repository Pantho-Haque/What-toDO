(this["webpackJsonpwhat-to-do"]=this["webpackJsonpwhat-to-do"]||[]).push([[0],{122:function(e,t,c){},123:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){"use strict";c.r(t);var n=c(50),r=c(1),a=c(53),i=c.n(a),o=c(23),s=c(48),l=c(47),j=c(16),d=c(11),u=c(72),b=c(70),O=c(28),h=c(74),x=c(14),f=c(67),g=c(5),m=function(e){var t=Object(n.c)().toggleColorMode,c=Object(n.d)("dark","light"),r=Object(n.d)(f.a,f.b);return Object(g.jsx)(b.b,Object(x.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(c," mode"),variant:"solid",roundedLeft:"full",color:"current",onClick:t,icon:Object(g.jsx)(r,{})},e))},p=c(22),w=c(7),v=c(73),S=c(80),k=c(19),y=c(42),C=(Object(S.a)({apiKey:"AIzaSyDofeL4miTK_AU2-Lx7ZsqbQJqGxT9-3Z8",authDomain:"todo-75.firebaseapp.com",databaseURL:"https://todo-75-default-rtdb.firebaseio.com",projectId:"todo-75",storageBucket:"todo-75.appspot.com",messagingSenderId:"304289147701",appId:"1:304289147701:web:4f0aaeae3f60a49e60ba7c"}),Object(k.c)()),E=Object(y.b)(),D=c(78),I=c(61);function F(e){var t=e.time,c=e.title,a=e.delEnable,i=e.deletion,o=e.isChecked,s=e.checkFieldChecked,l=Object(r.useState)(o),j=Object(d.a)(l,2),h=j[0],x=j[1],f=Object(n.c)().colorMode;return Object(g.jsx)(u.a,{w:"50vw",children:Object(g.jsxs)(u.c,{mx:"auto",maxW:"75%",my:1,alignItems:"center",children:[Object(g.jsx)(u.c,{w:"100%",bg:h?"rgba(106, 191, 75, 0.8)":"rgba(171,63,63,0.60)",overflow:"scroll",sx:{"&::-webkit-scrollbar":{width:"1px",height:"1px",borderRadius:"48px",backgroundColor:"none"},"&::-webkit-scrollbar-thumb":{width:"1px",borderRadius:"4px",backgroundColor:"light"===f?"rgba(0,0,0,0.1)":"rgba(256,256,256,0.5)"}},children:Object(g.jsxs)(D.a,{isChecked:h,onChange:function(e){x(!h),s([t,c,!h])},w:"100%",pl:"20px",children:[Object(g.jsx)(u.d,{pl:3,fontSize:"30px",fontWeight:"bold",children:t}),Object(g.jsx)(u.d,{pl:3,children:h?Object(g.jsx)("del",{children:c}):c})]})}),Object(g.jsx)(b.b,{variant:"ghost",rounded:"none",icon:Object(g.jsx)(O.a,{as:I.a}),fontSize:"30px",display:!a&&"none",onClick:function(){i([t,c])}})]})})}var U=c(81),z=c.n(U)()((function(e){return{userdata:null,adduserdata:function(t){return e((function(e){return{userdata:t}}))}}}));function T(e){var t=e.data,c=Object(r.useState)(""),n=Object(d.a)(c,2),a=n[0],i=n[1],o=Object(r.useState)(""),s=Object(d.a)(o,2),l=s[0],j=s[1],O=Object(r.useState)(t),h=Object(d.a)(O,2),f=h[0],m=h[1],S=z((function(e){return e.userdata})),y=z((function(e){return e.adduserdata}));Object(r.useEffect)((function(){E.currentUser&&(Object(k.e)(Object(k.d)(C,"user/"),Object(w.a)({},E.currentUser.uid,S)),localStorage.setItem("alldata",JSON.stringify(S)))}),[S]);var D=function(e){var t=f.filter((function(t,c){return t[0]!==e[0]&&t[1]!==e[1]}));y(Object(x.a)(Object(x.a)({},S),{},{daily:t})),m(t)},I=function(e){var t=S.daily;t.map((function(c,n){return"".concat(c[0]," ").concat(c[1])==="".concat(e[0]," ").concat(e[1])&&(t[n]=e),0})),y(Object(x.a)(Object(x.a)({},S),{},{daily:t}))},U=function(){""===f?m([[a,l,!1]]):(f.push([a,l,!1]),f.sort((function(e,t){return e[0].localeCompare(t[0])}))),i(""),j(""),y(Object(x.a)(Object(x.a)({},S),{},{daily:f}))};return Object(g.jsxs)(u.c,{w:"100vw",justifyContent:"center",alignItems:"center",flexFlow:"wrap",children:[Object(g.jsxs)(u.c,{justifyContent:"center",alignItems:"center",minH:"500px",m:3,flexFlow:"column",w:"40vw",children:[Object(g.jsx)(v.a,{type:"time",size:"sm",w:"30%",borderColor:"green.100",value:a,onChange:function(e){return i(e.target.value)}}),Object(g.jsx)(v.a,{type:"text",siz:"sm",w:"70%",my:3,value:l,onChange:function(e){return j(e.target.value)},borderColor:"green.100",placeholder:"Write here",onKeyPress:function(e){"Enter"===e.key&&U()}}),Object(g.jsx)(b.a,{colorScheme:"teal",rounded:"none",onClick:function(){U()},children:"Submit"})]}),Object(g.jsxs)(u.c,{flexFlow:"column",alignItems:"center",w:"49vw",children:[Object(g.jsx)(u.d,{fontWeight:"semibold",my:2,border:"1px solid",borderColor:"green.200",px:4,children:"Daily Schedule"}),Object(p.a)(f).map((function(e){return Object(g.jsx)(F,{time:e[0],title:e[1],delEnable:!0,deletion:D,isChecked:e[2],checkFieldChecked:I},Math.random())}))]})]})}function W(e){var t=e.data,c=Object(n.c)().colorMode,a=Object(r.useState)(t),i=Object(d.a)(a,1)[0],o=z((function(e){return e.userdata})),s=z((function(e){return e.adduserdata})),l=Object(r.useState)(!1),j=Object(d.a)(l,2),O=j[0],h=j[1];Object(r.useEffect)((function(){E.currentUser&&(Object(k.e)(Object(k.d)(C,"user/"),Object(w.a)({},E.currentUser.uid,o)),localStorage.setItem("alldata",JSON.stringify(o)))}),[o]);var f=function(e){var t=e.coOrdinate,n=e.TIME,a=e.TEXT,l=Object(r.useState)(n),j=Object(d.a)(l,2),f=j[0],m=j[1],p=Object(r.useState)(a),w=Object(d.a)(p,2),S=w[0],k=w[1];return Object(g.jsxs)(u.c,{flexFlow:"column",justifyContent:"center",alignItems:"center",mx:1,border:"thin solid",borderColor:"#e6e6e6",children:[Object(g.jsx)(v.a,{size:"sm",type:"time",rounded:"none",minW:"170px",textAlign:"center",borderColor:"light"===c?"gray.400":"white",value:f,onBlur:function(){i[t[0]][t[1]][0]=f,s(Object(x.a)(Object(x.a)({},o),{},{weekly:i}))},onChange:function(e){return m(e.target.value)}}),Object(g.jsx)(v.a,{size:"sm",rounded:"none",minW:"170px",placeholder:"Text",textAlign:"center",borderColor:"light"===c?"gray.400":"white",value:S,onBlur:function(){i[t[0]][t[1]][1]=S,s(Object(x.a)(Object(x.a)({},o),{},{weekly:i}))},onChange:function(e){k(e.target.value)}}),Object(g.jsx)(b.a,{size:"sm",onClick:function(){i[t[0]].splice(t[1],1),s(Object(x.a)(Object(x.a)({},o),{},{weekly:i})),h(!O)},children:"-"})]})};return Object(g.jsx)(u.c,{w:"100vw",mt:20,flexFlow:"column",overflow:"scroll",sx:{"&::-webkit-scrollbar":{width:"1px",height:"3px",borderRadius:"48px",backgroundColor:"none"},"&::-webkit-scrollbar-thumb":{width:"1px",borderRadius:"4px",backgroundColor:"light"===c?"rgba(0,0,0,0.1)":"rgba(256,256,256,0.5)"}},children:i&&Object(p.a)(i).map((function(e,t){return Object(g.jsxs)(u.c,{m:3,alignItems:"center",mx:"auto",w:"70vw",children:[e.map((function(e,c){return 0===c?Object(g.jsx)(u.d,{border:"1px solid gray",p:3,mr:2,children:e},c):Object(g.jsx)(f,{coOrdinate:[t,c],TIME:e[0],TEXT:e[1]},c)})),Object(g.jsx)(b.a,{rounded:"none",m:5,size:"sm",onClick:function(){i[t].push(["","",!1]),s(Object(x.a)(Object(x.a)({},o),{},{weekly:i})),h(!O)},children:"+"})]},t)}))})}var A=c(82);c(122),c(123);function L(e){var t=e.time,c=e.date,a=e.title,i=e.deletion,o=e.isChecked,s=e.specialcheckFieldChecked,l=Object(r.useState)(o),j=Object(d.a)(l,2),h=j[0],x=j[1],f=Object(n.c)().colorMode;return Object(g.jsx)(u.a,{w:"50vw",children:Object(g.jsxs)(u.c,{mx:"auto",maxW:"75%",my:1,alignItems:"center",children:[Object(g.jsx)(u.c,{w:"100%",bg:h?"rgba(106, 191, 75, 0.8)":"rgba(171,63,63,0.60)",overflow:"scroll",sx:{"&::-webkit-scrollbar":{width:"1px",height:"1px",borderRadius:"48px",backgroundColor:"none"},"&::-webkit-scrollbar-thumb":{width:"1px",borderRadius:"4px",backgroundColor:"light"===f?"rgba(0,0,0,0.1)":"rgba(256,256,256,0.5)"}},children:Object(g.jsxs)(D.a,{isChecked:h,onChange:function(e){x(!h),s([t,c,a,!h])},w:"100%",pl:"20px",children:[Object(g.jsx)(u.d,{pl:3,fontSize:"30px",fontWeight:"bold",children:t}),Object(g.jsx)(u.d,{pl:3,fontSize:"10px",fontWeight:"bold",children:c}),Object(g.jsx)(u.d,{pl:3,children:h?Object(g.jsx)("del",{children:a}):a})]})}),Object(g.jsx)(b.b,{variant:"ghost",rounded:"none",icon:Object(g.jsx)(O.a,{as:I.a}),fontSize:"30px",onClick:function(){i([t,c,a])}})]})})}function N(e){var t=e.data,c=Object(n.c)().colorMode,a=Object(r.useState)(""),i=Object(d.a)(a,2),o=i[0],s=i[1],l=Object(r.useState)(new Date),j=Object(d.a)(l,2),O=j[0],h=j[1],f=Object(r.useState)(""),m=Object(d.a)(f,2),S=m[0],y=m[1],D=Object(r.useState)(t),I=Object(d.a)(D,2),F=I[0],U=I[1],T=z((function(e){return e.userdata})),W=z((function(e){return e.adduserdata}));Object(r.useEffect)((function(){E.currentUser&&(Object(k.e)(Object(k.d)(C,"user/"),Object(w.a)({},E.currentUser.uid,T)),localStorage.setItem("alldata",JSON.stringify(T)))}),[T]);var N=function(e){var t=T.special.filter((function(t,c){return t[0]!==e[0]&&t[1]!==e[1]}));W(Object(x.a)(Object(x.a)({},T),{},{special:t})),U(t)},P=function(e){var t=F;t.map((function(c,n){return"".concat(c[0]," ").concat(c[1]," ").concat(c[2])==="".concat(e[0]," ").concat(e[1]," ").concat(e[2])&&(t[n]=e),0})),W(Object(x.a)(Object(x.a)({},T),{},{special:t})),U(t)},M=function(){""===F?U([[o,O.toDateString(),S,!1]]):(F.push([o,O.toDateString(),S,!1]),F.sort((function(e,t){return new Date("".concat(e[1]," ").concat(e[0]))-new Date("".concat(t[1]," ").concat(t[0]))}))),s(""),h(new Date),y(""),W(Object(x.a)(Object(x.a)({},T),{},{special:F}))};return Object(g.jsxs)(u.a,{w:"100vw",children:[Object(g.jsx)(u.c,{flexFlow:"column",alignItems:"center",my:2,bg:"gray.300",children:F&&Object(p.a)(F).map((function(e,t){return e[1]===O.toDateString()&&Object(g.jsx)(L,{time:e[0],date:e[1],title:e[2],deletion:N,isChecked:e[3],specialcheckFieldChecked:P},t)}))}),Object(g.jsxs)(u.c,{justifyContent:"center",alignItems:"center",minH:"500px",m:3,flexFlow:"column",children:[Object(g.jsxs)(u.c,{alignItems:"center",flexFlow:"wrap",justifyContent:"center",children:[Object(g.jsx)("form",{children:Object(g.jsx)(v.a,{type:"time",w:"200px",value:o,onChange:function(e){s(e.target.value)},borderColor:"light"===c?"gray.900":"green.100"})}),Object(g.jsx)(A.a,{useDarkMode:"dark"===c,startOfWeek:6,weekends:[5,6],value:O,size:350,highlights:function(){var e=[];return F.map((function(t,c){return e.push(new Date(t[1])),0})),e}(),onChange:function(e){return h(e)}})]}),Object(g.jsx)(v.a,{type:"text",siz:"sm",w:"70%",my:3,value:S,onChange:function(e){return y(e.target.value)},borderColor:"light"===c?"gray.900":"green.100",placeholder:"Write here",onKeyPress:function(e){"Enter"===e.key&&M()}}),Object(g.jsx)(b.a,{colorScheme:"teal",rounded:"none",onClick:function(){M()},children:"Submit"})]})]})}var P=c(43),M=c(83);function J(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),i=Object(d.a)(a,2),o=i[0],s=i[1],j=Object(r.useState)(!1),x=Object(d.a)(j,2),f=x[0],p=x[1],w=Object(r.useState)(!0),v=Object(d.a)(w,2),S=v[0],D=v[1],I=z((function(e){return e.userdata})),F=z((function(e){return e.adduserdata})),U=function(){return Object(g.jsxs)(u.c,{flexWrap:"wrap",children:[Object(g.jsx)(b.a,{rounded:"none",mx:2,leftIcon:Object(g.jsx)(O.a,{as:c?P.b:P.a}),onClick:function(){c?(n(!1),s(!1),p(!1)):(n(!0),s(!1),p(!1))},colorScheme:c?"green":"blue",variant:"solid",children:"Daily Schedule"}),Object(g.jsx)(b.a,{rounded:"none",mx:2,leftIcon:Object(g.jsx)(O.a,{as:o?P.b:P.a}),onClick:function(){o?(n(!1),s(!1),p(!1)):(n(!1),s(!0),p(!1))},colorScheme:o?"green":"blue",variant:"solid",children:"Weekly Schedule"}),Object(g.jsx)(b.a,{rounded:"none",mx:2,leftIcon:Object(g.jsx)(O.a,{as:f?P.b:P.a}),onClick:function(){f?(n(!1),s(!1),p(!1)):(n(!1),s(!1),p(!0))},colorScheme:f?"green":"blue",variant:"solid",children:"Special Schedule"}),Object(g.jsx)(l.b,{to:"/",children:Object(g.jsx)(b.a,{rounded:"none",variant:"outline",leftIcon:Object(g.jsx)(O.a,{as:M.a}),children:"DONE"})})]})};Object(r.useEffect)((function(){I&&D(!1)}),[I]),Object(r.useEffect)((function(){Object(y.c)(E,(function(e){window.navigator.onLine?E.currentUser&&Object(k.b)(Object(k.a)(Object(k.d)(C),"user/".concat(E.currentUser.uid,"/"))).then((function(e){F(e.val()),localStorage.setItem("alldata",JSON.stringify(I))})):F(JSON.parse(localStorage.getItem("alldata")))}))}),[]);var A=function(e){var t=e.children;return Object(g.jsx)(h.a,{startColor:"gray.400",endColor:"red.100",height:"35px",rounded:"none",children:t})};return S?Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.c,{justifyContent:"end",m:5,children:Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{children:"+"})})}),Object(g.jsxs)(u.c,{m:2,children:[Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{children:"schedules placed here"})}),Object(g.jsx)(u.a,{w:3}),Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{children:"schedules placed here"})}),Object(g.jsx)(u.a,{w:3}),Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{children:"schedules placed here"})}),Object(g.jsx)(u.a,{w:3}),Object(g.jsx)(A,{children:Object(g.jsx)(b.a,{children:" ( )Done"})})]}),Object(g.jsx)(h.a,{margin:"20px",startColor:"gray.400",endColor:"red.100",height:"70vh",rounded:"none"})]}):Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.c,{justifyContent:"end",p:3,children:Object(g.jsx)(m,{})}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(U,{}),c&&Object(g.jsx)(T,{data:I.daily}),o&&Object(g.jsx)(W,{data:I.weekly}),f&&Object(g.jsx)(N,{data:I.special})]})]})}var B=c(75),R=c(84);function Y(e){var t=e.name,c=Object(r.useState)(!1),n=Object(d.a)(c,2),a=n[0],i=n[1],o=z((function(e){return e.userdata})),s=z((function(e){return e.adduserdata}));return Object(r.useEffect)((function(){E.currentUser&&(Object(k.e)(Object(k.d)(C,"user/"),Object(w.a)({},E.currentUser.uid,o)),localStorage.setItem("alldata",JSON.stringify(o)))}),[o]),a?Object(g.jsx)(u.a,{children:Object(g.jsx)(v.a,{autoFocus:!0,rounded:"none",size:"md",variant:"outline",mx:1,value:t,onKeyPress:function(e){"Enter"===e.key&&i(!a)},onBlur:function(){i(!a)},onChange:function(e){s(Object(x.a)(Object(x.a)({},o),{},{Name:e.target.value}))}})}):Object(g.jsxs)(b.a,{rounded:"none",variant:"outline",mx:2,onClick:function(){i(!a)},children:[Object(g.jsx)(B.a,{size:"xs",icon:Object(g.jsx)(O.a,{fontSize:"30px",as:R.a}),mr:2}),Object(g.jsx)(u.d,{children:t})]})}var Z=c(85),V=c(58);function K(){var e=Object(r.useState)((new Date).toLocaleTimeString()),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)((new Date).toLocaleDateString()),i=Object(d.a)(a,2),o=i[0],s=i[1];return Object(r.useEffect)((function(){var e=setInterval((function(){n((new Date).toLocaleTimeString()),s((new Date).toDateString())}),1e3);return function(){return clearInterval(e)}}),[]),Object(g.jsxs)(u.a,{fontSize:"xl",textAlign:"center",w:"70vw",children:[Object(g.jsx)(u.d,{children:c}),Object(g.jsx)(u.d,{fontSize:"md",ml:20,children:o})]})}var H=c(38),_=c(39),q=c(76),$=c(77),X=c(49);function G(e){var t=e.setLogin,c=e.afterAuth,a=/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,i=Object(n.c)().colorMode,o=Object(r.useState)(!1),s=Object(d.a)(o,2),l=s[0],j=s[1],h=Object(r.useState)({alertTitle:"",alertDescription:""}),f=Object(d.a)(h,2),m=f[0],p=f[1],w=function(e,t){j(!0),p({alertTitle:e,alertDescription:t}),setTimeout((function(){j(!1),p({alertTitle:"error",alertDescription:""})}),3e3)},S=Object(r.useState)(!1),k=Object(d.a)(S,2),y=k[0],C=k[1],D=Object(r.useState)({email:"",pass:""}),I=Object(d.a)(D,2),F=I[0],U=I[1];Object(r.useEffect)((function(){var e=localStorage.getItem("toDoEmail"),t=localStorage.getItem("toDoPass");e&&t&&Object(H.f)(E,e,t)}),[]);var z=function(){a.test(F.email)?F.pass.length<6?w("Error !","Password must contain 6 characters"):Object(H.f)(E,F.email,F.pass).then((function(e){var t=e.user;t.emailVerified||w("Error !","Verify your email first"),t.emailVerified&&(localStorage.setItem("toDoEmail",F.email),localStorage.setItem("toDoPass",F.pass),c())})).catch((function(e){"auth/invalid-email"===e.code?w("Error !","Your email is incorrect"):"auth/wrong-password"===e.code?w("Error !","Wrong Password"):"auth/user-disabled"===e.code?w("Error !","User Disabled !"):"auth/user-not-found"===e.code?w("Error !","User Not Found !"):w("Error !",e.message)})):w("Error !","Your email is incorrect")};return Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.c,{w:["100vw","100vw","100vw","100vw","50vw"],h:"80vh",justifyContent:"center",alignItems:"center",flexFlow:"column",bg:"light"===i?"":"#181e29",mx:"auto",children:[Object(g.jsxs)(q.a,{status:"Success !"===m.alertTitle?"success":"error",w:"50vw",display:l?"":"none",children:[Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsxs)(u.c,{children:[Object(g.jsx)(q.c,{}),Object(g.jsx)(q.d,{children:m.alertTitle+"!"})]}),Object(g.jsx)(q.b,{display:"block",children:m.alertDescription})]}),Object(g.jsx)($.a,{position:"absolute",right:"8px",top:"8px",rounded:"none",onClick:function(){j(!1)}})]}),Object(g.jsx)(u.d,{fontSize:"30",children:"Log In"}),Object(g.jsx)(v.a,{w:"50%",placeholder:"Email",mb:3,value:F.email,onChange:function(e){return U(Object(x.a)(Object(x.a)({},F),{},{email:e.target.value}))}}),Object(g.jsxs)(v.b,{w:"50%",children:[Object(g.jsx)(v.a,{placeholder:"password",type:y?"text":"password",value:F.pass,onChange:function(e){return U(Object(x.a)(Object(x.a)({},F),{},{pass:e.target.value}))},onKeyPress:function(e){"Enter"===e.key&&z()}}),Object(g.jsx)(v.c,{children:Object(g.jsx)(b.b,{icon:Object(g.jsx)(O.a,{as:y?X.b:X.a}),variant:"ghost",_hover:{bg:"none"},onClick:function(){return C(!y)}})})]}),Object(g.jsx)(u.c,{w:"50%",justifyContent:"end",textAlign:"center",children:Object(g.jsx)(b.a,{mt:3,variant:"outline",rounded:"none",onClick:function(){z()},children:"Log in"})}),Object(g.jsx)(u.b,{w:"50%",mt:4}),Object(g.jsx)(b.a,{variant:"outline",color:"blue",rounded:"none",mb:3,onClick:function(){a.test(F.email)?Object(H.e)(E,F.email).then((function(){w("Success !","Password reset email has been sent !")})).catch((function(e){"auth/invalid-email"===e.code?w("Error !","Your email is incorrect"):"auth/wrong-password"===e.code?w("Error !","Wrong Password"):"auth/user-disabled"===e.code?w("Error !","User Disabled !"):"auth/user-not-found"===e.code?w("Error !","User Not Found !"):w("Error !",e.message)})):w("Error !","Your email is incorrect")},children:"Forget password"}),Object(g.jsx)(b.a,{variant:"solid",rounded:"none",onClick:function(){t(!1)},children:"Sign Up"})]})})}function Q(e){var t=e.setLogin,c=/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,a=Object(n.c)().colorMode,i=Object(r.useState)(!1),o=Object(d.a)(i,2),s=o[0],l=o[1],j=Object(r.useState)({alertTitle:"",alertDescription:""}),h=Object(d.a)(j,2),f=h[0],m=h[1],p=function(e,t){l(!0),m({alertTitle:e,alertDescription:t}),setTimeout((function(){l(!1),m({alertTitle:"error",alertDescription:""})}),3e3)},w=Object(r.useState)(!1),S=Object(d.a)(w,2),k=S[0],C=S[1],D=Object(r.useState)(!1),I=Object(d.a)(D,2),F=I[0],U=I[1],z=Object(r.useState)({email:"",pass:""}),T=Object(d.a)(z,2),W=T[0],A=T[1];return Object(g.jsx)(u.a,{children:Object(g.jsxs)(u.c,{w:["100vw","100vw","100vw","100vw","50vw"],h:"80vh",justifyContent:"center",alignItems:"center",flexFlow:"column",bg:"light"===a?"":"#181e29",mx:"auto",children:[Object(g.jsxs)(q.a,{status:"Success !"===f.alertTitle?"success":"error",w:"50vw",display:s?"":"none",children:[Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsxs)(u.c,{children:[Object(g.jsx)(q.c,{}),Object(g.jsx)(q.d,{children:f.alertTitle+"!"})]}),Object(g.jsx)(q.b,{display:"block",children:f.alertDescription})]}),Object(g.jsx)($.a,{position:"absolute",right:"8px",top:"8px",rounded:"none",onClick:function(){l(!1)}})]}),Object(g.jsx)(u.d,{fontSize:"30",children:"Sign Up"}),Object(g.jsx)(v.a,{w:"50%",type:"email",placeholder:"Email",mb:3,value:W.email,onChange:function(e){return A(Object(x.a)(Object(x.a)({},W),{},{email:e.target.value}))}}),Object(g.jsxs)(v.b,{w:"50%",children:[Object(g.jsx)(v.a,{placeholder:"password",type:F?"text":"password",value:W.pass,onChange:function(e){return A(Object(x.a)(Object(x.a)({},W),{},{pass:e.target.value}))}}),Object(g.jsx)(v.c,{children:Object(g.jsx)(b.b,{icon:Object(g.jsx)(O.a,{as:F?X.b:X.a}),variant:"ghost",_hover:{bg:"none"},onClick:function(){return U(!F)}})})]}),Object(g.jsxs)(u.c,{w:"50%",justifyContent:"end",textAlign:"center",children:[Object(g.jsx)(b.a,{mt:3,mr:3,variant:"outline",rounded:"none",onClick:function(){t(!0)},children:"Back to Login page"}),Object(g.jsx)(b.a,{isLoading:k,mt:3,variant:"outline",rounded:"none",onClick:function(){C(!0),c.test(W.email)?W.pass.length<6?(p("Error !","Password must contain 6 characters"),C(!1)):Object(y.a)(E,W.email,W.pass).then((function(e){var c=e.user;Object(y.d)(c).then((function(){p("Success !","A Verification link send to your email.Verify the your email otherwise you cant log in!"),t(!0)}))})).catch((function(e){"auth/invalid-email"===e.code?p("Error !","Your email is incorrect"):"auth/weak-password"===e.code?p("Error !","Weak Password"):"auth/email-already-in-use"===e.code?p("Error !","You Already have an account"):p("Error !",e.message)})):(p("Error !","Your email is incorrect"),C(!1))},children:"Sign up"})]})]})})}function ee(){var e=Object(r.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(g.jsxs)(u.a,{children:[Object(g.jsx)(u.c,{justifyContent:"end",p:3,children:Object(g.jsx)(m,{})}),Object(g.jsx)(u.a,{children:c?Object(g.jsx)(G,{setLogin:n,afterAuth:function(){E.currentUser&&E.currentUser.emailVerified&&Object(k.b)(Object(k.a)(Object(k.d)(C),"user/".concat(E.currentUser.uid))).then((function(e){e.exists()?Object(k.b)(Object(k.a)(Object(k.d)(C),"user/".concat(E.currentUser.uid,"/"))).then((function(e){localStorage.setItem("alldata",JSON.stringify(e.val()))})):Object(k.e)(Object(k.d)(C,"user/"+E.currentUser.uid),{Name:"Set Your Name",daily:"",weekly:[["SAT"],["SUN"],["MON"],["TUE"],["WED"],["THU"],["FRI"]],special:""})}))}}):Object(g.jsx)(Q,{setLogin:n})})]})}var te=c.p+"static/media/preloader.6e6d41f1.gif";function ce(){var e=Object(n.c)().colorMode,t=Object(r.useState)(),c=Object(d.a)(t,2),a=c[0],i=c[1],o=Object(r.useState)([]),s=Object(d.a)(o,2),j=s[0],f=s[1],v=Object(r.useState)([]),S=Object(d.a)(v,2),k=S[0],y=S[1],D=z((function(e){return e.userdata})),I=z((function(e){return e.adduserdata})),U=Object(r.useState)(!0),T=Object(d.a)(U,2),W=T[0],A=T[1],N=Object(r.useState)(!0),P=Object(d.a)(N,2),M=P[0],J=P[1];Object(r.useEffect)((function(){if(D){var e=D.daily,t=D.weekly[(new Date).getDay()+1===7?0:(new Date).getDay()+1];t=t.filter((function(e,t){return"object"==typeof e&&""!==e[0]}));var c=[].concat(Object(p.a)(e),Object(p.a)(t));c.sort((function(e,t){return e[0].localeCompare(t[0])})),f(c)}}),[W]),Object(r.useEffect)((function(){D&&(y(D.special),A(!1))}),[D]),Object(r.useEffect)((function(){Object(H.c)(E,(function(e){window.navigator.onLine?(i(E.currentUser),B()):B()}))}),[]);var B=function(){window.navigator.onLine?E.currentUser&&Object(_.b)(Object(_.a)(Object(_.d)(C),"user/".concat(E.currentUser.uid,"/"))).then((function(e){I(e.val()),localStorage.setItem("alldata",JSON.stringify(D))})):I(JSON.parse(localStorage.getItem("alldata")))};Object(r.useEffect)((function(){E.currentUser&&(Object(_.e)(Object(_.d)(C,"user/"),Object(w.a)({},E.currentUser.uid,D)),localStorage.setItem("alldata",JSON.stringify(D)))}),[D]);var R=function(e){var t=D.special.filter((function(t,c){return t[0]!==e[0]&&t[1]!==e[1]}));I(Object(x.a)(Object(x.a)({},D),{},{special:t})),y(t)},q=function(e){var t=D.daily;t.map((function(c,n){return"".concat(c[0]," ").concat(c[1])==="".concat(e[0]," ").concat(e[1])&&(t[n]=e),0})),I(Object(x.a)(Object(x.a)({},D),{},{daily:t}))},$=function(e){var t=k;t.map((function(c,n){return"".concat(c[0]," ").concat(c[1]," ").concat(c[2])==="".concat(e[0]," ").concat(e[1]," ").concat(e[2])&&(t[n]=e),0})),I(Object(x.a)(Object(x.a)({},D),{},{special:t})),y(t)},X=function(e){var t=e.children;return Object(g.jsx)(h.a,{startColor:"gray.400",endColor:"red.100",height:"27px",rounded:"none",children:t})};return M?(setTimeout((function(){J(!1)}),3e3),Object(g.jsx)(u.c,{alignItems:"center",justifyContent:"center",h:"100vh",w:"100vw",bg:"#41C6DA",children:Object(g.jsx)(V.a,{src:te})})):localStorage.getItem("toDoEmail")?W?Object(g.jsxs)(u.a,{children:[Object(g.jsxs)(u.c,{justifyContent:"end",my:1,children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"input field for your name"})}),Object(g.jsx)(u.a,{w:"20px"}),Object(g.jsx)(X,{children:Object(g.jsx)(b.a,{children:"logout"})}),Object(g.jsx)(u.a,{w:"20px"}),Object(g.jsx)(X,{children:Object(g.jsx)(b.a,{size:"sm",children:"CM"})}),Object(g.jsx)(u.a,{w:"20px"})]}),Object(g.jsxs)(u.c,{justifyContent:"space-around",my:10,children:[Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsx)(X,{children:"a time clock will display here "}),Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsx)(u.a,{pl:10,children:Object(g.jsx)(X,{children:"a date clock will display here"})})]}),Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsx)(X,{children:Object(g.jsx)(u.d,{h:"30px",w:"150px",children:"+ Add Button"})})]})]}),Object(g.jsxs)(u.c,{justifyContent:"space-around",children:[Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"})]}),Object(g.jsxs)(u.c,{flexFlow:"column",children:[Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})}),Object(g.jsx)(X,{children:Object(g.jsx)("div",{children:"check field will appear here in flex"})})]}),Object(g.jsx)(u.a,{h:"20px"})]})]})]}):a&&a.emailVerified?Object(g.jsxs)(u.a,{bg:"light"===e?"#D7D4D4":"",h:"100vh",children:[Object(g.jsxs)(u.c,{justifyContent:"end",p:3,children:[D&&Object(g.jsx)(Y,{name:D.Name}),Object(g.jsx)(b.a,{rounded:"none",variant:"outline",mx:2,onClick:function(){localStorage.removeItem("toDoEmail"),localStorage.removeItem("toDoPass"),localStorage.removeItem("name"),localStorage.removeItem("alldata"),E.signOut(),window.location.reload()},children:"log out"}),Object(g.jsx)(m,{})]}),Object(g.jsxs)(u.c,{w:"100vw",alignItems:"center",children:[Object(g.jsx)(K,{}),Object(g.jsx)(l.b,{to:"/addSchedule",children:Object(g.jsx)(b.a,{size:"sm",rounded:"none",variant:"outline",leftIcon:Object(g.jsx)(O.a,{as:Z.a}),children:"Add Schedule"})})]}),Object(g.jsx)(u.b,{my:3}),Object(g.jsxs)(u.c,{flexFlow:"row",children:[Object(g.jsx)(u.c,{flexFlow:"column",children:j.map((function(e,t){return Object(g.jsx)(F,{time:e[0],title:e[1],isChecked:e[2],checkFieldChecked:q},t)}))}),Object(g.jsx)(u.c,{flexFlow:"column",children:k.map((function(e,t){return Object(g.jsx)(L,{time:e[0],date:e[1],title:e[2],deletion:R,isChecked:e[3],specialcheckFieldChecked:$},t)}))})]})]}):Object(g.jsx)(ee,{}):Object(g.jsx)(ee,{})}function ne(){return Object(g.jsx)(l.a,{children:Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",element:Object(g.jsx)(ce,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/addSchedule",element:Object(g.jsx)(J,{})})]})})}c(124);var re=function(){return Object(g.jsx)(o.a,{theme:s.b,children:Object(g.jsx)(ne,{})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(g.jsxs)(r.StrictMode,{children:[Object(g.jsx)(n.b,{}),Object(g.jsx)(re,{})]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Pantho-Haque/What-toDO.git",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Pantho-Haque/What-toDO.git","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}(),ae()}},[[125,1,2]]]);
//# sourceMappingURL=main.60d9ced9.chunk.js.map