<template>
  <div id="app">
    <router-view />
    <div v-if="is_show">
      <Login></Login>
      <Register></Register>
    </div>
  </div>
</template>

<script>
import Login from "@/components/User/Login"
import Register from "@/components/User/Register"
export default {
  name: "App",
  components: { Login, Register },
  data() {
    return {
      is_show:false
    };
  },
  beforeMount() {
    this.func.initTheme();
    setTimeout(() => {
      //防止刷新页面闪出
      this.is_show = true;
    }, 100)
  },
  mounted() {
    
  },
};
</script>

<style>
/* @import url("./assets/vendor/font-awesome/css/all.min.css");
@import url("./assets/vendor/bootstrap-icons/bootstrap-icons.css");
@import url("./assets/vendor/OverlayScrollbars-master/css/OverlayScrollbars.min.css");
@import url("./assets/vendor/tiny-slider/dist/tiny-slider.css");
@import url("./assets/vendor/choices/public/assets/styles/choices.min.css");
@import url("./assets/vendor/glightbox-master/dist/css/glightbox.min.css");
@import url("./assets/vendor/dropzone/dist/dropzone.css");
@import url("./assets/vendor/flatpickr/dist/flatpickr.css");
@import url("./assets/vendor/plyr/plyr.css"); */
</style>