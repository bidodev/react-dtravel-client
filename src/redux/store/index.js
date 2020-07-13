import { createStore, applyMiddleware } from "redux";

import rootReducer from '../root-reducer'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;