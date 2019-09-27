<template>
    <div class="tab_div">
      <el-menu
        :default-active="activeIndex"
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
          <el-menu-item v-for="item in menuItems" :key="item" :index="item">{{item}}</el-menu-item>
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
          'menu-1',
          'menu-2',
          'menu-3'
        ]
      }
    }
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  created () {
    let currentPath = this.$route.path
    if (currentPath === '/index') {
      this.activeIndex = '1'
    } else if (currentPath === '/about') {
      this.activeIndex = '2'
    } else if (currentPath === '/contact') {
      this.activeIndex = '6'
    } else {
      this.activeIndex = this.menuItems[0]
    }
  },
  watch: {
    $route (to, from) {
      let currentPath = to.path
      if (currentPath === '/index') {
        this.activeIndex = '1'
      } else if (currentPath === '/about') {
        this.activeIndex = '2'
      } else if (currentPath === '/contact') {
        this.activeIndex = '6'
      } else {
        this.activeIndex = this.menuItems[0]
      }
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log('点击 Tab , keyPath: ' + keyPath)
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
          this.$router.push(
            {name: 'ProductList', params: { keyPath: keyPath }}
          )
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
