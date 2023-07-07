<script setup>
import LogoImage from '@/assets/logo.svg';
</script>

<template>
  <div class="logo-container">
    <div class="logo-items">
      <router-link to="/home">
        <img :src="LogoImage" alt="Logo" />
      </router-link>
      <p class="date-logo">@ 1995 - 2023 GiftCard Inc. All Rights Reserved.</p>
    </div>

    <div class="list-box">
        <a href="linkUrl" class="space">Projuct</a>
        <a href="linkUrl" class="space">Features</a>
        <a href="linkUrl" class="space">Support</a>
   </div>

</div>
</template>


<style scoped>
   .logo-container{
    display: flex;
    margin-bottom: 3%;
    justify-content: center;
    justify-content: space-between;
   }

   .logo-items{
      display: flex;
      margin-top: 2%;
      align-items: center;
      margin-left: 9%;
   }

   .date-logo{
    display: flex;
    padding-left: 10px;
    color: #6B6B6B;
 }

 .logo-items p{
  display: flex;
  font-size: 15px;
  color: #6B6B6B;
}
  
    .list-box {
        display: flex;
        margin-right: 12%;
        margin-top: 2%;
        font-size: 15px;
        align-items: center;
        color: #6B6B6B;
    }

    .list-box a{
      color: #6B6B6B;
      text-decoration: none;
    }

    .space{
      margin: 2rem;
    }

    @media all and (max-width: 500px){
      .logo-container{
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
      }
      .logo-items {
        flex-wrap: wrap;
        margin-left: 10%;
        flex-direction: row;
       }
       
       .logo-items p{
        font-size: 12px;
      }

       .date-logo{
         margin-left: -3%;
       }

       .list-box {
        display: flex;
        margin-top: 1%;
        margin-left: 2%;
        font-size: 12px;
    }
}
</style>