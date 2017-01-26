import Vue from 'vue';
import VueStoreLab from 'vue-store-lab';
import appState from './appState';
import appActions from './appActions';
import App from './App';

Vue.use(new VueStoreLab(appState, appActions));

const vm = new Vue({
  el: '#app',
  components: { App },
  data() {
    return {
      state: this.VueStoreLabState,
    };
  },
  template: `
    <app :state='state'></app>
  `,
});

(() => vm)();

