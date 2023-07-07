<script setup>

</script>

<template>
<div class="container-head-line">
     <div class="head-line">
         <h1>Get digital Gifts <br />
            <span class="centre-h1">Cards at Ease</span></h1>
         <p>
             Express love to friends and family all over the worlds,
             <br/> 
             <span class="centre-p">with special memories of gifts.</span>
         </p>
        </div>
       
        <div class="container-cards">
          <div class="container-card"> 
            <div class="trending">
                <h1 class="explore">
                    Explore trending <br>
                    gift cards
                </h1>
                <p class="desc-p">
                    Whether you're celebrating a loved one or <br>
                    family, Heartfelt helps you to share the love <br>
                    and care virtully. Nothing is not a barrier.  
                </p>
            </div>
                <div class="customise-desc">
                    <a href="linkUrl">Customise a card</a>
                    <img src="@/assets/arrow.svg" class="arrow-img"/>
                  </div>
         </div>
            
            <div class="container-card"> 
                <div class="trending">
                    <h1 class="explore">
                        Ready to use <br>
                        templates
                    </h1>
                    <p class="desc-p">
                        Tap into the gift bag to share love in the most<br> amazing way. Change preference to suit that <br>special one with no extra cost.
                    </p>
                   </div>
                    <div class="customise-desc">
                        <a href="linkUrl">Customise a card</a>
                        <img src="@/assets/arrow.svg" class="arrow-img"/>
                      </div>
            </div>
                  
            <div class="container-card"> 
                <div class="trending">
                    <h1 class="explore">
                        Fresh content <br>
                        everyday
                    </h1>
                    <p class="desc-p">
                        Tap into the gift bag to share love in the most<br> amazing way. Change preference to suit that <br>special one with no extra cost.
                    </p>
                   </div>
                    <div class="customise-desc">
                        <a href="linkUrl">Customise a card</a>
                        <img src="@/assets/arrow.svg" class="arrow-img"/>
                      </div>
            </div>  
            
            <div class="container-card"> 
                <div class="trending">
                    <h1 class="explore">
                        High quality <br>
                        visuals graphics
                    </h1>
                    <p class="desc-p">
                        Whether you're celebrating a loved one or <br>
                        family, Heartfelt helps you to share the love <br>
                        and care virtully. Nothing is not a barrier.  
                    </p>
                   </div>
                    <div class="customise-desc">
                        <a href="linkUrl">Customise a card</a>
                        <img src="@/assets/arrow.svg" class="arrow-img"/>
                      </div>
            </div>
         </div> 
</div>   
</template>



<style scoped>
   .container-head-line{
     margin-top: 5%;
   }
   
   .head-line {
    justify-items: center;
    align-items: center;
    flex-direction: column;
    margin-left: 30%;
    margin-right: 30%;
   }

   .head-line h1{
    margin-left: 30%;
     font-size: 30px;
   }

   .centre-h1{
    margin-left: 6%;
   }

   .head-line p{
     font-weight: 200;
     font-size: 12px;
     margin-left: 28%;
   }

   .centre-p{
     margin-left: 15%;
   }
  
  .container-cards{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 20%;
    margin-right: 20%;
  }

  .container-card{
    width: 300px;
    height: 300px;
    margin: 1rem;
   margin-left: 10%;
    border-radius: 10px;
    background-color: #F3F4F4;
  }

  .trending h1{
    font-size: 20px;
     margin-top: 30%;
     margin-left: 8%;
  }

  .trending p{
    margin-left: 8%;
    margin-top: 6%;
    font-size: 10px;
    font-weight: 300;
    color: #6B6B6B;
  }

  .customise-desc{
    margin-top: 8%;
    margin-left: 9%;
    display: flex;
    flex-direction: row;
  }

  .customise-desc a{
    font-size: 12px;
    color: #299E9E;
    text-decoration: none;
  }

  .customise-desc img{
    margin-top: -3%;
    margin-left: 1%;
    width: 25px;
  }


  @media all and (max-width: 500px){
    .container-head-line{
      padding-top: 20px;
    }
     
    .head-line{
      display: flex;
      flex-wrap: wrap;
      margin-top: 5%;
      margin-left: -0px;
      width: 100%;
    }
     .head-line h1{
      margin-left: 8px;
       font-size: 20px;
     }
  
     .centre-h1{
      margin-left: 5%;
     }
  
     .head-line p{
       font-weight: 300;
       font-size: 9px;
       margin-left: 0%;
     }

    .container-cards{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .container-card{
      height: 180px;
    }

    .trending h1{
       font-size: 15px;
    }

    .trending p{
      font-size: 5px;
   }
     
   .customise-desc a{
       font-size: 7px;
   }

   .customise-desc img{
    margin-top: -3px;
    width: 15px;
}

  }


</style>

