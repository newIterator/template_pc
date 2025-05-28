<template>
  <div class="content appss" v-drag="{'isopen':true,'nodeClass':'.dialog_header','nodeFixed':'.right-area'}" v-loading="mainData.mainLoading">
    <div class="left-area">
      <button class="btn-close-left">
        <van-icon name="close" :size="24" />
      </button>
      <div class="app-name">HELLO!!</div>
      <div class="nav">
        <div v-for="(item, index) in ['apps-o', 'setting-o']" :key="item">
          <div
            :class="['nav-item', leftData.activeIndex == index ? 'active' : '']"
            @click="changeNav(item, index)"
          >
            <van-icon :name="item" :size="40" />
          </div>
        </div>
      </div>
      <button class="btn-logout">
        <van-icon name="share-o" :size="40" />
      </button>
    </div>
    <!-- main -->
    <div class="main-area">
      <div :class="['main-area-header', mainData.isFix ? 'isFixed' : '']">
        <div class="search-wrapper">
          <van-search
            v-model="value"
            shape="round"
            background="#f0f4fd"
            placeholder="请输入搜索关键词"
          />
        </div>
      </div>
      <section class="content-section">
        <h1 class="section-header">快速访问</h1>
        <div class="access-links">
          <div
            class="access-link-wrapper"
            v-for="(item, index) in navarray"
            :key="index"
            @click="changMainNav(item, index)"
          >
            <div
              :class="[
                'access-icon',
                mainData.selectIndex == index ? 'active' : '',
              ]"
            >
              <van-icon :name="item.icon" :size="56" />
            </div>
            <span
              :class="[
                'access-text',
                mainData.selectIndex == index ? 'active' : '',
              ]"
              >{{ item.name }}</span
            >
          </div>
        </div>
      </section>
      <section class="content-section">
        <h1 class="section-header">产品服务</h1>
        <div class="access-links">
          <div class="product">
            <b class="item" :style="{'background':'url(https://picsum.photos/id/179/1355/897)'}"></b>
            <b class="item">
            </b>
            <b class="item right">
            </b>
          </div>
        </div>
      </section>
    </div>
    <!-- right -->
    <div class="right-area" v-loading="rigthData.rightLoading" ref="rightshow">
      <div class="dialog_header">
        <div class="button-icon-box">
          <van-icon name="minus" :size="24" @click.capture="changeShow(false)"/>
        </div>
        <div
          :class="['right-area-header', rigthData.isFixRigth ? 'isFixed' : '']"
        >
          <div class="search-wrapper">
            <h3>{{ rigthData.rightTit }}</h3>
          </div>
        </div>
        <component v-show="!rigthData.rightLoading" :is="rigthData.rightComponent"></component>
      </div>
    </div>
  </div>
  <div class="footer-box">
    <div class="item" @click="changeShow(true)">
      <van-icon name="hotel-o" :size="10"/>
    </div>
  </div>
  <van-popup v-model:show="rigthData.isLook" style="border-radius:8px;">
    <div class="com-content">
      <component :is="baseData.popupComponent"></component>
    </div>
  </van-popup>
