<template>
  <div>

    <div class="container">
        <!-- 轮播图 -->
        <!-- interval：相隔时间
        arrow：是否显示左右的箭头 -->
        <el-carousel 
        :interval="5000" 
        arrow="always">

            <el-carousel-item 
            v-for="(item, index) in banners" 
            :key="index">
                <div class="banner-image" 
                :style="`
                background:url(${$axios.defaults.baseURL + item.url}) center center no-repeat;
                background-size:contain contain;
                `">
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>

  </div>
</template>

<script>
export default {
	data(){
		return {
			banners: []
		}
	},

	mounted(){
		// 请求轮播图数据
		this.$axios({
			url: "/scenics/banners"
		}).then(res => {
			const {data} = res.data;

			// 赋值给banners
			this.banners = data;
		})
	}
}
</script>

<style scoped lang="less">
.container{
    min-width:1000px;
    margin:0 auto;
    position:relative;

    /deep/ .el-carousel__container{
        height:700px;
    }

    .banner-image{
        width:100%;
        height:100%;
    }
}
</style>