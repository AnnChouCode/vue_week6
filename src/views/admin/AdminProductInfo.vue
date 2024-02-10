<template>
  <div class="container overflow-y-scroll scrollbar-y-hide vh-100">
    <h2 class="py-5 h2">編輯商品</h2>
    <div>
      <div class="mb-5">
        <h5 class="mb-3 h5 fw-bold">商品圖片</h5>
        <p class="mb-3">※ 建議上傳方形圖片，以免影響前台效果</p>
        <div class="row g-1 mb-3">
          <div class="col-6 col-md-2">
            <div class="position-relative border border-1 h-100">
              <button
                type="button"
                class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                style="width: 36px; height: 36px"
                @click="deleteImage('imageUrl', idx)" v-if="tempProductInfo.imageUrl"
              >
                <i class="bi bi-trash"></i>
              </button>
              <div
                class="position-absolute bottom-0 py-1 text-center text-white bg-dark opacity-75 w-100"
              >
                封面圖片
              </div>
              <img v-if="tempProductInfo.imageUrl"
                class="d-block mx-auto img-radio-1x1"
                :src="tempProductInfo.imageUrl"
                alt="picture"
              />
              <div v-else class="d-flex flex-column align-items-center justify-content-center h-100 bg-light">
                <i class="bi bi-image mb-2"></i>
                <p>目前無封面</p>
              </div>
            </div>
          </div>
          <div
            class="col-6 col-md-2"
            v-for="(img, idx) in tempProductInfo.imagesUrl"
            :key="idx"
          >
            <div class="position-relative border border-1">
              <button
                type="button"
                class="position-absolute top-0 end-0 d-flex justify-content-center align-items-center mt-2 me-2 btn btn-light"
                style="width: 36px; height: 36px"
                @click="deleteImage('imagesUrl', idx)"
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
            <button  @click="openImageModal" class="d-flex align-items-center justify-content-center border border-1 img-radio-1x1 w-100 text-secondary" type="button">
新增圖片
            </button>
          </div>
        </div>
        <button typs="button" class="p-0 btn text-danger" @click="deleteImage">
          <i class="bi bi-trash me-2"></i>
          <span>刪除所有圖片</span>
        </button>
      </div>
      {{ tempProductInfo }}
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
              v-model="tempProductInfo.title"
            />
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="category" class="form-label fw-bold">商品分類</label>
              <input
                type="text"
                id="category"
                class="form-control mb-1"
                placeholder="請輸入商品分類"
                v-model="tempProductInfo.category"
              />
              <div class="d-flex align-items-center text-nowrap">
                <span>點擊帶入分類：</span>
                <div class="d-flex gap-1 mb-0 flex-wrap">
                  <button
                    class="btn btn-light rounded-pill py-1"
                    v-for="(item, idx) in tempCategoryList"
                    value="item"
                    :key="idx"
                    @click="chooseCategory(item)"
                  >
                    {{ item }}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="unit" class="form-label fw-bold">商品單位</label>
              <input
                type="text"
                id="unit"
                class="form-control"
                placeholder="請輸入商品單位"
                v-model="tempProductInfo.unit"
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
                v-model.number="tempProductInfo.origin_price"
              />
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label fw-bold">售價</label>
              <input
                type="number"
                id="price"
                class="form-control"
                placeholder="請輸入商品售價"
                v-model.number="tempProductInfo.price"
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
              v-model="tempProductInfo.description"
            ></textarea>
          </div>
          <div>
            <label for="content" class="form-label fw-bold">說明內容</label>
            <textarea
              type="text"
              id="content"
              class="form-control"
              placeholder="請輸入說明內容"
              v-model="tempProductInfo.content"
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

  <uploadImageModal ref="uploadImageModal"></uploadImageModal>
</template>

<script>
import { useAllAdminProductsStore } from '@/stores/allAdminProductStore.js'
import { mapStores } from 'pinia'
import uploadImageModal from '@/components/uploadImageModal.vue'

const productsStore = useAllAdminProductsStore()

// import { mapState, mapActions, mapStores } from 'pinia'

// const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      // 產品資訊
      tempProductInfo: {},
      // 產品分類列表
      tempCategoryList: []
    }
  },
  methods: {
    // 取得該頁產品資料
    getProductInfo (datas, id) {
      this.tempProductInfo = datas[id]
      console.log('productInfo 的 getProductInfo', this.tempProductInfo)
    },

    // 選擇分類帶入
    chooseCategory (item) {
      this.tempProductInfo.category = item
    },

    // 刪除圖片
    deleteImage (target, idx) {
      if (target === 'imageUrl') {
        this.tempProductInfo.imageUrl = ''
      } else if (target === 'imagesUrl') {
        this.tempProductInfo.imagesUrl.splice(idx, 1)
      } else {
        this.tempProductInfo.imageUrl = ''
        this.tempProductInfo.imagesUrl = []
      }
    },

    // 開啟圖片處理 modal
    openImageModal () {
      this.$refs.uploadImageModal.openModal()
    }
  },
  computed: {
    ...mapStores(useAllAdminProductsStore)
  },
  components: {
    uploadImageModal
  },
  mounted () {
    console.log('ProductInfo 的 mounted')
    const id = this.$route.params.id

    productsStore
      .getAllProducts()
      .then((res) => {
        console.log('productInfo 拿到 store 給的資料了', res)
        this.getProductInfo(productsStore.allProducts, id)
        this.tempCategoryList = [...productsStore.categoryList]
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err)
      })
    this.$refs.uploadImageModal.openModal()
  }
}
</script>

<style></style>
