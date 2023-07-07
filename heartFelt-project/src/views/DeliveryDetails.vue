<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import DeliveryDetail from "@/components/DeliveryDetails/DeliveryDetail.vue";
import CustomerSection from "@/components/DeliveryDetails/CustomerSection.vue";
import Footersection from "@/components/DeliveryDetails/Footersection.vue";
import LogoSection from "@/components/DeliveryDetails/LogoSection.vue";
</script>


<template>
   <AppHeader />
   <DeliveryDetail />
   <CustomerSection />
   <Footersection />
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