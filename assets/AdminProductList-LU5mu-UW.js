import{u as b}from"./adminLoginStore-edIgbVEz.js";import{_ as v,V as y,b as u,o as c,c as r,a as t,F as P,r as L,d as h,O as $,t as d,w,n as _}from"./index-6d3eRlgN.js";import{p as C}from"./paginationComponent-O0dcFpzM.js";import"./sweetalert2.all-w0xBe72o.js";var A={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const p=b(),{VITE_API:g,VITE_PATH:m}=A,I={data(){return{productsList:[],pagination:{}}},methods:{getProductList(s=1,i){let a=`${g}/api/${m}/admin/products?page=${s}`;i&&(a+=`&category=${i}`),this.axios.get(a).then(o=>{const{products:n,pagination:l}=o.data;this.productsList=n,this.pagination=l}).catch(o=>{this.$swal.fire({icon:"error",text:o.response.data.message})})},showProductInfo(s){this.$router.push(`/admin/productinfo/${s}`)},deleteProduct(s){const i=`${g}/api/${m}/admin/product/${s}`;this.$swal.fire({title:"確定要刪除產品嗎？",text:"這個動作無法復原",icon:"question",showCancelButton:!0,confirmButtonColor:"#000000",cancelButtonColor:"gray",confirmButtonText:"OK"}).then(a=>{if(a.isConfirmed){const o=this.$loading.show();this.axios.delete(i).then(n=>{this.$swal.fire(n.data.message),this.getProductList()}).catch(n=>{this.$swal.fire({icon:"error",text:n.response.data.message})}).finally(()=>{o.hide()})}})}},computed:{...y(b)},mounted(){console.log("AdminProductList 的 mounted，即將執行確認登入"),console.log(p),p.checkLogin().then(s=>{console.log("AdminProductList 拿到登入的資料了",s),this.getProductList()})},components:{paginationComponent:C}},B={class:"container overflow-y-scroll scrollbar-y-hide vh-100"},E=t("div",{class:"d-flex justify-content-between py-5"},[t("h2",{class:"h2"},"產品列表"),t("button",{class:"btn btn-dark text-white"},"建立新的產品")],-1),S={class:"table align-middle"},V=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",{class:"text-center"},"分類"),t("th",{class:"text-center"},"原價 / 售價"),t("th",null,"狀態"),t("th")])],-1),T={style:{width:"200px"}},D={class:"py-1 rounded-pill bg-light text-center"},O={class:"h5 text-center"},z={key:0,class:"text-success"},R={key:1,class:"text-danger"},F={class:"btn-group align-items-center"},G=["onClick"],H=t("i",{class:"bi bi-pencil text-success"},null,-1),N=[H],U=["onClick"],j=t("i",{class:"bi bi-trash text-danger"},null,-1),q=[j];function K(s,i,a,o,n,l){const f=u("router-link"),x=u("paginationComponent");return c(),r("div",B,[E,t("div",null,[t("table",S,[V,t("tbody",null,[(c(!0),r(P,null,L(n.productsList,e=>(c(),r("tr",{key:e.id},[t("td",T,[t("div",{style:$([{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}])},null,4)]),t("td",null,d(e.title),1),t("td",null,[t("div",D,d(e.category),1)]),t("td",null,[t("div",O,d(e.origin_price)+" / "+d(e.price),1)]),t("td",null,[e.is_enabled?(c(),r("p",z,"啟用")):(c(),r("p",R,"未啟用"))]),t("td",null,[t("div",F,[t("button",{type:"button",class:"btn",onClick:k=>l.showProductInfo(e.id)},N,8,G),t("button",{type:"button",class:"btn",onClick:k=>l.deleteProduct(e.id)},q,8,U),h(f,{class:_(["btn",{"pe-none":!e.is_enabled}]),target:"_blank",to:`/productinfo/${e.id}`},{default:w(()=>[t("i",{class:_(["bi bi-house",e.is_enabled?"text-dark":"text-light"])},null,2)]),_:2},1032,["to","class"])])])]))),128))])]),h(x,{pagination:n.pagination,onGetProductList:l.getProductList},null,8,["pagination","onGetProductList"])])])}const X=v(I,[["render",K]]);export{X as default};