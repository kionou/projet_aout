<template>
  <ComponentNavbar/>
  <ComponentDetailMaladie/>
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentDetailMaladie from '@/components/ComponentDetailMaladie.vue';


export default {
    name:"DetailMaladie",
  components: { 
    ComponentNavbar,
    ComponentDetailMaladie

   },

}
</script>

<style>

</style>