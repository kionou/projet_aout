<template>

<div>

<ComponentModal v-bind:revele="revele" v-bind:submit="submit">
</ComponentModal>

<div class="ImageHeader">
    <section class="content">
        <div class="cadre">
            
            <div class="text-content">
                <h1>INSCRIPTION</h1>
                <p>Inscrivez vous pour beneficier de nos produits.</p>
            </div>
             <p class="message">{{message}}</p>
                   
                    <form  >
                        <div class="name">
                            <div  class="input-form">
                             <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>
                                <input type="text" class="input" name="nom" placeholder=" " v-model="nom" >
                                <label for="nom">Nom</label>
                                
                              
                               
                               
                            </div>
                            <div  class="input-form">
                              <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}} </small>
                                <input type="text" class="input" name="prenom" placeholder=" " v-model="prenom">
                                <label for="prenom">Premon</label>
                            </div>
                        </div>
                        <div class="name">
                            <div class="input-form">
                               <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                                <input type="email" class="input" name="email" placeholder=" " v-model="email">
                                <label for="email">Adresse Email</label> 
                            </div>
                            <div class="input-form">
                                <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
                                <input type="tel" class="input" name="numero" placeholder=" " v-model="numero">
                                <label for="numero">Numéro téléphone</label>
                            </div>
                        </div>
                        <div class="name">
                            <div  class="input-form">
                                <small v-if="v$.date_naissance.$error">{{v$.date_naissance.$errors[0].$message}} </small>
                                <input type="date" class="input" name="date_naissance" placeholder=" " v-model="date_naissance">
                                <label for="date_naissance">Date de Naissance</label>
                            </div>
                              <div class="input-form">
                                   <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}} </small>
                                    <input type="password" class="input" name="password" placeholder=" " v-model="password">
                                    <label for="password">Mot de passe</label>      
                              </div>
                              
                              

                         </div>
                                <button @click.prevent="submit">Enregister</button>
                    </form>
                        <p>Vous aviez pas de compte? <span class="sanp" @click="redirect">Cliquer ici</span></p>
            
        </div>
    </section>
</div>

</div>




</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required , email , minLength ,minValue , maxLength ,maxValue} from '@vuelidate/validators'
import {require, lgmin,lgmax,ValidEmail,ValidNumeri,vlmin,vlmax} from '../functions/rules'
import ComponentModal from './ComponentModal.vue'
import axios from 'axios'

export default {
    
    name:'ComponentSign',
    components:{
        ComponentModal

    },
    data(){
        return{
           
             
                nom:'',
                prenom:'',
                email:'',
                numero:'',
                date_naissance:'',
                password:'',
           
              v$:useVuelidate(),
              revele:false,
              message:''


           
            
        }
    },
    validations: {
        
             
          
             nom:{
                require,
                lgmin:lgmin(4),
                lgmax:lgmax(20)
            },
            prenom:{
                require,
                lgmin:lgmin(4),
                lgmax:lgmax(20)
                
            },
            email:{
                require,
                ValidEmail
               
            },
            numero:{
                require,
                ValidNumeri,
                lgmin:lgmin(10),
                lgmax:lgmax(12)
                
               
              
            },
            date_naissance:{
                require,
                
            },
            password:{
                require,
                lgmin:lgmin(6),
                lgmax:lgmax(12)
         

            },
            
           
           
        

    },
    methods:{
        redirect(){
            this.$router.push({ path: '/login'})
        },
        submit(){
            console.log('date',this.date_naissance);
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
               
             let   DataUser={
                    nom:this.nom,
                    prenom:this.prenom,
                    email:this.email,
                    numero:this.numero,
                    date_naissance:this.date_naissance,
                    password:this.password
                }
                  axios.post('https://sante-kionou.herokuapp.com/users/userpost',DataUser)
                 .then((response) => {
                    console.log(response)
                    if (response.data.alert) {
                        this.message=response.data.alert    
                    }else{
                       console.log('bonjour');
                         this.revele = !this.revele
                    }

                 })
                
                // axios.get('http://localhost:3000/users/userget')
                // .then((response) =>{
                //      console.log('messagess',response.data)
                //  const user = response.data.filter(el=> el.email === DataUser.email)
                    
                //      if (user == "") {
                //            console.log('ok');
                        
                //          
                        
                //      } else {
                //         console.log('erreur');
                //         this.message='Email existe déjà '
                        
                //      }
                // })

               

                
                
            }
           

        }
    },
  

}
</script>

<style scoped>
.ImageHeader {
    font-family: 'Roboto Serif', serif;
    background-color: #f5f5f5;
    height: calc(100vh - 75px);
    width: 100%;
    text-align: center;
    position: relative;
}

.cadre {
    width: 780px;
    height: 481px;
    border: 1px solid #00afea;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

}

.text-content {
    text-align: center;
    padding: 5px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
}
small ,.message{
    color: #f8001b;
}

.input-form{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
}

input , label , button {
    transition: all .3s;
}

label{
    transform: translate(10px,-1px);
    cursor: text;
    transform-origin: left top;
    position: absolute;
}
input{
    margin-right: 40px;
    height: 3rem;
    width: 20rem;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    border-bottom: 2px solid #f5f5f5;
    font-family: 'Roboto Serif', serif;
}

input::placeholder{
    opacity: 0;
}
input:focus,
 input:not(:placeholder-shown) {
    border-bottom: 2px solid #00afea;

}

input:not(:placeholder-shown)~ label,
input:focus ~ label{
    transform: translate(10px, -30px) scale(.8);
}

.validation {
    color: #f8001b;
}

button {
    width: 9rem;
    height: 3rem;
    text-align: center;
    border: none;
    background-color: #00afea;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Kaushan Script', cursive;
}

button:hover {
    background-color: white;
    color: #00afea;
    border: 1px solid #00afea;
    cursor: pointer;
}

.name {
    display: flex;
    width: auto;
    align-items: center;
    align-content: center;
    margin-bottom: 25px;
}
.sanp{
    color: #00afea;
}
.sanp:hover{
    text-decoration: underline;
    cursor: pointer;
}


@media (max-width:770px) {

    .cadre {
        width: 100%;
        height: auto;
        top: 52%;
    }

    .name {
        flex-direction: column;
        width: auto;
        height: auto;
        margin-bottom:0 !important ;
    }
    .input {
        width: 18rem;
        margin-bottom: 15px;
        margin-right: 0 !important;
    }

    .input1 {
        width: 353px;
    }

    button {
        width: 13rem;
        height:3rem;
    }

    input:not(:placeholder-shown)~label,
    input:focus~label {
        transform: translate(10px, -44px) scale(.8);
    }

}

</style>