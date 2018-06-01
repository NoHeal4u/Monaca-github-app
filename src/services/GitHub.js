import axios from 'axios'

const API_TOKEN ='3bbde06a110b1b7a794f04e35dd1ca139da94db2'

export default class GitHub {
  constructor () {
    axios.defaults.baseURL = 'https://api.github.com/users/'
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + API_TOKEN
  }

  getRepos (username){
    return axios.get(`${username}/repos`)
  }

  getUser (username){
    return axios.get(`${username}`)
  }


 
}

export const gitHub = new GitHub()
