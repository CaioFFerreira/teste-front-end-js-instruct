<template>
  <header class="bg-header">
    <Container>
      <Logo />
      <Profile />
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.bg-header {
  background: $white;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
