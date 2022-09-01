<template>
<div class="container">
       <div class="navbar-top">
        <div class="title">
            <h1>Profile</h1>
        </div>
    </div>

     <div class="main">
        <h2>IDENTITY</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody v-for="doctor in doctors" :key="doctor.id">
                        <tr>
                            <td>Nom</td>
                            <td>:</td>
                            <td>{{doctor.nom}}</td>
                        </tr>
                        <tr>
                            <td>Prenom</td>
                            <td>:</td>
                            <td>{{doctor.prenom}}</td>
                        </tr>
                        <tr>
                            <td>Addresse Email</td>
                            <td>:</td>
                            <td>{{doctor.email}}</td>
                        </tr>
                        <tr>
                            <td>Numero</td>
                            <td>:</td>
                            <td>{{doctor.numero}}</td>
                        </tr>
                        <tr>
                            <td>Specialité</td>
                            <td>:</td>
                            <td>{{doctor.specialite}}</td>
                        </tr>
                        <tr>
                            <td>Centre</td>
                            <td>:</td>
                            <td>{{doctor.centre}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    
        
    </div>
   
</div>
   
   
   
   
</template>

<script>
export default {
    name:'ComponentDoctorInfo',
    props:['doctors']

}
</script>

<style lang="css" scoped>

.container{
    width: 100%;
    height: calc(100vh - 100px);
    /* border: 1px solid red; */
}

.navbar-top {
    background-color: #fff;
    color: #333;
    box-shadow: 0px 4px 8px 0px grey;
    height: 70px;
}

.title {
    font-family: 'Dancing Script', cursive;
    padding-top: 15px;
    position: absolute;
    left: 45%;
}

.navbar-top ul {
    float: right;
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    padding: 18px 50px 0 40px;
}

.navbar-top ul li {
    float: left;
}

.navbar-top ul li a {
    color: #333;
    padding: 14px 16px;
    text-align: center;
    text-decoration: none;
}



.profile {
    margin-bottom: 20px;
    margin-top: -12px;
    text-align: center;
}

.main {
    background-color: #f5f5f5;
      font-size: 28px;
    padding: 0 10px;
    /* width: 58%; */
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    /* width: 100%; */
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






</style>