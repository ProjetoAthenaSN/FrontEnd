<template>
  <div class="formCDA"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
   <h2>Agendamento</h2> 
  <h3>Configuração das regras</h3>

  <b-form>
  <b-form-group>      
  <b-form-select v-model="selected" :options="options" class="mb-3" id="form´s"></b-form-select>
  
  <b-form-select v-model="selected" :options="options1" class="mb-3" id="form´s"></b-form-select>

  <b-form-select v-model="selected" :options="options2" class="mb-3" id="form´s"></b-form-select>

  <b-form-select v-model="selected" :options="options3" class="mb-3" id="form´s"></b-form-select>

  <b-form-select v-model="selected" :options="options4" class="mb-3" id="form´s"></b-form-select>
  </b-form-group>
  </b-form>

   <b-button href="#" variant="primary" id="">Cadastrar</b-button>
    <p>
   <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
   </p>

    </div>
</template>

<script>
/*import "./assets/stylesheets/main.css";*/
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Empresa:' }
      ],
      options1: [
        {value: null, text: 'Categoria'}
      ],
      options2: [
        { value:  null, text: 'Serviço'}
      ],
      options3: [
        { value:  null, text: 'Cancelamento em até'}
      ],
      options4: [
        { value:  null, text: 'Reagendamento em até'}
      ]
    }
  }
}
</script>

<style>
#md{
    width: 25em;
    height: 5em;
    left: 35%;
}



#btn{
    width: 8em;
    left: 14em;
    position: relative;
    font-size: 1.2em;
}

#x{
    width: 5em;
    top: -427px;
    left: 37.5em;
    
    font-weight: 500;
    text-decoration: none;
}		



.card-title{
    font-size: 200%;
}

#bol3{
    width: 2.6%;
    position: relative;
    left: -31%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}
</style>
