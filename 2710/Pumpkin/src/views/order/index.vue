<template>
  <div>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="merchandiseId"
        label="merchandiseId"
        width="180">
    </el-table-column>
    <el-table-column
        prop="datetime"
        label="datetime"
        width="180">
    </el-table-column>
    <el-table-column
        prop="price"
        label="price"
        width="180">
    </el-table-column>
    <el-table-column
        prop="quantity"
        label="quantity"
        width="180">
    </el-table-column>
    <el-table-column
        prop="shipping"
        label="shipping"
        width="180">
    </el-table-column>
    <el-table-column
        prop="orderId"
        label="orderId"
        width="180">
    </el-table-column>
    <el-table-column
        prop="remark"
        label="remark">
    </el-table-column>
  </el-table>
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
import order from './index'
export default order
</script>

<style  src="./index.scss" lang="scss">
</style>
