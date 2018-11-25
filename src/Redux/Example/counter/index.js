import React, { Component } from 'react';
import store from "../../store/index";
import actionCreate from "../../store/actionCreate"
class Count extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: store.getState().count,
        }
    }

    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                count:store.getState().count
            })
        })
    }

    render(){
        return (
            <div className = "panel panel-danger">
            <div className = "panel-heading">
                计数器案例
            </div>
            <div className = "panel-body">
                <h1 className = "text-center">count:<mark>{this.state.count}</mark></h1>
                <p className = "text-center">
                    <button onClick = {this.handleIncreat} className = "btn btn-info">自加</button>
                </p>
            </div>
        </div>
        )
    }

    handleIncreat = ()=>{
        store.dispatch(actionCreate.increate())
    }
}

export default Count 