
import React, { Component } from 'react';
import store from "./store";
import actionCreate from "./store/actionCreate";
import connect from "./connect"
import Test from "./test";
class ReduxMiddle extends Component{
    constructor(props){
        super(props)
        this.update = this.update.bind(this);
        this.getdata = this.getdata.bind(this)
    }
        render(){
            return (
                    <div className = "panel panel-danger">
                        <div className = "panel-heading">
                            计数器案例
                        </div>
                        <div className = "panel-body">
                            <h1 className = "text-center">count:<mark>{this.props.data.countreducer.count}</mark></h1>
                            <p className = "text-center">
                                <button onClick = {this.update}  className = "btn btn-info">自加</button>
                            </p>
                            <p className = "text-center">
                                <button onClick = {this.getdata}  className = "btn btn-info">获取异步数据加值</button>
                            </p>
                            <Test/>
                        </div>
                        
                    </div>
            )
        }
        
        update(){
            store.dispatch(actionCreate.update())
        }
        getdata(){
            // console.log(actionCreate.getdata().payload)
            store.dispatch(actionCreate.getdata())
        }
}

export default connect(ReduxMiddle)