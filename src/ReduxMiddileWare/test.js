
import React, { Component } from 'react';
import connect from "./connect"
class Test extends Component{
    
        render(){
            return (
                <div>   
                     {
                            this.props.data.commonreducer.isshow ? <p className = "text-center">isloading</p> : ""
                       }

                </div>
            )
        }
}

export default connect(Test)