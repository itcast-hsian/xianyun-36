<template>
  <div style="padding: 50px">
    <h3>组件的递归</h3>

    <!-- 下面的代码无法知道数据到底有多少级 -->
    <!-- <div v-for="(item, index) in list" :key="index">
      {{ item.name }}

        <div v-for="(item, index) in item.children" :key="index">
          {{ item.name }}

          <div v-for="(item, index) in item.children" :key="index">
            {{ item.name }}
          </div>
        </div>
    </div> -->

    <!-- 组件所接受的值是数组 -->
    <MenuItem :data="list"/>

  </div>
</template>

<script>

import MenuItem from "@/components/post/menuItem"

export default {
  components: {
    MenuItem
  },

  data(){
    return {
      list: [
        { 
          name: "服装", 
          children: [
            { name: "男装", children: [
              { name:"正装" },
              { name:"休闲装" },
              { name:"运动装" },
            ]},
            { name: "女装", children: [
              { name:"正装" },
              { name:"休闲装" },
              { name:"运动装" },
              { name:"xxx" }
            ]},
            { name: "童装" }
          ]
        },
        {
          name: "电器", 
          children: [
            {name: "电视"},
            {name: "空调"},
            {name: "冰箱"}
          ]
        }
      ]

    }
  }
}
</script>
