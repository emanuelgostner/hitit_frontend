<template>
  <BottomDrawer :active=active translateY="0px" @close="handleClose" data-testid="signIn" button-test-id="closeLogin" id="login">
    <template #main>
      <div class="px-4" data-testid="signInComponent">
        <template v-if="showLogin">
          <form @submit.prevent autocomplete="off">
            <InputText required v-model="loginData.mail" lbl="Your email" type="email" data-testid="signInEmail"/>
            <InputText required v-model="loginData.password" lbl="Your password" type="password" data-testid="signInPassword"/>
            <ButtonText @click="handleFormSubmit" data-testid="signInSubmit">Log in</ButtonText>
            <div class="text-blue-400 mt-7 text-center" @click="showLogin=false" data-testid="redirectToSignup">Don't have an account yet? Sign up.</div>
          </form>
        </template>
        <template v-else>
          <form @submit.prevent autocomplete="off">
            <InputText required v-model="signupData.mail" lbl="Your email" type="email" data-testid="signUpUsernameInput" />
            <InputText required v-model="signupData.password" lbl="Your password" type="password" data-testid="signUpPasswordInput"/>
            <InputText required v-model="signupData.passwordConfirmation" lbl="Confirm your password" type="password" data-testid="signupPasswordConfirmation" />
            <ButtonText @click="handleFormSubmit" data-testid="signUpButton">Sign up</ButtonText>
            <div class="text-blue-400 mt-7 text-center" @click="showLogin=true" data-testid="redirectToLogin">Already have an account? Log in. </div>
          </form>
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
import {User} from "@/models/User";

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
const closeWindow = () => {
  active.value = false
}
const handleLogin = async () => {
  const auth = await userStore.authUser(loginData.mail, loginData.password)
  return !!auth
}
const handleSignup = async () => {
  const user = await userStore.createUser(signupData.mail, signupData.password)
  return !!user
}
const handleClose = () => {
  userStore.setUser(new User('','Guest'))
  closeWindow()
}
const handleFormSubmit = async (e) => {
  const submitSuccessfull = showLogin.value ? await handleLogin() : await handleSignup()
  if (submitSuccessfull) {
    closeWindow()
  }
}
</script>
