import axios from 'axios'

const API_TOKEN ='6e06d3048ca2609e0ce855ffef5d5ac9755c01cd'

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
