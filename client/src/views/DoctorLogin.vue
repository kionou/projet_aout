<template>
<div>
  <ComponentNavbarConnect/>

<ComponentDoctorLogin/>
</div>

</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentDoctorLogin from '@/components/ComponentDoctorLogin.vue';
export default {
    name:'DoctorLogin',
    components:{
        ComponentDoctorLogin,
        ComponentNavbarConnect
    },
        created(){
      const auth = localStorage.getItem('doctor')
      console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/doctor'})
        
      }else{
        this.$router.replace('/ajouterVaccin')
      }
    },


}
</script>

<style>

</style>