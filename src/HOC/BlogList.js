import React, { Component } from 'react';

import Datasource from "./Datasource"
import higherOrderComponent from "./HOCcomponent"
class Blog extends Component{
    render(){
        return (
            <div>
                <h2>Bloglist</h2>
                <ul className="list-group-ul">
                    { this.props.lists.map(item=><li key={item.id} className="list-group-li">{item.title}</li>)}
                </ul>
            </div>
        )
    }
}
const container =higherOrderComponent(Blog,()=>Datasource.getBlogPost())
export default container