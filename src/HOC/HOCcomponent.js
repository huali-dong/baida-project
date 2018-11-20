
//高阶组件，就算是一个函数
import Datasource from "./Datasource"
import React, { Component } from 'react';
const higherOrderComponent = (UIcomponent,handle)=>{
    return class extends Component{//返回的组件就叫容器组件，又是智能组件
        constructor(){
            super();
            this.state = {
                lists : handle()
            }
            this.handlechange= this.handlechange.bind(this)
        }
        componentDidMount(){//数据与dom装载完成之后
            Datasource.addChangeListener(this.handlechange)
        }
        componentWillUnmount(){//组价销毁的时候，卸载该监听函数
            Datasource.removeChangeListener(this.handlechange)
        }
        handlechange(){//当监听到数据变化时，再重新获取数据
            this.setState({
                lists : handle()
            })
        }
        render(){
            return <UIcomponent {...this.state}/>
        }
    }
}
export default higherOrderComponent