<template>

<div> 
  
    <b-card-group deck id="alig">
    <b-card border-variant="info"
            header="Empresas / Parceiros"
            align="center" id="cards">
            <router-link v-bind:to="{ name: 'cadPessoaJud' }" class="card-text" id="links">Cadastro
                <img center id="bol1" src="@/assets/imagens/bol.png"/>
            </router-link>
            <br/>
            <router-link v-bind:to="{ name: 'listEmp' }" class="card-text" id="links">Listagem
                <img center id="bol2" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>

    <b-card border-variant="info"
            header="Categorias de serviço"
            align="center" id="cards">
            <router-link v-bind:to="{ name: 'cadCatServ' }" class="card-text" id="links">Cadastro
                <img center id="bol1" src="@/assets/imagens/bol.png"/>
            </router-link>
            <br/>
            <router-link v-bind:to="{ name: 'listCatServ' }" class="card-text" id="links">Listagem
                <img center id="bol2" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>

    <b-card border-variant="info"
            header="Serviços"
            align="center" id="cards">
            <router-link v-bind:to="{ name: 'cadServ' }" class="card-text" id="links">Cadastro
                <img center id="bol1" src="@/assets/imagens/bol.png"/>
            </router-link>
            <br/>
            <router-link v-bind:to="{ name: 'listagemServiço' }" class="card-text" id="links">Listagem
                <img center id="bol2" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>

    </b-card-group>

    <b-card-group deck id="alig2">
    <b-card border-variant="info"
            header="Profissionais"
            align="center" id="cards2">
            <router-link v-bind:to="{ name: 'cadProf' }" class="card-text" id="links">Cadastro
                <img center id="bol1" src="@/assets/imagens/bol.png"/>
            </router-link>
            <br/>
            <router-link v-bind:to="{ name: 'listProf' }" class="card-text" id="links">Listagem
                <img center id="bol2" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>

    <b-card border-variant="info"
            header="Agendamentos"
            align="center" id="cards2">
            <router-link v-bind:to="{ name: 'configDiaAgen' }" class="card-text" id="links">Configuração dos dias
                <img center id="bol3" src="@/assets/imagens/bol.png"/>
            </router-link>
            <br/>
            <router-link v-bind:to="{ name: 'configRegAgen' }" class="card-text" id="links">Configuração das regras
                <img center id="bol4" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>

    <b-card border-variant="info"
            header="Clientes"
            align="center" id="cards2">
            <router-link v-bind:to="{ name: 'listUsers' }" class="card-text" id="links">Listagem
                <img center id="bol1" src="@/assets/imagens/bol.png"/>
            </router-link>
    </b-card>
    </b-card-group>
    <button>
    
    </button>
    </div>

</template>

<script>
/*import "./assets/stylesheets/main.css";*/

export default {
  name: "Home",
  data() {
    return {
    };
  },
  created() {
      localStorage.setItem('idAdm', parseJwt(localStorage.getItem("token")).administrador);
  },
}
  function parseJwt(token) {
  console.log("TOKEN " + token);
  var base64Url = token.split(".")[1];
  console.log("BASE64URL " + base64Url);
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  console.log("BASE64 " + base64);
  return JSON.parse(window.atob(base64));
}

</script>


<style>

body{
    font-family: 'Roboto Light';
}

#logo{
    width: 30em;
    height: 8em;
    left: 35%;
    top: -5em;
    z-index: 2;
}

#cards{
    font-size: 2em !important;
    width: 29%;
    left: 2em;
        top: -3em;
    border-radius: 0.1em;
   -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
   opacity: 0.8;
   z-index: 2;
}

#cards2{
    font-size: 2em !important;
    width: 29%;
    left: 2em;
        top: -1em;
    border-radius: 0.1em;
    opacity: 0.8;
    z-index: 2;
}

.card-header{
    border-radius: 1em 0em 0em !important;
    border-top-right-radius: inherit !important;
}

#links{
    font-size: 0.8em;
    text-decoration: none;
    color: black;
}

#alig{
    font-family: Roboto;
    width: 92em;
    left: 4%;
    top: 90px;
    position: relative;
}

#alig2{
    font-family: Roboto;
    width: 92em;
    left: 4%;
    top: 90px;
    position: relative;
}

#bol1{
    width: 4%;
    left: -35%;
    position: relative;
}

#bol2{
    width: 4%;
    left: -36%;
    position: relative;
}

#bol3{
    width: 4%;
    left: -73%;
    position: relative;
}

#bol4{
    width: 4%;
    left: -76.5%;
    position: relative;
}

.card-body{
        font-family: Roboto;
        left: 3%;
    position: relative;
}

#exit{
    left: 96%;
    width: 4%;
    top: 0%;
    position: absolute;
}
</style>