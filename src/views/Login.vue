<template>
    <div class="login flex align_center justify_center">
        <div class="card" ref="ddd">
            <h2 class="center" style="padding-bottom: 40px;">后台系统</h2>
            <el-form :model="ruleForm" :rules="rules" ref="formEl">
                <el-form-item prop="account">
                    <el-input v-model="ruleForm.account" placeholder="账号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="ruleForm.password" placeholder="密码"
                              autocomplete="off"></el-input>
                </el-form-item>
            </el-form>

            <el-button class="width" type="primary" @click="submitForm()">提交</el-button>
        </div>
    </div>
</template>

<script lang="ts">
  import {defineComponent, reactive, ref} from 'vue';
  import {useRouter} from 'vue-router';
  import {ElMessage} from 'element-plus';
  import {exampleLoginFn} from '../api/login';
  import {setStorage} from '../storage';

  export default defineComponent({
    name: 'Login',
    setup() {
      const router = useRouter();

      //登录参数
      const ruleForm = reactive({
        account: '18080008000',
        password: '123456',
      });

      //验证规则
      const rules = reactive({
        account: [{required: true, message: '请输入账号', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
      });

      //提交表单Dom节点
      const formEl = ref(null);

      function submitForm() {
        const {validate} = formEl.value as any;
        validate((valid: any) => {
          if (valid) {
            exampleLoginFn(ruleForm).then((res: any) => {
              if (res.data.status === 'ok') {
                setStorage('userInfo', res.data);
                router.push({name: 'Home'});
              } else {
                ElMessage.error('登录失败');
              }
            })
          } else {
            return false;
          }
        });
      }

      return {
        formEl,
        ruleForm,
        rules,
        submitForm,
      };
    },
  });
</script>

<style lang="scss">
    .login {
        background: url("../assets/login-bg.png");
        width: 100vw;
        height: 100vh;
        background-color: #409eff;

        .card {
            width: 360px;
            background-color: white;
            padding: 30px;
            border-radius: 4px;
        }

        .adm_tab {
            padding-top: 10px;
            line-height: 60px;
            font-size: 17px;
            color: #999999;
        }

        .act_tab {
            color: #409eff;
            font-weight: bold;
        }
    }
</style>