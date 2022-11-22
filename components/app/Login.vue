<template>
  <BottomDrawer :active=active translateY="0px" @close="active = false">
    <template #main>
      <div class="px-4">
        <template v-if="showLogin">
          <InputText v-model="loginData.mail" lbl="Your email" type="email"/>
          <InputText v-model="loginData.password" lbl="Your password" type="password" />
          <ButtonText @click="handleLogin">Log in</ButtonText>
          <div class="text-blue-400 mt-7 text-center" @click="showLogin=false">Don't have an account yet? Sign up.</div>
        </template>
        <template v-else>
          <InputText v-model="signupData.mail" lbl="Your email" type="email" />
          <InputText v-model="signupData.password" lbl="Your password" type="password" />
          <InputText v-model="signupData.passwordConfirmation" lbl="Confirm your password" type="password" />
          <ButtonText @click="handleSignup">Sign up</ButtonText>
          <div class="text-blue-400 mt-7 text-center" @click="showLogin=true">Already have an account? Log in. </div>
        </template>
      </div>
    </template>
  </BottomDrawer>
</template>

<script setup lang="ts">
import BottomDrawer from "@/components/drawer/BottomDrawer.vue";
import ButtonText from '@/components/button/ButtonText.vue'
import InputText from '@/components/input/InputText.vue'
import { useUserStore } from "@/stores/useUserStore";

const userStore = useUserStore()
const active = ref(true)
const showLogin = ref(true)
const loginData = reactive({
  mail: '',
  password: ''
})
const signupData = reactive({
  mail: '',
  password: '',
  passwordConfirmation: ''
})
const handleLogin = () => {

}
const handleSignup = () => {

}
</script>

<style scoped>

</style>
