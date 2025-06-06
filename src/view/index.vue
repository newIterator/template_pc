<template>
  <div class="swiper-slide base-h bg-1">
    <component :is="comp"></component>
  </div>
  <div class="pages">
    <ul >
      <li v-for="(item,index) in pagelist" @click="changeActive(index)">
        <div  :class="activeIndex == index ? 'active':''">
          <van-icon :name="item.iconname" :size="2" />
        </div>
        <span v-show="activeIndex == index">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="Index">
import { ref, onMounted, reactive, watch } from "vue";
import { activeIndex, pagelist,comp } from "./layouthook.ts"
import { useRouter } from "vue-router";
import {
  mainData
} from "./components/hook";
let router = useRouter()
const changeActive = (row:number) =>{
  mainData.mainLoading = true
  activeIndex.value = row
  comp.value = pagelist[row].comp
  router.push(pagelist[row].toRouter)
  let timeout = setTimeout(() =>{
    mainData.mainLoading = false
    clearTimeout(timeout)
  },1000)
}
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> { /** 路由监测 */
   
    pagelist.forEach((element,index) => {
      if(element.toRouter == newValue){
        activeIndex.value = index
        comp.value = pagelist[index].comp
      }else{
        // router.
        // if()
         console.log("首次刷新",router.currentRoute.value)
      }
    });
},{ immediate: true })

fetch("http://127.0.0.1:8000/api/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
</script>
<style lang="scss" scoped>
.base-h {
  height: 100vh;
}
.base-w {
  width: 100vw;
}
.bg-1 {
  background: #6991c7;
}
.index-content {
  width: 100%;
  background: #e6e6e6;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pages{
    height: 192px;
    margin-top: -96px;
    position: fixed;
    top: 50%;
    right: 5px;
    z-index: 1000;
    color: #fff;
    ul{
      li{
        width: 32px;
        height: 32px;
        position: relative;
        border: 1px solid transparent;
        cursor: pointer;
        div{
          width: 8px;
          height: 8px;
          border-top: 1px solid transparent;
          background-size: cover;
          border-radius: 50%;
          margin: 11px auto 0;
          transition: .3s;
          transform-origin: 50% 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .van-icon{
            background: rgba(0,0,0,.6);
            border-radius: 50%;
          }
        }
        div.active{
          transform: scale(3);
        }
        span{
          width: 50px;
          line-height: 20px;
          text-align: center;
          position: absolute;
          top: 5px;
          transform: translateX(-150%);
          transition: .3s;
          background-color: rgba(0,0,0,.6);
          padding: 5px;
          font-size: 12px;
          border-radius: 6px;
        }
        span:after{
          content: "";
          position: absolute;
          top: 5px;
          right: -12px;
          border-left: 12px solid rgba(0,0,0,.6);
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
        }
      }
    }
}
</style>
