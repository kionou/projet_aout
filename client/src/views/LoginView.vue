<template>
  <div>
    <ComponentNavbar/> 
  
<ComponentLogin/>
  </div>



</template>
<script>
import ComponentLogin from "@/components/ComponentLogin.vue";
import ComponentNavbar from "@/components/ComponentNavbar.vue";

export default{
    name:"LoginView",
    components:{
        ComponentLogin,
        ComponentNavbar
    },
      created(){
      const auth = localStorage.getItem('patient')
      // console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }else{
        this.$router.push({path:'/carnet'})

      }
    },
}
</script>


