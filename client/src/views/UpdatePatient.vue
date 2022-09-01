
<template>
  <div>
    <ComponentNavbarConnect/>
  <ComponentUpdatePatient :users="users" />
  </div>
 

</template>

<script>

import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentUpdatePatient from '@/components/ComponentUpdatePatient.vue';
import axios from 'axios'

export default {
     name:'UpdatePatient',
     props:['users'],
    components:{
       ComponentNavbarConnect,
        ComponentUpdatePatient

    },
    data() {
      return {
          users:''
      
      }
    },
        created(){
      const patient = localStorage.getItem('patient')
     
      if ((patient ) == null ) {
        this.$router.push({path:'/login'})  
      }else{
        
      }
    },

     mounted(){
      const auth = localStorage.getItem('patient')

        if (auth) {
          console.log("sfsdfg",auth);
          axios.get('https://sante-kionou.herokuapp.com/users/detailuser',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
             console.log('response',response.data.user[0]);
             this.users= response.data.user[0]
           
         })
          
        }else{
          console.log('nono');
        }
      
    }

}
</script>

<style>

</style>