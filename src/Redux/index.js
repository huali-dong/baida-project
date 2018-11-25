import React, { Component } from 'react';
// import Count from "./Example/counter"
import ReduxList from "./Todolist/todolist"
class Redux extends Component{
    render(){
        return (
            <div className="container">
                <ReduxList/>
            </div>
        )
    }
}

export default Redux