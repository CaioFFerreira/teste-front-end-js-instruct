import { shallowMount } from '@vue/test-utils'
import FormFilters from '@/components/FormFilters.vue'

describe('FormFilters', () => {
  const wrapper = shallowMount(FormFilters, {
    mocks: { $t: () => '' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se ao existir dropdown ele está com o estado inicial de falso', () => {
    const dropDown = wrapper.find('.filter__category')
    expect(dropDown.exists()).toBeFalsy()
  })
})
