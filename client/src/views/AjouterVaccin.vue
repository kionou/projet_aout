<template>
  <component-navbar/>
  <ComponentAjouterVaccin/>
</template>

<script>

import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentAjouterVaccin from '@/components/ComponentAjouterVaccin.vue';
export default {
     name:'AjouterVaccin',
    components:{
        ComponentNavbar,
        ComponentAjouterVaccin

    },

}
</script>

<style>

</style>