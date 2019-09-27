<template>
    <div>
      <!--<Banner></Banner>-->
      <div class="content">
        <el-row :gutter="10">
          <el-col :span="6" ><div class="grid-content bg-purple">
            <LeftMenu @change="change"></LeftMenu>
          </div></el-col>
          <el-col :span="18" ><div class="grid-content bg-purple-light">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/index' }">HOME</el-breadcrumb-item>
              <el-breadcrumb-item>CONTACT</el-breadcrumb-item>
            </el-breadcrumb>
            <div>
              <div class="contact_content">
                <div class="contact_profile">
                  <div>
                    <ul class="user-info">
                      <li>Contact：<div class="user-right">{{ user.username }}</div></li>
                      <li>Phone：<div class="user-right">{{ user.phone }}</div></li>
                      <li>Mail :<div class="user-right">{{ user.mail }}</div></li>
                      <li>Address：<div class="user-right"> {{ user.address }}</div></li>
                    </ul>
                  </div>
                </div>
                <!--<span class="demonstration">Map: </span>
                <div class="contact_map">
                  <el-image :src="user.mapSrc" style="width: 100%;height: 100%">
                    <div slot="placeholder" class="image-slot">
                      loading<span class="dot">...</span>
                    </div>
&lt;!&ndash;                    <div slot="error" class="image-slot">&ndash;&gt;
&lt;!&ndash;                      <i class="el-icon-picture-outline"></i>&ndash;&gt;
&lt;!&ndash;                    </div>&ndash;&gt;
                  </el-image>
                </div>-->
              </div>
            </div>
          </div></el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import LeftMenu from '@/components/common/LeftMenu'
export default {
  name: 'Contact',
  components: {Banner, LeftMenu},
  data () {
    return {
      user: {
        mapSrc: 'static/images/map.jpg',
        username: 'May',
        phone: '18138219389',
        mail: 'Support@corecabe.com',
        address: 'No.6 Yinkeng Road, Shangyuan Village, Qingxi Town,Dongguan, Guangdong,China'
      }
    }
  },
  methods: {
    change (categoryName) { // 接收 子组件的事件
      // console.log('contact 点击左侧菜单 : ')
      // console.log(categoryName)
      // this.$router.push({name: 'ProductList', params: {categoryName: categoryName}})
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .content {
    margin-left: 30px;
    margin-right: 30px;
  }
  .contact_content {
    margin-top: 30px;
  }
  .user-info {
    padding-left: 0px;
    list-style: none;
    li{
      border-bottom: 1px solid #F0F3F4;
      border-top: 0px solid #F0F3F4;
      padding: 11px 0px;
      font-size: 15px;
      font-family: initial;
    }
    .user-right {
      display: inline;
      margin-left: 20px;
      a{
        color: #317EF3;
      }
    }
  }
  .contact_map {
    display: block;
    width: 900px;
    height: 500px;
  }
</style>
