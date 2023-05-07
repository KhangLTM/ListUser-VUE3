export const ADMIN_SIDE_MENU = [
// { label: 'Overall', name: 'overall' },
    {
        label: 'User',
        children: [
            { label: 'Users ', name: 'admin-user' },
            {
                label: 'User Add',
                name: 'admin-user-add',
            },
        ],
    },
];

export const BREADCRUMB = [
    {
        label: 'Home',
        name: 'overall',
        icon: 'home',
    },
    {
        label: 'User Overall',
        name: 'admin-user',
        icon: 'person',
    },
    {
        label: 'User Add',
        name: 'admin-user-add',
        icon: 'add_circle',
    },
];
