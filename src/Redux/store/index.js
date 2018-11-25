


import {createStore}  from "redux"
//redux工具，需要下载
import {composeWithDevTools}  from "redux-devtools-extension"

//创建store,
import reducer from "./reducer"
const store = createStore(reducer,composeWithDevTools())

export default store