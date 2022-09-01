<template>

  <div>
    <ComponentNavbarConnect/>
 
 <ComponentDetailMaladie :maladies="maladies"/>
  </div>
  
</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentDetailMaladie from '@/components/ComponentDetailMaladie.vue';
import axios from 'axios'

export default {
    name:"DetailMaladie",
    props:['id'],
  components: { 
   ComponentNavbarConnect,
    ComponentDetailMaladie

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
          console.log("sfsdfg",this.id);
          axios.get(`https://sante-kionou.herokuapp.com/maladie/affichemaladiedetail/${this.id}`,{ headers: {patient : localStorage.getItem('patient')}})
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