<script setup>
  
</script>

<template>
   <div class="heartfelt">
      <div class="shared-card">
         <div class="fast-share">
              <h1>The fastest way to share <br>
                gift cards to people
            </h1>
            <p>
                Whether you're celebrating a loved one or <br>
                family, Heartfelt helps you to share the love <br>
                and care virtully. Nothing is not a barrier.
            </p>
            <div class="share-info">
            <img src="@/assets/markgood.svg" />
            <a href="linkUrl">Purchase at Discounts</a>
            </div>
            <div class="share-info">
                <img src="@/assets/markgood.svg" />
                <a href="linkUrl">Share to muiltple people</a>
                </div>
                <div class="share-info">
                    <img src="@/assets/markgood.svg" />
                    <a href="linkUrl">Deliver at any location</a>
                    </div>
         </div>
         <div class="share-imge">
            <img src="@/assets/handimg.svg" />
         </div>
      </div>
       
      
      <div class="container-felt">
         <div class="H1-container">
              <h1>
               How Heartfelt meeets you at <br>
               <spn class="special">every special mement </spn>
              </h1>
         </div>
          <div class="container-colors">
               <div class="gift-cards">
                  <img src="@/assets/giftcard.svg" /> 
                  <h1>Gift Cards</h1>
                  <p>
                     Tap into the gift bag to share <br>
                     love in the most amazing <br> way. amazing
                  </p>
               </div>
               
               <div class="gift-cards">
                  <img src="@/assets/signature.svg" /> 
                  <h1>Digital Signature</h1>
                  <p>
                     Tap into the gift bag to share <br>
                     love in the most amazing <br> way. amazing
                  </p>
               </div>

               <div class="gift-cards">
                  <img src="@/assets/direct.svg" /> 
                  <h1>Direct sharing</h1>
                  <p>
                     Tap into the gift bag to share <br>
                     love in the most amazing <br> way. amazing
                  </p>
               </div>
          </div>
      </div>
      
   </div>
  
</template>


<style scoped>
.heartfelt{
    margin-top: 10%;
}

.shared-card{
   display: flex;
   margin-left: 10%;
   margin-right: 10%;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: space-between;
}

.fast-share h1{
  font-size: 30px;
}

.fast-share p{
 color: #6B6B6B;
 font-size: 15px;
}

.share-info a{
   font-size: 15px;
   margin-left: 4%;
   color: #6B6B6B;
}

.share-info{
   display: flex;
   flex-direction: row;
}
.share-info img{
 height: 20px;
}

.share-imge img{
  height: 300px;
}

.container-felt{
   display: flex;
   margin-top: 5%;
   flex-wrap: wrap;
   flex-direction: column;
}

.H1-container{
  font-size: 13px;
   margin-left: 10%;
}

.container-colors{
   display: flex;
   margin-top: 10%;
   margin-left: 10%;
   margin-right: 10%;
   justify-content: space-between; 
}

.gift-cards p{
   font-size: 15px;
   color: #6B6B6B;
   font-weight: 300;
}

.gift-cards h1{
   font-size: 12px;
}


 /* Media query for screens smaller than 600px */
 @media all and (max-width: 500px) {
  .heartfelt{
    margin-top: 20%;
  }
.shared-card, .share-info, .select-card, .slide-container{
    flex-direction: column;
    align-items: center;
  }

  .fast-share h1{
   font-size: 20px;
 }

 .fast-share p{
   font-size: 10px;
   padding-left: 20px;
 }

 .share-info{
   display: flex;
   margin-right: 10%;
   flex-direction: row;
   justify-content: center;
 }

 .share-info img{
   height: 12px;
   padding-left: 5px;
 }

 .share-info a{
   font-size: 10px;
   margin-left: 4%;
   color: #6B6B6B;
}

.share-imge{
   height: 0px;
}

.share-imge img{
   height: 250px;
   width: 120%;
   margin-top: 40px;
   margin-left: -13%;
 }


 .container-felt{
   display: flex;
   margin-top: 90%;
   margin-left: 0px;
   flex-wrap: wrap;
   flex-direction: row;
}

.H1-container{
  font-size: 10px;
   margin-left: 15%;
}

.special{
   margin-left: 10%;
}

.container-colors{
   align-items: center;
   margin-top: 10%;
   margin-left: 15%;
   width: 60%;
   flex-wrap: wrap;
   flex-direction: column;
}

.gift-cards p{
   font-size: 10px;
   color: #6B6B6B;
   font-weight: 200;
   margin-left: 10px;
}

.gift-cards h1{
   font-size: 15px;
   margin-left: 25px;
}

.gift-cards img{
   margin-left: 55px;
}
  
}
</style>