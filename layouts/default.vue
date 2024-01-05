<template>
	<section class="grid" style="min-height: 100vh">
		<LayoutSidebar />
		<div>
			<slot />
		</div>
	</section>
</template>

<script lang="ts" setup>
console.log("Working")
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 6fr;
}
</style>
