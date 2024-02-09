<template>
  <div class="container overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-5">
      <h2 class="h2">產品列表</h2>
      <!-- btn 建立新產品 -->
      <button class="btn btn-dark text-white" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <!-- 產品列表 -->
    <div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th class="text-center">分類</th>
            <th class="text-center">原價 / 售價</th>
            <th>狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in productsList" :key="product.id">
            <td style="width: 200px">
              <div
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
              ></div>
            </td>
            <td>
              {{ product.title }}
            </td>
            <td>
              <div class="py-1 rounded-pill bg-light text-center">
                {{ product.category }}
              </div>
            </td>
            <td>
              <div class="h5 text-center">
                {{ product.origin_price }} / {{ product.price }}
              </div>
            </td>
            <td>
              <p v-if="product.is_enabled" class="text-success">啟用</p>
              <p v-else class="text-danger">未啟用</p>
            </td>
            <td>
              <div class="btn-group align-items-center">
                <!-- 編輯產品 -->
                <button
                  type="button"
                  class="btn"
                  @click="showProductInfo(product.id)"
                >
                  <i class="bi bi-pencil text-success"></i>
                </button>
                <!-- 刪除產品 -->
                <button type="button" class="btn">
                  <i class="bi bi-trash text-danger"></i>
                </button>
                <!-- 開產品資訊頁 -->
                <router-link
                  class="btn"
                  target="_blank"
                  :to="`/productinfo/${product.id}`"
                  :class="{ 'pe-none': !product.is_enabled }"
                >
                  <i
                    class="bi bi-house"
                    :class="product.is_enabled ? 'text-dark' : 'text-light'"
                  ></i>
                </router-link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <paginationComponent
        :pagination="pagination"
        @get-Product-List="getProductList"
      ></paginationComponent>
    </div>
  </div>

  <!-- 產品 modal -->
  <productModal ref="productModal"></productModal>
</template>

<script>
import paginationComponent from '@/components/paginationComponent.vue'

// import productModal from '@/components/productModal.vue'

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
      if (category) {
        url += `&category=${category}`
      }

      this.axios
        .get(url)
        .then((res) => {
          const { products, pagination } = res.data
          this.productsList = products
          this.pagination = pagination
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            text: err.response.data.message
          })
        })
    },

    // 開啟 productModal
    openModal (action, item) {
      this.$refs.productModal.openModal(action, item)
    },

    // 觀看產品頁
    showProductInfo (id) {
      console.log(id)
      this.$router.push(`/admin/productinfo/${id}`)
    }
  },
  mounted () {
    this.getProductList()
  },
  components: {
    paginationComponent
    // productModal
  }
}
</script>
