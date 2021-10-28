import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import product from "../views/product.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/Seo",
    name: "Seo",
    component: () =>
      import("../views/Seo.vue"),
  },
  {
    path: "/d",
    name: "D",
    component: () =>
      import("@/components/home/D.vue"),
  },
  {
    path: "/friends",
    name: "friends",
    component: () =>
      import("../views/friends.vue"),
	  children:[
	  	{path:"propst",
	  	name:"propst",
	  	component: () => import("../views/propst.vue")}
	  ]
  },
  {
    path: "/fenlei",
    name: "fenlei",
    component: () =>
      import("../views/fenlei.vue"),
  },
  {
	  path:"/categoryList/:id",
	  name:"categoryList",
	  component: () =>
	    import("../views/categoryList.vue"),
		props:true
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import("../views/cart.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("../views/user.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component:product,
	props:true
  },
  {
    path: "/carts",
    name: "carts",
    component: () =>
      import("../views/carts.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
