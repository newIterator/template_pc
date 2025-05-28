<template>
  <div class="cont">
  <swiper
    :effect="'flip'"
    :grabCursor="true"
    :pagination="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="item">
      <div class="item-cont">
        <h3 class="title">广州新居网家居科技有限公司</h3>
        <p>2018年3月～2021年6月</p>
        <p>＜web前端开发工程师＞</p>
        <ul class="list">
          <ol>“小程序、Jquery、Uni-app、Vue2.0、Vant”</ol>
          <ol>1、负责移动端、PC端的项目开发</ol>
          <ol>2、小程序组件的开发、项目的维护</ol>
          <ol>3、技术的研究、学习（符合公司方向）</ol>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="item-cont">
        <h3 class="title">广东联塑科技实业有限公司合创兴领团队</h3>
        <p>2021年11月～2022年7月</p>
        <p>＜web前端开发工程师＞</p>
        <ul class="list">
          <ol>“Vue2.0、Sass、Vue-cli（webpack）、Element、Vant”</ol>
          <ol>1、旧项目系统的需求开发</ol>
          <ol>2、项目架构的重构开发、新项目的开发</ol>
          <ol>3、小程序开发/组件的开发</ol>
          <ol>4、组件重构、参与项目规范制定</ol>
        </ul>
      </div>
    </swiper-slide>
  </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
const modules = [EffectFlip, Pagination, Navigation];
</script>
<style lang="scss" scoped>
p,h3{
  padding: 0;
  margin: 0;
}
.swiper {
  width: 90vw;
  height: 300px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 1rem;
}
.swiper-slide img {
  display: block;
  width: 100%;
}
.item-cont{
  width: 100%;
  height: 100%;
  color: #945c4c;
  background: #dabab1;
  border-radius: 16px;
  p{
    padding-bottom:10px;
  }
}
.title{
  padding-top: 20px;
  padding-bottom: 10px;
}
.list{
  text-align: left;
  padding: 0 40px;
}
.swiper-slide-shadow-left{

}
.swiper-button-prev{
  background-image: url("../../assets/left.png");
}
.swiper-button-next{
  background-image: url("../../assets/right.png");
}
</style>
