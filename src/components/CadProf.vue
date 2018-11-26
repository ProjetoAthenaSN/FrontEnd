<template>
  <div class="formCadProf"> 
      <p>
        <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
    </p>
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
   <h2>Profissionais</h2> 
  <h3>Cadastro</h3>
  <b-form @submit="onSubmit" @reset="onReset">
  <b-form-group>
  <b-form-input v-model="text1" type="text" placeholder="Nome:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Sobrenome:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Cpf:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Cargo:" id="form´s"></b-form-input>
  <b-form-select v-model="selected" :options="options" class="mb-3" id="form´s"></b-form-select>
  </b-form-group>
  </b-form>

   <b-button href="#" type="submit" variant="primary" id="">Cadastrar</b-button>

    



    </div>
</template>

<script>
/*import "./assets/stylesheets/main.css";*/
export default {
  name: 'Profissionais',
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
    width: 25em;
    height: 5em;
    left: 35%;
}





#btn{
    width: 7em;
    left: 42em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    margin-top: -20em;
    margin-left: 20em;
    
    font-weight: 500;
    text-decoration: none;
}	

#exit{
    left: 96%;
    width: 4%;
    top: 0%;
    position: absolute;
}

.card-title{
    font-size: 200%;
}

#bol3{
    width: 2.6%;
    position: relative;
    left: -15%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}


</style>