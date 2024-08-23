import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import LoginView from "@/page/login/index.vue";
import HomeView from "@/page/home/index";
import Layout from "@/layout/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: HomeView,
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
