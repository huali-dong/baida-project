
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import promiseMiddleware from 'redux-promise-middleware'

import reducers from "./reducers"
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(promiseMiddleware())
    ),
)

export default store