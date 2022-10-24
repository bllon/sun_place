import Vue from 'vue'
import Toast from "@/components/Common/Toast"
export default function create(props) {
    let component = Toast
    let vm = new Vue({
        // 使用render函数渲染组件
        render(h) {
            return h(component,{props})
        }
    }).$mount()
    document.body.appendChild(vm.$el) // vm.$el 是Toast组件挂载的根节点<div class="toast">··· ···</div>
    const toastComponent = vm.$children[0]


    // 组件挂载销毁实例的方法（实际就是删除dom）
    toastComponent.remove = function () {
        document.body.removeChild(vm.$el)
    }


    return toastComponent
}