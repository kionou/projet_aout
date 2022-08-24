<template>
  <ComponentNavbar/>

  <ComponentContainer/>
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentContainer from '../components/ComponentContainer.vue';

export default {
    name:"CarnetView",
    components:{
        ComponentNavbar,
        ComponentContainer
    }
}
</script>

<style>

</style>