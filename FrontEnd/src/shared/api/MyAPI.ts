import Axios from 'axios'

const API_URL ='http://localhost:3001'

const MyAPI=Axios.create({
    baseURL: API_URL,
  //  headers:  {'Content-type': 'application/json'}
})

export default MyAPI