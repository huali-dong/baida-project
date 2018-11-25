
import  defaultState  from "./default-state"

const reducer = (previoustate = defaultState,action)=>{
    let new_state = Object.assign({},previoustate)
    if(/_PENDING/.test(action.type)){
        new_state.isshow = true
    }
    if(/_FULFILLED|_REJECTED/.test(action.type)){
        new_state.isshow = false
    }
    return new_state;
}

export default reducer