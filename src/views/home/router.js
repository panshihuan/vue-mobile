
export default [
    {
      path: '/org:id',
      name: 'OrgPlanDetail',
      component: () => import('@/views/organization/plan/detail'),
      hidden: true,
      meta: {
        title: '工作计划详情'
      }
    }
  ]
  