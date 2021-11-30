<template>
        <div class="brand-box">
            <!--查询表单-->
            <div class="search-box">
                <el-form :inline="true" class="demo-form-inline" size="mini">
                    <el-form-item label="ManagerId">
                        <el-input placeholder="ManagerId"  v-model="staff.sid"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-search" @click="findPage">search</el-button>
                        <el-button type="warning" @click="resetForm">reset</el-button>
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible = true,formData={}">Management</el-button>
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible3 = true,formData={}">addNewStaff</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
                            prop="name"
                            label="name"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="department"
                            label="department"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="address"
                            label="address"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="city"
                            label="city"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="state"
                            label="state"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="zipcode"
                            label="zipcode"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="job"
                            label="job"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="email"
                            label="email"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createBy"
                            label="createBy"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="createTime"
                            label="createTime"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            align="center"
                            prop="Address"
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
                                           @click="staff.sid=obj.row.sid"></el-button>
                            </el-popconfirm>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!--ManageUser-->
            <el-dialog
                    title="ManageUser"
                    :visible.sync="dialogVisible"
                    width="33%"
            >
                <el-form ref="form"  :model="formData2" label-width="100px" >
                    <el-form-item >
                        <el-button type="primary" icon="el-icon-edit" size="mini"  @click="dialogVisible4=true,findPage2()">checkCustomerInfo</el-button>
                    </el-form-item>
                    <el-form-item label="userId">
                        <el-input v-model="formData2.uid" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="userName">
                        <el-input v-model="formData2.userName" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="passWord">
                        <el-input v-model="formData2.passWord" ></el-input>
                    </el-form-item>
                    <el-form-item label="nickName">
                        <el-input v-model="formData2.nickName"></el-input>
                    </el-form-item>
                    <el-form-item label="isvaild">
                        <el-input v-model="formData2.isvaild"></el-input>
                    </el-form-item>
                    <el-form-item label="star">
                        <el-input v-model="formData2.star"></el-input>
                    </el-form-item>
                    <el-form-item label="updateBy">
                        <el-input v-model="formData2.updateBy"></el-input>
                    </el-form-item>
                    <el-form-item label="updateTime">
                        <el-date-picker type="date" v-model="formData2.updateTime"></el-date-picker>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible = false,Edit2()">confirm</el-button>
  </span>
            </el-dialog>

            <!--AddNewStaff-->
            <el-dialog
                    title="AddNewStaff"
                    :visible.sync="dialogVisible3"
                    width="33%"
            >
                <el-form ref="form"  :model="formData4" label-width="100px" >
                    <el-form-item label="StaffName">
                        <el-input v-model="formData4.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Department">
                        <el-input v-model="formData4.department"></el-input>
                    </el-form-item>
                    <el-form-item label="Address">
                        <el-input v-model="formData4.address"></el-input>
                    </el-form-item>
                    <el-form-item label="City">
                        <el-input v-model="formData4.city"></el-input>
                    </el-form-item>
                    <el-form-item label="State">
                        <el-input v-model="formData4.state"></el-input>
                    </el-form-item>
                    <el-form-item label="Zipcode">
                        <el-input v-model="formData4.zipcode"></el-input>
                    </el-form-item>
                    <el-form-item label="Email">
                        <el-input v-model="formData4.email"></el-input>
                    </el-form-item>
                    <el-form-item label="createBy">
                        <el-input v-model="formData4.createBy"></el-input>
                    </el-form-item>
                    <el-form-item label="Job">
                        <el-input v-model="formData4.job"></el-input>
                    </el-form-item>
                    <el-form-item label="createTime">
                        <el-date-picker type="date" v-model="formData4.createTime"></el-date-picker>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible3 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible3 = false,addSort()">confirm</el-button>
  </span>
            </el-dialog>


            <!--弹框editstaff-->
            <el-dialog
                    title="editBrand"
                    :visible.sync="dialogVisible2"
                    width="33%"
            >
                <el-form ref="form" label-width="110px" size="small" :model="formData" >
                    <el-form-item label="StaffId">
                        <el-input v-model="formData.sid" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="SatffName">
                        <el-input v-model="formData.department"></el-input>
                    </el-form-item>
                    <el-form-item label="Address">
                        <el-input v-model="formData.address"></el-input>
                    </el-form-item>
                    <el-form-item label="city">
                        <el-input v-model="formData.city"></el-input>
                    </el-form-item>
                    <el-form-item label="state">
                        <el-input v-model="formData.state"></el-input>
                    </el-form-item>
                    <el-form-item label="zipcode">
                        <el-input v-model="formData.zipcode"></el-input>
                    </el-form-item>
                    <el-form-item label="email">
                        <el-input v-model="formData.email"></el-input>
                    </el-form-item>
                    <el-form-item label="job">
                        <el-input v-model="formData.job"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible2 = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible2 = false,Edit()">confirm</el-button>
  </span>
            </el-dialog>

            <!--searchCustomer-->
            <el-dialog
                    title="CustomerInfo"
                    :visible.sync="dialogVisible4"
                    width="80%"
            >
                <div class="search-box">
                    <el-form :inline="true" class="demo-form-inline" size="mini">
                        <el-form-item label="customerId">
                            <el-input placeholder="customerId" v-model="customer.uid"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="findPage2" icon="el-icon-search">search</el-button>
                            <el-button type="warning" @click="resetForm">reset</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="table-box">
                    <el-table
                            :data="tableData2"
                            style="width: 100%"
                            @selection-change="checkBoxSelectionChange"
                    >
                        <el-table-column
                                type="selection"
                                width="55">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="uid"
                                label="userId"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="userName"
                                label="customerName"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="passWord"
                                label="passWord"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="isvaild"
                                label="isvaild">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="star"
                                label="star">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="nickName"
                                label="nickName">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="balance"
                                label="balance">
                        </el-table-column>
                        <el-table-column
                                align="center"
                                prop="address"
                                label="操作">
                            <template v-slot="obj">
                                <el-button type="success" icon="el-icon-edit" size="mini" @click="clearAndAdd2(obj.row.uid),dialogVisible4=false">选择该条记录</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-dialog>
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
        </div>
</template>

<script>
    import manager from './index'

    export default manager;
</script>

<style  src="./index.scss" lang="scss">
</style>