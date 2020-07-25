import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "../root.reducer";
import logger from "redux-logger";

const middlewares = [logger];
const enhancers = [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares), ...enhancers
  )
);

export const persistor = persistStore(store);

export default {store, persistor};
