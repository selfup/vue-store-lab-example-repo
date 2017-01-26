<template>
  <section>
    <buttons :canClear='canClear'></buttons>
    <p>Dates length: {{ datesLength }}</p>
    <hr v-if='canClear'>
    <dates :dates='dates'></dates>
  </section>
</template>

<script>
import Dates from './components/Dates';
import Buttons from './components/Buttons';

module.exports = {
  components: {
    Dates,
    Buttons,
  },
  props: {
    state: {
      type: Object,
      required: true,
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
};
</script>
