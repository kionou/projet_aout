<template>
   <div class="container">
        <div class="content">
            <h2>QU'EST CE LE CARNET ELECTRONIQUE</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sit voluptatum exercitationem pariatur culpa quos maiores laborum, cum magnam facere et tenetur porro laboriosam. Ad provident inventore sequi cupiditate ipsam, eveniet voluptatem pariatur voluptates facilis! Nisi quasi, beatae aut non quaerat obcaecati quam facilis deleniti repellat veritatis recusandae tempore exercitationem ullam quidem ab? Explicabo, libero accusamus a amet magnam eius qui quia dolor aliquam excepturi molestias eligendi nesciunt itaque architecto ut iure nam odio atque sunt. Minus vitae culpa adipisci? Deserunt fugit explicabo accusamus itaque facere libero similique provident inventore obcaecati vitae mollitia tenetur illo architecto autem, culpa officia atque magnam.
            </p>
            
        </div>
        <div class="content">
            <h2>COMMENT FONCTIONNE LE CARNET ELECTRONIQUE</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Sit voluptatum exercitationem pariatur culpa quos maiores laborum, cum magnam facere et tenetur porro laboriosam. Ad provident inventore sequi cupiditate ipsam, eveniet voluptatem pariatur voluptates facilis! Nisi quasi, beatae aut non quaerat obcaecati quam facilis deleniti repellat veritatis recusandae tempore exercitationem ullam quidem ab? Explicabo, libero accusamus a amet magnam eius qui quia dolor aliquam excepturi molestias eligendi nesciunt itaque architecto ut iure nam odio atque sunt. Minus vitae culpa adipisci? Deserunt fugit explicabo accusamus itaque facere libero similique provident inventore obcaecati vitae mollitia tenetur illo architecto autem, culpa officia atque magnam.
            </p>
            
        </div>
    </div>

  
</template>

<script>
export default{
  name:'ComponentAbout',
 
}
  
</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.container{
  background-color: rgb(219, 228, 225);
    border: 1px solid red;
    width: 100%;
    height: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   
}

.content{
    /* border: 1px solid blue; */
    max-width: 700px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 10px 65px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
    margin-bottom: 30px;
}
.content h2{
    margin-bottom: 20px;
}
.content p{
    font-size: 18px;
    padding-left: 25px;
    line-height: 34px; ;
}
  
</style>
