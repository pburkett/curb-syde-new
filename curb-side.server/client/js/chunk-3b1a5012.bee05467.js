(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b1a5012"],{"59ba":function(t,e,c){},"5f7d":function(t,e,c){"use strict";c("59ba")},a176:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["K"])("data-v-84f309dc");Object(a["w"])("data-v-84f309dc");const n={class:"cart-page container-fluid"},o={key:0,class:"row"},r=Object(a["j"])("h1",null,"No cart to be found!",-1),l={key:1,class:"row  mt-3 mt-2 page-row justify-content-around"},j={class:"col-lg-5 left-col bg-white elevation-3 col-12 "},b={class:"row page-title justify-content-center"},i=Object(a["j"])("div",{class:"col-md-12 col-6 d-flex align-items-center text-center"},[Object(a["j"])("h1",null," Your Cart ")],-1),d={class:"col-6 logo-col h-50 my-2 d-flex justify-content-end "},O={class:"col-2 biz-name d-flex align-items-center"},u={class:"row justify-content-around left-row "},f={key:0,class:"col-12 cart-col"},p={class:"col-lg-5  bg-white checkout-card elevation-3 col-12"},v=Object(a["j"])("div",{class:"row checkout-header bg-info justify-content-center align-items-center"},[Object(a["j"])("h1",null,"Checkout")],-1),g={class:"row h-75 mt-5 justify-content-center"},h={key:0,class:"col-10 checkout-contents"},y=Object(a["j"])("div",{class:"row justify-content-center"},null,-1),m={class:"row align-items-center checkout-btn-row justify-content-center"},w=Object(a["j"])("div",{class:"col-4 "},[Object(a["j"])("h5",{class:"text-muted"}," Subtotal: ")],-1),k={class:"col-4 d-flex justify-content-end"},x={class:"text-muted"};Object(a["u"])();const A=s((t,e,c,s,A,S)=>{const C=Object(a["A"])("cart-product-component"),P=Object(a["A"])("checkout-item-component");return Object(a["t"])(),Object(a["f"])("div",n,[s.state.empty?(Object(a["t"])(),Object(a["f"])("div",o,[r])):(Object(a["t"])(),Object(a["f"])("div",l,[Object(a["j"])("div",j,[Object(a["j"])("div",b,[i,Object(a["j"])("div",d,[Object(a["j"])("img",{class:"logo",src:s.state.business.logo,alt:"logo"},null,8,["src"])]),Object(a["j"])("div",O,[Object(a["j"])("h4",null,Object(a["D"])(s.state.business.name),1)])]),Object(a["j"])("div",u,[s.state.cart.contents?(Object(a["t"])(),Object(a["f"])("div",f,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(s.state.cart.contents,t=>(Object(a["t"])(),Object(a["f"])(C,{key:t.id,p:t},null,8,["p"]))),128))])):Object(a["g"])("",!0)])]),Object(a["j"])("div",p,[v,Object(a["j"])("div",g,[s.state.cart.contents?(Object(a["t"])(),Object(a["f"])("div",h,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(s.state.cart.contents,(t,e)=>(Object(a["t"])(),Object(a["f"])(P,{index:e,key:t.id,p:t},null,8,["index","p"]))),128))])):Object(a["g"])("",!0)]),y,Object(a["j"])("div",m,[w,Object(a["j"])("div",k,[Object(a["j"])("h5",x," $"+Object(a["D"])(s.state.subTotal.toFixed(2)),1)]),Object(a["j"])("button",{class:"btn btn-success border-dark border-2 rounded elevation-5 text-dark f-18 px-5",onClick:e[1]||(e[1]=(...t)=>s.placeOrder&&s.placeOrder(...t))}," Place Order ")])])]))])});var S=c("8a4e"),C=c("2617"),P=c("cfd9"),z=c("83fc"),B=c("b012"),D=c("6c02"),I=c("3ada"),J={name:"CartPage",setup(){const t=Object(a["x"])({cart:Object(a["d"])(()=>z["AppState"].cart),business:Object(a["d"])(()=>z["AppState"].activeBusiness),empty:Object(a["d"])(()=>!z["AppState"].cart.contents||0===z["AppState"].cart.contents.length),subTotal:Object(a["d"])(()=>{let e=0;return t.cart.contents.forEach(t=>{e+=t.price*t.quantity}),e})}),e=Object(D["d"])();return Object(a["r"])(async()=>{try{t.empty=!C["a"].getCart(),t.empty||await I["a"].getOneBusiness(t.cart.businessId)}catch(e){S["a"].error(e)}}),{async placeOrder(){if(!t.empty){z["AppState"].user.isAuthenticated||(S["a"].log("if 1"),await B["a"].loginWithPopup());try{const c=await P["a"].createOrder(t.cart);c&&e.push({name:"OrderPage",params:{id:c.id}})}catch(c){S["a"].error(c)}}},state:t}}};c("5f7d");J.render=A,J.__scopeId="data-v-84f309dc";e["default"]=J}}]);