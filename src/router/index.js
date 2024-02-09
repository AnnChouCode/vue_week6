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
        component: () => import('../views/HomeView.vue'),
        meta: {
          title: 'Dessert Time'
        }
      },
      {
        path: 'productlist',
        name: 'productlist',
        component: () => import('../views/UserProductList.vue'),
        meta: {
          title: '產品列表 - Dessert Time'
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UserCart.vue'),
        meta: {
          title: '購物車 - Dessert Time'
        }
      },
      {
        path: 'userlogin',
        name: 'userlogin',
        component: () => import('../views/UserLogin.vue'),
        meta: {
          title: '登入 - Dessert Time'
        }
      },
      {
        path: 'productinfo/:id',
        component: () => import('../views/UserProductInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '產品資訊 - Dessert Time'
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
        component: () => import('../views/admin/AdminDashBoard.vue'),
        meta: {
          title: '使用者後台 - Dessert Time'
        }
      },
      {
        path: '/admin/products',
        name: 'products',
        component: () => import('../views/admin/AdminProductList.vue'),
        meta: {
          title: '產品管理 - Dessert Time'
        }
      },
      {
        path: '/admin/orders',
        name: 'orders',
        component: () => import('../views/admin/AdminOrders.vue'),
        meta: {
          title: '訂單管理 - Dessert Time'
        }
      },
      {
        path: '/admin/productinfo/:id',
        component: () => import('../views/admin/AdminProductInfo.vue'),
        props: (route) => {
          return {
            id: route.params.id
          }
        },
        meta: {
          title: '使用者後台 - Dessert Time'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '404 Not Found - Dessert Time'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
  // 對於所有路由導航，簡單地讓頁面滾動到頂部
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

// router 命名
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
