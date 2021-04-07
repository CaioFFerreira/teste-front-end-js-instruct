<template>
  <section class="home-template">
    <Banner />
    <ButtonPrimary text="Agendar post" @handle="navigatePage" />
  </section>
</template>

<script>
export default {
  methods: {
    navigatePage() {
      this.$router.push('/scheduling')
    },
  },
}
</script>

<style lang="scss" scoped>
.home-template {
  text-align: center;
  padding: 80px 0px;
  .banner {
    padding-bottom: 50px;
  }
}
</style>
