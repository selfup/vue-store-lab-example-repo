<template>
  <div>
    <article v-for='date in dates'>
      {{ date }}
    </article>
  </div>
</template>

<script>
module.exports = {
  props: {
    dates: {
      type: Array,
      required: true,
    },
  },
};
</script>
