<script setup lang="ts">
const emit = defineEmits(['click'])

const emitClick = () => {
	emit('click')
}
</script>
<template>
	<div class="custom-button" @click="emitClick">
		<slot></slot>
	</div>
</template>
<style lang="scss" scoped>
.custom-button {
	padding: 5px 10px;
	border-radius: 3px;
	display: inline-block;
	cursor: pointer;
	border: 1px solid #eee;
	&:hover {
		background: #ccc;
		border-color: #ccc;
	}
	&:active {
		background: #aaa;
		border-color: #aaa;
	}
}
</style>