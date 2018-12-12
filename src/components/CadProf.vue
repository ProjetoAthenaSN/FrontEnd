<template>
  <div class="formCadProf">
    <p>
      <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
    </p>
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png">
    <h2>Profissionais</h2>
    <h3>Cadastro</h3>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input v-model="nomeCompleto" type="text" placeholder="Nome Completo:" id="form´s"></b-form-input>
        <b-form-input v-model="email" type="text" placeholder="E-mail:" id="form´s"></b-form-input>

        <!--  -->
        {{"selecione uma empresa a qual deseja vincular o cadastro"}}
        <b-form-select class="mb-3" id="form´s" @change.native="myChange" v-model="selecionePJ">
          <option v-for="pj in pessoaJuridica" :key="pj.id" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>
        {{selecionePJ}}
        <b-form-select class="mb-3" id="form´s" @change.native="myChangeCT" v-model="selecioneCT">
          <option v-for="ct in categoria" :key="ct.id" :value="ct.id">{{ct.nome}}</option>
        </b-form-select>
        {{"selecione uma categoria da empresa selecionada a qual deseja vincular o cadastro"}}
        <b-form-select v-model="selecioneSV" class="mb-3" id="form´s" @change="buscarSV()">
          <option v-for="sv in servico" :value="sv.id">{{sv.nome}}</option>
        </b-form-select>

        <b-button type="submit" variant="primary" id>Cadastrar</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
/*import "./assets/stylesheets/main.css";*/
export default {
  name: "Profissionais",
  data() {
    return {
      selecionePJ: "",
      selecioneCT: "",
      selecioneSV: "",
      nomeCompleto: "",
      email: "",
      pessoaJuridica: [],
      categoria: [],
      servico: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return axios({
        method: "post",
        url:
          "http://localhost:51917/api/profissional/" +
          localStorage.getItem("idAdm") +
          "/" +
          this.selecioneSV,
        data: {
          nomeCompleto: this.nomeCompleto,
          email: this.email
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));
    },
    myChange(evt) {
      let val = evt.target.value;
      console.log(val);
      return axios({
        method: "get",
        url:
          "http://localhost:51917/api/categoria/" +
          localStorage.getItem("idAdm") +
          "/" +
          val,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          this.categoria = response.data;
        })
        .catch(error => console.log(error));
    },
    myChangeCT(evt) {
      let val = evt.target.value;
      return axios({
        method: "get",
        url:
          "http://localhost:51917/api/servico/" +
          localStorage.getItem("idAdm") +
          "/" +
          val,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          this.servico = response.data;
        })
        .catch(error => console.log(error));
    },
    buscarPJ() {
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
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.buscarPJ();
  }
};
</script>

<style>
#md {
  width: 25em;
  height: 5em;
  left: 35%;
}

#btn {
  width: 7em;
  left: 42em;
  position: relative;
  font-size: 1.2em;
}

#x {
  width: 5em;
  margin-top: -20em;
  margin-left: 20em;

  font-weight: 500;
  text-decoration: none;
}

#exit {
  left: 96%;
  width: 4%;
  top: 0%;
  position: absolute;
}

.card-title {
  font-size: 200%;
}

#bol3 {
  width: 2.6%;
  position: relative;
  left: -15%;
}

p {
  left: 5%;
  position: relative;
  font-size: 1.5em;
}
</style>