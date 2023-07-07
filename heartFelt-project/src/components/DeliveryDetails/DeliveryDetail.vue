<script setup>
import {ref} from 'vue';
const searchInput = ref('');
const showAddGiftCard = ref(false);
import AddGiftCard from "@/components/AddGiftCard/AddGiftCard.vue";
</script>



<template>
<AddGiftCard v-on:add-Card="showAddGiftCard = false" v-if="showAddGiftCard" />
<div class="ContainerDetails">
    <h1>Delivery Details</h1>
      <div class="RecipientDetails">
         <h2>Recipient Details</h2>
         <form>
            <label for="fname">Full Name</label><br>
          <input type="text" id="fname" name="fname" value="Eg. James Eze">
          <br>
          <label for="fname">Email Address</label>
          <br>
          <input type="text" id="fname" name="fname" value="emample@example.com">
         </form>
      </div>

      <div class="RecipientDetails">
        <h2>Sender Details</h2>
        <form>
           <label for="fname">Full Name</label><br>
         <input type="text" id="fname" name="fname" value="Eg. James Eze">
        </form>
        <div class="DeliveryDetails">
            <h2>Delivery Details</h2>
            <div class="time-date">
            <form class="time-zone">
               <label for="fname">Date</label><br>
             <input type="text" id="fname" name="fname" value="dd-mm-yy">
            </form>
            <form class="time-zone2">
                <label class for="fname">Time</label><br>
              <input type="text" id="fname" name="fname" value="Eg 12:00 am">
            </form>
            </div>
             <form>
                <label for="fname">Time Zone</label><br>
              <input type="text" id="fname" name="fname" value="Eg UTC + 1">
             </form>
        </div>
        <div class="Preferences">
            <h1>Preferences</h1>
            <label>
                <input type="checkbox" v-model="selectedPreferences" value="">
                I want to add Gift Card
                <br>
                <input type="checkbox" v-model="selectedPreferences" value="">
                Add confetti
                <br>
                <input type="checkbox" v-model="selectedPreferences" value="">
                Send list of signed signatures to my email 
                <br>
                <input type="checkbox" v-model="selectedPreferences" value="">
                Set a reminder for next year
                <br>
              </label>
        </div>
    </div>
</div>
    
  <div class="Coupon-code">
    <label>
        <h2>Coupon code</h2>
        <input type="text" v-model="searchInput"   placeholder="Enter code" />
        <button>Apply</button>
    </label>
    </div>
    <button class="purchase-card" @click="showAddGiftCard = true">
        Purchase Card
    </button>


    <div class="ordersummary">
         <h1>Order Summary</h1>
         <div class="sline"> </div>
         <img src="@/assets/purchase.svg" /> 
         <div class="sline"> </div>
        
          <div class="payments-method">
            <h2>Total</h2>
            <div class="payment-p">
                <p>Amount</p>
                <h2>₦4,999</h2>
            </div>
            <div class="payment-p">
                <p>VAT (7.5%)</p>
                <h2>₦375</h2>
                <div class="slineing"> </div>
            </div>
            <div class="payment-p">
                <p>Total Price</p>
                <h2>₦5,374</h2>
                <div class="slineing"> </div>
            </div>
          </div>
    
          <div class="paystack-payment">
            <h1>Pay With:</h1>
            <label>
              <input type="checkbox" v-model="selectedPaymentMethod" value="paystack">
              <img src="@/assets/paystack.svg" /> 
              paystack
            </label>
            <br>
            <label>
              <input type="checkbox" v-model="selectedPaymentMethod" value="flutterwave">
              <img src="@/assets/paystack.svg" /> 
              Flutterwave
            </label>
            <br>
            <button @click="processPayment">Proceed to Payment</button>
          </div>
          <div class="change-card">Change card cover</div>
     </div>
</template>




