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
            <el-breadcrumb-item>PRODUCT DETAIL</el-breadcrumb-item>
          </el-breadcrumb>
          <div>
            <div class="contact_content" style="margin-top: 30px;">
              <div class="contact_profile">
                  <div class="detail_image" style="float: left;margin-right: 30px;height: 630px;">
                    <el-image
                      style="width: 300px; height: 300px;border: #409eff63 solid 2px;"
                      :src="url"
                      :preview-src-list="srcList">
                    </el-image>
                    <product-carousel @clickImg="clickImage" v-show="categoryProductList.length > 0" :category-product-list="categoryProductList" style="margin-bottom: 20px;"></product-carousel>
                  </div>
                <div class="detail_text" style="font-size: 17px;margin-right: 15px;">
                  <div>
                    Product name:
                    <div>{{pNameDesc}}</div>
                    <div class="br_class" style="height: 10px;"></div>
                    Product details:
                    <div v-for="(item) in pDetailDescArr" :key="item" class="product_desc">{{item}}</div>
                  </div>
                  <div style="margin-top: 20px;">
                    Product Price:
                    <div style="font-family: initial;">
                      <span class="product_price" style="margin-left: 10px;">$&nbsp;<span style="font-size: 25px">{{categoryPrice.split('.')[0]}}</span>.{{categoryPrice.split('.')[1]}}</span>
                    </div>
                    <el-input-number v-model="form.quantity" @change="handleChange" size="small" :min="1" :max="1000" label="描述文字"></el-input-number>
                    <br>
                    <el-button style="margin-top: 10px;" type="primary" plain @click="dialogFormVisible = true"><i class="el-icon-thumb"></i> Buy Now</el-button>
                  </div>
                </div>
              </div>
              <!-- dialog表单 start -->
              <div>
                <el-dialog title="welcome to corecabe, we will contact you after confirm order !" :visible.sync="dialogFormVisible" center>
                  <el-form :model="form" ref="form" :rules="rules" style="margin-right: 50px;">
                    <el-form-item label="Name" prop="name" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone" prop="phone" :label-width="formLabelWidth">
                      <el-input v-model="form.phone" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Mail" prop="mail" :label-width="formLabelWidth">
                      <el-input v-model="form.mail" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Quantity" prop="quantity" :label-width="formLabelWidth">
                      <el-input-number v-model="form.quantity" @change="handleChange" :min="1" :max="100" label="描述文字"></el-input-number>
                    </el-form-item>
                    <el-form-item label="Content" prop="content" :label-width="formLabelWidth">
                      <el-input v-model="form.content" autocomplete="off"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="cancelForm()">Cancel</el-button>
                    <el-button type="primary" @click="submitForm('form')">OK</el-button>
                  </div>
                </el-dialog>
              </div>
              <!-- dialog表单 end -->
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
import ProductCarousel from '@/components/common/ProductCarousel'
export default {
  name: 'detail',
  components: {ProductCarousel, Banner, LeftMenu},
  data () {
    return {
      activeIndex: '1',
      dialogFormVisible: false,
      form: {
        name: '',
        phone: '',
        mail: '',
        quantity: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please enter your name', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Please enter your phone', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Please enter your mail', trigger: 'blur' }
        ],
        quantity: [
          {required: true, message: 'Please enter product quantity'},
          {type: 'number', message: 'only number'}
        ]
      },
      formLabelWidth: '100px',
      watchStorageImageInfo: null,
      url: 'static/images/products/1/1/1.png',
      srcList: [
        'static/images/products/1/1/1.png'
      ],
      categoryPrice: '9.9',
      categoryProductList: [],
      pNameDesc: 'USB Type C 3.0 Cable, CORECABE USB A to Type C Fast Charging Nylon Braided Cord Compatible with Galaxy S10 S9 S8 Plus Note 9 8，MacBook, iPad Pro 2018,LG V30,V20,G6 and More',
      pDetailDescArr: [
        '【Fast Charging and Sync】:Transfer speed up to 480Mbps, Safe charging at up to 3A is ensured by high-standard components,Super fast charging and Super fast transmission (up to max 5Gbps).',
        '【Superb Backup Charging】:Compatible with any charging adaptor, multiport charging station or power bank; the perfect substitute for your missing charging cable.',
        '【Extreme Durability & Tangle-free Design】:With a tested 5000+ bend lifespan, Premium nylon braided type c cable adds additional durability and tangle-free.',
        '【Extensive Compatibility】:When used with a charger or power bank that supports Samsung Adaptive Fast Charging or Qualcomm Quick Charge, these cables will Fast Charge your Samsung Galaxy S8/S9/S10 Plus/Note 8 Note 9 or other compatible model.',
        '【What you get】: We provide the Nylon Braided USB Type-C Cable with worry-free 18-month warranty and 24/7 customer service.'
      ],
      pNameDesc_2: 'USB C to USB C 5A Cable (Gen2), CORECABE [2 Pack] 100W USB Power Delivery (PD) USB 3.1 Type-C Fast Charging Braided with E-Marker Compatible for Thunderbolt 3, Pixel, MacBook, Galaxy S10/S9/S8',
      pDetailDescArr_2: [
        '· USB-C Cable with E-Marker Chipset, USB 3.1 Gen 2 standard, supports 100W PD and 20V/5A fast charging',
        '· With E-Marker smart chip automatically adjust current, fast charging all your USB type c devices',
        '· This cable delivers up to 20Gbps super speed;Tested with Samsung Portable SSD X5 up to 1671MB/s',
        '· Compatible with: Macbook (Pro), Google Chromebook Pixel,Thunderbolt 3 SSD,Galaxy S10 S9 S8 plus ,etc',
        '· What You Get: 2x 1.5ft Braided UseBean 5A USB-C 3.1 Gen2 cable with 18-month warranty'
      ],
      pNameDesc_3: 'USB C to USB 3.0 Adapter, CORECABE [0.5ft 2 Pack] Type C Thunderbolt 3 OTG Cable USB-C Male to USB A Female Convertor Compatible with MacBook Air/Pro 2018, Galaxy S10 S9 S8 Note 8 9, Pixel 2 3 XL',
      pDetailDescArr_3: [
        '· [USB On-the Go] Uses USB OTG Technology, converts USB-C Female into USB-A Female.',
        '· [USB 3.0 Super Speed Transfer]: Full USB 3.0 super speed data transfer up to 5Gbps, 10x faster than 2.0.',
        '· [Nylon Tangle-free Design] Premium nylon braided cable adds additional durability and tangle free.',
        '· [Compatibility] Compatible with all USB C devices, Samsung Galaxy S9 S8 Plus, Apple New Macbook Pro.',
        '· [What you get] You can get 2pack USB C to USB Adapter in black with 18-month warranty.'
      ],
      pNameDesc_4: 'HDMI 2.0 Cable, CORECABE High-Speed HDMI Cable 4K@60Hz,30AWG Braided HDMI Cord, Audio Return(ARC) Compatible with a UHD TV, Blu-ray, Xbox, PS4, PS3, PC, Projectors Any Other Hdmi-Enable Device',
      pDetailDescArr_4: [
        '· Support Ethernet, 3D, 4K video at 60 Hz, 2160p, 48 bit/px color depth and Audio Return Channel (ARC),backwards compatible with HDMI 1.4 & 1.3/1.2/1.1version ',
        '· Supports 3D Model Formats and Content，Supports Quick Frame Transport(QFT) , Supports Transmission Rate Up to 18Gbps',
        '· Extensive Compatible with Apple TV, LG TV, Samsung QLED TV, Gaming Consoles, Xbox, Playstation, PS3, PS4 Pro, Projectors Any Other Hdmi-Enable Device, etc.',
        '· Ultra Durability Design: Built with premium slim aluminum shell and high-quality nylon braided jacket, this HDMI cord can withstand bend test of 10,000+ times',
        '· What You Get: 1 Pack Braided CORECABE HDMI 2.0 Cable with an 18-month warranty.'
      ],
      pNameDesc_5: 'DisplayPort to HDMI Cable, CORECABE [6.6ft] High Speed DP to HDMI 4K@60Hz Black Braided Compatible for Lenovo, Dell, HP, ASUS',
      pDetailDescArr_5: [
        '· Supports 4K (1080P@60Hz, 4K@60Hz,) Ultra HD resolution and uncompressed digital 7.1, 5.1 or 2 audio channels',
        '· The cable connects a DisplayPort/ DisplayPort++ (DP/DP++) enabled computer to an HDTV, monitor, and projector with HDMI input for Audio and video streaming.',
        '· Gold-plated connectors resist corrosion, provide durability and improve the signal transmission',
        '· Compatible with: With 4K DP to HDMI Cable under mirror mode, you could view your laptop or desktop\'s screen or video on display or TV, play games or movies on TV easily',
        '· What You Get: 1 Pack CORECABE  DisplayPort to HDMI Cable with 18-month warranty'
      ]
    }
  },
  created () {
    let imageUrl = this.$route.params.url
    if (imageUrl !== undefined) {
      // console.log('this.$route.params.url ' + imageUrl)
      this.url = imageUrl
      this.srcList = [imageUrl]
      // 根据imageUrl动态变化产品介绍文案
      this.changeProductDescByImageUrl(imageUrl)
    }
    window.addEventListener('setItem', () => {
      let newVal = sessionStorage.getItem('watchStorageImageInfo')
      this.watchStorageImageInfo = newVal
    })
  },
  watch: {
    watchStorageImageInfo (newVal, oldVal) {
      this.url = newVal
      this.srcList = [newVal]
      // 根据imageUrl动态变化产品介绍文案
      this.changeProductDescByImageUrl(newVal)
    }
  },
  methods: {
    // 接收子组件事件,动态改变 商品详情页信息
    clickImage (img) {
      // 根据imageUrl动态变化产品介绍文案
      // this.changeProductDescByImageUrl(img)
      this.url = img
      this.srcList = [img]
    },
    // 获取相同分类商品列表
    getTheSameCategoryProductList (categoryId) {
      if (categoryId === 1) {
        return this.getProductArr('static/images/products/1/1', 8, 'png')
      } else if (categoryId === 2) {
        return this.getProductArr('static/images/products/1/2', 8, 'png')
      } else if (categoryId === 3) {
        return this.getProductArr('static/images/products/1/3', 12, 'png')
      } else if (categoryId === 4) {
        return this.getProductArr('static/images/products/2', 8, 'png')
      } else if (categoryId === 5) {
        return this.getProductArr('static/images/products/3', 6, 'png')
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
    // 根据imageUrl动态变化产品介绍文案
    changeProductDescByImageUrl (imageUrl) {
      if (imageUrl.indexOf('/images/products/1/1/') !== -1) {
        this.pNameDesc = this.pNameDesc
        this.pDetailDescArr = this.pDetailDescArr
        this.activeIndex = '1'
        this.categoryPrice = '7.99'
        this.categoryProductList = this.getTheSameCategoryProductList(1)
      } else if (imageUrl.indexOf('/images/products/1/2/') !== -1) {
        this.pNameDesc = this.pNameDesc_2
        this.pDetailDescArr = this.pDetailDescArr_2
        this.activeIndex = '2'
        this.categoryPrice = '17.99'
        this.categoryProductList = this.getTheSameCategoryProductList(2)
      } else if (imageUrl.indexOf('/images/products/1/3/') !== -1) {
        this.pNameDesc = this.pNameDesc_3
        this.pDetailDescArr = this.pDetailDescArr_3
        this.activeIndex = '3'
        this.categoryPrice = '9.99'
        this.categoryProductList = this.getTheSameCategoryProductList(3)
      } else if (imageUrl.indexOf('/images/products/2/') !== -1) {
        this.pNameDesc = this.pNameDesc_4
        this.pDetailDescArr = this.pDetailDescArr_4
        this.activeIndex = '4'
        this.categoryPrice = '9.99'
        this.categoryProductList = this.getTheSameCategoryProductList(4)
      } else if (imageUrl.indexOf('/images/products/3/') !== -1) {
        this.pNameDesc = this.pNameDesc_5
        this.pDetailDescArr = this.pDetailDescArr_5
        this.activeIndex = '5'
        this.categoryPrice = '10.99'
        this.categoryProductList = this.getTheSameCategoryProductList(5)
      }
    },
    change (categoryName) {
    },
    cancelForm () {
      this.resetForm('form')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            type: 'success',
            message: 'Submit Success, our business staff will contact you as soon as possible, thank you for your attention !'
          })
          this.resetForm('form')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.dialogFormVisible = false
      this.form = {
        name: '',
        phone: '',
        mail: '',
        quantity: '',
        content: ''
      }
      // 无效
      this.$refs[formName].resetFields()
    },
    handleChange (value) {
    }
  }
}
</script>

<style scoped>

</style>
