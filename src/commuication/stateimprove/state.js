import React,{Component,Fragment} from "react"
//状态提升
class Boil extends Component{
    constructor(props){
        super(props)
        this.state={
            celsius:"",
            fahrenheit:""
        }
        this.changeTem=this.changeTem.bind(this)
    }

    render(){
        return (
            <Fragment>
                <InputText template={this.state} onChangeTem ={this.changeTem}/>
               <BoilText celsius={this.state.celsius}/>
            </Fragment>
        )
    }
    changeTem({val,type}){
        if(type === "celsius"){
            this.setState({
                celsius:val,
                fahrenheit: (val*9/5) +32
            })
        }else{
            this.setState({
                fahrenheit:val,
               celsius: (val-32) *5/9
            })
        }
    }
}
class BoilText extends Boil {
    constructor(props){
        super(props)
    }
    render(){
            if(this.props.celsius >= 100){
                return <p>水会烧开</p>      
            }else{
                return <p>水不会烧开</p>
            }
    }
}
class InputText extends Boil{
    constructor(props){
        super(props);
        this.handlechangeTem = this.handlechangeTem.bind(this)
    }
    handlechangeTem(e){
        let val = e.target.value;
        let type = e.target.name
        this.props.onChangeTem({val,type})
    }
    render(){
        return (
            <Fragment>
                <label >
                    华氏度：<input name="celsius" onChange={this.handlechangeTem} value={this.props.template.celsius} type="text"  />   
                </label>
                <br/>
                <label>
                    摄氏度：<input name="fahrenheit" onChange = {this.handlechangeTem} value={this.props.template.fahrenheit} type="text"  />
                </label>
               
            </Fragment>
        )
    }
}
export default Boil