import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/pricing',  
      name: 'pricing',
      component: () => import('../views/Pricing.vue')
    },
    {
      path: '/transparency',  
      name: 'transparency',
      component: () => import('../views/TeamAndCondition.vue')
    },

       // PROFILE ROUTE
       {
        path: '/MyProfile',  
        name: 'MyProfile',
        component: () => import('../views/MyProfile.vue'),
        meta: {
          needsAuth: true
        }
      },   
      
  
      //  CARDS ROUTES
    {
      path: '/anniversary',  
       name: 'anniversary',
       component: () => import('../views/Anniversary.vue')
    }, 
    {
      path: '/birthday',  
      name: 'birthday',
      component: () => import('../views/Birthday.vue')
    },
    {
      path: '/festival',  
      name: 'festival',
      component: () => import('../views/Festival.vue')
    },
    {
      path: '/goodwill',  
      name: 'goodwill',
      component: () => import('../views/Goodwill.vue')
    },
    {
      path: '/love',  
      name: 'love',
      component: () => import('../views/Love.vue')
    },
    {
      path: '/relationship',  
      name: 'relationship',
      component: () => import('../views/Relationship.vue')
    },
    {
      path: '/sympathy',  
      name: 'sympathy',
      component: () => import('../views/Sympathy.vue')
    },

        // DeliveryDetail
    {
      path: '/deliveryDetails',  
      name: 'deliveryDetails',
      component: () => import('../views/DeliveryDetails.vue')
    },


    { path: '/:catchAll(.*)', name:'404Page',  
    component: () => import('../views/404Page.vue')
    },

  ]

  // const router = new VueRouter({
  //   mode: 'history',
  //   routes
  // });
})
   router.beforeEach((to, from, next) => {
      if (to.meta.needsAuth) {
        next("/login");
      } else {
        next();
      }
   });

export default router;
