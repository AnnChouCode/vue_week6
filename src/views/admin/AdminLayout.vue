<template>
  <!-- 導覽列 mobile -->
  <nav class="d-flex d-lg-none flex-column sticky-top bg-dark p-2">
    <div class="d-flex justify-content-between">
      <router-link to="/admin/dashboard" class="fs-4 text-white"
        >Dessert Time</router-link
      >

      <button
        type="button"
        class="btn border border-white"
        data-bs-toggle="collapse"
        data-bs-target="#collapseAdminMenu"
        aria-expanded="false"
        aria-controls="collapseAdminMenu"
      >
        <i class="bi bi-list text-white"></i>
      </button>
    </div>
    <!-- 選單 -->
    <div class="collapse" id="collapseAdminMenu">
      <ul class="navbar-nav text-center gap-3 pt-3">
        <li>
          <router-link
            to="/admin/dashboard"
            class="py-2 theme-dark-navlink text-white"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/admin/products"
            class="py-2 theme-dark-navlink text-white"
            >產品列表</router-link
          >
        </li>
        <li>
          <router-link
            to="/admin/orders"
            class="py-2 theme-dark-navlink text-white"
            >訂單列表</router-link
          >
        </li>
      </ul>
      <hr style="border: 1px solid white" />
      <div class="navbar-nav text-center gap-3">
        <router-link to="/home" class="py-2 text-white theme-dark-navlink"
          >回前台</router-link
        >
        <a
          href="#"
          @click.prevent="logout"
          class="py-2 text-white theme-dark-navlink"
          >登出</a
        >
      </div>
    </div>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <!-- 導覽列-web -->
      <div
        class="position-sticky top-0 d-none d-lg-flex flex-column col-lg-2 p-3 text-white bg-dark vh-100"
      >
        <router-link
          to="/admin/dashboard"
          class="fs-4 mb-3 mb-md-0 me-md-auto text-white"
          >Dessert Time</router-link
        >

        <hr />
        <ul class="nav flex-column mb-auto gap-3">
          <li>
            <router-link
              to="/admin/dashboard"
              class="py-2 theme-dark-navlink text-white"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/products"
              class="py-2 theme-dark-navlink text-white"
              >產品列表</router-link
            >
          </li>
          <li>
            <router-link
              to="/admin/orders"
              class="py-2 theme-dark-navlink text-white"
              >訂單列表</router-link
            >
          </li>
        </ul>
        <hr />
        <div class="d-flex flex-column">
          <router-link to="/home" class="py-2 theme-dark-navlink text-white"
            >回前台</router-link
          >
          <a
            href="#"
            @click.prevent="logout"
            class="py-2 theme-dark-navlink text-white"
            >登出</a
          >
        </div>
      </div>

      <!-- 顯示區 -->
      <div class="col col-lg-10 p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminLoginStore } from '@/stores/adminLoginStore.js'
import { mapStores } from 'pinia'
const adminLoginStore = useAdminLoginStore()

export default {
  methods: {
    logout () {
      adminLoginStore.logout()
    }
  },
  computed: {
    ...mapStores(useAdminLoginStore)
  }
}
</script>
