import axios from 'axios'

export default class GitHub {
  constructor () {
    axios.defaults.baseURL = 'https://api.github.com/users/'
  }

  getRepos (username){
    return axios.get(`${username}/repos`)
  }

  getUser (username){
    return axios.get(`${username}`)
  }


 
}

export const gitHub = new GitHub()
