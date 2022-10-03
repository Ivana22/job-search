import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import JobResultsView from "@/views/JobResults.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: "HomeView",
  },
  {
    path: "/jobs/results",
    name: "JobResults",
    component: "JobResultsView",
  },
];

createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
