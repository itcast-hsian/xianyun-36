<template>
  <div style="padding: 50px">
      <!-- 调用按钮组件 -->
      <SlotButton>
          <span style="color:red">123</span>
      </SlotButton>
    </div>
</template>

<script>

import SlotButton from "@/components/slotButton"

export default {
    components: {
        SlotButton
    }
}
</script>

<style>

</style>