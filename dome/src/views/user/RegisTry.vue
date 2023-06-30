<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <h1>用户注册</h1>
      </div>
      <div class="login-body">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field v-model="formState.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="formState.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
            <van-field v-model="formState.mobile" type="tel" name="手机号" label="手机号" placeholder="手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserManageType } from '@/interface/model/user'
import { useUserSerivice } from '@/api/user'
import { showToast, Toast } from 'vant'
export default defineComponent({
  name: 'RegisTry',
  props: {},
  setup() {
    const router = useRouter()
    const userSerivice = useUserSerivice()
    const state = {
      formState: ref<UserManageType.UserRegistryFormState>(new UserManageType.UserRegistryFormState())
    }
    const onSubmit = async () => {
      const result = await userSerivice.registry(state.formState.value)
      console.log(result)
      if (result.code == 1) {
        showToast({
          type: 'success',
          message: result.msg,
          onClose() {
            router.push('/user/login')
          }
        })
      } else {
        showToast({
          type: 'fail',
          message: result.msg,
          onClose() {
            state.formState.value = new UserManageType.UserRegistryFormState()
          }
        })
      }
    }
    return {
      ...state,
      onSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  .login-box {
    margin-top: 15%;
    box-sizing: border-box;
    .login-header {
      text-align: center;
      line-height: 35px;
    }
    .login-body {
      margin-top: 15%;
    }
  }
}
</style>
