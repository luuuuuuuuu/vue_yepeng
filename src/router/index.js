import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductList from '@/components/ProductList'
import ProductDetail from '@/components/ProductDetail'
import Contact from '@/components/Contact'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页跳转
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
