import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state存放状态,
  state: {
    is_login: '',
    user: {},
    theme: 'light',
  },
  //getter为state的计算属性
  getters: {
    loginStatus: (state) => {
      return state.is_login
    },
    user: (state) => {
      return state.user
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
    setUser: (state, user) => {
      state.user = user
      if (user == '' || user == {} || user == null) {
        state.user = {}
        localStorage.removeItem('user');
      }
    },
    setTheme: (state, theme) => {
      state.theme = theme
    },
  },
})