<script setup>
import {ref, getCurrentInstance} from 'vue';
const {emit} = getCurrentInstance();
const searchInput = ref('');


const closeModal = ()=>{
  emit('close-modal')
}
</script>


<template>
 <div class="AddGiftCard">
    <span @click="closeModal()">X</span>
    <div class="search-NG">
        <h1>Add Gift Card</h1>
        <label>
          <img src="@/assets/search.svg" /> 
            <input type="text"  v-model="searchInput" placeholder="Which gift card do you want?" />
        </label>
        <h2>Smart eGirt Cards</h2>
        <p>Allow recipient to choose the brands they want when redeeming their gift card value. Give the gift of choice!.</p>
    </div>
    <div class="cloudinary-container">
    <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>
    </div>
    
    <div class="search-NG">
        <h2>Gift from Top Brand’s  </h2>
        <p>Allow recipient to choose the brands they want when redeeming their gift card value. Give the gift of choice!.</p>
    </div>
    <div class="cloudinary-container">
      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Imageggggg" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>

      <div class="cloudinaryImg">
        <img :src="cloudinaryImageUrl" alt="Card Image" />
      </div>
    </div>  
</div>
</template>




<style scoped>
.AddGiftCard{
    margin-left: 25%;
    margin-top: -13%;
    width: 46%;
    z-index: 4;
    position: fixed;
    background-color: whitesmoke;
}

 span{
    cursor: pointer;
    padding-top: 10px;
    padding: 2px;
    border-radius: 50px;
    text-align: center;
    background-color: #ddd;
  }

  .search-NG{
    margin-top: -2%;
    margin-left: 5%;
  }

  .search-NG label{
    width: 230px;
    height: 35px;
    display: flex;
    border-radius: 5px;
    border: 2px solid rgba(209, 209, 209, 1); 
}

.search-NG img{
    height: 20px;
    margin-top: 3%;
  }
  
  .search-NG label input{
  width:85%;
  height: 35px;
  background-color: unset;
  border: 0px;
  outline: none;
  }

  .search-NG h1{
    font-size: 25px;
  }

  .search-NG h2{
    margin-top: 5%;
     font-size: 20px;
     font-weight: 400;
  }

  .search-NG p{
    width: 70%;
    font-size: 10px;
    font-weight: 200;
    margin-top: -10px;
    color: rgba(82, 82, 82, 1);
  }

.cloudinary-container{
    display: flex;
    flex-wrap: wrap;
    margin-left: 5%;
    flex-direction: row;
    width: 90%;
}

.cloudinaryImg{
    width: 120px;
    height: 120px;
    margin: 5px;
    border-radius: 5px;
    border: 2px solid rgba(209, 209, 209, 1); 
 }


 @media all and (max-width: 500px){
    .AddGiftCard{
        margin-left: 5%;
        margin-top: -1%;
        width: 90%;
        z-index: 4;
        position: fixed;
        background-color: whitesmoke;
    }

    .search-NG h1{
        font-size: 20px;
      }

    .search-NG h2{
        margin-top: 5%;
         font-size: 15px;
         font-weight: 400;
      }

    .search-NG p{
        width: 70%;
        font-size: 8px;
        font-weight: 200;
        margin-top: -10px;
        color: rgba(82, 82, 82, 1);
      }

    .cloudinary-container{
        display: flex;
        flex-wrap: wrap;
        margin-left: 5%;
        flex-direction: row;
        width: 95%;
    }

    .search-NG label input{
        width:80%;
        height: 25px;
        background-color: unset;
        border: 0px;
        outline: none;
        }
   
    .cloudinaryImg{
        width: 80px;
        height: 80px;
        margin: 5px;
        border-radius: 5px;
        border: 2px solid rgba(209, 209, 209, 1); 
     }  
 }
</style>