<template>
    <div class="tab_div" style="margin-bottom: 20px;">
      <el-menu
        :default-active="tabIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link tag="div" to="/index">HOME</router-link></el-menu-item>
        <el-menu-item index="2"><router-link tag="div" to="/about">ABOUT US</router-link></el-menu-item>
        <el-submenu index="3">
          <template slot="title">USB-C CABLE</template>
          <el-menu-item v-for="item in menuItems" :key="item" :index="item"><router-link to="/productList" tag="div">{{item}}</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="4"><router-link ref="tab_4" tag="div" to="/productList">HDMI CABLE</router-link></el-menu-item>
        <el-menu-item index="5"><router-link ref="tab_5" tag="div" to="/productList">DISPLAYPORT CABLE</router-link></el-menu-item>
        <el-menu-item index="6"><router-link tag="div" to="/contact">CONTACT</router-link></el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: function () {
        return [
          'A-C',
          'C-C with E-marker',
          'C-usb3.0 AF'
        ]
      }
    }
  },
  data () {
    return {
      tabIndex: '1',
      watchStorage: '1'
    }
  },
  watch: {
    // 监听路由地址变化
    // $route (to, from) {
    //   let currentPath = to.path
    //   if (currentPath === '/index') {
    //     this.tabIndex = '1'
    //   } else if (currentPath === '/about') {
    //     this.tabIndex = '2'
    //   } else if (currentPath === '/contact') {
    //     this.tabIndex = '6'
    //   } else {
    //     this.tabIndex = this.menuItems[0]
    //   }
    // },
    watchStorage (newVal, oldVal) {
      if (newVal !== '2' && newVal !== '3') {
        this.tabIndex = newVal
      } else if (newVal === '2') {
        this.tabIndex = '4'
      } else if (newVal === '3') {
        this.tabIndex = '5'
      }
    }
  },
  created () {
    window.addEventListener('setItem', () => {
      let newVal = sessionStorage.getItem('watchStorage')
      this.watchStorage = newVal
    })
    let currentPath = this.$route.path
    if (currentPath === '/index') {
      this.tabIndex = '1'
    } else if (currentPath === '/about') {
      this.tabIndex = '2'
    } else if (currentPath === '/contact') {
      this.tabIndex = '6'
    } else {
      this.tabIndex = this.menuItems[0]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (keyPath[0] === '3' || keyPath[0] === '4' || keyPath[0] === '5') {
        // let currentPath = this.$route.path
        if (keyPath[0] === '3') {
          this.resetSetItem('watchStorage', keyPath[1])
        }
        if (keyPath[0] === '4') {
          this.resetSetItem('watchStorage', '2')
        }
        if (keyPath[0] === '5') {
          this.resetSetItem('watchStorage', '3')
        }
      }
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*.tab
    background-color dimgrey
    display: flex
    height: 44px
    line-height: 44px
    font-size: 14px
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: #f5f5f5
      &.router-link-active
         .tab-link
           color: #00b5a4
           border-bottom: 4px solid #00b5a4
        &:hover
          background-color: #d9d9d9
          cursor:pointer*/
</style>
