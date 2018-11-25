
import defaultState from "./default-state"
import * as types from "../action-types"
const reducer = (previoustate = defaultState,action)=>{
    let new_state = Object.assign({},previoustate)
    // console.log(action)
    switch(action.type){
        case types.UPDATE:  new_state.count++; break;
        case types.GETDATA + '_FULFILLED': new_state.count += action.payload.data.count; break;
        default : return new_state;
    }
    return new_state;
}

export default reducer