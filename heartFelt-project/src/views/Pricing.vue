<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import AffordPricing from "@/components/Pricing/AffordPricing.vue";
import KeyFeatures from "@/components/Pricing/KeyFeatures.vue";
import CostomerSection from "@/components/Pricing/CostomerSection.vue";
import Footersection from "@/components/Pricing/Footersection.vue";
import LogoSection from "@/components/Pricing/LogoSection.vue";
</script>


<template>
    <div class="header">
        <AppHeader/>
        <AffordPricing />
        <KeyFeatures />
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