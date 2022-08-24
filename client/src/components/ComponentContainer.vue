<template>
   <div class="container">
      <ComponentContent/>
    </div>
</template>

<script>
import ComponentContent from './ComponentContent.vue';


export default {
    name:"CompponentContainer",
    components:{
        ComponentContent,
    }

}
</script>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 100%;
    height: calc(100vh - 75px);
    padding: 10px;
}






</style>