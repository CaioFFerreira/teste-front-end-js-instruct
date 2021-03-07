<template>
  <div class="card">
    <transition name="fade" mode="out-in">
      <Modal
        v-if="showModal"
        :person-info="lead"
        @close-modal="closeModalOverlay"
      />
    </transition>
    <div class="card__tag">
      <img src="@/assets/images/tag.svg" alt="Tag" />
    </div>
    <h2 class="pb-10">{{ lead.name }}</h2>
    <p class="pb-20">{{ $t('modal.phone') }}: {{ lead.phone }}.</p>
    <ButtonSecond text="See more" @open-modal="openModal" />
  </div>
</template>

<script>
import ButtonSecond from '@/components/buttons/ButtonSecond.vue'

export default {
  components: {
    ButtonSecond,
  },
  props: {
    lead: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = !this.showModal
    },
    closeModalOverlay({ target, currentTarget }) {
      if (target === currentTarget) {
        this.showModal = false
      }
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
