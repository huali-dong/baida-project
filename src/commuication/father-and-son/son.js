import React, { Component } from 'react';
class Son extends Component{
    constructor(props){
        super(props)
        this.state={
            hair:"非主流"
        }
        this.changeHair = this.changeHair.bind(this)
    }
    render(){
        return (
            <div>
                <span>儿子有多少钱：{this.props.money}</span>
                <br/>
                <button onClick= {this.props.consumeMoney}>花钱</button>
                <hr></hr>
                <p>我的发型是：{this.state.hair}</p>
            </div>
        )
    }
    changeHair(val){
        this.setState({
            hair:val
        })
    }
}
export default Son