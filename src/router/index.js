//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'

//使用插件
Vue.use(VueRouter)

import routes from './routes'

//先把VueRouter原型對象的push，先保存一份
let originPush = VueRouter.prototype.push

// 重寫push|replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply區別
        //相同點:都可以調用函數一次，都可以竄改函數的上下文一次
        //不同點:call與apply傳遞參數:call傳遞參數用逗號隔開，apply執行，傳遞數組
        originPush.call(this,location,resolve,reject)
    } else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(){
        return {y:0}
    }
})
router.beforeEach((to,from,next)=>{
    let token = store.state.user.token
if(token){
    store.dispatch('userInfo')
    if(to.path == ('/Login')){
        next('/home')
    }else{
            next()
        }
}else{
    next()  
}

})
export default router
