<template>
    <div class="listaServico"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
    <h2>Profissionais</h2>
    <h3>Lista</h3>
    <div class="listas">
    <b-table  hover :items="items"></b-table>
    </div>
     <p>
   <router-link v-bind:to="{ name: 'Home' }" class="card-text" id="x">X</router-link>
   </p>
    </div>
</template>

<script>
const items = [
  {  Nome: 'Lucas Silveira', Empresa: 'Senai', Cargo: 'Professor' },
  {  Nome: 'Victor Ravazio', Empresa: 'Senai', Cargo: 'Programador' },
]

export default {
  data () {
    return {
      items: items
    }
  }
}
</script>

<style>

#md {
    width: 25em;
    height: 5em;
    margin-top: 2%;
}



#btn{
    width: 8em;
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
        top: -10.5em;
    left: 35.5em;
    position: relative;
}


.card-title {
    font-size: 200%;
}

#car{
    width: 62em;
    left: 13em;
    top: 11em;
    border-radius: 2em;
    border-color: #17a2b8!important;
}

#bol3{
    width: 2.6%;
    position: relative;
        left: -10%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}


</style>