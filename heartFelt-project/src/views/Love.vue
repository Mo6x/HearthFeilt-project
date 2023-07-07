<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import LoveCards from "@/components/CardsCategories/Love/LoveCards.vue";
import CostomerSection from "@/components/CardsCategories/Love/CostomerSection.vue";
import FooterSection from "@/components/CardsCategories/Love/FooterSection.vue";
import LogoSection from "@/components/CardsCategories/Love/LogoSection.vue";
</script>


<template>
    <div class="header">
    <AppHeader/>
   <LoveCards />
   <CostomerSection />
   <FooterSection />
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