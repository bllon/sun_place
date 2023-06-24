<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import { userinfo } from "@/api/user.js";
export default {
  name: "App",
  data() {
    return {
    };
  },
  created() {
    //获取全局登录状态，并设置
    const token = this.func.getCookie('token');
    if (token != "") {
       //有登陆态
      this.$store.commit('setLoginStatus', true);

      //获取用户信息
      let user = localStorage.getItem("user")
      if (user) {
        this.$store.commit('setUser', JSON.parse(user));
      } else {
        //请求获取用户信息
        let user_id = this.func.getUserId();
        userinfo(user_id).then(res=>{
          if (res && res.code == 0) {
            this.$store.commit('setUser', JSON.parse(JSON.stringify(res.data)));
            localStorage.setItem('user', JSON.stringify(res.data));
          }
        })
      }
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