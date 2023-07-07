<script setup>
import {ref, getCurrentInstance} from 'vue';
import  SignUp from "@/components/Sign-in/SignUp.vue";
import Login from '@/components/Sign-in/Login.vue';
import ForgetPassword from '@/components/Sign-in/ForgetPassword.vue';

const showLogin = ref(false);
const showSigUp = ref(true);
const showForgetPassword = ref(false);
const ShowLoginMtd = () => {
    showLogin.value = true
    showSigUp.value = false
    showForgetPassword.value = false
}
const ShowSignupMtd =()=> {
    showLogin.value = false
    showSigUp.value = true
    showForgetPassword.value = false
}
const ShowForgetPasswordMtd =() =>{
    showLogin.value = false
    showSigUp.value = false
    showForgetPassword.value = true
}
const { emit } = getCurrentInstance()
     const fullName = ref('')
      const email = ref('')
      const password =ref('')
      const country=ref('')
  
    const signUp=()=> {
      // Perform sign-up logic
      console.log('Sign Up:', this.fullName, this.email, this.password, this.country);
    }
    const googleSignIn = ()=> {
      // Perform Google Sign-In logic
      console.log('Sign In with Google');
    }

const closeModal = ()=>{
  emit('close-modal')
}

// methods: {
//   onSignIn(googleUser) {
//     // Handle successful sign-in
//     const idToken = googleUser.getAuthResponse().id_token;
//     // Send the ID token to your server for verification and user authentication
//   },
//   onSignInFailure(error) {
//     // Handle sign-in failure
//     console.error(error);
//   }
// }
</script>



<template>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
           <span @click="closeModal">X</span></div>
          <SignUp v-on:show-login="ShowLoginMtd" v-if="showSigUp" />
          <Login v-on:show-signup="ShowSignupMtd" v-if="showLogin" v-on:show-forget-passWord="ShowForgetPasswordMtd"/>
        <ForgetPassword v-on:show-login="ShowLoginMtd" v-if="showForgetPassword"/>
      </div>
    </div>
  </template>



  <style scoped>
.modal {
  position: fixed;
  margin-top:  1%;
  margin-left: 30%;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 20px;
  width: 52%;
  border-radius: 3px;
  background-color: #FFFFFF;
  border: 1px solid #D7D7D7;
}

.modal-header{
  display: flex;
  justify-content: space-between;
  justify-items: center;
}

.modal-header span{
  cursor: pointer;
  padding: 2%;
  height: 20px ;
  width: 20px;
  border-radius: 50px;
  text-align: center;
  background-color: #ddd;
}

</style>
  