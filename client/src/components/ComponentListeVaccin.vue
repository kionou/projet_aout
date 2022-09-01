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
           
            <div class="table-container">
                <h1 class="heading">
                    liste des vaccins
                </h1>
                <div class="alert" v-if="alert">
                    <p> {{alert}}</p>

                </div>
                <table class="table" v-else>
                        <thead>
                            <tr>
                                <th>date de l'acte</th>
                                <th>Vaccin utilisé</th>
                                <th>Protège contre</th>
                                <th>Vaccin effectué par</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="vaccin in vaccins" :key="vaccin.id">
                                <td Ref="date" data-label="date de l'acte">{{vaccin.createdAt}}</td>
                                <td data-label="Vaccin utilisé">{{vaccin.nom}}</td>
                                <td data-label="Protège contre">{{vaccin.nom_maladie}}</td>
                               
                                <td class="doctor" data-label="Vaccin effectué par" v-for="doctor in doctors" :key="doctor.id" @click="redirect">{{doctor.nom}} {{doctor.prenom}}</td>
                              
                            </tr>
                              <!-- <tr>
                                <td data-label="date de l'acte">12/12/2012</td>
                                <td data-label="Vaccin utilisé">Astrazeneca</td>
                                <td data-label="Protège contre">Covid-19</td>
                                <td data-label="Vaccin effectué par">Kouassi detail</td>
                            </tr> -->
                        </tbody>
                    </table>
            </div>
            
            	
       </div>
    </div>
	 </div>
</template>

<script>
import '@/assets/app'
export default {
       name:"ComponentListeVaccin",
       props:['vaccins','doctors','alert'],
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
         redirect(){
            this.$router.push({path:'/doctorinfo'})
        },
    
    },
    mounted() {
        console.log('gfsfgsge',this.$refs.date)
    },
 

}
</script >

<style lang="css" scoped>

.container {
  background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
   /* border: 1px solid red;*/
     height: calc(100vh - 75px);
    height: 100vh;
    padding: 10px;
}

.content {
    width: 80%;
    height: 100%;
   /* border: 1px solid black;*/
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: space-between;
    align-items: center;
}
.table-container{
    padding: 0 10px;
    margin: 40px auto 0;
    width: 100%;
}

.heading{
    font-size: 40px;
    text-align: center;
    color: #3c3f44;
    margin-bottom: 40px;
}
.table{
    width: 100%;
    border-collapse: collapse;
}
.table thead{
    background-color: rgb(15,142,240)
}

.table thead tr th{
    font-size: 14px;
    font-weight: 600;
    letter-spacing:0.35px;
    color:#fff;
    opacity:1;
    padding:12px;
    vertical-align: top;
    border:1px solid #3c3f44;

}

.table tbody tr td{
    font-size: 14px;
    letter-spacing: 0.35px;
    font-weight: normal;
    color: #3c3f44;
    padding: 8px;
    text-align: center;
    border: 1px solid #3c3f44;
}
span{
    width: 100%;
}
.doctor:hover{
    cursor: pointer;
    color: #ee2828;

}
.alert{
    border: 1px solid #B3B3B3;
    padding: 20px 50px;
    text-align: center;
    margin-top: 90px;
    font-size: 30px;
    border-radius: 8px;
}

@media (max-width: 768px) {
    .table thead{
        display: none;
    }
    .table .table tbody,.table tr,.table td{
        display: block;
        width: 100%;
    }
    .table tr{
        margin-bottom: 15px;
    }
    .table tbody tr td{
        text-align: right;
        padding-left: 50%;
        position: relative;
    }
    .table td:before{
        content:attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-weight: 600;
        font-size:14px;
        text-align:left
    }
    
}




</style>