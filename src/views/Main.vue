<template>
    <div class="main bg_white">
        <el-container class="height">
            <el-header class="header colfff flex align_center justify_between">
                <img src="../assets/user.png" style="width: 40px;" alt="">
                <div class="l_info">
                    <div class="bold">admin</div>
                    <div>欢迎光临！{{loginTime}}</div>
                </div>
                <div class="flex1"></div>
                <div class="r_info flex align_center pointer">
                    <img @click="loginOut" src="../assets/icon-login-out.png" style="width: 20px;"/>
                </div>
            </el-header>
            <el-main class="main">
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
  import {defineComponent, reactive, inject, toRefs} from 'vue';
  import {useRouter} from 'vue-router';
  import {pad} from '../components/global';

  export default defineComponent({
    name: 'Main',
    setup() {
      const now = new Date();
      const router = useRouter();
      const data = reactive({
        loginTime: `${now.getFullYear()}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(),
          2)} ${pad(now.getHours(), 2)}:${pad(now.getMinutes(), 2)}`,
        loginOut
      });

      function loginOut() {
        localStorage.clear();
        router.replace({name: 'Login'})
      }

      return {...toRefs(data)};
    },
  });
</script>

<style lang="scss">
    .main {
        min-width: 1200px;
        height: 100vh;

        .header {
            background: #3a8ee6;

            .l_info {
                width: 220px;
                padding-left: 20px;
            }

            .r_info {
                justify-content: flex-end;
                width: 280px;
            }
        }

        .main {
            padding: 0;
        }
    }
</style>
