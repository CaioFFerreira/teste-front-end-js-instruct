<template>
  <div class="empty">
    <h2 class="pt-20 pb-20 empty__text">{{ $t('leads.noResults') }}</h2>
    <div v-if="messageError">
      <p class="empty__text error-api">{{ messageError }}</p>
      <p class="empty__text pt-20">{{ $t('leads.errorNetwork') }}</p>
    </div>
    <Loading />
  </div>
</template>

<script>
export default {
  props: {
    messageError: {
      type: String || Number,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.empty {
  @media (max-width: $view-port-medium) {
    width: 100%;
    text-align: center;
  }
  .error-api {
    display: inline-block;
    background-color: tomato;
    color: $grey;
    padding: 5px;
  }
  p {
    font-size: $size-16;
    color: $dark-blue;
  }
}
</style>
