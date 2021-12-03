<template>


  <div>
    <Button>Batch Check out</Button>
    <Button>Delete</Button>
    <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55"></el-table-column>
      <el-table-column
          prop="mname"
          label="mname"
          width="180">
      </el-table-column>
      <el-table-column
          prop="mbn"
          label="mbn"
          width="180">
      </el-table-column>
      <el-table-column
          prop="createTime"
          label="createTime"
          width="180">
      </el-table-column>
      <el-table-column
          prop="currentPrice"
          label="oldPrice"
          width="180">
      </el-table-column>
      <el-table-column
          prop="quantity"
          label="quantity"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          prop="address"
          label="operation">
        <template v-slot="obj">

          <el-button type="success" icon="el-icon-edit" size="mini"
                     @click="placeOrder(obj.row.sid),dialogVisible2=true">Check out
          </el-button>
          <el-popconfirm
              confirm-button-text='Confirm'
              cancel-button-text='Cancel'
              @confirm="removefromcart"
              icon="el-icon-info"
              icon-color="red"
              title="are you sure to delete？"
          >
            <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini"
                       @click="formData3.sid=obj.row.sid">Delete
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--弹框edit-->
    <el-dialog
        title="Ready to check out"
        :visible.sync="dialogVisible2"
        width="33%"
    >
      <el-form ref="form" label-width="110px" size="small" :model="rowData">
        <el-form-item label="NAME">
          <el-input v-model="rowData.mname" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="TYPE">
          <el-input v-model="rowData.mbn" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="CATEGORY">
          <el-input v-model="rowData.sortName" disabled=""></el-input>
        </el-form-item>
        <el-form-item label="QUANTITY">
          <el-input v-model="rowData.quantity"></el-input>
        </el-form-item>
      </el-form>


      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible2 = false,add()">confirm</el-button>
  </span>
    </el-dialog>
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

  </div>


</template>

<script>
import cart from './index'

export default cart
</script>

<style src="./index.scss" lang="scss">
</style>
