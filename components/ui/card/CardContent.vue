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
	<div :class="cn('p-3 leading-tight', props.class)">
		<slot />
	</div>
</template>
