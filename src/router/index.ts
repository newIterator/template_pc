import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Mange from "@/view/components/system/menu.vue"
// const ldrouter: any = [];
// const files: any = import.meta.globEager(`../view/**/*.router.ts`);
// Object.keys(files).filter((element: any) => {
//   ldrouter.push(...files[element].default);
// });
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../view/index.vue"),
    meta: {
      title: "经济环球",
    },
    children:[
      {
        path: "index",
        component: () => import("../view/components/PageIndex.vue"),
        name: "index",
        meta: {
          title: "大厅",
        },
      },
      {
        path: "sys",
        component: () => import("../view/components/SystemBlock.vue"),
        name: "system",
        meta: {
          title: "系统",
          pageOptions: true
        },
        children:[
          {
            path: "/sys/manage",
            component:() => import("@/view/components/system/menu.vue"),
            name: "manage",
            meta: {
              title: "菜单管理",
              icon:"apps-o",
              pageOptions: true
            },
            // children:[
            //   {
            //     path: "/sys/manage/list",
            //     component:() => import("@/view/components/system/menu.vue"),
            //     name: "manage-list",
            //     meta: {
            //       title: "菜单管理子集",
            //       icon:"apps-o",
            //     }
            //   },
            //   {
            //     path: "/sys/manage/listt",
            //     component:() => import("@/view/components/system/menu.vue"),
            //     name: "manage-listt",
            //     meta: {
            //       title: "菜单管理子集2",
            //       icon:"apps-o",
            //     }
            //   }
            // ]
          },
          {
            path: "/sys/list",
            component: () => import("@/view/components/system/list.vue"),
            name: "list",
            meta: {
              title: "列表管理",
              icon:"apps-o",
              pageOptions: true
            },
          }
        ]
      }
    ]
  },
  {
    path: "/indexB",
    component: () => import("../view/indexB.vue"),
    name: "IndexB",
    meta: {
      title: "经济环球",
    },
  }
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});

// router.beforeEach((to, from, next) => {
//   // if (to.meta.title) {
//   //   let tit: any = to.meta.title;
//   //   document.title = tit;
//   // }
//   // if (to.meta.pw && !lscache.get("pw")) {
//   //   next("/loginpw");
//   // }
//   // if (!lscache.get("token") && to.fullPath !== "/login") {
//   //   next("/login");
//   // }
//   // next(to.fullPath);
//   // console.log("superman",to)
// });
export default router;
