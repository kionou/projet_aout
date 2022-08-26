<template>
  <component-navbar/>
  <ComponentAjouterVaccin/>
  {{id}}
</template>

<script>

import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentAjouterVaccin from '@/components/ComponentAjouterVaccin.vue';
export default {
     name:'AjouterVaccin',
     props:['id'],
    components:{
        ComponentNavbar,
        ComponentAjouterVaccin

    },

}
</script>

<style>

</style>