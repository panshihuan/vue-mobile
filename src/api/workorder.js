import request from '@/utils/request'

// 任务单上传
export function uploadFile(data, url) {
  return request({
    url,
    method: 'post',
    data
  })
}

// 获取工单类型
export function getOrderType(data) {
  return request({
    url: '/task/taskType',
    method: 'post',
    data
  })
}

// 获取机构列表
export function getOrgList(data) {
  return request({
    url: '/neworg/orgList',
    method: 'post',
    data
  })
}

// 获取工单列表
export function getOrderList(data) {
  return request({
    url: '/task/getList',
    method: 'post',
    data
  })
}

// 获取普通工单详情
export function getTaskDetail(data) {
  return request({
    url: '/task/commonTask',
    method: 'post',
    data
  })
}

// 获取普通工单当日值日人
export function getDutyPerson(data) {
  return request({
    url: '/task/dutyPerson',
    method: 'post',
    data
  })
}

//  普通工单详情页的提交日志与修改详情
export function updateDetailComment(data) {
  return request({
    url: '/task/detailComment',
    method: 'post',
    data
  })
}

//  提交任务--普通工单
export function updateTaskSubmit(data) {
  return request({
    url: '/task/submit',
    method: 'post',
    data
  })
}

//  更新任务类型、产品类型、实施周期
export function updateTaskType(data) {
  return request({
    url: '/task/changeTaskType',
    method: 'post',
    data
  })
}

//  4.17 核查普通工单任务、通过或者不通过
export function updateTaskStar(data) {
  return request({
    url: '/task/confirmTask',
    method: 'post',
    data
  })
}

//  4.19 关注或者取消关注任务
export function updateTaskAttend(data) {
  return request({
    url: '/task/attendTask',
    method: 'post',
    data
  })
}

//  4.18取消普通工单任务
export function deleteTask(data) {
  return request({
    url: '/task/cancelTask',
    method: 'post',
    data
  })
}

// 订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单订单

// 4.21获取产品款式列表、属性
export function getProductConfig(data) {
  return request({
    url: '/newproduct/getProductConfig',
    method: 'post',
    data
  })
}

// 4.22提交产品到购物车
export function addToCart(data) {
  return request({
    url: '/newproduct/addToCart',
    method: 'post',
    data
  })
}

// 4.23提交订单工单
export function updateOrder(data) {
  return request({
    url: '/neworder/submit',
    method: 'post',
    data
  })
}

// 4.20获取订单下对应的产品详情
export function getOrderDetail(data) {
  return request({
    url: '/neworder/detail',
    method: 'post',
    data
  })
}

// 4.25获取订单工单审核流程列表
export function getOrderProcess(data) {
  return request({
    url: '/neworder/process',
    method: 'post',
    data
  })
}

// 4.25订单工单审核
export function updateApprove(data) {
  return request({
    url: '/neworder/approve',
    method: 'post',
    data
  })
}

// 4.21软件定制说明配置项
export function getSoftProductConfig(data) {
  return request({
    url: '/newproduct/getSoftProductConfig',
    method: 'post',
    data
  })
}
// 4.26获取机构默认审批人员列表
export function getOrgApprovePerson(data) {
  return request({
    url: '/newproduct/getOrgApprovePerson',
    method: 'post',
    data
  })
}
// 获取机构默认审批人员列表（候补的）
export function getOrderApprovePerson(data) {
  return request({
    url: '/newproduct/getOrderApprovePerson',
    method: 'post',
    data
  })
}

// 4.21软件定制说明配置项
export function getRoleList(data) {
  return request({
    url: '/permission/userRoles',
    method: 'post',
    data
  })
}

// 4.27 获取订单审核分享文字与连接
export function getApproveShare(data) {
  return request({
    url: '/neworder/getApproveShare',
    method: 'post',
    data
  })
}

// 4.28 取消订单工单
export function cancelOrder(data) {
  return request({
    url: '/task/cancelOrder',
    method: 'post',
    data
  })
}

// 4.29订单硬件报废转移--获取机构下的产品
export function getOrgOrderProduct(data) {
  return request({
    url: '/neworder/getOrgOrderProduct',
    method: 'post',
    data
  })
}
// 4.30 提交转移报废硬件申请
export function sumitReturn(data) {
  return request({
    url: '/neworder/sumitReturn',
    method: 'post',
    data
  })
}
// 4.31 我的订单中的设备管理，我的审核设备管理，我审核过的设备管理
export function orderReturnList(data) {
  return request({
    url: '/neworder/orderReturnList',
    method: 'post',
    data
  })
}
// 4.32 获取设备转移报废申请详情
export function orderReturnDetail(data) {
  return request({
    url: '/neworder/orderReturnDetail',
    method: 'post',
    data
  })
}
// 4.33 审批通过转移报销申请
export function approveOrderReturn(data) {
  return request({
    url: '/neworder/approveOrderReturn',
    method: 'post',
    data
  })
}
// 3.45 转移报废申请审批分享
export function getOrderReturnApproveShare(data) {
  return request({
    url: '/neworder/getOrderReturnApproveShare',
    method: 'post',
    data
  })
}
// 4.34 取消转移报废申请
export function cancelReturnOrder(data) {
  return request({
    url: '/neworder/cancelReturnOrder',
    method: 'post',
    data
  })
}
// 查看成本图片
export function getProductCost(data) {
  return request({
    url: '/Renew/productCost',
    method: 'post',
    data
  })
}
