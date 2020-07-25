import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import dataReducer from './data-reducer'
import searchReducer from './search-input.reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    data: dataReducer,
    searchInput: searchReducer
})

export default rootReducer;