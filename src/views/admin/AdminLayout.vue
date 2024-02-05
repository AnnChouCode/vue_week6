<template>
    <div class="d-flex">
        <!-- 導覽列 -->
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style="width: 280px;">
        <router-link to="/admin/dashboard" class="fs-4 mb-3 mb-md-0 me-md-auto text-white">Dashboard</router-link>

        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li>
                <router-link to="/admin/dashboard" class="py-2 nav-link text-white">Home</router-link>
            </li>
            <li>
                <router-link to="/admin/products" class="py-2 nav-link text-white">產品列表</router-link>
            </li>
            <li>
                <router-link to="/admin/orders" class="py-2 nav-link text-white">訂單列表</router-link>
            </li>
        </ul>
        <hr>
        <div class="d-flex flex-column">
            <router-link to="/home" class="py-2 text-white">回前台</router-link>
        <a href="#" @click.prevent="logout" clsss="py-2" style="color:white;">登出</a>
        </div>
     </div>

     <!-- 顯示區 -->
     <router-view class="p-3"></router-view>
    </div>
</template>

<script>
export default {
  methods: {
    checkLogin () {
      const { VITE_API } = import.meta.env
      const url = `${VITE_API}/api/user/check`

      // 確認是否登入
      this.axios.post(url)
        .then(function (res) {
          console.log('歡迎')
        })
        .catch(err => {
          this.$swal.fire(
            {
              icon: 'error',
              text: err.response.data.message
            }
          )
            .then(() => this.$router.push('/home'))
        })
    },
    logout () {
      document.cookie = 'user=;expires=;'
      this.$router.push('/home')
    }
  },
  mounted () {
    // 取得 cookie
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user='))
      ?.split('=')[1]

    this.axios.defaults.headers.common.Authorization = token

    // 確認是否登入
    this.checkLogin()
  }
}

</script>
