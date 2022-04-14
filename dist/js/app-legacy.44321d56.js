(function(){var e={52177:function(e,t,n){"use strict";n(66992),n(88674),n(19601),n(17727),n(99806),n(22856);var r=n(28935),i=n(60150);n(70044);r["default"].use(i.ZPm);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("FriendsComponent",{attrs:{connected:e.connected},on:{login:e.login,"export-list":e.log},model:{value:e.friendsList,callback:function(t){e.friendsList=t},expression:"friendsList"}})],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("FriendsList",{attrs:{title:"friend list",label:e.connected?"logout":"login"},on:{click:function(t){return e.$emit("login")}}},[n("draggable",e._b({attrs:{list:e.friends,group:{name:"friends"}}},"draggable",e.dragOptions,!1),e._l(e.friends,(function(e){return n("UserCard",{key:e.id,attrs:{image:e.photo_100,name:e.first_name+" "+e.last_name}})})),1)],1),n("FriendsList",{attrs:{title:"selected friends",label:"export to console"},on:{click:function(t){return e.$emit("export-list")}}},[n("draggable",e._b({attrs:{list:e.selectedFriends,group:{name:"friends"}},on:{change:e.changeList}},"draggable",e.dragOptions,!1),e._l(e.selectedFriends,(function(e){return n("UserCard",{key:e.id,attrs:{image:e.photo_100,name:e.first_name+" "+e.last_name}})})),1)],1)],1)},c=[],d=n(16198),l=(n(38862),n(78975),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"friends-item"},[n("header",{staticClass:"flex-container"},[n("p",[e._v(e._s(e.title))])]),e._t("default"),n("footer",{staticClass:"flex-container"},[n("b-button",{staticClass:"btn",attrs:{variant:"primary"},on:{click:function(t){return e.$emit("click")}}},[e._v(e._s(e.label))])],1)],2)}),u=[],f={name:"FriendsList",props:{title:{type:String,default:"title"},label:{type:String,default:"button"}},emits:["click"]},p=f,m=n(1001),h=(0,m.Z)(p,l,u,!1,null,"732d5904",null),g=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-container"},[n("img",{attrs:{src:e.image,alt:"avatar"}}),n("p",[e._v(e._s(e.name))])])},_=[],b={name:"UserCard",props:{image:{type:String,required:!0},name:{type:String,required:!0}}},F=b,y=(0,m.Z)(F,v,_,!1,null,"e9337e5c",null),k=y.exports,w=n(6390),S=n.n(w),L={name:"FriendsComponent",components:{FriendsList:g,UserCard:k,draggable:S()},props:{value:{type:Object},connected:{type:Boolean,required:!0}},emits:["login","export-list"],computed:{dragOptions:function(){return{scrollSensitivity:80,forceFallback:!0,class:"main dragArea"}}},created:function(){var e=this;return(0,d.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getFriends");case 2:e.importData();case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{friends:[],selectedFriends:[]}},methods:{importData:function(){var e=JSON.parse(JSON.stringify(this.value)),t=e.friends,n=e.selectedFriends;this.friends=t,this.selectedFriends=n,this.changeList()},changeList:function(){this.$emit("input",{friends:this.friends,selectedFriends:this.selectedFriends})}}},O=L,x=(0,m.Z)(O,a,c,!1,null,"f811e38c",null),$=x.exports,C={name:"App",components:{FriendsComponent:$},computed:{connected:function(){return this.$store.getters.getStatus}},data:function(){return{friendsList:this.$store.getters.getFriends}},watch:{friendsList:function(e){this.changeList(e)}},methods:{changeList:function(e){this.$store.dispatch("moveFriends",e)},login:function(){this.connected?this.$store.dispatch("cancelToken"):this.$store.dispatch("fetchFriends")},log:function(){this.$store.dispatch("logFriends")},clear:function(){this.$store.dispatch("cancelToken")}}},T=C,j=(0,m.Z)(T,s,o,!1,null,null,null),P=j.exports,Z=n(4807),q=n(74479),E=(n(40561),n(41539),n(57327),n(34665)),U=n(96219),A=n.n(U),J=n(57421),M=n.n(J),N=n(49672),R=n.n(N),z=new(R()),D={type:"object",properties:{id:{type:"integer"},first_name:{type:"string"},last_name:{type:"string"},photo_100:{type:"string"}},required:["id","photo_100","first_name","last_name"],additionalProperties:!0},B=z.compile(D),G=n(20375),H=8136790,I="https://oauth.vk.com/authorize",K="https://krinteron.github.io/vk_friends_list/",Q=new G.Provider({id:H,authorization_url:I}),V={client_id:H,display:"popup",redirect_uri:K,scope:["offline"],response_type:"code",v:"5.131",revoke:1};r["default"].use(E.ZP);var W=new E.ZP.Store({state:{friendsList:{friends:[],selectedFriends:[]},status:"disconnected"},getters:{getFriends:function(e){return e.friendsList},getStatus:function(e){return"connected"===e.status}},mutations:{addFriends:function(e,t){e.friendsList.friends=(0,q.Z)(t)},deleteFriends:function(e){e.friendsList.friends.splice(0),e.friendsList.selectedFriends.splice(0)},saveFriends:function(e,t){e.friendsList=(0,Z.Z)({},t)},addToSelected:function(e,t){e.friendsList.selectedFriends.push(t)},setStatus:function(e,t){e.status=t}},actions:{moveFriends:function(e,t){var n=e.commit;n("saveFriends",t)},logFriends:function(e){var t=e.getters,n=t.getFriends.selectedFriends;console.log(JSON.stringify(n,null,4))},fetchFriends:function(){var e=new G.Request(V),t=Q.requestToken(e);Q.remember(e),window.location.href=t},getFriends:function(e){var t=e.commit,n=window.location;try{Q.parse(n.hash+"&token_type=bearer");var r=Q.getAccessToken();return r?new Promise((function(e){var n=M().stringify({user_id:368862537,order:"name",fields:"nickname,photo_100",name_case:"nom",access_token:r,v:5.131});A()("https://api.vk.com/method/friends.get?".concat(n),(function(n,r){if(n)console.error(n.message),t("setStatus","disconnected"),t("deleteFriends");else{t("setStatus","connected");var i=r.response.items.filter((function(e){if(B(e)){var t=e.id,n=e.first_name,r=e.last_name,i=e.photo_100;return{id:t,first_name:n,last_name:r,photo_100:i}}}));t("addFriends",i)}return e()}))})):void t("deleteFriends")}catch(i){}},cancelToken:function(e){var t=e.commit;t("setStatus","disconnected"),t("deleteFriends"),window.localStorage.clear(),window.open("https://vk.com/")}},modules:{}});r["default"].config.productionTip=!1,new r["default"]({store:W,render:function(e){return e(P)}}).$mount("#app")},24654:function(){}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],s=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,o=r[0],a=r[1],c=r[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var l=c(n)}for(t&&t(r);d<o.length;d++)s=o[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},r=self["webpackChunkhappy_tree_friends"]=self["webpackChunkhappy_tree_friends"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(52177)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.44321d56.js.map