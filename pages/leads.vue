<template>
  <div class="leads">
    <div class="leads__filters"></div>
    <div class="leads__list">
      <div class="leads__image">
        <img src="@/assets/images/women-handup.svg" alt="Woman handup" />
      </div>
      <div class="leads__items">
        <Card
          v-for="lead in leads"
          :key="lead.id"
          :lead="lead"
          class="leads__card"
        />
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
    }
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
  },
}
</script>

<style lang="scss" scoped>
.leads {
  .leads__list {
    display: flex;
    gap: 30px;

    .leads__items {
      flex: 1;
      padding: 20px;
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
