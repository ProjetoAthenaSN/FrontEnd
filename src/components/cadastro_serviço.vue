<template>
  <div> 
    <img center id="md" src="./assets/logo.png"/>
    <b-card  bg-variant="light" text-variant="black" title="Serviços" id="car" style="    font-size: 1.2em;">
  <p class="card-text" style="    font-size: 1.5em;">Cadastro</p>
  <b-form-input v-model="text1" type="text" placeholder="Nome:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Descrição:" id="form´s"></b-form-input>
  <b-form-select v-model="selected" :options="options" class="mb-3" id="form´s"></b-form-select>
  <b-button href="#" variant="primary" id="btn">Cadastrar</b-button>
  <button href="!" id="x">X</button>
</b-card>
    </div>
</template>

<script>
import "./assets/stylesheets/main.css";
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
</script>

<style>
#md{
    width: 30em;
    height: 8em;
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
    position: relative;
}	
</style>