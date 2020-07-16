import request from '@/utils/request'

// 硬件数据-获取硬件产品列表
export function getProductdataapi(data) {
  return request({
    url: '/Productdataapi/getDataStatProducts',
    method: 'post',
    data
  })
}

// 考核数据-订单统计-参数配置
export function getStatDimension(data) {
  return request({
    url: '/orderdataapi/statDimension',
    method: 'post',
    data
  })
}

// 考核数据-大区数据
export function getDataByArea(data) {
  return request({
    url: '/orderdataapi/getOrderAreaData',
    method: 'post',
    data
  })
}
// 考核数据-走访人员数据
export function getOrderVisitData(data) {
  return request({
    url: '/orderdataapi/getOrderVisitData',
    method: 'post',
    data
  })
}
// 考核数据-销售助理数据
export function getOrderAssistantData(data) {
  return request({
    url: '/orderdataapi/getOrderAssistantData',
    method: 'post',
    data
  })
}
// 考核数据-电销人员数据
export function getOrderItuData(data) {
  return request({
    url: '/orderdataapi/getOrderItuData',
    method: 'post',
    data
  })
}

// 硬件数据-产品销量
export function getDataByOrder(data) {
  return request({
    url: '/Productdataapi/getDataByOrder',
    method: 'post',
    data
  })
}
// 硬件数据-按省份统计
export function getDataByProvince(data) {
  return request({
    url: '/Productdataapi/getDataByProvince',
    method: 'post',
    data
  })
}
// 硬件数据-大区数据
export function getDataByAreaData(data) {
  return request({
    url: '/Productdataapi/getDataByArea',
    method: 'post',
    data
  })
}
// 订单数据-首页概览-本年度数据
export function getOrderData(data) {
  return request({
    url: '/orderdataapi/getOrderData',
    method: 'post',
    data
  })
}
// 硬件数据-首页数据-本年度概览
export function getDataByOrderall(data) {
  return request({
    url: '/Productdataapi/getDataByOrderall',
    method: 'post',
    data
  })
}