</template>
<script setup lang="ts">
import { nextTick, reactive, ref } from "vue";
import {
  rigthData,
  navarray,
  mainData,
  baseData,
  leftData,
  changMainNav,
  changeNav,
} from "../components/hook";
nextTick(() => {
  let dom = document.querySelector(".main-area");
  let domRight = document.querySelector(".right-area");
  dom.addEventListener(
    "scroll",
    (target) => {
      if (dom.scrollTop > 80) {
        mainData.isFix = true;
      } else {
        mainData.isFix = false;
      }
    },
    false
  );
  domRight.addEventListener(
    "scroll",
    (target) => {
      if (domRight.scrollTop > 80) {
        rigthData.isFixRigth = true;
      } else {
        rigthData.isFixRigth = false;
      }
    },
    false
  );
  changMainNav(navarray[0], mainData.selectIndex);
});
let rightshow = reactive<any>('')
let changeShow = (isrel) =>{
  if(!isrel){
    rightshow.style.display = "none"
  }else{
    rightshow.style.display = "block"
  }
}
</script>
<style lang="scss" scoped>
p {
  padding-bottom: 10px;
  font-size: 1rem;
}
:deep(.van-popup--center) {
  border-radius: 8px !important;
}
.com-content {
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
}
.footer-box{
  display: none;
  @media screen and (max-width: 1000px) {
    position:absolute;
    bottom: 10px;
    left: 5vw;
    height: 5vh;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1-8px;
    border-radius: 16px;
  }
  .item{
    width:20px;
    height: 20px;
     display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: scale(1.5);
    background-color: rgba(255, 255, 255, 0.9);
  }

}
.content {
  width: 90vw;
  height: 90vh;
  border-radius: 8px;
  background: #e0e9fd;
  display: flex;
  .left-area {
    width: 50px;
    padding: 32px;
    flex-basis: 1 0 132px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    position: relative;
    overflow: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .btn-close-left,
    .btn-close-right {
      border: none;
      background-color: transparent;
      position: absolute;
      top: 4px;
      right: 4px;
      outline: none;
      cursor: pointer;
      display: none;
    }
    .app-name {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #000;
      margin-bottom: 32px;
    }
    .nav {
      .nav-item {
        margin-bottom: 10px;
      }
      .active {
        width: 50px;
        height: 50px;
        background: rgba($color: #0ca2e7, $alpha: 0.6);
        border-top: 1px solid transparent;
        background-size: cover;
        border-radius: 50%;
        transition: 0.3s;
        transform-origin: 50% 50%;
        display: flex;
        color: #fff;
        margin-bottom: 12px;
        justify-content: center;
        align-items: center;
        transform: scale(1.2);
      }
    }
    .btn-logout {
      border: none;
      background-color: transparent;
      margin-top: auto;
      cursor: pointer;
      transition: 0.2s;
    }
  }
  /* 标识**/
  .main-area {
    flex: 1;
    overflow-y: auto;
    background: linear-gradient(97deg, #f2f7fd 0%, #f0f4fd 90%);
    padding-bottom: 24px;
    position: relative;
    scrollbar-width: none;
    @media screen and (max-width: 768px) {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    @media screen and (max-width: 1000px) {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .btn-show-left-area {
      left: 5vw;
      border-radius: 0 4px 4px 0;
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    .main-area-header {
      padding: 2vh 40px;
      background: linear-gradient(97deg, #f2f7fd 0%, #f0f4fd 90%);
    }
    .isFixed {
      position: sticky;
      z-index: 2;
      top: 0;
      width: 100%;
      padding: 20px 0;
      transition: 0.2s;
      animation: sticky 0.5s forwards;
      z-index: 999;
    }
    .content-section {
      display: block;
      margin-top: 16px;
      overflow-x: hidden;
      padding: 0 40px;
      .section-header {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 16px;
        text-align: left;
      }
      .access-links {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 -8px;
        .access-link-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 8px;
        }
        .active {
          //  background: rgba($color: #0ca2e7, $alpha: .6);
          border-top: 1px solid transparent;
          background-size: cover;
          border-radius: 50%;
          transition: 0.3s;
          transform-origin: 50% 50%;
          display: flex;
          color: #0ca2e7;
          margin-bottom: 12px;
          justify-content: center;
          align-items: center;
          transform: scale(1.2);
        }
        .product{
          width: 100%;
          padding: 10px;
          border-radius: 7px;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.13);
          height:320px;
          display: grid;
          display: grid;
          grid-gap: 0.5rem;
          grid-area: sidebar;
          .item{
            position: relative;
            background-color: #7B86F5;
            border-radius: 4px;
            color: #fff;
            font-size: 1.5rem;
            grid-template:
            "mainA sidebar"
            "mainB sidebar";
            &.right{
              grid-area: sidebar;
              grid-row-start: 1;
              grid-row-end: 3;
            }
          }
          // .item:hover{
          //   transition: 1ms;
          //   transform: scale(1.1);
          //   z-index:10;
          // }
        }
      }
    }
  }
  /* Right **/
  .right-area {
    padding: 0 24px 0 24px;
    overflow: auto;
    flex-basis: 300px;
    flex-grow: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: #e0e9fd;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    .dialog_header{
      height: 100%;
      position: relative;
      .button-icon-box{
        display: none;
        @media screen and (max-width: 1000px) {
          position: absolute;
          top: 0;
          right: -5px;
          padding: 5px;
          display: flex;
          justify-content: space-around;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      // display: none;
      position: fixed;
      right: 5vw;
      height: 70vh;
      width: 300px;
      transition: 1ms;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    .right-area-header {
      padding-top: 32px;
      padding-bottom: 32px;
      background: #e0e9fd;
      &.isFixed {
        position: sticky;
        top: 0;
        width: 100%;
        transition: 0.2s;
        animation: sticky 0.5s forwards;
        z-index: 999;
      }
    }
  }
}
</style>
