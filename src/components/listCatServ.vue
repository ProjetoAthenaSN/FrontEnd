<template>


  <div> 
  

<div class="listaServico">
    <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
    <h2>Categoria de Serviços</h2>
    <h3>Lista</h3>
    <div class="listas">
<b-table  hover :items="items"></b-table>
    </div>
</div>
    </div>
    
</template>



<script>
const items = [
  {  Ordem: 1, Serviço: 'Estética', Descrição: 'Serviços destinado ao visual facial e corporal' },
  {  Ordem: 2, Serviço: 'Alimentação', Descrição: 'Serviço destinado à distribuiçao e fabricação de alimentos' },
  {  Ordem: 3, Serviço: 'Saúde', Descrição: 'Consultas médicas e dentárias' },
  {  Ordem: 4, Serviço: 'Educação', Descrição: 'Ensino Domiciliar com professores particulares' }
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