import { ref, reactive, toRef } from "vue"
import PageIndex from "./components/PageIndex.vue";
import SystemBlock from "./components/SystemBlock.vue";
let pagelist = reactive<any>([
  {
    iconname: "wap-home-o",
    title: "大厅",
    comp: PageIndex,
    toRouter: "/index",
    name:"index"
  },
  {
    iconname: "friends-o",
    title: "系统厅",
    comp: SystemBlock,
    toRouter: "/sys",
    name:"system"
  },
  // {
  //   iconname: "refund-o",
  //   title: "3D厅",
  //   comp: ""
  // },
  // {
  //   iconname: "guide-o",
  //   title: "联系我",
  //   comp: ""
  // },
  // {
  //   iconname: "miniprogram-o",
  //   title: "在线编码",
  //   comp: CodeInline
  // }
])
let activeIndex = ref<number | string>(0)
let comp = toRef<any>(PageIndex)
export {
  pagelist,
  activeIndex,
  comp
}