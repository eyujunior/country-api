import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CountryDetail from "../components/Country/CountryDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country/:name",
    name: "Detail",
    props: true,
    component: CountryDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
