import request from '@/utils/request'

// 日志列表
export function getContactlogapiList(data) {
  return request({
    url: '/Contactlogapi/getList',
    method: 'post',
    data
  })
}

// 提交日志
export function editContactlogapi(data) {
  return request({
    url: '/Contactlogapi/edit',
    method: 'post',
    data
  })
}

// 日志标签列表
export function getOrgtaglist(data) {
  return request({
    url: '/Contactlogapi/orgtaglist',
    method: 'post',
    data
  })
}

// 日志-机构联系人
export function getContactuserlist(data) {
  return request({
    url: '/Contactlogapi/contactuserlist',
    method: 'post',
    data
  })
}

// 日志-日志自意向产品
export function getProductlist(data) {
  return request({
    url: '/Contactlogapi/productlist',
    method: 'post',
    data
  })
}
// 日志-日志推荐产品
export function getReproductlist(data) {
  return request({
    url: '/Contactlogapi/reproductlist',
    method: 'post',
    data
  })
}
// 日志-提交日志
export function submitOrgLog(data) {
  return request({
    url: '/Contactlogapi/edit',
    method: 'post',
    data
  })
}
// 日志-日志关键人状态列表
export function getTaglist(data) {
  return request({
    url: '/Contactlogapi/taglist',
    method: 'post',
    data
  })
}

// 合同-合同列表
export function getOrderdataapiList(data) {
  return request({
    url: '/Orderdataapi/getList',
    method: 'post',
    data
  })
}
// 合同-合同详情
export function getOrderdataapiDetail(data) {
  return request({
    url: '/Orderdataapi/getOrder',
    method: 'post',
    data
  })
}
// 合同-开票列表
export function getInvoiceapiList(data) {
  return request({
    url: '/Invoiceapi/getList',
    method: 'post',
    data
  })
}
// 合同-开票发票头列表
export function getOrgHearder(data) {
  return request({
    url: '/Invoiceapi/getOrgHearder',
    method: 'post',
    data
  })
}
// 合同-合同-开票公司列表
export function getSealList(data) {
  return request({
    url: '/Invoiceapi/sealList',
    method: 'post',
    data
  })
}
// 合同-申请开票
export function editInvoiceapi(data) {
  return request({
    url: '/Invoiceapi/edit',
    method: 'post',
    data
  })
}




// 我的机构---机构列表
export function getOrganizationList(data = {}) {
  const params = process.env.NODE_ENV === 'development' ? { test: 'thh' } : {}
  return request({
    url: '/neworganization/organizationList',
    method: 'post',
    data: { ...data, ...params }
  })
}

// 我的机构---机构详情
export function getOrganizationDetail(data) {
  return request({
    url: '/neworganization/organizationDetail',
    method: 'post',
    data
  })
}
// 我的机构---添加机构
export function addOrganization(data) {
  return request({
    url: '/neworganization/addOrganization',
    method: 'post',
    data
  })
}

// 我的机构---添加机构标签
export function addTag(data) {
  return request({
    url: '/neworganization/addTag',
    method: 'post',
    data
  })
}
// 我的机构---上传有声附件
export function fileUpload(data) {
  return request({
    url: '/neworganization/fileUpload',
    method: 'post',
    data
  })
}
// 我的机构---新增联系人
export function addContact(data, urlParams) {
  let urlC = '/neworganization/addContact'
  if (urlParams) {
    urlC = `/neworganization/addContact?from=${urlParams}`
  }
  return request({
    url: urlC,
    method: 'post',
    data: { ...data, isNotFormData: true }
  })
}
// 我的机构---获取联系人
export function getContact(data) {
  return request({
    url: '/neworganization/getContact',
    method: 'post',
    data
  })
}



// 5.1 根据机构ID获取机构下的产品
export function getNeworderproducts(data) {
  return request({
    url: '/neworgproduct/getproducts',
    method: 'post',
    data
  })
}
// 5.2任务续期
export function setRenewal(data) {
  return request({
    url: '/neworgproduct/renewal',
    method: 'post',
    data
  })
}
// 查询计划日志
export function getWorkplanList(params) {
  return request({
    url: '/workplan/getlist',
    method: 'get',
    params
  })
}
// 保存计划日志
export function saveWorkplan(data) {
  return request({
    url: '/workplan/save',
    method: 'post',
    data
  })
}
// 获取自己的机构
export function getSelfOrgList(data) {
  return request({
    url: '/neworg/getSelfOrgList',
    method: 'post',
    data
  })
}


// 任务管理-数据枚举
export function getRenewTopList(params) {
  return request({
    url: '/enum/getRenewList',
    method: 'get',
    params
  })
}


// 任务管理 -人员筛选
export function getPersonSelect(data) {
  return request({
    url: '/marketlog/personSelect',
    method: 'post',
    data
  })
}
// 任务管理 - 列表数据
export function getRenewList(params) {
  return request({
    url: "/Renew/renewList",
    method: "get",
    params
  })
}

//任务管理 - 续费净得
export function setRenewProfit(data) {
  return request({
    url: "/Renew/setRenewProfit",
    method: 'post',
    data
  })
}
//任务管理 - 续费 - 隐藏合同
export function hiddenOrder(data) {
  return request({
    url: '/Renew/hiddenOrder',
    method: 'post',
    data
  })
}
//任务管理 - 续费 - 设置续费标签
export function setRenewTag(data) {
  return request({
    url: '/Renew/setRenewTag',
    method: 'post',
    data
  })
}


//【试用转正】-列表
export function getHardwareList(params) {
  return request({
    url: '/hardware/getList',
    method: 'get',
    params
  })
}
//【试用转正】-新增联络日志
export function saveHardwareLorg(data) {
  return request({
    url: '/hardware/save',
    method: 'post',
    data
  })
}
//【试用转正】-枚举
export function geEnumtHardWareList(data) {
  return request({
    url: '/enum/getHardWareList',
    method: 'post',
    data
  })
}

//【产品销售】列表
export function getProductSaleList(data) {
  return request({
    url: '/productsale/productSaleList',
    method: 'post',
    data
  })
}
//【产品销售】枚举接口
export function getProductSaleEnum(data) {
  return request({
    url: '/enum/productSaleEnum',
    method: 'post',
    data
  })
}
//【产品销售】修改预计回款时间
export function setExpectTime(data) {
  return request({
    url: '/productsale/setExpectTime',
    method: 'post',
    data
  })
}

//【项目管理】项目列表
export function getExpectedProjectList(data) {
  return request({
    url: '/ExpectedProject/getList',
    method: 'post',
    data
  })
}
//【项目管理】枚举接口
export function getEnumExpectedProject(data) {
  return request({
    url: '/enum/ExpectedProject',
    method: 'post',
    data
  })
}
//【项目管理】新增与编辑项目管理
export function setExpectedProject(data) {
  return request({
    url: '/ExpectedProject/opProject',
    method: 'post',
    data
  })
}
//【项目管理】撤下与恢复
export function setExpectedOpStatus(data) {
  return request({
    url: '/ExpectedProject/opStatus',
    method: 'post',
    data
  })
}
//【项目管理】新增项目可选机构标签
export function getSelectOrgTagList(data) {
  return request({
    url: '/expectedProject/selectOrgTag',
    method: 'post',
    data
  })
}

//【任务总览】任务总览
export function getSaleTaskOverview(params) {
  return request({
    url: '/Datareport/getSaleTaskOverview',
    method: 'get',
    params
  })
}
//【任务总览】主动刷新数据接口
export function updateSaleTaskOverview(params) {
  return request({
    url: '/Datareport/updateSaleTaskOverview',
    method: 'get',
    params
  })
}

