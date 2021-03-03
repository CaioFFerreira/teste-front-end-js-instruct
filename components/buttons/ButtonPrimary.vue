<template>
  <nuxt-link :to="to" tag="button" class="button--primary">
    {{ text || 'Carregando...' }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String || String,
      default: false,
    },
    to: {
      type: String || Object,
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

  @media (max-width: $view-port-medium) {
    font-size: $size-16;
    padding: 10px 30px;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
