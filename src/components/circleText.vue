<script setup lang="ts">
import { computed, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
	text: string,
	color?: string,
	fontSize?: number,
	width?: number,
	height?: number,
	duration?: string,
	play?: boolean
}>(), {
	fontSize: 14,
	color: '#6cf',
	width: 200,
	height: 200,
	duration: '10s',
})

const fontStyle = computed(() => {
	return {
		'font-size': props.fontSize,
	}
})
const viewBox = computed(() => `0 0 ${props.width} ${props.height}`)
const path = computed(() => {
	const gap = props.fontSize
	const r = props.width / 2 - gap
	// 根据宽高绘制一个圆形路径
	return `M ${gap} ${r} A ${r} ${r} 0 0 1 ${r * 2 + gap} ${r + gap} A ${r} ${r} 0 0 1 ${gap} ${r + gap}`
})
</script>
<template>
	<div class="circle-text">
		<svg class="circle-text-svg" :class="{stop: !play}" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :viewBox="viewBox" version="1.1">
      <defs>
				<animateTransform id="rotate" attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="10s" repeatCount="indefinite"/>
				<path id="textCircle" :d="path" fill="none"/>
      </defs>
      <text class="text-circle" :fill="color" :style="fontStyle">
        <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textCircle">{{ text }}</textPath>
      </text>
    </svg>
	</div>
</template>
<style lang="scss" scoped>
.circle-text {
	.circle-text-svg {
		animation: rotate v-bind(duration) linear infinite;
		transform-origin: 50% 50%;
		&.stop {
			animation-play-state: paused;
		}
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
}
</style>