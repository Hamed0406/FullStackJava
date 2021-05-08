import Axios from 'axios'

const API_URL ='https://swapi.dev/api'

const StartWarsAPI=Axios.create({
    baseURL: API_URL,
    headers:  {'Content-type': 'application/json'}
})

export default StartWarsAPI