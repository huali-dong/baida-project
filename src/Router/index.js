

import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch}  from "react-router-dom"

const User =()=><h2>User</h2>
const About =()=><h2>about</h2>
const Tops =()=><h2>Tops</h2>
const Login = ()=><h2>Login</h2>
const Notfound = ()=><h2>Not-fount</h2>
class Routers extends Component{
    render(){
        return(
            <div className="root">
             <Router>
                 <Fragment>
                    <h1>路由部分</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">user</Link>
                            </li>
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/Tops">tops</Link>
                            </li>
                            <li>
                                <Link to="/Login">login</Link>
                            </li>
                            <li>
                                <Link to="/not-fount">not-fount</Link>
                            </li>
                        </ul>
                    </nav>
                <Switch>
                        <Route path="/" exact render={()=>{
                            let isLogin = false;
                            return isLogin ? <Redirect to="/user" />:<Login></Login>
                        }}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/Tops" component={Tops}></Route>
                        <Route path="/Login" component={Login}></Route>
                        <Route path="/not-fount" component={Notfound}></Route>
                        <Redirect to="/not-fount"></Redirect>
                        {/* <Redirect to={{pathname:"/not-fount"}}></Redirect> */}
                </Switch>
                </Fragment>
                 </Router>
            </div>
        )
    }
}

export default Routers