<template>
  <div class="digui">
      <div v-for="(item, index) in data" :key="index">
          {{ item.name }}

        <!-- 自己调用自己 -->
        <menuItem :data="item.children" v-if="item.children"/>

      </div>
  </div>
</template>

<script>
export default {
    name: "menuItem",
    props: ['data']
}
</script>


<style scoped>
.digui div{
  padding-left: 50px;
}
</style>