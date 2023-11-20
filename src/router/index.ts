import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import TrackerManagment from "../views/TrackerManagement.vue";
import SandBox from "../views/SandBox.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: SandBox,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
