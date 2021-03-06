import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index page', () => {
  const wrapper = shallowMount(Index, {
    mocks: { $t: () => '' },
  })
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se a imagem está visivel', () => {
    const image = wrapper.find('.banner__image img')
    expect(image.isVisible()).toBeTruthy()
  })
})
