<template>
    <div>
            <label for="category" class="me-3">產品分類篩選</label>
            <select name="category" id="category" v-model="currentCategory">
            <option value="">全部</option>
            <option :value="item" v-for="item in categoryList" :key="item">{{item}}</option>
            </select>
        </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品分類列表
      categoryList: [],
      // 當前產品分類
      currentCategory: ''
    }
  },
  watch: {
    currentCategory () {
      this.$emit('getProductList', 1, this.currentCategory)
    }
  },
  methods: {
    // 取得產品分類列表
    getCategoryList () {
      const url = `${VITE_API}/api/${VITE_PATH}/products/all`

      this.axios.get(url)
        .then(res => {
          const products = res.data.products
          const categoryList = new Set(products.map(item => item.category))
          this.categoryList = [...categoryList]
        })
        .catch(err => this.$swal.fire(
          {
            icon: 'error',
            text: err.response.data.message
          }
        ))
    }
  },
  mounted () {
    this.getCategoryList()
  }
}
</script>
