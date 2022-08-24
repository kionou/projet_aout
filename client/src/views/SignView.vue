<template>

<ComponentNavbar/> 
  
<ComponentSign/>

</template>
<script>
import ComponentSign from "@/components/ComponentSign.vue";
import ComponentNavbar from "@/components/ComponentNavbar.vue";


export default{
    name:"SignView",
    components:{
    ComponentNavbar,
    ComponentSign
}
}
</script>
