<template>
  <div class="loading">
    <div class="loading-content">
      <van-loading type="spinner" color="#1989fa" size="50" />
      <p class="desc">{{title}}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
let title = ref<string>("")
let setTitle= (title: string) =>{
  title.value = title
}
</script>
 
<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(0,0,0,.6);
    justify-content: center;
    align-items: center;
    .loading-content {
      text-align: center;
      .desc {
        line-height: 20px;
        font-size: 16px;
      }
    }
  }
</style>