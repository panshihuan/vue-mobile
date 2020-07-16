import request from '@/utils/request'

// 获取枚举数据（工单）
export function getEnum(data) {
  return request({
    url: '/enum/getList',
    method: 'post',
    data
  })
}

// 获取枚举数据（进销存）
export function getEnumSku(data) {
  return request({
    url: '/Storageproduct/enumData',
    method: 'post',
    data
  })
}

// 获取枚举数据（机构信息）
export function getEnumOrg(data) {
  return request({
    url: '/enum/getNewOrganizationList',
    method: 'post',
    data
  })
}

// 获取枚举数据（推广日志）
export function getEnumMarket(data) {
  return request({
    url: '/enum/getMarketLogList',
    method: 'post',
    data
  })
}

// 获取产品类型列表
export function getProductTypes(data) {
  return request({
    url: '/newproduct/productTypeList',
    method: 'post',
    data
  })
}

// 获取商品类型列表（进销存）
export function getProductSkuTypes(data) {
  return request({
    url: '/Storageproduct/getStorageProductTypeList',
    method: 'post',
    data
  })
}

// 获取模糊查询人员姓名
export function getPerson(data) {
  return request({
    url: '/task/getPerson',
    method: 'post',
    data
  })
}

// 业务需求--枚举接口
export function getEnumRenewList(data) {
  return request({
    url: '/enum/getRenewList',
    method: 'post',
    data
  })
}
