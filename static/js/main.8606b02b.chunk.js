(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(43),a=n(4),s="dialogs/ADD-MESSAGE",i={dialogsData:[{id:1,name:"Vlad"},{id:2,name:"Slava"},{id:3,name:"Nadia"},{id:4,name:"Bohdan"},{id:5,name:"Dima"},{id:6,name:"Bodia"},{id:7,name:"John"}],messagesData:[{id:1,message:"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:2,message:"s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{id:3,message:"Have you seen a match yestarday?"},{id:4,message:"opa"},{id:5,message:"hello"},{id:6,message:"dream"}]},o=function(e){return{type:s,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.newMessage;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:8,message:n}])})}return e}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(4),a=n(29),s=n(30),i=n(31),o=n(32),c=n(0),u=n.n(c),l=n(11),d=n(12),j=n(1),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(o.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(r.a)({},this.props)):Object(j.jsx)(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(d.b)(p)(t)}},15:function(e,t,n){e.exports={nav:"Navbar_nav__20G1R",item:"Navbar_item__1zq1T",activeLink:"Navbar_activeLink__2WQfe",friendsItem:"Navbar_friendsItem__1HmhU"}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(135),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"8c1529af-18c5-414f-8830-1f8a4826cd87"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getUserProfile:function(e){return console.log("Obsolete method. Please profileAPI object."),i.getUserProfile(e)}},i={getUserProfile:function(e){return a.get("profile/".concat(e))},getUserStatus:function(e){return a.get("profile/status/".concat(e))},updateUserStatus:function(e){return a.put("profile/status",{status:e})}},o={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logOut:function(){return a.delete("auth/login")}}},23:function(e,t,n){e.exports={formControl:"FormsControllers_formControl__IcJdf",error:"FormsControllers_error__1m9RV",errorSign:"FormsControllers_errorSign__2DYwz",tooltip:"FormsControllers_tooltip__20ZB2",dialogsFrom:"FormsControllers_dialogsFrom__2UQMQ",postForm:"FormsControllers_postForm__2gO3t",loginForm:"FormsControllers_loginForm__3tzb2",commonFormError:"FormsControllers_commonFormError__3DYWZ"}},250:function(e,t,n){},251:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},a=n(9),s=n(99),i=n(109),o={friends:[{id:1,name:"Vlad"},{id:2,name:"Slava"},{id:3,name:"Nadia"},{id:4,name:"Bohdan"},{id:5,name:"Dima"},{id:6,name:"Bodia"},{id:7,name:"John"}]},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return e},u=n(20),l=n(43),d=n(4),j=n(10),p=n.n(j),f=n(17),b=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(d.a)(Object(d.a)({},e),r):e}))},h="users/FOLLOW",g="users/UNFOLLOW",m="users/SET_USERS",O="users/SET_CURRENT_PAGE",v="users/SET_TOTAL_USERS_COUNT",x="users/TOGGLE_IS_FETCHING",w="users/TOGGLE_IS_FOLLOWING_PROGRESS",y={users:[],newPostText:"",pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},_=function(e){return{type:h,userId:e}},P=function(e){return{type:g,userId:e}},C=function(e){return{type:O,currentPage:e}},S=function(e){return{type:x,isFetching:e}},k=function(e,t){return{type:w,isFetching:e,userId:t}},I=function(){var e=Object(u.a)(p.a.mark((function e(t,n,r,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(k(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(d.a)(Object(d.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!0})});case g:return Object(d.a)(Object(d.a)({},e),{},{users:b(e.users,t.userId,"id",{followed:!1})});case m:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case O:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case v:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.totalCount});case x:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case w:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},F=n(56),L="auth/SET_USER_DATA",U={email:null,id:null,login:null,isAuth:!1},E=function(e,t,n,r){return{type:L,payload:{email:e,id:t,login:n,isAuth:r}}},A=function(){return function(){var e=Object(u.a)(p.a.mark((function e(t){var n,r,a,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.email,s=r.id,i=r.login,t(E(a,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type===L?Object(d.a)(Object(d.a)({},e),t.payload):e},z=n(137),D=n(134),M="app/INITIALIZED_SUCCESS",R={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;return t.type===M?Object(d.a)(Object(d.a)({},e),{},{initialized:!0}):e},B=Object(a.c)({profilePage:s.b,dialogsPage:i.b,sidebar:c,usersPage:N,auth:T,form:D.a,app:G}),H=Object(a.e)(B,Object(a.a)(z.a)),q=n(0),J=n.n(q),Q=n(67),W=n.n(Q),V=(n(250),n(29)),Y=n(30),Z=n(31),X=n(32),K=(n(251),n(77)),$=n.n(K),ee=n(139),te=n(138),ne=n(16),re=n(1),ae=function(e){return Object(re.jsxs)("header",{className:$.a.header,children:[Object(re.jsx)(te.a,{className:$.a.icon,icon:ee.a,size:"3x"}),Object(re.jsx)("div",{className:$.a.loginBlock,children:e.isAuth?Object(re.jsxs)("div",{children:[e.login," ",Object(re.jsx)("button",{onClick:e.logOut,children:"Log Out"})]}):Object(re.jsx)(ne.b,{to:"/login",children:"Login"})})]})},se=n(12),ie=function(e){Object(Z.a)(n,e);var t=Object(X.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"render",value:function(){return Object(re.jsx)(ae,Object(d.a)({},this.props))}}]),n}(J.a.Component),oe=Object(se.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logOut:function(){return function(){var e=Object(u.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.logOut();case 2:0===e.sent.data.resultCode&&t(E(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ie),ce=n(15),ue=n.n(ce),le=function(e){var t=e.state.sidebar.friends.slice(0,3),n=Object(re.jsx)("img",{src:"https://mc.today/wp-content/uploads/2020/05/photo_2018-04-29_17-44-53.jpg",alt:"dialog-avatar"}),r=t.map((function(e){return Object(re.jsxs)("li",{children:[n,Object(re.jsx)("p",{children:e.name})]},e.id)}));return Object(re.jsx)("nav",{className:ue.a.nav,children:Object(re.jsxs)("ul",{children:[Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/Profile",activeClassName:ue.a.activeLink,children:"Profile"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/Users",activeClassName:ue.a.activeLink,children:"Users"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/Dialogs",activeClassName:ue.a.activeLink,children:"Messages"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/Music",activeClassName:ue.a.activeLink,children:"Music"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/News",activeClassName:ue.a.activeLink,children:"News"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsx)(ne.b,{to:"/Settings",activeClassName:ue.a.activeLink,children:"Settings"})}),Object(re.jsx)("li",{className:ue.a.item,children:Object(re.jsxs)("div",{className:ue.a.friendsItem,children:["Friends",Object(re.jsx)("ul",{children:r})]})})]})})},de=Object(se.b)((function(e){return{state:e}}),(function(){return{}}))(le),je=function(){return Object(re.jsx)("div",{children:"Music"})},pe=function(){return Object(re.jsx)("div",{children:"News"})},fe=function(){return Object(re.jsx)("div",{children:"Settings"})},be=n(44),he=n(73),ge=n(133),me=n(78),Oe=n.n(me),ve=n(142),xe=n.n(ve),we=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),c=[],u=1;u<=o;u++)c.push(u);var l=Math.ceil(t/i),d=Object(q.useState)(1),j=Object(ge.a)(d,2),p=j[0],f=j[1],b=(p-1)*i+1,h=p*i;return Object(re.jsxs)("div",{className:Oe.a.paginator,children:[p>1&&Object(re.jsx)("button",{onClick:function(){f(p-1)},children:"PREV"}),c.filter((function(e){return e>=b&&e<=h})).map((function(e){return Object(re.jsx)("span",{className:xe()(Object(he.a)({},Oe.a.selectedPage,r===e),Oe.a.pageNumber),onClick:function(){a(e)},children:e},e)})),l>p&&Object(re.jsx)("button",{onClick:function(){f(p+1)},children:"NEXT"})]})},ye=n(75),_e=n.n(ye),Pe=n.p+"static/media/user.1efa4915.jfif",Ce=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(re.jsx)("div",{children:Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{children:Object(re.jsx)(ne.b,{to:"/Profile/"+t.id,children:Object(re.jsx)("img",{src:null!=t.photos.small?t.photos.small:Pe,className:_e.a.userPhoto,alt:"sheva"})})}),Object(re.jsx)("div",{children:t.followed?Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(re.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{children:t.name}),Object(re.jsx)("div",{children:t.status})]}),Object(re.jsxs)("div",{children:[Object(re.jsx)("div",{children:"user.location.country"}),Object(re.jsx)("div",{children:"user.location.city"})]})]})})},Se=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],ke=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,s=e.users,i=Object(be.a)(e,Se);return Object(re.jsxs)("div",{children:[Object(re.jsx)(we,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),s.map((function(e){return Object(re.jsx)(Ce,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))]})},Ie=n(39),Ne=n(120),Fe=function(e){return e.usersPage.users},Le=function(e){return e.usersPage.pageSize},Ue=function(e){return e.usersPage.totalUsersCount},Ee=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Te=function(e){return e.usersPage.followingInProgress},ze=function(e){Object(Z.a)(n,e);var t=Object(X.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.toggleIsFetching(!0),e.props.setCurrentPage(t),e.props.requestUsers(t,n)},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(re.jsxs)(re.Fragment,{children:[this.props.isFetching?Object(re.jsx)(Ie.a,{}):null,Object(re.jsx)(ke,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress})]})}}]),n}(J.a.Component),De=Object(a.d)(Ne.a,Object(se.b)((function(e){return{users:Fe(e),pageSize:Le(e),totalUsersCount:Ue(e),currentPage:Ee(e),isFetching:Ae(e),followingInProgress:Te(e)}}),{follow:function(e){return function(){var t=Object(u.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,f.c.follow.bind(f.c),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(u.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,f.c.unfollow.bind(f.c),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:C,toggleFollowingProgress:k,toggleIsFetching:S,requestUsers:function(e,t){return function(){var n=Object(u.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S(!0)),r(C(e)),n.next=4,f.c.getUsers(e,t);case 4:a=n.sent,r(S(!1)),r((i=a.items,{type:m,users:i})),r((s=a.totalCount,{type:v,totalCount:s}));case 8:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ze),Me=n(11),Re=n(131),Ge=n(132),Be=n(69),He=n(70),qe=n(23),Je=n.n(qe),Qe=Object(Ge.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(re.jsxs)("form",{onSubmit:t,children:[Object(re.jsx)("div",{children:Object(re.jsx)(Re.a,{placeholder:"Email",name:"email",validate:[He.b],component:Be.c})}),Object(re.jsx)("div",{children:Object(re.jsx)(Re.a,{placeholder:"password",name:"password",validate:[He.b],component:Be.c})}),Object(re.jsxs)("div",{children:[Object(re.jsx)(Re.a,{type:"checkbox",name:"rememberMe",validate:[He.b],component:Be.c})," ","remember me"]}),n&&Object(re.jsx)("div",{className:Je.a.commonFormError,children:n}),Object(re.jsx)("div",{children:Object(re.jsx)("button",{children:"Log in"})})]})})),We=Object(se.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(u.a)(p.a.mark((function r(a){var s,i;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(A()):(i=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(F.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(re.jsx)(Me.a,{to:"/profile"}):Object(re.jsxs)("div",{children:[Object(re.jsx)("h1",{children:"Login"}),Object(re.jsx)(Qe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ve=function(e){return function(t){return Object(re.jsx)(J.a.Suspense,{fallback:Object(re.jsx)(Ie.a,{}),children:Object(re.jsx)(e,Object(d.a)({},t))})}},Ye=J.a.lazy((function(){return n.e(4).then(n.bind(null,306))})),Ze=J.a.lazy((function(){return n.e(3).then(n.bind(null,305))})),Xe=function(e){Object(Z.a)(n,e);var t=Object(X.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(re.jsxs)("div",{className:"app-wrapper",children:[Object(re.jsx)(oe,{}),Object(re.jsx)(Me.b,{path:"/",render:function(){return Object(re.jsx)(de,{})}}),Object(re.jsxs)("div",{className:"app-wrapper-content",children:[Object(re.jsx)(Me.b,{path:"/profile/:userId?",render:Ve(Ze)}),Object(re.jsx)(Me.b,{path:"/dialogs",render:Ve(Ye)}),Object(re.jsx)(Me.b,{path:"/login",render:function(){return Object(re.jsx)(We,{})}}),Object(re.jsx)(Me.b,{path:"/users",render:function(){return Object(re.jsx)(De,{})}}),Object(re.jsx)(Me.b,{path:"/music",render:je}),Object(re.jsx)(Me.b,{path:"/news",render:pe}),Object(re.jsx)(Me.b,{path:"/settings",render:fe})]})]}):Object(re.jsx)(Ie.a,{})}}]),n}(q.Component),Ke=Object(a.d)(Me.f,Object(se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(A()).then((function(){e({type:M})}))}}}))(Xe),$e=function(e){return Object(re.jsx)(ne.a,{children:Object(re.jsx)(se.a,{store:H,children:Object(re.jsx)(Ke,{})})})};W.a.render(Object(re.jsx)(J.a.StrictMode,{children:Object(re.jsx)($e,{})}),document.getElementById("root")),window.store=H,r()},39:function(e,t,n){"use strict";var r=n.p+"static/media/loader.50cd3412.gif",a=n(75),s=n.n(a),i=n(1);t.a=function(e){return Object(i.jsx)("img",{src:r,className:s.a.imgLoader,alt:"img"})}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return p}));var r=n(4),a=n(44),s=(n(0),n(23)),i=n.n(s),o=n(1),c=["input","meta"],u=["input","meta"],l=["input","meta"],d=function(e){var t=e.input,n=e.meta,s=n.touched,u=n.error,l=Object(a.a)(e,c),d=u&&s;return Object(o.jsx)("div",{className:d?i.a.postForm:"",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),l)),d&&Object(o.jsx)("div",{"data-title":u,className:i.a.errorSign+" "+i.a.tooltip,children:Object(o.jsx)("span",{children:"!"})})]})})},j=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,u),c=n.error&&n.touched;return Object(o.jsx)("div",{className:c?i.a.loginForm:"",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),s)),c&&Object(o.jsx)("div",{"data-title":n.error,className:i.a.errorSign+" "+i.a.tooltip,children:Object(o.jsx)("span",{children:"!"})})]})})},p=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,l),c=n.error&&n.touched;return Object(o.jsx)("div",{className:c?i.a.dialogsFrom:"",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),s)),c&&Object(o.jsx)("div",{"data-title":n.error,className:i.a.errorSign+" "+i.a.tooltip,children:Object(o.jsx)("span",{children:"!"})}),Object(o.jsx)("button",{children:"send"})]})})}},70:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},75:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2HQm8",imgLoader:"Users_imgLoader__3DHUL"}},77:function(e,t,n){e.exports={header:"Header_header__2ufrG",icon:"Header_icon__3PG2c",loginBlock:"Header_loginBlock__3ZXks"}},78:function(e,t,n){e.exports={paginator:"Paginator_paginator__3nQYw",pageNumber:"Paginator_pageNumber__3cxAp",selectedPage:"Paginator_selectedPage__1g1pu"}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return m}));var r=n(20),a=n(43),s=n(4),i=n(10),o=n.n(i),c=n(17),u="profile/ADD-POST",l="profile/SET_USER_PROFILE",d="profile/SET_STATUS",j="profile/DELETE_POST",p={postData:[{id:1,message:"Hey, how are you?",likesCount:23},{id:2,message:"It is my first post",likesCount:17}],profile:null,status:""},f=function(e){return{type:u,newPostText:e}},b=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.getUserProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getUserStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n=t.newPostText;return Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(a.a)(e.postData),[{id:5,message:n,likesCount:0}])});case j:return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case l:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});default:return e}}}},[[299,1,2]]]);
//# sourceMappingURL=main.8606b02b.chunk.js.map