<template>
  <div class="logo"> 
    <div class="listaServico">
      <img src="@/assets/imagens/Logo - Sprint 2.png" id= "md   " alt="" style=" width:60%">
        <h2>Serviços</h2>
        <h3>Lista</h3>
      <div class="listas">
        <b-form-select v-model="selected" class="mb-3" @change="buscarCT()">
          <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>
        {{"selecione uma empresa a qual deseja vincular o cadastro"}}

        <b-form-select v-model="selecioneCT" class="mb-3" id="form´s" @change="buscarCT()">
                <option v-for="ct in categoria" :value="ct.id">{{ct.nome}}</option>
                </b-form-select>

          {{"selecione uma categoria da empresa selecionada a qual deseja vincular o cadastro"}}

          <b-table
          v-model="select"
          :value="servico.id"
          hover
          :items="servico"
          :fields="fields"
          @row-clicked="updateSelected(servico)">
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pessoaJuridica: [],
      categoria: [],
      servico: [],
      selected: "",
      select: "",
      item: "",
      fields: [
        { key: "nome", sortable: true, label: "Nome" },
        { key: "descricao", sortable: true, label: "Descrição" }
      ]
    };
  },
  methods: {
    updateSelected(item) {
      this.item = item;
      console.log(item[0].id);
      localStorage.setItem("idPJ", item[0].id);
      this.$router.push("/altPJ");
      // push para outra tela para este id como parametro
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
          // console.log(this.pessoaJuridica);
          // console.info(response.data[0]["cnpj"]);
          //  console.log("---------------"+this.selected);
        })
        .catch(error => console.log(error));
    },
    buscarCT() {
      let idPj = this.selected;
      return axios({
        method: "get",
        // idPJ será o valor do primeiro select
        url:
          "http://localhost:51917/api/categoria/" +
          localStorage.getItem("idAdm") +
          "/" +
          idPj,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
        .then(response => {
          this.categoria = response.data;
          console.log("--------" +this.categoria
          );
        })
        .catch(error => console.log(error));
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
  mounted() {
    this.buscarPJ();
  }
};
</script>

<style>
#md{
    width: 25em;
    height: 5em;
    margin-left: 35%;
    margin-top: 2%;
}

#form´s{
    width: 22em;
    top: -3em;
    left: 16em;
    position: relative;
    font-size: 1.5em;
    height: 54%;
    border-radius: 11px;
}

#car{
    width: 64em;
    left: 10em;
    top: 3em;
    border-radius: 2em;
}

#btn{
    width: 8em;
    /* height: 2em; */
    left: 12em;
    position: relative;
    font-size: 1.2em;
}


#x{
    width: 5em;
    top: -12em;
    left: 15em;
    
}	
</style