// 固定的写法，暴露出state
export const state = {
    userInfo: {}
}

// 存放的是同步修改state的方法
export const mutations = {
    // mutaion下的值必须是一个函数，函数中会有一个固定的参数state，第二个参数是用户调用方法时候传进来
    // data是登录成功后返回的对象数据
    setUserInfo(state, data){
        state.userInfo =  data;
    }
}



// 存放的是异步修改state的方法
export const actions = {}