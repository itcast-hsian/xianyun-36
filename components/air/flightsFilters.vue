<template>
    <div class="filters">
        <el-row type="flex" class="filters-top" justify="space-between" align="middle">
            <!-- 左侧的信息 -->
            <el-col :span="8">
                单程： 
                {{data.info.departCity}} - {{data.info.destCity}}
                / 
                {{data.info.departDate}}
            </el-col>

            <!-- 过滤条件的列表 -->
            <!-- option里面的label是显示的界面上 -->
            <!-- 在下拉选项中选中值的时候取的value值 -->
            <el-col :span="4">
                <el-select size="mini" v-model="filters.airport" placeholder="起飞机场" >
                    <el-option
                    v-for="(item, index) in data.options.airport"
                    :key="index"
                    :label="item"
                    :value="item"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="filters.flightTimes"  placeholder="起飞时间" >
                    <el-option
                    v-for="(item, index) in data.options.flightTimes"
                    :key="index"
                    :label="`${item.from}:00 - ${item.to}:00`"
                    :value="`${item.from},${item.to}`"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="filters.company"  placeholder="航空公司">
                    <el-option
                    v-for="(item, index) in data.options.company"
                    :key="index"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="filters.airSize" placeholder="机型">
                    <el-option
                    v-for="(item, index) in sizeOptions"
                    :key="index"
                    :label="item.name"
                    :value="item.size">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <div class="filter-cancel">
            筛选：
            <el-button 
                       type="primary" 
                       round 
                       plain 
                       size="mini" 
                       @click="handleFiltersCancel">
                撤销
    		</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            filters: {
                airport: "",        // 机场
                flightTimes: "",    // 出发时间
                company: "",        // 航空公司
                airSize: "",        // 机型大小
            },

            // 机型的列表
            sizeOptions: [
                { name: "大", size: "L" },
                { name: "中", size: "M" },
                { name: "小", size: "S" }
            ]
        }
    },

    props: {
        // 组件可以接收总数据
        data: {
            type: Object,
            default: {}
        }
    },

    watch: {
        filters: {
            deep: true,
            handler(){
                // 统一实现四个条件的过滤
                // (重要：先假设全部的航班都是符合条件，从选中的条件里面找出不符合条件设置valid为false)
                var arr = this.data.flights.filter(v => {
                    let valid = true;

                    // 航空公司有选中值时候才判断
                    if(this.filters.company && this.filters.company !== v.airline_name){
                        valid = false;
                    }

                    if(this.filters.airport && this.filters.airport !== v.org_airport_name){
                        valid = false;
                    }

                    // 时间
                    if(this.filters.flightTimes){
                        // 出发时间的小时
                        const start = +v.dep_time.split(":")[0]; // 14 - 6,12
                        const arr = this.filters.flightTimes.split(",");

                        // 不在选中的时间段内
                        if(start < +arr[0] || start >= +arr[1]){
                            valid = false;
                        }
                    }

                    if(this.filters.airSize && this.filters.airSize !== v.plane_size){
                        valid = false;
                    }

                    return valid;
                })

                this.$emit("setDataList", arr);
            }
        }
    },

    methods: {     
        // 撤销条件时候触发
        handleFiltersCancel(){
            this.airport = "";
            this.flightTimes = "";
            this.company = "";
            this.airSize = "";

            // 传递没有修改的列表数据
            this.$emit("setDataList", this.data.flights);
        },
    }
}
</script>

<style scoped lang="less">
    .filters{
        margin-bottom:20px;
    }

    .filters-top{
        > div{
            /deep/ .el-select{
                margin-left:10px;
            }
        }
    }

    .filter-cancel{
        margin-top:10px;
    }
</style>