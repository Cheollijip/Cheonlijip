import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://211.38.86.92:8090',
})
