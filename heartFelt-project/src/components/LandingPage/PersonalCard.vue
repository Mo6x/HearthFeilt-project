<script scoped>


</script>


<template>
    <div class="gift-card">
      <div class="gift-card-one">
        <div class="card-detail">
             <h1>personalise gift cards <br>
            to preference
            </h1>
           <p>
            Tap into the gift bag to share love in the most <br> 
            amazing way. Change preference to suit that  <br> 
            special one with no extre cost.
          </p> 
          <div class="customise">
          <a href="linkUrl">Customise a card</a>
          <img src="@/assets/arrow.svg" class="arrow-img"/>
        </div>
        </div>

        <div class="Images-items">
              <img src="@/assets/Editcardillustration.svg" />
              </div>
      </div>  
   </div> 
</template>



<style scoped>
.gift-card{
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: space-between;
}

.gift-card-one{
  display: flex;
  margin-left: 10%;
  justify-content: space-between;
}

.card-detail{
  margin-top: 10%;
}

.card-detail h1{
   font-size: 25px;
}

.card-detail p{
  width: 600px;
  color: #6B6B6B;
  font-size: 12px;
  font-weight: 200;
}

.customise{
  display: flex;
  position: relative;
}

.card-detail a{
 padding-top: 8px;
 color: #299E9E;
  font-size: 12px;
  text-decoration: none;
}

.Images-items{
    margin-right: 13%;
    margin-top: 3%;
}

.Images-items img{ 
  margin-left: -20%;
  width: 250px;
  
}



/* Responsive Styles */
@media all and (max-width: 500px) {
  .gift-card{
    margin-top: 10%;
  }

  .gift-card-one{
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }

  .card-detail h1{
    font-size: 20px;
    text-align: center;
  }

  .card-detail p{
    width: 100%;
    text-align: center;
    font-size: 10px;
   
  }

  .customise{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card-detail a{
    font-size: 10px;
    padding-top: 5px;
    text-align: center;
    margin-right: 10%;
    color: #061818;
  }
  
  .arrow-img{
    width: 20px;
    margin-top: -7%;
    margin-left: 50%;
    color: #061818;
  }

  .Images-details{
    margin-right: 0;
    margin-top: 20px;
  }

  .Images-items{
    margin-top: 10%;
    justify-content: center;
  }

  .Images-items img{
   width: 250px;
    margin-left: 5%;
    justify-content: center;
  }
}

</style>