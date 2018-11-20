import React, { Component } from 'react';

import {Provider,Consumer} from "./context"

//对于一个组件树而言是全局的数据
class ContextControll extends Component{
    constructor(props){
        super(props)
        this.state={
            money:20
        }
    }
        render(){
            return (
                <Provider value={{money:this.state.money}}>
                    <div>
                        <p>我掌控钱：{this.state.money}</p>
                        <hr></hr>
                        <ContextFather money={this.state.money}/>
                    </div>
                </Provider>
            )
        }
}


class ContextFather extends ContextControll{
        render(){
            return (
                <div>
                    <p>我的继承过来的钱是：{this.props.money}</p>
                    <hr></hr>
                    <ContextSon/>
                </div>
            )
        }
}

class ContextSon extends ContextFather{
    render(){
        return (
            <Consumer>
                {
                    value => {
                        return (
                            <div>
                                <p>我直从老大那里开始的钱是:{value.money}</p>
                            </div>
                        )
                    }
                    
                }
                  
            </Consumer>
           
        )
    }
}

export default ContextControll