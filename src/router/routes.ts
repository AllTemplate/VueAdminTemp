interface IRoute {
  id: string;
  name: string;
  path: string;
  meta: any;
  component?: string;
  parentId?: string;
  redirect?: string;
}

const routes: IRoute[] = [
  {
    id: "0",
    name: "dashboard",
    path: "/",
    component: "",
    meta: {
      name: "仪表台",
    },
  },
  {
    id: "1",
    name: "user",
    path: "/user",
    component: "",
    meta: {
      name: "用户管理",
    },
  },
  {
    id: "2",
    name: "home",
    path: "/user/home",
    component: "/page/home",
    meta: {
      name: "主页",
    },
    parentId: "1",
  },
  {
    id: "3",
    name: "test",
    path: "/user/test",
    component: "/page/home/test/index.vue",
    meta: {
      name: "测试",
    },
    parentId: "1",
  },
];

export default routes;
