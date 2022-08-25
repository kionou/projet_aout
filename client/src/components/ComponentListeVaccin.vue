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
            	
       </div>
    </div>
	 </div>
</template>

<script>
export default {
       name:"ComponentListeVaccin",
    methods:{
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
</script >

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

table.tablesorter {
    text-align: left;
}

.vaccins {
    border: solid 1px #9F9F9F;
    border-collapse: collapse;
}
.vaccins tr.gris {
    background-color: #A5A5A5;
}
vaccins th,
.vaccins td {
    border: solid 1px #FFFFFF;
    padding: 10px;
}
.vaccins th,
.newuser th,
.user_update th,
.table th,
.vaccins td,
.newuser td,
.user_update td,
.table td {
    padding: 8px;
    font-size: 1em;
    font-family: arial;
}
table_textref tr.titre,
.vaccins tr.titre {
    color: #ffffff;
    /* background-color: #3333FF; */
    font-weight: bold;
}
l,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
caption,
tbody,
tfoot,
thead,
tr,
blockquote {
    font-family: inherit;
}

</style>