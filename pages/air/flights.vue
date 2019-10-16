<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <FlightsFilters/>
                
                <!-- 航班头部布局 -->
                <FlightsListHead/>
                
                <!-- 航班信息 -->
                <!-- flightsData.flights是航班的列表 -->
                <FlightsItem 
                v-for="(item, index) in dataList"
                :key="index"
                :item="item"/>

                <el-pagination
                v-if="flightsData.flights.length"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageIndex"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="flightsData.total">
                </el-pagination>

                <!-- loading等于false表示加载完毕之后才显示 -->
                <div v-if="flightsData.flights.length === 0 && !loading" style="padding: 50px; text-align:center">
                    该航班暂无数据
                </div>
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
import FlightsFilters from "@/components/air/flightsFilters"

export default {
    data(){
        return {
            // 请求机票列表返回的总数据，包含了flights,info, options,total
            flightsData: {
                // 初始值
                flights: []
            },
            // 当前的页数
            pageIndex: 1,
            // 当前的条数
            pageSize: 5,
            // 判断是否正在加载
            loading: true,
        }
    },

    components: {
        FlightsListHead,
        FlightsItem,
        FlightsFilters
    },

    computed: {
        // 从flights总列表数据中切割出来数组列表
        dataList(){
            const arr = this.flightsData.flights.slice(
                (this.pageIndex - 1) * this.pageSize, 
                this.pageIndex * this.pageSize
            )
            return arr;
        }
    },

    methods: {
        // 分页条数切换时候触发, val是当前的条数
        handleSizeChange(val){
            // 切换条数
            this.pageSize = val;
        },

        // 页数切换时候触发, val是当前的页数
        handleCurrentChange(val){
            // 修改当前的页数
            this.pageIndex = val;
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
            // 请求完毕
            this.loading = false;
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