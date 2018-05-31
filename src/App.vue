<template>
    <v-ons-page>
     <AppToolbar/>
     <AppSearch :query.sync="query" @update:query="callGetRepos"/>
      <v-ons-list>
      <div v-if="getUserTrigger">
      <v-ons-list-header>Repositories of {{ user.name }}</v-ons-list-header>
      <v-ons-list-item v-for="repo in repos" >
        <div class="left">
          <img :src="user.avatar_url" height="25" width="25">
        </div>
        <div class="right">{{repo.name}}</div>
      </v-ons-list-item>
      </div>
    </v-ons-list>
    </v-ons-page>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'
import { gitHub } from './services/GitHub.js'
import _ from 'lodash'

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
        getUserTrigger: false
      }
    },

    created() {
      this.callGetRepos = _.debounce(this.getRepos, 500)
    },

    watch: {
      query: function() {
        this.callGetRepos()
      }
    },

    methods: {
      getRepos(){
        gitHub.getRepos(this.query).then(({ data })=>{
          this.repos = data
          this.getUserTrigger = true
          console.log(this.repos)
          this.user = this.getUser()
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
