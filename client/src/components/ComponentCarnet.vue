<template>
    <div>
        <div class="carnet" v-for="user in users" :key="user.id">
           
           <div class="text">
               <p>Carnet de {{user.prenom}}</p>
               <p class="date">Nee en 2008(13 ans 8mois)</p>
           </div>
        
       <div class="cve" @click="redirect">
          <span>{{user.nom}}</span>
          <p>Carnet de vaccination</p>
       </div>
      
    
       </div>
    </div>
  
</template>

<script>
import  "@/assets/app.js"
export default {
    name:'ComponentCarnet',
     props:['users'],
    
    data() {
        return {
            
        }
    },
    methods:{
        redirect(){
            this.$router.push({path:'/listeVaccin'})
            // this.$router.push({path:`/carnet/${response.data.data.id}`})

        }
    },
   

}
</script>

<style lang="css" scoped>
.carnet{
    border: solid 1px #B3B3B3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 80px;
        justify-content: space-evenly;
}
.carnet .text{
    margin-bottom: 20px;
    /* border: 1px solid red; */
    padding: 20px 0;
    font-size: 40px;
}
.carnet .cve{
    margin: 7px;
    padding: 0;
    width: 145px;
    height: 220px;
    vertical-align: top;
    float: left;
    border: solid 1px #CCC594;
    border-radius: 10px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #FFF8C7;
    box-shadow: 3px 3px #eee, 3px 3px 0 1px #ccc594;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
}


div.cve:hover {
    background-color: #ffff8b;
    cursor: pointer;
}
.cve p{
    border: 1px solid #fff;
    padding: 20px 5px;
    text-align: center;
    margin-top: 25px;
    padding: 15px 5px;
    color: #fff;
    background-color: rgb(255, 31, 31);
}

@media (max-width: 940px){

.carnet .text {
    font-size: 30px;
}

}

@media (max-width: 700px){
   
   
    .carnet{
        width: 100%;
        height: auto;
        margin-top: 0;
        justify-content: center;
    }
     .carnet .text{
        font-size: 20px;
    }
}

@media (max-width: 378px){
       
    .carnet .text {
        font-size: 10px;
    }
        
}

</style>