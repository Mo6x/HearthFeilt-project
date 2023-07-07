<script setup>
import {ref, getCurrentInstance} from 'vue';
import axios from 'axios';

const { emit } = getCurrentInstance()

     const fullName = ref('');
      const email = ref('');
      const password =ref('');
      const country =ref('');
      const errorMessage = ref('');
      const successMessage = ref('');

    const signUp=()=> {
      errorMessage = '';
      successMessage = '';
    const formData = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      country: country.value,
      };

       axios.post('/api/register', this.formData).then(response => {
        successMessage.value = 'Registration successful';
      }).catch(error => {
        errorMessage.value = 'Incorrect password or email';
      });
      console.log('Sign Up:', this.fullName, this.email, this.password, this.country);
    }

    const googleSignIn = ()=> {
      // Perform Google Sign-In logic
      console.log('Sign In with Google');
    }

   const showLogin = ()=>{
  emit('show-login')
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
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  <div class="input-details">
      <div class="creat-login">
        <h2>Get started for free</h2>
      <span>Already have an account?</span>
         <div class="Login" @click="showLogin()">Login</div>
        </div>
          <!-- <g-sign-in-button clientid="YOUR_CLIENT_ID" @onsuccess="onSignIn" @onfailure="onSignInFailure"/> -->
        <form class="email-login" @submit.prevent="signUp">
          <label for="fullname">Full Name</label><br>
          <input type="text" id="fullname" name="fullname" value="">
          <br>
          <label for="email">Email Address</label>
          <br>
          <input type="text" id="email" name="email" value="">
          <br>
          <label for="password">Password</label>
          <br>
          <input type="text" id="password" name="password" value="">
          <br>
          <select v-model="country" required> 
          <option value="" disabled selected="country">Select Country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            Add your country options here
          </select>
          <button type="submit">Create Account</button>
        </form>
        <div class="team-condition">
            <span class="conditions">By signing up, I agree to Heartfelt’s Terms of Service and Privacy Policy.
          </span>
        </div>
      </div>  
  </template>



<style scoped>
.creat-login h2{
  margin-top: 5%;
  font-size: 38px;
  text-align: center;
  justify-self: center;
}

.creat-login{
  display: flex;
  align-content: center;
  flex-direction: column;
}

 span{
  margin-left: 22%;
  margin-top: -3%;
  font-weight: 300;
  color: #6B6B6B;
}

.email-login{
  margin-top: 8%;
}


.Login{
  cursor: pointer;
  margin-left: 64%;
  margin-top: -4%;
  width: 0%;
  font-weight: 300;
  color: #299E9E;
  font-size: 16px;
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
  margin-top: 2%;
  margin-left: 3%;
  width: 450px;
  height: 50px;
  font-weight: 300;
  font-size: 15px;
  color: white;
  border: 1px solid #D7D7D7;
  background-color: #299E9E;
}

.team-condition{
  margin-top: 5%;
  margin-left: 5%;
  width: 88%;
}

.conditions{
  margin-left: 0%; 
  font-size: 12px;
}



@media all and (max-width: 500px){
     


}


</style>
  