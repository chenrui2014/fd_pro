const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '整体监控',
    path: '/dashboard/dashboard',
    icon: 'chart-pie',
  },
  {
    name: '设备监控',
    path: '/deviceMonitor',
    icon: 'eye',
  },
  {
    name: '网关监控',
    path: '/gatewayMonitor',
    icon: 'chart-bar',
  },
  {
    name: '结果&缺省',
    path: '/',
    icon: 'warning',
    children: [
      {
        name: '成功页面',
        path: '/feedback/success',
      },
      {
        name: '失败页面',
        path: '/feedback/fail',
      },
      {
        name: '403',
        path: '/feedback/403',
      },
      {
        name: '404',
        path: '/feedback/404',
      },
      {
        name: '500',
        path: '/feedback/500',
      },
    ],
  },
  {
    name: '设置页面',
    path: '/',
    icon: 'set',
    children: [
      {
        name: '系统设置',
        path: '/settings',
      },
      {
        name: '个人设置',
        path: '/person',
      },
    ],
  },
  {
    name: '登录&注册',
    path: '/',
    icon: 'account',
    children: [
      {
        name: '登录',
        path: '/user/login',
      },
      {
        name: '注册',
        path: '/user/register',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
