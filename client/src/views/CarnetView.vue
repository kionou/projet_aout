<template>
  <ComponentNavbar/>
 <p>{{id}}</p>
  <ComponentContainer id="id"/>
 
</template>

<script>
import ComponentNavbar from '@/components/ComponentNavbar.vue';
import ComponentContainer from '../components/ComponentContainer.vue';

export default {
    name:"CarnetView",
    props:['id'],
    components:{
        ComponentNavbar,
        ComponentContainer
    },
    data() {
      return {
       
      }
    },
  
}
</script>

<style>

</style>