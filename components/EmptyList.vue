<template>
  <div class="empty">
    <div class="empty__container">
      <Loading class="pb-20" />
      <h3 class="pt-20 pb-20 empty__text">{{ $t('leads.noResults') }}</h3>
      <div v-if="messageError">
        <p class="empty__text error-api">{{ messageError }}</p>
        <p class="empty__text pt-20">{{ $t('leads.errorNetwork') }}</p>
      </div>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
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
