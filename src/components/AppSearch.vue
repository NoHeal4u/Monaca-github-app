<template>
	<v-ons-search-input>
		<p class="search">
		<v-ons-search-input
      		:placeholder="placeholder"
      		style="width: 100%;"
      		:value="query"
      		@input="$emit('update:query', $event.target.value)">
    </v-ons-search-input>
		</p>
	</v-ons-search-input>
</template>

<script>
	export default {
		props: {
			placeholder: String,
			query: String
		}
	}

</script>