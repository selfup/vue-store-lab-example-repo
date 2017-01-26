<template>
  <div>
    <!--
      You will notice that 'dispatch' is available here!
      That is because VueStoreLab sends it over
      So you just need to worry about computed properties and state
      dispatch should take care of all your state changes
    -->
    <button @click='dispatch("ADD")'>
      add
    </button>
    <button
      v-if='canClear'
      @click='dispatch("CLEAR")'
    >
      clear
    </button>
  </div>
</template>

<script>
module.exports = {
  props: {
    canClear: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

