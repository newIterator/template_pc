// 项目全局的组件注册
const HelloWorld = import.meta.glob('../../components/HelloWorld')
const SvgIcon = import.meta.glob('../../components/SvgIcon')
const BackNext = import.meta.glob('../../components/BackNext')
const PdfView = import.meta.glob('../../components/PdfView')
export default {
  install (Vue:any){
    Vue.component('HelloWorld', HelloWorld)
    Vue.component('SvgIcon', SvgIcon)
    Vue.component('back-next', BackNext)
    Vue.component('pdf-view', PdfView)
  }
}