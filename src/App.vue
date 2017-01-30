<template>
  <section>
    <date-action-buttons :canClear='canClear'></date-action-buttons>
    <p>Dates length: {{ datesLength }}</p>
    <hr v-if='canClear'>
    <dates :dates='dates'></dates>
  </section>
</template>

<script>
import Dates from './components/Dates';
import DateActionButtons from './components/DateActionButtons';

module.exports = {
  components: {
    Dates,
    DateActionButtons,
  },
  props: {
    state: {
      type: Object,
      required: true,
    },
  },

  /**
    The use of computed properties here is how to scope out your state
    This will ensure that children don't have more data than they need
  */
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
