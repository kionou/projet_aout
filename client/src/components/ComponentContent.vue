<template>
    
   
    <div class="content">
          
             <ComponentHeader/>
         
        
       <ComponentCarnet/>

       
       
       </div>
</template>

<script>
import ComponentCarnet from './ComponentCarnet.vue';
import ComponentHeader from './ComponentHeader.vue';


export default {
    name:"ComponenetContent",
    data(){
        return{
          
        }
     
    },
    

    components:{
        ComponentHeader,
        ComponentCarnet
        

    },
    methods: {
   routes () {
         this.$router.push({path:"/home"})
         if ( this.$router == '/home') {
            console.log('dddd');
            
         }
    } 
 
    },

}
</script>
    

<style lang="css" scoped>
.content{
    width: 50%;
    height: 80vh;
    /* border: 1px solid black; */
    padding: 10px;
    display: flex;
    flex-direction: column;
}


@media (max-width: 940px){
.content {
    width: 70%;
}

}

@media (max-width: 700px){
    .content {
        width: 100%;
        flex-direction: row;
    }
}

</style>