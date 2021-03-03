<template>
  <div class="card">
    <Modal v-if="showModal" :person-info="lead" />
    <div class="card__tag">
      <img src="@/assets/images/tag.svg" alt="Tag" />
    </div>
    <h2 class="pb-10">{{ lead.name }}</h2>
    <p class="pb-20">{{ lead.company.catchPhrase }}.</p>
    <ButtonSecond text="See more" @open-modal="openModal(lead.id)" />
  </div>
</template>

<script>
import ButtonSecond from '@/components/buttons/ButtonSecond.vue'
import Modal from '@/components/Modal.vue'

export default {
  components: {
    ButtonSecond,
    Modal,
  },
  props: {
    lead: {
      type: Object || String,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal(id) {
      this.showModal = !this.showModal
      // eslint-disable-next-line no-console
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 20px;
  border-radius: 3px;
  border-right: 3px solid $green;
  box-shadow: 0 0 15px rgb(0 0 0 / 16%);
  position: relative;
  .card__tag {
    position: absolute;
    top: -10px;
    right: -10px;
    img {
      max-width: 40px;
    }
  }
  h2 {
    color: $dark-blue;
    font-size: $size-22;
  }

  p {
    font-size: $size-16;
  }
}
.card:nth-child(2n + 1) {
  border-right: 3px solid $dark-blue;
}
</style>
