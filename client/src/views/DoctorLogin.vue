<template>

<ComponentNavbarConnect/>

  <ComponentDoctorLogin/>
</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentDoctorLogin from '@/components/ComponentDoctorLogin.vue';
export default {
    name:'DoctorLogin',
    components:{
        ComponentDoctorLogin,
        ComponentNavbarConnect
    }

}
</script>

<style>

</style>