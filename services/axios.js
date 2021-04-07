import axios from 'axios'

const HttpService = axios.create({
  baseURL: 'http://localhost:3333',
})

export default HttpService
