<template>
  <nuxt-link :to="to" tag="button" class="button--primary">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: Boolean || String,
      default: false,
    },
    to: {
      type: Boolean || String,
      default: false,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button--primary {
  color: $grey;
  border: 0px;
  cursor: pointer;
  font-size: $size-18;
  border-radius: 3px;
  background-color: $violet;
  padding: 15px 40px;
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}
</style>
