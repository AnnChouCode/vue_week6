<template>
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#/home">
        <h1 class="mb-0 me-5 fs-4 text-white">Shopping Time</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item py-2">
            <RouterLink to="/productlist" class="nav-link">看產品</RouterLink>
          </li>
          <li class="nav-item py-2">
            <RouterLink to="/cart" class="nav-link">購物車</RouterLink>
          </li>
          <li class="nav-item py-2">
            <!-- 未登入 -->
            <RouterLink v-if="!isLoggedin" to="/userlogin" class="nav-link">去後台</RouterLink>
            <!-- 已登入 -->
            <RouterLink v-else to="/admin" class="nav-link">去後台</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    <RouterView />
    <toastComponent></toastComponent>
</template>

<script>
import toastComponent from '@/components/toastComponent.vue'
import allProductStore from '@/stores/allProductStore.js'
import { mapActions } from 'pinia'

export default {
  data () {
    return {
      isLoggedin: 'false'
    }
  },
  methods: {
    // 取得所有產品資料，生成產品與分類資料
    ...mapActions(allProductStore, ['getAllProducts'])
  },
  mounted () {
    // 取得 cookie
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user='))
      ?.split('=')[1]

    // 判斷是否登入
    if (!token) {
      this.isLoggedin = !this.isLoggedin
    }

    // 取得所有產品資料
    this.getAllProducts()
  },
  components: {
    toastComponent
  }
}
</script>
