import { shallowMount } from '@vue/test-utils'
import ButtonPrimary from '@/components/buttons/ButtonPrimary.vue'

describe('ButtonPrimary', () => {
  const wrapper = shallowMount(ButtonPrimary)
  test('is a Vue instance', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  test('Verifica definição das props no component', () => {
    const received = Object.keys(wrapper.vm._props)
    const expected = ['text', 'to']
    console.log(received)
    expect(received).toEqual(expected)
  })
})
