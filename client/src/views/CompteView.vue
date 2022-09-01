<template>

  <div>
    <ComponentNavbarConnect/>
  <ComponentCompte :users="users"/>
  </div>
  
</template>

<script>
import ComponentNavbarConnect from '@/components/ComponentNavbarConnect.vue'
import ComponentCompte from '@/components/ComponentCompte.vue';
import axios from 'axios'

export default {
    name:"CompteView",
    components:{
        ComponentCompte,
       ComponentNavbarConnect

    },
    data() {
      return {
        users:''
      }
    },
    created(){
      const auth = localStorage.getItem('patient')
      console.log("authhhh",auth);
      if (auth === null ) {
        this.$router.push({path:'/login'})
        
      }
    },
      mounted(){
      const auth = localStorage.getItem('patient')

        if (auth) {
          console.log("sfsdfg",auth);
          axios.get('https://sante-kionou.herokuapp.com/users/detailuser',{ headers: {patient : localStorage.getItem('patient')}})
         .then((response) =>{
             console.log('response',response.data);
             this.users= response.data.user
           
         })
          
        }else{
          console.log('nono');
        }
      
    }
   

}
</script>

<style>

</style>