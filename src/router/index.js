import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index.vue";
import Login from "../views/login";
import NotFound from "../views/Tmp.vue";
import basics from './basic' //基础管理
import Tenant from '../views/basic/tenant/Tenant'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/manage",
    name: "Home",
    component: Home,
    meta: { title:'首页'},
    children: [
      {
        path: "/manage/tenant",
        name: "Displace",
        meta: { title:'基础管理'},
        component: Tenant,
        children:basics
      },
      {
        path: "/manage/tmp",
        name: "NotFound",
        component: NotFound,
      },
      { path: '*', redirect: '/manage/tmp', hidden: true }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
