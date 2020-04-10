let localUserInfo = localStorage.getItem('userInfo');
if (localUserInfo) {
	try {
		localUserInfo = JSON.parse(localUserInfo);
	} catch (error) {
		console.error(error)
	}
}

const user = {
	userInfo: localUserInfo || null,
};

export default function userReducer(state = user, { type, data }) {
	switch (type) {
	case 'LOGINSUCCESS':
		localStorage.setItem('userInfo', JSON.stringify(data)); //用户信息存本地，刷新时使用
		localStorage.setItem('token', data.token); //token
		return Object.assign({}, state, { userInfo: data });
	case 'LOGOUT':
		return Object.assign({}, state, { userInfo: null });
	default:
		return state;
	}
}