(this["webpackJsonpiLockers-DApp-FOSS-Interchained"]=this["webpackJsonpiLockers-DApp-FOSS-Interchained"]||[]).push([[21],{1088:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=n(33),i=n(27),o=n(0),l=n(76),s=n(859),u=n(1058),b=n(1062),m=n(874),j=n(1063),d=n(852),h=n(1064),O=n(421),x=n(1065),p=n(1066),f=n(1060),g=n(1061),N=n(1067),v=n(861),k=n(88),w=n(28),A=n(2);t.default=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],C=Object(l.c)(),S=C.account,D=C.connector,I=Object(o.useState)(""),T=Object(i.a)(I,2),U=T[0],y=T[1],F=Object(o.useState)(0),B=Object(i.a)(F,2),M=(B[0],B[1]);Object(o.useEffect)((function(){U&&D.getChainId().then((function(e){M(e),1===Number(e)&&y("Ethereum"),3===Number(e)&&y("Ropsten"),5===Number(e)&&y("Goerli"),56===Number(e)&&y("Binance Smart Chain"),97===Number(e)&&y("Binance_testnet"),444===Number(e)&&y("Frenchain_testnet"),43114===Number(e)&&y("Avalanche"),43113===Number(e)&&y("Avalanche_testnet"),44444===Number(e)&&y("Frenchain"),420420===Number(e)&&y("Kekchain"),420666===Number(e)&&y("Kekchain_testnet")}))}),[D]),Object(o.useEffect)((function(){if(U){if(S){Object(w.j)(S,U).then((function(e){e.map((function(e){e.nextClaim="now available",Number(e.amount)>Number(e.claimedAmount)&&(Date.now()/1e3-e.lastUpdated<3600&&(e.nextClaim=new Date(1e3*e.lastUpdated+36e5).toUTCString()),e.availableAmount=BigInt(e.amount/e.lockHours*Math.floor((Date.now()/1e3-e.lockTimestamp)/3600)-e.claimedAmount).toString())})),a(e)}));var e=setInterval((function(){Object(w.j)(S,U).then((function(e){e.map((function(e){e.nextClaim="now available",Number(e.amount)>Number(e.claimedAmount)&&(Date.now()/1e3-e.lastUpdated<3600&&(e.nextClaim=new Date(1e3*e.lastUpdated+36e5).toUTCString()),e.availableAmount=BigInt(e.amount/e.lockHours*((Date.now()/1e3-e.lockTimestamp)/3600)-e.claimedAmount).toString())})),a(e)}))}),1e4);return function(){return clearInterval(e)}}a([])}}),[S,U]);var _=k.a.pools(),E=k.a.mobile(),L=Object(d.a)("(max-width:600px)"),H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(isNaN(Number(e)))return Number(0);var n=Number(Number(e).toFixed(t)),a=n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,");return a},J=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,D.getProvider();case 4:a=e.sent,Object(w.f)(a,n[t],S).then(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Claimed"),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(m.a,{className:_.root,maxWidth:"lg",children:Object(A.jsx)(s.a,{className:_.info,children:Object(A.jsx)(u.a,{container:!0,spacing:3,children:Object(A.jsx)(u.a,{className:L?"".concat(E.root," grid"):"grid",item:!0,xs:12,sm:12,md:12,children:Object(A.jsx)(b.a,{className:"card",children:Object(A.jsx)(j.a,{children:Object(A.jsx)(h.a,{component:O.a,children:Object(A.jsxs)(x.a,{"aria-label":"collapsible table",children:[Object(A.jsx)(p.a,{children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(g.a,{children:"Token"}),Object(A.jsx)(g.a,{children:"Allocation"}),Object(A.jsx)(g.a,{align:"right",children:"Time to next claim"}),Object(A.jsx)(g.a,{align:"right",children:"Available to claim"}),Object(A.jsx)(g.a,{align:"right",children:"Claimed so far"}),Object(A.jsx)(g.a,{align:"right",children:"Action"})]})}),Object(A.jsx)(N.a,{children:n.map((function(e,t){return Object(A.jsxs)(f.a,{children:[Object(A.jsx)(g.a,{children:e.token.symbol}),Object(A.jsx)(g.a,{children:H(e.amount/Math.pow(10,e.token.decimals),2)}),Object(A.jsx)(g.a,{align:"right",children:e.nextClaim}),Object(A.jsx)(g.a,{align:"right",children:H(e.availableAmount/Math.pow(10,e.token.decimals),2)}),Object(A.jsx)(g.a,{align:"right",children:H(e.claimedAmount/Math.pow(10,e.token.decimals),2)}),Object(A.jsx)(g.a,{align:"right",children:Object(A.jsx)(v.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:function(){return J(t)},children:"Claim"})})]},"tokenList-".concat(t))}))})]})})})})})})})})}}}]);
//# sourceMappingURL=21.114d1773.chunk.js.map