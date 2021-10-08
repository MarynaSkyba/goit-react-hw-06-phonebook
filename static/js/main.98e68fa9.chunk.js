(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{22:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var o,a,r,i,c,s,b,d,l=t(0),u=t.n(l),p=t(7),x=t.n(p),h=(t(22),t(5)),f="phonebook/Add",j="phonebook/Delete",m="phonebook/Filter",g=t(33),O=function(n,e){return{type:f,payload:{id:Object(g.a)(),name:n,number:e}}},k=function(n){return{type:j,payload:n}},y=function(n){return{type:m,payload:n}},w=t(2),v=t(3),C=v.a.button(o||(o=Object(w.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),z=v.a.ul(a||(a=Object(w.a)(["\n  list-style: none;\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),R=v.a.p(r||(r=Object(w.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),S=v.a.li(i||(i=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.2);\n"]))),A=t(1),D=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))},B=Object(h.b)((function(n){var e=n.phonebook,t=e.contacts,o=e.filter;return{contacts:D(t,o)}}),(function(n){return{onDeleteContacts:function(e){return n(k(e))}}}))((function(n){var e=n.contacts,t=n.onDeleteContacts;return Object(A.jsx)(z,{children:e.map((function(n){var e=n.id,o=n.name,a=n.number;return Object(A.jsxs)(S,{children:[Object(A.jsxs)(R,{children:[o," : ",a]}),Object(A.jsx)(C,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})})),q=t(13),F=v.a.form(c||(c=Object(w.a)(["\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),L=v.a.label(s||(s=Object(w.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  font-size: 14px;\n"]))),J=v.a.input(b||(b=Object(w.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),Z=v.a.button(d||(d=Object(w.a)(["\n  display: block;\n  width: 103%;\n  margin: 40px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"])));var E,M,T,H=Object(h.b)(null,(function(n){return{onSubmit:function(e,t){return n(O(e,t))}}}))((function(n){var e=n.onSubmit,t=Object(l.useState)(""),o=Object(q.a)(t,2),a=o[0],r=o[1],i=Object(l.useState)(""),c=Object(q.a)(i,2),s=c[0],b=c[1],d=Object(g.a)(),u=Object(g.a)(),p=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":b(o);break;default:return}};return Object(A.jsxs)(F,{onSubmit:function(n){n.preventDefault(),e(a,s),r(""),b("")},children:[Object(A.jsxs)(L,{htmlFor:d,children:["Name",Object(A.jsx)(J,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:d,value:a,onChange:p})]}),Object(A.jsxs)(L,{htmlFor:u,children:["Telephone",Object(A.jsx)(J,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:u,value:s,onChange:p})]}),Object(A.jsx)(Z,{type:"submit",children:"Add to contacts"})]})})),I=v.a.label(E||(E=Object(w.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n"]))),K=v.a.input(M||(M=Object(w.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),N=Object(h.b)((function(n){return{value:n.phonebook.filter}}),(function(n){return{onChange:function(e){return n(y(e.target.value))},onBlur:function(){return n(y(""))}}}))((function(n){var e=n.value,t=n.onChange,o=n.onBlur;return Object(A.jsxs)(I,{children:["Find contacts by name",Object(A.jsx)(K,{type:"text",value:e,onChange:t,onBlur:o})]})})),P=v.a.h2(T||(T=Object(w.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n"]))),W=t(6),$=t(16),G=t(17),Q=(t(29),Object(W.combineReducers)({contacts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],e=arguments.length>1?arguments[1]:void 0,t=e.type,o=e.payload;switch(t){case f:return n.find((function(n){return n.name.toLowerCase()===o.name.toLowerCase()}))?(alert("".concat(o.name," is already in contacts")),n):[o].concat(Object(G.a)(n));case j:return n.filter((function(n){return n.id!==o}));default:return n}},filter:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,t=e.type,o=e.payload;switch(t){case m:return o;default:return n}}})),U=Object(W.combineReducers)({phonebook:Q}),V=Object(W.createStore)(U,Object($.composeWithDevTools)());function X(){return Object(A.jsxs)("div",{children:[Object(A.jsx)(P,{children:"Phonebook"}),Object(A.jsx)(H,{}),Object(A.jsx)(P,{children:"Contacts"}),Object(A.jsx)(N,{}),Object(A.jsx)(B,{})]})}console.log(V.getState()),x.a.render(Object(A.jsx)(u.a.StrictMode,{children:Object(A.jsx)(h.a,{store:V,children:Object(A.jsx)(X,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.98e68fa9.chunk.js.map