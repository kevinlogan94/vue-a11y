(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["transactions"],{"8c99":function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[t._m(0),s("TransactionList")],1)},i=[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-1"},[t._v("\n          Transactions Demo\n        ")])])])])}],o=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half"},[s("ul",{staticClass:"list is-hoverable"},t._l(t.transactions,function(n){return s("li",{key:n.id,ref:"transaction"+n.id,refInFor:!0,staticClass:"list-item",attrs:{tabindex:"-1"}},[t._v("\n            "+t._s(n.payee)+"\n            "),s("span",{staticClass:"is-pulled-right"},[t._v(t._s(n.amount))])])}),0),s("button",{staticClass:"button is-primary",on:{click:function(n){return t.loadMore()}}},[t._v("\n          Load More\n        ")])])])])])},e=[],c={name:"TransactionList",data:function(){return{transactionToFocus:0,focusNewestTransaction:!1,transactions:[],payees:["Johnny Silverhand","Microtech","IEC","V"]}},mounted:function(){this.generateTransactionData()},updated:function(){this.focusNewestTransaction&&this.$refs[this.transactionToFocus][0].focus()},methods:{loadMore:function(){this.focusNewestTransaction=!0,this.generateTransactionData()},generateTransactionData:function(){var t=this.transactions.length;this.transactionToFocus="transaction"+t;for(var n=t;n<t+10;n++){var s="$"+this.getRandomInt(100)+".00";this.transactions.push({id:n,payee:this.payees[this.getRandomInt(4)],amount:s})}},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))}}},r=c,l=s("2877"),u=Object(l["a"])(r,o,e,!1,null,null,null),h=u.exports,d={name:"Transactions",components:{TransactionList:h}},f=d,m=Object(l["a"])(f,a,i,!1,null,null,null);n["default"]=m.exports}}]);
//# sourceMappingURL=transactions.c374d8d5.js.map