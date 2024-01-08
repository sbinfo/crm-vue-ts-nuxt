<script lang="ts" setup>
import { ID, account } from "@/lib/appwrite"

useHead({
	title: "Login | CRM System",
})

const email = ref("")
const password = ref("")
const name = ref("")

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

// Login
const login = async () => {
	isLoadingStore.set(true)

	await account.createEmailSession(email.value, password.value)
	const response = await account.get()

	if (response) {
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,
		})

		email.value = ""
		password.value = ""
		name.value = ""
	}

	await router.push("/")
	isLoadingStore.set(false)
}

// Register
const register = async () => {
	const response = await account.create(
		ID.unique(),
		email.value,
		password.value,
		name.value
	)
	console.log(response)
	login()
}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-sidebar min-w-72 w-1/4 p-6">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>

			<form action="">
				<Input v-model="email" type="email" placeholder="Email" class="mb-4" />
				<Input
					v-model="password"
					type="password"
					placeholder="Password"
					class="mb-4"
				/>
				<Input v-model="name" type="text" placeholder="Name" class="mb-4" />
				<div class="flex items-center justify-center gap-5">
					<Button type="button" @click="login">Login</Button>
					<Button type="button" @click="register">Registration</Button>
				</div>
			</form>
		</div>
	</div>
</template>
