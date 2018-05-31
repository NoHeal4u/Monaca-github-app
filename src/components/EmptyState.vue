<template>
	<v-ons-card>
		<img src="https://pbs.twimg.com/media/Bt5MoW0CIAE9Fda.jpg" height="100" width="100">
		<div class="content">
			There are no {{ type | pluralizeType}} here
		</div>
	</v-ons-card>
</template>

<script>

import pluralize from 'pluralize'

	export default {
		props: {
			type: ''
		},

		filters: {

			pluralizeType(value) {
				return pluralize(value)
			}
		}

	}
</script>