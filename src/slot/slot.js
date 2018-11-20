import React,{Component,Fragment} from "react"

class Slot extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:false
        }
        this.changeShow = this.changeShow.bind(this)
    }
    changeShow(){
        this.setState({
           isShow: !(this.state.isShow)
        })
        // console.log(this.state.isShow)
    }
    render(){
        return (
            <Fragment>
                <button onClick = {this.changeShow}>{this.state.isShow?"隐藏":"显示"}</button>
                <Dialog isShow = {this.state.isShow}>
                    <span slot="title">就这样吧</span>
                    <span slot="content">就是这样的</span>
                </Dialog>

            </Fragment>
        )
    }
}

class Dialog extends Slot{
    constructor(props){
        super(props)
        console.log(this.props.isShow)
        this.state = {
            isShow : this.props.isShow
        }
    }

    componentWillReceiveProps (props,state) {
        // 子组件已经改成false 了， 而父组件此时还是true，父组件传入false了
        if ( props.isShow === this.state.isShow ) {
            this.setState({ isShow: !this.props.isShow })
        } else {
            this.setState({ isShow: this.props.isShow })
        }
        
    }
    render(){
        return(
            <div style={{width:"200px",height:"200px",border:"1px solid #ccc",display:this.state.isShow?"block":"none"}} >
                {/* <h2>{this.props.children[0].props.children}</h2>
                <span>{this.props.children[1].props.children}</span> */}
                <h2>{this.props.children.filter(item=>item.props.slot==="title")}</h2>
                <span>{this.props.children.filter(item=>item.props.slot==="content")}</span>
            </div>
        )
    }
}
export default Slot