<script lang="ts" setup>
import { account } from "@/lib/appwrite"

const authStore = useAuthStore()
const isLoading = useIsLoadingStore()
const router = useRouter()

// Logout
const logout = async () => {
	isLoading.set(true)
	await account.deleteSession("current")
	authStore.clear()
	await router.push("/login")
	isLoading.set(false)
}
</script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">
		<!-- TODO: ds  -->
		<NuxtLink to="/" class="mb-7 block">
			<NuxtImg src="/logo.svg" width="120px" class="mx-auto" />
		</NuxtLink>

		<button
			class="absolute top-2 right-3 transition-colors hover:text-primary"
			@click="logout"
		>
			<Icon name="line-md:logout" size="20px" />
		</button>

		<LayoutMenu />
	</aside>
</template>
