<template>
  <div class="right-area-list">
    <div class="right-area-list-first">
      <div
        class="access-link-wrapper"
        v-for="(item, index) in 2"
        :key="index"
        @click.capture="changeLook(item, index,musicTemplate)"
      >
        <div class="access-icon">
          <van-icon name="music" :size="56" />
        </div>
        <span class="access-text">{{ rigthData.rightTit }}{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" name="music">
import { ref } from "vue";
import musicTemplate from "./tempalte.vue"
import { rigthData, changeLook } from "../hook"
</script>
<style lang="scss" scoped>
.right-area-list-first {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // margin: 0-8px;
  .access-link-wrapper{
    padding:5px;
  }
}
</style>