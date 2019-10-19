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
      var map = new AMap.Map('container');
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
#container {width:300px; height: 180px; }  
</style>