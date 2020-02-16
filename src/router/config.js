const menus = {
	menus: [
		{ key: '/app/dashboard/index', component: 'Dashboard', title: '首页', icon: 'home' },
		{
			key: '/app/ui',
			title: 'UI',
			icon: 'underline',
			subs: [
				{ key: '/app/ui/buttons', component: 'Buttons', title: '按钮', icon: 'bold' },
				{ key: '/app/ui/icons', component: 'Icons', title: '图标', icon: 'heart' },
			]
		},
		{ key: '/app/table', component: 'Table', title: '表格', icon: 'table' },
		{ key: '/app/load', component: 'Load', title: '加载', icon: 'reload' },
		{ key: '/app/user', component: 'User', title: '用户', icon: 'user' },

	],
	others: [
		{ key: '/login', component: 'Login', title: '登录', icon: 'home' },
	]
}


export default menus