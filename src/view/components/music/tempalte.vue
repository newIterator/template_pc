<template>
  <div class="cont">
    <h3>music{{ rigthData.baseData.row }}组件</h3>
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="false"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="(item, index) in listArray" :key="index">
        <div class="blog-slider__item">
          <div class="blog-slider__img">
            <img :src="item.imageUrl" alt="##" />
          </div>
          <div class="blog-slider__content">
            <span class="blog-slider__code">歌词</span>
            <div class="blog-slider__title">{{ item.title }}</div>
            <div class="blog-slider__text">暂时未开发此功能...</div>
            <!-- <a href="#" class="blog-slider__button">查看</a> -->
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="tem_audio">
      <audio
        class="audio-component"
        preload="auto"
        ref="musicAudio"
        @canplay="changeDuration"
        :loop="true"
      >
        <source ref="musicSource" src="../../../assets/1.mp3" type="audio/mpeg" />
      </audio>
      <van-icon
        style="margin-right: 50px"
        name="arrow-left"
        size="50"
        @click="changeLeft"
      />
      <van-icon
        v-show="!!isPlay"
        name="pause-circle-o"
        size="50"
        @click="changePause"
      />
      <van-icon
        v-show="!isPlay"
        name="play-circle-o"
        size="50"
        @click="changePlay"
      />
      <van-icon
        style="margin-left: 50px"
        name="arrow"
        size="50"
        @click="changeRight"
      />
    </div>
    <div class="pro">
      <van-progress :percentage="50" />
    </div>
  </div>
