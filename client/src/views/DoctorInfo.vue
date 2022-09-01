<template>

  <div>
    <ComponentNavbarConnect/>
<ComponentDoctorInfo :doctors="doctors" />
  </div>


</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentDoctorInfo from '@/components/ComponentDoctorInfo.vue';
import axios from 'axios'
export default {
    name:'DoctorInfo',
    props:['doctors'],
    components:{
        ComponentDoctorInfo,
        ComponentNavbarConnect
    },
    data() {
        return {
            doctors:''
        }
    },
       created(){
      const auth = localStorage.getItem('doctor')
      console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }
    },
      mounted(){
      const auth = localStorage.getItem('doctor')

        if (auth) {
          console.log("sfsdfg",auth);
          axios.get('https://sante-kionou.herokuapp.com/doctor/detaildoctor',{ headers: {doctor : localStorage.getItem('doctor')}})
         .then((response) =>{
             console.log('response',response.data);
             this.doctors= response.data.doctor
           
         })
          
        }else{
          console.log('nono');
        }
      
    }

}
</script>

<style>

</style>