<template>
  <v-ons-navigator 
  :page-stack="pageStack"
  @push-page="pushPage"
  :options="getOptions()"
  >
  <!-- <div class="left">
    <v-ons-back-button>Back</v-ons-back-button>
  </div> -->
    
  </v-ons-navigator>
</template>

<script>
import ExMain from './components/ExMain.vue'
import ProfilesPage from './components/ProfilesPage.vue'

  export default{
   data(){
    return{
       pageStack : [ExMain]
    }
   },

   methods : {
    pushPage(page){
      this.pageStack.push(page)
    },
    getOptions(){
      return {
        animation : 'fade'
      }
    }
   }
  }

</script>

<style>
  
</style>
