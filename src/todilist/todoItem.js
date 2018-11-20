import React,{Component }  from "react"

class TodoItem extends Component{

    constructor(props){
       super(props)
       this.state = {
           isUpdate:false
       }
    }
    //更改span与input
    ChangeInput= ()=>{
        this.setState({
           isUpdate : !this.state.isUpdate
        })
        if(!this.state.isUpdate){
            setTimeout(()=>{
               this.el.focus()
            },0)
        }
    }
    //当失去焦点时，要做的事情
    Changeblur=(e)=>{
        let {id} = this.props.todolist
        this.ChangeInput()
        let title = e.target.value
        this.props.UpdateInput(title,id)
    }
   render(props){
       //接受属性在组件的props上面
    let {title,id,isFinished} = this.props.todolist
    let {deleteItem, updateItem} = this.props
    let {isUpdate} = this.state
    // console.log(this.props)
       return (
                <li  className="list-group-item" >
                <div className="row">
                    <input onChange= { updateItem.bind(null,id)}  defaultChecked = { isFinished }  className="col-xs-1" type="checkbox" />
                    <div className="title col-xs-8">
                        {
                            isUpdate ? <input onBlur = {this.Changeblur} ref={el=>this.el = el} defaultValue = {title}  type="text"/> :  <span onClick = {this.ChangeInput}>{title}</span>
                         }
                       
                    </div>
                    <button onClick={ deleteItem.bind(null,id) } type="button" className="close col-xs-1" ><span >&times;</span></button>
                </div>
            </li>
       )
   }
}

export default TodoItem