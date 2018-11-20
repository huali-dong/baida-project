import React, {Component}  from "react"
import TodoContent from "./todoCotent"

class Todolist extends Component{
    //   state={
    //         id:2,
    //        _todo:[
    //            {id:1,title:"好好学习",isFinished : false},
    //            {id:2,title:"天天向上",isFinished : false}
    //        ]
    //   }
    constructor(props){
        super(props)
        this.state={
            id:2,
            _todo:[
                {id:1,title:"好好学习",isFinished : false},
                {id:2,title:"天天向上",isFinished : true}
            ],
            types:[
                {id:1,title:"正在进行",type:false},
                {id:2,title:"已经完成",type:true}
            ]
        }
    }
        render () {
            // console.log(this)

            return (
                <div className="container todo-box">

                    <h1 className="text-center"> ToDoList—最简单的待办事项列表 </h1>
            
                    <input onKeyUp = {this.changeTodolist} type="text" className="form-control"/>
                        {this.renderItemlist()}
                </div>
            )
        } 

    //子组件点击按钮删除当前的状态
    //在子组件传递参数的时候，用bind(),第一个是this,第二个才是id,如果不传this,就用null代替
    deleteItem = (id) => {
        this.setState({
            _todo:this.state._todo.filter(item=>item.id!==id)
        })
    }
    //当input框失去焦点时，更改数据
    UpdateInput = (title,id)=>{
        this.state._todo.forEach(item=>{
            if(item.id === id){
                item.title = title
            }
        })
        this.setState({_todo:this.state._todo})
    }
    //点击checked要更改数据
    updateItem =(id)=>{
        // this.setState({
        //     _todo : this.state._todo.forEach((item)=>{
        //         if(item.id===id){
        //             item.isFinished = ! item.isFinished
        //         }
        //     })
        // })
        //setState是异步的
        this.state._todo.forEach((item)=>{
            if(item.id===id){
                item.isFinished=!item.isFinished
            }
        })
        this.setState({ _todo: this.state._todo })
    }

    //  根据数据去显示已完成和未完成的条数
    ContentLength =(type)=>{
        //在这里返回不同的数据，已完成和未完成
        return this.state._todo.filter(item=>item.isFinished ===type )
    }
    //渲染子组件
    renderItemlist=()=>{
                if(this.state._todo.length<=0){
                     //如果没有数据就显示下面的
                    return <div className="alert alert-info">没有代办事项，快去添加吧</div>
                }else{
                    return (
                        //渲染子组件，因为有正在进行和已经完成，所以根据数组循环出来
                        this.state.types.map((item)=>{
                            return  <TodoContent
                                key={item.id}
                                title = {item.title}
                                deleteItem = { this.deleteItem }
                                todolist = {this.ContentLength(item.type)}
                                updateItem = {this.updateItem}
                                UpdateInput = {this.UpdateInput}
                            />
                        })
                       
                    )
                }
    }

    //在input中输入值之后,要更改state
    //属性初始化器能够保证this不丢失，但是不能够传参
    //通过这种绑定bind this的方法吗，传入低阶组件的时候，会消耗性能，因为会不停的去绑定this,返回函数
    changeTodolist = (e)=> {
        //这里的e.target在谷歌控制台里面有时候为null
        // console.log(e)
        if(e.keyCode===13){
            let title = e.target.value;
            //状态不能够直接更改，也不会主动更改，更改状态要用setState()
            //状态更改是异步的
            this.setState((prevState)=>{
                // console.log(prevState)
                //setState中的prevState是之前的状态，props是本次的状态
                prevState._todo.push({
                    id:++prevState.id,
                    title:title,
                    isFinished:false
                })
                return prevState
            })
        }
      
    }
}

export default Todolist