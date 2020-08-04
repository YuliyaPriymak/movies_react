import {applyMiddleware, createStore} from "redux";
import createRootReducer from '../reducers'
import thunk from "redux-thunk";

export const store = createStore(createRootReducer(), applyMiddleware(thunk));