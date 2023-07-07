<script setup>

</script>

<template>
    <div class="images-details">
          <div class="send-modal">
           <img src="@/assets/lovecard.svg" />
            </div>
     <div class="images-aticle">
         <h1>Share to loved ones on <br>
         <span class="moment"> special moments </span>
         </h1>
         <p>
           Tap into the gift bag to share love in the most <br>
           amazing way. Change preference to suit that <br>
           special one with no extra cost.  
         </p>
         <div class="send-link">
         <a href="linkUrl">Send a card</a>
         <img src="@/assets/arrow.svg" />
       </div>
     </div>
     </div>
</template>


<style>
.images-details{
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    justify-content: space-between;
  }
    
   .send-modal{
    margin-top: -3%;
    margin-left: 10%;
   }
    
   .send-modal img{
    margin-left: 12%;
      width: 250px;
  }

  .images-aticle{
    margin-right: 10%;
  }
  
  .images-aticle h1{
       font-size: 25px;
  }
  
  .images-aticle p{
    width: 350px;
    font-size: 12px;
    color: #6B6B6B;
    font-weight: 200;
  }
  
  .send-link{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    }
  
    .send-link a{
      font-size: 12px;
       color: #299E9E;
       text-decoration: none;
    }
  
    .send-link img{
      height: 20px;
      width: 20px;
    }
  
  /* Responsive Styles */
  
  @media all and (max-width: 500px){
    .images-details{
      display: flex;
      margin-top: 10%;
      flex-direction: column-reverse;
    }
  
    .send-modal{
      margin-top: 10%;
        margin-left: 8%;
    }
    
    .send-modal img{
      margin-left: 8%;
      width: 230px;
  }
  
   .images-aticle{
    margin-top: 5%;
   }

    .images-aticle h1{
        font-size: 20px;
        margin-left: 18%;
    }

    .moment{
      margin-left: 10%;
    }

    .images-aticle p{
      font-size: 10px;
      font-weight: 200;
      margin-left: 20%;
  }
 
  .send-link{
    display: flex;
    margin-left: 45%;
  }
  .send-link a{ 
    font-size: 10px;
    color: #061818;
  }

  .send-link img{ 
    color: #061818;
  }
  }
</style>