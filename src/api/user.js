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

export async function register(params) {
    return request({
        url:'user/register',
        method :'post',
        data: params
    })
}

export function userinfo() {
    return request({
        url:'user/info',
        method :'get',
    })
}