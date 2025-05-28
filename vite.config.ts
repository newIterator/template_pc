// 打包优化：https://segmentfault.com/a/1190000041464140
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 引入jsx
import vuejsx from "@vitejs/plugin-vue-jsx";
// 引入vant.js
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
// 引入viewport,计算规则就是拿个列子来讲，设计图的尺寸是750px，100% = 750px；1% = 1vw
import postcsspxtoviewport from "postcss-px-to-viewport";
// 这个插件主要是进行gzip或者brotli来压缩资源
import viteCompression from "vite-plugin-compression";
// 引入雪碧图
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://yarnpkg.com/package/ 分析打包资源所占用的空间
import { visualizer } from "rollup-plugin-visualizer";
// 手机端调试工具
// import { viteVConsole } from 'vite-plugin-vconsole'
export default defineConfig(({ mode }:any) => {
  //获取全局变量使用loadEnv
  const envelop = loadEnv(mode, process.cwd());
  return {
    sourceMap: false,
    resolve:{
      alias:{
      '@':path.resolve(__dirname,'/src'),
      }
    },
    plugins: [
      vue(),
      vuejsx(),
      viteCompression(), //.gzip
      Components({
        // 引入vant
        resolvers: [VantResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [
          path.resolve(process.cwd(), "src/assets/svg/icon_vnfwhzkfenp"),
        ],
        symbolId: "icon-[dir]-[name]",
      }),
      // 调试工具
      // viteVConsole({
      //   entry: resolve(__dirname, './src/main.js').replace(/\\/g, '/'),
      //   localEnabled: envelop.NODE_ENV !== 'production', // dev environment
      //   enabled: mode !== 'production', // build production
      //   config: {
      //       maxLogNumber: 1000,
      //       theme: 'light'
      //   }
      // }),
      visualizer(), // 打包后会生成一个stats.html的可视化依赖分析图
    ],
    // 打包的静态资源地址
    base: envelop.VITE_BASE_URL,
    // style 配置
    css: {
      modules: {
        localsConvention: "camelCase", // 默认只支持驼峰，修改为同时支持横线和驼峰
      },
      preprocessorOptions: {
        scss: {
          charset: false,
          main: `@import "@/assets/less/main.scss"`,
        },
      },
      portcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 1920, // 这个里按照phonex的可视宽度375px，实际按照设计图来
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
    // build: {
    //   cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
    //   sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
    //   target: "modules", // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
    //   chunkSizeWarningLimit: 550, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    //   assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    //   minify: "terser", // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
    //   terserOptions: {
    //     compress: {
    //       drop_console: true, // 生产环境去除console
    //       drop_debugger: true, // 生产环境去除debugger
    //     },
    //   },
    //   rollupOptions: {},
    // },
    //服务配置
    server: {
      host: '0.0.0.0',
      port: "2024",
      open: "false", // 设置服务启动时是否自动打开浏览器
      cors: true,
      proxy: {
        api: {
          target: envelop.VITE_APP_API_URL, //请求的数据资源http地址
          changeOrigin: true,
          secure: true,
          //rewrite:(path)=>path.replace('/api/','/')
        },
      },
    },
  };
});
