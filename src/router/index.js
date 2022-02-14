import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/SignUp.vue"
import Employee  from "../views/Employees.vue"
import Test from "../views/Test.vue"

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/employees",
    name: "Employee",
    component: Employee,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
