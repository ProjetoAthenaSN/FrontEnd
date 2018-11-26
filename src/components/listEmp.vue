<template>
    <div class="listaServico"> 
    <img center id="md" src="@/assets/imagens/LOGO-oficial.png"/>
  <h2>Empresas</h2>  
  <h3>Lista</h3>
   <div class="listas" method="getd">
      <b-table   hover :items="pessoaJuridica" :fields="fields" @click="updateSelected(fields)"></b-table>
   </div>
  
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pessoaJuridica: [],
      fields: [
        { key: "nomeFantasia", sortable: true, label: "Nome Fantasia" },
        { key: "endereco", sortable: true, label: "Endereço" },
        { key: "horarioInicial", sortable: true, label: "Horário Inicial" },
        { key: "horarioFinal", sortable: true, label: "Horário Final" }
      ],
    };
  },
  methods: {
   updateSelected (selectedItem) {
        this.selectedField = selectedItem;
        this.showPlaces = true;
     }
  },
  mounted() {
    return axios({
      method: "get",
      url:
        "http://athenasapi.azurewebsites.net/api/pessoaJuridica/" +
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
  },
}
</script>

<style>
#md {
  width: 25em;
  height: 5em;
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
  left: 12em;
  position: relative;
  font-size: 1.2em;
}

#x {
  width: 5em;
  top: -12em;
  left: 15em;
  position: relative;
}

#bol3 {
  width: 2.6%;
  position: relative;
  left: -11%;
}

p {
  left: 5%;
  position: relative;
  font-size: 1.5em;
}

.card-title {
  font-size: 200%;
}

#car {
  width: 62em;
  left: 13em;
  top: 11em;
  border-radius: 2em;
  border-color: #17a2b8 !important;
}
</style>