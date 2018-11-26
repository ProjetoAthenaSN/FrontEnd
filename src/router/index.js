import Vue from 'vue';
import Router from 'vue-router';
import cadCatServ from '@/components/cadCatServ';
import listagemServiço from'@/components/listagemServiço';
import listCatServ from'@/components/listCatServ';
import listUsers from'@/components/listUsers';
import menu from'@/components/menu';
import cadEmp from'@/components/cadEmp';
import cadProf from'@/components/cadProf';
import cadServ from'@/components/cadServ';
import configDiaAgen from'@/components/configDiaAgen';
import configRegAgen from'@/components/configRegAgen';
import listEmp from'@/components/listEmp';
import listProf from'@/components/listProf';
import cadAdm from'@/components/cadAdm';
import cadPessoaJud from'@/components/cadPessoaJud';
import login from'@/components/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu',
      name:'menu',
      component: menu
    },
    {
      path: '/listagemServiço',
      name: 'listagemServiço',
      component: listagemServiço,
    },
    {
      path: '/listCatServ',
      name:'listCatServ',
      component: listCatServ
    },
    {
      path: '/listUsers',
      name:'listUsers',
      component: listUsers
    },
    {
      path: '/cadCatServ',
      name: 'cadCatServ',
      component: cadCatServ,
    },
    {
      path: '/cadEmp',
      name:'cadEmp',
      component: cadEmp
    },
    {
      path:'/cadProf',
      name:'cadProf',
      component: cadProf
    },
    {
      path:'/cadServ',
      name:'cadServ',
      component: cadServ
    },
    {
      path:'/configDiaAgen',
      name:'configDiaAgen',
      component: configDiaAgen
    },
    {
      path:'/configRegAgen',
      name:'configRegAgen',
      component: configRegAgen
    },
    {
      path:'/listEmp',
      name:'listEmp',
      component:listEmp
    },
    {
      path:'/listProf',
      name:'listProf',
      component:listProf
    },
    {
      path:'/cadAdm',
      name:'cadAdm',
      component:cadAdm
    },
    {
      path:'/cadPessoaJud',
      name:'cadPessoaJud',
      component:cadPessoaJud
    },
    {
      path:'/',
      name:'login',
      component:login
    }
  ],
});
