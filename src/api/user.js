import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function login2(params) {
  return request({
    url: '/login/login2',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

// 获取用户信息（包括前端路由）
export function getInfo(params) {
  return request({
    url: '/user/getInfo',
    method: 'get',
    params
  })
}

// 顶部通知消息
export function getNotify(data) {
  return request({
    url: '/topnotice/notify',
    method: 'post',
    data
  })
}
