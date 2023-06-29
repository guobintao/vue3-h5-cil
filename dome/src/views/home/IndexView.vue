<template>
  <div>
    <Header />
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <Tabs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '../../components/tabs/IndexView.vue'
import Header from '../../components/header/InDex.vue'
export default defineComponent({
  name: 'IndexView',
  components: {
    Tabs,
    Header
  },
  setup() {
    const images = ['https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg', 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg']
    return { images, Tabs, Header }
  }
})
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
