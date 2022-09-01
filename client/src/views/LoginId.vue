<template>
<div>
    <ComponentNavbar/> 
  
<ComponentLoginId/>
</div>


</template>
<script>
import ComponentLoginId from "@/components/ComponentLoginId.vue";
import ComponentNavbar from "@/components/ComponentNavbar.vue";

export default{
    name:"LoginView",
    components:{
        ComponentLoginId,
        ComponentNavbar
    },
    //   created(){
    //   const auth = localStorage.getItem('patient')
    //   // console.log("authhhh",auth);
    //   if (auth === null ) {
    //     this.$router.push({path:'/login'})
        
    //   }else{
    //     this.$router.push({path:'/carnet'})

    //   }
    // },
}
</script>


