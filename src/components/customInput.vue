<script setup lang="ts">
import { withDefaults } from 'vue'

const text = defineModel<string | number>()

withDefaults(defineProps<{
	type?: string,
}>(), {
	type: 'text',
})

</script>
<template>
	<input v-model="text" :type="type" class="custom-input" />
</template>
<style lang="scss" scoped>
.custom-input {
	height: 35px;
	border-radius: 3px;
	border: none;
	padding: 0 5px;
	box-shadow: 0px 0px 2px #ccc;
	&:focus {
		outline: none;
		box-shadow: 0px 0px 2px #6cf;
	}
}
</style>