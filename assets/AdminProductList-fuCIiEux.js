import{p as m,f as g}from"./filterCategory-SudQdmrs.js";import{_ as f,b as p,o as i,c as a,d,a as u,F as h,r as L,t as P}from"./index-xbpPkRUb.js";import"./sweetalert2.all-9-2Zm3oZ.js";var E={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:v,VITE_PATH:x}=E,C={data(){return{productsList:[],pagination:{}}},methods:{getProductList(r=1,n){let s=`${v}/api/${x}/admin/products?page=${r}`;n&&(s+=`&category=${n}`),this.axios.get(s).then(t=>{const{products:e,pagination:o}=t.data;this.productsList=e,this.pagination=o}).catch(t=>{this.$swal.fire({icon:"error",text:t.response.data.message})})}},mounted(){this.getProductList()},components:{paginationComponent:m,filterCategory:g}},V={class:"container"},y=u("h2",{class:"py-5 h2 text-center"},"adminProductList",-1);function A(r,n,s,t,e,o){const l=p("filterCategory"),_=p("paginationComponent");return i(),a("div",V,[y,d(l,{onGetProductList:o.getProductList},null,8,["onGetProductList"]),u("ul",null,[(i(!0),a(h,null,L(e.productsList,c=>(i(),a("li",{key:c.id},P(c.title),1))),128))]),d(_,{pagination:e.pagination,onGetProductList:o.getProductList},null,8,["pagination","onGetProductList"])])}const k=f(C,[["render",A]]);export{k as default};