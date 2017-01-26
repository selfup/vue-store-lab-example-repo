<template>
  <div>
    <!--
      No need to pass the entire state down
      All we need is a computed property from the parent as a prop
    -->
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
