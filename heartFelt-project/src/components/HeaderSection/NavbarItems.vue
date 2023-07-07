<script setup>
import {ref} from 'vue'
const showMenu = ref(false)
</script>



<template>
 <div class="List-items">
    <div class="Navbar-items">
        <a href="linkUrl" class="Navbar-btn-right">Occasions </a>
         <div class="Navbar-list">
            <a href="birthday">Birthday</a>
            <a href="anniversary">Anniversary</a>
            <a href="goodwill">Goodwill</a>
            <a href="festival">Festival</a>
            <a href="relationship">Relationship</a>
            <a href="love">Love</a>
            <a href="sympathy">Sympathy</a>
     </div>
     <a href="linkUrl" class="Navbar-btn-right">Try Demo</a>
     </div>  
 </div>
</template>


<style scoped>
/* Default styles */

.Navbar-btn-right{
  justify-content: center;
  border-radius: 2px;
  font-size: 12px;
  width: 100px;
  height: 40px;
  display: flex;
  margin-top: 6%;
  align-items: center;
  border: 1px solid #ccc;
  color: #0D3336;
  font-weight: 300;
  text-decoration: none;
}

.List-items{
  display: flex;
  width: 100%;
  margin-top: -3%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-bottom: 5%;
}

.Navbar-items{
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Navbar-list {
  width: 60%;
  margin-top: 6%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.Navbar-list a{
  color: #0D3336;
  font-size: 12px;
  font-weight: 300;
  text-decoration: none;
}

/* Menu styles */
.menu-bar-wrapper{
  display: flex;
  align-items: center;
}

.menu-icon{
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.menu-bar-style{
  display: none;
}

.menu-bar {
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  background-color: #f8f8f8;
  padding: 20px;
}

.menu-bar a{
  display: block;
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}


 
/* Responsive styles */
@media all and (max-width: 500px){
  .menu-class {
    display: none;
    display: block;
  }

  .menu-bar{
   display: flex;
   flex-direction: column;
  }
   .Navbar-items{
    flex-direction: column;
  }
  .Navbar-list{
    width: 100%;
  flex-direction: column;
  width: 60%;
  height: auto;
  margin-top: 6%;
  display: flex;
  gap:5px;
  z-index: 10;
  font-family: sans-serif;
 }
  
  .Navbar-btn-right{
    margin-top: 4%;
  }
}

</style>