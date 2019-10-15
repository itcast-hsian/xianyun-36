<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>
                    
                </div>
                
                <!-- 航班头部布局 -->
                <FlightsListHead/>
                
                <!-- 航班信息 -->
                <!-- flightsData.flights是航班的列表 -->
                <FlightsItem 
                v-for="(item, index) in flightsData.flights"
                :key="index"
                :item="item"/>

                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="flightsData.total">
                </el-pagination>
            </div>

            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
            </div>
        </el-row>
    </section>
</template>

<script>

import FlightsListHead from "@/components/air/flightsListHead"
import FlightsItem from "@/components/air/flightsItem"

export default {
    data(){
        return {
            // 请求机票列表返回的总数据，包含了flights,info, options,total
            flightsData: {},

            // 当前的页数
            pageIndex: 1,
            // 当前的条数
            pageSize: 5,
        }
    },

    components: {
        FlightsListHead,
        FlightsItem
    },

    methods: {
        // 分页条数切换时候触发, val是当前的条数
        handleSizeChange(val){

        },

        // 页数切换时候触发, val是当前的页数
        handleCurrentChange(val){

        }
    },

    mounted(){
        // 请求机票列表数据
        this.$axios({
            url: "/airs",
            // params是axios的get的参数
            params: this.$route.query
        }).then(res => {
            // 保存到机票的总数据
            this.flightsData = res.data;
        })
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>