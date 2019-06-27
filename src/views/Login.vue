<template>
  <el-row type="flex" justify="center">
<!--    登录页面-->
    <!--给两个表单分别加key值,避免第二个表单验证规则不生效-->
    <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" key="login">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button @click="reg()">注册</el-button>
      </el-form-item>
    </el-form>
  </el-row>

</template>

<script>
/* eslint-disable indent */
  export default {
    name: 'Login',
    data () {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          name: '',
          pass: ''
        },
        rules: {
        /*  trigger: ‘blur’ 表示“当失去焦点时（光标不显示的时候），触发此提示”
           此处应该是有一个校验，若失去焦点，则触发trigger进行校验，若校验不成功，则进行提示 */
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      login () {
        if (this.loginForm.name === '' || this.loginForm.pass === '') {
          alert("用户名和密码不能为空！")
        } else if (localStorage.getItem("name") === this.loginForm.name && localStorage.getItem("password") === this.loginForm.pass) {
          this.loginForm.name = ''
          this.loginForm.pass = ''
          this.$router.push('/home')
        } else {
          alert("用户名或密码不正确！")
        }
      },
      reg () {
        this.$router.push('/reg')
      }
  }

  }
</script>

<style scoped>
  .login {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
    color: #1ab2ff;
    cursor: pointer;
    text-align: right;
    text-indent: 8px;
    width: 160px;
  }
</style>
