import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/root.reducer";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleware))
);

export default store;
