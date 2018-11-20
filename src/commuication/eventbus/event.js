
import React,{Component,Fragment} from "react"

import bus from "./bus"
class Event extends Component{
    constructor(props){
        super(props)
        this.state={
            money:20
        }
        this.Givemoney= this.Givemoney.bind(this)
        bus.on("changeMoney",()=>{
            this.Givemoney()
        })
    }
    Givemoney(){
        this.setState({
           money: --this.state.money
        })
        
    }
   
    render(){
            return (
                    <Fragment>
                            <p>我掌控钱：{this.state.money}</p>
                            <hr></hr>
                            <EventFather money={this.state.money}/>
                    </Fragment>
                
            )
        }
}


class EventFather extends Event{
        render(){
            return (
                <div>
                    <p>我的继承过来的钱是：{this.props.money}</p>
                    <hr></hr>
                    <EventSon/>
                </div>
            )
        }
}

class EventSon extends EventFather{
    constructor(props){
        super(props)
        this.givemoney = this.givemoney.bind(this)
    }
    render(){
        return (
                <div>
                    <p>我直从老大那里开始的钱是:</p>
                    <button onClick={this.givemoney}>得钱</button>
                    </div>
        )
    }
    givemoney(){
        bus.emit("changeMoney")
    }
}
export default Event

