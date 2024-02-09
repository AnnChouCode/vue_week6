<template>
  <div class="container overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 class="py-5 h2">編輯商品</h2>
    <div>
      <div class="mb-5">
        <h5 class="mb-3 h5 fw-bold">商品圖片</h5>
        <p class="mb-3">※ 建議上傳方形圖片，以免影響前台效果</p>
        <div class="row g-1 mb-3">
          <div class="col-6 col-md-2">
            <div class="position-relative border border-1">
              <button
                type="button"
                class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                style="width: 36px; height: 36px"
              >
                <i class="bi bi-trash"></i>
              </button>
              <div
                class="position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"
              >
                封面圖片
              </div>
              <img
                class="d-block mx-auto img-radio-1x1"
                :src="productInfo.imageUrl"
                alt="picture"
              />
            </div>
          </div>
          <div
            class="col-6 col-md-2"
            v-for="(img, idx) in productInfo.imagesUrl"
            :key="idx"
          >
            <div class="position-relative border border-1">
              <button
                type="button"
                class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                style="width: 36px; height: 36px"
              >
                <i class="bi bi-trash"></i>
              </button>
              <img
                class="d-block mx-auto img-radio-1x1"
                :src="img"
                alt="picture"
              />
            </div>
          </div>
          <div class="col-6 col-md-2">
            <div
              class="d-flex align-items-center justify-content-center border border-1 img-radio-1x1"
            >
              <p class="text-secondary">新增圖片</p>
            </div>
          </div>
        </div>
        <button typs="button" class="p-0 btn text-danger">
          <i class="bi bi-trash me-2"></i>
          <span>刪除所有圖片</span>
        </button>
      </div>
      <div>
        <h5 class="mb-3 h5 fw-bold">商品基本資訊</h5>
        <form class="d-flex flex-column gap-3">
          <div d-flex>
            <label for="name" class="form-label fw-bold">商品名稱</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="請輸入商品名稱"
              v-model="productInfo.title"
            />
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="category" class="form-label fw-bold">商品分類</label>
              <input
                type="text"
                id="category"
                class="form-control"
                placeholder="請輸入商品分類"
              />
            </div>
            <div class="col-md-6">
              <label for="unit" class="form-label fw-bold">商品單位</label>
              <input
                type="text"
                id="unit"
                class="form-control"
                placeholder="請輸入商品單位"
                v-model="productInfo.unit"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="origin_price" class="form-label fw-bold">原價</label>
              <input
                type="number"
                id="origin_price"
                class="form-control"
                placeholder="請輸入原價"
                v-model.number="productInfo.origin_price"
              />
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label fw-bold">售價</label>
              <input
                type="number"
                id="price"
                class="form-control"
                placeholder="請輸入商品售價"
                v-model.number="productInfo.price"
              />
            </div>
          </div>
          <div>
            <label for="description" class="form-label fw-bold">商品描述</label>
            <textarea
              type="text"
              id="description"
              class="form-control"
              placeholder="請輸入商品描述"
              v-model="productInfo.description"
            ></textarea>
          </div>
          <div>
            <label for="content" class="form-label fw-bold">說明內容</label>
            <textarea
              type="text"
              id="content"
              class="form-control"
              placeholder="請輸入說明內容"
              v-model="productInfo.content"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
    <div class="d-flex justify-content-end gap-2 pt-3">
      <button
        type="button"
        class="btn btn-outline-dark"
        data-bs-dismiss="modal"
      >
        取消
      </button>
      <button type="button" class="btn btn-dark text-white">確認</button>
    </div>
  </div>
</template>

<script>
import { useAllAdminProductsStore } from '@/stores/allAdminProductStore.js'
import { mapStores } from 'pinia'
const productsStore = useAllAdminProductsStore()

// import { mapState, mapActions, mapStores } from 'pinia'

// const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品資訊
      productInfo: {}
    }
  },
  methods: {
    // 取得該頁產品資料
    getProductInfo (datas, id) {
      this.productInfo = datas[id]
      console.log(this.productInfo)
    }
  },
  computed: {
    ...mapStores(useAllAdminProductsStore)
  },
  mounted () {
    const id = this.$route.params.id

    productsStore
      .getAllProducts()
      .then((allProducts) => {
        this.getProductInfo(allProducts, id)
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err)
      })
  }
}
</script>

<style>
</style>
