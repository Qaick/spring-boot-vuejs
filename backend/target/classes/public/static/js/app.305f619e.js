(function(e){function t(t){for(var r,i,c=t[0],a=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bootstrap"},[n("h1",[e._v("AgileEngine test task")]),n("p"),n("b-btn",{attrs:{variant:"success",id:"btnCallDebit"},on:{click:function(t){return e.callDebitApi(10)}}},[e._v("Debit 10")]),n("b-btn",{attrs:{variant:"success",id:"btnCallCredit"},on:{click:function(t){return e.callCreditApi(20)}}},[e._v("Credit 20")]),n("p"),n("h4",[e._v("Account changes history: ")]),n("p"),e.history&&e.history.length?n("p"):e._e(),e._l(e.history,(function(t,r){return n("div",[n("li",[n("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"collapse_inner_"+r,expression:"'collapse_inner_' + index"}],attrs:{size:"sm",id:"btnHttpHeaders-"+r,variant:"warning"}},[e._v("Item: "+e._s(r)+", change: "+e._s(t.change)+" ")]),n("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse_inner_"+r}},[n("b-card",[e._v("Change: "+e._s(t.change)+", Result: "+e._s(t.result))])],1)],1),n("p")])})),n("p")],2)},c=[],a=(n("fb6a"),n("bc3a")),u=n.n(a),l=u.a.create({baseURL:"/api",timeout:1e3}),f={credit:function(e){return l.post("/account/credit/"+e)},debit:function(e){return l.post("/account/debit/"+e)},getHistory:function(){return l.get("/account/history")}},p={name:"bootstrap",data:function(){return{history:[],errors:[]}},methods:{callDebitApi:function(e){var t=this;f.debit(e).then((function(e){console.log(e)})).catch((function(e){t.errors.push(e)})),this.callHistoryApi()},callCreditApi:function(e){var t=this;f.credit(e).then((function(e){console.log(e)})).catch((function(e){alert(e),t.errors.push(e)})),this.callHistoryApi()},callHistoryApi:function(){var e=this;f.getHistory().then((function(t){e.history=t.data.slice().reverse()})).catch((function(t){e.errors.push(t)}))}}},d=p,g=(n("d168"),n("2877")),h=Object(g["a"])(d,i,c,!1,null,"2f5a08d7",null),b=h.exports,v={name:"app",components:{Bootstrap:b},data:function(){return{msg:"Welcome to your Vue.js powered Spring Boot App"}}},m=v,_=(n("5c0b"),Object(g["a"])(m,o,s,!1,null,null,null)),y=_.exports,w=(n("45fc"),n("8c4f")),P=(n("d3b7"),n("2f62"));r["default"].use(P["a"]);var O=new P["a"].Store({state:{loginSuccess:!1,loginError:!1,userName:null,userPass:null},mutations:{login_success:function(e,t){e.loginSuccess=!0,e.userName=t.userName,e.userPass=t.userPass},login_error:function(e,t){e.loginError=!0,e.userName=t.userName}},actions:{login:function(e,t){var n=e.commit,r=t.user,o=t.password;return new Promise((function(e,t){console.log("Accessing backend with user: '"+r),f.getSecured(r,o).then((function(t){console.log("Response: '"+t.data+"' with Statuscode "+t.status),200==t.status&&(console.log("Login successful"),n("login_success",{userName:r,userPass:o})),e(t)})).catch((function(e){console.log("Error: "+e),n("login_error",{userName:r}),t("Invalid credentials!")}))}))}},getters:{isLoggedIn:function(e){return e.loginSuccess},hasLoginErrored:function(e){return e.loginError},getUserName:function(e){return e.userName},getUserPass:function(e){return e.userPass}}});r["default"].use(w["a"]);var j=new w["a"]({mode:"history",routes:[{path:"/",component:b},{path:"*",redirect:"/"}]});j.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?O.getters.isLoggedIn?n():n({path:"/login"}):n()}));var A=j,S=n("5f5b");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(S["a"]),new r["default"]({router:A,store:O,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"8a99":function(e,t,n){},"9c0c":function(e,t,n){},d168:function(e,t,n){"use strict";var r=n("8a99"),o=n.n(r);o.a}});
//# sourceMappingURL=app.305f619e.js.map