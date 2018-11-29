<template>
  <div class="hello">
    <router-view/>
     <div class="formCadServico">
       <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
       <h2>Categoria de Serviço</h2>
       <h3>Cadastro</h3>
      <b-form @submit="onSubmit" method="post">
      <b-form-group id="exampleInputGroup2"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="nome"
                      required
                      placeholder="Nome">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup1"
                    
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="descricao"
                      required
                      placeholder="Descrição">
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select v-model="selected" class="mb-3" placeholder="hsddvkvjhnb:">
          <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>
       <!-- :options="pessoaJuridica" -->
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      </b-form>
      </div>
      
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "cadCatServ",
  data() {
    return {
      selected: "",
      pessoaJuridica: [],
      nome: "",
      descricao: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
     
      return axios({
        method: "post",
        url: "http://localhost:51917/api/categoria/" + localStorage.getItem("idAdm") + "/" + this.selected,
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
    })
      .then(response => {
        this.pessoaJuridica = response.data;
        console.log(this.pessoaJuridica);
        console.info(response.data[0]["cnpj"]);
         console.log("---------------"+selected);
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
