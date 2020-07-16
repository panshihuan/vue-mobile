import request from '@/utils/request'
import requestCustom from '@/utils/requestCustom'

// 推广部需求--- 微运营列表
export function getReportMiniOpList(data) {
  return request({
    url: '/marketlog/miniOpList',
    method: 'post',
    data
  })
}
// 推广部需求--- 微运营详情
export function getMiniDetail(data) {
  return request({
    url: '/marketlog/getMiniDetail',
    method: 'post',
    data
  })
}
// 推广部需求--- 代运营详情
export function getReDetail(data) {
  return request({
    url: '/marketlog/getReDetail',
    method: 'post',
    data
  })
}
// 推广部需求--- 活动数据详情
export function getActivityDetail(data) {
  return request({
    url: '/marketlog/getActivityDetail',
    method: 'post',
    data
  })
}

// 推广部需求---微运营添加
export function addMiniOpLog(data) {
  return request({
    url: '/marketlog/addMiniOpLog',
    method: 'post',
    data
  })
}

// 推广部需求---活动搜索接口
export function searchActivitylog(data) {
  return request({
    url: '/marketlog/searchActivitylog',
    method: 'post',
    data
  })
}

// 推广部需求---相关人员搜索下拉
export function personSelect(data) {
  return request({
    url: '/marketlog/personSelect',
    method: 'post',
    data
  })
}

// 推广部需求---微运营列表任务负责人下拉
export function managerSelect(data) {
  return request({
    url: '/marketlog/managerSelect',
    method: 'post',
    data
  })
}

// 推广部需求---代运营列表
export function reOpList(data) {
  return request({
    url: '/marketlog/reOpList',
    method: 'post',
    data
  })
}
// 推广部需求---代运营添加
export function addReOpLog(data) {
  return request({
    url: '/marketlog/addReOpLog',
    method: 'post',
    data
  })
}
// 推广部活动---活动日志列表
export function activityList(data) {
  return request({
    url: '/marketlog/activityList',
    method: 'post',
    data
  })
}
// 推广部需求---活动日志添加
export function addActivityLog(data) {
  return request({
    url: '/marketlog/addActivityLog',
    method: 'post',
    data
  })
}
// 推广部需求---搜索公众号
export function searchAccount(data) {
  return request({
    url: '/marketlog/searchAccount',
    method: 'post',
    data
  })
}
// 推广部需求---表单缓存
export function getOrgAttr(data) {
  return request({
    url: '/marketlog/getOrgAttr',
    method: 'post',
    data
  })
}


// 电销---数据总览
export function telemarketingOverview(data) {
  return request({
    url: '/Datareport/telemarketingOverview',
    method: 'post',
    data
  })
}
// 电销---项目总览
export function getDataByOrderTrade(data) {
  return request({
    url: '/Productdataapi/getDataByOrderTrade',
    method: 'post',
    data
  })
}
// 电销---项目明细
export function getAllOrgs(data) {
  return request({
    url: '/orderdataapi/getAllOrgs',
    method: 'post',
    data
  })
}
// 电销---行业列表
export function getTradeMemberTrade(data) {
  return request({
    url: '/orderdataapi/getTradeMemberTrade',
    method: 'post',
    data
  })
}
// 电销---获取大区列表
export function getAreaList(data) {
  return request({
    url: '/orderdataapi/getAreaList',
    method: 'post',
    data
  })
}
// 电销---获取省份列表
export function getProvinceList(data) {
  return request({
    url: '/orderdataapi/getProvinceList',
    method: 'post',
    data
  })
}
// 电销---获取电销人员列表
export function getItuMemberList(data) {
  return request({
    url: '/orderdataapi/getItuMemberList',
    method: 'post',
    data
  })
}
// 电销---获取人员明细
export function telemarketingMemberDetails(data) {
  return request({
    url: '/Datareport/telemarketingMemberDetails',
    method: 'post',
    data
  })
}
// 电销---获取筛选的产品列表
export function getProducts(data) {
  return request({
    url: '/productdataapi/getProducts',
    method: 'post',
    data
  })
}
// 推广日志--审核人填写历史记录
export function getReviewer(data) {
  return request({
    url: '/marketlog/getReviewer',
    method: 'post',
    data
  })
}
// 活动-记忆联系人和联系方式
export function getDockInfo(data) {
  return request({
    url: '/marketlog/getDockInfo',
    method: 'post',
    data
  })
}
// 删除日常微运营
export function delminiOp(data) {
  return request({
    url: '/marketlog/delMiniOp',
    method: 'post',
    data
  })
}
// 删除待运营
export function delOp(data) {
  return request({
    url: '/marketlog/delOp',
    method: 'post',
    data
  })
}
// 删除活动数据
export function delActivity(data) {
  return request({
    url: '/marketlog/delActivity',
    method: 'post',
    data
  })




}

// 获取活动列表
export function getActivityList(data) {
  return requestCustom('https://stats.bookan.com.cn')({
    url: '/opbackstage/opapi/getActivityList',
    method: 'post',
    data
  })
}
// 【CRM】获取活动详情
export function getActivityDetailOpapi(data) {
  return requestCustom('https://stats.bookan.com.cn')({
    url: '/opbackstage/opapi/getActivityDetail',
    method: 'post',
    data
  })
}
// 【CRM】获取活动详情
export function getOrgItu(data) {
  return request({
    url: '/marketlog/getOrgItu',
    method: 'post',
    data
  })
}