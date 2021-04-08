<template>
  <button class="button--second" @click="emitEvent">
    {{ text || 'Carregando...' }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false,
    },
  },
  methods: {
    emitEvent() {
      this.$emit('open-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
.button--second {
  color: $grey;
  border: 0px;
  cursor: pointer;
  font-size: $size-14;
  border-radius: 3px;
  background-color: $dark-blue;
  padding: 5px 15px;
  transition: 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
}
</style>
