<template>
  <ComponentNavbar/>

  <ComponentListeVaccin />
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentListeVaccin from '@/components/ComponentListeVaccin.vue';
export default {
    name:'ListeVaccin',
    props:['id'],
    components:{
        ComponentNavbar,
        ComponentListeVaccin,

    },
    data(){
      
    }

}
</script>

<style>

</style>