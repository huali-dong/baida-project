import qs from "querystring"
import url from "url"
import React, { Component,Fragment } from 'react';
import {OwnLink,OwnstyleLink,OwnActiveLink}  from "./common"
import {
    Route,
    Switch,
    Redirect,
} from "react-router-dom"


const User =()=><h2>User</h2>
const About = ({match})=>{
    //props上有match.path;/about

    // console.log(match.path)
            return(
                <Fragment>
                    <h2>about</h2>
                    <p>
                        <OwnstyleLink to={`${match.path}/en`}>en</OwnstyleLink >
                        <OwnstyleLink  to={`${match.path}/cn`}>cn</OwnstyleLink >
                    </p>
                    <Switch>
                        <Redirect from={match.path} exact to={`${match.path}/cn`}></Redirect>
                        <Route path={`${match.path}/en`} render={()=><h1>关于我们英语</h1>}></Route>
                        <Route path={`${match.path}/cn`} render={()=><h1>关于我们中文</h1>}></Route>
                    </Switch>
                </Fragment>
             )
}
const Login =  (props) => {
    //两种路由参数
    console.log(props)
    let {name, age} = url.parse(props.location.search, true).query
    return (
      <h2>Users -- {props.match.params.id} -- {age} -- {name}</h2>
    )
  };
const Notfound = ()=><h2>Not-fount</h2>
class Routers extends Component{
    render(){
        let query = { name: 'Alice', age: 16 }
        return (
                <Route>
                <Fragment>
                    <h2>路由</h2>
                    <hr></hr>
                    <OwnActiveLink  tag="li" nav exact   to="/user"  >User</OwnActiveLink>
                    <OwnstyleLink  to="/about" >About</OwnstyleLink>
                    <OwnstyleLink tag="li"  to={{
                        pathname:"/login/2",
                        search: '?' + qs.stringify(query)
                        }} exact>Login</OwnstyleLink>
                    <OwnActiveLink tag="li" nav exact to="/not-fount">not-fount</OwnActiveLink >
                    <Switch>
                        <Route path="/" exact render={()=>{
                            let isLogin = true;
                            return isLogin ? <Redirect to="/user"></Redirect> : <Login></Login>
                        }}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/login/:id" component={Login}></Route>
                        <Route path="/about"  component={About}></Route>
                        <Route path="/not-fount" component={Notfound}></Route>
                        <Redirect to={{pathname:"/not-fount"}}></Redirect>
                    </Switch>
                    </Fragment>
                </Route>
        )
    }
}

export default Routers