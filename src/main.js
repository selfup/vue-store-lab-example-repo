// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueStoreLab from 'vue-store-lab';

const appState = {
  dates: [],
};

const appActions = {
  ADD(state) {
    const newDate = new Date().getTime();
    const dates = [newDate, ...state.dates];
    return { dates };
  },
  CLEAR() {
    return { dates: [] };
  },
};

Vue.use(new VueStoreLab(appState, appActions));

const App = Vue.extend({
  props: {
    state: {
      type: Object,
    },
  },
  computed: {
    dates() {
      return this.state.dates;
    },
    datesLength() {
      return this.dates.length;
    },
    canClear() {
      return this.datesLength > 0;
    },
  },
  template: `
    <section>
      <button @click='dispatch("ADD")'>
        add
      </button>
      <button
        v-if='canClear'
        @click='dispatch("CLEAR")'
      >
        clear
      </button>
      <p>Dates length: {{ datesLength }}</p>
      <hr v-if='canClear'>
      <article v-for='date in dates'>
        {{ date }}
      </article>
    </section>
  `,
});

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

