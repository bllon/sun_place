import axios from "axios";//原生的axios
import func from "../utils/func.js"
//用来拦截用的
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
//创建一个单例
const http= axios.create({
  baseURL:process.env.BASE_URL,
  timeout:5000,//响应时间
  withCredentials:true,
  // validateStatus: (status) => {
  //   return (status >= 200 && status < 300) || status  == 401; //默认处理机制
  // }
  // headers:{"Content-Type":"application/json;charset=utf-8"},
})
 
//拦截器  -请求拦截
http.interceptors.request.use(config=>{
  // console.log(config);
  //部分接口需要token
  let token = func.getCookie('token');
  // console.log(token);
  if(token){
    // config.headers.token=token;
    config.headers ={
      'Authorization':token
    }
  }
  return config;
},err=>{
  return Promise.reject(err)
})
 
//拦截器  -响应拦截
http.interceptors.response.use(res=>{
  if(res.status === 200){
    return Promise.resolve(res.data)
    //这里读者们可以根据服务器返回的数据去自行修改
  }else{
    return Promise.reject(res.data)
  }
},err=>{
  console.log("响应拦截")
  console.log(err);
  console.log(err.stauts);
  console.log(err.code);
  console.log(err.response);
  // return Promise.reject(err)
});
 
//整体导出
export default http;
 