<template>
  <div class="formCDA"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png" style="width= 60%">
    <h2>Agendamentos</h2>
  <h3>Configuração dos dias</h3>
  <b-form>
    <b-form-group>
       {{"selecione uma empresa a qual deseja vincular o cadastro"}}
       <b-form-select v-model="selecionePJ" class="mb-3" id="form´s" @change="buscarCT()">
       <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>

        {{"selecione uma categoria da empresa selecionada a qual deseja vincular o cadastro"}}
        <b-form-select v-model="selecioneCT" class="mb-3" id="form´s" @change="buscarCT()">
        <option v-for="ct in categoria" :value="ct.id">{{ct.nome}}</option>
        </b-form-select>

        {{"Selecione um serviço da empresa selecionada a qual deseja vincular"}}
         <b-form-select v-model="selecioneSV" class="mb-3" id="form´s" @change="buscarSV()">
         <option v-for="sv in servico" :value="sv.id">{{sv.nome}}</option>
        </b-form-select>

        {{"selecione um funcionario da empresa selecionada a qual deseja vincular"}}
         <b-form-select v-model="selecionePF" class="mb-3" id="form's" @change="buscarPF()">
        <option v-for="pf in profissionais" :value="pf.id">{{pf.nome}}</option>                
        </b-form-select>    

      <b-breadcrumb :items="items" id="links"/>
    </b-form-group>
  </b-form>
   <b-button href="#" variant="primary" id="">Cadastrar</b-button>
  

    </div>
</template>

<script>
import axios from "axios"
/*import "./assets/stylesheets/main.css";*/
export default {
  data () {
    return {
       selecionePJ:"",
        selecioneCT:"",
        selecioneSV:"",
        selelecionePF:"",
      pessoaJuridica:[],
      categoria:[],
      servico:[],
      profissionais:[],
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
    };
  },
   methods:{
      onSubmit(evt){
          evt.preventDefault();

          return axios({
              method: "post",
              url:"http://localhost:51917/api/profissional/" + localStorage.getItem("idAdm") + "/" + this.selected3,
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
        buscarSV(){
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

