// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxt/image",
		"@pinia/nuxt",
		"@nuxtjs/tailwindcss",
		"nuxt-icon",
		"shadcn-nuxt",
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Roboto: true,
					Lato: {
						wght: [300, 400, 700],
						ital: [300],
					},
				},
			},
		],
	],
	pinia: {
		storesDirs: ["./store/**"],
	},
	shadcn: {
		prefix: "",
		componentDir: "./components/ui",
	},
})
