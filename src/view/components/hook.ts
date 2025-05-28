import { ref,reactive } from "vue"
import imageList from "./image/imageList.vue"
import music from "./music/index.vue"
import videoComp from "./video/index.vue"
import docs from "./docs/index.vue"
import Apps from "./apps/index.vue"
import downloads from "./download/index.vue"
/* Left Data**/
interface L{
  activeIndex: number | string
}
let leftData = reactive<L>({
  activeIndex: 0
})
let changeNav = (row: object, index: number | string) => {
  mainData.mainLoading = true;
  leftData.activeIndex = index;
};
/*main **/
let navarray = reactive<any>([
  {
    name: "Image",
    icon: "photo",
    rightComponent: imageList
  },
  {
    name: "Music",
    icon: "service-o",
    rightComponent: music
  },
  {
    name: "Video",
    icon: "video-o",
    rightComponent:videoComp
  },
  {
    name: "Docs",
    icon: "newspaper-o",
    rightComponent:docs
  },
  {
    name: "Address",
    icon: "location-o",
    rigthComponent:Apps
  },
  {
    name: "Download",
    icon: "down",
    rigthComponent: downloads
  },
]);
interface A{
  mainLoading:boolean,
  isFix: boolean,
  selectIndex: number|string
}
let mainData = reactive<A>({
  mainLoading: false,
  isFix: false,
  selectIndex: 0
}) 
let changMainNav = (row: object, index: number | string) => {
  mainData.selectIndex = index;
  rigthData.rightLoading = true;
  rigthData.rightTit = row?.name;
  rigthData.rightComponent = row?.rightComponent
  let timeout = setTimeout(() =>{
    rigthData.rightLoading = false;
    clearTimeout(timeout)
  },1000)
};
/* 右侧**/
interface P{
  isLook:boolean,
  rightTit: string,
  popupComponent: any,
  rightComponent: any,
  rightLoading: boolean,
  isFixRigth: boolean,
  baseData: object
}
let rigthData = reactive<P>({
  isLook: false,
  rightTit:"未知",
  popupComponent:"",
  rightComponent: "",
  rightLoading: false,
  isFixRigth: false,
  imageData:{}
})
const changeLook = (row:object,index:number,comp:any) =>{
  rigthData.isLook = true;
  rigthData.baseData = {
    row,
    index
  }
  baseData.popupComponent = comp
}
/*base Data**/
interface B{
  popupComponent:any
}
const baseData = reactive<B>({
  popupComponent:""
}) 
export {
  /*left**/
  leftData,
  /*main**/ 
  navarray,
  mainData,
  /*right**/ 
  rigthData,
  baseData,
  changeLook,
  changMainNav,
  changeNav
}