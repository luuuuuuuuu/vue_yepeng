// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Form,
  FormItem,
  Input,
  InputNumber,
  Dialog,
  Button,
  Message,
  MessageBox,
  MenuItemGroup,
  Divider,
  Backtop,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Link,
  Tabs,
  TabPane,
  Menu,
  Submenu,
  MenuItem,
  Image,
  Card,
  Icon,
  Container,
  Header,
  Main,
  Footer,
  Row,
  Col,
  Carousel,
  CarouselItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 刷新页面自动弹框使用该方式 Vue.component(MessageBox.name, MessageBox)
// 组件 (Component) 是用来构成你的 App 的业务模块，它的目标是 App.vue。
// 插件 (Plugin) 是用来增强你的技术栈的功能模块，它的目标是 Vue 本身。
Vue.component(MessageBox.name, MessageBox)
Vue.component(Message.name, Message)

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(MenuItemGroup)
Vue.use(Divider)
Vue.use(Backtop)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Link)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Image)
Vue.use(Card)
Vue.use(Icon)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'watchStorage') {
    // 创建一个StorageEvent事件
    let newStorageEvent = document.createEvent('StorageEvent')
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val)
        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null)
        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal)
  }
  if (key === 'watchStorageImageInfo') {
    // 创建一个StorageEvent事件
    let newStorageEvent = document.createEvent('StorageEvent')
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val)
        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null)
        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal)
  }
}
