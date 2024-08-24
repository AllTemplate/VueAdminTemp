import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import Layout from "@/layout/index.vue";
import LoginView from "@/page/login/index.vue";
import HomeView from "@/page/user/home/index";
import TestView from "@/page/user/test";

import routeList from "./routes";

const generateRoute = (routes: any, parentId = null) => {
  return routes
    .filter((route: any) => route.parentId === parentId)
    .map((route: any) => ({
      ...route,
      children: generateRoute(routes, route.id),
    }));
};

const routerList = generateRoute(routeList);

console.log(routerList);

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    name: "dashboard",
    meta: {
      name: "首页",
    },
    redirect: "/user/home",
    children: [
      {
        path: "/user",
        name: "user",
        meta: {
          name: "用户管理",
        },
        children: [
          {
            path: "/user/home",
            name: "home",
            meta: {
              name: "主页",
            },
            component: HomeView,
          },
          {
            path: "/user/test",
            name: "test",
            meta: {
              name: "测试",
            },
            component: TestView,
          },
        ],
      },
    ],
  },
  { path: "/login", component: LoginView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
