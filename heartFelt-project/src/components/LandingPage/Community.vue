<script setup>

</script>



<template>
<div class="community-container">
     <h1 class="topic">How we help the <span class="community">community</span></h1>
     
     <div class="community-items">  
         <div class="community-life">
            <img src="@/assets/hotel.svg" class="image1"/> 
            <img src="@/assets/friends.svg" class="image2"/>
         </div>
            <div class="support-life">
             <h1>Supporting the life of <br><span class="supporting">
                people around the
                world.</span>
            </h1> 
            <p>
               A portion of every card that is <br>
               purchased helps save a life through <br>
               our partnership with the non-profit <br>
               organiation. 
            </p> 
            <img src="@/assets/thirty.svg" />
          </div>
        </div>
         <div class="imge-happy">
             <img src="@/assets/nintyfive.svg" class="parcentage"/>
             <img src="@/assets/happiness.svg" class="children"/>
         </div>
 
</div>
</template>



<style scoped>
 .community-container{
    margin-top: 8%;
    background-color: #F3F4F4;
 }

 .topic{
  margin-left: 35%;
 padding-top: 30px;
  font-size: 25px;
  width: 30%;
}

 .community-items{
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: row;
  justify-content: space-between;
 }

 .community-life{
  margin-top: 5%;
   width: 0px;
  display: flex;
 }
  .image1 {
    height: 200px;
   z-index: 1;
}

.image2 {
margin-top: 80px;
margin-left: -100px;
height: 200px;
z-index: 2; 
background-color: aqua;
}
  
.support-life{
  margin-top: 5%;
}

.support-life p{
  font-size: 12px;
  font-weight: 100;
}

.support-life  h1{
  font-size: 25px;
}

.support-life img{
  margin-top: 10%;
  margin-left: -30%;
  width: 50%;
}


.imge-happy{
    display: flex;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: row;
    justify-content: space-between;
}

.imge-happy .parcentage{
  margin-top: 5%;
   width: 14%;
   margin-bottom: 15%;
}

.imge-happy .children{
    width: 400px;
}


/* Media query for screens smaller than 600px */
@media all and (max-width: 500px){
  .community-container{
      margin-top: 10%;
      flex-wrap: wrap;
      flex-direction: row;
      margin-left: -1%;
      background-color: #299E9E;
  }

.topic{
  padding-top: 20%;
  font-size: 23px;
  margin-left: 25%;
  color: white;
  width: 60%;
}

 .community{
   margin-left: 10%;
 }
  .community-item{
    width: 0%;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .community-life{
    margin-top: 10%;
    padding-left: 3%;
  }
  .image1 {
  height: 200px;
   z-index: 1;
}
.image2 {
height: 200px;
z-index: 2; 
}

.support-life{
  margin-top: 20%;
  flex-wrap: wrap;
  margin-right: 30px;
  width: 100%;
  flex-direction: row;
}

.support-life h1{
  margin-left: 10%;
  font-size:  20px;
  width: 100%;
  color: white;
}

.supporting{
  margin-left: -5%;
  width: 100%;
}

.support-life p{
  display: flex;
  font-size: 10px;
  margin-left: 20%;
  font-weight: 100;
  color: white;
}

.support-life img{
  margin-left: 60px;
  width: 150px;
}
 
   .imge-happy{
    width: 0%;
    flex-wrap: wrap;
    margin-top: 10%;
    flex-wrap: wrap;
    flex-direction: row;
   }

  .parcentage{
    height: 130px;
   padding-left: 75px;
  
  }

  .children{
    height: 130px;
    margin-top: 15px;
   margin-bottom: 30px;
  }
}
  </style>