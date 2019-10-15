<template>
    <el-row class="flight-title">
        <el-col :span="5">
            航空信息
        </el-col>
        <el-col :span="14">
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    起飞时间
                </el-col>
                <el-col :span="12">
                    到达时间
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="5">
            价格
        </el-col>
    </el-row>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .flight-title{
        padding:0 15px;
        border:1px #ddd solid;
        background:#f6f6f6;
        height:38px;
        line-height: 38px;
        color:#666;
        font-size:12px;
        margin-bottom: 10px;

        > div{
            text-align: center
        }
    }
</style>