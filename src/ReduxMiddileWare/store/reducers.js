 import { combineReducers } from "redux"
import commonreducer from "./common"
import countreducer from "./count"
 const reducers = combineReducers({
    commonreducer,
    countreducer
 })
 export default reducers