<template>

  <div>
    <ComponentNavbarConnect/>
  <ComponentAjouterVaccin :patient="patient" :doctor="doctor"/>

  </div>
 
</template>

<script>

import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentAjouterVaccin from '@/components/ComponentAjouterVaccin.vue';
export default {
     name:'AjouterVaccin',
     props:['patient','doctor'],
    components:{
       ComponentNavbarConnect,
        ComponentAjouterVaccin

    },
    data() {
      return {
        patient:'',
        doctor:''
      }
    },
        created(){
      const patient = localStorage.getItem('patient')
      const doctor = localStorage.getItem('doctor')
      if ((patient && doctor) == null ) {
        this.$router.push({path:'/doctor'})  
      }else{
        this.patient =patient,
        this.doctor =doctor
      }



    },

      // mounted(){
      // const patient = localStorage.getItem('patient')
      // const doctor = localStorage.getItem('doctor')
     


        // if ((patient && doctor)) {
        //   console.log("sfsdfg",auth);
        //   axios.post('http://localhost:3000/vaccin/vaccinpost',{ headers: {patient : localStorage.getItem('patient')}})
        //  .then((response) =>{
        //      console.log('response',response.data);
        //     //  this.users= response.data.user
           
        //  })
          
        // }else{
        //   console.log('nono');
        // }
      
    // }

}
</script>

<style>

</style>