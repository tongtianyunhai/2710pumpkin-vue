<template>
    <div >

        <el-dialog
                title="modify your information"
                :visible.sync="dialogVisible"
                width="33%"
        >
        <el-container align="center">
        <el-form ref="form" :model="formData[0]" label-width="80px" >
            <el-form-item label="nickName">
                <el-input v-model="formData[0].nickName"></el-input>
            </el-form-item>
            <el-form-item label="passWord">
                <el-input v-model="formData[0].passWord"></el-input>
            </el-form-item>
            <el-form-item label="email">
                <el-input v-model="formData[0].email"></el-input>
            </el-form-item>
            <el-form-item label="Gender">
                <el-select v-model="formData[0].gender" placeholder="selectGender">
                    <el-option label="male" value="1"></el-option>
                    <el-option label="female" value="2"></el-option>
                    <el-option label="other" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Birthday">
            <el-date-picker
                v-model="formData[0].birthday"
                type="date"
                placeholder="selectDate">
        </el-date-picker>
            </el-form-item>
            <el-form-item label="Country">
                <el-input v-model="formData[0].country"></el-input>
            </el-form-item>
            <el-form-item label="State">
                <el-input v-model="formData[0].state"></el-input>
            </el-form-item>
            <el-form-item label="City">
                <el-input v-model="formData[0].city"></el-input>
            </el-form-item>
            <el-form-item label="Zipcode">
                <el-input v-model="formData[0].zipcode"></el-input>
            </el-form-item>
            <el-form-item label="Street">
                <el-input v-model="formData[0].street"></el-input>
            </el-form-item>
            <el-form-item label="Picture">
            </el-form-item>

            <el-form-item>
                <el-button @click="dialogVisible=false">cancel</el-button>
                <el-button type="primary" @click="onSubmit(),dialogVisible=false">confirm</el-button>
            </el-form-item>
        </el-form>
        </el-container>
        </el-dialog>


    <!--Avatar-->
        <el-dialog
                title="modify your information"
                :visible.sync="dialogVisible5"
                width="33%"
        >
        <el-upload
                class="avatar-uploader"
                action="http://localhost:9000/pcustomer/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :data="{'uid':formData2.uid}"
                :before-upload="beforeAvatarUpload">
            <img v-if="formData2.url" :src="formData2.url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-dialog>


        <el-descriptions title="MyInfo" direction="vertical" :column="4" border :data="tableData" >
            <el-descriptions-item label="userName">{{tableData[0].uid}}</el-descriptions-item>
            <el-descriptions-item label="nickName">{{tableData[0].nickName}}</el-descriptions-item>
            <el-descriptions-item label="gender">{{tableData[0].gender}}</el-descriptions-item>
            <el-descriptions-item label="picture">{{tableData[0].url}}</el-descriptions-item>
            <el-descriptions-item label="star">{{tableData[0].star}}</el-descriptions-item>
            <el-descriptions-item label="email">{{tableData[0].email}}</el-descriptions-item>
            <el-descriptions-item label="country">{{tableData[0].country}}</el-descriptions-item>
            <el-descriptions-item label="state">{{tableData[0].state}}</el-descriptions-item>
            <el-descriptions-item label="city">{{tableData[0].city}}</el-descriptions-item>
            <el-descriptions-item label="street">{{tableData[0].street}}</el-descriptions-item>
            <el-descriptions-item label="zipcode">{{tableData[0].zipcode}}</el-descriptions-item>
            <el-descriptions-item label="birthday">{{tableData[0].birthday}}</el-descriptions-item>
            <el-descriptions-item label="balance">{{tableData[0].balance}}</el-descriptions-item>
        </el-descriptions>
        <el-button type="success" icon="el-icon-edit" size="mini"
                   @click="dialogVisible=true,clearAndAdd()">modify</el-button>
        <el-button type="success" icon="el-icon-edit" size="mini" round  @click="dialogVisible5=true">uploadAvatar</el-button>
    </div>
</template>

<script>
    import customerInfo from './index'

    export default customerInfo;
</script>

<style  src="./index.scss" lang="scss">
    .my-label {
        background: #E1F3D8;
    }

    .my-content {
        background: #FDE2E2;
    }
</style>