<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import MyProfile from "@/components/MyProfile/MyProfile.vue";
import CustomerSection from "@/components/MyProfile/CustomerSection.vue";
import FooterSection from "@/components/MyProfile/FooterSection.vue";
import LogoSection from "@/components/MyProfile/LogoSection.vue";
</script>


<template>
<AppHeader />
<MyProfile />
<CustomerSection />
<FooterSection />
<LogoSection />
</template>


<style scoped>
  .header{
    width: 100vw;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .line{
    margin-top: 10%;
  }

  @media all and (max-width: 500px){
    .header{
      width: 50vh;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
</style>