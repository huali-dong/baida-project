
let nexttodoid = 3;
const actionCreate = {
    increate(){
        let action = {type:"INCREATE"}
        return action
    },
    changeTodolist (text){
        let action = {
            type:"CHANGETODOLIST",
            id:nexttodoid++,
            text: text,
            isFinished : false
        }
        return action
    },
    deleteItem (id){
        let action = {
            type:"DELETEITEM",
            id: id
        }
        return action;
    },
    updateItem(id){
        let action ={
            type:"UPDATEITEM",
            id:id
        }
        return action;
    },
    updateInput(id,text){
        let action = {
            type:"UPDATEINPUT",
            id:id,
            text:text
        }
        return action
    }
}

export default actionCreate