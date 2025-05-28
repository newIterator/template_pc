# VITE+VUE3+TS

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## p1-使用vite create Project

```
//https://vitejs.cn/guide/#scaffolding-your-first-vite-project
yarn create vite  //我这里选择了vue3的template

```

## p2-初始化项目（选择vue）

```
cd projectFile Path
yarn install
```

## p3-安装需要的依赖vue-router@next

```
//https://router.vuejs.org/zh/installation.html
//@next支持vue3
yarn add vue-router@next

//router文件下index.js>

import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/index",
            name: 'index',
            component:() => import('../view/index.vue')
        }
    ]
})
export default router;

//在main.js
import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
const app = createApp(App)
app.use(Router)
app.mount('#app')

```

## p4-引入axios

```
//安装axios
yarn add axios --save

//
```

## p5-引入Elemen-Plus

```
/*https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5*/
//vite 需要安装两个插件
//安装unplugin-vue-components 和 unplugin-auto-import这两款插件
yarn add -D unplugin-vue-components unplugin-auto-import

//在vite.config.js
//引入elementUI需要的插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//在plugin添加
plugins: [
      vue(),
      //引入Elementplus
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
],


//在安装element-plus@1.0.2-beta.28
yarn add element-plus@1.0.2-beta.28 --save

//在main.js中
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(ElementPlus) //当然如果可以单个组件的引入
app.mount('#app')

```

## p6-sass

```
//主要引入两个sass sass-loader
yarn add sass sass-loader --save

//vite.config.js配置
css: {
      modules: {
        localsConvention: 'camelCase', // 默认只支持驼峰，修改为同时支持横线和驼峰
      },
      preprocessorOptions: {
        scss: {
          charset: false,
          main: `@import "@/assets/sass/main.scss"`//引入全局样式
        }
      }
},

```

## p7-配置环境变量.evn

```
//https://vitejs.dev/config/
//在root 文件下建立.env.development文件，文件就是全局变量
# 只在开发模式中被载入
NODE_ENV = development
# 网站标题
VITE_APP_TITLE = vite的vue项目框架
# 网站前缀
VITE_BASE_URL = /
# 是否删除console
VITE_DROP_CONSOLE = true
# API
VITE_APP_API_URL = http://www.baidu.com

//在vite.config.js
import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({ mode })=>{
  //mode环境类型
  //获取全局变量使用loadEnv
  const evelop = loadEnv(mode, process.cwd());
  console.log(evelop.VITE_BASE_URL)
})
//package.json 
"scripts": {
    "dev": "vite",
},

```

## p8-vuex的引入

```
//安装
yarn add vuex --save
// 在rootfile 下建立 store， 在store中
import { createStore } from 'vuex'
export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
  
  }
})

//在main.js
import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'

const app = createApp(App)
app.use(Store)
app.mount('#app')
```

## p9-引入布局px转化插件rem

- px和rem的单位转换

```
  |  px  |     rem       |
  ------------------------
  |  12  | 12/16 = .75   |
  |  14  | 14/16 = .875  |
  |  16  | 16/16 = 1     |
  |  18  | 18/16 = 1.125 |
  |  20  | 20/16 = 1.25  |
  |  24  | 24/16 = 1.5   |
  |  30  | 30/16 = 1.875 |
  |  36  | 36/16 = 2.25  |
  |  42  | 42/16 = 2.625 |
  |  48  | 48/16 = 3     |
  ------------------------- 
```

- 引入 postcss-px2rem px2rem-loader
  ```
  yarn add postcss-px2rem px2rem-loader --save
  ```
- 新建rem.js等比适配文件
  ```
    const baseSize = 16
    // 设置 rem 函数
    function setRem () {
      // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
      const scale = document.documentElement.clientWidth / 1920
      // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
      document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
    }
    // 初始化
    setRem()
    // 改变窗口大小时重新设置 rem
    window.onresize = function () {
      setRem()
    }
  ```
- 在main.js中引入适配文件
  ```
    import './utils/rem'
  ```
- 到vue.config.js中配置插件
  ```
    // 引入等比适配插件
    const px2rem = require('postcss-px2rem')
    // 配置基本大小
    const postcss = px2rem({
      // 基准大小 baseSize，需要和rem.js中相同
      remUnit: 16
    })
    // 使用等比适配插件
    resolve: {
      lintOnSave: true,
      css: {
        loaderOptions: {
          postcss: {
            plugins: [
              postcss
            ]
          }
        }
      }
    }
  ```

## p10-eslint的使用及环境配置

