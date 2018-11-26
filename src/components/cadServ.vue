<template>
  <div class="formCadServ"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
   <h2>Serviços</h2> 
  <h3>Cadastro</h3>
  <b-form @submit="onSubmit" @reset="onReset">
  <b-form-group>
  <b-form-input v-model="nome" type="text" placeholder="Nome:" id="form´s"></b-form-input>
  <b-form-input v-model="descricao" type="text" placeholder="Descrição:" id="form´s"></b-form-input>
  <b-form-select v-model="selected" class="mb-3">
          <option v-for="pj in pessoaJuridica" v-bind:value="pj.value">{{pj.nomeFantasia}}</option>
        </b-form-select>

    <b-form-select v-model="selected" class="mb-3">
          <option v-for="cat in categoria" v-bind:value="cat.value">{{cat.nome}}</option>
        </b-form-select>
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
  name: 'Servico',
  data () {
    return {
      selected: "",
      pessoaJuridica: [],
      categoria: [],
      nome: "",
      descricao: ""
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return axios({
        method: "post",
        url: "http://localhost:51917/api/servico/" + this.idAdm,
        data: {
          nome: this.nome,
          descricao: this.descricao
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
    }
  },
  mounted() {
    return axios({
      method: "get",
      url:
        "http://localhost:51917/api/pessoaJuridica/" +
        localStorage.getItem("idAdm"),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(response => {
        this.pessoaJuridica = response.data;
        console.log(this.pessoaJuridica);
        console.info(response.data[0]["cnpj"]);
      })
      .catch(error => console.log(error));



    return axios({
        method: "get",
        url: "http://localhost:51917/api/categoria/",
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }).then(response => {
        this.pessoaJuridica = response.data;
        console.log(this.pessoaJuridica);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
#md{
    width: 30em;
    height: 8em;
    left: 35%;
}



#btn{
    width: 7em;
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    top: -266px;
    left: 36.8em;
    
    font-weight: 500;
    text-decoration: none;
}	

.card-title {
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