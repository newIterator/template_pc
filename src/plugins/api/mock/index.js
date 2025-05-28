// https://juejin.cn/post/6844904113616977928
// https://github.com/nuysoft/Mock/wiki/Getting-Started
// 首先引入Mock
import Mock from "mockjs";
var Random = Mock.Random;

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "50000",
});
let configArray = [];
const files = import.meta.globEager(`./mock.*.js`);
Object.keys(files).filter((element) => {
  configArray.push(files[element].default);
});
// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split("|");
    Mock.mock(new RegExp("^" + protocol[1]), protocol[0], target);
  }
});
