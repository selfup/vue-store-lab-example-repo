<template>
  <div>
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

