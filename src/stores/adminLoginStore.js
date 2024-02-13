import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'

export const useAdminLoginStore = defineStore('adminLogin', {
  actions: {
    // 確認登入
    checkLogin () {
      console.log('loginStore 的 checkLogin 啟動')
      const { VITE_API } = import.meta.env
      const url = `${VITE_API}/api/user/check`

      // 取得 cookie
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('user='))
        ?.split('=')[1]

      axios.defaults.headers.common.Authorization = token
      console.log('adminLogin token get')

      // 確認是否登入，返回 promise
      return axios
        .post(url)
        .then(function (res) {
          return res // 傳回資料
        })
        .catch((err) => {
          swal
            .fire({
              icon: 'error',
              text: err.response.data.message
            })
            .then((result) => {
              this.$router.push('/home')
            })
        })
    }

    // 登入
    // logout () {
    //   document.cookie = 'user=;expires=;'
    //   console.log(this)
    //   this.router.push('/home')
    // }
  }
})
