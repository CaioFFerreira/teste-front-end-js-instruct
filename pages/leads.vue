<template>
  <section class="leads">
    <FormFilters
      @input-value="namePerson = $event.target.value"
      @input-category="category = $event"
    />
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
      <EmptyList v-else :message-error="messageError" />
    </div>
  </section>
</template>

<script>
import Leads from '../domain/Leads/Leads'

export default {
  layout: 'principal',
  data() {
    return {
      leads: '',
      namePerson: '',
      category: 'All category',
      messageError: '',
    }
  },
  head: {
    title: 'Vough - Potential customers',
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
      Leads.get()
        .then(({ data }) => {
          this.leads = data
        })
        .catch((error) => {
          this.messageError = error.message
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
}
</style>
