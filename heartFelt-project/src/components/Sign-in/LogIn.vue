<script setup>
import {ref, getCurrentInstance} from 'vue';

const { emit } = getCurrentInstance()
      const email = ref('')
      const password =ref('')

const login=()=> {
  // Perform login logic
  if (this.email && this.password) {
  this.$router.push({ path: "/MyProfile" });
  console.log('Login:', this.email, this.password);
  }
}
   
const googleSignIn = ()=> {
   // Perform Google Sign-In logic
  console.log('Sign In with Google');
}

const showForgetPassWord = () =>{
  emit('show-forget-passWord')
}
      
const ShowSignUp = ()=>{
  emit('show-signup')
}
</script>



<template>
    <div class="input-details">
      <div class="creat-login">
        <h1>Welcome Back</h1>
        <span>Don't have an account?</span> 
        <div class="Loging" @click="ShowSignUp()">   Start for free.</div>
      </div>
        <div class="login-options">
          <button class="google-login">Continue with Google</button>
          <div class="or-divider">
          </div>   
            <span class="or-text">or</span>
          </div>
          <form class="email-login">
            <label for="email">Email Address</label>
            <br>
            <input type="text" id="email" name="email" v-model="email">
            <br>
            <label for="password">Password</label>
            <br>
            <input type="text" id="password" name="password" v-model="password">
            <button class="login-button" :disabled="!email && !password" @click="login">Login</button>
            <div class="forgot-password" @click="showForgetPassWord">Forgot your password?</div>
          </form>
    </div>
  </template>


  <style scoped>
  .creat-login{
    display: flex;
    align-content: center;
    flex-direction: column;
  }
 
  .creat-login h1{
    font-size: 40px;
     margin-left: 18%;
  }

  span{
    margin-left: 18%;
    margin-top: -3%;
    font-weight: 300;
    color: #6B6B6B;
  }

  .email-login{
    margin-top: 8%;
 }


  .Loging{
    cursor: pointer;
    margin-left: 57%;
    margin-top: -4%;
    width: 40%;
    font-weight: 300;
    color: #299E9E;
    font-size: 16px;
  }
  
 .google-login{
  border: none;
  color: black;
  border: 1px solid #D7D7D7;
  background-color: white;
 }
 .or-text{
  margin-left: 48%;
 }

  form label{
    font-size: 20px;
    margin-left: 3%;
  }
  
  form input{
    width: 450px;
    height: 40px;
    border-radius: 5px;
    margin-left: 3%;
    border: 1px solid #D7D7D7;
  }
  
  select{
    margin-top: 2%;
    margin-left: 3%;
    width: 450px;
    height: 50px;
    border: 1px solid #D7D7D7;
  }
  
   button{
    margin-top: 5%;
    margin-left: 3%;
    width: 450px;
    height: 50px;
    font-weight: 300;
    font-size: 15px;
    color: white;
    border: 1px solid #D7D7D7;
    background-color: #299E9E;
  }
  
 .forgot-password{
   margin-top: 5%;
   margin-left: 30%;
   cursor: pointer;
 }

</style>