const menus = [
  {id: '0', label: '护理看板', path: '/', icon: 'fa fa-dashboard'},
  {
    id: 'data',
    icon: 'fa fa-circle-o',
    label: '添加数据',
    submenu: [
      {id: 'a1', name: 'addDoctor', label: '添加医生', icon: 'fa fa-hand-o-up'}
    ]
  },
  {
    id: 'datamanage',
    icon: 'fa fa-circle-o',
    label: '数据管理',
    submenu: [
      {id: 'a1', name: 'doctorList', label: '医生列表', icon: 'fa fa-hand-o-up'}
    ]
  },
  {
    id: 'updateApp',
    icon: 'fa fa-circle-o',
    label: '更新APP',
    submenu: [
      {id: 'a1', name: 'updateApp', label: '更新床头卡APP', icon: 'fa fa-hand-o-up'}
    ]
  }
]
export default menus
