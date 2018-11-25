
import * as types from "./action-types"
import axios from "axios"
const actionCreate = {
    update(){
        let action = {type:types.UPDATE}
        return action
    },
    getdata(){
        return {
            type : types.GETDATA,
            payload : axios.get("/mock/count.json")
        }
    }
}

export default actionCreate