<script setup>
// export default {
//     name: "Upload card cover",
//     data() {
//         return {
//             selectedFile: null
//         }
//     },
//      methods: {
//     onFileSelected(event) {
//       this.selectedFile = event.target.files[0]  
//     }
// },
// }
  
    
// export default {
//   data() {
//     return {
//       cloudinaryImageUrl: '' // The Cloudinary image URL will be stored here
//     };
//   },
//   mounted() {
//     // Assuming you have the Cloudinary image URL, you can set it to the data property
//     this.cloudinaryImageUrl = 'YOUR_CLOUDINARY_IMAGE_URL';
//   }
// };

</script>



<template>
    <div class="container-img-header">
           <div class="container-img-section">
                 <div class="h1-p">
                     <h1>Anniversary</h1>
                     <p>
                        Express love to friends and family all over the world,<br>
                        with special memories of gifts.
                     </p>
                 </div>
                 <div class="sline"> </div>
                 <div class="container-option">
                    <label>
                        <input type="text"  v-model="searchInput" placeholder="Search Categories " />
                        <button> Search </button>
                    </label>
                     <div class="brower-categories">
                             <h1>Browse by Categories</h1>
                               <div class="slining"></div>
                               <div class="Categories-items">
                                <div className='Categories-list'>
                                <button> Occasions</button>
                                <img src="@/assets/chevronup.svg" />
                                </div>
                                <div className='Categories-list'>
                                 <button> Tone</button>
                                <img src="@/assets/chevrondown.svg" />
                                 </div>
                                <div className='Categories-list'>
                                 <button>Style</button>
                                 <img src="@/assets/chevrondown.svg" />
                                 </div>
                                 <div className='Categories-list'>
                                 <button>Colour</button>
                                <img src="@/assets/chevrondown.svg" />
                                 </div>
                                 <div className='Categories-list'>
                                <button>Theme</button>
                                <img src="@/assets/chevrondown.svg" />
                                 </div>
                                 <div className='Categories-list'>
                                 <button>Wording</button>
                                 <img src="@/assets/chevrondown.svg" />
                                </div>
                                 <div className='Categories-list'>
                                 <button>Language</button>
                                 <img src="@/assets/chevrondown.svg" />
                                 </div>
                                 <div className='Categories-list'>
                                 <button>Heartfelt's Choice</button>
                                 <img src="@/assets/chevrondown.svg" />
                                </div>
                                </div>
                            </div>


                             <div class="container-cards">
                                  <form v-on:submit.prevent = "Uplpad">
                                    <img src="@/assets/upload.svg" /> 
                                    <button type="submit" :disabled="filesSelected < 1">Upload <br><span class="upload">card cover</span> </button>
                                  </form>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>

                                  <div class="cloudinaryImg">
                                    <img :src="cloudinaryImageUrl" alt="Card Image" />
                                  </div>
                                
                                </div>
                         </div>
                 </div>
    </div>
</template>




<style scoped>
  .container-img-section{
     margin-left: 10%;
  }

  .h1-p h1{
     font-size: 30px;
  }

  .h1-p p{
     font-size: 12px;
     color: #525252;
     font-weight: 300;
  }

   .container-option{
    margin-top: -58%;
    box-sizing: border-box;
  }

  .sline{
    width: 2px;
    height: 800px;
    margin-top: 70px;
    margin-left: 24%;
    background-color: rgba(209, 209, 209, 1);
  }

  .slining{
    width: 280px;
    height: 2px;
    margin-top: 2%;
    margin-left: -12px;
    background-color: rgba(209, 209, 209, 1);
  }

  label input{
    width: 13%;
    height: 35px;
    font-weight: 100;
    font-size: 12px;
    border: none;
    color:  #6B6B6B;
    border: 3px solid whitesmoke;
  }

  label button{
     width: 6%;
     height: 40px;
     font-size: 12px;
     border: none;
     color: white;
     border-radius: 5px;
     background-color: #299E9E;
  }

.brower-categories{
    margin-top: 6%;
}

.brower-categories h1{
    margin-top: -2%;
    margin-left: -1%;
    font-size: 15px;
    color: #525252;
}

 .Categories-items{
    width: 0%;
    height: 0%;
    margin-left: -48px;
}

.Categories-list {
   width: 300px;
   display: flex;
   justify-content: space-between;
}
.Categories-list button{
    font-size: 10px;
    margin: 15px;
     border: none;
     background-color: white;
}

.Categories-list img{
    width: 12px;
}

.container-cards{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 29%;
    margin-top: -47%;
    width: 63%;
}

.container-cards form, div{
    margin: 1rem;
}

.container-cards form{
    width: 180px;
    height: 250px;
    border-radius: 5px;
    border: 1px solid black;
}

.container-cards img{
    margin-top: 35%;
    margin-left: 40%;
}

.container-cards  button{
    margin-top: 30px;
    font-size: 18px;
    margin-left: 22%;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background-color: white;
}

 .cloudinaryImg{
    width: 180px;
    height: 250px;
    border-radius: 5px;
    border: 2px solid rgba(209, 209, 209, 1); 
 }

.upload{

}


@media all and (max-width: 500px){
    .container-img-section{
        margin-left: 0%;
     } 

     .h1-p h1{
        font-size: 20px;
     }
     
     .h1-p p{
        font-size: 10px;
     }
    
     .container-option{
        margin-top: -120%;
        box-sizing: border-box;
       
      }

      .sline{
        width: 1px;
        height: 400px;
        margin-top: 70px;
        margin-left: 30%;
      }

      .slining{
        width: 100px;
        height: 1px;
        margin-top: 2%;
        margin-left: -15px;
      }

      label input{
        width: 20%;
        height: 12px;
        font-weight: 100;
        font-size: 5px;
        
      }
    
      label button{
         width: 10%;
         height: 15px;
         font-size: 5px;
         border: none;
         border: 1px solid whitesmoke;
      }

      .brower-categories h1{
        margin-top: -2%;
        margin-left: -5%;
        font-size: 10px;
        color: #525252;
    }
    
    .Categories-list {
        width: 110px;
        display: flex;
        justify-content: space-between;
     }
     
     .Categories-list button{
        font-size: 8px;
        margin: 8px;
         border: none;
         background-color: white;
    }
    
    .Categories-list img{
        width: 10px;
    }

    .container-cards{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: -107%;
        width: 75%;
    }
    
    .container-cards form, div{
        margin: 1rem;
    }
    
    .container-cards form{
        width: 100px;
        height: 140px;
        border-radius: 5px;
        border: 1px solid black;
    }
    
    .container-cards img{
        margin-top: 40%;
        margin-left: 40%;
        height: 15px;
    }

    .container-cards  button{
        margin-top: 28px;
        font-size: 10px;
        margin-left: 20%;  
    }

    .cloudinaryImg{
        width: 100px;
        height: 140px;
        border-radius: 5px;
        border: 2px solid wheat; 
     }
}
</style>