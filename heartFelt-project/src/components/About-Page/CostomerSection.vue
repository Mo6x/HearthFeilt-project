<script setup>
const isSmallScreen = () => {
  return window.innerWidth < 640;
};
</script>

<template>
  <div class="customise-container">
    <div class="customer-details">
      <img class="fork-img" src="@/assets/Scribble.svg" />
      <h1> Customise Gift Card for free</h1>
      <p>
        Express your love, so easy!
      </p>
       <button>Get started</button>
      </div>
    </div>
</template>



<style scoped>
  .customise-container{
    margin-top: 8%;
    height: 500px;
   }

  .customer-details{
     align-items: center;
     margin-left: 10%;
     margin-right: 10%;
     height: 300px;
     border-radius: 15px;
     background-color: #F2F9FD;
  }

  .customer-details h1{
    align-items: center;
    margin-left: 32%;
   margin-right: 30%;
   margin-top: -3%;
  }

  h1{
    font-size: 30px;
    color: #000E1F;
  }

  .customer-details img{
    margin-left: 55%;
    margin-top: 2%;
  }

  .fork-img{
    width: 250px;
  }

  .customer-details p{
    align-items: center;
    padding-left: 35%;
    color: #6B6B6B;
    font-size: 25px;
    font-weight: 300;
  }

  .customer-details button{
    align-items: center;
    margin-left: 42%;
    box-sizing: border-box;
    width: 150px;
    height: 50px;
    padding: 10px;
    border-radius: 25px;
    color: white;
    border: 3px solid #57D4D4;
   background-color: #57D4D4;
   }


   /* Media Query for Mobile Devices */
   @media only screen and (max-width: 600px) {
    .customise-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      margin-top: 20%;
      height: 300px;
    }

    .customer-details{
      width: 350px;
      height: 300px;
      align-items: center;
   }

    .fork-img{
     padding-top: 10%;
      width: 120px;
    }
    .customer-details h1 {
        font-size: 15px;
        width: 40%;
    }

    .customer-details p {
      margin-top: 20px;
        padding-left: 18%;
        font-size: 15px;
    }

    .customer-details button {
        margin-top: 12%;
        margin-left: 30%;
    }
}
</style>