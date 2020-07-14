import { combineReducers } from 'redux'
import loginReducer from './login-reducer'
import dataReducer from './data-reducer'
import searchReducer from './search-redux'
import imgsBgReducer from './imgs-bg-reducer'
import quizReducer from './quiz-redux'

const rootReducer = combineReducers({
    login: loginReducer,
    destinations: dataReducer,
    searchInput: searchReducer,
    urlImgs: imgsBgReducer,
    quizInput: quizReducer
})

export default rootReducer;