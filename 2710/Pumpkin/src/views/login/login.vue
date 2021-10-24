<template>
  <div>

    <form>
      用户名: <input type="text" v-model="puser.userName"> <br>
      密码: <input type="text" v-model="puser.passWord"> <br>
      <input type="submit" value="登录" @click="userlogin()"> <br>
    </form>
  </div>
</template>

<script>

  import login from './index'

export default login



</script>

<style scoped>

</style>