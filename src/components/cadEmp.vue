<template >
  <div class="formCadProf"> 
      
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png" width="100em" height="50em"/>
   <h2>Pessoa Juridica</h2> 
    <h3>Cadastro</h3>
    <b-form @submit="onSubmit" method="post">
      <div class="listas">
      <b-form-group>
          <b-form-input v-model="buscarCnpj" type="text" placeholder="CNPJ:" id="form´s"></b-form-input>
          <div class="col-md-5">
                 <b-button @click="fetchCnpj" class="btncnpj"> Validar</b-button>
                </div>
        
          <b-form-input v-model="nomeFantasia" type="text" placeholder="Nome Fantasia:" id="form´s"></b-form-input>
          
          <label  for="appt-time">Horario de Abertura:</label>
              <input v-model="horarioInicial" type="time" id="appt-time" name="appt-time"
                    min="9:00" max="18:00" required />
                    <label for="appt-time">Horario Termino:</label>
              <input  v-model="horarioFinal" type="time" id="appt-time" name="appt-time"
                    min="9:00" max="18:00" required />
            <div class="form-row">
            <div class="form-group col-md-5">
                <b-form-input type="text" v-model="buscarCep" placeholder="CEP:" id="form´s"></b-form-input>
                <div class="col-md-5">
                 <b-button @click="fetchCep" class="btncep">Buscar</b-button>
                </div>
                <template v-if="erro != null">{{erro}}</template>

              </div>
            </div>  
            <div class="form-row">
              <div class="form-group col-md-5">
                <b-form-input type="text" v-model="endereco.logradouro" placeholder="Logradouro:"  id="form´s"></b-form-input>
              </div>
              <div class="form-group col-md-5">
                <b-form-input type="text" v-model="endereco.numero" placeholder="Número:" id="form´s"></b-form-input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-5">
            <b-form-input type="text" v-model="endereco.complemento" placeholder="Complemento:" id="form´s"></b-form-input>
              </div>              
              <div class="form-group col-md-5">
                <b-form-input type="text" v-model="endereco.bairro" placeholder="Bairro:" id="form´s"></b-form-input>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-5"> 
                <b-form-input type="text" v-model="endereco.localidade" placeholder="Cidade:" id="form´s"></b-form-input>
              </div>
              <div class="form-group col-md-5">
                <b-form-input type="text" v-model="endereco.uf" placeholder="UF:" id="form´s"></b-form-input>
              </div>
            </div>  

          <b-form-select  :required="true" v-model="tiposJuridico">
            <option :selected="true">Selecione uma opção</option>
            <option v-for="option in options" v-bind:value="option.value">
                  {{ option.text }}
              </option>
          </b-form-select>
    
        </b-form-group>
      </div>

    <b-button type="submit" variant="primary">Cadastrar</b-button>
    
    </b-form>
    
  </div> 
  
</template>


<script>
import axios from "axios";
export default {
  name: "cadPessoaJud",
  data() {
    return {
      cnpj: "",
      nomeFantasia: "",
      horarioInicial: "",
      horarioFinal: "",
      buscarCnpj:"",
      buscarCep: "",
      endereco: {
        cep: "",
        bairro: "",
        localidade: "",
        uf: "",
        logradouro: "",
        numero: "",
        complemento: ""
      },
      tiposJuridico: "Selecione uma opção",
      options: [
        {
          text: "Empresa",
          value: "0"
        },
        {
          text: "Móvel",
          value: "1"
        },
        {
          text: "Fixo",
          value: "2"
        }
      ]
    };
  },
  created() {
    //alert("Pessoa Juridica Cadastrada!")
  },
  methods: {
    onSubmit(evt) {
      console.log("ei");
      evt.preventDefault();

      return axios({
        method: "post",
        url:
          "https://athenasapi.azurewebsites.net/api/pessoaJuridica/" +
          localStorage.getItem("idAdm"),
          url: "https://athenasapi.azurewebsites.net/api/token",
        data: {
          cnpj: this.cnpj,
          nomeFantasia: this.nomeFantasia,
          horarioInicial: this.horarioInicial,
          horarioFinal: this.horarioFinal,
          endereco: [
            {
              cep: this.endereco.cep,
              bairro: this.endereco.bairro,
              cidade: this.endereco.localidade,
              uf: this.endereco.uf,
              logradouro: this.endereco.logradouro,
              numero: this.endereco.numero,
              complemento: this.endereco.complemento
            }
          ],
          tiposJuridico: this.tiposJuridico
        },
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
          ,'Content-Type' : 'application/json'
          ,'Access-Control-Allow-Origin' : '*'
        }
      })
        .then(response =>{
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token)
        .then(res => this.$router.push("/menu"))
        })
        .catch(err => console.log(err));
    },
    
fetchCep(){
      return axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://viacep.com.br/ws/'+this.buscarCep+'/json/'
      })
      .then(response => {
          this.endereco.logradouro= response.data.logradouro;
          this.endereco.bairro= response.data.bairro;
          this.endereco.localidade= response.data.localidade;
          this.endereco.uf= response.data.uf;
          console.log(this.cep);
          console.log(response.data);
        })
        .catch(error => {
          console.log(
            "você errou aqui: " + error + " ó " + error.response.data
          );
          // jogar para um span - um warning de erro
         
        });

    },
    fetchCnpj(){
      return axios ({
        method: 'get',
        url: 'https://www.receitaws.com.br/v1/cnpj/' + this.buscarCnpj,
      }).then(response => {
        
      }).catch(error =>{
      })
    },
  }
};
 function parseJwt(token){
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
</script>



<style>
#md {
  width: 25em;
  height: 5em;
  margin-left: 35%;
  margin-top: 2%;
}

#form´s {
  width: 22em;
  top: -3em;
  left: 16em;
  position: relative;
  font-size: 1.5em;
  height: 54%;
  border-radius: 11px;
}

#car {
  width: 64em;
  left: 10em;
  top: 3em;
  border-radius: 2em;
}

#btn {
  width: 8em;
  /* height: 2em; */
  left: 12em;
  position: relative;
  font-size: 1.2em;
}

#x {
  width: 5em;
  top: -16em;
  left: 37.5em;
  position: relative;
  font-weight: 500;
  text-decoration: none;
}
</style