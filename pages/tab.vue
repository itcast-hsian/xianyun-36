<template>
    <div style="padding:50px;">
      
        <div class="btns">
            <span v-for="(item, index) in ['新闻', '娱乐', '体育']"
            :key="index"
            @click="handleClick(index)"
            :class="{ active: index === current }">
                {{item}}
            </span>
        </div>
      
        <div v-if="current === 0">
            <p>未来5年什么技能值钱？这样玩PS的人早加薪了</p>
            <p>未来5年什么技能值钱？这样玩PS的人早加薪了</p>
            <p>未来5年什么技能值钱？这样玩PS的人早加薪了</p>
            <p>未来5年什么技能值钱？这样玩PS的人早加薪了</p>
        </div>  

        <div v-if="current === 1">
            <p>AKIRA公开谈老婆林志玲 甜蜜放闪：当成花一样爱</p>
            <p>AKIRA公开谈老婆林志玲 甜蜜放闪：当成花一样爱</p>
            <p>AKIRA公开谈老婆林志玲 甜蜜放闪：当成花一样爱</p>
            <p>AKIRA公开谈老婆林志玲 甜蜜放闪：当成花一样爱</p>
        </div>  

        <div  v-if="current === 2">
            <p>杨旭:7-0为祖国70周年献礼 为国征战无限荣耀!</p>
            <p>杨旭:7-0为祖国70周年献礼 为国征战无限荣耀!</p>
            <p>杨旭:7-0为祖国70周年献礼 为国征战无限荣耀!</p>
            <p>杨旭:7-0为祖国70周年献礼 为国征战无限荣耀!</p>
        </div>  
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 一个框架的学习可以通过tab栏来总结，该例子最重要的核心就是当前的下标的变量
            current: 0
        }
    },

    methods: {
        // 点击时候改变current
        handleClick(index){
            this.current = index;
        }
    }
}
</script>

<style scoped lang="less">
    .btns{
        margin-bottom: 20px;
        span{
            cursor: pointer;
            border:1px #ddd solid;
            padding: 10px;
        }

        .active{
            color:red;
            border-color: red;
        }
    }
</style>