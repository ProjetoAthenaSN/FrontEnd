<template>
  <div class="FormCadEmp"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
  <h2>Empresas</h2>  
  <h3>Cadastro</h3>
  <b-form @submit="onSubmit" @reset="onReset">
  <b-form-group>
  <b-form-input v-model="nomeFantasia" type="text" placeholder="Nome empresarial:" id="form´s"></b-form-input>
  <b-form-input v-model="cnpj" type="text" placeholder="CPF/CNPJ:" id="form´s"></b-form-input>
  <b-form-input v-model="text1" type="text" placeholder="Descrição:" id="form´s"></b-form-input>
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
  name: 'Empresa'
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
    /* height: 2em; */
    left: 36em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
        top: -290px;
    left: 37.8em;

    
    font-weight: 500;
    text-decoration: none;
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