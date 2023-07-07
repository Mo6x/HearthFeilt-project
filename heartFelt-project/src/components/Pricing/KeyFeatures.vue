<script>
  export default {
    data() {
      return {
        data: [
          { Website: 'Custom Domin', Basic: '', CMS: '', Business: '', Enterprise: ''},
          { Website: 'Page', Basic: '100', CMS: '100', Business: '100', Enterprise: '100'},
          { Website: 'Monthly visits', Basic: '25,000', CMS: '100,000', Business: '500,000', Enterprise: 'Custom'},
          { Website: 'Collection items', Basic: '0', CMS: '2000', Business: '10,000', Enterprise: '10,000'},
          { Website: 'Form submissions', Basic: '100 /mo', CMS: '1,000 /mo', Business: '2,000 /mo', Enterprise: 'Unlimited'},
          { Website: 'Form file upload', Basic: '', CMS: '', Business: '', Enterprise: ''},
          { Website: 'CND', Basic: '', CMS: '', Business: '', Enterprise: ''},
          { Website: 'CND bandwith', Basic: '50 GB', CMS: '200 GB', Business: '400 GB', Enterprise: '400 GB+'},
          { Website: 'API requests per minute', Basic: ' - ', CMS: '60 RPM', Business: '120 PRM', Enterprise: 'Custom'},
          // Add more data items as needed
        ],
      };
    },
  };
  </script>


<template>
    <div>
        <div class="feature-key">
             <h1>Key Features</h1>
             <p>
                We know trying a new service out can be scary. 
                That’s why we<br> offer a 7 day money-back guarantee 
                if you aren’t happy with<br>  our work, no questions asked
             </p>
        </div>
      <table>
        <thead>
          <tr>
            <th>Website</th>
            <th>Basic</th>
            <th>CMS</th>
            <th>Business</th>
            <th>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.Website }}</td>
            <td>{{ item.Basic }}</td>
            <td>{{ item.CMS }}</td>
            <td>{{ item.Business }}</td>
            <td>{{ item.Enterprise }}</td>
            <td>{{ item.Enterprise }}</td>

            <!-- <td>{{ <img :src="item.goodmark.webp" alt="@/assets/goodmark.webp" /> }} </td>  -->

          </tr>
        </tbody>
      </table>
      <div class="button-btn">
        <button>Action</button>
        <button>Action</button>
        <button>Action</button>
        <button>Action</button>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  .feature-key{
    margin-top: 5%;
    margin-left: 20%;
    width: 50%;
  }

  .feature-key p{
    font-weight: 200;
    font-size: 15px;
    font-family: Inter;
    color: #737373;
  }

  table {
    width: 55%;
    margin-top: 3%;
    margin-left: 19%;
    font-weight: 300;
    color: black;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 25px;
    text-align: left;
    font-weight: 300;
    font-size: 12px;
    color: #6B6B6B;
    border-bottom: 1px solid #ddd;
  }

  tr, th{
       font-size: 15px;
  }
  
  tr, th :hover{
    font-size: 15px;
    color: #299E9E;
    cursor: pointer;
  }

  .button-btn{
    margin-left: 35%;
  }

  .button-btn button{
    margin-top: 1%;
    margin: 1rem;
    width: 120px;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    border: 1px solid #57D4D4;
    background-color: #299E9E;
   }


   @media all and (max-width: 500px){
    .feature-key{
      margin-top: 35%;
      margin-left: 0%;
      width: 100%;
    }

    .feature-key h1{
      margin-left: 5%;
    }
  
    .feature-key p{
      font-weight: 100;
      margin-left: 5%;
      font-size: 10px;
      color: #737373;
    }

    table {
      margin-left: 8%;
    }

   th, td{
    padding: 12px;
    font-size: 5px;
   }

   tr, th{
    font-size: 10px;
}

   .button-btn{
    margin-left: 30%;
  }

   .button-btn button{
      width: 60px;
      height: 30px;
      padding: 10px;
      margin: 3px;
      margin-top: 1%;
      font-size: 8px;
      border-radius: 5px;
    
   }

   }
  </style>