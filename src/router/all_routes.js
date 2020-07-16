// 动态添加的路由，后端数据返回
export const allRoutes = [
  {
    path: '/org',
    component: 'Layout',
    redirect: '/org/plan',
    alwaysShow: true,
    name: 'Org',
    id: '6',
    label: '机构管理',
    meta: {
      title: '机构管理',
      icon: 'org'
    },
    children: [
      {
        path: 'plan',
        component: 'organization/plan/list/index',
        name: 'OrgPlan',
        id: '6-2',
        label: '工作计划',
        meta: {
          title: '工作计划',
          haveCache: true
        }
      }
    ]
  }
]
  