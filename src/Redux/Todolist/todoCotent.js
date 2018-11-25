import React, { Component, Fragment } from "react"
// import TodotItem from "./todoItem"
import store from "../store/index"
import actionCreate from "../store/actionCreate"
class TodoContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: store.getState().types,
            list: store.getState()._todo,
            isupdate :false
        }
        // this.deleteItem = this.deleteItem.bind(this)
        // this.renderState = this.renderState.bind(this)
        this.ChangeInput = this.ChangeInput.bind(this)
    }
    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                title: store.getState().types,
                list: store.getState()._todo
            })
        })
    }
    renderState(type){
        // console.log(this.state.list.filter( item => item.isFinished === type))
       return  this.state.list.filter(item=>item.isFinished === type)
    }
    ChangeInput(){
        this.setState({
            isupdate : !this.state.isupdate
        })
        if(!this.state.isupdate){
            console.log(this)
            setTimeout(()=>{
                this.el.focus()
             },0)
        }
    }
    updateInput(id,e){
        this.ChangeInput()
        let text = e.target.value
        store.dispatch(actionCreate.updateInput(id,text))
    }
    render() {
        return (
            <Fragment>
                {
                    this.state.title.map( items=>(
                        <div className="todo-content" key={items.id}>
                            <h3>{items.title}<span className="label label-primary pull-right">{this.renderState.bind(this,(items.type))().length}</span> </h3>
                            <ul className="list-group">
                                {this.renderState.bind(this,(items.type))().map(item =>
                                    (
                                        <div key={ item.id }>
                                             <li   className="list-group-item" >
                                                <div className="row"  >
                                                    <input onClick = {this.updateItem.bind(this,item.id)} defaultChecked={item.isFinished} className="col-xs-1" type="checkbox" />
                                                    <div className="title col-xs-8">
                                                        {
                                                            this.state.isupdate ?<input  onBlur={ this.updateInput.bind(this,item.id)} ref={ el=>this.el =el} defaultValue = {item.title}  type="text"/> :  <span onClick = {this.ChangeInput}>{item.title}</span>
                                                        }
                                                    </div>
                                                    <button onClick={this.deleteItem.bind(this, item.id)} type="button" className="close col-xs-1" ><span >&times;</span></button>
                                                </div>
                                            </li>
                                         </div>
                                    )
                                )}
                            </ul>
                    </div>
                    ))
                }
            </Fragment>

        )
    }

    deleteItem(id) {
        store.dispatch(actionCreate.deleteItem(id))
    }
    updateItem(id){
        store.dispatch(actionCreate.updateItem(id))
    }
}

export default TodoContent