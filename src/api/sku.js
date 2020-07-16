import request from '@/utils/request'

// 商品总表-获取商品列表
export function getStorageProductList(data) {
  return request({
    url: '/Storageproduct/getStorageProductList',
    method: 'post',
    data
  })
}

// 商品总表-获取商品
export function getStorageProduct(data) {
  return request({
    url: '/Storageproduct/getStorageProduct',
    method: 'post',
    data
  })
}

// 商品总表-新增商品
export function addStorageProduct(data) {
  return request({
    url: '/Storageproduct/addStorageProduct',
    method: 'post',
    data
  })
}

// 商品总表-编辑商品
export function editStorageProduct(data) {
  return request({
    url: '/Storageproduct/editStorageProduct',
    method: 'post',
    data
  })
}

// 商品总表-商品流转记录
export function productLog(data) {
  return request({
    url: '/Storageproduct/productLog',
    method: 'post',
    data
  })
}

// 商品总表-穷举获取商品类型下的配置信息
export function getStorageProductTypeConfList(data) {
  return request({
    url: '/Storageproduct/getStorageProductTypeConfList',
    method: 'post',
    data
  })
}

// 商品配置

// 商品配置-获取商品类型配置列表
export function getStorageProductTypeList(data) {
  return request({
    url: '/Storageproduct/getStorageProductTypeList',
    method: 'post',
    data
  })
}
// 商品配置-添加商品类型配置
export function addStorageProductType(data) {
  return request({
    url: '/Storageproduct/addStorageProductType',
    method: 'post',
    data
  })
}
// 商品配置-修改商品类型配置
export function editStorageProductType(data) {
  return request({
    url: '/Storageproduct/editStorageProductType',
    method: 'post',
    data
  })
}
// 商品配置-厂商仓库走账公司配置列表
export function getStorageProductAttrList(data) {
  return request({
    url: '/Storageproduct/getStorageProductAttrList',
    method: 'post',
    data
  })
}
// 商品配置-添加厂商仓库走账公司配置
export function addStorageProductAttr(data) {
  return request({
    url: '/Storageproduct/addStorageProductAttr',
    method: 'post',
    data
  })
}
// 商品配置-修改厂商仓库走账公司配置
export function editStorageProductAttr(data) {
  return request({
    url: '/Storageproduct/editStorageProductAttr',
    method: 'post',
    data
  })
}

// 库存明细

// 库存总表-库存明细表
export function getStorageList(data) {
  return request({
    url: '/Storageproduct/getStorageList',
    method: 'post',
    data
  })
}
// 库存总表-采购入库
export function addStorage(data) {
  return request({
    url: '/Storageproduct/addStorage',
    method: 'post',
    data
  })
}
// 订单出库-出库单列表
export function getOutstorage(data) {
  return request({
    url: '/neworder/outstorage',
    method: 'post',
    data
  })
}
// 订单出库-增加库存商品的列表
export function addOutStorageList(data) {
  return request({
    url: '/neworder/addOutStorageList',
    method: 'post',
    data
  })
}
// 订单出库-操作（增加或者移除）出库单库存商品
export function opOutStorageProduct(data) {
  return request({
    url: '/neworder/opOutStorageProduct',
    method: 'post',
    data
  })
}

// 库存明细-修改库存明细
export function editStorageSku(data) {
  return request({
    url: '/Storageproduct/editStorage',
    method: 'post',
    data
  })
}
