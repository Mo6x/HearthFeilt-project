<script setup>
import { ref, watch, onMounted, onUnmounted  } from 'vue';
import { AkTextAlignJustified } from "@kalimahapps/vue-icons";
import NavbarSection from "@/components/HeaderSection/NavbarSection.vue";
import NavbarItems from "@/components/HeaderSection/NavbarItems.vue";

const show_menu = ref(false)
const window_width= ref(0)

const handleResize = () => {
    window_width.value = window.innerWidth
    }

    onMounted(() => {
        window_width.value = window.innerWidth
      window.addEventListener('resize', handleResize)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })
    watch(window_width, () => {
      if (window_width.value <= 500) {
        show_menu.value = false
      } else {
        show_menu.value = true
      }
    })


</script>
<template>
    <transition name="slide-down">
    <div class="app-menu">
        <div class="top-header">
            <div class="top-image">
                <img class="HeartFelt" src="@/assets/heartfelt-logo.svg" />
                <div class="mobile-menu">
                    <AkTextAlignJustified @click="show_menu = !show_menu"/>
                </div>
            </div>
            <NavbarSection v-if="show_menu"/>
        </div>
        <NavbarItems v-if="show_menu"/>
    </div>
    </transition>
</template>


<style scoped>
.slide-down-enter-active .slide-down-leave-active {
  transition: all 0.5s;
}

.slide-down-enter,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.mobile-menu {
    padding-top: 0.5%;
    font-size: 3rem;
    display: none;
}
.menu{
    display: none;
}

.top-header {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    gap: 2%;
    padding: 0 3%;
    position: relative;
}

.top-image{
    margin-top: 1%;
    display: flex;
    margin-left: 2%;
    justify-items: center;
   justify-content: space-between;
}


@media all and (max-width: 500px) {
.app-menu{
    width: 50vh;
    z-index: 0;
    margin-top: -2%;
    background-color: white;
}
    .mobile-menu {
        padding-top: 0.5%;
        font-size: 25px;
        display: block;
    }
    
    .top-image img{
      width: 110px;
      height: 28px;
    }

  .top-header {
    flex-direction: column;
  }

  .show-menu{
    display: block;
  }
}
</style>