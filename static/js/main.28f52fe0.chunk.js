(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],{126:function(e,t,n){e.exports={friends:"Friends_friends__1zAOS"}},129:function(e,t,n){},130:function(e,t,n){e.exports={block:"ProfileInfo_block__Rxxo8"}},131:function(e,t,n){e.exports={item:"Post_item__2zcpj"}},236:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),r(e),c(e)}))},c=n(9),a=n(27),o=n(5),u=n(123),l=n.n(u).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"162e6d4c-8a79-4dd3-aa4b-44b1d67a752c"}}),d=function(e,t){return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},j=function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data}))},b=function(e){return l.post("follow/".concat(e),{}).then((function(e){return e.data}))},f=function(){return l.get("auth/me").then((function(e){return e.data}))},O=function(e,t,n){return l.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},p=function(){return l.delete("auth/login").then((function(e){return e.data}))},h=function(e){return l.get("profile/".concat(e)).then((function(e){return e.data}))},m=function(e){return l.get("/profile/status/".concat(e))},g=function(e){return l.put("/profile/status/",{status:e})},v={posts:[{id:1,message:"General Kenobi!",likescount:7},{id:2,message:"Hello There",likescount:10},{id:3,message:"YOU WERE MY BROTHER ANAKIN",likescount:141}],profile:{},status:""},x="ADD-POST",k="ADD-LIKE-COUNT",z="SET_USERS_PROFILE",y="SET_USER_STATUS",P=function(e){return{type:y,status:e}},M={dialogs:[{id:1,name:"Lesha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:2,name:"Sasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:3,name:"Pasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:4,name:"Masha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:5,name:"Dasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"}],messages:[{id:1,message:"Hello",myMessage:!0},{id:2,message:"How r u today?",myMessage:!1},{id:3,message:"Bad boys what you gonna do ?",myMessage:!0},{id:4,message:"When we come for you?",myMessage:!1}]},T="ADD-MESSAGE",S=[{id:1,name:"Karina"},{id:2,name:"Kristina"},{id:3,name:"Albina"}],w={users:[],currentPage:1,totalUsersCount:19,pageSize:5,isFetching:!1,isFollowingInProgress:[]},N="FOLLOW_USER",R="UNFOLLOW_USER",J="SET-USERS",I="SET_CURRENT_PAGE",H="SET_TOTAL_USERS_COUNT",A="TOGGLE_IS_FETCHING",Z=function(e){return{type:A,payload:{isFetching:e}}},C=function(e,t){return{type:"FOLLOWING_IN_PROGRESS",payload:{id:e,isFetching:t}}},U=n(34),F={id:null,email:"",login:"",isAuth:!1},D="SET_AUTH_USER_DATA",X=function(e,t,n,s){return{type:D,payload:{id:e,email:t,login:n,isAuth:s}}},L=function(){return function(e){return f().then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,i=n.email,r=n.login;e(X(s,i,r,!0))}else{var c=t.messages.length>0?t.messages[0]:"Something wrong";e(Object(U.a)("Login",{_error:c}))}}))}},E=n(125),W=n(122),G={initialized:!1},q=Object(c.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n={id:4,message:t.post,likescount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[n])});case k:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{likescount:t.likescount+1}):e}))});case z:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case y:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n={id:5,message:t.message,myMessage:Math.random()<.5};return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(o.a)(Object(o.a)({},e),{},{users:Object(a.a)(e.users.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e})))});case R:return Object(o.a)(Object(o.a)({},e),{},{users:Object(a.a)(e.users.map((function(e){return e.id===t.payload.id?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e})))});case J:return Object(o.a)(Object(o.a)({},e),{},{users:t.payload.users});case I:case H:case A:return Object(o.a)(Object(o.a)({},e),t.payload);case"FOLLOWING_IN_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{isFollowingInProgress:t.payload.isFetching?[].concat(Object(a.a)(e.isFollowingInProgress),[t.payload.id]):e.isFollowingInProgress.filter((function(e){return e!==t.payload.id}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}},form:W.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZE_APP":return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}}}),Y=Object(c.e)(q,Object(c.a)(E.a));window.store=Y;var K=n(22),Q=n(23),B=n(25),V=n(24),_=(n(236),n(11)),$=n(29),ee=n.n($),te=n(126),ne=n.n(te),se=n(0),ie=function(e){return Object(se.jsxs)("div",{className:ne.a.friends,children:[Object(se.jsx)("h2",{children:"Friends:"}),e.friends.map((function(e,t){return Object(se.jsxs)("span",{children:[e.name," "]},t)}))]})},re=n(8),ce=function(){var e=Object(re.d)((function(e){return e.friends}));return Object(se.jsxs)("nav",{className:ee.a.nav,children:[Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/profile/",activeClassName:ee.a.active_link,children:"Profile"})}),Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/dialogs/",activeClassName:ee.a.active_link,children:"Messages"})}),Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/users/",activeClassName:ee.a.active_link,children:"Users"})}),Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/news/",activeClassName:ee.a.active_link,children:"News"})}),Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/music/",activeClassName:ee.a.active_link,children:" Music"})}),Object(se.jsx)("div",{children:Object(se.jsx)(_.b,{to:"/settings/",activeClassName:ee.a.active_link,children:"Settings"})}),Object(se.jsx)("div",{children:Object(se.jsx)(ie,{friends:e})})]})},ae=n(10),oe=function(){return Object(se.jsx)("div",{children:"Settings"})},ue=function(){return Object(se.jsx)("div",{children:"Music"})},le=function(){return Object(se.jsx)("div",{children:"News"})},de=n(48),je=n.n(de),be=n(28),fe=n(64),Oe=n.n(fe),pe=function(e){var t=e.name,n=e.id,s=Object(be.a)(e,["name","id"]);return Object(se.jsxs)("div",{className:Oe.a.item,children:[Object(se.jsx)("img",{src:s.avatar,alt:"avatar"}),Object(se.jsx)(_.b,{activeClassName:Oe.a.dialogactive,className:Oe.a.dialog,to:"/dialogs/"+n,children:t})]})},he=n(83),me=n.n(he),ge=function(e){return Object(se.jsx)("div",{className:e.myMessage?me.a.left:me.a.right,children:e.message})},ve=n(120),xe=n(121),ke=function(e){if(!e)return"Field is required"},ze=function(e){return function(t){if(t&&t.length>e)return"Maximum length is ".concat(e," symbols")}},ye=n(46),Pe=n.n(ye),Me=function(e){var t=e.input,n=(e.meta,e.children,Object(be.a)(e,["input","meta","children"]));return Object(se.jsx)(Se,Object(o.a)(Object(o.a)({},e),{},{children:Object(se.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},Te=function(e){var t=e.input,n=(e.meta,e.children,Object(be.a)(e,["input","meta","children"]));return Object(se.jsx)(Se,Object(o.a)(Object(o.a)({},e),{},{children:Object(se.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},Se=function(e){e.input;var t=e.meta,n=Object(be.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(se.jsxs)("div",{className:Pe.a.formControl+" "+(s?Pe.a.error:""),children:[Object(se.jsx)("div",{children:n.children}),Object(se.jsx)("div",{children:s&&Object(se.jsx)("span",{children:t.error})})]})},we=ze(50),Ne=Object(xe.a)({form:"dialogAddMessageForm"})((function(e){return Object(se.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(se.jsx)("div",{children:Object(se.jsx)(ve.a,{validate:[ke,we],component:Me,name:"message",placeholder:"Enter your Message"})}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{children:"send message"})})]})})),Re=function(e){return{isAuth:e.auth.isAuth}};var Je=Object(c.d)(Object(re.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{addMessage:function(t){e(function(e){return{type:T,message:e}}(t))}}})),(function(e){return Object(re.b)(Re)((function(t){var n=t.isAuth,s=Object(be.a)(t,["isAuth"]);return n?Object(se.jsx)(e,Object(o.a)({},s)):Object(se.jsx)(ae.a,{to:"/login"})}))}))((function(e){var t=e.messages.map((function(e){return Object(se.jsx)(ge,{message:e.message,myMessage:e.myMessage})})),n=e.dialogs.map((function(e){return Object(se.jsx)(pe,{name:e.name,id:e.id,avatar:e.avatar})}));return Object(se.jsxs)("div",{className:je.a.dialogs,children:[Object(se.jsx)("div",{className:je.a.dialogsItems,children:n}),Object(se.jsxs)("div",{className:je.a.messages,children:[t,Object(se.jsx)("div",{className:je.a.textarea,children:Object(se.jsx)(Ne,{onSubmit:function(t){e.addMessage(t.message)}})})]})]})})),Ie=n(86),He=n.n(Ie),Ae=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize)/100,n=[],s=1;s<=t;s++)n.push(s);return Object(se.jsxs)("div",{children:[Object(se.jsx)("div",{children:n.map((function(t){return Object(se.jsxs)("span",{className:e.currentPage===t?He.a.currentPage:"",onClick:function(){return e.onPageChanged(t)},children:[t," "]})}))}),Object(se.jsx)("p",{children:"USERS :"}),e.users.map((function(t){return Object(se.jsxs)("div",{children:[Object(se.jsx)("div",{children:Object(se.jsxs)(_.b,{to:"/profile/"+t.id,children:[" ",Object(se.jsx)("img",{src:t.photos.small?t.photos.small:"data:image/png;base64,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",alt:"avatar",className:He.a.photo})]})}),t.followed?Object(se.jsx)("button",{disabled:e.isFollowingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollowUser(t.id)},children:"Unfollow"}):Object(se.jsx)("button",{disabled:e.isFollowingInProgress.some((function(e){return e===t.id})),onClick:function(){e.followUser(t.id)},children:"Follow"}),Object(se.jsx)("div",{children:t.name}),Object(se.jsx)("div",{children:"city"}),Object(se.jsx)("div",{children:"location"}),Object(se.jsx)("div",{children:t.status})]},t.id)}))]})},Ze=n.p+"static/media/preloader.9dd581ae.gif",Ce=function(){return Object(se.jsx)("div",{children:Object(se.jsx)("img",{src:Ze,alt:"preloader"})})},Ue=function(e){return e.usersPage.users},Fe=function(e){return e.usersPage.pageSize},De=function(e){return e.usersPage.currentPage},Xe=function(e){return e.usersPage.totalUsersCount},Le=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.isFollowingInProgress},We=function(e){return e.auth.isAuth},Ge=function(e){Object(B.a)(n,e);var t=Object(V.a)(n);function n(){var e;Object(K.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(se.jsx)(se.Fragment,{children:this.props.isFetching?Object(se.jsx)(Ce,{}):Object(se.jsx)(Ae,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followUser:this.props.followUser,unfollowUser:this.props.unfollowUser,isFollowingInProgress:this.props.isFollowingInProgress,followInProgress:this.props.followInProgress})})}}]),n}(i.a.Component);var qe=Object(re.b)((function(e){return{users:Ue(e),pageSize:Fe(e),currentPage:De(e),totalUsersCount:Xe(e),isFetching:Le(e),isFollowingInProgress:Ee(e),isAuth:We(e)}}),{followUser:function(e){return function(t){t(C(e,!0)),b(e).then((function(n){0===n.resultCode&&t({type:N,payload:{id:e}}),t(C(e,!1))}))}},unfollowUser:function(e){return function(t){t(C(e,!0)),j(e).then((function(n){0===n.resultCode&&t({type:R,payload:{id:e}}),t(C(e,!1))}))}},followInProgress:C,requestUsers:function(e,t){return function(n){n(Z(!0)),n({type:I,payload:{currentPage:e}}),d(e,t).then((function(e){var t,s;n(Z(!1)),n((t=e.items,{type:J,payload:{users:t}})),n((s=e.totalCount,{type:H,payload:{totalUsersCount:s}}))}))}}})(Ge),Ye=n(129),Ke=n.n(Ye),Qe=n(130),Be=n.n(Qe),Ve=n(89),_e=function(e){var t=Object(s.useState)(e.status),n=Object(Ve.a)(t,2),i=n[0],r=n[1],c=Object(s.useState)(!1),a=Object(Ve.a)(c,2),o=a[0],u=a[1];Object(s.useEffect)((function(){r(e.status)}),[e.status]);return Object(se.jsxs)("div",{children:[!o&&Object(se.jsx)("div",{children:Object(se.jsxs)("span",{onDoubleClick:function(){u(!0)},children:[e.status||"change status"," "]})}),o&&Object(se.jsx)("div",{children:Object(se.jsx)("input",{autoFocus:!0,value:i,onBlur:function(){u(!1),e.updateUserStatus(i)},onChange:function(e){r(e.currentTarget.value)}})})]})},$e=function(e){return e.profile.photos?Object(se.jsx)("div",{children:Object(se.jsxs)("div",{className:Be.a.block,children:[Object(se.jsx)("img",{src:e.profile.photos.small?e.profile.photos.small:Ze,alt:"preloader"}),Object(se.jsxs)("div",{children:[" ",e.profile.fullName," "]}),Object(se.jsxs)("div",{children:[" ",e.profile.contacts.github]}),Object(se.jsx)(_e,{status:e.status,updateUserStatus:e.updateUserStatus})]})}):Object(se.jsx)(Ce,{})},et=n(87),tt=n.n(et),nt=n(131),st=n.n(nt),it=function(e){return Object(se.jsxs)("div",{className:st.a.item,children:[Object(se.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qh8eESLXwl36bofkdzT9g-kp5cUSoezKWaced8kqfun3E4KqFjv_sL4g9xlCagSUZWU&usqp=CAU",alt:" of seas"}),e.message,Object(se.jsx)("div",{children:Object(se.jsxs)("span",{onClick:function(){e.likeClickHandler(e.id,e.likecount)},children:["Likes : ",e.likecount," "]})})]})},rt=ze(15),ct=function(e){var t=e.posts.map((function(t){return Object(se.jsx)(it,{likeClickHandler:e.likeClickHandler,id:t.id,message:t.message,likecount:t.likescount},t.id)}));return Object(se.jsxs)("div",{className:tt.a.postsBlock,children:[Object(se.jsx)("div",{children:"My posts"}),Object(se.jsx)("div",{children:Object(se.jsx)(at,{onSubmit:function(t){e.addPost(t.profilePost)}})}),Object(se.jsx)("div",{className:tt.a.posts,children:t})]})},at=Object(xe.a)({form:"profileAddPostForm"})((function(e){return Object(se.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(se.jsx)("div",{children:Object(se.jsx)(ve.a,{validate:[ke,rt],name:"profilePost",component:Me,placeholder:"Enter post message"})}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{children:"add post"})})]})})),ot=function(){var e=Object(re.d)((function(e){return e.profilePage})),t=Object(re.c)();return Object(se.jsx)(ct,{posts:e.posts,likeClickHandler:function(e,n){t(function(e,t){return{type:k,id:e,likescount:t}}(e,n))},addPost:function(e){t(function(e){return{type:x,post:e}}(e))}})},ut=function(e){return Object(se.jsxs)("div",{className:Ke.a.content,children:[Object(se.jsx)($e,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(se.jsx)(ot,{})]})},lt=function(e){Object(B.a)(n,e);var t=Object(V.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(se.jsx)(ut,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),n}(i.a.Component),dt=Object(c.d)(Object(re.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserID:e.auth.id}}),{getUserProfile:function(e){return function(t){h(e).then((function(e){t({type:z,profile:e})}))}},getUserStatus:function(e){return function(t){m(e).then((function(e){t(P(e.data))}))}},updateUserStatus:function(e){return function(t){g(e).then((function(n){0===n.data.resultCode&&t(P(e))}))}}}),ae.f)(lt),jt=n(88),bt=n.n(jt),ft=function(e){return Object(se.jsxs)("header",{className:bt.a.header,children:[Object(se.jsx)("img",{src:"http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png",alt:"seas"}),Object(se.jsx)("div",{className:bt.a.loginBlock,children:e.isAuth?Object(se.jsxs)("div",{children:[Object(se.jsx)("span",{children:e.login})," ",Object(se.jsx)("div",{children:Object(se.jsx)("button",{onClick:e.logout,children:" Logout"})})]}):Object(se.jsx)(_.b,{to:"/login",children:"Login"})})]})},Ot=function(e){Object(B.a)(n,e);var t=Object(V.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.setAuthUserData()}},{key:"render",value:function(){return Object(se.jsx)(ft,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(s.Component),pt=Object(re.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:L,logout:function(){return function(e){p().then((function(){e(X(null,"","",!1))}))}}})(Ot),ht=Object(xe.a)({form:"Login"})((function(e){return Object(se.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(se.jsx)("div",{children:Object(se.jsx)(ve.a,{validate:[ke],placeholder:"Login",component:Te,name:"login"})}),Object(se.jsx)("div",{children:Object(se.jsx)(ve.a,{validate:[ke],placeholder:"Password",component:Te,name:"password",type:"password "})}),Object(se.jsxs)("div",{children:[Object(se.jsx)(ve.a,{type:"checkbox",component:"input",name:"rememberMe"}),"Remember me"]}),Object(se.jsx)("div",{children:Object(se.jsx)("button",{children:"Login"})}),e.error&&Object(se.jsx)("div",{children:Object(se.jsx)("span",{className:Pe.a.submitError,children:e.error})})]})})),mt=Object(re.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){O(e,t,n).then((function(){s(L())}))}}})((function(e){return e.isAuth?Object(se.jsx)(ae.a,{to:"/profile"}):Object(se.jsxs)("div",{children:[Object(se.jsx)("h1",{children:"Welcome to Login page"}),Object(se.jsx)(ht,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),gt=function(e){Object(B.a)(n,e);var t=Object(V.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeAppTC()}},{key:"render",value:function(){return this.props.initialized?Object(se.jsx)(_.a,{children:Object(se.jsxs)("div",{className:"app-wrapper",children:[Object(se.jsx)(pt,{}),Object(se.jsx)(ce,{}),Object(se.jsxs)("div",{className:"maincontent",children:[Object(se.jsx)(ae.a,{from:"/",to:"/profile/"}),Object(se.jsx)(ae.b,{path:"/profile/:userId?",render:function(){return Object(se.jsx)(dt,{})}}),Object(se.jsx)(ae.b,{path:"/dialogs",render:function(){return Object(se.jsx)(Je,{})}}),Object(se.jsx)(ae.b,{path:"/users",render:function(){return Object(se.jsx)(qe,{})}}),Object(se.jsx)(ae.b,{path:"/news",render:function(){return Object(se.jsx)(le,{})}}),Object(se.jsx)(ae.b,{path:"/music",render:function(){return Object(se.jsx)(ue,{})}}),Object(se.jsx)(ae.b,{path:"/settings",render:function(){return Object(se.jsx)(oe,{})}}),Object(se.jsx)(ae.b,{path:"/login",render:function(){return Object(se.jsx)(mt,{})}})]})]})}):Object(se.jsx)(Ce,{})}}]),n}(i.a.Component),vt=Object(c.d)(Object(re.b)((function(e){return{initialized:e.app.initialized}}),{initializeAppTC:function(){return function(e){e(L()).then((function(){e({type:"INITIALIZE_APP"})}))}}}),ae.f)(gt),xt=n(60);n.n(xt).a.render(Object(se.jsx)(_.a,{children:Object(se.jsx)(re.a,{store:Y,children:Object(se.jsx)(vt,{})})}),document.getElementById("root")),r()},29:function(e,t,n){e.exports={nav:"Navbar_nav__OfWCE",item:"Navbar_item__3giWq",active_link:"Navbar_active_link__vbaJX"}},46:function(e,t,n){e.exports={formControl:"FormsControl_formControl__D82uy",error:"FormsControl_error__1Tdi0",submitError:"FormsControl_submitError__1MhH4"}},48:function(e,t,n){e.exports={dialogs:"Dialog_dialogs__1eJy-",dialogsItems:"Dialog_dialogsItems__2GDaC",dialog:"Dialog_dialog__3lD9k",dialogactive:"Dialog_dialogactive__2ZNd-",messages:"Dialog_messages__EJJxc",textarea:"Dialog_textarea__31_Tg"}},64:function(e,t,n){e.exports={item:"DialogItems_item__tRr1z",dialog:"DialogItems_dialog__2xPOY",dialogactive:"DialogItems_dialogactive__3-P4d"}},83:function(e,t,n){e.exports={messages:"Message_messages__1KBqZ",message:"Message_message__YWZN1",right:"Message_right__2L3w2",left:"Message_left__2NGck"}},86:function(e,t,n){e.exports={photo:"Users_photo__2Okj1",currentPage:"Users_currentPage__2n9OX"}},87:function(e,t,n){e.exports={postsBlock:"MyPost_postsBlock__2zzyg",posts:"MyPost_posts__3-OYg"}},88:function(e,t,n){e.exports={header:"Header_header__3cqcB",loginBlock:"Header_loginBlock__3CG9R"}}},[[288,1,2]]]);
//# sourceMappingURL=main.28f52fe0.chunk.js.map