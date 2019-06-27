<template>
  <el-row type="flex" justify="center">
    <!--给两个表单分别加key值,避免第二个表单验证规则不生效-->
    <!--    注册页面-->
    <el-form :model="regForm" status-icon :rules="rules" ref="regForm" label-width="100px" class="demo-ruleForm" key="reg">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="regForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="regForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="regForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('regForm')">确定</el-button>
        <el-button @click="resetForm('regForm')">重置</el-button>
        <p class="login" @click="gotoLogin()">已有账号？立即登录</p>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  export default {
    name: 'Reg',
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
          if (this.regForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regForm: {
          name: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          /*  trigger: ‘blur’ 表示“当失去焦点时（光标不显示的时候），触发此提示”
             此处应该是有一个校验，若失去焦点，则触发trigger进行校验，若校验不成功，则进行提示 */
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      gotoLogin() {
        this.$router.push('/')
      },
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('注册成功!');
            localStorage.setItem ("name", this.regForm.name);
            localStorage.setItem ("password", this.regForm.pass);
            this.$router.push('/');
          } else {
            console.log('注册失败！');
            return false;
          }
        });
      },
      resetForm (formName) {
        this.$refs[formName].resetFields();
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
