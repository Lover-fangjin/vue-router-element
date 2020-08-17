import Tenant from '../views/basic/tenant/Tenant'
import User from '../views/basic/user/User'
let basics=[
    {
        path: '/manage/tenant',
        name: 'tenant',
        component: Tenant,
        meta: { title: '租户管理' },
    },
    {
        path: '/manage/user',
        name: 'user',
        component: User,
        meta: { title: '用户' },
    },
]


export default basics;