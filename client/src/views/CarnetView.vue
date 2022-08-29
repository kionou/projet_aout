<template>
  <ComponentNavbar/>



  <ComponentContainer :users="users"/>
 
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentContainer from '../components/ComponentContainer.vue';
import axios from 'axios'


export default {
    name:"CarnetView",
    props:['id'],
    components:{
        ComponentNavbar,
        ComponentContainer
    },
    data() {
      return {
        users:''
       
      }
    },
    created(){
      // if (localStroge.getItem('token') ) {
      //   this.$router.push({path:'/login'})
        
      // }
    },
      mounted(){
         axios.get('http://localhost:3000/users/detailuser',{ headers: {token : localStorage.getItem('token')}})
         .then((response) =>{
            console.log('response',response.data);
             this.users= response.data.user
           
         })
    }
   
  
}
</script>

<style>

</style>