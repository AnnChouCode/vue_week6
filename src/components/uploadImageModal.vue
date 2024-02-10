<template>
  <div
    ref="uploadImageModal"
    class="modal fade"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">上傳圖片</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          上傳圖片...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark">送出</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data () {
    return {
      modal: null
    }
  },
  methods: {
    openModal () {
      this.modal.show()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.uploadImageModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
