import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card', () => {
  const wrapper = shallowMount(Card, {
    mocks: { $t: () => '' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se a imagem está visivel', () => {
    const image = wrapper.find('.card__tag img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('Verifica definição das props no component', () => {
    const received = Object.keys(wrapper.vm._props)
    const expected = ['lead']
    expect(received).toEqual(expected)
  })
})
