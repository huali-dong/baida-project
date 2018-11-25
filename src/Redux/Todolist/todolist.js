import React, {Component}  from "react"
import TodoContent from "./todoCotent"
import store from "../store/index"
import actionReacte from "../store/actionCreate"
class Todolist extends Component{
    constructor(props){
        console.log(store.getState())
        super(props)
        this.state = {
            list :store.getState()
        }
        this.changeTodolist = this.changeTodolist.bind(this)
    }
        render () {
            // console.log(this)

            return (
                <div className="container todo-box">

                    <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>
            
                    <input onKeyUp = {this.changeTodolist} type="text" className="form-control"/>
                        <TodoContent/>
                </div>
            )
        } 
    
        changeTodolist(e){
            let text =  e.target.value
            if(e.keyCode === 13){
                store.dispatch(actionReacte.changeTodolist(text))
            }
           
        }

           
        
   
    
    

    
}

export default Todolist