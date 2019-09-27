<template>
    <div>
      <div class="product_list_box">
        <div v-for="(item) in productList" :key="item.img" class="product_div">
          <el-card shadow="hover" :body-style="{ padding: '0px',marginBottom: '-4px'}" class="product_card" >
            <el-image :src="item.img" class="product_image" @click="clickImg(item.img)" lazy>
              <!--<div slot="placeholder">
                <img src="./../../assets/logo.png" class="image-slot">
              </div>-->
              <div slot="error" class="image-slot">
                <img src="./../../assets/logo.png" class="image-slot">
              </div>
            </el-image>
          </el-card>
          <span class="product_name"></span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductListBox',
  props: {
    productList: {
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
    clickImg (url) {
      this.resetSetItem('watchStorageImageInfo', url)
      // 如果当前路径不在/ProductDetail 就跳转
      if (this.$route.path !== '/productDetail') {
        this.$router.push({name: 'ProductDetail', params: {url: url}})
      }
    }
  }
}
</script>

<style scoped>
  .product_list_box {
    position: static;
    display: inline-block;
    margin: 0 10px 0 10px;
  }
  .product_div {
    float: left;
    width: 250px;
    height: 250px;
    border: 2px solid #f9f9f9;
  }
  .el-image :hover{
    cursor:pointer;
  }
  .product_card {
    margin: 3px 25px 1px 20px;
    width: 210px;
    height: 210px;
  }
  .product_image {
    width: 100%;
    height: auto;
  }
  .product_name {
    vertical-align:middle;
    display: grid;
    text-align: center;
  }
</style>
