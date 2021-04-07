import http from '../../services/axios'
import CrudRequest from '../CrudRequest'

class Leads extends CrudRequest {
  static baseUrl() {
    return '/social-networks'
  }

  static get() {
    return http.get(`${this.baseUrl()}`)
  }
}

export default Leads
