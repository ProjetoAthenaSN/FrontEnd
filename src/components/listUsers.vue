<template>


  <div> 
  

<div class="listUsers">
  <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
    <h2>Clientes    </h2>
    <h3>Lista</h3>
    <div class="listas">
<b-table  hover :items="Administrador"></b-table>
    </div>
</div>
  <p>
   <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
   </p>
    </div>
   
</template>

<script>
/*const items = [
  {  Ordem: 1, Serviço: 'Íris', PrimeiroAcesso: '20/08/2018', Meio: 'Facebook' },
  {  Ordem: 2, Serviço: 'Victor', PrimeiroAcesso: '14/08/2018', Meio: 'Telegram'},
  {  Ordem: 3, Serviço: 'Lucas', PrimeiroAcesso: '01/09/2018', Meio: 'Facebook'},
  {  Ordem: 4, Serviço: 'Sidnei', PrimeiroAcesso: '08/09/2018', Meio:'Telegram' }
]
*/
import axios from "axios";
export default {
  data () {
    return {
     // items: items
     Administrador: []
    };
  },
  mounted(){
    return axios({
      method: "get",
      url: "http://localhost:51917/api/administrador"
    })
    .then(response => (this.Administrador = response.data))
    .catch(error => console.log(error))
  }
}
</script>

<style>
#md{
    width: 25em;
    height: 5em;
    margin-left: 35%;
    margin-top: 2%;
}

#form´s{
    width: 22em;
    top: -3em;
    left: 16em;
    position: relative;
    font-size: 1.5em;
    height: 54%;
    border-radius: 11px;
}

#car{
    width: 64em;
    left: 10em;
    top: 3em;
    border-radius: 2em;
}

#btn{
    width: 8em;
    /* height: 2em; */
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    top: -16em;
    left: 37.5em;
    position: relative;
    font-weight: 500;
    text-decoration: none;
}
</style