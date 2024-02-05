<template>
    <div class="container">
        <h2 class="py-5 h2 text-center">adminProductList</h2>
        <!-- 分類篩選 -->
        <filterCategory @get-Product-List="getProductList"></filterCategory>
        <!-- 產品列表 -->
        <ul>
            <li v-for="product in productsList" :key="product.id">{{ product.title }}</li>
        </ul>
        <!-- 頁碼 -->
        <paginationComponent :pagination="pagination" @get-Product-List="getProductList"></paginationComponent>
    </div>
</template>

<script>
import paginationComponent from '@/components/paginationComponent.vue'
import filterCategory from '@/components/filterCategory.vue'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品列表
      productsList: [],
      // 頁碼
      pagination: {}
    }
  },
  methods: {
    // 獲取產品列表
    getProductList (page = 1, category) {
      let url = `${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}`
      if (category) { url += `&category=${category}` }

      this.axios.get(url)
        .then(res => {
          const { products, pagination } = res.data
          this.productsList = products
          this.pagination = pagination
        })
        .catch(err => {
          this.$swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
        })
    }
  },
  mounted () {
    this.getProductList()
  },
  components: {
    paginationComponent,
    filterCategory
  }
}
</script>
