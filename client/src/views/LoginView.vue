<template>

<ComponentNavbar/> 
  
<ComponentLogin/>

</template>
<script>
import ComponentLogin from "@/components/ComponentLogin.vue";
import ComponentNavbar from "@/components/ComponentNavbar.vue";

export default{
    name:"LoginView",
    components:{
        ComponentLogin,
        ComponentNavbar
    }
}
</script>


