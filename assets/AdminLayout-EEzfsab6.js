import{_,b as r,o as m,c as p,a as e,d as t,w as o,T as h,F as f,f as a}from"./index-68tzqQf9.js";var k={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const x={methods:{checkLogin(){const{VITE_API:i}=k,l=`${i}/api/user/check`;this.axios.post(l).then(function(n){console.log("歡迎登入")}).catch(n=>{this.$swal.fire({icon:"error",text:n.response.data.message}).then(()=>{this.$router.push("/home")})})},logout(){document.cookie="user=;expires=;",this.$router.push("/home")}},created(){var l;const i=(l=document.cookie.split("; ").find(n=>n.startsWith("user=")))==null?void 0:l.split("=")[1];this.axios.defaults.headers.common.Authorization=i,console.log("adminLayout token get"),this.checkLogin()}},v={class:"d-flex d-lg-none flex-column sticky-top bg-dark p-2"},w={class:"d-flex justify-content-between"},g=e("button",{type:"button",class:"btn border border-white","data-bs-toggle":"collapse","data-bs-target":"#collapseAdminMenu","aria-expanded":"false","aria-controls":"collapseAdminMenu"},[e("i",{class:"bi bi-list text-white"})],-1),b={class:"collapse",id:"collapseAdminMenu"},y={class:"navbar-nav text-center gap-3 pt-3"},A=e("hr",{style:{border:"1px solid white"}},null,-1),T={class:"navbar-nav text-center gap-3"},E={class:"container-fluid"},V={class:"row"},D={class:"position-sticky top-0 d-none d-lg-flex flex-column col-lg-2 p-3 text-white bg-dark vh-100"},I=e("hr",null,null,-1),L={class:"nav flex-column mb-auto gap-3"},M=e("hr",null,null,-1),B={class:"d-flex flex-column"},C={class:"col col-lg-10 p-3"};function P(i,l,n,$,H,d){const s=r("router-link"),u=r("router-view");return m(),p(f,null,[e("nav",v,[e("div",w,[t(s,{to:"/admin/dashboard",class:"fs-4 text-white"},{default:o(()=>[a("Dessert Time")]),_:1}),g]),e("div",b,[e("ul",y,[e("li",null,[t(s,{to:"/admin/dashboard",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("Home")]),_:1})]),e("li",null,[t(s,{to:"/admin/products",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("產品列表")]),_:1})]),e("li",null,[t(s,{to:"/admin/orders",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("訂單列表")]),_:1})])]),A,e("div",T,[t(s,{to:"/home",class:"py-2 text-white theme-dark-navlink"},{default:o(()=>[a("回前台")]),_:1}),e("a",{href:"#",onClick:l[0]||(l[0]=h((...c)=>d.logout&&d.logout(...c),["prevent"])),class:"py-2 text-white theme-dark-navlink"},"登出")])])]),e("div",E,[e("div",V,[e("div",D,[t(s,{to:"/admin/dashboard",class:"fs-4 mb-3 mb-md-0 me-md-auto text-white"},{default:o(()=>[a("Dessert Time")]),_:1}),I,e("ul",L,[e("li",null,[t(s,{to:"/admin/dashboard",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("Home")]),_:1})]),e("li",null,[t(s,{to:"/admin/products",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("產品列表")]),_:1})]),e("li",null,[t(s,{to:"/admin/orders",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("訂單列表")]),_:1})])]),M,e("div",B,[t(s,{to:"/home",class:"py-2 theme-dark-navlink text-white"},{default:o(()=>[a("回前台")]),_:1}),e("a",{href:"#",onClick:l[1]||(l[1]=h((...c)=>d.logout&&d.logout(...c),["prevent"])),class:"py-2 theme-dark-navlink text-white"},"登出")])]),e("div",C,[t(u)])])])],64)}const R=_(x,[["render",P]]);export{R as default};