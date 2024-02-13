<template>
  <div class="container overflow-y-scroll scrollbar-y-hide vh-100">
    <div class="d-flex justify-content-between py-5">
      <h2 class="h2 fw-bold">訂單管理</h2>
      <button type="button" class="btn btn-dark" @click="deleteOrder('all')">清除全部訂單</button>
    </div>
    <div>
      <p v-if="ordersList" class="py-5 text-center">目前沒有訂單</p>
      <!-- 訂單列表 -->
      <table v-else class="table align-middle">
        <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單時間</th>
              <th>客戶姓名</th>
              <th>付款狀態</th>
              <th>訂單狀態</th>
              <th>總金額</th>
              <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="order in ordersList" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.create_at }}</td>
            <td>{{ order.user.name }}</td>
            <td>
                <span v-if="order.is_paid" class="text-success">已付款</span>
                <span v-else class="text-danger">未付款</span>
            </td>
            <td>未處理</td>
            <td>{{ order.total }}</td>
            <td>
              <div class="btn-group align-items-center">
                <button
                  type="button"
                  class="btn">
                  <i class="bi bi-pencil text-success"></i>
                </button>
                <button type="button" class="btn" @click="deleteOrder(order.id)">
                  <i class="bi bi-trash text-danger"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- 頁碼 -->
      <paginationComponent :pagination="pagination" @get-List="getOrderList"></paginationComponent>
    </div>
  </div>

  <!-- <uploadImageModal ref="uploadImageModal" @submitImgUrl="getImgUrl" :is-Cover="isCover"></uploadImageModal> -->
</template>

<script>
import { useAdminLoginStore } from '@/stores/adminLoginStore.js'
// import { useAllAdminOrderStore } from '@/stores/allAdminOrderStore.js'
import { mapStores } from 'pinia'
// import uploadImageModal from '@/components/uploadImageModal.vue'
import paginationComponent from '@/components/paginationComponent.vue'

const adminLoginStore = useAdminLoginStore()
// const ordersStore = useAllAdminOrderStore()
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      ordersList: [],
      pagination: {}
    }
  },
  methods: {
    // 獲取所有訂單
    getOrderList (page = 1) {
      const url = `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`

      this.axios.get(url)
        .then(res => {
          const { orders, pagination } = res.data
          this.ordersList = orders
          this.pagination = pagination
          console.log(this.ordersList)
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

    // 刪除訂單
    deleteOrder (id) {
      console.log(id)
      let url = `${VITE_API}/api/${VITE_PATH}/admin/orders/all`
      let alertTitle = '確定要刪除<span class="text-danger">全部</span>訂單嗎？'

      if (id !== 'all') {
        url = `${VITE_API}/api/${VITE_PATH}/admin/order/${id}`
        alertTitle = `確定要刪除訂單 <p><span class="text-danger">${id}</span> 嗎？</p>`
      }

      // 刪除前詢問
      this.$swal
        .fire({
          title: alertTitle,
          text: '這個動作無法復原',
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#000000',
          cancelButtonColor: 'gray',
          confirmButtonText: 'OK'
        })
        .then((result) => {
          if (result.isConfirmed) {
            // 開啟 loading
            const loader = this.$loading.show()

            this.axios.delete(url)
              .then(res => {
                // 提示訊息
                this.$swal.fire(res.data.message)
                // 重整訂單列表
                this.getOrderList()
              })
              .catch(err => {
                this.$swal.fire(
                  {
                    icon: 'error',
                    text: err.response.data.message
                  }
                )
              })
              .finally(() => {
                // 關閉 loading
                loader.hide()
              })
          }
        })
    },

    // 獲取所有資料
    async fetchData () {
      try {
        // 確認登入
        await adminLoginStore.checkLogin()
        console.log('Orders 確認登入')

        // 獲取所有訂單資料
        this.getOrderList()
        // ordersStore.getAllOrders()
        // this.orders = ordersStore.allOrders
        // console.log('orders 拿到 ordersStore 給的資料了', this.orders)
      } catch (err) {
        console.log(err.response.data.message)
      }
    }
  },
  computed: {
    ...mapStores(useAdminLoginStore)
    // ...mapStores(useAllAdminOrderStore)
  },
  components: {
    paginationComponent
    // uploadImageModal
  },
  mounted () {
    console.log('Orders 的 mounted，即將執行確認登入')
    // 獲取所有資料
    this.fetchData()
  }
}
</script>

<style></style>
