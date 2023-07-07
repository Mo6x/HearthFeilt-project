
<script setup>
import {ref} from 'vue';
import SiginComponenet from '@/components/Sign-in/SiginComponenet.vue';
const searchInput = ref('');
const showSignup = ref(false);
const showLogin = ref(false);
</script>


<template>
  <SiginComponenet v-on:close-modal="showSignup = false" v-if="showSignup"/>
    <div class="NavBar-hero"> 
            <div class="Navbar-head">
                <router-link to="/about">About</router-link>
                <router-link to="/pricing">Pricing</router-link>
                  <router-link to="/deliveryDetails">Try Demo</router-link>
            </div>

            <div class="Navbar-search">
                <label>
                  <img src="@/assets/search.svg" /> 
                    <input type="text"  v-model="searchInput" placeholder="Search " />
                </label>
                <div class="linking">
                    <button class="signup-btn" @click="showSignup = true">Sign in</button>
                    <button class="Card-button">
                        Send a card
                    </button>
              </div>
            </div>
    </div>    

</template>


<style scoped>
  .NavBar-hero{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
  }

    .Navbar-head{
       margin-top: 20px;
       margin-left: 0%;
        display: flex;
        font-size: 12px;
        align-items: center;
        height: 50px;
        width:20%;
        gap: 3%; 
    }
    .Navbar-head a{
        color: #0D3336;
        font-weight: 300;
        text-decoration: none;
    }

    .Navbar-search{
        display: flex;
        width:30%;
        margin-right: 3%;
        align-items: center;
        justify-content: flex-end;
    }
        
.Navbar-search label{
    width: 250px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    border: 1px solid #ccc;
    background-color: white;
}

.Navbar-search img{
  height: 15px;
  margin-top: 5%;
}

.Navbar-search label input{
width:85%;
height: 25px;
border: 0px;
outline: none;
background-color: unset;
}
.linking{
     margin: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.linking .signup-btn{
   height: 30px;
   width: 70px;
   cursor: pointer;
   margin: 1px;
   color: rgba(41, 158, 158, 1);
   border: 1px solid #F3F3F4;
   background-color: rgba(212, 236, 236, 1);
}

.linking button{
  margin-left: 2%;
  height: 30px;
  width: 100px;
  font-size: 12px;
  color: #F3F3F4;
  cursor: pointer;
  border: 1px solid #57D4D4;
  background-color: #299E9E;
}

.Navbar-btn-right{
  justify-content: center;
  border-radius: 2px;
  width: 100px;
  height: 40px;
  display: flex;
  margin-top: 6%;
  align-items: center;
  border: 1px solid #ccc;
}

.List-items{
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
}

.Navbar-items {
  width: 80%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Navbar-list{
  width: 60%;
  height: 40px;
  margin-top: 6%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: sans-serif;
}

.Navbar-btn-left{
  display: contents;
  align-self: flex-end;
}


/* Responsive styles */
@media all and (max-width: 500px) {
  .Navbar-head{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }

  .NavBar-hero{
    flex-direction: column;
  }
  .Navbar-search{
    gap: 10px;
  flex-direction: column;

}

.linkt button{
  width: 100%;
}
}

  
</style>