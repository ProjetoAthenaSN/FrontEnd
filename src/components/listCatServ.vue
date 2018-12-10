<template>
  <div>
    <div class="listaServico">
      <img src="@/assets/imagens/Logo - Sprint 2.png" id="logo" alt style=" width:60%">
      <h2>Categoria de Serviços</h2>
      <h3>Lista</h3>
      <div class="listas">
        <b-form-select v-model="selected" class="mb-3" @change="buscarCT()">
          <option v-for="pj in pessoaJuridica" :value="pj.id">{{pj.nomeFantasia}}</option>
        </b-form-select>
      {{"selecione uma empresa a qual deseja vincular"}}
        <b-table
          v-model="select"
          :value="categoria.id"
          hover
          :items="categoria"
          :fields="fields"
          @row-clicked="updateSelected(categoria)">
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
      localStorage.setItem("idCat", item[0].id);
      this.$router.push("/altCat");
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
          console.log(
            "--------------------------------------------------------------" +
              this.categoria
          );
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.buscarPJ();
    //   this.buscarCT();
    // return axios({
    //         method: "get",
    //         url:"http://localhost:51917/api/categoria/" + localStorage.getItem("idAdm") + "/" + this.selected,
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //         }
    //     }).then(response =>{
    //         this.pessoaJuridica = response.data;
    //         console.log(this.pessoaJuridica);
    //     }).catch(error => console.log(error));
  }
};
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
  top: -12em;
  left: 15em;
}
</style