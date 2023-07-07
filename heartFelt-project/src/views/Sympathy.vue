<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import SympathyCards from "@/components/CardsCategories/Sympathy/SympathyCards.vue";
import CostomerSection from "@/components/CardsCategories/Sympathy/CostomerSection.vue";
import Footersection from "@/components/CardsCategories/Sympathy/Footersection.vue";
import LogoSection from "@/components/CardsCategories/Sympathy/LogoSection.vue";
</script>


<template>
    <div class="header">
    <AppHeader/>
   <SympathyCards />
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