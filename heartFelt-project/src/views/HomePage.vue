<script setup>
import AppHeader from "@/components/HeaderSection/AppHeader.vue";
import HeroSection from "@/components/LandingPage/HeroSection.vue";
import verifedCompanies from "@/components/LandingPage/verifedCompanies.vue";
import PersonalCard from "@/components/LandingPage/PersonalCard.vue";
import PersonalCardsImge from "@/components/LandingPage/PersonalCardsImge.vue";
import GetGiftCard from "@/components/LandingPage/GetGiftCard.vue";
import ChooseHeartfelt from "@/components/LandingPage/ChooseHeartfelt.vue";
import Community from "@/components/LandingPage/Community.vue";
import AffordPricing from "@/components/LandingPage/AffordPricing.vue";
import CustomerSection from "@/components/LandingPage/CustomerSection.vue";
import FooterSection from "@/components/LandingPage/FooterSection.vue";
import LogoSection from "@/components/LandingPage/LogoSection.vue";
</script>


<template>
  <div class="header">
    <AppHeader/>
    <HeroSection />
    <verifedCompanies />
    <PersonalCard />
    <PersonalCardsImge />
    <GetGiftCard />
    <ChooseHeartfelt />
    <Community />
    <AffordPricing />
    <CustomerSection />
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