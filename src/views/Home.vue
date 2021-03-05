<template>
    <div class="home bg_white height">
        <el-container class="height">
            <el-aside class="aside" width="5%">
                <ElScrollbar class="scroll_box">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
                             :uniqueOpened="true"
                             @close="handleClose" :collapse="false">
                        <el-submenu index="1">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template #title>分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template #title>选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <template #title>导航二</template>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <template #title>导航三</template>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <template #title>导航四</template>
                        </el-menu-item>
                        <el-submenu index="5">
                            <template #title>
                                <i class="el-icon-location"></i>
                                <span>导航五</span>
                            </template>
                            <el-menu-item-group>
                                <template #title>分组一</template>
                                <el-menu-item index="5-1">选项1</el-menu-item>
                                <el-menu-item index="5-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="5-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="5-4">
                                <template #title>选项4</template>
                                <el-menu-item index="5-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-menu>
                </ElScrollbar>
            </el-aside>
            <el-main class="main_box">
                <ElScrollbar class="scroll_box">
                    <div class="pad20">
                        <el-space direction="vertical" alignment="flex-start" :size="20">
                            <div class="flex align_center">
                                条形码/二维码：
                                <el-input class="flex1" v-model="outParkNum"></el-input>
                                <div style="width: 20px;"></div>
                                <el-button type="primary">确认</el-button>
                                <div style="width: 20px;"></div>
                                <div class="flex el-button el-button--primary align_center justify_center"
                                     @click="handleQrCode">扫码
                                </div>
                            </div>
                        </el-space>
                        <div class="flex flex_column">
                            <div class="flex1 overflow">
                                <el-tabs class="tab_box flex flex_column" type="border-card" @tab-click="handleTab"
                                         :stretch="true">
                                    <el-tab-pane label="菜单1"></el-tab-pane>
                                    <el-tab-pane label="菜单2"></el-tab-pane>
                                    <el-tab-pane label="菜单3"></el-tab-pane>
                                    <div class="content height flex flex_column">
                                        <div class="image_box overflow pos_rel flex1">
                                            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617350400&t=dd14ab80bc128fe0877c58ee9cd5afe2"
                                                 class="pos_center width"
                                                 style="max-width: 100%;max-height: 100%;width: auto;" alt="">
                                        </div>
                                    </div>
                                </el-tabs>
                            </div>
                            <div class="swiper">
                                <swiper
                                        :navigation="true"
                                        :slides-per-view="slideItem"
                                        :space-between="50"
                                >
                                    <swiper-slide class="flex align_center justify_center" v-for="(item,index) in 12"
                                                  :key="'swiperitem-'+index">
                                        <div class="width height flex align_center justify_center"
                                             style="border:1px solid #eaeaea;">
                                            <div class="width center">
                                                <p class="col999">暂无信息</p>
                                            </div>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </ElScrollbar>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
  import {defineComponent, ref} from 'vue';
  import {ElLoading} from 'element-plus';
  import SwiperCore, {Navigation} from 'swiper';
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/swiper.min.css';
  import 'swiper/components/navigation/navigation.scss';

  SwiperCore.use([Navigation]);

  export default defineComponent({
    name: 'Home',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      //响应式管理swiper横向展示数量
      const slideItem = ref(5);
      window.onresize = window.onload = function(e: any) {
        if (window.innerWidth <= 1500) {
          slideItem.value = 4;
        } else {
          slideItem.value = 5;
        }
      };

      //扫码枪扫码
      const outParkNum = ref('');

      function handleQrCode() {
        let elLoading = ElLoading.service({fullscreen: true});
        const keyDownFn = function(e: any) {
          //监测enter结束符
          if (e.keyCode === 13) {
            elLoading.close();
            document.getElementsByTagName('body')[0].removeEventListener('keydown', keyDownFn);
          } else {
            outParkNum.value += e.key;
          }
        };
        document.getElementsByTagName('body')[0].removeEventListener('keydown', keyDownFn);
        document.getElementsByTagName('body')[0].addEventListener('keydown', keyDownFn);
      }

      function handleTab(tab: any) {
        console.log(tab.index);
      }

      function handleOpen(key: any, keyPath: any) {
        console.log(key, keyPath);
      }

      function handleClose(key: any, keyPath: any) {
        console.log(key, keyPath);
      }

      return {
        slideItem,
        outParkNum,
        handleTab,
        handleQrCode,
        handleOpen,
        handleClose,
      };
    },
  });
</script>

<style lang="scss">
    .home {
        .el-menu {
            border-right: 0;
        }
        .main_box {
            padding: 0;
        }

        .el-tabs__content {
            flex: 1;
        }

        .pad20 {
            padding: 20px;
        }

        .image_box {
            height: 400px;
            border: 1px solid #eaeaea;
            margin-bottom: 20px;
        }

        .tab_box {
            height: 1000px;
        }

        .swiper {
            padding: 20px 0 0;
            height: 240px;

            .swiper-container {
                height: 100%;
            }
        }


        .aside {
            max-width: 300px;
            min-width: 200px;
            height: 100%;
            box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 2px 2px 4px 0 rgb(232 237 250 / 100%);
        }

        .scroll_box {
        }

    }
</style>
