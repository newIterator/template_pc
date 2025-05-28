<template>
  <div class="content" v-loading="mainData.mainLoading">
    <div class="left-area">
      <div class="left-area-nav">
        <div class="app-name">HELLO!!</div>
        <div class="nav">
          <div v-for="(item, index) in systemRouter" :key="index">
            <div
              :class="[
                'nav-item',
                leftData.activeIndex == index ? 'active' : '',
              ]"
              @click="changeNav(item, index,router)"
            >
              <van-icon :name="item.icon" :size="40" />
            </div>
          </div>
        </div>
        <button class="btn-logout">
          <van-icon name="share-o" :size="40" />
        </button>
      </div>

      <div class="left-area-list">
        <div class="app-name">WELLCOME!!</div>
        <ul class="nav-list">
          <!-- <li class="item" v-for="(item,index) in systemRouter[leftData.activeIndex].children" :key="index" >
            <div :class="[
                'item',
                leftData.childrenIndex == index ? 'active' : '',
              ]"
              @click="changeNavList(item, index)">
              <van-icon :name="item.icon" :size="20" />
              <p>{{item.name}}</p>
            </div>
          </li> -->
           <li class="item" v-for="(item,index) in routerlist" :key="index" >
            <div :class="[
                'item',
                leftData.childrenIndex == item.path ? 'active' : '',
              ]"
              @click="changeNavList(item, index)">
              <van-icon :name="item.meta.icon" :size="20" />
              <p>{{item.meta.title}}</p>
            </div>
            <!-- <ul class="nav-list" v-if="!!item.children&&!!item.children[0]">
              <li class="item" v-for="(row,key) in item.children" :key="row.path" >
                <div :class="[
                    'item',
                    leftData.childrenIndex == key ? 'active' : '',
                  ]"
                  @click="changeNavList(row, key)">
                  <van-icon :name="row.meta.icon" :size="20" />
                  <p>{{row.meta.name}}</p>
                </div>
              </li>
            </ul> -->
          </li>
        </ul>
      </div>
    </div>

    <div class="main-area" style="width:100%;" v-loading="">
      <!-- <div class="sys-header">导航头部功能</div> -->
      <div class="cont-area" style="width:100%;">
        <!-- <component :is="leftData.component"></component> -->
        <router-view :key="leftData.viewPath"></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { leftData, changeNav,systemRouter } from "../components/systemhook";
import { mainData } from "../components/hook";
import { activeIndex, pagelist,comp } from "../layouthook"
import { useRouter } from "vue-router";
let router = new useRouter()
let { matched,fullPath} = router.currentRoute.value
let routerlist = reactive<any>([])
watch(() =>router.currentRoute.value, (val,old) =>{
  let { matched,fullPath} = router.currentRoute.value
  matched.forEach(el =>{
    if(el.path === '/sys'){
      // let index = pagelist.findIndex(row =>{
      //   return row.toRouter === "/sys"
      // })
      // activeIndex.value = index
      // comp.value = pagelist[index].comp
      routerlist = el.children
      // router.push(leftData.viewPath)
    }
  })
},{immediate:true})
let changeNavList = (row: any, index: number | string) =>{
  leftData.childrenIndex = row?.path
  console.log(row)
  // leftData.component = row?.component
  leftData.viewPath = row.path
  router.push(row.path)
}
</script>
<style lang="scss" scoped>
.app-name {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  margin-bottom: 32px;
}
.content {
  width: 90vw;
  height: 90vh;
  border-radius: 8px;
  background: #e0e9fd;
  display: flex;
  .left-area {
    width: 400px;
    // padding: 32px;
    flex-basis: 1 0 132px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: flex-start;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    position: relative;
    overflow: auto;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    .left-area-nav {
      width: 150px;
      background: rgb(182 167 167 / 60%);
      padding: 32px 0px;
      flex-basis: 1 0 132px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
      position: relative;
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
    .left-area-list {
      width: 100%;
      background: rgb(182 167 167 / 70%);
      padding-top: 32px;
      .nav-list{
        padding: 0 32px;
        .item{
          display: flex;
          justify-content:flex-start;
          align-items: center;
          margin-bottom: 10px;
        }
        .active {
          border-top: 1px solid transparent;
          background-size: cover;
          transition: 0.3s;
          transform-origin: 50% 50%;
          color: #fff;
          margin-bottom: 12px;
          transform: scale(1.2);
        }
        p{
          text-indent: 12px;
        }
      }
    }
  }
}
</style>
