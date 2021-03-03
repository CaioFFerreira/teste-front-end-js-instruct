<template>
  <div class="modal">
    <p>modal aberto {{ personInfo.id }}</p>
    <p>modal aberto {{ personInfo.name }}</p>
    <p>modal aberto {{ personInfo.username }}</p>
  </div>
</template>

<script>
export default {
  props: {
    personInfo: {
      type: Object || String,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
