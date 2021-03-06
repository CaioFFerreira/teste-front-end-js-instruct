import { shallowMount } from '@vue/test-utils'
import EmptyList from '@/components/EmptyList.vue'

describe('EmptyList', () => {
  const wrapper = shallowMount(EmptyList, {
    mocks: { $t: () => '' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se a imagem está visivel', () => {
    const image = wrapper.find('.empty img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('Verifica se o texto está visivel', () => {
    const image = wrapper.find('.empty__text')
    expect(image.isVisible()).toBeTruthy()
  })
})
