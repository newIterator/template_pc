let addClass = (el:any, className:string) =>{
  // 如果当前元素样式列表中没有className
  if (!el.classList.contains(className)) {
    el.classList.add(className)
  }
}
 
let removeClass = (el:any, className:string) =>{
  el.classList.remove(className)
}
export {
  addClass,
  removeClass
}