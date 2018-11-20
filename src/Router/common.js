import React from "react"
import {NavLink,withRouter}  from "react-router-dom"
import styled from "styled-components"

export const OwnstyleLink = styled(NavLink)`
    &.active{
        color:tomato;
    }
    color:blue;
`

const OwnlinkItem = (props)=>{
    //自己封装的一直用，如果没有传tag属性，给默认值，要渲染成的dom元素
    let Tag = props.tag  || "a"
    //路由跳转：push，会记录路由   replace：不会记录
     // 要加的类名
     let _class = props.className || ''
     let _activeClassName = props.activeClassName || 'active'
     // 判断是否加active
    //  console.log(props)
     let isActive = props.exact ? props.location.pathname === props.to: props.location.pathname.startsWith(props.to)
     let className = (props.nav && isActive )? _class + ' ' + _activeClassName : _class
    return <Tag  className = {className} onClick={()=>{props.history.push(props.to)}}>{props.children}</Tag>
}

//此组件接受来自OwnLink的属性，withRouter将非路由组件OwnLinKItem包裹，使其能够使用路由相关属性和方法
export const OwnLink = (props)=>{
    let Item = withRouter(OwnlinkItem)
   return <Item{ ...props} ></Item>
}

export const OwnActiveLink = styled(OwnLink)`
    &.active{
        color:tomato;
    }
    &.select {
        color:orange;
    }
    color:blue;
`