import { createWebHistory, createRouter } from "vue-router";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";


const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
    
});


export default router;