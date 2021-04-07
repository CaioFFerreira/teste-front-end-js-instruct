<template>
  <CardScheduling title="Visualização do post">
    <div class="scheduling-rigth-side">
      <div v-if="post" class="post-empty">
        <h6>
          Aguardando conteúdo. Informe os canais e asmídias desejadas para
          visualização.
        </h6>
        <img src="@/assets/images/post-preview/post-preview.svg" />
      </div>
      <div v-else class="post-visible">
        <p>oi</p>
      </div>
    </div>
  </CardScheduling>
</template>

<script>
export default {
  data() {
    return {
      post: true,
    }
  },
  // computed: {
  //   ...mapState(['counter']),
  // },
  // methods: {
  //   ...mapActions(['increment']),
  //   incrementNumber() {
  //     this.increment(5)
  //   },
  // },
}
</script>

<style lang="scss" scoped>
.scheduling-rigth-side {
  padding: 80px 40px;
  .post-empty {
    text-align: center;
    h6 {
      max-width: 380px;
      margin: 0 auto;
      color: $gray;
      padding-bottom: 25px;
      font-weight: 500;
      font-size: $font-size-16;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
