<template>
  <section class="scheduling-template">
    <SchedulingLeftSide />
    <SchedulingRightSide />
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.scheduling-template {
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px 0px;
}
</style>
