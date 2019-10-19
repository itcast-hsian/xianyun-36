<template>
  <div style="padding:50px;">
    <h3>高德地图</h3>

    <!-- 地图的容器 -->
    <div id="container"></div> 
  </div>
</template>

<script>
export default {
  mounted(){

    // 整个页面加载完毕之后执行
    window.onLoad  = function(){
      var map = new AMap.Map('container', {
        zoom:11,//级别
        center: [113.3245904, 23.1066805]//中心点坐标
      });

      var marker = new AMap.Marker({
        content: `<div style="width:20px; height:20px; border-radius: 50px; background:red; color:#fff; text-align:center; line-height: 20px;">99</div>`,
        position:[113.3245904, 23.1066805]//位置
      })
      map.add(marker);//添加到地图
    }

    // 地图的连接
    var url = 'https://webapi.amap.com/maps?v=1.4.15&key=e3c936027dd8c0a7d48d60c4db2e827e&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  }
}
</script>

<style scoped>
#container {width:600px; height: 500px; }  
</style>