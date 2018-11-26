<template>


  <div class="logo"> 
  

<div class="listaServico">
  <img src="@/assets/imagens/Logo - Sprint 2.png" id= "md   " alt="" style=" width:60%">
    <h2>Serviços</h2>
    <h3>Lista</h3>
  <div class="listas">    
  <b-table  hover :items="items"></b-table>
  </div>
</div>
    </div>
    
</template>

<>
import "./assets/css/main.css";
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Empresa:' }
      ]
    }
  }
}
</>

<script>
const items = [
  {  Ordem: 1, Serviço: 'Manicure', Descrição: 'Cortar, pintar e tratar as unhas das mãos e pés' },
  {  Ordem: 2, Serviço: 'Corte de Cabelo', Descrição: 'Corte de cabelo Feminino e masculino' },
  {  Ordem: 3, Serviço: 'Barba', Descrição: 'Cortar e estilizar barba' },
  {  Ordem: 4, Serviço: 'Pintar cabelo', Descrição: 'Dscolorir e Pintar os cabelos' },
  
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
    top: -12em;
    left: 15em;
    
}	
</style