(this["webpackJsonpmadfish-vesting"]=this["webpackJsonpmadfish-vesting"]||[]).push([[0],{111:function(e,t){},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},209:function(e,t){},211:function(e,t){},221:function(e,t){},223:function(e,t){},250:function(e,t){},251:function(e,t){},256:function(e,t){},258:function(e,t){},265:function(e,t){},284:function(e,t){},403:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),c=n(189),s=n.n(c),i=(n(200),n(201),n(202),n(203),n(15)),o=n(22),l=n(2),u=n(3),d=n(0),b=n.n(d),j=n(56),h=n(190),f=n(45),O="KT1N5HyBD5HZ7NZwmDar1LmBN7WkHbdr6zb9",x="mainnet",p="https://mainnet.smartpy.io",m=function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"publicKeyHash",value:function(){var e=Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.client.getActiveAccount();case 2:if(t=e.sent){e.next=5;break}throw new Error("Not connected");case 5:return e.abrupt("return",t.address);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"publicKey",value:function(){var e=Object(o.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.client.getActiveAccount();case 2:if(t=e.sent){e.next=5;break}throw new Error("Not connected");case 5:return e.abrupt("return",t.publicKey);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"secretKey",value:function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Secret key cannot be exposed");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"sign",value:function(){var e=Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Cannot sign");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),v=new f.a,w=new f.b(p),k=new h.a({name:"Madfish Vesting",iconUrl:"https://tezostaquito.io/img/favicon.png"},{forcePermission:!0});w.setWalletProvider(k),w.setSignerProvider(new m),w.setPackerProvider(v);var g=Object(j.a)((function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),l=s[0],u=s[1],d=Object(a.useState)(null),j=Object(i.a)(d,2),h=j[0],f=j[1],m=Object(a.useCallback)(Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.disconnect();case 2:return e.next=4,k.clearActiveAccount();case 4:return e.next=6,k.requestPermissions({network:{type:x}});case 6:return w.setWalletProvider(k),w.setRpcProvider(p),e.next=10,k.client.getActiveAccount();case 10:if(e.sent){e.next=13;break}throw new Error("Not connected");case 13:return e.t0=r,e.next=16,k.getPKH();case 16:e.t1=e.sent,(0,e.t0)(e.t1);case 18:case"end":return e.stop()}}),e)}))),[]),v=Object(a.useCallback)(Object(o.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.disconnect();case 2:return e.next=4,k.clearActiveAccount();case 4:w.setWalletProvider(k),r("");case 6:case"end":return e.stop()}}),e)}))),[]),g=Object(a.useCallback)(Object(o.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.contract.at(O);case 2:return t=e.sent,u(t),e.next=6,t.storage();case 6:n=e.sent,f(n);case 8:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){g()}),[g]),{connect:m,disconnect:v,isConnected:!!n,Tezos:w,wallet:k,pkh:n,contract:l,storage:h}})),C=Object(i.a)(g,2),y=C[0],N=C[1],A=n(1),T=function(e){var t=e.variant,n=void 0===t?"filled":t,a=e.onClick,r=e.className,c=e.children,s=e.disabled,i=void 0!==s&&s,o=e.style;return Object(A.jsx)("button",{onClick:a,disabled:i,className:"button ".concat(n," ").concat(i&&"button-disabled"," ").concat(r),style:o,children:c})},S=n(4),E=n(42),_=n(11),D=n.n(_),I=n(194),P=n.n(I).a.create({baseURL:"https://metadata.templewallet.com"});function z(e,t){return F.apply(this,arguments)}function F(){return F=Object(o.a)(b.a.mark((function e(t,n){var a,r,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:15e3,e.next=3,P.get("metadata/".concat(t,"/").concat(n),{timeout:a}).then((function(e){return e.data}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}var R=function(e){var t=e.callback,n=Object(a.useState)(0),r=Object(i.a)(n,2),c=r[0],s=r[1];Object(a.useEffect)((function(){var e=setInterval((function(){s(c+1)}),1e3);return c>30&&o(),function(){clearInterval(e)}}),[c]);var o=function(){s(0),t()},l=(30-c)/30*100;return Object(A.jsx)(T,{onClick:o,style:{background:"linear-gradient(90deg, rgb(33, 150, 243) ".concat(l,"%, rgb(60, 170, 243) ").concat(l,"%)")},children:"Refresh"})},B=Object(j.a)((function(){var e=N().storage,t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!0),l=Object(i.a)(s,2),u=l[0],d=l[1],j=Object(a.useCallback)(Object(o.a)(b.a.mark((function t(){var n,a,r,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e&&e.vestings_counter){t.next=3;break}return d(!0),t.abrupt("return");case 3:n=e.vestings_counter,a=[],r=0;case 6:if(!(r<n)){t.next=14;break}return t.next=9,e.vestings.get([r]);case 9:s=t.sent,a.push(s);case 11:r++,t.next=6;break;case 14:a=a.map((function(e,t){return Object(E.a)(Object(E.a)({},e),{},{id:t})})),c(a),d(!1);case 17:case"end":return t.stop()}}),t)}))),[e]);return Object(a.useEffect)((function(){j()}),[j]),{rewards:r,loadingRewards:u,loadRewards:j}})),K=Object(i.a)(B,2),H=K[0],L=K[1],J=new D.a(10).pow(18),W=function(e){var t=e.tokens,n=e.index,r=e.reward,c=N(),s=c.contract,i=c.pkh,l=c.Tezos,u=Object(a.useCallback)(function(){var e=Object(o.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=2;break}return e.abrupt("return");case 2:return n=s.methodsObject.claim(t),a=l.wallet.batch().withContractCall(n),e.next=6,a.send();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[s,l.wallet]),d=t.length>0?{symbol:t[n].symbol,decimals:t[n].decimals}:{symbol:"Loading",decimals:6},j=d.symbol.substring(0,7)+"...",h=new D.a(10).pow(d.decimals),f=r.treasury.div(h),O=r.collected.div(h),x=r.treasury.times(J.times(1e3)).div(r.distr_speed_f),p=new Date(r.deadline).getTime()-x.toNumber(),m=Math.floor(x/864e5),v=Date.now()<new Date(r.deadline).getTime()?r.treasury.times((Date.now()-p)/x).minus(r.collected).div(h):new D.a(-1),w=v.lt(0)?"All collected":v.gt(f.minus(O))?"".concat(f.minus(O).toFixed(0)," ").concat(j):"".concat(v.toFixed(0)," ").concat(j);return Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[f.toFixed(0)," ",j]}),Object(A.jsxs)("td",{children:[O.toFixed(0)," ",j]}),Object(A.jsx)("td",{children:w}),Object(A.jsxs)("td",{children:[m," days"]}),Object(A.jsx)("td",{children:(r.receiver===i||r.admin===i)&&Object(A.jsx)(T,{disabled:!i||"0"===v.toFixed(0),onClick:function(){return u(r.id)},children:r.admin===i?"Claim as Admin":"Claim"})})]})},q=function(e){var t=e.rewards,n=e.tokens,a=L().loadingRewards;return Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Full Reward"}),Object(A.jsx)("th",{children:"Claimed"}),Object(A.jsx)("th",{children:"Pending"}),Object(A.jsx)("th",{children:"Ends in"}),Object(A.jsx)("th",{})]})}),Object(A.jsx)("tbody",{children:0===t.length?a?Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{}),Object(A.jsx)("td",{}),Object(A.jsx)("td",{children:"Loading"})]}):Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{}),Object(A.jsx)("td",{}),Object(A.jsx)("td",{children:"Not found"})]}):t.map((function(e){return Object(A.jsx)(W,{reward:e,index:e.id,tokens:n},e.id)}))})]})},M=[{label:"Explore",component:function(){var e=N().pkh,t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=L(),l=s.rewards,u=s.loadRewards,d=Object(a.useCallback)(Object(o.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==l.length){e.next=2;break}return e.abrupt("return");case 2:console.log("loadTokensMetadata"),t=[],n=0;case 5:if(!(n<l.length)){e.next=24;break}if(a=null,!l[n].asset.fa2){e.next=13;break}return e.next=10,z(l[n].asset.fa2.token,l[n].asset.fa2.id.toString());case 10:a=e.sent,e.next=20;break;case 13:if(!l[n].asset.fa12){e.next=19;break}return e.next=16,z(l[n].asset.fa12,0);case 16:a=e.sent,e.next=20;break;case 19:a={decimals:6,name:"TEZ",symbol:"TEZ",thumbnailUri:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tezos_logo.svg/100px-Tezos_logo.svg.png"};case 20:t.push(a);case 21:n++,e.next=5;break;case 24:c(t);case 25:case"end":return e.stop()}}),e)}))),[l]);return Object(a.useEffect)((function(){d()}),[d]),Object(A.jsxs)("section",{children:[Object(A.jsx)("div",{className:"search-bar"}),Object(A.jsx)("h3",{className:"pad",children:"Your rewards:"}),Object(A.jsx)(q,{tokens:r,rewards:l.filter((function(t){return t.receiver===e||t.admin===e}))}),Object(A.jsx)("h3",{className:"pad",children:"All rewards:"}),Object(A.jsx)(q,{tokens:r,rewards:l.filter((function(t){return t.receiver!==e}))}),e&&Object(A.jsx)(R,{callback:function(){return u()}})]})}},{label:"Distribute",component:function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),l=s[0],u=s[1],d=N(),j=d.contract,h=d.storage,f=d.pkh,x=d.Tezos,p=Object(a.useState)({asset:"",assetId:"",amount:"",receiver:"",deadline:""}),m=Object(i.a)(p,2),v=m[0],w=v.asset,k=v.assetId,g=v.amount,C=v.receiver,y=v.deadline,_=m[1],I=function(e){P(e.target.name,e.target.value)},P=function(e,t){_((function(n){return Object(E.a)(Object(E.a)({},n),{},Object(S.a)({},e,t))}))},z=function(){var e=Object(o.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=x.wallet.batch(),a=0;case 3:if(!(a<t.length)){e.next=10;break}return e.next=6,F(t[a],n);case 6:n=e.sent;case 7:a++,e.next=3;break;case 10:n.send(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error in makeRpcCall",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(b.a.mark((function e(t,n){var a,r,c,s,i,o,l,u,d,h,p,m,v,w,k,g,C,y;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.asset,r=t.assetId,c=t.amount,s=t.receiver,i=t.deadline,l="tz"===a,u=(o=!!r||"0"===r)?{fa2:{token:a,id:Number(r)}}:l?{tez:null}:{fa12:a},d=new D.a(c),h=new D.a(new Date(i).getTime()).dividedToIntegerBy(1e3),p={asset:u,amount:d,receiver:s,deadline:h},m=j.methodsObject.start_vesting(p),e.prev=8,!o){e.next=18;break}return e.next=12,x.contract.at(a);case 12:v=e.sent,w=v.methods.update_operators([{add_operator:{owner:f,operator:O,token_id:r}}]),k=v.methods.update_operators([{remove_operator:{owner:f,operator:O,token_id:r}}]),n=n.withContractCall(w).withContractCall(m).withContractCall(k),e.next=28;break;case 18:if(!l){e.next=23;break}g=j.methodsObject.start_vesting(Object(E.a)(Object(E.a)({},p),{},{amount:new D.a(d).shiftedBy(6)})).toTransferParams({amount:d}),n=n.withTransfer(g),e.next=28;break;case 23:return e.next=25,x.contract.at(a);case 25:C=e.sent,y=C.methods.approve(O,c),n=n.withContractCall(y).withContractCall(m);case 28:return e.abrupt("return",n);case 31:e.prev=31,e.t0=e.catch(8),console.log(e.t0);case 34:case"end":return e.stop()}}),e,null,[[8,31]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(A.jsx)("section",{children:Object(A.jsxs)("div",{className:"section-content",children:[Object(A.jsx)("h3",{children:"Fill form"}),Object(A.jsxs)("div",{className:"fill-form",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{children:"Asset Address"}),Object(A.jsx)("input",{name:"asset",value:w,placeholder:"tz or Token Address",onChange:I})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{children:"Asset Id"}),Object(A.jsx)("input",{name:"assetId",value:k,placeholder:"for FA2",onChange:I})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{children:"Amount"}),Object(A.jsx)("input",{name:"amount",value:g,placeholder:"amount",onChange:I})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{children:"Receiver"}),Object(A.jsx)("input",{name:"receiver",value:C,placeholder:"receiver",onChange:I})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("label",{children:"Deadline"}),Object(A.jsx)("input",{name:"deadline",value:y,type:"date",placeholder:"deadline",onChange:I})]}),Object(A.jsx)(T,{disabled:h&&f!==h.admin,onClick:function(){return z([{asset:w,assetId:k,amount:g,receiver:C,deadline:y}])},className:"distribute-button",children:"Distribute"})]}),Object(A.jsx)("h3",{children:"Or use JSON text"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:"textarea",children:Object(A.jsx)("textarea",{value:n,onChange:function(e){u(null),r(e.target.value);try{JSON.parse(e.target.value)}catch(e){u("Invalid JSON: ".concat(e.message))}},placeholder:'{ receiver:"tz1...", amount: "100" }'})}),l&&"string"===typeof l&&Object(A.jsx)("div",{className:"textarea-error",children:l}),Object(A.jsx)("label",{children:"Example:"}),Object(A.jsx)("pre",{children:'\n[{\n  "amount": "1234",\n  "asset": "KT19H9YbHqsxFTayap7aTEfbcnyPeALKYgt9",\n  "assetId": "0",\n  "deadline": "2022-05-26",\n  "receiver": "tz1VvDQcafAxpAcc2hFWDpSmRYqdEmEhrW1h"\n}]\n    '}),Object(A.jsx)(T,{disabled:h&&f!==h.admin,onClick:function(){if(!l){var e=JSON.parse(n);Array.isArray(e)?z(e):z([e])}},className:"distribute-button",children:"Distribute"})]})]})})},admin:!0},{label:"Stop vesting",component:function(){var e=N(),t=e.contract,n=e.storage,r=e.pkh,c=e.Tezos,s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],j=Object(a.useCallback)(function(){var e=Object(o.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=t.methodsObject.stop_vesting(n),r=c.wallet.batch().withContractCall(a),e.next=6,r.send();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,c.wallet]);return Object(A.jsx)("section",{children:Object(A.jsxs)("div",{className:"section-content",children:[Object(A.jsx)("h3",{children:"Stop vesting by id"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:Object(A.jsx)("input",{name:"vestingId",value:u,placeholder:"vestingId",onChange:function(e){return d(e.target.value)}})}),Object(A.jsx)(T,{disabled:n&&r!==n.admin,onClick:j,className:"distribute-button",children:"Stop Vesting"})]})]})})},admin:!0},{label:"Change Admin",component:function(){var e=N(),t=e.contract,n=e.storage,r=e.pkh,c=e.Tezos,s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],d=l[1],j=Object(a.useCallback)(function(){var e=Object(o.a)(b.a.mark((function e(n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=t.methodsObject.set_admin(n),r=c.wallet.batch().withContractCall(a),e.next=6,r.send();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,c.wallet]);return Object(A.jsx)("section",{children:Object(A.jsxs)("div",{className:"section-content",children:[Object(A.jsx)("h3",{children:"Change Admin"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{children:Object(A.jsx)("input",{name:"adminAddr",value:u,placeholder:"new admin address",onChange:function(e){return d(e.target.value)}})}),Object(A.jsx)(T,{disabled:n&&r!==n.admin,onClick:j,className:"distribute-button",children:"Set admin"})]})]})})},admin:!0}],Y=Object(j.a)((function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2);return{currentTab:t[0],setCurrentTab:t[1],TABS:M}})),Z=Object(i.a)(Y,2),U=Z[0],V=Z[1],Q=function(e){var t=e.onClick,n=e.selected,a=void 0!==n&&n,r=e.disabled,c=e.admin,s=e.children,i=N(),o=i.storage,l=i.pkh,u=o&&o.admin===l&&c;return Object(A.jsxs)("div",{className:"material-tabs-content ".concat((r||c&&!u)&&"material-tabs-disabled"),children:[Object(A.jsx)("a",{onClick:function(){if(t&&!r){if(c&&!u)return!1;t()}},className:"material-tabs-content",href:"#",children:s}),a&&Object(A.jsx)("div",{className:"material-tabs-underline"})]})},$=function(e){var t=e.children;return Object(A.jsxs)("div",{className:"material-tabs",children:[t,Object(A.jsx)("span",{className:"yellow-bar"})]})},G=function(){var e=N(),t=e.connect,n=e.disconnect,a=e.pkh,r=V(),c=r.TABS,s=r.currentTab,i=r.setCurrentTab,o=function(){t().catch(console.log)};return Object(A.jsxs)("header",{className:"App-header",children:[Object(A.jsx)($,{children:c.map((function(e,t){return Object(A.jsx)(Q,{onClick:function(){return i(t)},selected:s===t,admin:e.admin,children:e.label},t)}))}),Object(A.jsxs)("div",{className:"header-buttons",children:[!a&&Object(A.jsx)(T,{onClick:o,children:"Connect"}),a&&"string"===typeof a&&Object(A.jsxs)(T,{variant:"outlined",onClick:o,children:[a.slice(0,6),"...$",a.slice(-3)]}),a&&Object(A.jsx)(T,{onClick:function(){n().catch(console.log)},variant:"filled",children:"Disconnect"})]})]})},X=function(){var e=V(),t=e.TABS[e.currentTab].component;return Object(A.jsx)("main",{children:Object(A.jsx)(t,{})})};var ee=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(G,{}),Object(A.jsx)(X,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,406)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(y,{children:Object(A.jsx)(H,{children:Object(A.jsx)(U,{children:Object(A.jsx)(ee,{})})})})}),document.getElementById("root")),te()}},[[403,1,2]]]);
//# sourceMappingURL=main.42d8acd5.chunk.js.map