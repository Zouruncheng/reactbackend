const menuList = [
    {
        title: '首页',
        key: '/admin'
    },
    {
        title: '债权搜索',
        key: '/search'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/admin/ui/buttons',
            },
            {
                title: '弹框',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
            },
            {
                title: '通知提醒',
                key: '/admin/ui/notification',
            },
            {
                title: '全局Message',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab页签',
                key: '/admin/ui/taps',
            },
            {
                title: '图片画廊',
                key: '/admin/ui/gallery',
            },
            {
                title: '轮播图',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        children: [
            {
                title: '登录',
                key: '/admin/form/login',
            },
            {
                title: '注册',
                key: '/admin/form/register',
            }
        ]
    },
    {
        title: '表格',
        key: '/admin/table',
        children: [
            {
                title: '基础表格',
                key: '/admin/table/basic',
            },
            {
                title: '高级表格',
                key: '/admin/table/high',
            }
        ]
    },
   
];
export default menuList;