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
        <div class="carnet" v-for="maladie in maladies" :key="maladie.id">
            <h1>{{maladie.nom_maladie}}</h1>
            <hr>
            <h5>la maladie</h5>
         
            <span>
                    {{maladie.description}}
            </span>
            <h5>Vaccins contre cette maladie</h5>
            <span>{{maladie.nom_vaccin}}</span>
          
         
       
        </div>
       </div>
    </div>
</template>

<script>
export default {
        name:"ComponentHeader",
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

.content {
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

.carnet {
    border: solid 1px #B3B3B3;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-radius: 10px;
    padding: 15px 6px 10px;
    
}

hr{
    margin-top: 20px;
    border: 0;
    border-top: 1px solid #eee;
    width: 100%;
}
h5{
    margin: 20px 0;
    color: blue;
    font-size: 1.5em;
}
span{
    font-size: 1.5em;
    /* border: 1px solid red; */
    /* max-width: 710px; */
        width: 98%;
        TEXT-ALIGN: center;
        PADDING: 10PX;
}

@media (max-width: 940px) {
    .content {
        width: 70%;
    }

    .carnet .text {
        font-size: 30px;
    }

}

@media (max-width: 700px) {
    .content {
        width: 100%;
        flex-direction: row;
    }

    .header ul {
        flex-direction: column;
        justify-content: center;
    }

    .carnet {
        width: 100%;
        height: auto;
        margin-top: 0;
        justify-content: center;
        
    }

    .header {
        display: flex;
    }

    .header ul li {
        height: 3rem;
        text-align: center;
        display: flex;
        padding: 0;
        margin-top: 10px;
        background-color: rgb(15, 142, 240);
    }

    .header ul li:nth-child(odd) {
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

    .header ul li a:hover {
        border: none;
    }

    .header ul li:hover {
        background-color: #fff;
        color: rgb(15, 142, 240);
    }

    .carnet .text {
        font-size: 20px;
    }
    span{
        font-size: 1.1em;
    }

}

@media (max-width: 378px) {

    .carnet .text {
        font-size: 10px;
    }

}

</style>