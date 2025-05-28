<template>
  <div class="content" v-loading="mainData.mainLoading">
    组件厅
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style lang="scss" scoped>
.content {
  width: 90vw;
  height: 90vh;
  border-radius: 8px;
  background: #e0e9fd;
  display: flex;
}
</style>
