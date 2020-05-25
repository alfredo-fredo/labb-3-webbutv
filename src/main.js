import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import DataView from './components/DataView.vue'
import Title from './components/Title.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('title-text', Title)

var router = new VueRouter({
  routes: [{
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    name: 'DataView',
    component: DataView,
    path: '/corona'
  }]
})

const store = new Vuex.Store({
  state: {
    dataPeriodNew: false
  },
  mutations: {
    updateDataPeriod (state, value) {
      state.dataPeriodNew = value
    }
  },
  getters: {},
  actions: {}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*

Betygskriterier
Skapa en dynamisk webbapplikation genom att kombinera HTML, CSS och teorin från modulerna från Laboration 3.

För Godkänt så ska följande krav upppfyllas:

-fetch (eller liknande) används för att visa information från en eller flera webbtjänster i webbapplikationen (Visa åtminstone tio värden)
-Interpolering ({{ och }}) används
-v-on (eller dess kortform) används
-v-model används
-En Single Page Application, bestående av minst två sidor, ska skapas med Vue Router (Använd både router-link och router-view)
-Består av minst en komponent, utöver App-komponenten och komponenterna som direkt används av Vue Router
-Minst en komponent ska använda minst en prop
-Minst ett datavärde sparas i, och hämtas från, Vuex
-Vue CLI används
Koden för projektet publiceras på GitHub (eller liknande)
Inlämningen behöver endast bestå av en textfil med projektets Clone URL (Om din repository är privat, bjud då in användaren "jonkri" på GitHub/GitLab)
För Väl godkänt så ska kraven för Godkänt vara uppfyllda. Dessutom ska följande krav uppfyllas:

Kortformerna för v-bind och v-on ska alltid användas istället för v-bind och v-on
Minst ett v-model-värde sparas i, och hämtas från, Vuex (Använd en Two-Way Computed Property för detta)
Minst en adressparameter används i Vue Router
Datatyper ska vara specificerade för alla props

*/
