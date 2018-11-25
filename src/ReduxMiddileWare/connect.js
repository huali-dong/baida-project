

import React, { PureComponent } from 'react';
import store from "./store";
const Connect = (UIcomponent)=>{
    return class extends PureComponent{
        constructor(props){
            super(props)
            this.state={
                data : store.getState()
            }
        }
        componentWillMount(){
            store.subscribe(()=>{
                this.setState({
                    data : store.getState()
                })
            })
        }
        render(){
            return (
                <UIcomponent {...this.state}/>
            )
        }
    }
}
export default Connect 