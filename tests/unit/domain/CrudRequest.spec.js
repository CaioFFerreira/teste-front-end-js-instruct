import CrudRequest from '@/domain/CrudRequest.js'

describe('CrudRequest.js', () => {
  it('Deve gerar um erro se o método baseUrl não for substituído', async () => {
    try {
      CrudRequest.baseUrl()
      expect('Deveria falhar').toEqual('Não deveria cair aqui')
    } catch (error) {
      await expect(error.message).toEqual('Method baseUrl not implemented')
    }
  })
})
