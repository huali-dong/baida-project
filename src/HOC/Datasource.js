

const Datasource = {
    data: { // 存放数据的
        comments: [
            {id: 1, title: '今天是个好日子'},
            {id: 2, title: '心想的事儿都能成'}
        ],
        blogPost: [
            {id: 1, title: '床前明月光'},
            {id: 2, title: '疑是地上霜'},
        ]
    },
    //下面是对数据操作的各种方法
    getComments () {
        return this.data.comments
    },
    getBlogPost () {
        return this.data.blogPost
    },
    handlers: [],
    addChangeListener (handler) {
        this.handlers.push(handler)
    },
    removeChangeListener (handler) {
        this.handlers = this.handlers.filter(item => item !== handler)
    },
    changeComments () {
        this.data.comments.push({ id: 3, title: '今个老百姓真开心' })
        this.emit()
    },
    changeBlogPost () {//每当数据更改之后，就会触发emit发布订阅的方法，在这里执行comment里面数据改变之后重新获取值得方法
        this.data.blogPost.push({ id: 3, title: '举头望明月' })
        this.emit()
    },
    emit () {//发布订阅，handle里面传入的是一个函数，就是在comment里面的方法
        console.log(23)
        this.handlers.forEach(handler => handler())
    }

}

//如果这里不绑定this，等调用的时候this会丢失
Datasource.changeComments = Datasource.changeComments.bind(Datasource)
Datasource.changeBlogPost = Datasource.changeBlogPost.bind(Datasource)

export default Datasource