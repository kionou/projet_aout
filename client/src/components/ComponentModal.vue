<template>
  <div class="modal-container" v-if="revele" @click="submit">
   
    <div class="modal">
        <div class="btn-close"></div>
        <div class="image">
            <img src="../assets/clipart1725690.png" alt="">
        </div>
        
        <p>Nous vous avions envoye un message jde confirmation sur votre compte  veillez vous connectez vous finalisez vous inscription merci!</p>
    </div>
  </div>
</template>

<script>
export default {
    name:"ComponentModal",
    props:['revele','submit']

}
</script>

<style scoped lang="css">
/* .bloc-modale{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}



.modale{
    color: #333;
    background: #f1f1f1;
    padding: 50px;
    position: fixed;
} */
.modal-container {
    display: block;
    /* justify-content: center;
    align-items: center; */
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    /* transform: scale(0); */
    z-index: 20;
    opacity: 1;
}

.modal-container .modal {
    height: 238px;
    max-width: 450px;
    width: 98%;
    margin: 0 10px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(15, 142, 240);
}
.image{
    /* border: 1px solid red; */
    width: 100px;
    height: 100px;
}
.image img{
    width: 100%;
    height: 100%;
}


.modal-container .modal p {
    font-size: 19px;
    margin-top: 10px;
    
}

</style>