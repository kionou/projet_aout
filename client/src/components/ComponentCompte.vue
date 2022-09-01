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
         

            <div class="main">
       
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody  v-for="user in users" :key="user.id">
                        <tr>
                            <td>Nom</td>
                            <td>:</td>
                            <td>{{user.nom}}</td>
                        </tr>
                        <tr>
                            <td>Prenom</td>
                            <td>:</td>
                            <td>{{user.prenom}}</td>
                        </tr>
                        <tr>
                            <td>Addresse Email</td>
                            <td>:</td>
                            <td>{{user.email}}</td>
                        </tr>
                        <tr>
                            <td>Numero</td>
                            <td>:</td>
                            <td>{{user.numero}}</td>
                        </tr>
                        <tr>
                            <td>Date de naissance</td>
                            <td>:</td>
                            <td>{{user.date_naissance}}</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>

    
        
    </div>
        <div class="btn">
            <button @click="redirect">modifier</button>
        </div>
           </div>
          </div>
    </div>
</template>

<script>
export default {
    name:"ComponentCompte",
    props:['users'],
    methods: {
         carnet(){
            this.$router.push({path:"/carnet"})
        },
        compte(){
            this.$router.push({path:"/compte"})
        },
        maladie(){
            this.$router.push({path:"/maladie"})
        },
         redirect(){
            this.$router.push({path:"/updatepatient"})
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
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* border: 1px solid red; */
    width: 100%;
    height: 100vh;
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
.compte{
    border: solid 1px #B3B3B3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
    justify-content: space-between;
}

.compte .compte-header{
    border: 1px solid #B3B3B3;
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 25px;
}

.main {

      font-size: 28px;
    padding: 0 10px;
    /* width: 58%; */
    display: flex;
    flex-direction: column;
     /* border: 1px solid red;  */
     width: 100%; 
    height: 100%;
    align-items: center;
    justify-content: center;
}

.main h2 {
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
}

.main .card {
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 1px 1px 8px 0 grey;
    height: auto;
    margin-bottom: 20px;
    padding: 20px 0 20px 50px;
    width: 98%;
    max-width: 700px;
}

.main .card table {
    border: none;
    font-size: 16px;
    height: 270px;
    width: 80%;
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
    font-family: 'Roboto Serif', serif;
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