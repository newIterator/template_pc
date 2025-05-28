import { ref,reactive } from "vue"
import { mainData } from "./hook"
import menuSys from "../components/system/menu.vue"
import listSys from "../components/system/list.vue"
/* Left Data**/
let systemRouter = reactive<any>([
  {
    name:"系统菜单",
    icon:"apps-o",
    components: menuSys,
  },
  {
    icon:"setting-o",
  }
])
interface L{
  activeIndex: number | string,
  // component:any,
  childrenIndex: number | string,
  viewPath: string
}
let leftData = reactive<L>({
  activeIndex: 0,
  childrenIndex: '/manage',
  // component:menuSys,
  viewPath: '/sys/manage'
})
let changeNav = (row: object, index: number | string) => {
  mainData.mainLoading = true;
  leftData.activeIndex = index;
  let timeout = setTimeout(() =>{
    mainData.mainLoading = false;
    clearTimeout(timeout)
  },1000)
};
export {
  /*left**/
  leftData,
  systemRouter,
  changeNav
}