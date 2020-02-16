const global = {
	collapsed: false,
}
export default function (state = global, {type, ...data}){
	switch (type) {
		case 'TOGGLE_SIDE_MENU':
			return Object.assign({}, state, {collapsed: data.isCollapsed ? data.isCollapsed: !state.collapsed})
			break;
		default:
			return state;
			break;
	}
}