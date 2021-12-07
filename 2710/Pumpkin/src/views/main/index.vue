<template>

  <div class="main-wrapper">
    <!--布局-->
    <el-container style="height: 100%">
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
            <!--第一版导航-->
          <!--<el-menu-->
                <!--router-->
              <!--active-text-color="#303133"-->
                <!--background-color="Transparent"-->
              <!--text-color="#606266"-->
              <!--:router="true"-->
              <!--default-active="1"-->
                <!--@open="handleOpen"-->
                <!--@close="handleClose"-->
               <!--&gt;-->
            <!--&lt;!&ndash;main show&ndash;&gt;-->
            <!--<el-menu-item index="1" route="/show">-->
              <!--<i class="el-icon-menu"></i>-->
              <!--<span slot="title">Main menu</span>-->
            <!--</el-menu-item>-->
            <!--&lt;!&ndash;manager&ndash;&gt;-->
            <!--<el-submenu index="3">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>Manager</span>-->
              <!--</template>-->
              <!--<el-menu-item index="3-1" route="/manager">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">ManagerInfo</span>-->
              <!--</el-menu-item>-->

            <!--</el-submenu>-->

            <!--&lt;!&ndash;merchandise&ndash;&gt;-->
            <!--<el-submenu index="2">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>Merchandise</span>-->
              <!--</template>-->
              <!--<el-menu-item index="2-2" route="/brand">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">Brand</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="2-1" route="/mdetail">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">Mdetail</span>-->
              <!--</el-menu-item>-->
            <!--</el-submenu>-->


            <!--&lt;!&ndash;shopping&ndash;&gt;-->
            <!--<el-submenu index="4">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>Shopping</span>-->
              <!--</template>-->
              <!--<el-menu-item index="4-1" route="/shoppingInfo">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">ShoppingInfo</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="4-2" route="/merchandisePage">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">MerchandisePage</span>-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="4-3" route="/shoppingCart">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">ShoppingCart</span>-->
              <!--</el-menu-item>-->
            <!--</el-submenu>-->




            <!--&lt;!&ndash; order&ndash;&gt;-->
            <!--<el-submenu index="5">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>Order</span>-->
              <!--</template>-->
              <!--<el-menu-item index="5-1" route="/order">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">OrderInfo</span>-->
              <!--</el-menu-item>-->
            <!--</el-submenu>-->


            <!--&lt;!&ndash; rank&ndash;&gt;-->
            <!--<el-submenu index="6">-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>Rank</span>-->
              <!--</template>-->
              <!--<el-menu-item index="6-1" route="/rank">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">RankInfo</span>-->
              <!--</el-menu-item>-->


            <!--</el-submenu>-->
          <!--</el-menu>-->

            <el-menu
                    @select="selectMenu"
                    :default-active="currentIndexLight"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    :router="startRouter"
                    active-text-color="#ffd04b"
            >
                    <div v-for="item in menuList3" :key="item.path">
                        <!-- 没有子菜单 -->
                        <template v-if="item.children && item.children.length == 0">
                            <el-menu-item :index="item.path">
                                <i class="el-icon-menu"></i>
                                {{item.name}}
                            </el-menu-item>
                        </template>
                        <!-- 有子菜单 -->
                        <el-submenu v-else :index="item.path">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                {{item.name}}
                            </template>

                            <template v-for="child in item.children">
                                <!-- 这里是类似递归循环 -->
                                <sidebar-item
                                        v-if="child.children&&child.children.length>0"
                                        :item="child"
                                        :key="child.path"
                                />
                                <el-menu-item v-else :key="child.path" :index="child.path">
                                    <i class="el-icon-location"></i>
                                    {{child.name}}
                                </el-menu-item>
                            </template>
                        </el-submenu>
                    </div>
          </el-menu>
        </el-scrollbar>

      </el-aside>
      <!--right direct-->
      <el-container>
        <!--head-->
        <el-header >
          <el-menu  class="el-menu-demo" mode="horizontal" >
            <el-row :gutter="2">

              <el-col :span="7">
                <el-menu-item>
              <a style="color: #FF9040">Welcome! {{user.nickName}}</a>
              <el-avatar :src="require(`../../assets/images/${user.url}`)"></el-avatar>
            </el-menu-item>
              </el-col>

              <el-col :span="7">
            <el-menu-item>
              <a href="/#/customerInfo" >check your Information</a>
            </el-menu-item>
              </el-col>

              <el-col :span="7">
            <el-menu-item>
              <a href="/" @click="signout" >sign out</a>
            </el-menu-item>
              </el-col>
            </el-row>

          </el-menu>

        </el-header>
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
  import main from './index'
  export default main;
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



</style>