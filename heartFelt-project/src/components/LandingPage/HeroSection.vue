<script setup>

</script>

<template>

<div class="Navbar-sections">
     <div class="Navbar-sect">
         <h1>Get digital Gifts <br />Cards at Ease</h1>
         <img src="@/assets/Vector.png" class="vector-img"/>
         <p>
             Express love to friends and family all over the worlds,
             <br />with special memories of gifts.
         </p>
          <button class="Card-button">
              Send a card
          </button>
    </div>
    <div class="Cards-color">
      <img src="@/assets/colors.svg" />  
    </div>
</div>
</template>



<style scoped>
.Navbar-sectiones{
  display: flex;
  padding-top: 2%;
  flex-wrap: wrap;
  flex-direction: column;
}

.Navbar-sect{
  margin-top: 5%;
  margin-left: 10%;
  width: 30%;
}

.Navbar-sect h1{
font-size: 30px;
}
.vector-img{
   display: flex;
   height: 70px;
   margin-left: 18%;
   margin-top: -22%;
  }

 .Navbar-sect p{
  margin-top: 5%;
  font-size: 12px;
  color: #525252;
  font-weight: 200;
  }


.Card-button{
  width:25%;
  height: 30px;
  border: 0px;
  font-size: 12px;
  color: white;
  border-radius: 3px;
  background-color: #299E9E;
}

.Cards-color{
  width: 0%;
  margin-top: -15%;
  margin-left: 60%;
}

.Cards-color img{
  width: 250px;
}


/* Responsive Styles */
@media all and (max-width: 500px){
    .Navbar-sect{
      width: 60%;
      padding-top: 10px;
      align-items: center;
       flex-wrap: wrap;
       align-items: center;
       flex-direction: row;
    }
    
    .Navbar-sect h1{
      font-size: 25px;
      }
      .vector-img{
         display: flex;
         height: 45px;
         margin-left: 45%;
         margin-top: -35%;
        }

        .Navbar-sect p{
          margin-top: 10%;
          font-size: 10px;
          font-weight: 200;
          width: 130%;
        }
     
        .Card-button{
          width:50%;
          height: 36px;
          border: 0px;
          color: white;
          border-radius: 3px;
          background-color: #299E9E;
        }

        .Cards-color{
          width: 0%;
          margin-top: 20%;
          margin-left: 12%;
        }
        
        .Cards-color img{
          width: 250px;
        }
}
</style>