<template>
  <ComponentNavbar/>

  <ComponentMaladie :maladies="maladies" />

</template>

<script>

import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentMaladie from '@/components/ComponentMaladie.vue';
export default {
    name:"MaladieView",
    components:{
        ComponentNavbar,
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
          axios.get('http://localhost:3000/maladie/affichemaladie',{ headers: {patient : localStorage.getItem('patient')}})
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