<template>
  <form class="leads__filters" @submit.prevent>
    <input
      type="text"
      autofocus
      placeholder="Person name"
      class="input_company_name"
      @input="(event) => this.$emit('input-value', event)"
    />
    <div class="category__container">
      <button
        type="submit"
        class="leads__select--category"
        @click="filtroModal = !filtroModal"
      >
        {{ category }} ▼
        <span
          v-if="category !== 'All category'"
          class="close--category"
          @click.stop="category = 'All category'"
        >
          X
        </span>
      </button>
      <transition name="fade" mode="out-in">
        <div v-if="false" class="filter__category">
          <label v-for="item in categoryValues" :key="item.value">
            <input v-model="category" type="radio" :value="item.value" />
            {{ item.value }}
          </label>
        </div>
      </transition>
    </div>

    <button type="submit" class="leads__submit">
      {{ $t('leads.searchText') }}
    </button>
  </form>
</template>

<script>
import { Allcategory } from '@/enums/categories'

export default {
  layout: 'principal',
  data() {
    return {
      filtroModal: false,
      categoryValues: Allcategory,
      category: 'All category',
    }
  },
  watch: {
    category() {
      this.emitvalue()
      this.filtroModal = false
    },
  },
  methods: {
    emitvalue() {
      this.$emit('input-category', this.category)
    },
  },
}
</script>

<style lang="scss" scoped>
.leads__filters {
  text-align: right;
  background: $grey;
  padding: 20px;
  background-color: $grey;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 10px;
  @media (max-width: $view-port-medium) {
    flex-direction: column;
  }
  .category__container {
    position: relative;
    width: 100%;
    max-width: 200px;
    @media (max-width: $view-port-medium) {
      max-width: 100%;
    }

    .filter__category {
      background-color: $dark-blue;
      padding: 20px;
      border-radius: 3px;
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50px;
      min-width: 100%;
      z-index: 9;
      height: 200px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-track {
        background: $grey;
      }
      &::-webkit-scrollbar-thumb {
        background: $violet;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $green;
      }
      label {
        text-align: left;
        color: $grey;
        cursor: pointer;
        padding-bottom: 10px;
      }
    }
    .leads__select--category {
      padding: 15px 30px;
      border: 0px;
      background-color: $dark-blue;
      cursor: pointer;
      color: $grey;
      position: relative;
      font-size: $size-14;
      box-shadow: 0 0 15px rgb(0 0 0 / 16%);
      border-radius: 3px;
      transition: 0.5s ease-in-out;
      outline: none;
      width: 100%;

      .close--category {
        position: absolute;
        right: 15px;
        color: $violet;
        font-weight: bold;
        font-size: $size-22;
      }
      @media (max-width: $view-port-medium) {
        width: 100%;
      }
    }
  }
  .input_company_name {
    padding: 15px 30px;
    outline: none;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 15px rgb(0 0 0 / 16%);
    border: 0px;
    border-radius: 3px;
    height: 100%;
    @media (max-width: $view-port-medium) {
      max-width: 100%;
    }
  }
  .leads__submit {
    padding: 15px 30px;
    border: 0px;
    background-color: $violet;
    cursor: pointer;
    color: $grey;
    font-size: $size-14;
    box-shadow: 0 0 15px rgb(0 0 0 / 16%);
    border-radius: 3px;
    transition: 0.5s ease-in-out;
    outline: none;
    @media (max-width: $view-port-medium) {
      width: 100%;
    }
  }
}
</style>
