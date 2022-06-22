import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage";
import Contact from "../components/Contact";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
