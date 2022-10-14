//将拦截器整体导入
import request from '@/api/Interceptor.js'//导入已经写好的拦截器
 
// 封装所有的API接口
export function article_put(params) {
    return request({
        url:'article/put',
        method :'post',
        data: params
    })
}

export function article_info(params) {
    return request({
        url:'article/info/' + params,
        method :'get',
    })
}

export function article_list(params) {
    return request({
        url:'article/list',
        method :'post',
        data: params,
    })
}