export const state = () => ({
  counter: 0,
})

export const mutations = {
  INCREMENT(state, number) {
    state.counter += number
  },
}

export const actions = {
  increment(context, payload) {
    context.commit('INCREMENT', payload)
  },
}
