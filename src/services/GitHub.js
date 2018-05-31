import axios from 'axios'

const API_TOKEN ='65d501be3be8171420dc1ff41475b5812ed553b7'

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
