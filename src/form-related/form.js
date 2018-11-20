import React, {Component} from "react"

class FromText extends Component {
    constructor(props){
        super(props)
        this.state={
           name:"",
           password:""
        }
        this.handelChange = this.handelChange.bind(this)
    }
    render(){
        return (
            <form onSubmit= {this.handlePrevent}>
            {/* 受控组件，每一个都有一个与之相关的函数 */}
                <label>
                    Name:<input ref={el=>this.name = el} value={this.state.name} onChange = {this.handelChange} type="text" name="name"/>
                </label>
                <label>
                    Password:<input ref={el=>this.password = el} value={this.state.password} onChange = {this.handelChange} type="password" name="password"/>
                </label>
                <br/>
                <label>
                   <input type="submit" value="提交"/>
                </label>
            </form>
        )
    }
    handlePrevent =(e)=>{
        e.preventDefault();
        console.log(this.name.value,this.password.value)
    }
    handelChange(e){
        let type = e.target.name
        let val = e.target.value;
        this.setState({
            [type]:val
        })
    }
}

export default FromText