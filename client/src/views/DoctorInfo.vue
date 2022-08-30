<template>
<ComponentNavbarConnect/>
<ComponentDoctorInfo/>

</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentDoctorInfo from '@/components/ComponentDoctorInfo.vue';
export default {
    name:'DoctorInfo',
    components:{
        ComponentDoctorInfo,
        ComponentNavbarConnect
    }

}
</script>

<style>

</style>