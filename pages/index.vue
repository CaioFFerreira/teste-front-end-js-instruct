<template>
  <section class="banner">
    <div class="banner__image pb-40">
      <img src="@/assets/images/woman-banner.svg" alt="Woman happy" />
    </div>
    <ButtonPrimary :text="$t('home.button')" to="/leads" />
  </section>
</template>

<script>
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'

export default {
  components: {
    ButtonPrimary,
  },
  layout: 'principal',
  head: {
    title: 'Vough - See Leads now!',
  },
}
</script>

<style lang="scss" scoped>
.banner {
  text-align: center;
  .banner__image {
    img {
      @media (max-width: $view-port-medium) {
        max-width: 200px;
      }
    }
  }
}
</style>
