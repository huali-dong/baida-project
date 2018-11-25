import React, { Component,Fragment} from 'react';
import {CSSTransition}  from "react-transition-group";
import "./index.css"
class  Transition  extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:true
        }
        this.change= this.change.bind(this)
    }
    render(){
        return (
            <Fragment>
                <div className="container"> 
                    <div className="panel panel-danger">
                            <div className="panel-heading">Trnsition</div>
                                <CSSTransition
                                    in= { this.state.message }
                                    timeout={5000}
                                    classNames = "message"
                                    // unmountOnExit
                                    appear = {true}
                                >
                                    {
                                       (state) =>(
                                            <h3>this is message</h3>
                                        )
                                    }
                                </CSSTransition>
                                <button onClick= {this.change} className="btn btn-info">显示或隐藏</button>
                    </div>
                </div>
            </Fragment>
        )
    }
    change(){
        this.setState({
            message : !this.state.message
        })
        setTimeout(()=>{
            console.log(this.state.message)
        },0)
        
    }
}

export default Transition