</template>
<script setup lang="ts" name="musicTemplate">
import { reactive, ref, onMounted, getCurrentInstance } from "vue";
import { rigthData } from "../hook";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import image2 from "../../../assets/2.jpg";
import mp3 from "../../../assets/1.mp3";
let global = getCurrentInstance();
let _this = global.appContext.config.globalProperties;
const modules = [Mousewheel, Pagination];
let listArray = reactive<Array>([
  {
    imageUrl: image2,
    title: "歌名",
    audio: mp3,
  },
]);
let isPlay = ref<string>(false);
let musicSource = reactive<any>("");
let musicAudio = reactive<any>("")
let playTime = ref<number>(0.0);
let playDuration = ref<number>(0.0);
let changeDuration = () => {
  musicAudio.play();
  isPlay.value = true;
  if (playDuration.value != musicAudio.value.duration) {
    //修改进度条的最大值
    // sliderLength.value = musicAudio.value.duration;
    //修改歌曲播放时间
    playDuration.value = musicAudio.value.duration;
  }
};
let changeLeft = () => {};
let changePause = () => {
  musicAudio.pause();
  isPlay.value = false;
};
let changePlay = () => {
  changeDuration();
};
onMounted(() => {
  //musicSource.src
  console.log();
  _this
    .$http({
      url: "../../../../public/1.mp3",
      type: "get",
    })
    .then((res) => {
      console.log(res);
    });
});
</script>
<style lang="scss" scoped>
.cont {
  padding: 20px;
  position: relative;
  .tem_audio {
    position: absolute;
    bottom: 5vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .pro {
    width: 60vw;
    margin: 0 auto;
  }
}

.swiper {
  width: 75vw;
  height: 68vh;
  margin-top: 2.5vh;
}
.blog-slider {
  width: 95%;
  position: relative;
  max-width: 800px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;
}
@media screen and (max-width: 992px) {
  .blog-slider {
    max-width: 680px;
    height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .blog-slider {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider {
    height: 350px;
  }
}
.blog-slider__item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(black, transparent);
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .blog-slider__item {
    flex-direction: column;
  }
}
.swiper-slide-active {
  .blog-slider__item {
    .blog-slider__img img {
      opacity: 1;
      transition-delay: 0.3s;
    }
    .blog-slider__content > * {
      opacity: 1;
      transform: none;
    }
    .blog-slider__content > *:nth-child(1) {
      transition-delay: 0.3s;
    }
    .blog-slider__content > *:nth-child(2) {
      transition-delay: 0.4s;
    }
    .blog-slider__content > *:nth-child(3) {
      transition-delay: 0.5s;
    }
    .blog-slider__content > *:nth-child(4) {
      transition-delay: 0.6s;
    }
    .blog-slider__content > *:nth-child(5) {
      transition-delay: 0.7s;
    }
    .blog-slider__content > *:nth-child(6) {
      transition-delay: 0.8s;
    }
    .blog-slider__content > *:nth-child(7) {
      transition-delay: 0.9s;
    }
    .blog-slider__content > *:nth-child(8) {
      transition-delay: 1s;
    }
    .blog-slider__content > *:nth-child(9) {
      transition-delay: 1.1s;
    }
    .blog-slider__content > *:nth-child(10) {
      transition-delay: 1.2s;
    }
    .blog-slider__content > *:nth-child(11) {
      transition-delay: 1.3s;
    }
    .blog-slider__content > *:nth-child(12) {
      transition-delay: 1.4s;
    }
    .blog-slider__content > *:nth-child(13) {
      transition-delay: 1.5s;
    }
    .blog-slider__content > *:nth-child(14) {
      transition-delay: 1.6s;
    }
    .blog-slider__content > *:nth-child(15) {
      transition-delay: 1.7s;
    }
  }
}
.blog-slider__img {
  width: 300px;
  flex-shrink: 0;
  height: 300px;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  transform: translateX(0px);
  overflow: hidden;
}
.blog-slider__img:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  border-radius: 20px;
  opacity: 0.8;
}
.blog-slider__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  border-radius: 20px;
  transition: all 0.3s;
}
@media screen and (max-width: 768px) {
  .blog-slider__img {
    transform: translateY(0%);
    transform: translateX(0px);
    width: 90%;
  }
}
@media screen and (max-width: 576px) {
  .blog-slider__img {
    width: 95%;
  }
}
@media screen and (max-height: 500px) and (min-width: 992px) {
  .blog-slider__img {
    height: 270px;
  }
}
.blog-slider__content {
  padding-right: 25px;
  width: 300px;
  margin-left: 10px;
  max-height: 68vh;
}
@media screen and (max-width: 768px) {
  .blog-slider__content {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .blog-slider__content {
    padding: 0;
  }
}
.blog-slider__content > * {
  opacity: 0;
  transform: translateY(25px);
  transition: all 0.4s;
}
.blog-slider__code {
  color: #fff;
  margin-bottom: 15px;
  display: block;
  font-weight: 500;
}
.blog-slider__title {
  font-size: 24px;
  font-weight: 700;
  color: red;
  margin-bottom: 20px;
}
.blog-slider__text {
  color: #fff;
  margin-bottom: 30px;
  line-height: 1.5em;
  text-align: left;
}
.blog-slider__button {
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  border-radius: 50px;
  color: #fff;
  box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
  text-decoration: none;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
}
@media screen and (max-width: 576px) {
  .blog-slider__button {
    width: 100%;
  }
}
.blog-slider .swiper-container-horizontal > .swiper-pagination-bullets,
.blog-slider .swiper-pagination-custom,
.blog-slider .swiper-pagination-fraction {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.blog-slider__pagination {
  position: absolute;
  z-index: 21;
  right: 20px;
  width: 11px !important;
  text-align: center;
  left: auto !important;
  top: 50%;
  bottom: auto !important;
  transform: translateY(-50%);
}
@media screen and (max-width: 768px) {
  .blog-slider__pagination {
    transform: translateX(-50%);
    left: 50% !important;
    top: 205px;
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
:deep(.swiper-pagination-bullet) {
  margin: 8px 0;
}
@media screen and (max-width: 768px) {
  :deep(.swiper-pagination-bullet) {
    margin: 0 5px;
  }
}
:deep(.swiper-pagination-bullet) {
  width: 11px;
  height: 11px;
  display: block;
  border-radius: 10px;
  background: #062744;
  opacity: 0.2;
  transition: all 0.3s;
}
:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #fd3838;
  height: 30px;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
@media screen and (max-width: 768px) {
  :deep(.swiper-pagination-bullet-active) {
    height: 11px;
    width: 30px;
  }
}
//全屏按钮
video::-webkit-media-controls-fullscreen-button {
  display: none;
}
//播放按钮
video::-webkit-media-controls-play-button {
  display: none;
}
//进度条
video::-webkit-media-controls-timeline {
  display: none;
}
//观看的当前时间
video::-webkit-media-controls-current-time-display {
  display: none;
}
//剩余时间
video::-webkit-media-controls-time-remaining-display {
  display: none;
}
//音量按钮
video::-webkit-media-controls-mute-button {
  display: none;
}
video::-webkit-media-controls-toggle-closed-captions-button {
  display: none;
}
//音量的控制条
video::-webkit-media-controls-volume-slider {
  display: none;
}
//所有控件
video::-webkit-media-controls-enclosure {
  display: none;
}
</style>
