import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import OrdersView from "../views/OrdersView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/services", component: ServicesView },
  { path: "/orders", component: OrdersView },
  { path: "/contact", component: ContactView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
