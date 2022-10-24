<template>
  <div
    ref="toast"
    class="toast align-items-center border-0"
    :class="'bg-' + text_style"
    role="alert" 
    aria-live="assertive"
    aria-atomic="true"
    :data-bs-delay="duration"
    style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10000;"
  >
    <!-- <div class="toast-header">
      <img
        src="/static/images/logo/04.svg"
        class="rounded me-2"
        style="height: 36px;display: block;width: auto;"
      />
      <strong class="me-auto">{{ title }}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div> -->
    <div class="d-flex">
      <div class="toast-body" style="color:#fff;letter-spacing:1px;font-weight:500;">
        {{ message }}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "提示"
    },
    message: {
      type: String,
      default: ""
    },
    text_style: {
      type: String,
      default: "info" // info, warning, success, primary, danger...
    },
    auto_hide: {
      type: Boolean, //data-bs-autohide
      default: true
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {};
  },
  methods: {
    show() {
      new bootstrap.Toast(this.$refs.toast).show();

      //自动销毁
      let timer = setTimeout(() => {
        this.remove();
        clearTimeout(timer);
      }, this.duration);
    }
  }
};
</script>
