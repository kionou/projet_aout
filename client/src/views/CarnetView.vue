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
    mounted(){
         axios.get(`http://localhost:3000/users/carnet/${this.id}`)
         .then((response) =>{
            console.log('response',response.data);
            this.users= response.data.user
           
         })
    }
  
}
</script>

<style>

</style>