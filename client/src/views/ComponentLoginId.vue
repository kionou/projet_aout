<template>
    <div class="ImageHeader">
        <div class="container">
                    <div class="texte">
                        <h2>CONNEXION</h2>
                    </div>
                            <p class="message">{{message}}</p>
                    <form >
                    <div class="input-form">
                           <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                        <input type="email" class="input" name="email" placeholder=" " v-model="email">
                        <label for="email">Adresse Email</label>
                      
                    </div>
                    <div class="input-form">
                        <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}} </small>
                        <input type="password" class="input" name="password" placeholder=" " v-model="password">
                        <label for="password">Mot de passe</label>
                   
                    </div>
                 
                    <button  @click.prevent="submit">Connecter</button>
                    </form>
                    <div class="texte">
                     <p>Tu n'as pas encore de compte ? <span class="sanp" @click="redirect">Créer un compte</span>  </p>
                    </div>
        </div>

   
    </div> 
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required , email , minLength ,minValue , maxLength ,maxValue} from '@vuelidate/validators'
import {require, lgmin,lgmax,ValidEmail} from '../functions/rules'


import axios from 'axios'

export default{
    name:"ComponentLogin",
    props:['id'],
     data(){
        return{

        email:'',
        password:'',
        v$:useVuelidate(),
        message:''
   
       }
    },
    validations: {
        
             
          
             email:{
               require,
                ValidEmail
            },
            password:{
              require,
                lgmin:lgmin(6),
                lgmax:lgmax(12)
         
                
            },
    },
    mounted() {
        axios.get('https://sante-kionou.herokuapp.com/login/:id')
        .then((res)=>{
            console.log(res);
        })
    },
    methods:{
        redirect(){
            this.$router.push({ path: '/sign'})
        },
        submit(){
            
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
                // this.revele = !this.revele
             let   DataUser={
                    email:this.email,
                    password:this.password
                }

                   axios.post('http://localhost:3000/users/userconnexion',DataUser)
                  .then((response) => {
                    console.log('message',response.data.data)
                    

                    if (response.data.data) {
                        localStorage.setItem('patient',response.data.data)
                        this.$router.push({path:'/carnet'})
    
                    }else{
                        this.message=response.data.alert
                    }
                  
                  })
                
            }
        }
        
    },
   
}
</script>


<style lang="css" scoped>


@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Kaushan+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@1,200&display=swap');




.ImageHeader {
    font-family: 'Roboto Serif', serif;
    background-color: #f5f5f5;
    height: calc(100vh - 75px);
    width: 100%;
    text-align: center;
    position: relative;
}

.container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    width: 58%;
    height: auto;
    border: 1px solid #00afea;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    /* display: none; */

}
small ,.message{
    color: #f8001b;
}
.Container {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 330px;
    border: 1px solid #00afea;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    display: none;
    padding: 25px;
}

.container-passes {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 58%;
    height: auto;
    border: 1px solid #00afea;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    /* display: none; */

}

.Container p{
    padding: 15px;
}

.recupere{
    padding: 10px;
}

.recupere h1{
    padding: 20px;
    font-size: 35px;
    text-transform: uppercase;
}
.recupere p{
    padding: 30px;
    font-size: 20px;
}
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
    width: 100%;
}

.input-form {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 25px;
}

input,
label,
button {
    transition: all .3s;
}

label {
    transform: translate(10px, -15px);
    cursor: text;
    transform-origin: left top;
    position: absolute;
}

input {
    height: 3rem;
    width: 30rem;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 2px solid #f5f5f5;
    font-family: 'Roboto Serif', serif;
}


input::placeholder {
    opacity: 0;
}

input:focus,
input:not(:placeholder-shown) {
    border-bottom: 2px solid #00afea;

}

input:not(:placeholder-shown)~label,
input:focus~label {
    transform: translate(10px, -30px) scale(.8);
}
.sanp{
    color: #00afea;
}
.sanp:hover{
    text-decoration: underline;
    cursor: pointer;
}









button {
    width: 9rem;
    height: 3rem;
    margin-top: 25px ;
    text-align: center;
    border: none;
    background-color: #00afea;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Kaushan Script',cursive;
}

button:hover {
    background-color: white;
    color: #00afea;
    border: 1px solid #00afea;
    cursor: pointer;
}


@media (min-width: 1900px) {
    .container , .container-passes{
        width: 33% !important;  
    }
}
@media (min-width: 1700px) {
    .container , .container-passes{
        width: 38% !important;
  
    }
}
@media (min-width: 1366px) {
    .container , .container-passes {
        width: 46%;
     
    }
}

@media (max-width: 900px) {
    .container , .container-passes {

        width: 66%;
    }
}
@media (max-width: 768px) {
    .container , .container-passes { 
        width: 74%;   
    }
}


@media (max-width: 740px) {
    .container , .container-passes {
        width: 85%;
        top: 57%;
    }
}


@media (max-width: 600px) {
    .container {
        width: 57%;
        height: auto;
        padding: 10px 10px 80px 10px;
    }

    .Container{
        width: 100%;
        height: auto;
    }
  

    .btnPassword{
        height: auto;
    }

    form{
        padding: 35px;
    }
    
    input{
        width: 16rem;
    }
 
}

@media (max-width: 498px) {
    .container {
        width: 68%;
    }

    #input{
        width: 20rem;
    }
}

@media (max-width: 418px) {
    .container {
        width: 88%;
    }
}

@media (max-width: 355px) {
    .container {
        width: 97%;
    }
}


</style>