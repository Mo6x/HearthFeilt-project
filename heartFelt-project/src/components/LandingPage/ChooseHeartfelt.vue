<script setup>
  
</script>

<template>
   <div class="heartfelt">
      <div class="shared-card">
         <div class="fast-share">
              <h1>The fastest way to share <br>
                <spn class="fastest">gift cards to people</spn>
            </h1>
            <p>
                Whether you're celebrating a loved one or <br>
                family, Heartfelt helps you to share the love <br>
                and care virtully. Nothing is not a barrier.
            </p>
            <div class="share-info">
            <img src="@/assets/markgood.svg" />
            <a href="linkUrl">Purchase at Discounts</a>
            </div>
            <div class="share-info">
                <img src="@/assets/markgood.svg" />
                <a href="linkUrl">Share to muiltple people</a>
                </div>
                <div class="share-info">
                    <img src="@/assets/markgood.svg" />
                    <a href="linkUrl">Deliver at any location</a>
                    </div>
         </div>
         <div class="share-imge">
            <img src="@/assets/handimg.svg" />
         </div>
      </div>

      <div class="select-card">
           <div class="select-heartfelt">
                 <h1>Why people are choosing Heartfelt</h1>
                 <p>Here is what they have to say.</p>
           </div>

           <div class="slide-container">
                <div class="slide-content">
                   <div class="card-wrapper">
                       <div class="image-content">
                        <img src="@/assets/stars.svg" />
                        <img src="@/assets/stars.svg" />
                        <img src="@/assets/stars.svg" />
                        <img src="@/assets/stars.svg" />
                        <img src="@/assets/star.svg" />
                       </div>
                   </div>
                   <div class="card-content">
                       <h1>Why people are choosing <br> Heartfelt</h1>
                       <p>
                        Here is what they have to gifted the <br> 
                        family package to my younger <br> 
                        brother, and he could download all <br> 
                        mobile applications at ease... 
                       </p>
                   </div>
                   <div class="name-content">
                       <h1>Peter Willams</h1>
                   </div>
                   
                </div>
                  
                <div class="slide-content">
                    <div class="card-wrapper">
                        <div class="image-content">
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/star.svg" />
                        </div>
                    </div>
                    <div class="card-content">
                        <h1>Why people are choosing <br> Heartfelt</h1>
                        <p>
                         Here is what they have to gifted the <br> 
                         family package to my younger <br> 
                         brother, and he could download all <br> 
                         mobile applications at ease... 
                        </p>
                    </div>
                    <div class="name-content">
                        <h1>Peter Willams</h1>
                    </div>
                    
                 </div>

                 <div class="slide-content">
                    <div class="card-wrapper">
                        <div class="image-content">
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/stars.svg" />
                         <img src="@/assets/star.svg" />
                        </div>
                    </div>
                    <div class="card-content">
                        <h1>Why people are choosing <br> Heartfelt</h1>
                        <p>
                         Here is what they have to gifted the <br> 
                         family package to my younger <br> 
                         brother, and he could download all <br> 
                         mobile applications at ease... 
                        </p>
                    </div>
                    <div class="name-content">
                        <h1>Peter Willams</h1>
                    </div>
                  </div>
            </div>
         </div>
   </div>
  
</template>



<style scoped>
.heartfelt{
    margin-top: 10%;
}

.shared-card{
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}

.fast-share h1{
   font-size: 25px;
}

.fast-share p{
  color: #6B6B6B;
  font-size: 12px;
  font-weight: 300;
}

.share-info a{
    font-size: 12px;
    margin-left: 4%;
    font-weight: 400;
    text-decoration: none;
    color: #6B6B6B;
}

.share-info{
    display: flex;
    flex-direction: row;
}
.share-info img{
  height: 12px;
}

.share-imge img{
   height: 250px;
}

.select-card{
 margin-top: 10%;
}

.select-heartfelt h1{
    text-align: center;
    font-size: 24px;
    justify-content: center;
}

.select-heartfelt p{
    font-weight: 300;
    text-align: center;
    color: #6B6B6B;
    justify-content: center;
}

.slide-container{
    align-items: center;
    margin-top: 5%;
    display: flex;
    justify-content: center;
}

.slide-content{
    margin: 1rem;
   height: 300px;
   width: 300px;
   border-radius: 20px;
   border: 1px solid #B8B8B8;
   background-color: white;
}

.slide-content .image-content{
   padding-top: 10%;
   padding-left: 10%;
}

.slide-content .card-content{
    padding-top: 5%;
    padding-left: 10%;
 }

 .slide-content .card-content p{
    font-size: 10px;
    font-weight: 200;
    color: #525252;
 }

 .slide-content .card-content h1{
    font-size: 15px;
    font-weight: 500;
 }

 .slide-content .name-content{
    padding-top: 10%;
    padding-left: 10%;
    font-weight: 100;
    font-size: 8px;
 }


 /* Media query for screens smaller than 600px */

 @media all and (max-width: 500px) {
  .heartfelt{
    margin-top: 10%;
  }
.shared-card, .share-info, .select-card, .slide-container{
    flex-direction: column;
    align-items: center;
  }

  .fast-share h1{
    font-size: 20px;
  }

  .fastest{
    margin-left: 8%;
  }

  .fast-share p{
    font-size: 10px;
    font-weight: 200;
    padding-left: 20px;
  }

  .share-info{
    display: flex;
    margin-right: 10%;
    flex-direction: row;
    justify-content: center;
  }

  .share-info img{
    height: 10px;
    padding-left: 5px;
  }

  .share-info a{
    font-size: 10px;
    margin-left: 4%;
    color: #6B6B6B;
}

 .share-imge{
    height: 0px;
 }

.share-imge img{
    height: 250px;
    width: 120%;
    margin-top: 40px;
    margin-left: -10%;
  }


  .select-card{
    margin-top: 100%;
  }

 .select-heartfelt h1{
    font-size: 20px;
 }

 .select-heartfelt p{
    font-size: 10px;
    font-weight: 200;
 }

  .slide-content{
    width: 90%;
  }

  .card-content p{
    font-size: 10px;
    font-weight: 100;
  }
  .card-content h1{
      font-weight: 300;
  }

  .name-content h1{
    font-weight: 300;
  }
}
</style>