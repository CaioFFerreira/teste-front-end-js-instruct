<template>
  <div class="error">
    <div class="error__image">
      <img src="@/assets/images/girl-404.svg" alt="Page 404" />
    </div>
    <h1 class="pt-20 pb-20">Error 404 - Not found</h1>
    <ButtonPrimary text="home page" to="/" />
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
.error {
  text-align: center;
  h1 {
    font-size: $size-18;
    font-weight: bold;
  }
  .error__image {
    width: 100%;
    img {
      max-width: 100px;
      @media (max-width: $view-port-medium) {
        max-width: 60px;
      }
    }
  }
}
</style>
