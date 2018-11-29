<template>
  <div class="formCDA"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
   <h2>Agendamento</h2> 
  <h3>Configuração das regras</h3>

  <b-form>
    <b-form-group>      
        <b-form-select v-model="pessoaJuridica" class="mb-3" id="form´s">
          <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>  

        <!--<b-form-select v-model="selected2" class="mb-3" id="form´s">
          <option v-for="ct in categoria" :value="ct.id">{{ct.Nome}}</option>
        </b-form-select>

        <b-form-select v-model="selected3" class="mb-3" id="form´s">
          <option v-for="sv in Serviço" :value="sv.id">{{sv.nome}}</option>
        </b-form-select>-->
      <b-form-select v-model="selected" :options="options3" class="mb-3" id="form´s"></b-form-select>

      <b-form-select v-model="selected" :options="options4" class="mb-3" id="form´s"></b-form-select>
    </b-form-group>
  </b-form>

   <b-button href="#" variant="primary" id="">Cadastrar</b-button>
    <p>
   <router-link v-bind:to="{ name: 'menu' }" class="card-text" id="x">X</router-link>
   </p>

    </div>
</template>

<script>
import axios from "axios";

/*import "./assets/stylesheets/main.css";*/
export default {
  data () {
    return {
      selected: "",
      pessoaJuridica:[],
      categoria:[],
      servico:[],
      options3: [
        { value:  null, text: 'Cancelamento em até'}
      ],
      options4: [
        { value:  null, text: 'Reagendamento em até'}
      ]
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
                url:"http://localhost:51917/api/pessoaJuridica/" + localStorage.getItem("idAdm")
            }).then(response =>{
                this.pessoaJuridica = response.data;
                console.log(this.pessoaJuridica);
            }).catch(error => console.log(error));
        },
        buscarCat(){
            return axios({
                method: "get",
                url:"http://localhost:51917/api/categoria/" + localStorage.getItem("idAdm")
            }).then(response =>{
                this.categoria = response.data;
                console.log(this.categoria);
            }).catch(error => console.log(error));
        },
        buscarServ(){
            return axios({
                 method:"get",
                  url:"http://localhost:51917/api/servico/" + localStorage.getItem("idAdm")
            }).then(response =>{
                 this.servico = response.data;
                console.log(this.servico);
            }).catch(error => console.log(error));
        }
    },
    mounted(){
        this.buscarPJ();
        this.buscarCat();
        this.buscarServ();
        
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
    width: 8em;
    left: 14em;
    position: relative;
    font-size: 1.2em;
}

#x{
    width: 5em;
    top: -427px;
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
    left: -31%;
}

p{
        left: 5%;
    position: relative;
    font-size: 1.5em;
}
</style>
