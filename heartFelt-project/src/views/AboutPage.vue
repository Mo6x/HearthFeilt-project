<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import HeroSection from "@/components/About-Page/HeroSection.vue";
import ChooseHeartfelt from "@/components/About-Page/ChooseHeartfelt.vue";
import CostomerSection from "@/components/About-Page/CostomerSection.vue";
import Footersection from "@/components/About-Page/Footersection.vue";
import LogoSection from "@/components/About-Page/LogoSection.vue";
</script>


<template>
    <div class="header">
    <AppHeader/>
    <HeroSection />
    <ChooseHeartfelt />
    <CostomerSection />
    <Footersection />
    <hr class="line">
    <LogoSection />
    </div>
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