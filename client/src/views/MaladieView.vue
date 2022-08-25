<template>
  <ComponentNavbar/>

  <ComponentMaladie/>

</template>

<script>

import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentMaladie from '@/components/ComponentMaladie.vue';
export default {
    name:"MaladieView",
    components:{
        ComponentNavbar,
        ComponentMaladie 

    }

}
</script>

<style>

</style>