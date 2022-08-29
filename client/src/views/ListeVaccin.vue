<template>
  <ComponentNavbar/>

  <ComponentListeVaccin :vaccins="vaccins" :doctors="doctors" />
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentListeVaccin from '@/components/ComponentListeVaccin.vue';
import axios from 'axios';
export default {
    name:'ListeVaccin',
    props:['vaccins','doctors'],
    components:{
        ComponentNavbar,
        ComponentListeVaccin,

    },
    data(){
     return{
      vaccins:'',
      doctors:''

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
          axios.get('http://localhost:3000/vaccin/detailvaccin',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
            //  console.log('response',response.data.doctor);
              this.doctors= response.data.doctor,
              this.vaccins= response.data.vaccin 
         })
          
        }else{
          console.log('nono');
        }
      
    }
    

}
</script>

<style>

</style>