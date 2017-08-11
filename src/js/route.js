//使用webpack打包,每个文件都是摸块,都被放置在沙箱函数中执行,
//没有所谓的全局变量,使用寿命东西都需要单独导入
import VueRouter from 'vue-router';
//这个js对外到处一个路由实例
import ComptIndex from '../component/index/index.vue';
export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:ComptIndex}
    ]
})