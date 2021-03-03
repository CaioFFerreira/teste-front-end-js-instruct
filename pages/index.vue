<template>
  <div class="banner">
    <div class="banner__image pb-40">
      <img src="@/assets/images/woman-banner.svg" alt="Woman happy" />
    </div>
    <ButtonPrimary text="Consultar Leads" to="/leads" />
  </div>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'

export default {
  components: {
    ButtonPrimary,
  },
}
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
}
</style>
