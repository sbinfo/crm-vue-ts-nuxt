// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ["~/assets/css/main.css"],
	modules: [
		"@pinia/nuxt",
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
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
	plugins: ["~/plugins/vue-query.ts"],
})
