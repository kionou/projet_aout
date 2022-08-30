<template>
   <div class="container">
      <ComponentContent :users="users"/>
     
    </div>
</template>

<script>
import ComponentContent from './ComponentContent.vue';


export default {
    name:"CompponentContainer",
    props:['users'],
    components:{
        ComponentContent,
    },
    data(){
        return{
            // users:this.user
        }
    }

}
</script>

<style lang="css" scoped>
.container {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    height: calc(100vh - 75px);
    padding: 10px;
}






</style>