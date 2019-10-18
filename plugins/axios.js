import { Message } from 'element-ui';

// nuxt插件的固定写法
// context包含nuxt下所有的方法，固定有的参数
export default (context) => {
    // 拦截错误的响应信息， 根以前项目的中main.js中拦截器不一样.
    // main.js中拦截器: 拦截所有的请求响应
    // 当前的拦截只拦截错误,如果请求错误就会执行onError中的函数
    context.$axios.onError(res => {
        // res是错误的对象, Error的对象可以通过response获取详细信息
        const {message, statusCode} = res.response.data;

        if(statusCode === 400){
            Message.error(message)
        }

        // if(statusCode === 403 || statusCode === 401){
        if( [401, 403].indexOf(statusCode) > -1 ){
            // 路由重定向的方法
            context.redirect("/user/login");
        }
    })
}