(this.webpackJsonpsocialnetwork=this.webpackJsonpsocialnetwork||[]).push([[0],[,,,,,,,,,,function(e,t,s){e.exports={dialogs:"Dialog_dialogs__1eJy-",dialogsItems:"Dialog_dialogsItems__2GDaC",dialog:"Dialog_dialog__3lD9k",dialogactive:"Dialog_dialogactive__2ZNd-",messages:"Dialog_messages__EJJxc",textarea:"Dialog_textarea__31_Tg"}},,function(e,t,s){e.exports={nav:"Navbar_nav__OfWCE",item:"Navbar_item__3giWq",active_link:"Navbar_active_link__vbaJX"}},function(e,t,s){e.exports={item:"DialogItems_item__tRr1z",dialog:"DialogItems_dialog__2xPOY",dialogactive:"DialogItems_dialogactive__3-P4d"}},,function(e,t,s){e.exports={postsBlock:"MyPost_postsBlock__2zzyg",posts:"MyPost_posts__3-OYg"}},,function(e,t,s){e.exports={messages:"Message_messages__1KBqZ",message:"Message_message__YWZN1",right:"Message_right__2L3w2",left:"Message_left__2NGck"}},,function(e,t,s){e.exports={header:"Header_header__3cqcB"}},function(e,t,s){e.exports={friends:"Friends_friends__1zAOS"}},function(e,t,s){},function(e,t,s){e.exports={block:"ProfileInfo_block__Rxxo8"}},function(e,t,s){e.exports={item:"Post_item__2zcpj"}},,,,,function(e,t,s){},,,,,,,,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"rerenderEntireTree",(function(){return ne}));s(0);var n=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,40)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))},a=s(18),i=s(5),c={posts:[{id:1,message:"General Kenobi!",likescount:7},{id:2,message:"Hello There",likescount:10},{id:3,message:"YOU WERE MY BROTHER ANAKIN",likescount:141}],newPostText:""},r="ADD-POST",o="UPDATE-POST-MESSAGE",d="ADD-LIKE-COUNT",l=s(25),j={dialogs:[{id:1,name:"Lesha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:2,name:"Sasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:3,name:"Pasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:4,name:"Masha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"},{id:5,name:"Dasha",avatar:"https://shutnikov.club/wp-content/uploads/2020/01/1785179_thumb.png"}],messages:[{id:1,message:"Hello",myMessage:!0},{id:2,message:"How r u today?",myMessage:!1},{id:3,message:"Bad boys what you gonna do ?",myMessage:!0},{id:4,message:"When we come for you?",myMessage:!1}],newMessageText:""},u=[{id:1,name:"Karina"},{id:2,name:"Kristina"},{id:3,name:"Albina"}],g=Object(a.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var s={id:4,message:e.newPostText,likescount:0};return e.posts.push(s),e.newPostText="",e;case o:return e.newPostText=t.text,e;case d:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{likescount:t.likescount+1}):e}))});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var s={id:5,message:e.newMessageText,myMessage:Math.random()<.5};return e.newMessageText="",Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[s])});case"UPDATE-MESSAGE-TEXT":return Object(i.a)(Object(i.a)({},e),{},{newMessageText:t.text});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),b=Object(a.b)(g);window.store=b;s(28);var m=s(19),x=s.n(m),h=s(1),O=function(){return Object(h.jsx)("header",{className:x.a.header,children:Object(h.jsx)("img",{src:"http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png",alt:"seas"})})},v=s(4),p=s(12),f=s.n(p),_=s(20),k=s.n(_),M=function(e){return Object(h.jsxs)("div",{className:k.a.friends,children:[Object(h.jsx)("h2",{children:"Friends:"}),e.friends.map((function(e){return Object(h.jsxs)("span",{children:[e.name," "]})}))]})},w=function(e){var t=function(e){return e.isActive?f.a.active_link:f.a.item};return Object(h.jsxs)("nav",{className:f.a.nav,children:[Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/profile/",className:t,children:"Profile"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/dialogs/",className:t,children:"Messages"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/news/",className:t,children:"News"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/music/",className:t,children:" Music"})}),Object(h.jsx)("div",{children:Object(h.jsx)(v.b,{to:"/settings/",className:t,children:"Settings"})}),Object(h.jsx)("div",{children:Object(h.jsx)(M,{friends:e.friends})})]})},T=s(21),N=s.n(T),P=s(22),y=s.n(P),E=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"https://oceanservice.noaa.gov/facts/sea.jpg",alt:"seas"})}),Object(h.jsx)("div",{className:y.a.block,children:"ava + desc"})]})},D=s(15),A=s.n(D),S=s(23),C=s.n(S),I=function(e){return Object(h.jsxs)("div",{className:C.a.item,children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qh8eESLXwl36bofkdzT9g-kp5cUSoezKWaced8kqfun3E4KqFjv_sL4g9xlCagSUZWU&usqp=CAU",alt:" of seas"}),e.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{onClick:function(){e.likeClickHandler(e.id,e.likecount)},children:["Likes : ",e.likecount," "]})})]})},K=function(e){var t=e.posts.map((function(t){return Object(h.jsx)(I,{likeClickHandler:e.likeClickHandler,id:t.id,message:t.message,likecount:t.likescount})})),s=function(){e.addPost()};return Object(h.jsxs)("div",{className:A.a.postsBlock,children:[Object(h.jsx)("div",{children:"My posts"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{value:e.newTextMsg,onKeyPress:function(e){"Enter"===e.code&&(e.preventDefault(),s())},onChange:function(t){if(t.currentTarget){var s=t.currentTarget.value;e.updatePostMsg(s)}}})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:s,children:"add post"})})]}),Object(h.jsx)("div",{className:A.a.posts,children:t})]})},B=s(6),G=function(){var e=Object(B.d)((function(e){return e.profilePage})),t=Object(B.c)();return Object(h.jsx)(K,{posts:e.posts,newTextMsg:e.newPostText,likeClickHandler:function(e,s){t(function(e,t){return{type:d,id:e,likescount:t}}(e,s))},addPost:function(){t({type:r})},updatePostMsg:function(e){t(function(e){return{type:o,text:e}}(e))}})},H=function(){return Object(h.jsxs)("div",{className:N.a.content,children:[Object(h.jsx)(E,{}),Object(h.jsx)(G,{})]})},U=s(2),q=function(){return Object(h.jsx)("div",{children:"Settings"})},L=function(){return Object(h.jsx)("div",{children:"Music"})},z=function(){return Object(h.jsx)("div",{children:"News"})},F=s(10),W=s.n(F),J=s(26),R=s(13),Y=s.n(R),X=function(e){var t=e.name,s=e.id,n=Object(J.a)(e,["name","id"]);return Object(h.jsxs)("div",{className:Y.a.item,children:[Object(h.jsx)("img",{src:n.avatar,alt:"avatar"}),Object(h.jsx)(v.b,{className:function(e){return e.isActive?Y.a.dialogactive:Y.a.dialog},to:"/dialogs/"+s,children:t})]})},Z=s(17),Q=s.n(Z),V=function(e){return Object(h.jsx)("div",{className:e.myMessage?Q.a.left:Q.a.right,children:e.message})},$=Object(B.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{addMessage:function(){e({type:"ADD-MESSAGE"})},updateMessageText:function(t){e(function(e){return{type:"UPDATE-MESSAGE-TEXT",text:e}}(t))}}}))((function(e){var t=e.messages.map((function(e){return Object(h.jsx)(V,{message:e.message,myMessage:e.myMessage})})),s=e.dialogs.map((function(e){return Object(h.jsx)(X,{name:e.name,id:e.id,avatar:e.avatar})})),n=function(){e.addMessage()};return Object(h.jsxs)("div",{className:W.a.dialogs,children:[Object(h.jsx)("div",{className:W.a.dialogsItems,children:s}),Object(h.jsxs)("div",{className:W.a.messages,children:[t,Object(h.jsxs)("div",{className:W.a.textarea,children:[Object(h.jsx)("textarea",{value:e.newMessageText,onKeyPress:function(e){"Enter"===e.code&&(e.preventDefault(),n())},onChange:function(t){if(t.currentTarget){var s=t.currentTarget.value;e.updateMessageText(s)}},children:" "}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:n,children:"add message"})})]})]})]})}));var ee=function(){var e=Object(B.d)((function(e){return e.friends}));return Object(h.jsx)(v.a,{children:Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(O,{}),Object(h.jsx)(w,{friends:e}),Object(h.jsx)("div",{className:"maincontent",children:Object(h.jsxs)(U.c,{children:[Object(h.jsx)(U.a,{path:"/profile/*",element:Object(h.jsx)(H,{})}),Object(h.jsx)(U.a,{path:"/dialogs/*",element:Object(h.jsx)($,{})}),Object(h.jsx)(U.a,{path:"/news/*",element:Object(h.jsx)(z,{})}),Object(h.jsx)(U.a,{path:"/music/*",element:Object(h.jsx)(L,{})}),Object(h.jsx)(U.a,{path:"/settings/*",element:Object(h.jsx)(q,{})})]})})]})})},te=s(11),se=s.n(te),ne=function(){se.a.render(Object(h.jsx)(B.a,{store:b,children:Object(h.jsx)(ee,{})}),document.getElementById("root"))};ne(),b.subscribe((function(){ne()})),n()}],[[39,1,2]]]);
//# sourceMappingURL=main.0ed1cc25.chunk.js.map