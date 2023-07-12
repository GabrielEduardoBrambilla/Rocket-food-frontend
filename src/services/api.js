import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketfoodapi.onrender.com'
})
