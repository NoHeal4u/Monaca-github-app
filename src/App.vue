<template>
    <v-ons-page>
     <AppToolbar/>
     <AppSearch :query.sync="query" @update:query="callGetRepos"/>
      <v-ons-list>
      <div v-if="getUserTrigger && repos.length !== 0 " >
      <v-ons-list-header>Repositories of {{ repos[0].owner.login }}</v-ons-list-header>
      <v-ons-list-item v-for="repo in repos" >
        <div class="left">
          <img :src="repo.owner.avatar_url" height="25" width="25">
        </div>
        <div class="right">{{repo.name}}</div>
      </v-ons-list-item>
      </div>
      <v-ons-progress-circular v-if="doWhileAxiosRequest" indeterminate/></v-ons-progress-circular>
    </v-ons-list>
    </v-ons-page>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import { gitHub } from './services/GitHub.js'
import debounce from 'lodash/debounce'

  export default{
    name: 'git-app',
    
    components: {
      AppToolbar,
      AppSearch
    },

    data(){
      return {
        query: '',
        repos: '',
        user: '',
        getUserTrigger: false,
        doWhileAxiosRequest:false
      
      }
    },

    created() {
      this.callGetRepos = debounce(this.getRepos, 500)
    },

    watch: {
      query: function() {
        this.callGetRepos()
      }
    },

    methods: {
      getRepos(){
        gitHub.getRepos(this.query).then(({ data })=>{
          this.doWhileAxiosRequest = true
          this.repos = data
          this.getUserTrigger = true
          console.log(this.repos)
          // this.user = this.getUser()
          
        }).catch(error=>{
          console.log('OVDE JE ERROR')
          console.log(error.response)
          this.getUserTrigger = false
        }).finally(()=>{
          this.doWhileAxiosRequest = false
        })
       
      },

      getUser(){
        gitHub.getUser(this.query).then(({data})=>{
          this.user = data
          console.log(this.user)
        })
      }
    }
  }
  
</script>
