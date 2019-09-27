<template>
    <div class="banner">
      <el-carousel :interval="3000" type="" height="300px">
        <el-carousel-item v-for="(item,index) in bannerList" :key="item">
          <el-image :src="item" style="height: 300px;width: 100%;" @click="clickBanner(index)"></el-image>
        </el-carousel-item>
      </el-carousel>
      <el-divider></el-divider>
    </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      bannerList: [
        'static/images/banner/1.png',
        'static/images/banner/2.png',
        'static/images/banner/3.png',
        'static/images/banner/4.png',
        'static/images/banner/5.png'
      ]
    }
  },
  methods: {
    clickBanner (bannerIndex) {
      if (bannerIndex === 0) {
        this.resetSetItem('watchStorage', 'A-C')
      } else if (bannerIndex === 1) {
        this.resetSetItem('watchStorage', 'C-C with E-marker')
      } else if (bannerIndex === 2) {
        this.resetSetItem('watchStorage', 'C-usb3.0 AF')
      } else if (bannerIndex === 3) {
        this.resetSetItem('watchStorage', '2')
      } else if (bannerIndex === 4) {
        this.resetSetItem('watchStorage', '3')
      }
      this.$router.push(
        {name: 'ProductList', params: { bannerIndex: bannerIndex }}
      )
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-image :hover{
    cursor:pointer;
  }
</style>