<style scoped>
   .ContainerDetails{
    display: flex;
    flex-wrap: wrap;
    margin-left: 20%;
    position: relative;
    width: 30%;
    flex-direction: column;
   }

   .ContainerDetails h1{
        font-size: 25px;
   }

   .RecipientDetails h2{
     font-size: 15px;
     font-weight: 500;
     color: rgba(6, 24, 24, 1);
   }

   .RecipientDetails form label{
       font-size: 12px;
       font-weight: 400;
       color: rgba(6, 24, 24, 1);
   }

   .RecipientDetails form input{
         width: 300px;
         height: 25px;
         border-radius: 5px;
         border: 1px solid rgba(224, 224, 224, 1);
   }

   .RecipientDetails form input{
    font-size: 10px;
    font-weight: 100;
    color: rgba(107, 107, 107, 1);
    }

    .DeliveryDetails .time-date form input{ 
        width: 134px;
    }
    
    .time-zone2{
        margin-top: -10%;
        margin-left: 30%;
    }

    .Preferences{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-top: 5%;
    }

    .Preferences h1{
        font-size: 15px;
        font-weight: 400;
    }

    .Preferences label, input, value{
        font-size: 12px;
        font-weight: 300;
    }

  .Coupon-code{
   margin-left: 20%;
   margin-top: 2%;
   width: 35%;
  }
  
  .Coupon-code h2{
     font-size: 15px;
     font-weight: 400;
  }

  .Coupon-code label input{
    width: 220px;
    height: 28px;
    font-size: 10px;
    border-radius: 3px;
    border: 1px solid rgba(224, 224, 224, 1);
  }

  .Coupon-code button{
    width: 80px;
    height: 30px;
    font-size: 10px;
    cursor: pointer;
    color: white;
    border-radius: 3px;
    border: 1px solid black;
    background-color: black;
  }

  .purchase-card{
    margin-top: 3%;
    margin-left: 20%;
    width: 300px;
    height: 33px;
    cursor: pointer;
    font-size: 12px;
    color: white;
    border: 3px solid #57D4D4;
    background-color: #57D4D4;
  }

  .ordersummary{
    margin-top: -43%;
    margin-left: 60%;
    width: 20%;
     background-color: rgba(243, 244, 244, 1);
   }
   
   .modal-header{
     margin-top: 3%;
   }

   .ordersummary span{
     margin-left: 5%;
     margin-top: 35px;
     cursor: pointer;
     padding: 2%;
     height: 20px ;
     width: 20px;
     border-radius: 50px;
     background-color: #ddd;
   }

   .ordersummary h1{
    padding-top: 20px;
    margin-left: 10%;
    font-weight: 400;
     font-size: 15px;
   }

   .sline{
    width: 250px;
    height: 2px;
    margin-top: 10px;
    margin-left: 10%;
    background-color: rgba(209, 209, 209, 1);
  }

   .ordersummary img{
      margin-top: 20px;
      margin-left: 10%;
      width: 120px;
      height: 120px;
      border-radius: 5px;
      border: 1px solid rgba(209, 209, 209, 1);
   }

   .payments-method{
      margin-left: 10%;
      margin-top: 5%;
      width: 78%;
   }

   .payments-method h2{
      font-size: 15px;
      font-weight: 400;
   }
   
   .payment-p{
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-between;
   }

   .payment-p p{
    font-size: 12px;
    font-weight: 200;
     color: rgba(82, 82, 82, 1);
   }

   .slineing{
    width: 350px;
    height: 2px;
    margin-top: 15px;
    background-color: rgba(209, 209, 209, 1);
  }

  .paystack-payment{
     margin-left: 10%;
     width: 40%;
  }  

  .paystack-payment h1{
      margin-left: -1%;
       font-size: 15px;
  }

  .paystack-payment img{
    width: 12px;
    height: 12px;
    border: none;
  }

  .paystack-payment label, input, value{
        font-size: 12px;
        font-weight: 300;
  }

  .paystack-payment button{
   padding-top: 5px;
    margin-left: 5%;
    font-size: 10px;
    cursor: pointer;
    width: 110px;
    height: 25px;
    color: black;
    border-radius: 3px;
    border: 3px solid #57D4D4;
    background-color: #57D4D4;
}
 
.ordersummary .change-card{
   margin-top: 30%;
    margin-left: 30%;
    cursor: pointer;
    font-size: 15px;
    color: #57D4D4;
    border: none;
}



  @media all and (max-width: 500px){
    .ContainerDetails{
        display: flex;
        flex-wrap: wrap;
        margin-left:20%;
        position: relative;
        width: 0%;
        flex-direction: column;
       }
    
       .ContainerDetails h1{
        font-size: 20px;
   }

   .RecipientDetails form input{
    width: 250px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid rgba(224, 224, 224, 1);
}

.DeliveryDetails .time-date form input{ 
    width: 118px;
}

.time-zone2{
    margin-top: -16%;
    margin-left: 50%;
}

.Preferences h1{
    font-size: 15px;
    font-weight: 500;
}

   .Coupon-code label input{
    width: 140px;
    height: 20px;
    font-size: 10px;
    border-radius: 3px;
    border: 1px solid rgba(224, 224, 224, 1);
  }
  
  .Coupon-code button{
    width: 70px;
    height: 25px;    
  }

  .purchase-card{
    width: 250px;
    height: 30px;
  }

  .ordersummary{
    margin-top: 15%;
    margin-left: 16%;
    width: 65%;
    z-index: 2;
     background-color: rgba(243, 244, 244, 1);
   }

   .sline{
    width: 215px;
  }

  }

</style>