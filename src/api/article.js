//将拦截器整体导入
import request from '@/api/Interceptor.js'//导入已经写好的拦截器
import { sync } from 'rimraf'
 
// 封装所有的API接口
export function article_put(params) {
    return request({
        url:'article/put',
        method :'post',
        headers:{"Content-Type":"multipart/form-data"},
        data: params
    })
}

export function article_edit(params) {
    return request({
        url:'article/edit',
        method :'post',
        headers:{"Content-Type":"multipart/form-data"},
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

export function article_recent_list(params) {
    return request({
        url:'article/list/recent',
        method :'post',
        data: params,
    })
}

export function article_like_save(params) {
    return request({
        url:'article/like/save',
        method :'post',
        data: params,
    })
}

export function article_like_cancel(params) {
    return request({
        url:'article/like/cancel',
        method :'post',
        data: params,
    })
}

export function article_add_comment(params) {
    return request({
        url:'article/comment/add',
        method :'post',
        data: params,
    })
}

export function article_comment_list(params) {
    return request({
        url:'article/comment/list',
        method :'post',
        data: params,
    })
}

export function comment_like_cancel(params) {
    return request({
        url:'comment/like/cancel',
        method :'post',
        data: params,
    })
}

export function comment_like_save(params) {
    return request({
        url:'comment/like/save',
        method :'post',
        data: params,
    })
}

export function article_share(params) {
    return request({
        url:'article/share',
        method :'get',
        params: params,
    })
}