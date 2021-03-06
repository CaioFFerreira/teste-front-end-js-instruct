import { shallowMount } from '@vue/test-utils'
import Leads from '@/pages/leads.vue'

describe('Index page', () => {
  const wrapper = shallowMount(Leads)
  test('Verificar se o componente está sendo renderizado', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica se a imagem está visivel', () => {
    const image = wrapper.find('.leads__image img')
    expect(image.isVisible()).toBeTruthy()
  })

  test('As propriedades corretas estão presentes no estado do componente', () => {
    const received = Object.keys(wrapper.vm.$data)
    const expected = ['leads', 'namePerson', 'category', 'messageError']
    expect(received).toEqual(expected)
  })
})
