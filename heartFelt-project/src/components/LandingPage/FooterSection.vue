<script setup>
import FacebookIcon from '@/assets/facebook.svg';
import TwitterIcon from '@/assets/twitter.svg';
import YoutubeIcon from '@/assets/youtube.svg';
import LinkedinIcon from '@/assets/linkedin.svg';
import SearchIcon from '@/assets/search.svg';
</script>


<template>
  <div class="footer-container">
    <ul class="footer-list">
      <li class="green"><a href="linkUrl">Product</a></li>
      <li>Fashion</li>
      <li>Gadgets</li>
      <li>Home Appliances</li>
      <li>Office & Work Tools</li>
    </ul>
    <ul class="footer-list">
      <li class="green"><a href="linkUrl">Features</a></li>
      <li>Customise</li>
      <li>Delivery</li>
      <li>Apply Coupon</li>
      <li>Referral Bonus</li>
    </ul>
    <ul class="footer-list">
      <li class="green"><a href="linkUrl">Support</a></li>
      <li>Get Help</li>
      <li>FAQ</li>
      <li>Contact Us</li>
    </ul>
    <ul class="footer-list">
      <li class="green"><a href="transparency">Transparency</a></li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Cookies</li>
    </ul>
    <div class="footer-list">
       <li class="greens"><a href="linkUrl">Subscribe to newsletter</a></li>
      <form @submit.prevent="">
        <input type="text" placeholder="Enter your email" />
        <button class="button-field" type="submit">Subscribe</button>
      </form>
      <div class="image-size">
        <img :src="FacebookIcon" alt="Facebook" />
        <img :src="TwitterIcon" alt="Twitter" />
        <img :src="YoutubeIcon" alt="Youtube" />
        <img :src="LinkedinIcon" alt="LinkedIn" />
        <img :src="SearchIcon" alt="Search" />
      </div>
    </div>
  </div>
</template>


<style scoped>
  .footer-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 5%;
    margin-right: 5%;
  }

  .footer-list{
    margin: 40px;
    font-size: 12px;
    font-weight: 200;
    list-style-type: none;
  }
  

  .footer-list form input{
       width: 180px;
       height: 30px;
       border-radius: 1px;
       background-color: #ECF6F6;
       border: 3px solid #ECF6F6;
  }

   .button-field{
    width: 80px;
    height: 35px;
    border-radius: 1px;
    color: white;
    background-color: #57D4D4;
    border: 3px solid #57D4D4;
}
    
.greens a{
  color: #0C7E7E;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
 }

  .green a{
     color: #0C7E7E;
     font-size: 15px;
     font-weight: 400;
     text-decoration: none;
  }
  
  li {
    margin-bottom: 10px;
    color: #6B6B6B;
  }

  .image-size img{
  width: 30px;
  height: 15px;
  margin-top: 5%;
  }



  @media all and (max-width: 500px){
     .footer-container{
      margin-top: 15%;
       flex-wrap: wrap;
       flex-direction: row;
     }
    
     .footer-list{
      margin: 2rem;
    } 

     .footer-list{
       margin-left: -7%;
     }

     li{
      font-size: 12px;
     }
      
     .greens a{
      margin-left: 18%;
      color: #0C7E7E;
      font-size: 12px;
      text-decoration: none;
     }
     .green a{
      display: flex;
      flex-wrap: wrap;
      color: #0C7E7E;
      font-size: 12px;
      text-decoration: none;
   }
    
   .footer-list form input{
    width: 120px;
    height: 19px;
    font-size: 10px;
    margin-left: 35px;
}
   .button-field{
    width: 60px;
    height: 25px;
    font-size: 10px;
}
    
.image-size{
  margin-left: 30px;
}
.image-size img{
  width: 20px;
  height: 10px;
  }
  }
</style>