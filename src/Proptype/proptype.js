import React,{Component,Fragment} from "react"
import PropTypes from 'prop-types';

//类型检验很重要，多人合作开发的时候
class Prot extends Component{
    render(){
        return (
            <Fragment>
                <button >quxiao</button>
                <Son name={"ds"}/>
            </Fragment>
        )
    }
}


class Son extends Prot{
    render(){
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        )
    }
}
Son.propTypes = {
    name:PropTypes.number
}

export default Prot