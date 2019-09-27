<template>
    <div>
      <div>
        <span style="margin-left: 27px;font-weight: 600;">Product Menu</span>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-vertical-demo"
          style="width: 80%;"
          @select="handleSelect"
        >
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>USB-C CABLE</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="A-C">A-C</el-menu-item>
              <el-menu-item index="C-C with E-marker">C-C with E-marker</el-menu-item>
              <el-menu-item index="C-usb3.0 AF">C-usb3.0 AF</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">HDMI CABLE</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">DISPLAYPORT CABLE</span>
          </el-menu-item>
<!--          <el-menu-item v-for="item in menuItems" :key="item" :index="item">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">{{item}}</span>
          </el-menu-item>-->
        </el-menu>
      </div>
      <div class="contact_card">
        <el-card class="box-card">
          <div class="clearfix">
            <span style="font-style: oblique;font-family: -webkit-body;font-weight: 800;">Contact Us</span>
          </div>
          <ul class="user-info">
            <li>Contact :<div class="user-right">{{ user.username }}</div></li>
            <li>Phone :<div class="user-right">{{ user.phone }}</div></li>
            <li>Mail :<div class="user-right">{{ user.mail }}</div></li>
            <li>Address :<div class="user-right" style="float: none;margin-top: 10px;"> {{ user.address }}</div></li>
          </ul>
        </el-card>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: {
    activeIndex: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      user: {
        username: 'May',
        phone: '18138219389',
        mail: 'Support@corecabe.com',
        address: 'No.6 Yinkeng Road, Shangyuan Village, Qingxi Town,Dongguan, Guangdong,China'
      },
      menuItems: [
        'HDMI CABLE',
        'DISPLAYPORT CABLE'
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // 子组件事件传递到 -> ProductList.vue
      this.$emit('change', key)
      // console.log('leftMenu 点击左侧菜单: keyPath: ')
      // console.log(keyPath)
      if (keyPath[0] === '3' || keyPath[0] === '4' || keyPath[0] === '5') {
        let currentPath = this.$route.path
        if (keyPath[0] === '3') {
          this.resetSetItem('watchStorage', keyPath[1])
        }
        if (keyPath[0] === '4') {
          this.resetSetItem('watchStorage', '2')
        }
        if (keyPath[0] === '5') {
          this.resetSetItem('watchStorage', '3')
        }
        if (currentPath !== '/productList') {
          // console.log('跳转至 productList')
          this.$router.push(
            {name: 'ProductList', params: { keyPath: keyPath }}
          )
        }
      }
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
.user-info {
  padding-left: 0px;
  list-style: none;
  li{
    border-bottom: 1px solid #F0F3F4;
    border-top: 0px solid #F0F3F4;
    padding: 11px 0px;
    font-size: 13px;
  }
  .user-right {
    float: right;
    a{
      color: #317EF3;
    }
  }
}
</style>
