<template>
  <div class="main-wrapper">

    <!--布局-->
    <el-container>
      <!--左导航-->
        <el-aside width="200px" >
        <!--Logo部分-->
        <div class="aside-logo-wrapper" >
          <!--@标识src下-->
          <img src="../../assets/keli.gif" alt="">
          <span>Pumpkin</span>
        </div>
        <!--导航菜单-->
        <el-scrollbar>
          <el-menu
                router
              active-text-color="#303133"
                background-color="Transparent"
              text-color="#606266"
              :router="true"
              default-active="1">
            <!--main menu-->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">Main menu</span>
            </el-menu-item>

            <!--manager-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Manager</span>
              </template>
              <el-menu-item index="3-1" route="/manager">
                <i class="el-icon-menu"></i>
                <span slot="title">ManagerInfo</span>
              </el-menu-item>

            </el-submenu>

            <!--merchandise-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Merchandise</span>
              </template>
              <el-menu-item index="2-2" route="/brand">
                <i class="el-icon-menu"></i>
                <span slot="title">Brand</span>
              </el-menu-item>
              <el-menu-item index="2-1" route="/mdetail">
                <i class="el-icon-menu"></i>
                <span slot="title">Mdetail</span>
              </el-menu-item>
            </el-submenu>


            <!--shopping-->
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Shopping</span>
              </template>
              <el-menu-item index="2-1" route="/shoppingInfo">
                <i class="el-icon-menu"></i>
                <span slot="title">ShoppingInfo</span>
              </el-menu-item>
              <el-menu-item index="2-1" route="/merchandisePage">
                <i class="el-icon-menu"></i>
                <span slot="title">MerchandisePage</span>
              </el-menu-item>
              <el-menu-item index="2-1" route="/shoppingCart">
                <i class="el-icon-menu"></i>
                <span slot="title">ShoppingCart</span>
              </el-menu-item>
            </el-submenu>




            <!-- order-->
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Order</span>
              </template>
              <el-menu-item index="5-1" route="/order">
                <i class="el-icon-menu"></i>
                <span slot="title">OrderInfo</span>
              </el-menu-item>
            </el-submenu>


            <!-- rank-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Rank</span>
              </template>
              <el-menu-item index="4-1" route="/rank">
                <i class="el-icon-menu"></i>
                <span slot="title">RankInfo</span>
              </el-menu-item>


            </el-submenu>










          </el-menu>
        </el-scrollbar>

      </el-aside>
      <!--右导航-->
      <el-container>
        <!--右导航头-->
        <el-header>
          <el-menu  class="el-menu-demo" mode="horizontal" >
            <el-menu-item index="1"><a href="/customerInfo" >myInfo</a></el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>

        </el-menu></el-header>
        <!--右主题内容-->
        <el-main>
          <!--动态渲染-->
          <div class="main-box">
            <!--展示不同的页面  品牌crud页面 ，分类的crud页面 ，admin crud单页面-->
            <router-view/>
          </div>

        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="scss">
.main-wrapper {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;


  .aside-logo-wrapper {
    text-align: center;
    background-color: #B3C0D1;
    height: 60px;
    line-height: 60px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 8px;
    }

    span {
      font-weight: 700;
      color: #fff;
      font-family: "华文行楷";
    }


  }


}

.el-scrollbar {
  height: calc(100% - 60px);
}

.el-main {
  background-color: #E9EEF3;
  color: #606266;
  padding: 6px 0 0 6px;

  .main-box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 15px 0px 0px 15px;
    box-sizing: border-box;
  }


}

.el-container {
  height: 100%;
}
</style>