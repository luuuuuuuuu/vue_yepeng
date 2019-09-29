<template>
  <div class="hello">
    <Banner></Banner>
    <div class="">
      <div class="aboutBox">
        <router-link to="/about"><a href="#" class="aboutMore">MORE +</a></router-link>
        <div class="aboutTitle">
          <h1>Company Profile</h1>
          <span>ABOUT US</span></div>
        <section>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CoreCabe is a comprehensive enterprise dedicated in Consumer Electronics and Computer Accessories & Peripheral; It combines R&D, production, marketing, and service together. The Company's products include HDMI/DisplayPort /USB/DVI/VGA Cable, Adapters and Automobile Wire Harness. Its self-owned brand UCoreCabe is now popularly Welcome and Recognized by customers. CoreCabe with his own technical strength, integrity services, in the high-tech enterprises maintained a healthy, stable and rapid sustainable development.
          CoreCabe aims to Environment Protection and Seek Development from Innovation,It aims to continuously improve the User Experience and has a Fundamental Mission to give back to the community.
          <div class="br_class"/>
          -Business Policy: "Quality First and Customer First "
          <div class="br_class"/>
          -Talent Concept: " To teach one how to fish rather than just giving one a fish"
        </section>
      </div>
    </div>
    <!--产品推荐-->
    <div class="product_recommend">
      <div class="product_recommend_tab">
        <el-tabs @tab-click="tabHandleClick" style="margin-left: 40px;">
          <el-tab-pane label="Main Products" ></el-tab-pane>
        </el-tabs>
        <el-link type="primary" style="margin: -40px 30px 0px 0px; float: right;"><router-link to="/productList">More >></router-link></el-link>
      </div>
      <ProductListBox :product-list="recommendProductsList" :is-recommend="true"></ProductListBox>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner'
import ProductListBox from '@/components/common/ProductListBox'
export default {
  components: {
    ProductListBox,
    Banner
  },
  data () {
    return {
      recommendProductsList: [
        {category: 1, name: 'USB-C CABLE(A-C)', img: 'static/images/products/1/1/1.png', price: '7.99'},
        {category: 2, name: 'USB-C CABLE(C-C with E-marker)', img: 'static/images/products/1/2/1.png', price: '17.99'},
        {category: 3, name: 'USB-C CABLE(C-usb3.0 AF)', img: 'static/images/products/1/3/1.png', price: '9.99'},
        {category: 4, name: 'HDMI CABLE', img: 'static/images/products/2/1.png', price: '9.99'},
        {category: 5, name: 'DISPLAYPORT CABLE', img: 'static/images/products/3/1.png', price: '10.99'}
      ]
    }
  },
  created () {
    // this.productList = this.recommendProductsList
  },
  methods: {
    tabHandleClick (tab, event) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.aboutBox{padding:15px;height:200px; overflow:hidden; margin:15px 0px 0px 0px;background:url(.././assets/aboutbg.jpg) no-repeat;background-size:cover;position:relative}
.aboutBox .aboutTitle{width:100%;overflow:hidden;margin-bottom:5px;}
.aboutBox .aboutTitle h1{font-size:16px;margin:0;color:#fff;display:inline;}
.aboutBox .aboutTitle span{font-size:14px;color:#fff;display:inline}
.aboutBox section{clear: both; padding: 0px 0px 0px 0px;font-size:14px;color:#fff;line-height:30px}
.aboutBox section *{margin:0;padding:0;border:0}
.aboutBox .aboutMore{position:absolute;right:15px;color:#fff;background:#000;font-size:12px;width:60px;text-align:center;}
.aboutBox .aboutMore:hover{background:#fff;color:#8bcf61}

.product_recommend {
  background: #f9f9f9;
  margin-top: 20px;
}
.image-slot {
  width: 100%;
}
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
  margin: 15px 25px 10px 20px;
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
