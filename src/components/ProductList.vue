<template>
  <div>
    <!--<Banner></Banner>-->
    <div class="content">
      <el-row :gutter="10">
        <el-col :span="6" ><div class="grid-content bg-purple">
          <LeftMenu @change="change" :active-index="activeIndex"></LeftMenu>
        </div></el-col>
        <el-col :span="18" ><div class="grid-content bg-purple-light">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">HOME</el-breadcrumb-item>
            <el-breadcrumb-item>PRODUCT LIST</el-breadcrumb-item>
            <el-breadcrumb-item>{{productName}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div style="background-color: #fafafa;border-radius: 3%;">
            <div class="about_content">
              <ProductListBox :product-list="productList"></ProductListBox>
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
import ProductListBox from '@/components/common/ProductListBox'
export default {
  name: 'Product',
  components: {ProductListBox, Banner, LeftMenu},
  created () {
    window.addEventListener('setItem', () => {
      let newVal = sessionStorage.getItem('watchStorage')
      this.watchStorage = newVal
    })
    this.getCategoryNameList()
    if (this.productList.length <= 0) {
      this.productList = this.categoryProductData[this.categoryNameList[0]]['A-C']
    }
    // 页面加载完成事件
    this.$nextTick(() => {
      this.changeDataByRouterKeyPath()
    })
  },
  watch: {
    watchStorage (newVal, oldVal) {
      if (newVal !== '2' && newVal !== '3') {
        this.productList = this.categoryProductData['USB-C CABLE'][newVal]
        this.activeIndex = newVal
        this.productName = 'USB-C CABLE' + ' > ' + newVal
      } else if (newVal === '2') {
        this.productList = this.categoryProductData['HDMI CABLE']
        this.activeIndex = '4'
        this.productName = 'HDMI CABLE'
      } else if (newVal === '3') {
        this.productList = this.categoryProductData['DISPLAYPORT CABLE']
        this.productName = 'DISPLAYPORT CABLE'
        this.activeIndex = '5'
      }
    }
  },
  activated () {
    // banner点击进入
    let bannerIndex = this.$route.params.bannerIndex
    if (bannerIndex !== undefined) {
      console.log('banner click bannerIndex ')
      console.log(bannerIndex)
      if (bannerIndex === '0') {
        this.resetSetItem('watchStorage', 'A-C')
      } else if (bannerIndex === '1') {
        this.resetSetItem('watchStorage', 'C-C with E-marker')
      } else if (bannerIndex === '2') {
        this.resetSetItem('watchStorage', 'C-usb3.0 AF')
      } else if (bannerIndex === '3') {
        this.resetSetItem('watchStorage', '2')
      } else if (bannerIndex === '4') {
        this.resetSetItem('watchStorage', '3')
      }
      // 首次从banner进入
      if (bannerIndex === 0) {
        this.productList = this.categoryProductData['USB-C CABLE']['A-C']
        this.activeIndex = '1'
        this.productName = 'USB-C CABLE' + '  ' + 'A-C'
      } else if (bannerIndex === 1) {
        this.productList = this.categoryProductData['USB-C CABLE']['C-C with E-marker']
        this.activeIndex = '2'
        this.productName = 'USB-C CABLE' + '  ' + 'C-C with E-marker'
      } else if (bannerIndex === 2) {
        this.productList = this.categoryProductData['USB-C CABLE']['C-usb3.0 AF']
        this.activeIndex = '3'
        this.productName = 'USB-C CABLE' + '  ' + 'C-usb3.0 AF'
      } else if (bannerIndex === 3) {
        this.productList = this.categoryProductData['HDMI CABLE']
        this.activeIndex = '4'
        this.productName = 'HDMI CABLE'
        this.tabIndex = '4'
      } else if (bannerIndex === 4) {
        this.productList = this.categoryProductData['DISPLAYPORT CABLE']
        this.productName = 'DISPLAYPORT CABLE'
        this.tabIndex = '5'
      }
    }
    // 从 顶部 Tab 点击 (顶部路由 传值)
    let keyPath = this.$route.params.keyPath
    if (keyPath !== undefined) {
      console.log('tab click keyPath')
      console.log(keyPath)
      console.log('this.watchStorage')
      console.log(this.watchStorage)
      // 1含有子菜单,  2 3 不含
      if (this.watchStorage === '1') {
        console.log('11111111111')
        this.productList = this.categoryProductData['USB-C CABLE'][keyPath[1]]
        this.activeIndex = '3'
        this.productName = 'USB-C CABLE' + '  ' + [keyPath[1]]
      } else if (this.watchStorage === '2') {
        this.productList = this.categoryProductData['HDMI CABLE']
        this.activeIndex = '4'
        this.productName = 'HDMI CABLE'
      } else if (this.watchStorage === '3') {
        this.productList = this.categoryProductData['DISPLAYPORT CABLE']
        this.productName = 'DISPLAYPORT CABLE'
      }
    }
    // 从左侧 Menu 点击
    // if (keyPath !== undefined) {
    //   this.activeIndex = keyPath[1]
    //   this.productList = this.categoryProductData[keyPath[1]]
    // } else {
    //   this.activeIndex = this.categoryNameList[0]
    // }
  },
  data () {
    const USB_C_CABLE_OBJ = {
      'A-C': this.getProductArr('static/images/products/1/1', 8, 'png'),
      'C-C with E-marker': this.getProductArr('static/images/products/1/2', 8, 'png'),
      'C-usb3.0 AF': this.getProductArr('static/images/products/1/3', 12, 'png')
    }
    const HDMI_CABLE = this.getProductArr('static/images/products/2', 8, 'png')
    const DISPLAYPORT_CABLE = this.getProductArr('static/images/products/3', 6, 'png')
    return {
      productName: 'USB-C CABLE > A-C',
      productList: [],
      categoryProductData: {
        'USB-C CABLE': USB_C_CABLE_OBJ,
        'HDMI CABLE': HDMI_CABLE,
        'DISPLAYPORT CABLE': DISPLAYPORT_CABLE
      },
      categoryNameList: [],
      activeIndex: '',
      watchStorage: '1',
      tabIndex: '3'
    }
  },
  methods: {
    tabHandleSelect () {
      console.log('pList.vue  tab  click')
    },
    changeDataByRouterKeyPath () {
      let keyPath = this.$route.params.keyPath
      if (keyPath !== undefined) {
        keyPath = keyPath[0]
        // 1含有子菜单,  2 3 不含
        if (keyPath === '1') {
          this.productList = this.categoryProductData['USB-C CABLE']['A-C']
          this.activeIndex = '1'
          this.productName = 'USB-C CABLE' + '  ' + 'A-C'
        } else if (keyPath === '2') {
          this.productList = this.categoryProductData['USB-C CABLE']['C-C with E-marker']
          this.activeIndex = '2'
          this.productName = 'USB-C CABLE' + '  ' + 'C-C with E-marker'
        } else if (keyPath === '3') {
          this.productList = this.categoryProductData['USB-C CABLE']['C-usb3.0 AF']
          this.activeIndex = '3'
          this.productName = 'USB-C CABLE' + '  ' + 'C-usb3.0 AF'
        } else if (keyPath === '4') {
          this.productList = this.categoryProductData['HDMI CABLE']
          this.activeIndex = '4'
          this.productName = 'HDMI CABLE'
        } else if (keyPath === '5') {
          this.productList = this.categoryProductData['DISPLAYPORT CABLE']
          this.productName = 'DISPLAYPORT CABLE'
        }
      }
    },
    getProductArr (url, counts, type) {
      let arr = []
      for (let i = 1; i <= counts; i++) {
        let subImgObj = {}
        let img = url + '/' + i + '.' + type
        subImgObj.img = img
        subImgObj.name = img
        arr.push(subImgObj)
      }
      return arr
    },
    getCategoryNameList () {
      let array = []
      let localCategoryProductData = this.categoryProductData
      for (let keyName in localCategoryProductData) {
        array.push(keyName)
      }
      this.categoryNameList = array
    },
    change (categoryName) {
      // console.log('ProductList 左侧菜单点击 key : ' + categoryName)
      // if (categoryName.startsWith('USB-C CABLE')) {
      //   let arr = categoryName.split('_')
      //   this.productList = this.categoryProductData[arr[0]][arr[1]]
      //   this.productName = arr[0] + ' > ' + arr[1]
      // } else {
      //   this.productList = this.categoryProductData[categoryName]
      //   this.productName = categoryName
      // }
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .content {
    margin-left: 30px;
    margin-right: 30px;
  }
  .about_content {
    margin-top: 20px;
  }
</style>
