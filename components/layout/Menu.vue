<script lang="ts" setup>
import { MENU_DATA } from "./menu.data"
</script>

<template>
	<div>
		<NuxtLink
			class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5"
			v-for="menu in MENU_DATA"
			:key="menu.name"
			:to="menu.url"
		>
			<Icon :name="menu.icon" class="mr-3" size="18px" />
			<span>{{ menu.name }}</span>
		</NuxtLink>
	</div>
</template>
