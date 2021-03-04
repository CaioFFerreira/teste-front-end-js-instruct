<template>
  <div class="empty">
    <img src="@/assets/images/cup.svg" alt="Cup" />
    <p class="pt-20">{{ $t('leads.noResults') }}</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.empty {
  @media (max-width: $view-port-medium) {
    width: 100%;
    text-align: center;
  }
  p {
    font-size: $size-16;
    color: $dark-blue;
  }
}
</style>
