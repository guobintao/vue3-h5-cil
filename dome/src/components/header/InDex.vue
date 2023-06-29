<template>
  <div>
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
      <template #action>
        <div @click="onClickButton">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { showToast } from 'vant'
export default defineComponent({
  setup() {
    const value = ref('')
    const onSearch = (val: any) => showToast(val)
    const onClickButton = () => showToast(value.value)
    return {
      value,
      onSearch,
      onClickButton
    }
  }
})
</script>

<style></style>
