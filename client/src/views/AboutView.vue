<template>
<div>
    <ComponentNavbar/>

<ComponentAbout/>

</div>
   
</template>

<script >
import ComponentAbout from '@/components/ComponentAbout.vue';
import ComponentNavbar from '@/components/ComponentNavbar.vue';

export default{
    name:"AboutView",
    components:{
        ComponentNavbar,
        ComponentAbout

    }

}

</script>