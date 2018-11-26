<template>
  <div class="formCDA"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
    <h2>Agendamentos</h2>
  <h3>Configuração dos dias</h3>
  <b-form>
  <b-form-group>
  <b-form-select v-model="selected" :options="options" class="mb-3" id="form´s"></b-form-select>
  
  <b-form-select v-model="selected" :options="options1" class="mb-3" id="form´s"></b-form-select>

  <b-form-select v-model="selected" :options="options2" class="mb-3" id="form´s"></b-form-select>

  <b-breadcrumb :items="items" id="links"/>
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
      items: [{
        text: 'Dom',
        disabled: false
      },
      {
        text: 'Seg',
        disabled: false
      },
      {
        text: 'Ter',
        disabled: false
      },
      {
        text: 'Qua',
        disabled: false
      },
      {
        text: 'Qui',
        disabled: false
      },
      {
        text: 'Sex',
        disabled: false
      },
      {
        text: 'Sab',
        disabled: false
      },
      {
        text: '',
        disabled: true
      }]
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
    width: 7em;
    top: -52px;
    left: 41em;
    position: relative;
    font-size: 1.2em;
}

#x{
    width: 5em;
 top: -409px;
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
    left: -29%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}
</style>

