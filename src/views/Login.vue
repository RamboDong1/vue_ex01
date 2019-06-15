<template>
  <el-row type="flex" justify="center">
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button >注册</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  export default {
    name: 'Login'
  }
</script>

<style scoped>

</style>
