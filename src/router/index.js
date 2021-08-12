import { createRouter, createWebHistory } from "vue-router";
import List from "../components/List.vue";
import Cart from "../components/Cart.vue";
import CartPage from "../components/CartPage.vue";
const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/cartpage",
    name: "CartPage",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
