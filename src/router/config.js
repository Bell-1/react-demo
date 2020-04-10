
const menus = {
	menus: [
		{ key: '/app/dashboard', component: 'Dashboard', title: '首页', icon: 'HomeOutlined' },
		{ key: '/app/digital_scroll', component: 'DigitalScroll', title: '数字滚动', icon: 'FieldBinaryOutlined' },
		{ key: '/app/load', component: 'Load', title: '加载', icon: 'LoadingOutlined' },
		{
			key: '/app/ui',
			title: 'UI',
			icon: 'underline',
			subs: [
				{ key: '/app/ui/buttons', component: 'Buttons', title: '按钮', icon: 'bold' },
			]
		},
	],
	others: [
		{ key: '/app/home', component: 'Home', title: '首页', icon: 'HomeOutlined' },
	]
}


export default menus