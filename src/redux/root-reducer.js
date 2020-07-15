import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import dataReducer from './data-reducer'
import searchReducer from './search-input.reducer'
import imgsBgReducer from './imgs-bg-reducer'

const rootReducer = combineReducers({
    login: loginReducer,
    destinations: dataReducer,
    searchInput: searchReducer,
    urlImgs: imgsBgReducer
})

export default rootReducer;