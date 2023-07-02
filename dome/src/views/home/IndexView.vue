<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <van-image :src="item.img"></van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useHomeSerivice } from '@/api/home'
import { HomeManageType } from '@/interface/model/home'
export default defineComponent({
  name: 'IndexView',
  setup() {
    const homeserivice = useHomeSerivice()
    const state = {
      loading: ref(false),
      finished: ref(false),
      error: ref(false),
      swiperList: ref<Array<HomeManageType.SwiperInterface>>([]),
      productList: ref<Array<HomeManageType.ProductInterface>>([]),
      pagesize: ref<number>(10),
      pagecount: ref(1)
    }
    const getSwiperList = async () => {
      const result = await homeserivice.getSwiperList({})
      state.swiperList.value = result.result
    }
    onMounted(() => {
      getSwiperList()
    })
    return {
      ...state
    }
  }
})
</script>

<style lang="less" scoped>
.my-swipe {
  width: 100%;
  height: 200px;
}
</style>
