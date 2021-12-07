<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width=30%>
        <div style="width:90%;height: 300px; ">
          <img  :src="require(`E:/2710vue/2710/Pumpkin/src/assets/MerchandiseImages/${tableData1[0].merchandisePicture}`)" width="200" height="200" class="head_pic"/>
        </div>
      </el-aside>
      <el-main>
        <span>name: </span><span id="name">{{ tableData1[0].mname }}</span><br>
        <span>brand: </span><span id="bn">{{ tableData1[0].mbn }}</span><br>
        <span>original price: </span><span id="originalprice"   style="text-decoration: line-through">{{ tableData1[0].mprice }}</span><br>
        <span>current price: </span><span id="currentPrice" style="color: red; font-weight: bold">{{ currentPrice }}</span><br>
        <span>instock: </span><span id="inStock">yes</span><br>
        <button @click="clearAndAdd(),dialogVisible=true">ADD TO CART</button>

      </el-main>
    </el-container>
    <el-dialog
        title="ADD TO CART"
        :visible.sync="dialogVisible"
        width="33%"
    >
      <el-form ref="form" label-width="110px" size="small" :model="formData">
        <el-form-item label="NAME">
          <el-input v-model="formData.mname" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="TYPE">
          <el-input v-model="formData.mbn" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="CATEGORY">
          <el-input v-model="formData.sortName" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="PRICE">
          <el-input v-model="formData.currentPrice" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="QUANTITY">
          <el-input v-model="formData.quantity"></el-input>
        </el-form-item>
      </el-form>


      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible = false,add()">confirm</el-button>
  </span>
    </el-dialog>
  </el-container>
</template>

<script>
import detail from './index.js'

export default detail
</script>

<style src="./index.scss" lang="scss">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.image {
  width: 100%;
  display: block;
}
</style>
