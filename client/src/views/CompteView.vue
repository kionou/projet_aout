<template>
  <ComponentNavbar/>
  <ComponentCompte/>
</template>

<script>
import ComponentCompte from '@/components/ComponentCompte.vue';
import ComponentNavbar from '@/components/ComponentNavbar.vue';

export default {
    name:"CompteView",
    components:{
        ComponentCompte,
        ComponentNavbar

    }

}
</script>

<style>

</style>