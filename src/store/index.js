import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state存放状态,
  state: {
    is_login: '',
    user_id: '',
    user_name: '',
    theme: 'light',
  },
  //getter为state的计算属性
  getters: {
    loginStatus: (state) => {
      return state.is_login
    },
    userId: (state) => {
      return state.user_id
    },
    userName: (state) => {
      return state.user_name
    },
    theme: (state) => {
      return state.theme
    }
  },
  //mutations可更改状态的逻辑，同步操作
  mutations: {
    setLoginStatus: (state, status) => {
      state.is_login = status
    },
    setUserName: (state, user_name) => {
      state.user_name = user_name
    },
    setUserId: (state, user_id) => {
      state.user_id = user_id
    },
    setExpireTime: (state, expire_time) => {
      state.expire_time = expire_time
    },
    setTheme: (state, theme) => {
      state.theme = theme
    }
  },
})