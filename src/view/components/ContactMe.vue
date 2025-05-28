<template>
  <div class="content">
    <p class="p-txt">联系我</p>
    <div class="experience">
      <ul>
        <li class="c1">灵感</li>
        <li class="c2">代码</li>
        <li class="c3">梦想</li>
        <li class="c1">未来</li>
      </ul>
      <p>学习是一个充实愉悦的过程</p>
      <p>前端更贴近用户这种体验非常美妙</p>
      <p>热爱一切美好的事物</p>
      <p>行路有良友，便是捷径</p>
      <!-- <p @click="preView">--＞预览我的简历 ＜--</p> -->
       <a style="color:#3cf;" :href="previewUrl" download="我的简历">--＞预览我的简历 ＜--</a>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <embed
          :src="previewUrl"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </van-overlay>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import previewUrl from "../../assets/myself.pdf";
let show = ref<boolean>(false);
let preView = () => {
  show.value = true;
};
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0 30px;
  font-size: 1rem;
  color: #fff;
  .p-txt {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .list {
    margin: 50px auto;
  }
  .item {
    width: 100px;
    display: inline-block;
    margin-right: 10px;
    .item-ico {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: hsla(0, 0%, 100%, 0.1);
      position: relative;
      cursor: pointer;
      transition: 1.3s;
      color: #fff;
    }
  }
  p{
    margin-bottom: 10px;
  }
  /***/
  .wrapper {
    width: 90vw;
    height: 90vh;
    margin: 0 auto;
    margin-top: 2vh;
  }
  ul {
    width: 300px;
    display: flex;
    justify-content: space-around;
    margin:10px auto 10px auto;
    li {
      font-size: 20px;
      text-align: center;
      font-weight: 700;
    }
    .c1 {
      color: red;
    }
    .c2 {
      color: #3cf;
    }
    .c3 {
      color: #6c0;
    }
  }
}
</style>
