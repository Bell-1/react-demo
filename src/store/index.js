import { combineReducers } from 'redux'
import app from './reducers/app'
import user from './reducers/user'
const reducers = combineReducers({
	app,
	user
})

export default reducers