<template>
  <div class="hello">
    <router-view/>
     <div class="formCadAdm">
       <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
       <h2>Cadastro de Administrador</h2>
       <h3>Cadastro</h3><!--@reset="onReset"-->
      <b-form @submit="onSubmit" method="post">
        <b-form-group id="exampleInputGroup2"
                      label-for="exampleInput2">
          <b-form-input type="text"
                        v-model="NomeCompleto"
                        required
                        placeholder="Nome">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1">
          <b-form-input type="email"
                        v-model="email"
                        required
                        placeholder="Email">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1">
          <b-form-input type="password"
                        v-model="senha"
                        required
                        placeholder="Senha">
          </b-form-input>
        </b-form-group>
        <b-nav fill tabs id="navegationAdm">
              <b-nav-item><router-link v-bind:to="{ name: 'login' }" class="card-text" id="links">Login
            </router-link></b-nav-item>
              <b-nav-item> <router-link v-bind:to="{ name: 'cadAdm' }" class="card-text" id="links">Cadastrar
            </router-link></b-nav-item>
            </b-nav>

        <b-button-group size="sm">
                  <b-button id="cadastrar" type="submit" v-for="btn in buttons" :pressed.sync="btn.state" :variant="btn.variant" :key="btn.variant" @click="login">
                    {{ btn.caption }}
                  </b-button>
                </b-button-group>
      </b-form>
      </div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cadAdm",
  data() {
    return {
      NomeCompleto: "",
      email: "",
      senha: "",
       myToggle: false,
      buttons: [
        { variant: 'outline-primary', caption: 'Cadastrar', state: false }
      ]
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert("Administrador Cadastrado!");
      return axios({
        method: "post",
        url: "http://localhost:51917/api/administrador",
        //url: "http://athenasapi.azurewebsites.net/api/administrador",
        data: {
          NomeCompleto: this.NomeCompleto,
          Email: this.email,
          Senha: this.senha
        },
       login(){
        axios({
       url: "http://localhost:51917/api/token",
       //url: "https://athenasapi.azurewebsites.net/api/token",
       method: "POST",
       data: {
         Email: this.email,
         Senha: this.password
       }
     })
      .then(response =>{
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token)
        this.$router.push("/menu");
      })
      .catch(err => {
        this.erro = 'E-mail ou senha inválidos';
        });
       },

      }).then((response) => {
        console.info(response.data);
       this.$router.push('/cadPessoaJud');
      }).catch(err => {
        this.erro = 'Dados incorretos';
      });
      
      
    }
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
