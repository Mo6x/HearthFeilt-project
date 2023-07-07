<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import Condition from "@/components/TeamAndCondition/Condition.vue";
import Footersection from "@/components/TeamAndCondition/Footersection.vue";
import LogoSection from "@/components/TeamAndCondition/LogoSection.vue";
</script>


<template>
<AppHeader />    
<Condition />
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