<script lang="ts" setup>
import { useKanbanQuery } from "@/components/kanban/useKanbanQuery"
import { convertCurrency } from "@/lib/convertCurrency"
import dayjs from "dayjs"
import type { ICard, IColumn } from "~/components/kanban/kanban.types"

useHead({
	title: "Home | CRM System",
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
const { data, isLoading, refetch } = useKanbanQuery()

console.log(data.value)
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-5">CRM System</h1>

		<div>
			<div v-if="isLoading">Loading...</div>
			<div v-else>
				<div class="grid grid-cols-5 gap-8">
					<div v-for="(column, index) in data" :key="column.id">
						<div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
							{{ column.name }}
						</div>
						<Card
							v-for="card in column.items"
							:key="card.id"
							class="mb-3"
							draggable="true"
						>
							<CardHeader role="button">
								<CardTitle>{{ card.name }}</CardTitle>
								<CardDescription>{{
									convertCurrency(card.price)
								}}</CardDescription>
							</CardHeader>
							<CardContent class="text-sm"
								>Company: {{ card.companyName }}
							</CardContent>
							<CardFooter>{{
								dayjs(card.$createdAt).format("DD MMMM YYYY")
							}}</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
