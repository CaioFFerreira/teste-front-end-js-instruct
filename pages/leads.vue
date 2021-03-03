<template>
  <div class="leads">
    <div class="leads__filters">
      <input
        v-model="namePerson"
        type="text"
        placeholder="Search name"
        class="input_company_name"
      />
    </div>
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
  data() {
    return {
      leads: '',
      namePerson: '',
    }
  },
  computed: {
    filterAll() {
      return this.filterSearchName(this.leads)
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
    gap: 30px;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    margin-bottom: 10px;

    .input_company_name {
      padding: 15px 30px;
      outline: none;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 0 15px rgb(0 0 0 / 16%);
      border: 0px;
      border-radius: 3px;
      height: 100%;
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
