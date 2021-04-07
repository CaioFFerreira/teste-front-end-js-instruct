<template>
  <div class="card-scheduling">
    <h2>{{ title }}</h2>
    <div class="card-scheduling-item">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-scheduling {
  border-radius: 4px;
  background-color: $white;
  border: 1px solid $white-3;

  h2 {
    padding: 3px 10px;
    color: $black-2;
    font-weight: 500;
    font-size: $font-size-16;
    border-bottom: 1px solid $white-3;
  }
  .card-scheduling-item {
    padding: 10px;
  }
}
</style>
