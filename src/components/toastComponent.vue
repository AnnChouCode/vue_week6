<template>
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div ref="toast" id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-body d-flex align-items-center">
            <i class="bi bi-info-circle me-2 text-success"></i>
            <p class="mb-0">購物車已更新</p>
        </div>
      </div>
    </div>
</template>

<script>
import cartStore from '@/stores/cartStore.js'
import { Toast } from 'bootstrap'
import { mapState } from 'pinia'

export default {
  data () {
    return {
      toastList: null
    }
  },
  mounted () {
    const toastElList = this.$refs.toast
    this.toastList = new Toast(toastElList, { delay: 1000 })
  },
  computed: {
    ...mapState(cartStore, ['showToast'])
  },
  watch: {
    showToast () {
      this.toastList.show()
    }
  }
}
</script>
