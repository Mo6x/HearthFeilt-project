<script setup>

</script>

<template>

    <div class="verifed-companies">
        <div class="companies-numbers">
             <h1> 650,000+</h1> 
             <img class="greenlines" src="@/assets/greenline.svg" />
             <p>Verified Companies</p>
          </div>

        <div class="companies-images">
        <img src="@/assets/apple.svg" />
        <img src="@/assets/Amazon.svg" />
        <img src="@/assets/mecorsoft.svg" >
        <img src="@/assets/mecorsoft.svg" />
        <img src="@/assets/mecorsoft.svg" />
        <img src="@/assets/Titok.svg" />
      </div>
       
   </div>
</template>



<style scoped>
.verifed-companies{
   display: flex;
   flex-wrap: wrap;
   margin-top: 10%;
   align-content: center;
   justify-content: space-between;
}

.companies-numbers{
  margin-top: 5px;
  flex-direction: row;
  margin-left: 10%;
}

.companies-numbers h1{
   height: 0px;
   font-size: 25px;
   color: #AAE9E9;
}

 .greenlines{
  width: 125px;
  height: 9px;
  margin-top:  15px;
 }

.companies-numbers p{
  font-size: 14px;
  font-weight: 300;
}

.companies-images{
  display: flexbox;
  height: 120px;
  margin-right: 12%;
  border-radius: 5px;
  background-color:  #F3F4F4;
  border: 3px solid  #F3F4F4;
}

.companies-images img{
   margin: 2rem;
   width: 70px;
}

/* Media query for screens smaller than 600px */
@media all and (max-width: 500px){
  .companies-numbers{
    margin-top:  10%;
   margin-left: 27%;
  }

.companies-numbers h1{
  height: 0px;
  font-size: 30px;
}

.greenlines{
  width: 140px;
  height: 8px;
 }

 .companies-numbers p{
  font-size: 10px;
  margin-top: -1%;
  font-weight: 200;
  margin-left: 12%;
}

.companies-images{
  margin-top: 5%;
  margin-left: 10%;
   width: 80%;
}

.companies-images img{
  margin: 1rem;
  width: 50px;
}
}
</style>