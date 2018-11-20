import React, {Component}  from "react"
import TodotItem from "./todoItem" 
class TodoContent extends Component{
        render () {
            let {todolist} = this.props
            // console.log(this.props)
            return (
                <div className="todo-content">
                    <h3>{this.props.title} <span className="label label-primary pull-right">{todolist.length}</span> </h3>
                    <ul className="list-group">
                       { this.renderItem() }
                    </ul>
                </div>
            )
        } 
    //循环从todolist传过来的数据
    //要思考如何循环的，数组一般用map,对象一般用for in 
    renderItem = ()=>{
        // console.log(this.props)
        return this.props.todolist.map((item)=>{
            // console.log(item)
            return (<TodotItem
                todolist = {item}
                key={item.id}
                deleteItem = {this.props.deleteItem}
                updateItem = {this.props.updateItem}
                UpdateInput = {this.props.UpdateInput}
            />)
        })
    }
}

export default TodoContent