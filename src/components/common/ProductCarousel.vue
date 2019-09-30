<template>
    <div>
      <el-carousel class="carousel_img_div" :interval="2000" :loop="false" indicator-position="none">
        <el-carousel-item v-for="item in categoryProductList" :key="item.img">
          <el-image :src="item.img" style="height: 300px;width: 300px;text-align: center;" @click="clickImg(item.img)"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
export default {
  name: 'ProductCarousel',
  props: {
    categoryProductList: {
      type: Array,
      default: function () {
        return [
          { img: 'static/images/products/1/1/1.png',
            name: 'static/images/products/1/1/1.png'
          }
        ]
      }
    }
  },
  methods: {
    clickImg (img) {
      // 事件传递
      this.$emit('clickImg', img)
    }
  }
}
</script>

<style scoped>
.carousel_img_div {
  border: #409eff14 solid 2px;
}
.el-image :hover{
  cursor:pointer;
}
/*.el-carousel__item h3 {*/
/*  color: #475669;*/
/*  font-size: 18px;*/
/*  opacity: 0.75;*/
/*  line-height: 300px;*/
/*  margin: 0;*/
/*}*/

/*.el-carousel__item:nth-child(2n) {*/
/*  background-color: #99a9bf;*/
/*}*/

/*.el-carousel__item:nth-child(2n+1) {*/
/*  background-color: #d3dce6;*/
/*}*/
</style>
