

import defaultVaule from "./redux-default"

//默认的会提交一次
const reducer = (previousState = defaultVaule,action)=>{
    let state = Object.assign({},previousState);
    // if(action.type === "INCREATE"){
    //     state.count ++
    // }
    // console.log(state)
    switch(action.type){
        case "CHANGETODOLIST":
        state._todo.push({
            id: action.id,
            title : action.text,
            isFinished: action.isFinished
        })
        return ( state = {
            types: state.types,
            _todo:state._todo
        });
        case "DELETEITEM": let s= state._todo.filter(item => item.id !== action.id)
        return (state = {
            types: state.types,
            _todo: s
        });
        case "UPDATEITEM" : let update = state._todo.map( item=>{
            if(item.id===action.id){
                item.isFinished = !item.isFinished;
            }
            return item;
        })
        return (state = {
            types: state.types,
            _todo: update
        });
        case "UPDATEINPUT" : let updateInput = state._todo.map( item=>{
            if(item.id===action.id){
                item.title= action.text;
            }
            return item;
        })
        return (state = {
            types: state.types,
            _todo: updateInput
        });
        default: return state
    }
}

export default reducer
