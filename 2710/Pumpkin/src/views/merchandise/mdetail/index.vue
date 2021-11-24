<template>
    <div class="brand-box">
        <!--查询表单-->
        <div class="search-box">
            <el-form :inline="true" class="demo-form-inline" size="mini">
                <el-form-item >
                <el-cascader
                        v-model="value"
                        :options="options"
                        :props="defaultParams"
                        @change="formData4.mSort=value[1],handleChange()"
                        placeholder="selectType"
                        >
                </el-cascader>
                </el-form-item>

                <el-form-item  >
                    <el-input placeholder="MerchandiseName"  v-model="searchParams.mName"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="findPage">search</el-button>
                    <el-button type="warning" @click="resetForm">reset</el-button>
                    <el-button type="primary" icon="el-icon-edit" size="mini" @click="dialogVisible = true,formData={}">addBrand</el-button>
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
                        prop="mname"
                        label="Name"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="mbn"
                        label="mBn"
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

                <el-table-column
                        align="center"
                        prop="mprice"
                        label="price"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="misvaild"
                        label="mIsvaild"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="mcolor"
                        label="mColor"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="msize"
                        label="mSize"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="sortPicture"
                        label="BrandPicture"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="merichandisePicture"
                        label="Picture"
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
                                @confirm="deleteMerchandise"
                                icon="el-icon-info"
                                icon-color="red"
                                title="are you sure to delete？"
                        >
                            <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini"
                                       @click="formData3.mName=obj.row.mname,formData3.mBn=obj.row.mbn"></el-button>
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


        <!--弹框add-->
        <el-dialog
                title="Add New Brand"
                :visible.sync="dialogVisible"
                width="33%"
        >
            <el-form ref="form"  :model="formData" label-width="100px" >
                <el-form-item label="merchandiseName">
                    <el-input v-model="formData.mName"></el-input>
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
                            :file-list="formData.url">
                        <el-button type="primary">upload</el-button>
                        <div slot="tip" class="el-upload__tip">jpg/png file，and not beyond 500kb</div>
                    </el-upload>
                </el-form-item>

                <el-form-item label="TypeOrNot">
                    <el-select  v-model="formData.isparent" >
                        <el-option label="Not" value="0"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="brandNumber">
                    <el-input v-model="formData.sortBn"></el-input>
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


                <el-form-item label="createBy">
                    <el-input v-model="formData.createBy"></el-input>
                </el-form-item>
                <el-form-item label="createTime">
                    <el-date-picker type="date" v-model="formData.createTime"></el-date-picker>
                </el-form-item>
                <el-form-item label="isValid">
                    <el-select  v-model="formData.isvalid" >
                        <el-option label="valid" value="1"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>


            <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="dialogVisible = false,add()">confirm</el-button>
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
                <el-form-item label="Type">
                    <el-input v-model="formData.parentid"></el-input>
                </el-form-item>
                <el-form-item label="BrandNumber">
                    <el-input v-model="formData.sortBn"></el-input>
                </el-form-item>
                <el-form-item label="Picture">
                    <el-input v-model="formData.url"></el-input>
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
    import mdetail from '.'

    export default mdetail;
</script>

<style src="./index.scss" lang="scss">
</style>