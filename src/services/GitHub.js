import axios from 'axios'

const API_TOKEN ='f44370077990479c2cd4071a331529984d60b1cd'

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
