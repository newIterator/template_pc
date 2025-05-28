<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" />
  </svg>
</template>
<script lang="ts" setup name="SvgIcon">
import { computed } from "vue";
const props: any = defineProps({
  prefix: {
    type: String,
    default: "icon",
  },
  name: {
    type: String,
    required: true,
  },
});
const symbolId: any = computed(() => `#${props.prefix}-${props.name}`);
</script>
<style lang="scss" scope>
.svg-icon {
  width: 10vw;
  height: 10vw;
  vertical-align: -0.1vw; /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
  fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
  overflow: hidden;
}
</style>
