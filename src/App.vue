<template>
  <div id="app">
    <el-container>
      <el-header height="185px" style="margin-top: -10px;">
        <el-row>
          <div class="header_top_text">Welcom To Visit Our Web: <a href="http://www.corecabe.com">http://www.corecabe.com</a></div>
          <el-divider content-position="left"></el-divider>
          <el-col :span="12">
            <div>
              <img src="./assets/logo.png" style="width: 380px; height: 75px; float: left;">
            </div>
          </el-col>
          <el-col :span="12">
            <!--<div style="float: right;margin: 30px 35px 0 0;">
              电话: <i class="el-icon-phone-outline"></i>&nbsp;<span class="tel"> +86 18138219389</span>
            </div>-->
          </el-col>
        </el-row>
        <Tab :menu-items="menuItems"></Tab>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </el-main>
      <el-footer height="0">
        <div class="copyright">
          <!--<p>
            <a href="about.html">公司简介</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="product.html">产品中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="contact.html">联系我们</a>
          </p>
          <p class="copyright_p">© 2014-2024 LuDi All Rights Reserved</p>-->
        </div>
      </el-footer>
    </el-container>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Tab from '@/components/common/Tab'

export default {
  name: 'App',
  components: {
    Tab
  },
  data () {
    return {
      menuItems: [
        'A-C',
        'C-C with E-marker',
        'C-usb3.0 AF'
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 15px;
}
.header_top_text{
  width: auto;
  float: left;
  line-height: 30px;
  font-size: 12px;
  margin-left: 18px;
}
.copyright {
  line-height: 20px;
  text-align: center;
  background-color: #435669;
  color: #eee;
  padding: 20px 0px 10px 0px;
  margin-top: 0px;
  font-size: 12px;
}
.copyright a {
  color: #C0C0C3;
  text-decoration: none;
}
.copyright_p {
  letter-spacing: 4px;
}
.copyright a:hover {
  color: #ffffff;
}
.tel {
  text-align: right;
  color: #807b79;
  font-weight: bold;
  font-size: 17px;
}
</style>
