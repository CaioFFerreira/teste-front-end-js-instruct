import { shallowMount } from '@vue/test-utils'
import * as Modal from '@/components/Modal.vue'

describe('Modal', () => {
  const wrapper = shallowMount(Modal, {
    mocks: { $t: () => '' },
  })
  test('is a Vue instance', () => {
    const actual = wrapper.exists()
    expect(actual).toBeTruthy()
  })

  // test('Verifica definição das props no component', () => {
  //   const received = Object.keys(wrapper.vm._props)
  //   const expected = ['personInfo']
  //   expect(received).toEqual(expected)
  // })
})
