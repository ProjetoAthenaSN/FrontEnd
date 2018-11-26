<template>

<div> 
    <img center id="md" src="./assets/logo.png"/>
    <b-card-group deck id="alig">
        <b-card border-variant="info"
            header="Empresas / Parceiros"
            align="center" id="cards2">
            <b-link href="#foo" class="card-text" id="links">Cadastro</b-link>
            <br/>
            <b-link href="#foo" class="card-text" id="links">Listagem</b-link>
    </b-card>

    <b-card border-variant="info"
            header="Categorias de serviço"
            align="center" id="cards">
            <b-link href="#foo" class="card-text" id="links">Cadastro</b-link>
            <br/>
            <b-link href="#foo" class="card-text" id="links">Listagem</b-link>
    </b-card>

    <b-card border-variant="info"
            header="Serviços"
            align="center" id="cards">
            <b-link href="#foo" class="card-text" id="links">Cadastro</b-link>
            <br/>
            <b-link href="#foo" class="card-text" id="links">Listagem</b-link>
    </b-card>
    </b-card-group>

    <b-card-group deck id="alig2">
    <b-card border-variant="info"
            header="Profissionais"
            align="center" id="cards">
            <b-link href="#foo" class="card-text" id="links">Cadastro</b-link>
            <br/>
            <b-link href="#foo" class="card-text" id="links">Listagem</b-link>
    </b-card>

    <b-card border-variant="info"
            header="Clientes"
            align="center" id="cards2">
            <b-link href="#foo" class="card-text" id="links">Listagem</b-link>
    </b-card>

    <b-card border-variant="info"
            header="Agendamentos"
            align="center" id="cards2">
            <b-link href="#foo" class="card-text" id="links">Configuração dos dias</b-link>
            <br/>
            <b-link href="#foo" class="card-text" id="links">COnfiguração das regras</b-link>
    </b-card>
    </b-card-group>
    </div>

</template>

<>
import "./assets/stylesheets/main.css";

export default {
  name: "App"
};
</>


<style>
#md{
    width: 30em;
    height: 8em;
    margin-left: 35%;
    margin-top: 2%;
}

#cards{
    font-size: 2em !important;
    width: 29%;
    left: 2em;
    top: 1em;
    border-radius: 2em;
}

#cards2{
    font-size: 2em !important;
    width: 29%;
    left: 2em;
    top: 3em;
    border-radius: 2em;
}

.card-header{
    border-radius: 2em 0em 0em !important;
    border-top-right-radius: inherit !important;
}

#links{
    font-size: 0.8em;
    text-decoration: none;
    color: black;
}

#alig{
    width: 92em;
}

#alig2{
    width: 92em;
    top: 2em;
}
</style>