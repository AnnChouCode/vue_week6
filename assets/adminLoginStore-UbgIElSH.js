import{K as r,L as t}from"./index-OjM1QzHf.js";import{s as a}from"./sweetalert2.all-Vzh4P7VD.js";var c={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const m=r("adminLogin",{actions:{checkLogin(){var o;console.log("loginStore 的 checkLogin 啟動");const{VITE_API:n}=c,s=`${n}/api/user/check`,i=(o=document.cookie.split("; ").find(e=>e.startsWith("user=")))==null?void 0:o.split("=")[1];return t.defaults.headers.common.Authorization=i,console.log("adminLogin token get"),t.post(s).then(function(e){return e}).catch(e=>{a.fire({icon:"error",text:e.response.data.message}).then(u=>{this.$router.push("/home")})})}}});export{m as u};
