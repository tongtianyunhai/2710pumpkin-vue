<template>
  <el-container>
    <el-header align="left">
      <div>
        <el-form :inline="true" class="demo-form-inline" size="mini">
          <el-form-item>
            <el-cascader
                v-model="value"
                :options="options"
                :props="defaultParams"
                @change="formData4.mSort=value[1],handleChange()"
                placeholder="selectType"
            >
            </el-cascader>
          </el-form-item>

          <el-form-item>
            <el-input placeholder="MerchandiseName" v-model="searchParams.mName"></el-input>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="findPage" icon="el-icon-search">search</el-button>
            <el-button type="warning" @click="resetForm">reset</el-button>
          </el-form-item>
        </el-form>

      </div>
    </el-header>
    <el-main>
      <el-row :gutter="0" align="left">

        <el-col :span="6" v-for="item in tableData">
<!--          <a href="#/merchandisePage?mname={{item.mname}}&mbn={{item.mbn}}"></a>-->

<!--            <router-link :to="{ path: '/merchandisePage',params: {name: 'name',dataObj: data},query: {name: 'name',dataObj: data}}">-->

            <div class="grid-content bg-purple">
              <!--     card       -->
              <!--            <el-card :body-style="{ padding: '24px' }">-->
              <a href="#/merchandisePage" @click="saveInfo(item)">
              <div style="width: 190px;height: 300px;">
                <img :src="require(`E:/2710vue/2710/Pumpkin/src/assets/MerchandiseImages/${item.merchandisePicture}`)"width="200" height="200" class="head_pic"/>
              </div>
              </a>
              <div style="padding: 14px;">
                <span style="color: red; font-size: 25px">{{ item.mprice }}$</span>
                <div class="bottom clearfix">
                  <span style="font-size: 20px">{{ item.mname }}</span><br>
                  <el-button type="primary" size="small" round style="margin-left: auto ;
                  font-size:18px " @click="clearAndAdd(item.mname,item.mbn),dialogVisible2=true">add to cart
                  </el-button>
                </div>
              </div>
              <!--            </el-card>-->
              <!--            -->
            </div>
<!--            </router-link>-->

        </el-col>

        <!--弹框edit-->
        <el-dialog
            title="ADD TO CART"
            :visible.sync="dialogVisible2"
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
            <el-form-item label="QUANTITY">
              <el-input v-model="formData.quantity"></el-input>
            </el-form-item>
          </el-form>


          <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible2 = false,add()">confirm</el-button>
  </span>
        </el-dialog>
      </el-row>
      <div>
        <el-pagination
            background
            :current-page="searchParams.currentPage"
            :page-size="searchParams.pageSize"
            layout="prev, pager, next"
            @current-change="currentPageChange"
            :total="total">
        </el-pagination>
      </div>
    </el-main>

  </el-container>
</template>

<script>
import merchandise from './index.js'

export default merchandise
</script>

<style src="./index.scss" lang="scss">
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
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
  text-align: left;
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

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

  .image {
    width: 100%;
    display: block;
  }

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
