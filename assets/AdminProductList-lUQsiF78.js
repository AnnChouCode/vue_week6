import{p as g,f as m}from"./filterCategory-ImhqeapX.js";import{_ as f,r as p,o as a,c as i,b as u,a as d,F as h,g as L,t as P}from"./index-0yh6XsaO.js";var E={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:v,VITE_PATH:x}=E,C={data(){return{productsList:[],pagination:{}}},methods:{getProductList(r=1,n){let s=`${v}/api/${x}/admin/products?page=${r}`;n&&(s+=`&category=${n}`),this.axios.get(s).then(t=>{const{products:e,pagination:o}=t.data;this.productsList=e,this.pagination=o}).catch(t=>{this.$swal.fire({icon:"error",text:t.response.data.message})})}},mounted(){this.getProductList()},components:{paginationComponent:g,filterCategory:m}},V={class:"container"},y=d("h2",{class:"py-5 h2 text-center"},"adminProductList",-1);function A(r,n,s,t,e,o){const l=p("filterCategory"),_=p("paginationComponent");return a(),i("div",V,[y,u(l,{onGetProductList:o.getProductList},null,8,["onGetProductList"]),d("ul",null,[(a(!0),i(h,null,L(e.productsList,c=>(a(),i("li",{key:c.id},P(c.title),1))),128))]),u(_,{pagination:e.pagination,onGetProductList:o.getProductList},null,8,["pagination","onGetProductList"])])}const $=f(C,[["render",A]]);export{$ as default};
