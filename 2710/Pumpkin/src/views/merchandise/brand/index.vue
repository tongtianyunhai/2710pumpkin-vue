<template>
  <div class="brand-box">
    <!--查询表单-->
    <div class="search-box">
      <el-form :inline="true" class="demo-form-inline" size="mini">
        <el-form-item label="BrandName">
          <el-input placeholder="BrandName"  v-model="searchParams.sortName"></el-input>
        </el-form-item>

<!--        <el-form-item label="日期">-->
<!--          <el-date-picker-->
<!--              v-model="value2"-->
<!--              type="datetimerange"-->
<!--              :picker-options="pickerOptions"-->
<!--              range-separator="-"-->
<!--              start-placeholder="开始日期"-->
<!--              end-placeholder="结束日期"-->
<!--              align="left">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" @click="findPage">search</el-button>
          <el-button type="warning" @click="resetForm">reset</el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible = true,formData={}">addBrand</el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible3 = true,formData={}">addSort</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--操作按钮-->
<!--    <div class="crud-box">-->

<!--      <el-button type="success" icon="el-icon-edit" size="mini">修改</el-button>-->
<!--      <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>-->
<!--    </div>-->
<!--    table展示数据-->
    <div class="table-box">
      <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="checkBoxSelectionChange"
      >
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="sortName"
            label="BrandName"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="sortBn"
            label="BrandNumber"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="pictureAddress"
            label="Picture"
            width="180">
        </el-table-column>
        <el-table-column
                align="center"
                prop="parentid"
                label="TypeId"
                width="180">
        </el-table-column>
        <el-table-column
                align="center"
                prop="isvaild"
                label="Isvaild"
                width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="address"
            label="operation">
          <template v-slot="obj">
            <el-button type="success" icon="el-icon-edit" size="mini"
            @click="clearAndAdd(obj.row.sid),dialogVisible2=true"></el-button>
            <el-popconfirm
                confirm-button-text='Confirm'
                cancel-button-text='Cancel'
                @confirm="deleteById"
                icon="el-icon-info"
                icon-color="red"
                title="are you sure to delete？"
            >
              <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini"
                         @click="formData3.sid=obj.row.sid"></el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="page-box">
      <el-pagination
          background
          :current-page="searchParams.currentPage"
          :page-size="searchParams.pageSize"
          layout="prev, pager, next"
          @current-change="currentPageChange"
          :total="total">
      </el-pagination>
    </div>


    <!--弹框addBrand-->
    <el-dialog
        title="Add New Brand"
        :visible.sync="dialogVisible"
        width="33%"
    >
      <el-form ref="form"  :model="formData" label-width="100px" >
        <el-form-item label="brandName">
          <el-input v-model="formData.sortName"></el-input>
        </el-form-item>
        <el-form-item label="picture">
          <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button type="primary">upload</el-button>
            <div slot="tip" class="el-upload__tip">jpg/png file，and not beyond 500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="SortOrNot"  >
          <el-select  v-model="formData.isparent"  placeholder="select">
            <el-option label="Not" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="brandNumber">
          <el-input v-model="formData.sortBn"></el-input>
        </el-form-item>
        <el-form-item label="SortName">
          <el-select v-model="formData.parentid" placeholder="select type" @change="searchType">
            <el-option
                    v-for="item in options"
                    :key="item.isparent"
                    :label="item.sortName"
                    :value="item.isparent"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="createBy">
          <el-input v-model="formData.createBy"></el-input>
        </el-form-item>
        <el-form-item label="createTime">
          <el-date-picker type="date" v-model="formData.createTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="isVaild">
          <el-select  v-model="formData.isvaild"  placeholder="select">
            <el-option label="vaild" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible = false,add()">confirm</el-button>
  </span>
    </el-dialog>

    <!--弹框addSort-->
    <el-dialog
            title="Add New Brand"
            :visible.sync="dialogVisible3"
            width="33%"
    >
      <el-form ref="form"  :model="formData4" label-width="100px" >
        <el-form-item label="SortName">
          <el-input v-model="formData4.sortName"></el-input>
        </el-form-item>

        <!--<el-form-item label="SortOrNot"  >-->
          <!--<el-select  v-model="formData4.isparent"  placeholder="select">-->
            <!--<el-option label="Not" value="0"></el-option>-->
          <!--</el-select>-->
        <!--</el-form-item>-->

        <el-form-item label="SortBn">
          <el-select v-model="formData4.sortBn" placeholder="select" @change="searchType">
            <el-option  label="NotBrand" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="BrandOrNot">
          <el-select v-model="formData4.parentid" placeholder="select type" @change="searchType">
            <el-option  label="Not" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="createBy">
          <el-input v-model="formData4.createBy"></el-input>
        </el-form-item>
        <el-form-item label="createTime">
          <el-date-picker type="date" v-model="formData4.createTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="isVaild">
          <el-select  v-model="formData4.isvaild"  placeholder="select">
            <el-option label="vaild" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible3 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible3 = false,addSort()">confirm</el-button>
  </span>
    </el-dialog>


    <!--弹框edit-->
    <el-dialog
        title="editBrand"
        :visible.sync="dialogVisible2"
        width="33%"
    >
      <el-form ref="form" label-width="110px" size="small" :model="formData" >
        <el-form-item label="BrandId">
          <el-input v-model="formData.sid" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="BrandName">
          <el-input v-model="formData.sortName"></el-input>
        </el-form-item>
        <el-form-item label="BrandType">
          <el-select v-model="formData.parentid" placeholder="select type" @change="searchType">
            <el-option
                    v-for="item in options"
                    :key="item.isparent"
                    :label="item.sortName"
                    :value="item.isparent"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="BrandNumber">
          <el-input v-model="formData.sortBn"></el-input>
        </el-form-item>
        <el-form-item label="picture">
          <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="1"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
            <el-button type="primary">upload</el-button>
            <div slot="tip" class="el-upload__tip">jpg/png file，and not beyond 500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible2 = false,Edit()">confirm</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
import brand from './index'

export default brand;
</script>

<style scoped src="./indexs.scss" lang="scss">
</style>