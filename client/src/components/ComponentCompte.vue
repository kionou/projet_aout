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
           <div class="compte">
            <div class="compte-header">
                <p>Gestion du compte</p>
            </div>
            <table class="tableStd" style="max-width:600px;width: 98%;">
	
                <tr class="titre"><td colspan="3">Paramètres du compte</td></tr>
        
      <div v-for="user in users" :key="user.id">

   
            <tr><td>Nom</td><td style="text-align:left;">{{user.nom}}</td></tr>
            <tr><td>prenom</td><td style="text-align:left;">{{user.prenom}}</td></tr>
            <tr><td>Email</td><td style="text-align:left;"><span style="font-family:courier new; font-size:1.2em">{{user.email}}</span></td></tr>	
            <tr><td>Numero</td><td>{{user.numero}}</td></tr>
            <tr><td>Date de naissance</td><td>{{user.date_naissance}}</td></tr>
            <tr><td>Mot de passe</td><td>*******</td></tr>
          
        </div>    
            
        </table>
        <div class="btn">
            <button>modifier</button>
        </div>
           </div>
          </div>
    </div>
</template>

<script>
export default {
    name:"ComponentCompte",
    methods: {
         carnet(){
            this.$router.push({path:"/carnet/:id"})
        },
        compte(){
            this.$router.push({path:"/compte"})
        },
        maladie(){
            this.$router.push({path:"/maladie"})
        },
    }
    

}
</script>

<style lang="css" scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border: 1px solid red;
    width: 100%;
    height: 100vh;
    padding: 10px;
}

.content{
    width: 50%;
    height: 80vh;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
.compte{
    border: solid 1px #B3B3B3;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.compte .compte-header{
    border: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 25px;
}



.tableStd {
    width: 97%;
    margin: 20px auto 15px auto;
    border-collapse: collapse;
}

.tableStd tr.titre {
    color: #F8F8F8;
    background-color: #989898;
}
.tableStd td {
    padding: 8px;
    font-size: 1em;
    font-family: arial;
    border-bottom: solid 1px #D8D8D8;
}
.tableStd tr.titre {
    color: #F8F8F8;
    background-color: #989898;
}
.tableStd tr {
    background-color: #E6E6E6;
}

button {
    width: 9rem;
    height: 3rem;
    margin-top: 25px;
    text-align: center;
    border: none;
    background-color: rgb(15, 142, 240) ;
    color: white;
    border-radius: 5px;
    font-size: 23px;
}

button:hover {
    background-color: white;
    color: rgb(15, 142, 240) ;
    border: 1px solid rgb(15, 142, 240) ;
    cursor: pointer;
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
   

}
    


</style>