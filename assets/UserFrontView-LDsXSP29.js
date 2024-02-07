import{c as f}from"./cartStore-vxvjjiC6.js";import{m as k,_ as h,o as e,c as r,F as v,r as x,a as t,n as L,t as $,b as p,d as i,w as c,e as g,f as l}from"./index-xbpPkRUb.js";import"./sweetalert2.all-9-2Zm3oZ.js";const y={data(){return{toastList:null,toastMsgList:[],toastInnerMsg:{addToCart:{icon:"bi-cart-plus",msg:"已加入購物車"},updateCart:{icon:"bi-info-circle",msg:"購物車已更新"},deleteCartItem:{icon:"bi-cart-dash",msg:"商品已刪除"}}}},computed:{...k(f,["doAction","toastState"])},watch:{toastState(){this.addToastMsg(this.doAction)}},methods:{addToastMsg(a){this.toastMsgList.unshift(this.toastInnerMsg[a]),setTimeout(()=>{this.toastMsgList.pop()},1500)},clearToast(a){this.toastMsgList.splice(a,1)}}},C={class:"position-fixed bottom-0 end-0 p-3",style:{"z-index":"11"}},w={class:"toast-body d-flex align-items-center justify-content-between"},M={class:"d-flex"},T={class:"mb-0"},N=["onClick"];function S(a,o,d,b,_,m){return e(),r("div",C,[(e(!0),r(v,null,x(_.toastMsgList,(s,n)=>(e(),r("div",{class:"toast show mb-1",role:"alert","aria-live":"assertive","aria-atomic":"true",key:n},[t("div",w,[t("div",M,[t("i",{class:L(["bi me-2 text-success",s.icon])},null,2),t("p",T,$(s.msg),1)]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:u=>m.clearToast(n)},null,8,N)])]))),128))])}const V=h(y,[["render",S]]),B={data(){return{isLoggedin:"false"}},mounted(){var o;((o=document.cookie.split("; ").find(d=>d.startsWith("user=")))==null?void 0:o.split("=")[1])||(this.isLoggedin=!this.isLoggedin)},components:{toastComponent:V}},R={class:"navbar navbar-expand-lg navbar-dark bg-dark"},F={class:"container-fluid"},I=t("a",{href:"#/home"},[t("h1",{class:"mb-0 me-5 fs-4 text-white"},"Shopping Time")],-1),z=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),A={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav"},D={class:"nav-item py-2"},E={class:"nav-item py-2"},U={class:"nav-item py-2"};function W(a,o,d,b,_,m){const s=p("RouterLink"),n=p("RouterView"),u=p("toastComponent");return e(),r(v,null,[t("nav",R,[t("div",F,[I,z,t("div",A,[t("ul",j,[t("li",D,[i(s,{to:"/productlist",class:"nav-link"},{default:c(()=>[l("看產品")]),_:1})]),t("li",E,[i(s,{to:"/cart",class:"nav-link"},{default:c(()=>[l("購物車")]),_:1})]),t("li",U,[_.isLoggedin?(e(),g(s,{key:1,to:"/admin",class:"nav-link"},{default:c(()=>[l("去後台")]),_:1})):(e(),g(s,{key:0,to:"/userlogin",class:"nav-link"},{default:c(()=>[l("去後台")]),_:1}))])])])])]),i(n),i(u)],64)}const J=h(B,[["render",W]]);export{J as default};