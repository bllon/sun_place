<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  beforeMount() {
    //获取全局登录状态，并设置
    const token = this.func.getCookie('token'); //有登陆态
    if (token != "") {
      this.$store.commit('setLoginStatus', true);
      this.$store.commit('setUserName', this.func.getUserName());
      this.$store.commit('setUserId', this.func.getUserId());
    }

    //获取全局theme
    const theme = this.func.initTheme();
    this.$store.commit('setTheme', theme);
  },
  updated() {
    // window.scrollTo(0, 0);
  }
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