import React, { Component } from 'react';
import Son from "./son"
class Father extends Component{
    constructor(props){
        super(props)
        this.state={
            money: 20
        }
        this.consumeMoney = this.consumeMoney.bind(this);
        this.changeSonHair = this.changeSonHair.bind(this);
    }
    render(){
        return (
            <div>
                <span>父亲有多少钱：{this.state.money}</span>
                <br/>
                <button onClick={this.changeSonHair}>改变儿子发型</button>
                <hr></hr>
                <Son ref="son" money={this.state.money} consumeMoney = {this.consumeMoney}/>
            </div>
        )
    }
    consumeMoney(){
        this.setState({
            money : --this.state.money
        })
    }
    changeSonHair(){
        this.refs.son.changeHair("小平头")
    }
}
export default Father