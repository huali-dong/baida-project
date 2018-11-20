import React, { Component } from 'react';

import Datasource from "./Datasource"

import higherOrderComponent from "./HOCcomponent"
class CommentList extends Component{
    render(){
        return (
            <div>
                <h2>CommenList</h2>
                <ul className="list-group">
                {
                    this.props.lists.map(item=>{return <li key={item.id} className="list-group-li">{item.title}</li>})
                }
                </ul>
            </div>
        )
    }
}

const  container = higherOrderComponent(CommentList,()=>Datasource.getComments())
export default container