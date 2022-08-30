<template>
   <div class="container">
        <div class="content">
          <div class="header">
             <ul>
                <li @click="carnet">carnet</li>
                <li @click="compte">Mon Compte</li>
                <li @click="maladie">Maladie</li>
             </ul>
         </div>
         
         <div class="vaccination">
            <h5 class="title">
                Maladies à prévention vaccinale
               </h5>
            <div class="cadre-vaccin" >
                <div class="vaccin-content"  v-for="maladie in maladies" :key="maladie.id" @click="redirect(maladie.id)">
                    <p >{{maladie.nom_maladie}}</p>
                 </div>
                
            </div>
            
            
            
      
         </div>
        </div>
    </div>
</template>

<script>
export default {
         name:"Componentmaladie",
         props:['maladies'],
    methods:{
        carnet(){
            this.$router.push({path:"/carnet"})
        },
        compte(){
            this.$router.push({path:"/compte"})
        },
        maladie(){
            this.$router.push({path:"/maladie"})
        },
         redirect(id){
            this.$router.push({path:`/detailMaladie/${id}`})
           
        },
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
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    padding: 10px;
}
.content{
    width: 80%;
    height: 100%;
    /* border: 1px solid black; */
    padding: 10px;
    display: flex;
    flex-direction: column;
     background-color: #fff;
    border-radius: 8px;
}
.header{
    border: 1px solid #B3B3B3;
    padding: 10px;
    border-radius: 10px;
}
.header{
    border: 1px solid #B3B3B3;
    padding: 10px;
    border-radius: 10px;
}
.header ul{
    display: flex;
    justify-content: space-evenly;
    /* border: 1px solid blue; */
}
.header ul li {
    list-style: none;
    /* border: 1px solid red; */
    padding: 10px 18px;   
}
.header ul li {
    text-decoration: none;
    padding: 10px 18px;
    border-radius: 30px;
    border: 1px solid #B3B3B3;
    color: white;
    background-color: rgb(15, 142, 240); 
}
.header ul li:hover{
    color:rgb(15, 142, 240) ;
    background-color: #fff;
    border: 1px solid rgb(15,142,240);
    cursor: pointer;
}


.content .title{
    text-align: center;
    padding: 20px;
    font-size: 2em;
}
.vaccination{
    border: solid 1px #B3B3B3;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-top: 10px;
}
.vaccination .cadre-vaccin{
    width: 100%;
    height: 100vh;
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
}
.vaccination .vaccin-content{
    border: 1px solid rgb(15, 142, 240);
    border-radius: 10px;
    max-width: 400px;
    width: 98%;
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;

}
.vaccination .vaccin-content:hover{
    border: 1px solid #fff;
    cursor: pointer;
    background-color: rgb(15, 142, 240);
    color: #fff;
    
  

}
.vaccination .vaccin-content p{
    text-decoration: none;
    width: 100%;
    color: rgb(15, 142, 240);
    height: 100%;
    padding: 20px;
   
}
.vaccination .vaccin-content p:hover{
    color: #fff;
   
}


@media (max-width: 940px){
    .content {
        width: 70%;
    }
    .content .title{
        font-size: 1.5em;
    }
 
}

@media (max-width: 700px){
    .content {
        width: 100%;
        flex-direction: row;
    }
    .header ul{
      flex-direction: column;
      justify-content: center;
    }
    .compte{
        width: 100%;
        height: auto;
        margin-top: 0;
        padding: 8px;
    }
    .header  {
        display: flex; 
        border: none;  
    }
    .header ul li {
        height: 3rem;
        text-align: center;
        display: flex;
        padding: 0;
        margin-top: 10px;
        background-color: rgb(15,142,240);
    }
    .header ul li:nth-child(odd){
      padding-top: 10px;
       }
    .header ul li a {
        height: 100%;
        width: 100%;
        padding: 0;
        border-radius: 0px;
        background-color: transparent;
        border: none;
    }
    .header ul li a:hover{
        border: none;
    }
    .header ul li:hover {
        background-color: #fff;
        color: rgb(15, 142, 240);
    }

    .content .title {
         font-size: 1em;
    }
   

}
    

</style>