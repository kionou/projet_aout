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
        <div class="carnet">
            <h5>Ajouter un vaccin</h5>
            <form action="">
                <div class="form-content">
                    <label for="" >Date</label>
                    <input type="date" >
                </div>
                <div class="form-content">
                    <label for="">Nom du vaccin</label>
                    <input type="text" >
                </div>

                <button>Ajouter</button>
               
            </form>
          
         
       
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name:'ComponentAjouterMaladie'

}
</script>

<style lang="css" scoped>
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

.content {
    width: 50%;
    height: 80vh;
    /* border: 1px solid black; */
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
h5{
    font-size: 20px;
    padding: 15px 0;
}
form{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-width: 500px;
    width: 98%;
    align-items: center;
}


.form-content  {
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 100%;
    align-items: center;
}
label{
    font-size: 18px;
}
input{
    max-width: 400px;
    width: 98%;
    height: 2.5rem;
    border-radius: 8px;
    /* outline: none; */
    padding: 8px;
    font-size: 18px;
    border: 1px solid;
}

button {
    width: 9rem;
    height: 3rem;
    margin-top: 25px;
    text-align: center;
    border: none;
    background-color: rgb(15, 142, 240);
    color: white;
    border-radius: 5px;
    font-size: 23px;
}

button:hover {
    background-color: white;
    color: rgb(15, 142, 240);
    border: 1px solid rgb(15, 142, 240);
    cursor: pointer;
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

}

@media (max-width: 378px) {

    .carnet .text {
        font-size: 10px;
    }

}


</style>