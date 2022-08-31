<template>
     <div class="container">
        <div class="texte">
           <p>
            Mon carnet de vaccination électronique apporté de main partout ou je me trouve
           </p>
           <p class="small">pour etre mieux vacciné,sans défaut ni excès.</p>
        </div>
        <div class="texteBtn">
            <p>
               Cliquez sur ce boutton ci dessous pour creer votre carnet gratuitement.
            </p>
            <button @click="redirect">Inscription</button>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ComponentHome',
  methods:{
    redirect(){
        this.$router.push({path:'/sign'})
    }
  }
 
  
}
</script>

<style lang="css" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container{
    width: 100%;
    height: calc(100vh - 75px);
    /* border: 1px solid red; */
    background:rgba(0, 0, 0, 0.2) url('@/assets/home1.png') center no-repeat;
    background-size:cover ;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 40px;
    color: black;
     background-blend-mode: darken;
    
}

.texte{
    /* border: 1px solid blue; */
    max-width: 800px;
    padding: 10px;
}
.texte p{
    text-align: center;
    
}
.texte .small{
    font-size: 25px;
}

.texteBtn{
    /* border: 1px solid black; */
    text-align: center;
    padding: 10px;
    max-width: 800px;
}

.texteBtn p {
    text-align: center;
}

button {
    width: 9rem;
    height: 3rem;
    margin-top: 25px;
    text-align: center;
    border: none;
    background-color: #00afea;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Kaushan Script', cursive;
}

button:hover {
    background-color: white;
    color: #00afea ;
    border: 1px solid #00afea ;
    cursor: pointer;
}

@media (max-width: 768px) {

    .container
     {
        font-size: 30px;    
    }
    .texte .small {
            font-size: 17px;
        }
}


</style>
