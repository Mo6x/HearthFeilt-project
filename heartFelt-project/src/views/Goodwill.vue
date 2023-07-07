<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import GoodwillCards from "@/components/CardsCategories/Goodwill/GoodwillCards.vue";
import CostomerSection from "@/components/CardsCategories/Goodwill/CostomerSection.vue";
import Footersection from "@/components/CardsCategories/Goodwill/Footersection.vue";
import LogoSection from "@/components/CardsCategories/Goodwill/LogoSection.vue";
</script>


<template>
    <div class="header">
    <AppHeader/>
   <GoodwillCards />
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