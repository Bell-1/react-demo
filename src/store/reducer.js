import {combineReducers} from 'redux';
import global from './reducers/global.js'
import user from './reducers/user.js'

const reducer = combineReducers({
    global,
    user
});


export default reducer