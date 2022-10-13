//将拦截器整体导入
import request from '@/api/Interceptor.js'//导入已经写好的拦截器
 
// 封装所有的API接口
export async function article_put(params) {
    return request({
        url:'article/put',
        method :'post',
        data: params
    })
}

export async function article_info(params) {
    return request({
        url:'article/info/' + params,
        method :'get',
    })
}