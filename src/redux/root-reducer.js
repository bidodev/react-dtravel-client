import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import dataReducer from './data-reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    destinations: dataReducer
})

export default rootReducer;