<script setup>


</script>

<template>
<div class="parent-card">
   <div class="get-card">
       <h4>How it works</h4>
       <h1>Get Your gift cards in seconds, <br> easy peasy </h1>
   </div>
   <div class="share-card">
      <div class="card-one">
        <img src="@/assets/cardone.svg"  class="ups-img1"/>
       <span class="Arrow-up"> <img src="@/assets/ArrowOne.svg" /></span>
        <img src="@/assets/cardtwo.svg"  class="ups-img2"/>
       <span class="Arrow-down"> <img src="@/assets/ArrowTwo.svg" /> </span>
        <img src="@/assets/CardThree.svg" class="ups-img3"/>
      </div>
   </div>
</div>
</template>



<style scoped>
.parent-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10%;
  padding-top: 5%;
  background-color: #F3F4F4;
}

.get-card{
  margin-bottom: 30px;
}

.get-card h4{
  margin: 0;
  font-size: 12px;
  color: #dc0f0f;
}

.get-card h1{
  margin: 10px 0;
  font-size: 30px;
}

.share-card{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.card-one img{
    width: 200px;
    height: 150px;
    margin: 3rem;
 }

.Arrow-up img{
    width: 80px;
    padding-bottom: 70px;
}

.Arrow-down img{
    width: 80px;
    padding-bottom: 40px;
}


/* Responsive Styles */
@media all and (max-width: 500px) {
  .parent-card{
    margin-top: 15%;
    height: 400px;
    flex-direction: column;
  }

  .get-card h1{
    font-size: 18px;
    padding-top: 5px;
  }
  
  .card-one{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
.card-one img{
    width: 80px;
    height: 50px;
    margin: 1px;
   }

   .Arrow-up{
    height: 50px;
   }
  
   .Arrow-down{
    height: 50px;
   }
}

</style>