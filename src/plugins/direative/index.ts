import { Dialog } from 'vant'
// import { useRouter } from 'vue-routers'
export default {
  install(Vue: any) {
    Vue.directive('ispay',(el:any,binding:any,vnode:any) =>{
      // console.log(el)
      // console.log(binding.arg)
      let { row, type } = binding.arg
      el.addEventListener('click',() =>{
        if(type==='nopay') {
          // router.push()
          window.open(row)
        }
        if(type === 'pay') {
          Dialog.alert({
            title: '提示',
            message:`这个需要付费才可以预览哈,可以加我微信联系我。。。`,
          }).then(() => {
            // let router = useRouter()
            // router.push(row)
          })
        }
      },true)
    })
  }
}