<script setup>

</script>


<template>
   <div class="affordable-pricing">
       <h1>Affordable Pricing</h1>
       <div class="affordable-content">
          <div class="pricing-para">
                <p>Here is what they have to say</p>
          </div>
            <div class="payment">
                <h4 class="payment-yearly">pay yearly</h4>
                <h4 class="pacentage">-$80</h4>
                <h4 class="pay-monthly">Pay monthly</h4>
            </div>
            <div class="card-section-list">   
               <div class="card-list-item">
                 <div class="pricing-card">
                    <span class="pricing-info">
                        <h5 class="premium">Premium</h5>
                        <div class="amount-method">
                            <h2>$19</h2>
                            <h6>user / month</h6>
                        </div>
                    </span>
                    <p class="pricing-desc">
                        Aenean at lectus posuere enim id nec. <br>
                        Molestie neque, sed fusce faucibus.
                    </p>
                     <hr>
                     <div class="pricing-list-img">
                        <img src="@/assets/pricing.svg" /> 
                     </div>
                     <button>Primary Action</button>
                 </div>
                 
                 <div class="pricing-card">
                  <span class="pricing-info">
                    <div class="fire-image">
                      <h5 class="premium">Team</h5>
                      <img src="@/assets/fire.svg" /> 
                    </div> 
                      <div class="amount-method">
                          <h2>$19</h2>
                          <h6>user / month</h6>
                      </div>
                  </span>
                  <p class="pricing-desc">
                      Aenean at lectus posuere enim id nec. <br>
                      Molestie neque, sed fusce faucibus.
                  </p>
                   <hr>
                   <div class="pricing-list-img">
                      <img src="@/assets/pricing.svg" /> 
                   </div>
                   <button>Primary Action</button>
               </div>

               <div class="pricing-card">
                  <span class="pricing-info">
                      <h5 class="premium">Business</h5>
                      <div class="amount-method">
                          <h2>Custom pricing</h2>
                      </div>
                  </span>
                  <p class="pricing-desc">
                      Aenean at lectus posuere enim id nec. <br>
                      Molestie neque, sed fusce faucibus.
                  </p>
                   <hr>
                   <div class="pricing-list-img">
                      <img src="@/assets/pricing.svg" /> 
                   </div>
                   <button>Primary Action</button>
               </div>
              </div>
            </div>
       </div>
   </div>
</template>


<style scoped>
   .affordable-pricing{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 5%;
   }

   .affordable-pricing h1{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200%;
   }


   .affordable-conten{
     width: fit-content;
   }

   .pricing-para{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100%;
    margin-top: -2%;
    font-weight: 300;
   }

  .payment{
    display: flex;
    margin-top: -2%;
    align-items: center;
    justify-content: center;
  }

  .payment-yearly{
    display: flex;
     font-weight: 300;
  }

  .pacentage{
    color: #22C55E;
    margin-left: 10px;
    border-radius: 2%;
    border: 2px solid #299E9E;
    background-color: #5eb2b289;
  }

  .pay-monthly{
   margin-left: 10px;
    font-weight: 200;
  }


  .card-list-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .premium{
    font-size: 15px;
    margin-left: 5%;
    color: #299E9E;
  }

  .fire-image{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .fire-image img{
    width: 85px;
    height: 18px;
    margin-top: 12%;
    margin-right: 5%;
    display: flex;
    border-radius: 20px;
    border: 3px solid #299e9e78;
    background-color: rgba(41, 158, 158, 0.2);
  }

 .amount-method{
    display: flex;
    margin-left: 5%;
    margin-top: -10%;
 }

 .amount-method h6{
    display: flex;
    margin-top: 10%;
    margin-left: 2%;
    color: #737373;
    font-weight: 100;
 }

 .pricing-desc{
    margin-left: 5%;
    font-size: 12px;
    color: #737373;
    font-weight: 300;
 }

 .pricing-list-img{
    color: #737373;
 }

 .pricing-list-img img{
  width: 300px;
  height: 250px;
}

 button{
   font-size: 15px;
   color: white;
   width: 90%;
   height: 45px;
   margin-top: 5%;
   margin-left: 5%;
    margin-bottom: 5%;
    border-radius: 5px;
    background-color: #299E9E;
    border: 1px solid #299E9E;
 }

  .pricing-card{
    margin-top: 3%;
    margin-left: 2%;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid whitesmoke;
    width: 20%;
  }



 @media all and (max-width: 500px){
 .affordable-pricing{
     padding-top: 60px;
  }

  .card-section-list:not(:first-child)  {
    display: none;
  }

  .card-list-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }

  .affordable-pricing h1{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
   }

   .pricing-para p{
     margin-top: -2px;
      font-size: 12px;
   }

   .payment h4{
    margin-top: -1px;
     font-size: 12px;
   }

   .amount-method h2{
    font-size: 15px;
   }

   .pricing-desc{
      font-size: 10px;
   }
   
  .pricing-list-img img{
    height: 80%;
     width: 80%;
     margin-left: 5%;
  }
   
  button{
    font-size: 10px;
    color: white;
    width: 90%;
    height: 35px;
    margin-top: 5%;
    margin-left: 5%;
     
  }

  .pricing-card{
    margin-top: 3%;
    margin-left: 10%;
    width: 80%;
  }
 }
</style>