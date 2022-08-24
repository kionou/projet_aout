<template>
   <div class="header">
            <ul>
                <li @click="carnet">carnet</li>
                <li @click="compte">Mon Compte</li>
                <li @click="maladie">Maladie</li>
            </ul>
        </div>
</template>

<script>
export default {
     name:"ComponentHeader",
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

@media (max-width: 700px){
   
    .header ul{
      flex-direction: column;
      justify-content: center;
    }
  
    .header  {
        display: flex;   
    }
    .header ul li {
        height: 3rem;
        text-align: center;
        display: flex;
        padding: 0;
        margin-top: 10px;
        background-color: rgb(15,142,240);
        justify-content: center;
        border-radius: 0px;
    }
    .header ul li:nth-child(odd){
      padding-top: 10px;
       }
    /* .header ul li a {
        height: 100%;
        width: 100%;
        padding: 0;
        border-radius: 0px;
        background-color: transparent;
        border: none;
    }
    .header ul li a:hover{
        border: none;
    } */
    .header ul li:hover {
        background-color: #fff;
        color: rgb(15, 142, 240);
    }
   

}

</style>