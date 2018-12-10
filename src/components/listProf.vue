<template>
    <div class="listaServico"> 
        <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
        <h2>Profissionais</h2>
        <h3>Lista</h3>
        <div class="listas">
            <b-form-select v-model="selecionePJ" class="mb-3" id="form´s" @change="buscarCT()">
                <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
            </b-form-select>
                       {{"selecione uma empresa a qual deseja vincular o cadastro"}}

            <b-form-select v-model="selecioneCT" class="mb-3" id="form´s" @change="buscarCT()">
                <option v-for="ct in categoria" :value="ct.id">{{ct.nome}}</option>
            </b-form-select>
                        {{"selecione uma categoria da empresa selecionada a qual deseja vincular o cadastro"}}

            <b-form-select v-model="selecioneSV" class="mb-3" id="form´s" @change="buscarSV()">
                <option v-for="sv in servico" :value="sv.id">{{sv.nome}}</option>
            </b-form-select>
                        {{selecioneSV}}
            <b-table v-model="select" :value="servico.id" hover
                :items="servico" :fields="fields" @row-clicked="updateSelected(servico)">
            </b-table>
            
        </div>
        <p>
            <router-link v-bind:to="{ name: 'Home' }" class="card-text" id="x">X</router-link>
        </p>
    </div>
</template>

<script>
import axios from "axios"
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
              url:"http://localhost:51917/api/profissional/" + localStorage.getItem("idAdm") + "/" + this.selecioneSV,
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
};
</script>

<style>

#md {
    width: 25em;
    height: 5em;
    margin-top: 2%;
}



#btn{
    width: 8em;
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
        top: -10.5em;
    left: 35.5em;
    position: relative;
}


.card-title {
    font-size: 200%;
}

#car{
    width: 62em;
    left: 13em;
    top: 11em;
    border-radius: 2em;
    border-color: #17a2b8!important;
}

#bol3{
    width: 2.6%;
    position: relative;
        left: -10%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}


</style>