import{t as f}from"./toastComponent-hExqGcpi.js";import{c as d}from"./cartStore-tTQHCk9H.js";import{_ as h,m as v,a as x,r as i,o,c as p,b as t,d as s,w as a,e as _,F as b,f as n,t as y,g as k}from"./index-tpYJsdZS.js";import"./allAdminOrderStore-Yt-8HE9K.js";import"./sweetalert2.all-NHIf3_Ao.js";const w={data(){return{isLoggedin:"false"}},methods:{...v(d,["getCartsList"])},mounted(){var c;((c=document.cookie.split("; ").find(l=>l.startsWith("user=")))==null?void 0:c.split("=")[1])||(this.isLoggedin=!this.isLoggedin),this.getCartsList()},components:{toastComponent:f},computed:{...x(d,["cartsList"])}},L={class:"navbar navbar-expand-lg navbar-dark bg-dark"},C={class:"container-fluid"},N=t("a",{href:"#/home"},[t("h1",{class:"mb-0 me-5 fs-4 text-white"},"Dessert Time")],-1),V=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse",id:"navbarNav"},R={class:"navbar-nav justify-content-between w-100"},F={class:"nav-item d-flex flex-column flex-lg-row gap-3 py-2"},S={class:"nav-item d-flex flex-column flex-lg-row gap-3 py-2"},T={class:"d-flex gap-1"},$=t("p",null,"購物車",-1),D={key:0,class:"bg-danger rounded-pill px-2 py-1 text-white",style:{"font-size":"12px"}};function j(r,c,l,z,m,A){const e=i("RouterLink"),g=i("RouterView"),u=i("toastComponent");return o(),p(b,null,[t("nav",L,[t("div",C,[N,V,t("div",B,[t("ul",R,[t("li",F,[s(e,{to:"/productlist",class:"text-secondary"},{default:a(()=>[n("看產品")]),_:1}),s(e,{to:"/orders",class:"text-secondary"},{default:a(()=>[n("查訂單")]),_:1})]),t("li",S,[s(e,{to:"/cart",class:"text-secondary"},{default:a(()=>[t("div",T,[$,r.cartsList.total?(o(),p("div",D,y(r.cartsList.carts.length),1)):k("",!0)])]),_:1}),m.isLoggedin?(o(),_(e,{key:1,to:"/admin",class:"text-secondary"},{default:a(()=>[n(" 後台 ")]),_:1})):(o(),_(e,{key:0,to:"/userlogin",class:"text-secondary"},{default:a(()=>[n(" 登入 ")]),_:1}))])])])])]),s(g),s(u)],64)}const H=h(w,[["render",j]]);export{H as default};
