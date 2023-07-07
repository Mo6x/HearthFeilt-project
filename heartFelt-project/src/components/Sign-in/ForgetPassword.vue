<script setup> 
import {ref, getCurrentInstance} from 'vue';
const {emit} = getCurrentInstance()
const email = ref('')
const showLogin = ()=>{
  emit('show-login')
}
</script>


<template>
<div class="input-details">
    <div class="creat-login">
    <h1> Forgot your password?</h1>
     <span>Enter email linked to your account. We’ll send a a password reset email.</span>

     <form class="email-login">
       <label for="fname">Email Address</label>
         <input type="text" id="fname" name="fname" value="">
        <button @click="sendResetEmail">Send Reset Email</button>
        <!-- <div v-if="notification" class="notification">
          {{ notification }}
        </div> -->
    </form>
      <div class="modal-footer">
        <span  @click="showLogin()">Back to login</span>
      </div>
  </div>
</div>
</template>


<style scoped>
.creat-login{
    display: flex;
    align-content: center;
    flex-direction: column;
  }
 
  .creat-login h1{
    font-size: 30px;
    width: 70%;
     margin-left: 18%;
  }

  .email-login{
     margin-top: 8%;
  }

  span{
    margin-left: 15%;
    margin-top: -1%;
    font-weight: 300;
    width: 68%;
    color: #6B6B6B;
  }

  
  form label{
    font-size: 20px;
    margin-left: 10%;
  }
  
  form input{
    width: 450px;
    height: 40px;
    border-radius: 5px;
    margin-left: 9%;
    border: 1px solid #D7D7D7;
  }
  
  button{
    margin-top: 5%;
    margin-left: 9%;
    width: 450px;
    height: 50px;
    font-weight: 300;
    font-size: 15px;
    color: white;
    border: 1px solid #D7D7D7;
    background-color: #299E9E;
  }

  .modal-footer{
    margin-top: 5%;
    margin-left: 30%;
  }

  .modal-footer span{
    
    color: #299E9E;
  }

</style>