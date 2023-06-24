//将拦截器整体导入
import request from '@/api/Interceptor.js'//导入已经写好的拦截器
 
// 封装所有的API接口
export function ping() {
    return request({
        url:'api/ping',
        method :'get',
    })
}

export function login(params) {
    return request({
        url:'user/login',
        method :'post',
        data: params
    })
}

export function logout() {
    return request({
        url:'user/logout',
        method :'get',
    })
}

export function register(params) {
    return request({
        url:'user/register',
        method :'post',
        data: params
    })
}

export function refresh_token() {
    return request({
        url:'refresh_token',
        method :'get',
    })
}

export function userinfo(params) {
    params = parseInt(params)
    return request({
        url:'user/' + params,
        method :'get',
    })
}

export function update_user(params) {
    return request({
        url:'user/update',
        method :'post',
        headers:{"Content-Type":"multipart/form-data"},
        data: params
    })
}