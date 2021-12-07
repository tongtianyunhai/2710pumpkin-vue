<template>
    <el-container >
    <el-header align="center" style="line-height: 1.7">
        <el-row>
            <el-col :span="24" style="color: #67C23A;font-family: Algerian; font-weight: 900 ">Welcome to use pumpkin online shopping System!</el-col>
        </el-row>
        <el-row >
            <el-col :span="8"><el-link type="success" href="/#/customerInfo" style="color:#409EFF ;font-family: 'Arial Narrow'; font-weight: 900">Your Information</el-link></el-col>
            <el-col :span="8"><el-link type="success" href="/#/shoppingInfo" style="color:#F56C6C ;font-family: 'Arial Narrow'; font-weight: 900">Shopping</el-link></el-col>
            <el-col :span="8"><el-link type="success"href="/#/order" style="color:#E6A23C ;font-family: 'Arial Narrow'; font-weight: 900">Your orders</el-link></el-col>
        </el-row>
        </el-header>
            <el-main>
        <el-carousel :interval="5000" arrow="always" height="400px"  >
            <el-carousel-item v-for="(img,index) in imgList" :key="index">
               <img :src="img.url"  style="width: 100%; height: 100%" :fit="fill" >
            </el-carousel-item>
        </el-carousel>
            </el-main>
        <el-footer height="100px"  align="center" style="line-height: 1.7">
            <el-row><el-col :span="24" style="color:#606266 ;font-family: 'Arial Narrow'; font-weight: 900"><h>Pumpkin online shopping system </h></el-col></el-row>
            <el-row><el-col :span="24" style="color:#606266 ;font-family: 'Arial Narrow'; font-weight: 900"><h>Since November 11,2021</h></el-col></el-row>
            <el-row><el-col :span="24" style="color:#606266 ;font-family: 'Arial Narrow'; font-weight: 900"><h>contact us</h></el-col></el-row>
            <el-row><el-col :span="6" style="color:#606266 ;font-family: 'Arial Narrow'; font-weight: 900"><h>contact us</h></el-col></el-row>

            <el-row>
                <el-link
                        class="el-icon-phone-outline"
                        href="https://www.facebook.com/" target="_blank">
                </el-link>
                <el-link  class="el-icon-phone-outline"
                          href="https://twitter.com/" target="_blank">
                </el-link>
                <el-link  class="el-icon-phone-outline"
                          href="https://www.youtube.com/" target="_blank">
                </el-link>
            </el-row>

        </el-footer>
    </el-container>
</template>

<script>
    import show from './index'

    export default show;
</script>

<style  src="./index.scss" lang="scss">

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 100%;
        width: 100%;
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
</style>