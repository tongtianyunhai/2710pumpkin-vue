<template>
    <div class="manager-box">
        <!--查询表单-->
        <div class="search-box">
            <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item label="managerId">
                    <el-input placeholder="managerId" v-model="searchParams.spOrderid"></el-input>
                </el-form-item>

                <el-form-item label="日期">
                    <el-date-picker
                            v-model="pickerOptions.startArrayDate"
                            @change="chooseTime"
                            type="datetimerange"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            :picker-options="pickerOptions"
                            range-separator="-"
                            start-placeholder="begin"
                            end-placeholder="end"
                            align="left">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="findPage">search</el-button>
                    <el-button type="warning" @click="resetForm">reset</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!--操作按钮-->
        <div class="crud-box" >
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible=true,formData={}">create</el-button>
        </div>
        <!--table展示数据-->
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
                        prop="spOrderid"
                        label="特殊申诉方案编号"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="spCasename"
                        label="特殊申诉方案名"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="spKeyword"
                        label="关键字"
                        width="180">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="spCreateBy"
                        label="制单人">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="spCreateTime"
                        label="制单时间">
                </el-table-column>


                <el-table-column
                        align="center"
                        prop="spUpdateTime"
                        label="更新时间">
                </el-table-column>

                <el-table-column
                        align="center"
                        prop="address"
                        label="操作">
                    <template v-slot="obj">
                        <el-button type="success" icon="el-icon-edit" size="mini"
                                   @click="clearAndAdd(obj.row.spOrderid),dialogVisible2=true" >审批</el-button>

                        <el-button type="warning" icon="el-icon-edit" size="mini" @click="clearAndAdd(obj.row.spOrderid),dialogVisible3=true">修改</el-button>
                        <el-popconfirm
                                confirm-button-text='确认'
                                cancel-button-text='取消'
                                @confirm="deleteById"
                                icon="el-icon-info"
                                icon-color="red"
                                title="确定删除这一条数据吗？"
                        >
                            <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini"
                                       @click="formData.spOrderid=obj.row.spOrderid">删除</el-button>
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

        <!--新增-->
        <div class="dialog-box">
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="40%"
            >
                <el-form ref="form" :model="formData2" label-width="240px">
                    <el-form-item label="特殊申诉方案名称" size="small">
                        <el-input v-model="formData2.spCasename"  style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="方案关键字">
                        <el-input v-model="formData2.spKeyword" size="small" style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="制单人">
                        <el-input v-model="formData2.spCreateBy" size="small" style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="制单时间">
                        <el-date-picker
                                v-model="formData2.spCreateTime"
                                type="date"
                                placeholder="选择日期"
                                size="small" style="width: 240px;">
                        </el-date-picker>
                    </el-form-item>





                    <el-form-item label="审批状态">
                        <el-input v-model="formData2.spCheckStatus" size="small" style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="更新时间">
                        <el-date-picker
                                v-model="formData2.spUpdateTime"
                                type="date"
                                placeholder="选择日期"
                                size="small" style="width: 240px;">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="formData2.spAddtion" size="small" style="width: 240px" ></el-input>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false" size="small">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false,add()" size="small">确 定</el-button>
                </span>
            </el-dialog>

            <!--修改-->
            <el-dialog
                    title="实体操作"
                    :visible.sync="dialogVisible3"
                    width="33%"
            >
                <el-form ref="form" :model="formData2" label-width="240px" >


                    <el-form-item label="特殊申诉方案编号" size="small">
                        <el-input v-model="formData2.spOrderid"  style="width: 240px;" disabled=""></el-input>
                    </el-form-item>

                    <el-form-item label="特殊申诉方案名称" size="small">
                        <el-input v-model="formData2.spCasename"  style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="方案关键字">
                        <el-input v-model="formData2.spKeyword" size="small" style="width: 240px;"></el-input>
                    </el-form-item>

                    <el-form-item label="制单人">
                        <el-input v-model="formData2.spCreateBy" size="small" style="width: 240px;"></el-input>
                    </el-form-item>




                    <el-form-item label="制单时间" >
                        <el-date-picker
                                v-model="formData2.spCreateTime"
                                type="date"
                                placeholder="选择日期"
                                size="small" style="width: 240px;" disabled="">
                        </el-date-picker>
                    </el-form-item>


                    <el-form-item label="更新时间">
                        <el-date-picker
                                v-model="formData2.spUpdateTime"
                                type="date"
                                placeholder="选择日期"
                                size="small" style="width: 240px;">
                        </el-date-picker>
                    </el-form-item>

                    <el-form-item label="备注">
                        <el-input type="textarea" v-model="formData2.spAddtion" size="small" style="width: 240px;"></el-input>
                    </el-form-item>
                </el-form>

                <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible3 = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible3 = false,updatecheck()">确 定</el-button>
  </span>
            </el-dialog>

        </div>
    </div>
</template>

<script>
    import manager from './index'

    export default manager;
</script>

<style  src="./index.scss" lang="scss">
</style>