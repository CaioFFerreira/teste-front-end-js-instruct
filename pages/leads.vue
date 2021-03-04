<template>
  <div class="leads">
    <form class="leads__filters" @submit.prevent>
      <input
        v-model="namePerson"
        type="text"
        placeholder="Person name"
        class="input_company_name"
      />
      <div class="category__container">
        <button
          type="submit"
          class="leads__select--category"
          @click="filtroModal = !filtroModal"
        >
          {{ category }} ▼
        </button>
        <div v-if="filtroModal" class="filter__category">
          <label v-for="item in Allcategory" :key="item">
            <input v-model="category" type="radio" :value="item.value" />
            {{ item.value }}
          </label>
        </div>
      </div>

      <button type="submit" class="leads__submit">Search</button>
    </form>
    <div class="leads__list">
      <div class="leads__image">
        <img src="@/assets/images/women-handup.svg" alt="Woman handup" />
      </div>
      <div v-if="filterAll.length" class="leads__items">
        <Card
          v-for="lead in filterAll"
          :key="lead.id"
          :lead="lead"
          class="leads__card"
        />
      </div>
      <div v-else class="empty">
        <img src="@/assets/images/cup.svg" alt="Cup" />
        <p class="pt-20">Nenhum resultado encontrado...</p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Leads from '../domain/Leads/Leads'

export default {
  components: {
    Card,
  },
  layout: 'principal',
  data() {
    return {
      leads: '',
      namePerson: '',
      filtroModal: false,
      category: 'All category',
      Allcategory: [
        {
          value: 'All category',
        },
        {
          value: 'synergize',
        },
        {
          value: 'harness',
        },
        {
          value: 'real-time',
        },
        {
          value: 'e-markets',
        },
        {
          value: 'scalable',
        },
        {
          value: 'supply-chains',
        },
        {
          value: 'e-enable',
        },
        {
          value: 'strategic',
        },
        {
          value: 'applications',
        },
        {
          value: 'transition',
        },
        {
          value: 'cutting-edge',
        },
        {
          value: 'web',
        },
        {
          value: 'services',
        },
        {
          value: 'revolutionize',
        },
        {
          value: 'end-to-end',
        },
        {
          value: 'systems',
        },
        {
          value: 'innovative',
        },
        {
          value: 'generate',
        },
        {
          value: 'enterprise',
        },
        {
          value: 'e-tailers',
        },
        {
          value: 'extensible',
        },
        {
          value: 'aggregate',
        },
        {
          value: 'technologies',
        },
        {
          value: 'target',
        },
        {
          value: 'models',
        },
      ],
    }
  },
  computed: {
    filterAll() {
      return this.filterCategoryBs(this.filterSearchName(this.leads))
    },
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      Leads.get().then(({ data }) => {
        this.leads = data
      })
    },
    filterSearchName(leads) {
      if (this.namePerson) {
        return leads.filter((lead) => {
          return lead.name.toLowerCase().includes(this.namePerson.toLowerCase())
        })
      } else {
        return leads
      }
    },
    filterCategoryBs(leads) {
      if (this.category === 'All category') {
        return leads
      } else {
        return leads.filter((lead) => {
          return lead.company.bs.includes(this.category)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.leads {
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
        font-size: $size-14;
        box-shadow: 0 0 15px rgb(0 0 0 / 16%);
        border-radius: 3px;
        transition: 0.5s ease-in-out;
        outline: none;
        width: 100%;
        &:hover {
          background-color: $violet;
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
      &:hover {
        background-color: $dark-blue;
      }
      @media (max-width: $view-port-medium) {
        width: 100%;
      }
    }
  }
  .leads__list {
    display: flex;
    gap: 30px;
    .leads__image {
      @media (max-width: $view-port-medium) {
        display: none;
      }
    }
    .leads__items {
      flex: 1;
      height: 100%;
      padding: 20px;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(3, 1fr);
      @media (max-width: $view-port-large) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: $view-port-medium) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
  .empty {
    @media (max-width: $view-port-medium) {
      width: 100%;
      text-align: center;
    }
    p {
      font-size: $size-16;
      color: $dark-blue;
    }
  }
}
</style>
