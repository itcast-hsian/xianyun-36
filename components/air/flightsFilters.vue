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
                <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
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
                <el-select size="mini" v-model="flightTimes"  placeholder="起飞时间" @change="handleFlightTimes">
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
                <el-select size="mini" v-model="company"  placeholder="航空公司" @change="handleCompany">
                    <el-option
                    v-for="(item, index) in data.options.company"
                    :key="index"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
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
            airport: "",        // 机场
            flightTimes: "",    // 出发时间
            company: "",        // 航空公司
            airSize: "",        // 机型大小

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

    methods: {
        // 选择机场时候触发
        handleAirport(value){
            // 根据value过滤列表，只保留当前符合条件的机票列表
            const arr = this.data.flights.filter(v => {
                return v.org_airport_name === value;
            })

            // 修改列表数据
            this.$emit("setDataList", arr);
        },

        // 选择出发时间时候触发
        handleFlightTimes(value){
            //  数组中第一项是开始时间，第二项是终止时间
            const arr = value.split(","); // [6, 12]
            
            const arr2 = this.data.flights.filter(v => {
                // 出发时间的小时
                const start = +v.dep_time.split(":")[0];
                // 比较航班出发时间是否在选中的时间段内
                return start >= +arr[0] && start < +arr[1];
            })

            // 修改列表数据
            this.$emit("setDataList", arr2);
        },

        // 选择航空公司时候触发
        handleCompany(value){
            // 根据value过滤列表，只保留当前符合条件的机票列表
            const arr = this.data.flights.filter(v => {
                return v.airline_name === value;
            })

            // 修改列表数据
            this.$emit("setDataList", arr);
        },

         // 选择机型时候触发
        handleAirSize(value){
           // 根据value过滤列表，只保留当前符合条件的机票列表
            const arr = this.data.flights.filter(v => {
                return v.plane_size === value;
            })

            // 修改列表数据
            this.$emit("setDataList", arr);
        },
        
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