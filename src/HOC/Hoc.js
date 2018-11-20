

//容器组件
import React, { Component } from 'react';
//高阶组件，接受一个react组件，并返回一个新的react组件
//就好比Jquery将原生的元素转化为jquey元素$(input)
import Commentlist from "./Commentlist";
import Datasource from "./Datasource";
import Bloglist from "./BlogList"
class SimpleHoc extends Component{
    render(){
        return (
            <div>
                <button onClick = {Datasource.changeComments}>更改comments数据</button>
                <Commentlist/>
                <button onClick = {Datasource.changeBlogPost}>更改blog数据</button>
                <Bloglist/>
            </div>
        )
    }
}

export default SimpleHoc