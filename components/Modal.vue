<template>
  <div class="overlay" @click="closeModal">
    <div class="modal">
      <div class="modal__content">
        <h4 class="pb-10">Profile</h4>
        <p><span> Name: </span>{{ personInfo.name }}</p>
        <p><span> Username: </span> {{ personInfo.username }}</p>
        <p><span> Email: </span> {{ personInfo.email }}</p>
        <p><span> Address: </span> {{ address }}</p>
        <p><span> Phone: </span> {{ personInfo.phone }}</p>
        <p><span> Website: </span> {{ personInfo.website }}</p>

        <h4 class="pb-10 pt-20">Company</h4>
        <p><span> Name: </span> {{ personInfo.company.name }}</p>
        <p><span> Catch Phrase: </span> {{ personInfo.company.catchPhrase }}</p>
        <p>
          <span> BS: </span>
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
      type: Object || Array,
      default: false,
    },
  },
  computed: {
    address() {
      const { street, suite, city } = this.personInfo.address
      return `${street}, ${suite} - ${city}`
    },
    companyBs() {
      const bsSplit = this.personInfo.company.bs.split(' ')
      const bsJoin = bsSplit.join(', ')
      const bsArray = bsJoin.split(', ')
      return bsArray
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
    max-width: 480px;
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
