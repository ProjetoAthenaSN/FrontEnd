<template>
  <div id="app">
    
    
  <v-app id="inspire" class="fundo">
    
   <img src="@/assets/imagens/torre.jpg" id="fundo" style="width: 100vw; height: 100vh; position: absolute; background-position: center; background-size: cover; background-repeat: no-repeat;">
  
    <!--v-navigation-drawer
      v-model="drawer"
      fixed
      app>
    
       <v-list dense>
        <router-link v-bind:to="{name: 'HelloWorld'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Categoria de Serviço</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'listCatServ'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Lista Categoria de Serviço</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'listagemServiço'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Lista de serviço</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'listUsers'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Lista de usuarios</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'menu'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'cadAdm'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cadastro</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'cadPessoaJud'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cadastro Pessoa Juridica</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>

        <router-link v-bind:to="{name: 'login'}" class="side_bar_link">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </router-link>
        
      </v-list>
    </v-navigation-drawer-->
    <!--v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Athena</v-toolbar-title>>
      <v-toolbar-title><img src="@/assets/imagens/LOGO-oficial.png" id="logoa" alt="" style="width: 10%" ></v-toolbar-title>
    </v-toolbar-->
    <v-content>
     
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center>
          <v-flex text-xs-center> 
            
          
          
              <v-toolbar-title></v-toolbar-title>
              
           <router-view/>
           
          </v-flex>
        </v-layout>
          <vue-particles class="a" 
        color="#dedede"
        :particleOpacity="1.0"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#0000cd"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        >
        </vue-particles>
        
      </v-container>
      
    </v-content>
    <v-footer color="indigo" app>
      <span class="white- -text">&copy; Missão Impossivel - Athena - Space Needle</span>
    </v-footer>
   
  </v-app>
  </div>
</template> 

<script>
import "./assets/css/main.css";

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#athena-botagendador2 {
  width: 10%;
  height: 70%;
  top: 9%;
  left: 37%;
}
#logoa {
  width: 3em;
  top: -20em;
  left: 18em;
}

.a{
  width: 100%;
  position: absolute;
  margin-right: 30%;
  z-index: 1;
  background-repeat: no-repeat;
}
</style>