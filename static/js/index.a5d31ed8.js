webpackJsonp([1],{0:function(t,e,n){t.exports=n("msSN")},"1HF7":function(t,e){},"406b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return f}),n.d(e,"mutations",function(){return d}),n.d(e,"getters",function(){return p}),n.d(e,"actions",function(){return h});var r=n("Xxa5"),o=n.n(r),a=n("mvHQ"),s=n.n(a),i=n("exGp"),c=n.n(i),u=n("mtWM"),l=n.n(u),f=function(){return{account:"",passwd:"",auth:!1,baseInfo:{name:"",xueyuan:"",major:"",when:"",class:""},score:[],classes:[]}},d={loginSuccess:function(t,e){t.account=e.account,t.passwd=e.passwd,t.auth=!0},setBaseInfo:function(t,e){t.baseInfo=e},setScore:function(t,e){t.score=e},setClasses:function(t,e){t.classes=e}},p={isLogin:function(t){return t.auth}},h={loginSuccess:function(t,e){(0,t.commit)("loginSuccess",e)},setAllInfo:function(){var t=c()(o.a.mark(function t(e){var n=e.commit,r=e.state;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/get_baseinfo",s()({account:r.account,passwd:r.passwd})).then(function(t){0===t.data.code&&n("setBaseInfo",t.data.baseinfo)}).catch(function(t){console.log(t)});case 2:return t.next=4,l.a.post("/get_score",s()({account:r.account,passwd:r.passwd})).then(function(t){0===t.data.code&&n("setScore",t.data.scores)}).catch(function(t){console.log(t)});case 4:return t.next=6,l.a.post("/get_all_class",s()({account:r.account,passwd:r.passwd})).then(function(t){0===t.data.code&&n("setClasses",t.data.classes)}).catch(function(t){console.log(t)});case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},"45Ns":function(t,e){},"5e9e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{enable:!0,type:"none",effect:"none"}},o={setType:function(t,e){t.type=e},setEffect:function(t,e){t.effect=e}}},"6O1j":function(t,e){},CJsk:function(t,e){},FcQb:function(t,e){},Fr4H:function(t,e){},LOWA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"SET_PAGE_SCROLL_POSITION",function(){return i}),n.d(e,"state",function(){return c}),n.d(e,"mutations",function(){return u}),n.d(e,"actions",function(){return l});var r=n("bOdI"),o=n.n(r),a=n("Dd8w"),s=n.n(a),i="SET_PAGE_SCROLL_POSITION",c=function(){return{scrollPostionMap:{}}},u=o()({},i,function(t,e){var n=e.pageId,r=e.scrollPosition;t.scrollPostionMap=s()({},t.scrollPostionMap,o()({},n,r))}),l={savePageScrollPosition:function(t,e){var n=t.commit,r=e.pageId,o=e.scrollPosition;n(i,{pageId:r,scrollPosition:o})}}},T1u8:function(t,e){},Uz7q:function(t,e){t.exports={buildVersion:1534778833140,build:{ssr:!1,publicPath:"/",compress:!0,cssExtract:!0},middleware:{all:[],server:[],client:[]},router:{mode:"history",base:"/",pageTransition:{type:"fade",transitionClass:"fade"}},errorHandler:{defaultErrorMessage:"Internal Server Error",showRealErrorMessage:!1,errorPath:"/error"},serviceWorker:{swDest:"/home/hengyuliang/WebstormProjects/jgsu-lavas/dist/service-worker.js"},skeleton:{enable:!0,asyncCSS:!0}}},VfP6:function(t,e,n){var r={"./pageTransition.js":"5e9e","./scrollBehavior.js":"LOWA","./user.js":"406b"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="VfP6"},ZFl9:function(t,e){},"b+jc":function(t,e){},"d8/S":function(t,e){},gHRC:function(t,e){},msSN:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("//Fk"),o=n.n(r),a=n("Gu7T"),s=n.n(a),i=n("Xxa5"),c=n.n(i),u=n("exGp"),l=n.n(u),f=n("/5sW"),d=n("1nuA"),p=function(){var t=l()(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();function h(t,e){var n={isClient:!0,app:e,store:t.store,route:t.to,from:t.from},r=t.next;return n.params=n.route.params||{},n.query=n.route.query||{},n.redirect=function(t){var e=t.status,o=void 0===e?302:e,a=t.path,s=void 0===a?"":a,i=t.query,c=void 0===i?{}:i,u=t.external,l=void 0!==u&&u;n._redirected=!0,r({path:s,query:c,status:o,external:l})},n}var v=function(){var t=l()(c.a.mark(function t(e,n){var r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=0;case 1:if(!(r<e.length)){t.next=9;break}if(!n._redirected){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,m(e[r],n);case 6:r++,t.next=1;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();function m(t,e){var n=void 0;return 2===t.length?n=new o.a(function(n,r){t(e,function(t,o){t?(e.error(t),r(t)):n(o)})}):(n=t(e))&&(n instanceof o.a||"function"==typeof n.then)||(n=o.a.resolve(n)),n}var b=n("Uz7q"),w=n.n(b),_=n("Dd8w"),g=n.n(_),y=n("p3jY"),x=n.n(y),T=n("NYxO"),k=n("ppUw"),S=n.n(k),P=n("mtWM"),$=n.n(P),E=n("Au9i"),j=n.n(E),O=(n("d8/S"),n("/ocq")),C={name:"appshell",metaInfo:{title:"Lavas",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}],bodyAttrs:{"empty-appshell":void 0}}},I=n("XyMi"),A=Object(I.a)(C,function(){var t=this.$createElement;return(this._self._c||t)("div")},[],!1,null,null,null).exports,M=n("fZjL"),L=n.n(M),q={name:"error",computed:{message:function(){return this.$route.params.error||"您访问的路径不存在"}},created:function(){var t=this.$route.query;0!==L()(t).length&&this.$router.replace({name:"error",params:t})}};var F=function(t){n("45Ns")},W=Object(I.a)(q,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-error"},[e("p",[this._v(this._s(this.message))])])},[],!1,F,"data-v-b5544618",null).exports,R=n("mvHQ"),B=n.n(R),U={name:"LoginForm",data:function(){return{user:{account:"",passwd:""}}},methods:{login:function(){var t=this;E.Indicator.open({text:"登陆中...",spinnerType:"fading-circle"}),this.$axios.post("/auth",B()(t.user)).then(function(e){E.Indicator.close(),0===e.data.code?t.$store.dispatch("user/loginSuccess",t.user).then(function(){t.$cookies.set("auth",!0,-1),t.$cookies.set("account",t.user.account,-1),t.$cookies.set("passwd",t.user.passwd,-1),Object(E.Toast)({message:"登录成功",iconClass:"el-icon-t-check-circle-fill"}),t.$router.push("/")}):Object(E.Toast)({message:"登录失败",iconClass:"el-icon-t-frown-fill"})}).catch(function(t){console.log(t),E.Indicator.close(),Object(E.Toast)({message:"网络错误",iconClass:"el-icon-t-frown-fill"})})}}};var H=function(t){n("T1u8")},D=Object(I.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login-form"}},[n("mt-field",{attrs:{label:"学号",placeholder:"请输入学号"},model:{value:t.user.account,callback:function(e){t.$set(t.user,"account",e)},expression:"user.account"}}),t._v(" "),n("mt-field",{attrs:{label:"密码",placeholder:"请输入教务网密码",type:"password"},model:{value:t.user.passwd,callback:function(e){t.$set(t.user,"passwd",e)},expression:"user.passwd"}}),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.login}},[n("i",{staticClass:"el-icon-t-login"}),t._v("\n        登录\n    ")])],1)},[],!1,H,"data-v-0f45e7b0",null).exports,N={data:function(){return{}},components:{LoginForm:D},computed:g()({},Object(T.c)("user",{userInfo:function(t){return t.baseInfo}}))},V=Object(I.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    欢迎 "+t._s(t.userInfo.name)+"\n    "),n("br"),t._v("\n    "+t._s(t.userInfo.xueyuan)+",\n    "+t._s(t.userInfo.major)+"\n")])},[],!1,null,null,null).exports,G={name:"ClassTable",computed:g()({},Object(T.c)("user",{classes:function(t){return t.classes},zc:function(t){return t.zc}}),{getCurrentWeek:function(){return classes.filter(function(t){return!!t["上课周次"].includes(3)})}}),methods:{}};var z=function(t){n("6O1j")},X=Object(I.a)(G,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("mt-header",{attrs:{fixed:"",title:"课程表  "}},[e("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),this._v(" "),e("mt-cell",{attrs:{title:"周次",value:this.zc}}),this._v(" "),this._m(0)],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{width:"100%"}},[n("thead",[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("周一")]),t._v(" "),n("th",[t._v("周二")]),t._v(" "),n("th",[t._v("周三")]),t._v(" "),n("th",[t._v("周四")]),t._v(" "),n("th",[t._v("周五")]),t._v(" "),n("th",[t._v("周六")]),t._v(" "),n("th",[t._v("周日")])])]),t._v(" "),n("tbody",[n("tr"),t._v(" "),n("tr"),t._v(" "),n("tr")])])}],!1,z,"data-v-05e8bc92",null).exports,J=n("BO1k"),Q=n.n(J),Y=n("c/Tr"),Z=n.n(Y),K=n("lHA8"),tt=n.n(K),et={name:"ScoreSpan",props:{score:String},computed:{scoreColor:function(){var t=this.score;return{bad:parseInt(t)<60,good:parseInt(t)>80}}}};var nt=function(t){n("vfwO")},rt={name:"ScoreTable",components:{ScoreSpan:Object(I.a)(et,function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.scoreColor},[this._v(this._s(this.score))])},[],!1,nt,"data-v-40b76298",null).exports},computed:g()({},Object(T.c)("user",{scores:function(t){return t.score}}),{xqs:function(){var t=new tt.a,e=!0,n=!1,r=void 0;try{for(var o,a=Q()(this.scores);!(e=(o=a.next()).done);e=!0){var s=o.value;t.add(s.xq)}}catch(t){n=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw r}}return console.log(Z()(t)),Z()(t)}})};var ot=function(t){n("b+jc")},at={name:"index",components:{User:V,ClassTable:X,ScoreTable:Object(I.a)(rt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-index-list",t._l(t.xqs,function(e){return n("mt-index-section",{attrs:{index:e}},t._l(t.scores,function(r){return r.xq===e?n("mt-cell",{attrs:{title:r.classname,label:r.bukao}},[n("score-span",{attrs:{score:r.score}})],1):t._e()}))}))],1)},[],!1,ot,"data-v-32f377cf",null).exports},metaInfo:{title:"Home",titleTemplate:"%s - JGSU",meta:[{name:"keywords",content:"lavas PWA"},{name:"description",content:"基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题"}]},created:function(){this.$store.dispatch("user/setAllInfo").then(function(){console.log("index : setAllInfo")})},data:function(){return{selected:"课表"}}};var st=function(t){n("Fr4H")},it={name:"Login",components:{LoginForm:D}};var ct=function(t){n("FcQb")},ut=[{path:"/appshell",component:A,meta:{},name:"appshell"},{path:"/",component:Object(I.a)(at,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"课表"}},[n("class-table")],1),t._v(" "),n("mt-tab-container-item",{attrs:{id:"成绩"}},[n("score-table")],1),t._v(" "),n("mt-tab-container-item",{attrs:{id:"我的"}},[n("user")],1)],1),t._v(" "),n("mt-tabbar",{attrs:{fixed:!0},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"课表"}},[n("i",{staticClass:"el-icon-t-table",attrs:{slot:"icon"},slot:"icon"}),t._v("\n            课表\n        ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"成绩"}},[n("i",{staticClass:"el-icon-t-calculator",attrs:{slot:"icon"},slot:"icon"}),t._v("\n            成绩\n        ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"我的"}},[n("i",{staticClass:"el-icon-t-user",attrs:{slot:"icon"},slot:"icon"}),t._v("\n            我的\n        ")])],1)],1)},[],!1,st,"data-v-1a30e90d",null).exports,meta:{},name:"index"},{path:"/login",component:Object(I.a)(it,function(){var t=this.$createElement;return(this._self._c||t)("login-form")},[],!1,ct,"data-v-66033c2a",null).exports,meta:{},name:"login"},{path:"/error",component:W,meta:{},name:"error",alias:"*"}];f.default.use(O.a);var lt=function(t,e,n){if(n)return n;var r={};return t.hash&&(r.selector=t.hash),t.matched.some(function(t){return t.meta.scrollToTop})&&(r.x=0,r.y=0),r},ft=ut.filter(function(t){return t.keepAlive||t.meta.keepAlive}).map(function(t){return t.name});var dt=n("woOf"),pt=n.n(dt);f.default.use(T.a);var ht=n("VfP6"),vt=ht.keys(),mt={},bt=!0,wt=!1,_t=void 0;try{for(var gt,yt=Q()(vt);!(bt=(gt=yt.next()).done);bt=!0){var xt=gt.value;if("./index.js"===xt){mt=At(xt);break}}}catch(t){wt=!0,_t=t}finally{try{!bt&&yt.return&&yt.return()}finally{if(wt)throw _t}}if("function"!=typeof mt){mt.modules=mt.modules||{};var Tt=!0,kt=!1,St=void 0;try{for(var Pt,$t=Q()(vt);!(Tt=(Pt=$t.next()).done);Tt=!0){var Et=Pt.value;if("./index.js"!==Et){var jt=Et.replace(/^\.\//,"").replace(/\.js$/,""),Ot=jt.split("/"),Ct=Mt(mt,Ot);Ct[jt=Ot.pop()]=At(Et),Ct[jt].namespaced=!0}}}catch(t){kt=!0,St=t}finally{try{!Tt&&$t.return&&$t.return()}finally{if(kt)throw St}}}var It=mt instanceof Function?mt:function(){return new T.a.Store(pt()({},mt,{state:mt.state instanceof Function?mt.state():{}}))};function At(t){var e=ht(t),n=e.default||e;if(n.commit)throw new Error("[lavas] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[lavas] state should be a function in store/"+t.replace("./",""));return n}function Mt(t,e){if(1===e.length)return t.modules;var n=e.shift(),r=t.modules[n]=t.modules[n]||{};return r.namespaced=!0,r.modules=r.modules||{},Mt(r,e)}var Lt={name:"updateToast",props:{text:{type:String,default:"站点发生更新，请手动刷新"}},data:function(){return{show:!1}},mounted:function(){window.addEventListener("sw.update",this.handleUpdate)},beforeDestroy:function(){window.removeEventListener("sw.update",this.handleUpdate)},methods:{handleUpdate:function(t){this.show=!0},handleRefresh:function(){window.location.reload()}}};var qt=function(t){n("1HF7")},Ft={name:"app",components:{UpdateToast:Object(I.a)(Lt,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"popup"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"update-toast"},[e("span",[this._v(this._s(this.text))]),this._v(" "),e("span",{staticClass:"update-toast-close-btn",on:{click:this.handleRefresh}},[e("i",{staticClass:"iconfont icon-refresh"})])])])},[],!1,qt,"data-v-4364d9fc",null).exports},computed:g()({},Object(T.c)("pageTransition",{pageTransitionType:function(t){return t.type},pageTransitionEffect:function(t){return t.effect}}),Object(T.c)("scrollBehavior",{scrollPostionMap:function(t){return t.scrollPostionMap}}),{pageTransitionClass:function(){return"transition-"+this.pageTransitionType},routerViewKey:function(){var t=this.$route,e=t.name,n=t.params,r=L()(n);return r.length?e+r.reduce(function(t,e){return t+n[e]},""):null}}),beforeCreate:function(){if(console.log(this.$cookies.get("auth")),"true"!==this.$cookies.get("auth"))this.$router.push("/login");else{var t={account:this.$cookies.get("account"),passwd:this.$cookies.get("passwd")};this.$store.dispatch("user/loginSuccess",t).then(function(){console.log("设置个人信息成功")}),this.$router.push("/")}},data:function(){return{keepAlivePages:ft}},methods:g()({},Object(T.b)("scrollBehavior",["savePageScrollPosition"]),{restoreContainerScrollPosition:function(t,e){t.classList.add("app-view-scroll-enabled"),t.scrollTop=e},restoreBodyScrollPosition:function(t,e){t.classList.remove("app-view-scroll-enabled"),document.body.scrollTop=document.documentElement.scrollTop=e},handleBeforeEnter:function(t){var e=this,n=t.dataset.pageId,r=(this.scrollPostionMap[n]||{}).y,o=void 0===r?0:r;f.default.nextTick(function(){e.restoreContainerScrollPosition(t,o)})},handleAfterEnter:function(t){var e=t.dataset.pageId,n=(this.scrollPostionMap[e]||{}).y,r=void 0===n?0:n;this.restoreBodyScrollPosition(t,r)},handleBeforeLeave:function(t){var e=t.dataset.pageId,n=document.body.scrollTop||document.documentElement.scrollTop;this.restoreContainerScrollPosition(t,n),this.savePageScrollPosition({pageId:e,scrollPosition:{y:n}})}})};var Wt=function(t){n("gHRC")},Rt=Object(I.a)(Ft,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:t.pageTransitionEffect},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter,"before-leave":t.handleBeforeLeave}},[n("keep-alive",{attrs:{include:[].concat(t.keepAlivePages)}},[n("router-view",{key:t.routerViewKey,class:["app-view",t.pageTransitionClass],attrs:{"data-page-id":t.$route.fullPath}})],1)],1),t._v(" "),n("update-toast")],1)},[],!1,Wt,null,null).exports;f.default.use(x.a),f.default.use(S.a),f.default.use(T.a),f.default.use(j.a),$.a.defaults.baseURL="https://jgsu.xiaoliublog.cn:50080/api_v1",f.default.prototype.$axios=$.a,f.default.config.productionTip=!1;var Bt={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}};var Ut=function(t){n("ZFl9")},Ht=Object(I.a)(Bt,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,Ut,"data-v-2e9576fc",null).exports,Dt=n("p5k0"),Nt=n.n(Dt),Vt=n("XGXE"),Gt=n.n(Vt);n("MU8w"),n("CJsk");Nt.a.shim(),Gt.a.shim();var zt=f.default.prototype.$loading=new f.default(Ht).$mount(),Xt=function(){var t=function(){var t=new O.a({mode:"history",base:"/",scrollBehavior:lt,routes:ut});return t.beforeEach(function(e,n,r){t.app.$store&&t.app.$store.state.pageTransition.enable&&(t.app.$store.commit("pageTransition/setType","fade"),t.app.$store.commit("pageTransition/setEffect","fade")),r()}),t}();t.beforeEach(function(t,n,r){"/"===t.fullPath&&(e.state.user.auth?r():r("/login")),r()});var e=It();return{App:f.default.extend(g()({router:t,store:e},Rt)),router:t,store:e}}(),Jt=Xt.App,Qt=Xt.router,Yt=Xt.store,Zt=w.a.build,Kt=Zt.ssr,te=Zt.cssExtract,ee=w.a.middleware,ne=void 0===ee?{}:ee,re=w.a.skeleton,oe=re.enable,ae=re.asyncCSS,se=void 0;window.__INITIAL_STATE__&&Yt.replaceState(window.__INITIAL_STATE__),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),document.body.appendChild(zt.$el),f.default.mixin({beforeRouteUpdate:function(){var t=l()(c.a.mark(function t(e,n,r){var o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(o=this.$options.asyncData)?(zt.start(),o.call(this,{store:this.$store,route:e}).then(function(){zt.finish(),r()}).catch(r)):r();case 2:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}()});var ie=!0;if(function(){var t=this;Qt.beforeEach(function(){var e=l()(c.a.mark(function e(n,r,o){var a,i,u,l,f,m,b;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(ie||n.path!==r.path){t.next=2;break}return t.abrupt("return",o());case 2:return ie=!1,a=Qt.getMatchedComponents(n),i=[].concat(s()(ne.all||[]),s()(ne.client||[]),s()(a.filter(function(t){var e=t.middleware;return!!e}).reduce(function(t,e){var n=e.middleware;return t.concat(n)},[]))),t.next=7,p(i);case 7:if(u=t.sent,!(l=i.find(function(t){return"function"!=typeof u[t]}))){t.next=11;break}throw new Error("Unknown middleware "+l);case 11:return f=!1,m=h({to:n,from:r,store:Yt,next:function(t){if(zt.finish&&zt.finish(),!f){if(f=!0,t.external)return t.query=Object(d.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:""),window.location.replace(t.path),o();o(t)}}},se),b=i.map(function(t){return u[t]}),t.next=17,v(b,m);case 17:f||o();case 18:case"end":return t.stop()}},e,t)}));return function(t,n,r){return e.apply(this,arguments)}}())}(),!document.body.hasAttribute("empty-appshell")&&Kt)se=new Jt,Qt.onReady(function(){ue(),se.$mount("#app")});else{var ce=oe&&ae&&te;window.mountLavas=function(){setTimeout(function(){var t=document.querySelector("#app");t&&(t.innerHTML=""),se.$mount("#app")},0)},ue(),se=new Jt,(Kt||!ce||ce&&window.STYLE_READY)&&window.mountLavas()}function ue(){var t=this;Qt.beforeResolve(function(e,n,r){var a=Qt.getMatchedComponents(e),s=Qt.getMatchedComponents(n),i=!1,u=a.filter(function(t,e){return i||(i=s[e]!==t)});if(!u.length)return r();zt.start(),o.a.all(u.filter(function(t){return t.asyncData&&(!t.asyncDataFetched||!e.meta.keepAlive)}).map(function(){var n=l()(c.a.mark(function n(r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.asyncData({store:Yt,route:e});case 2:r.asyncDataFetched=!0;case 3:case"end":return t.stop()}},n,t)}));return function(t){return n.apply(this,arguments)}}())).then(function(){zt.finish(),r()}).catch(r)})}},vfwO:function(t,e){}},[0]);
//# sourceMappingURL=index.a5d31ed8.js.map