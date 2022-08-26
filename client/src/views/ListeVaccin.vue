<template>
  <ComponentNavbar/>
{{id}}
  <ComponentListeVaccin :id="id"/>
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
      id:this.id
    }

}
</script>

<style>

</style>