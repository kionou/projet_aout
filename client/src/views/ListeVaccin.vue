<template>


<div>
  <ComponentNavbarConnect/>

<ComponentListeVaccin :vaccins="vaccins" :doctors="doctors" :alert="alert" />
</div>
 
</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentListeVaccin from '@/components/ComponentListeVaccin.vue';
import axios from 'axios';
export default {
    name:'ListeVaccin',
    props:['vaccins','doctors','alert'],
    components:{
        ComponentNavbarConnect,
        ComponentListeVaccin,

    },
    data(){
     return{
      vaccins:'',
      doctors:'',
      alert:''

     } 
    },

    
    created(){
      const auth = localStorage.getItem('patient')
      // console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }
    },
      mounted(){
      const auth = localStorage.getItem('patient')

        if (auth) {
          // console.log("sfsdfg",auth);
          axios.get('https://sante-kionou.herokuapp.com/vaccin/detailvaccin',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
              console.log('response',response.data.alert);
              if (response.data.alert) {
                this.alert = response.data.alert
                
              } else {
                  this.doctors= response.data.doctor,
                  this.vaccins= response.data.vaccin
              }
              
         })
          
        }else{
          console.log('nono');
        }
      
    }
    

}
</script>

<style>

</style>