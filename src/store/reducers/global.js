const globalData = {
    isCol: false
};

function global(state = globalData, action) {
    switch (action.type) {
        case 'loginSuccess':
            return Object.assign(state, {isCol: action.isCol});
        default:
            return state;
    }
}

export default global
