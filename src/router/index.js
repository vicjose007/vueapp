import { createWebHistory, createRouter } from "vue-router";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import ProductCategory from "../views/ProductCategory.vue"


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
  {
    path: "/ProductCategory",
    name: "ProductCategory",
    component: ProductCategory,

  }
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
    
});


export default router;