import AdminPage from '@/pages/admin/AdminMainPage.vue';
import AdminUser from '@/pages/admin/AdminUser.vue';
import AdminUserAdd from '@/pages/admin/AdminUserAdd.vue';

const adminRoutes = [
    // {
    //     name: 'admin-login',
    //     path: '/login',
    //     component: '',
    //     props: {
    //         title: 'HOME',
    //     },
    // },
    {
        name: 'overall',
        path:'/',
        component: AdminPage,
        children: [
            {
                name: 'admin-user',
                path: '/',
                component: AdminUser,
            },
            {
                name: 'admin-user-add',
                path: '/users/add',
                component: AdminUserAdd,
            },
            {
                name: 'admin-user-edit',
                path: '/users/add/:id',
                component: AdminUserAdd,
            },
        ],
    },
];

export default adminRoutes;
