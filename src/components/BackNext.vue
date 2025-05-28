<template>
  <div class='back-ground'>
    <div class='icon-back' @click='onChange'>
      <svg-icon name='custom-extract' class='icon'></svg-icon>返回
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup(props, context) {
    const { emit, attrs } = context
    const router = useRouter()
    const onChange = () => {
      // const back: Number|String = '-1'
      router.go(-1)
    }
    return {
      onChange
    }
  }
})
</script>
<style lang='scss' scoped>
.icon-back{
  width: 80px;
  height: var(--van-nav-bar-height);
  display: flex;
  background: rgba($color: #fff, $alpha: 0);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 2vw;
  z-index: 999;
  border-radius: 6px;
  font-size: bold;
  .icon {
    width: 20px;
  }
}
</style>
