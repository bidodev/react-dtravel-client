import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import dataReducer from './data-reducer'
import searchReducer from './search-redux'

const rootReducer = combineReducers({
    login: loginReducer,
    destinations: dataReducer,
    searchInput: searchReducer
})

export default rootReducer;