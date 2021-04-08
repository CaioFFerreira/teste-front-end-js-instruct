<template>
  <div class="overlay" @click="closeModal">
    <div class="modal">
      <div class="modal__content">
        <h4 class="pb-10">{{ $t('modal.profile') }}</h4>
        <p>
          <span>{{ $t('modal.name') }}</span>
          {{ personInfo.name }}
        </p>
        <p>
          <span> {{ $t('modal.userName') }}</span>
          {{ personInfo.username }}
        </p>
        <p>
          <span> {{ $t('modal.email') }} </span>
          {{ personInfo.email }}
        </p>
        <p>
          <span> {{ $t('modal.address') }}</span>
          {{ address }}
        </p>
        <p>
          <span> {{ $t('modal.phone') }}</span>
          {{ personInfo.phone }}
        </p>
        <p>
          <span>{{ $t('modal.website') }} </span>
          {{ personInfo.website }}
        </p>

        <h4 class="pb-10 pt-20">{{ $t('modal.company') }}</h4>
        <p>
          <span> {{ $t('modal.name') }} </span>
          {{ personInfo.company.name }}
        </p>
        <p>
          <span> Catch Phrase: </span>
          {{ personInfo.company.catchPhrase }}
        </p>
        <p>
          <span> {{ $t('modal.category') }} </span>
          <span v-for="bs in companyBs" :key="bs" class="bs">{{ bs }}</span>
        </p>
        <button class="close" @click="closeModal">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    personInfo: {
      type: Object || Array || String,
      default: false,
    },
  },
  computed: {
    address() {
      if (this.personInfo.address) {
        const { street, suite, city } = this.personInfo.address
        return `${street}, ${suite} - ${city}`
      }
      return 'Dados indisponíveis'
    },
    companyBs() {
      if (this.personInfo.company.bs) {
        const bsSplit = this.personInfo.company.bs.split(' ')
        const bsJoin = bsSplit.join(', ')
        const bsArray = bsJoin.split(', ')
        return bsArray
      }
      return ''
    },
  },
  methods: {
    closeModal(event) {
      this.$emit('close-modal', event)
    },
  },
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 100%;
    max-width: 600px;
    height: 300px;
    position: relative;
    border-radius: 3px;
    padding: 30px;
    margin: 10px;
    background: #fff;

    .modal__content {
      overflow-y: scroll;
      height: 100%;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: $grey;
      }
      &::-webkit-scrollbar-thumb {
        background: $dark-blue;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $violet;
      }
    }

    p {
      border-bottom: 1px solid $grey;
      padding: 10px 0px;
      font-size: $size-16;
      @media (max-width: $view-port-medium) {
        font-size: $size-14;
      }
      span {
        background-color: $violet;
        padding: 5px;
        color: $grey;
        margin-right: 10px;
        @media (max-width: $view-port-medium) {
          display: block;
          margin-bottom: 10px;
        }
      }
      .bs {
        background-color: $dark-blue;
      }
    }
    .close {
      background-color: $dark-blue;
      color: $grey;
      position: absolute;
      right: -15px;
      top: -15px;
      border: 0px;
      cursor: pointer;
      font-size: $size-18;
      border-radius: 50%;
      z-index: 999;
      outline: none;
      width: 40px;
      height: 40px;
      @media (max-width: $view-port-medium) {
        right: 45%;
        top: -25px;
      }
    }
  }
}
</style>