```
//官网：https://eslint.org/docs/user-guide/configuring/ 
//https://www.cnblogs.com/linuxtop/p/13442337.html
//安装
yarn add eslint --save
yarn add eslint-plugin-vue@latest -D

//在package.json配置,创建.eslintrc.js的规则
"scripts": {
    "initlint": "npx eslint --init",//生成.eslintrc.js文件
    "lint": "eslint src", //较验src的所有js文件
    "check":"eslint src --ext .js" //校验src下的.js
},
//yarn initlint后
? How would you like to configure ESLint? Answer questions about your style // 以问答的形式创建配置文件
? Are you using ECMAScript 6 features? Yes      // 是否校验 Es6 语法
? Are you using ES6 modules? Yes                // 是否校验 Es6 模块语法
? Where will your code run? Browser             // 代码运行环境，Browser 指浏览器
? Do you use CommonJS? Yes                      // 是否校验 CommonJs 语法
? Do you use JSX? Yes                           // 是否校验 JSX 语法
? Do you use React? Yes                         // 是否校验 React 语法
? What style of indentation do you use? Tabs    // 首行空白选择 Tab 键还是 Space
? What quotes do you use for strings? Double    // 字符串使用单引号 'string' 还是双引号 "string"
? What line endings do you use? Windows         // 操作系统
? Do you require semicolons? Yes                // 每行代码结尾是否校验加分号 ;
? What format do you want your config file to be in? JavaScript     // 以 .js 格式生成配置文件
Installing eslint-plugin-react@latest   // 因为要校验 Reac 语法，所以这里需要下载一个 React 语法规则的包

//常用的配置规则rules
'rules': {
    // no-var
    'no-var': 'error',
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 2,
    // 强制使用单引号
    'quotes': ['error', 'single'],
    // 要求或禁止使用分号而不是 ASI
    'semi': ['error', 'never'],
    // 禁止不必要的分号
    'no-extra-semi': 'error',
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 空格2个
    'indent': ['error', 2, {'SwitchCase': 1}],
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
    // 在块级作用域外访问块内定义的变量是否报错提示
    'block-scoped-var': 0,
    // if while function 后面的{必须与if在同一行，java风格。
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    // 双峰驼命名格式
    'camelcase': 2,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号， 
    'comma-dangle': [2, 'never'],
    // 控制逗号前后的空格
    'comma-spacing': [2, {'before': false, 'after': true}],
    // 控制逗号在行尾出现还是在行首出现
    'comma-style': [2, 'last'],
    // 圈复杂度
    'complexity': [2, 9],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    'computed-property-spacing': [2, 'never'],
    // TODO 关闭 强制方法必须返回值，TypeScript强类型，不配置
    // 'consistent-return': 0
  }

//
```

## p11-项目规范引入prettier@2.6.1

```
//prettier官网：https://www.prettier.cn/
//安装prettier
yarn add prettier -D

//安装下面eslint-plugin-prettier和eslint-config-prettier
yarn add eslint-plugin-prettier eslint-config-prettier -D
//作用就是解决prettier和eslint的冲突
eslint-plugin-prettier #	将 Prettier 的规则设置到 ESLint 的规则中。
eslint-config-prettier #	关闭 ESLint 中与 Prettier 中会发生冲突的规则。

//在根目录新建.prettier
{
	"useTabs": false,
	"tabWidth": 2,
	"printWidth": 100,
	"singleQuote": true,
	"trailingComma": "none",
	"bracketSpacing": true,
	"semi": true,
	"htmlWhitespaceSensitivity": "ignore",
	"jsxSingleQuote": true
}

//在package.json文件

"scripts": {
    "prettier":"prettier --write"
},
//配置说明
--config .prettierrc.js 意思是使用.prettierrc.js的配置来格式化文件
--write 意思是写入权限
```

## p12-引入压缩插件

### 引入vite-plugin-compression

## p-13-vant

### 引入unplugin-vue-components

yarn add unplugin-vue-components vant -D

配置插件vite.config.ts

```
ts

import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

## 引入样式main.ts

+ import "vant/lib/index.css"

## VITE

### [官网地址](https://vitejs.cn/guide/)

### 遇到的坑

* export和import问题，import.meta.glob
* install第一个参数Vue，vue2和vue3有差异
* require.context使用不了
* 格式化Shift+option+F（Mac）

```
在Windows中，vscode格式化代码快捷键是“Shift+Alt+F”；

在Mac中，vscode格式化代码快捷键是“Shift+Option+F”；

在Ubuntu中，vscode格式化代码快捷键是“Ctrl+Shift+I”。
```
