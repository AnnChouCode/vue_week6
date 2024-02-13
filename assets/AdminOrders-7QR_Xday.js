import{u as p}from"./adminLoginStore-UbgIElSH.js";import{_ as m,V as g,d as f,o as l,c as r,a as t,F as b,r as y,e as x,t as d}from"./index-OjM1QzHf.js";import{p as L}from"./paginationComponent-b0O6B2DG.js";import"./sweetalert2.all-Vzh4P7VD.js";var v={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const $=p(),{VITE_API:u,VITE_PATH:h}=v,k={data(){return{ordersList:[],pagination:{}}},methods:{getOrderList(e=1){const n=`${u}/api/${h}/admin/orders?page=${e}`;this.axios.get(n).then(o=>{const{orders:c,pagination:a}=o.data;this.ordersList=c,this.pagination=a,console.log(this.ordersList)}).catch(o=>{this.$swal.fire({icon:"error",text:o.response.data.message})})},deleteOrder(e){console.log(e);let n=`${u}/api/${h}/admin/orders/all`,o='確定要刪除<span class="text-danger">全部</span>訂單嗎？';e!=="all"&&(n=`${u}/api/${h}/admin/order/${e}`,o=`確定要刪除訂單 <p><span class="text-danger">${e}</span> 嗎？</p>`),this.$swal.fire({title:o,text:"這個動作無法復原",icon:"question",showCancelButton:!0,confirmButtonColor:"#000000",cancelButtonColor:"gray",confirmButtonText:"OK"}).then(c=>{if(c.isConfirmed){const a=this.$loading.show();this.axios.delete(n).then(i=>{this.$swal.fire(i.data.message),this.getOrderList()}).catch(i=>{this.$swal.fire({icon:"error",text:i.response.data.message})}).finally(()=>{a.hide()})}})},async fetchData(){try{await $.checkLogin(),console.log("Orders 確認登入"),this.getOrderList()}catch(e){console.log(e.response.data.message)}}},computed:{...g(p)},components:{paginationComponent:L},mounted(){console.log("Orders 的 mounted，即將執行確認登入"),this.fetchData()}},O={class:"container overflow-y-scroll scrollbar-y-hide vh-100"},w={class:"d-flex justify-content-between py-5"},C=t("h2",{class:"h2 fw-bold"},"訂單管理",-1),B={key:0,class:"py-5 text-center"},E={key:1,class:"table align-middle"},T=t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"訂單時間"),t("th",null,"客戶姓名"),t("th",null,"付款狀態"),t("th",null,"訂單狀態"),t("th",null,"總金額"),t("th")])],-1),V={key:0,class:"text-success"},A={key:1,class:"text-danger"},S=t("td",null,"未處理",-1),D={class:"btn-group align-items-center"},I=t("button",{type:"button",class:"btn"},[t("i",{class:"bi bi-pencil text-success"})],-1),P=["onClick"],R=t("i",{class:"bi bi-trash text-danger"},null,-1),F=[R];function G(e,n,o,c,a,i){const _=f("paginationComponent");return l(),r("div",O,[t("div",w,[C,t("button",{type:"button",class:"btn btn-dark",onClick:n[0]||(n[0]=s=>i.deleteOrder("all"))},"清除全部訂單")]),t("div",null,[a.ordersList?(l(),r("p",B,"目前沒有訂單")):(l(),r("table",E,[T,t("tbody",null,[(l(!0),r(b,null,y(a.ordersList,s=>(l(),r("tr",{key:s.id},[t("td",null,d(s.id),1),t("td",null,d(s.create_at),1),t("td",null,d(s.user.name),1),t("td",null,[s.is_paid?(l(),r("span",V,"已付款")):(l(),r("span",A,"未付款"))]),S,t("td",null,d(s.total),1),t("td",null,[t("div",D,[I,t("button",{type:"button",class:"btn",onClick:H=>i.deleteOrder(s.id)},F,8,P)])])]))),128))])])),x(_,{pagination:a.pagination,onGetList:i.getOrderList},null,8,["pagination","onGetList"])])])}const M=m(k,[["render",G]]);export{M as default};
