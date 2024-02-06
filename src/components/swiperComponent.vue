<template>
<div class="py-3">
  <h3 class="mb-3">{{ adTitle[adCategoryTitle] }}</h3>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    @swiperprogress="onProgress"
    @swiperslidechange="onSlideChange"
    >
      <SwiperSlide v-for="(item, idx) in adCurrentCategory" :key="idx">
      <router-link :to="`/productinfo/${item.id}`">
        <img :src="item.imageUrl" :alt="item.title" class="mb-2">
      <p class="text-center text-dark">{{ item.title }}</p>
      </router-link>
      </SwiperSlide>
    </Swiper>
</div>
</template>

<script>
// import Swiper js
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import store
import allProductStore from '@/stores/allProductStore.js'
import { mapActions, mapState } from 'pinia'

register()

export default {
  props: ['adCategoryTitle'],
  data () {
    return {
      adTitle: {
        sweet: '猜你喜歡吃甜甜',
        taste: '邀請你來嚐口感',
        spices: '美味氣氛隨你加'
      },
      regexCategory: {
        sweet: /(蛋糕|糖果)/,
        taste: /(麵包|餅乾)/,
        spices: /(餐具|飲料|果醬)/
      },
      adCurrentCategory: [],
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  methods: {
    // 獲取所有產品
    ...mapActions(allProductStore, ['getAllProducts']),

    // 設定
    setup () {
      const spaceBetween = 10 // 不知道為什麼要加這個，不加或填 10 以外的數字會壞掉
      const onProgress = (e) => {
        const [swiper, progress] = e.detail
        console.log('onProgress swiper', swiper)
        console.log('onProgress progress', progress)
      }

      const onSlideChange = (e) => {
        console.log('onSlideChange')
      }

      return {
        spaceBetween,
        onProgress,
        onSlideChange
      }
    },

    // 取得產品分類列表
    getAdCategory () {
      const allData = this.allProducts
      const regexMap = Object.entries(this.regexCategory)

      allData.forEach(data => {
        regexMap.forEach(([category, reg]) => {
          if (category === this.adCategoryTitle && reg.test(data.category)) {
            this.adCurrentCategory.push(data)
          }
        })
      })
    }
  },
  mounted () {
    this.setup()
    this.getAdCategory()
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: { ...mapState(allProductStore, ['allProducts']) }
}
</script>

<style>
.swiper-slide img {
  display: block;
  width: 100%;
  max-height: 170px;
  object-fit: cover;
}

.swiper-wrapper{
  margin-bottom:3rem;
}
</style>
