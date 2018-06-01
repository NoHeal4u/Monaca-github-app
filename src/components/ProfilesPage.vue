<template>
	 <v-ons-page>
	 <v-ons-list>
	 	<v-ons-list-header>{{user.name}}'s profile</v-ons-list-header>
	 	<v-ons-list-item >

	 	Location :{{user.location}} <br/>
	 	Number of followers:{{user.followers}}<br/>
	 	Number of people user is following:{{user.following}}

	 	</v-ons-list-item>
	 </v-ons-list>
	 </v-ons-page>
</template>

<script>
	export default {
		props: {
			user : {

				type: Object
		}
	},

		mounted: function() {
			console.log(this.user)
		}
	}
</script>

