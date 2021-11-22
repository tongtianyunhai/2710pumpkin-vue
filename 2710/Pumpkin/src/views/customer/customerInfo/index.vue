<template>
    <div >
        <el-container align="center">
        <el-form ref="form" :model="form" label-width="80px" >
            <el-form-item label="nickName">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="gender">
                <el-select v-model="form.region" placeholder="selectGender">
                    <el-option label="male" value="1"></el-option>
                    <el-option label="female" value="2"></el-option>
                    <el-option label="other" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="birthDay">
            <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="selectDate">
        </el-date-picker>
            </el-form-item>

            <el-form-item label="Country">
                <el-input v-model="form.country"></el-input>
            </el-form-item>

            <el-form-item label="state">
                <el-input v-model="form.state"></el-input>
            </el-form-item>

            <el-form-item label="City">
                <el-input v-model="form.city"></el-input>
            </el-form-item>

            <el-form-item label="zipcode">
                <el-input v-model="form.zipcode"></el-input>
            </el-form-item>

            <el-form-item label="street">
                <el-input v-model="form.street"></el-input>
            </el-form-item>


            <el-form-item label="picture">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">confirm</el-button>
                <el-button>cancel</el-button>
            </el-form-item>
        </el-form>
        </el-container>
    </div>
</template>

<script>
    import customerInfo from './index'

    export default customerInfo;
</script>

<style  src="./index.scss" lang="scss">
</style>