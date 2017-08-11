import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

//导入自己的模块
import router from './route';//路由实例
//导入自己的根组件
import ComptApp from '../component/App.vue'
//创建vue实例,关联视图,渲染组件
new Vue({
    el:"#app",
    render:(c)=>{return c(ComptApp)},
    router
})