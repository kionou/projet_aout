<template>
  <ComponentNavbar/>

  <ComponentListeVaccin/>
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentListeVaccin from '@/components/ComponentListeVaccin.vue';
export default {
    name:'ListeVaccin',
    components:{
        ComponentNavbar,
        ComponentListeVaccin

    }

}
</script>

<style>

</style>