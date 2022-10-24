import Vue from 'vue'
import Login from "@/components/User/Login"
import Register from "@/components/User/Register"
import addComment from "@/components/Common/addComment"
import CommentItem from "@/components/Common/CommentItem";

export default function create(componentStr, props) {
    let component
    switch(componentStr) {
        case 'login': 
            component = Login;break
        case 'register':
            component = Register;break
        case 'addComment':
            component = addComment;break
        case 'CommentItem':
            component = CommentItem;break
    }

    let vm = new Vue({
        // 使用render函数渲染组件
        render(h) {
            return h(component,{props})
        }
    }).$mount()
    document.body.appendChild(vm.$el)
    const createComponent = vm.$children[0]


    // 组件挂载销毁实例的方法（实际就是删除dom）
    createComponent.remove = function () {
        document.body.removeChild(vm.$el)
    }


    return createComponent
}