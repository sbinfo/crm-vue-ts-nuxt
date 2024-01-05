<script lang="ts">
const value = 20
</script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<!-- TODO: ds  -->
		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg src="/logo.svg" width="100px" class="mx-auto" />
		</NuxtLink>

		<button class="absolute top-2 right-3 transition-colors hover:text-primary">
			<Icon name="line-md:logout" size="20px" />
		</button>
	</aside>
</template>
