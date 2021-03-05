import { shallowMount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  const wrapper = shallowMount(Logo)
  test('is a Vue instance', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })
})
