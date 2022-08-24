<template>
 
  <router-view/>
</template>
<script >
  import ComponentNavbar from './components/ComponentNavbar';

export default{
  name:"App",
  components:{
    ComponentNavbar,
   

  }

}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@1,200&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Roboto Serif', serif;

}


</style>
