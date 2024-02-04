<template>
    <div class="container">
        <h2 class="py-5 h2 text-center">看產品</h2>

        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productsList" :key="product.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center;"
                  :style="{backgroundImage: `url(${product.imageUrl})`}">
                </div>
              </td>
              <td>
                {{ product.title }}
              </td>
              <td>
                <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
                <div v-else>
                  <del class="h6">原價 {{ product.origin_price }} 元</del>
                  <div class="h5">現在只要 {{ product.price }} 元</div>
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary" @click="showProductInfo(product.id)">
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id, 1)">
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <nav aria-label="Page navigation" class="d-flex justify-content-end">
        <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagination.has_pre}">
            <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active': page === pagination.current_page}">
            <a href="#" class="page-link" @click.prevent="getProductList(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagination.has_next}">
            <a class="page-link" href="#" aria-label="Next" @click.prevent="getProductList(pagination.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
        </ul>
    </nav>
    </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { mapActions } from 'pinia'

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
    // 加入購物車
    ...mapActions(cartStore, ['addToCart']),

    // 獲取產品列表
    getProductList (page = 1, category) {
      let url = `${VITE_API}/api/${VITE_PATH}/products?page=${page}`
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
    },

    // 切換產品資訊頁
    showProductInfo (id) {
      this.$router.push(`/productinfo/${id}`)
    }
  },
  mounted () {
    this.getProductList()
  }
}
</script>
