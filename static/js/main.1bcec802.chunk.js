(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,b,s,d,p=t(0),l=t.n(p),u=t(11),x=t.n(u),j=(t(26),t(17)),h=t(6),f=t(7),m=t(36),O=Object(f.b)("phonebook/add",(function(n,e){return{payload:{id:Object(m.a)(),name:n,number:e}}})),g=Object(f.b)("phonebook/delete"),k=Object(f.b)("phonebook/changeFilter"),w=function(n){return n.phonebook.filter},y=function(n){var e=function(n){return n.phonebook.contacts}(n),t=w(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},v=t(3),C=t(4),z=C.a.button(a||(a=Object(v.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),A=C.a.ul(r||(r=Object(v.a)(["\n  list-style: none;\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),R=C.a.p(o||(o=Object(v.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),S=C.a.li(c||(c=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.2);\n"]))),q=t(1),F=function(){var n=Object(h.c)(y),e=Object(h.b)();return Object(q.jsx)(A,{children:n.map((function(n){var t=n.id,a=n.name,r=n.number;return Object(q.jsxs)(S,{children:[Object(q.jsxs)(R,{children:[a," : ",r]}),Object(q.jsx)(z,{onClick:function(){return function(n){return e(g(n))}(t)},children:"Delete"})]},t)}))})},L=t(16),B=C.a.form(i||(i=Object(v.a)(["\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),J=C.a.label(b||(b=Object(v.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  font-size: 14px;\n"]))),Z=C.a.input(s||(s=Object(v.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),D=C.a.button(d||(d=Object(v.a)(["\n  display: block;\n  width: 103%;\n  margin: 40px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"])));var E,M,T,H=function(){var n=Object(h.b)(),e=Object(p.useState)(""),t=Object(L.a)(e,2),a=t[0],r=t[1],o=Object(p.useState)(""),c=Object(L.a)(o,2),i=c[0],b=c[1],s=Object(m.a)(),d=Object(m.a)(),l=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":b(a);break;default:return}};return Object(q.jsxs)(B,{onSubmit:function(e){e.preventDefault(),function(e,t){n(O(e,t))}(a,i),r(""),b("")},children:[Object(q.jsxs)(J,{htmlFor:s,children:["Name",Object(q.jsx)(Z,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:s,value:a,onChange:l})]}),Object(q.jsxs)(J,{htmlFor:d,children:["Telephone",Object(q.jsx)(Z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:d,value:i,onChange:l})]}),Object(q.jsx)(D,{type:"submit",children:"Add to contacts"})]})},I=C.a.label(E||(E=Object(v.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n"]))),K=C.a.input(M||(M=Object(v.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),N=function(){var n=Object(h.c)(w),e=Object(h.b)();return Object(q.jsxs)(I,{children:["Find contacts by name",Object(q.jsx)(K,{type:"text",value:n,onChange:function(n){return e(k(n.target.value))},onBlur:function(){return e(k(""))}})]})},P=C.a.h2(T||(T=Object(v.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n"])));function $(){return Object(q.jsxs)("div",{children:[Object(q.jsx)(P,{children:"Phonebook"}),Object(q.jsx)(H,{}),Object(q.jsx)(P,{children:"Contacts"}),Object(q.jsx)(N,{}),Object(q.jsx)(F,{})]})}var G,Q=t(2),U=t(8),V=t(18),W=t.n(V),X=t(13),Y=t(19),_=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(G={},Object(X.a)(G,O,(function(n,e){var t=e.payload;return n.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()}))?(alert("".concat(t.name," is already in contacts")),n):[t].concat(Object(Y.a)(n))})),Object(X.a)(G,g,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),G)),nn=Object(f.c)("",Object(X.a)({},k,(function(n,e){return e.payload}))),en=Object(Q.b)({contacts:_,filter:nn}),tn={key:"root",storage:W.a},an=Object(Q.b)({phonebook:en}),rn=Object(U.g)(tn,an),on=Object(f.a)({reducer:rn,devTools:!1,middleware:function(n){return n({serializableCheck:{ignoredActions:[U.a,U.f,U.b,U.c,U.d,U.e]}})}}),cn=Object(U.h)(on);x.a.render(Object(q.jsx)(l.a.StrictMode,{children:Object(q.jsx)(h.a,{store:on,children:Object(q.jsx)(j.a,{loading:null,persistor:cn,children:Object(q.jsx)($,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.1bcec802.chunk.js.map