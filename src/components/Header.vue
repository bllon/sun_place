<template>
  <header class="navbar-light fixed-top header-static bg-mode">
    <!-- Logo Nav START -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo START -->
        <a class="navbar-brand" href="/">
          <img
            class="light-mode-item navbar-brand-item"
            src="/static/images/logo/04.svg"
            alt="logo"
          />
          <img
            class="dark-mode-item navbar-brand-item"
            src="/static/images/logo/04.svg"
            alt="logo"
          />
        </a>
        <!-- Logo END -->

        <!-- Responsive navbar toggler -->
        <button
          class="navbar-toggler ms-auto icon-md btn btn-light p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Main navbar START -->
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav navbar-nav-scroll ml-auto">
            <!-- Nav item 1 Demos -->
            <li class="nav-item">
              <router-link class="nav-link" to="/">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/resume">简历助手</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/assistant">AI助手</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/article/new">发布文章</router-link>
            </li>
          </ul>
          <transition
            :duration="{ enter: 500, leave: 500 }"
            enter-active-class="active"
            leave-active-class="nav-link"
          >
            <router-view />
          </transition>
        </div>
        <!-- Main navbar END -->

        <!-- Nav right START -->
        <ul class="nav flex-nowrap align-items-center ms-sm-3 list-unstyled">
          
          <li class="nav-item ms-2 dropdown nav-search">
            <router-link class="nav-link btn icon-md p-0"
              to="/"
              id="searchDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="bi bi-search fs-5"> </i>
            </router-link>
            <div
              class="dropdown-menu dropdown-animation dropdown-menu-start p-3 small"
              aria-labelledby="searchDropdown"
            >
              <!-- Profile info -->
              <div class="nav flex-nowrap align-items-center">
                <div class="nav-item w-100">
                  <form class="rounded position-relative">
                    <input
                      class="form-control ps-5 bg-light"
                      type="search"
                      placeholder="搜索..."
                      aria-label="Search"
                    />
                    <button
                      class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                      type="submit"
                    >
                      <i class="bi bi-search fs-5"> </i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="nav-item ms-2" v-if="user_name">
            <router-link class="nav-link icon-md btn btn-light p-0" to="/"><i class="bi bi-chat-left-text-fill fs-6"> </i></router-link>
          </li>
          <li class="nav-item ms-2" v-if="user_name">
            <a class="nav-link icon-md btn btn-light p-0" @click="tiaoshi()"><i class="bi bi-gear-fill fs-6"> </i></a>
          </li> -->
          <li class="nav-item dropdown ms-2" v-if="user">
            <router-link class="nav-link icon-md btn btn-light p-0"
              to="/"
              id="notifDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside">
              <!-- <span class="badge-notif animation-blink"></span> -->
              <i class="bi bi-bell-fill fs-6"> </i></router-link>
            <div
              class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0"
              aria-labelledby="notifDropdown"
            >
              <!-- <Notify></Notify> -->
            </div>
          </li>
          <!-- Notification dropdown END -->

          <li class="nav-item ms-2 dropdown" v-if="this.$store.state.is_login && user">
            <router-link class="nav-link btn icon-md p-0"
              :to="'/user/' + this.user.user_id"
              id="profileDropdown"
              role="button"
              data-bs-auto-close="outside"
              data-bs-display="static"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                class="avatar-img rounded-2"
                :src="user.avatar"
                alt=""
              />
            </router-link>
            <ul
              class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
              aria-labelledby="profileDropdown"
            >
              <!-- Profile info -->
              <li class="px-3">
                <div class="d-flex align-items-center position-relative">
                  <!-- Avatar -->
                  <div class="avatar avatar-xs me-3">
                    <img
                      class="avatar-img rounded-circle"
                      :src="user.avatar"
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <router-link class="h6 stretched-link" :to="'/user/' + this.user.user_id">{{ user.user_name }}</router-link>
                    <p class="small m-0">{{user.occupation}}</p>
                  </div>
                </div>
                  <router-link class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center" :to="'/user/' + this.user.user_id">个人信息</router-link>
              </li>
              <!-- Links -->
              <li>
                <router-link class="dropdown-item" to="/setting"><i class="bi bi-gear fa-fw me-2"></i>设置</router-link>
              </li>
              <!-- <li>
                <router-link class="dropdown-item" to="/"><i class="fa-fw bi bi-life-preserver me-2"></i>支持</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/"><i class="fa-fw bi bi-card-text me-2"></i>文档</router-link>
              </li> -->
              <li class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item btn bg-danger-soft-hover" @click="logout"><i class="bi bi-power fa-fw me-2"></i>退出</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <!-- Dark mode switch START -->
              <li>
                <div
                  class="modeswitch-wrap"
                  :data-theme="theme"
                  @click="changeTheme"
                >
                  <div class="modeswitch-item">
                    <div class="modeswitch-icon"></div>
                  </div>
                  <span>夜间模式</span>
                </div>
              </li>
              <!-- Dark mode switch END -->
            </ul>
          </li>
          <!-- Profile START -->

          <li class="nav-item ms-2" v-else>
            <button
              class="btn btn-sm py-1 btn-outline-primary me-2"
              @click="showLogin"
            >
              登录
            </button>
            <button
              class="btn btn-sm py-1 btn-outline-primary me-2"
              @click="showRegister"
            >
              注册
            </button>
          </li>
        </ul>
        <!-- Nav right END -->
      </div>
    </nav>
    <!-- Logo Nav END -->
  </header>
</template>

<script>
import Notify from "@/components/User/Notify.vue";
import { logout } from "@/api/user.js";
export default {
  name: "HelloWorld",
  components: { Notify },
  data() {
    return {
      user: {},
      theme: this.$store.state.theme,
    };
  },
  methods: {
    showLogin() {
      this.$create('login').show()
    },
    showRegister() {
      this.$create('register').show()
    },
    changeTheme() {
      this.theme = this.func.changeTheme();
    },
    logout() {
      logout().then((res) => {
        if (res && res.code == 0) {
          this.$store.commit('setLoginStatus', false);
          this.$store.commit('setUser', {});
          localStorage.removeItem('user');
          this.func.delCookie('token');
          this.func.delCookie('refresh_token');

          localStorage.removeItem('token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('expire_time');
          localStorage.removeItem('refresh_expire_time');

          window.location = '/';
        }
      })  
    },
  },
  mounted() {
    //获取用户信息
    let timer = setInterval(() => {
      if (this.$store.getters.user.user_id) {
        this.user = this.$store.getters.user
        clearInterval(timer)
        timer=null
      }
    },100)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav a.router-link-exact-active {
  color: #0f6fec;
}
</style>
