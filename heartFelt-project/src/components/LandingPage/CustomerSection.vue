<script setup>
const isSmallScreen = () => {
  return window.innerWidth < 640;
};
</script>

<template>
  <div class="customise-container">
    <div class="customer-details">
      <img class="fork-img" src="@/assets/Scribble.svg" />
      <h1> Customise Gift <span>Card for free </span></h1>
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
  margin-left: 33%;
 margin-right: 30%;
 margin-top: -3%;
}

h1{
  font-size: 25px;
  color: #000E1F;
}

.customer-details img{
  margin-left: 53%;
  margin-top: 2%;
}

.fork-img{
  width: 250px;
}

.customer-details p{
  align-items: center;
  padding-left: 40%;
  color: #6B6B6B;
  font-size: 15px;
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
 @media all and (max-width: 500px){
  .customise-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 15%;
    height: 300px;
  }

  .customer-details{
    margin-left: 8%;
    margin-right: 8%;
    width: 100vh;
    height: 300px;
 }

  .fork-img{
   padding-top: 10%;
    width: 120px;
  }
  .customer-details h1 {
      font-size: 20px;
       margin-left: 20%;
       margin-right: 20%;
  }

  h1, span{
    margin-left: 7%;
  }

  .customer-details p {
    margin-top: 20px;
      padding-left: 15%;
      font-size: 15px;
  }

  .customer-details button {
      margin-top: 12%;
      margin-left: 23%;
      width: 150px;
      height: 40px;
  }
}
</style>