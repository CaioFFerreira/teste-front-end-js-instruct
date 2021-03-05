import { shallowMount } from '@vue/test-utils'
import ButtonSecond from '@/components/buttons/ButtonSecond.vue'

describe('ButtonSecond', () => {
  const wrapper = shallowMount(ButtonSecond)
  test('is a Vue instance', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })
})
