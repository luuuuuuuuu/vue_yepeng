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
              <el-breadcrumb-item>ABOUT US</el-breadcrumb-item>
            </el-breadcrumb>
            <div style="background-color: #fafafa;border-radius: 3%;">
              <div class="about_content">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        CoreCabe is a comprehensive enterprise dedicated in Consumer Electronics and Computer Accessories & Peripheral; It combines R&D, production, marketing, and service together.
                The Company's products include HDMI/DisplayPort /USB/DVI/VGA Cable, Adapters and Automobile Wire Harness. Its self-owned brand UCoreCabe is now popularly Welcome and Recognized by customers.
                CoreCabe with his own technical strength, integrity services, in the high-tech enterprises maintained a healthy, stable and rapid sustainable development.
                <br/>
                <div>
                  CoreCabe aims to Environment Protection and Seek Development from Innovation,It aims to continuously improve the User Experience and has a Fundamental Mission to give back to the community.
                </div>
                <div>
                  -Business Policy: "Quality First and Customer First "
                </div>
                <div>
                  -Talent Concept: " To teach one how to fish rather than just giving one a fish"
                </div>
                <div>
                  Certification: HDMI Adopter (Adopter No.:11865)USB-IF Member (Vendor ID:11219 )ISO9001:2008(Certificate No.10115Q14834 ROM)
                </div>
                <div class="br_class"/>
                <div>
                  If there is any flaw on our products,we will do free return and full refund to you.
                </div>
                <div class="br_class"/>
                <div>
                  We provide online customer service within the business hours from 16:00-24:00 PST/PDT everyday.
                </div>
                <div class="br_class"/>
                <div>
                  Any messages will be answered within 2 hour.and the messages will be answered within 12 hours if sent at the off hours.
                </div>
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
  name: 'About',
  components: {LeftMenu, Banner},
  data () {
    return {
    }
  },
  methods: {
    change (categoryName) {
      // 不使用下面三行
      // console.log('about.vue 点击左侧菜单: change')
      // console.log(categoryName)
      // this.$router.push({name: 'ProductList', params: {categoryName: categoryName}})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.content {
  margin-left: 30px;
  margin-right: 30px;
}
.about_content {
  width:92%;
  border: 20px solid #fafafa;
  margin: 30px 10px 0px 20px;
  overflow:hidden;
  word-wrap: break-word;
  line-height:2em;
}
.br_class{
  height: 5px;
}
</style>
