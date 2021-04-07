<template>
  <button class="btn" @click="handle">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    handle() {
      this.$emit('handle')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 35px;
  border-radius: 4px;
  text-align: center;
  color: $white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  font-size: $font-size-16;
  background-color: $orange;
  outline-color: $orange-dark;
  border: 1px solid $orange-dark;
  &:hover {
    opacity: 0.8;
  }
}
</style>
