<template>
    <div >
        <div class="search-box">
            <el-form :inline="true" class="demo-form-inline" size="mini">

                        <el-form-item label="Date">
                          <el-date-picker
                              v-model="pickerOptions.startArrayDate"
                              type="datetimerange"
                              value-format="yyyy-MM-dd HH:mm:ss"
                              :picker-options="pickerOptions"
                              range-separator="-"
                              @change="chooseTime"
                              start-placeholder="StartTime"
                              end-placeholder="EndTime"
                              align="left">
                          </el-date-picker>
                        </el-form-item>
                <el-form-item>
                    <el-button type="warning" @click="resetForm">reset</el-button>
                    <el-button type="primary" @click="rankByTopOne" icon="el-icon-search">RankByTopOne</el-button>
                    <el-button type="primary" @click="income" icon="el-icon-search">Income</el-button>
                    <el-button type="primary" @click="topTen" icon="el-icon-search">TopTen</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="table-box">
            <el-table
                    :data="tableData"
                    style="width: 100%"
            >
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="number"
                        label="Amount"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="sumprice"
                        label="SumMoney"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="mname"
                        label="MerchandiseName"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="sortName"
                        label="sortName"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="brandName"
                        label="brandName"
                        width="180">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import rank from './index'

    export default rank;
</script>

<style  src="./index.scss" lang="scss">
</style>