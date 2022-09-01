<template>
     <div>
      <ComponentNavbar/>

<ComponentHome/>

     </div>


   
</template>

<script>
import ComponentHome from '@/components/ComponentHome.vue';
import ComponentNavbar from '@/components/ComponentNavbar.vue';


// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
    ComponentNavbar,
    ComponentHome,
    
  }
}
</script>

