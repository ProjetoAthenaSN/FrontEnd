<template>
  <div class="formCadProf">
    <p>
      <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
    </p>
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png">
    <h2>Profissionais</h2>
    <h3>Cadastro</h3>
    <b-form @submit="onSubmit" >
      <b-form-group>
        <b-form-input v-model="nomeCompleto" type="text" placeholder="Nome Completo:" id="form´s"></b-form-input>
        <b-form-input v-model="email" type="text" placeholder="E-mail:" id="form´s"></b-form-input>

        <!--  -->
        <b-form-select v-model="selecionePJ" class="mb-3" id="form´s" @change="buscarCT()">
          <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>
        {{"idPj      "+selecionePJ}}

        <b-form-select v-model="selecioneCT" class="mb-3" id="form´s" @change="buscarCT()">
          <option v-for="ct in categoria" :value="ct.id">{{ct.nome}}</option>
        </b-form-select>
        {{selecioneCT}}

        <b-form-select v-model="selecioneSV" class="mb-3" id="form´s" @change="buscarCT()">
          <option v-for="sv in servico" :value="sv.id">{{sv.nome}}</option>
        </b-form-select>
        {{selecioneSV}}
      </b-form-group>
    </b-form>

    <b-button href="#" type="submit" variant="primary" id>Cadastrar</b-button>
  </div>
</template>

<script>



import axios from "axios"
/*import "./assets/stylesheets/main.css";*/
export default {
  name: 'Profissionais',
  data () {
    return {
        selecionePJ:"",
        selecioneCT:"",
        selecioneSV:"",
        nomeCompleto: "",
        email: "",
      pessoaJuridica:[],
      categoria:[],
      servico:[]
    };
  },
  methods:{
      onSubmit(evt){
          evt.preventDefault();

          return axios({
              method: "post",
              url:"http://localhost:51917/api/profissional/" + localStorage.getItem("idAdm") + "/" + this.servico,
              data: {
                  nomeCompleto: this.nomeCompleto,
                  email: this.email
              }
            }).then;
        },
        buscarPJ(){
            return axios({
                method: "get",
                url:"http://localhost:51917/api/pessoaJuridica/" + localStorage.getItem("idAdm"),
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then(response =>{
                this.pessoaJuridica = response.data;
                console.log(this.pessoaJuridica);
            }).catch(error => console.log(error));
        },
        buscarCT(){
            let idPj = this.selecionePJ;
             return axios({
                 method: "get",
            // idPJ será o valor do primeiro select
                 url:"http://localhost:51917/api/categoria/" + localStorage.getItem("idAdm") +  "/" + idPj,
                 headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
             }).then(response =>{
                 this.categoria = response.data;
                 console.log("--------------------------------------------------------------" +this.categoria);
             }).catch(error => console.log(error));
        },
        buscarServ(){
            let idct = this.selecioneCT;
            return axios({
                 method:"get",
                  url:"http://localhost:51917/api/servico/" + localStorage.getItem("idAdm") + "/" + idct,
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then(response =>{
                 this.servico = response.data;
                console.log(this.servico);
            }).catch(error => console.log(error));
        }
    },
    mounted(){
        this.buscarPJ();
        this.buscarCT();
        this.buscarSV();
        
    }
};
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