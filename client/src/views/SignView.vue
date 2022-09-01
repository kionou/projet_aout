<template>
  <div>
    <ComponentNavbar/> 
  
  <ComponentSign/>
  
  </div>


</template>
<script>
import ComponentSign from "@/components/ComponentSign.vue";
import ComponentNavbar from "@/components/ComponentNavbar.vue";


export default{
    name:"SignView",
    components:{
    ComponentNavbar,
    ComponentSign
},
  created(){
      const auth = localStorage.getItem('patient')
      // console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/sign'})
        
      }else{
        this.$router.push({path:'/carnet'})

      }
      }
}
</script>
