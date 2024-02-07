import{c as m}from"./cartStore-vxvjjiC6.js";import{_,I as h,o as s,c,a as t,t as e,F as g,r as f,K as p,L as I,M as v,O as y,n as b}from"./index-xbpPkRUb.js";import"./sweetalert2.all-9-2Zm3oZ.js";var k={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"annchou",BASE_URL:"/vue_week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:T,VITE_PATH:E}=k,S={data(){return{product:{},qty:1}},methods:{...h(m,["addToCart"]),changeImage(n){this.product.currentImage=this.product.imagesStock[n]}},created(){const n=this.$route.params.id,r=`${T}/api/${E}/product/${n}`;this.axios.get(r).then(u=>{const i=u.data.product;this.product={productInfo:i,currentImage:i.imageUrl,imagesStock:[i.imageUrl,...i.imagesUrl]}}).catch(u=>console.log(u.response.data.message))}},V={key:0,class:"container"},C={class:"py-5 h2 text-center"},A={class:"modal-body"},D={class:"row"},P={class:"col-sm-6"},U=["src","alt"],x=["onClick"],q=["src"],w={class:"col-sm-6"},B={class:"mb-4 badge bg-primary rounded-pill"},M={class:"mb-2"},L={class:"mb-4"},O={class:"mb-4"},R={key:0,class:"h5"},F={key:1,class:"h6"},H={key:2,class:"h5"},N={class:"input-group"};function z(n,r,u,i,o,a){return o.product.productInfo?(s(),c("div",V,[t("h2",C,e(o.product.productInfo.title),1),t("div",A,[t("div",D,[t("div",P,[t("img",{class:"img-fluid",src:o.product.currentImage,alt:o.product},null,8,U),t("div",null,[(s(!0),c(g,null,f(o.product.imagesStock,(d,l)=>(s(),c("a",{href:"#",key:"img"+l,onClick:y(K=>a.changeImage(l),["prevent"])},[t("img",{src:d,alt:"productImg",class:b(["img-store m-1",d===o.product.currentImage?"border border-3 border-primary":""])},null,10,q)],8,x))),128))])]),t("div",w,[t("span",B,e(o.product.productInfo.category),1),t("p",M,"商品描述："+e(o.product.productInfo.description),1),t("p",L,"商品內容："+e(o.product.productInfo.content),1),t("div",O,[o.product.productInfo.price?p("",!0):(s(),c("div",R,e(o.product.productInfo.origin_price)+" 元",1)),o.product.productInfo.price?(s(),c("del",F,"原價 "+e(o.product.productInfo.origin_price)+" 元",1)):p("",!0),o.product.productInfo.price?(s(),c("div",H,"現在只要 "+e(o.product.productInfo.price)+" 元",1)):p("",!0)]),t("div",null,[t("div",N,[I(t("input",{type:"number",class:"form-control","onUpdate:modelValue":r[0]||(r[0]=d=>o.qty=d),min:"1"},null,512),[[v,o.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=d=>n.addToCart(o.product.productInfo.id,o.qty))},"加入購物車")])])])])])])):p("",!0)}const Q=_(S,[["render",z]]);export{Q as default};
