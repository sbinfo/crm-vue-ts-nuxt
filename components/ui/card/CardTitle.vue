<script setup lang="ts">
import { cn } from "@/lib/utils"

const props = defineProps({
	class: {
		type: String,
		default: "",
	},
})
</script>

<template>
	<h3 :class="cn('tracking-tight  text-xl leading-tight', props.class)">
		<slot />
	</h3>
</template>
