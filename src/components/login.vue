<template>
  
  <div class="formCadAdm">
    
         <div>
            <form>
                <img src="@/assets/imagens/Logo - Sprint 2.png" id= "logo" alt="" style=" width:60%">
                <h2>Login</h2>
                <label for="inputLive" >Email:</label>
                <b-form-input v-model="email" type="email" name="emailAdm" placeholder="Digite seu email:"></b-form-input>
                <br/>
                <label for="inputLive" >Senha:</label>
                <b-form-input v-model="password" type="password" placeholder="Digite sua senha:"></b-form-input>
                <b-button-group size="sm">
                  <b-button id="logar" v-for="btn in buttons" :pressed.sync="btn.state" :variant="btn.variant" :key="btn.variant" @click="login">
                    {{ btn.caption }}
                  </b-button>
                </b-button-group>
             <template v-if="erro  != null">{{erro}}</template>
             <router-view/>
            </form>
            <b-nav fill tabs id="navegation">
              <b-nav-item> <router-link v-bind:to="{ name: 'cadAdm' }" class="card-text" id="links">Cadastrar
            </router-link></b-nav-item>
            </b-nav>
        </div>
  </div>
</template>

<script>
    
    import axios from "axios";
    export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      myToggle: false,
      buttons: [
        { variant: 'outline-primary', caption: 'Logar', state: false }
      ]
    };
  },
  computed: {
    btnStates () {
      return this.buttons.map(btn => btn.state)
    }
  },
  created(){
    localStorage.setItem('idAdm', parseJwt(localStorage.getItem("token")).administrador);
  },
  methods: {
   login() {
     axios({
       url: "http://localhost:51917/api/token",
       //url: "https://athenasapi.azurewebsites.net/api/token",
       method: "POST",
       data: {
         Email: this.email,
         Senha: this.password
       }
     })
      .then(response =>{
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token)
        this.$router.push("/menu");
      })
      .catch(err => {
        this.erro = 'E-mail ou senha inválidos';
      });
    },
    
  }
}
  function parseJwt(token){
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  }
</script>


<style >
#mt-3{
    background-color: #2CBBBB;
    border: 1px solid #27A0A0;
}

.btn-group > .btn:first-child {
    margin-left: 0;
    /* width: 103%; */
    width: 5em;
    height: 2em;
    left: 189%;
    margin-top: 17%;
    font-size: 124%;
}
</style>


<>
import "@/assets/stylesheets/main.css";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      erro: ''
    };
  },
  methods: {
    login() {
      axios({
        url: "http://localhost:51917/api/token",
        method: "POST",
        data: {
          Email: this.email,
          Senha: this.password
        }
      })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem("token", response.data.token);
          // resolve(response)
          this.$router.push("/Home");
        })
        .catch(err => {
          // localStorage.removeItem("token");
          // reject(err);
          this.erro = 'E-mail ou senha inválidos';
        });
    }
  }
};
/*axios
        .post("http://localhost:51917/api/token", {
          Email: this.email,
          Senha: this.password,
        })
        .then(response => 
          localStorage.setItem("token", response.data.token) 
          ,this.$router.push('/Home')
        .catch(err => console.log(err.response))
        )}*/
</>


