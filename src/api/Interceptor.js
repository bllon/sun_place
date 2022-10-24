import axios from "axios";//原生的axios
import func from "../utils/func.js"
import store from "../store/index.js"
//用来拦截用的
// axios.defaults.headers["Content-Type"] = "application/json";
//创建一个单例
const http= axios.create({
  baseURL:process.env.BASE_URL,
  timeout:5000,//响应时间
  withCredentials:true,
  validateStatus: (status) => {
    return (status >= 200 && status < 300) || status  == 401; //默认处理机制
  },
  headers:{"Content-Type":"application/json"},
})
 
//拦截器  -请求拦截
http.interceptors.request.use(config=>{
  let token = func.getCookie('token')
  if (token) {
    config.headers['Authorization'] = token
  }
  if (config.method == "post") {
    config.headers['Content-Type'] = "application/json";
  }
  
  return config;
},err=>{
  return Promise.reject(err)
})

let token_refreshing = false;
let retryRequests = [];
 
//拦截器  -响应拦截
http.interceptors.response.use(res=>{
  if(res.status === 200){
    return Promise.resolve(res.data)
  }else{
    // console.log(res)
    if (res.status === 401) {
      if (!token_refreshing) {
        token_refreshing = true;
        //token失效过期
        let refresh_token = func.getRefreshToken()
        if (refresh_token && refresh_token['exp'] - Math.round(new Date().getTime()/1000 > 10)) {
          //使用refresh_token去刷新token

          let promise =  new Promise(resolve => {
            //失败的请求先放入队列
            retryRequests.push(() => {
              // console.log(res.config)
              resolve(http.request(res.config))
            })
          })
          refreshToken(refresh_token['token'])  //刷新token
          return promise
        } else {
          //token和refresh都不可用, 更新状态
          clearUserState()
          window.location = '/';
        }
      } else {
        return new Promise(resolve => {
          //失败的请求先放入队列
          retryRequests.push(() => {
            // console.log(res.config)
            resolve(http.request(res.config))
          })
        })
      }
    }
    // return Promise.reject(res)
  }
},err=>{
  if (err.code == 'ERR_NETWORK') {
    func.toast('连接服务器异常', 'danger')
  } else {
    func.toast('服务异常', 'danger')
  }
});

//清楚用户状态
function clearUserState() {
  store.commit('setLoginStatus', false);
  store.commit('setUserName', '');
  store.commit('setUserId', '');
  store.commit('setExpireTime', 0);
}

function refreshToken(token) {
  axios({
    method: 'get',
    url: process.env.BASE_URL + 'refresh_token',
    timeout:5000,//响应时间
    withCredentials:true,
    headers: {
      'Authorization':token
    }
  }).then(function(response) {
    if (response && response.data && response.data.code === 0) {
      //刷新token成功, 执行队列中的请求
      retryRequests.forEach(retry => retry())
      retryRequests = [];
    } else {
      clearUserState()
      window.location = '/';
    }
    token_refreshing = false;
  });
}
 
//整体导出
export default http;
 