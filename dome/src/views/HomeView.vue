<template>
  <div class="home">
    <LayoutHeader>
      <template #aaa></template>
    </LayoutHeader>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o"><router-link to="/home/index">首页</router-link></van-tabbar-item>
        <van-tabbar-item icon="search"><router-link to="/home/fen">分类</router-link></van-tabbar-item>
        <van-tabbar-item icon="friends-o"><router-link to="/home/car">购物车</router-link></van-tabbar-item>
        <van-tabbar-item icon="setting-o"><router-link to="/home/my">我的</router-link></van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import LayoutHeader from '@/components/layout/Header.vue'

export default defineComponent({
  components: {
    LayoutHeader
  },
  setup() {
    const active = ref()
    return { active }
  }
})
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
    color: #000;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
