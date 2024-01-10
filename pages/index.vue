<script lang="ts" setup>
import { useKanbanQuery } from "@/components/kanban/useKanbanQuery"

useHead({
	title: "Home | CRM System",
})
// import { CardContent, CardFooter, CardHeader } from "@/components/ui/card"
useKanbanQuery()
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-5">CRM System</h1>

		<div>
			<Card class="mb-3" draggable="true">
				<CardHeader role="button">name card</CardHeader>
				<CardContent>content</CardContent>
				<CardFooter>date</CardFooter>
			</Card>
		</div>
	</div>
</template>
