<template>
    <v-ons-page>
     <AppToolbar/>
     <AppSearch/>
      
    </v-ons-page>
</template>
<script>
import AppToolbar from './components/AppToolbar.vue'
import AppSearch from './components/AppSearch.vue'

  export default{
    name: 'git-app',
    components: {
      AppToolbar,
      AppSearch
    }
  }
  
</script>
