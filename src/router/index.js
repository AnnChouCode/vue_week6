import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: () => import('../views/UserFrontView.vue'),
    children: [
      {
        path: 'home',
        name: 'userhome',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('../views/UserProductList.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'userlogin',
        name: 'userlogin',
        component: () => import('../views/UserLogin.vue')
      },
      {
        path: 'productinfo/:id',
        component: () => import('../views/UserProductInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        }
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../views/admin/AdminLayout.vue'),
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/AdminDashBoard.vue')
      },
      {
        path: '/admin/products',
        name: 'products',
        component: () => import('../views/admin/AdminProductList.vue')
      },
      {
        path: '/admin/orders',
        name: 'orders',
        component: () => import('../views/admin/AdminOrders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
