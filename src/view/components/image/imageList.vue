<template>
  <div class="right-area-list">
    <div class="right-area-list-first">
      <div
        class="access-link-wrapper"
        v-for="(item, index) in 10"
        :key="index"
        @click.capture="changeLook(item, index,Image)"
      >
        <div class="access-icon">
          <van-icon name="photo" :size="56" />
        </div>
        <span class="access-text">{{ rigthData.rightTit }}{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="imageList">
import { ref } from "vue";
import Image from "./index.vue"
import { rigthData, changeLook } from "../hook"
</script>
<style lang="scss" scoped>
.right-area-list-first {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -8px;
}
.right-area-list-two {
  // margin-bottom: 10px;
  .access-icon {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
