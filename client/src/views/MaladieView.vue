<template>

  <div>
    <ComponentNavbarConnect/>
   <ComponentMaladie :maladies="maladies" />
  </div>


</template>

<script>

import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentMaladie from '@/components/ComponentMaladie.vue';
import axios from 'axios'
export default {
    name:"MaladieView",
    components:{
        ComponentNavbarConnect,
        ComponentMaladie 

    },
    data() {
      return {
        maladies:''
      }
    },

    created(){
      const auth = localStorage.getItem('patient')
      console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }
    },
      mounted(){
      const auth = localStorage.getItem('patient')

        if (auth) {
          console.log("sfsdfg",auth);
          axios.get('https://sante-kionou.herokuapp.com/maladie/affichemaladie',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
             console.log('response',response.data);
              this.maladies= response.data.maladie
           
         })
          
        }else{
          console.log('nono');
        }
      
    }
   

}
</script>

<style>

</style>