<script lang="ts" setup>
import type { ICard, IColumn } from "@/components/kanban/kanban.types"
import { useMutation } from "@tanstack/vue-query"
import dayjs from "dayjs"
import { COLLECTION_DEALS, DB_ID } from "~/app.constants"
import CreateDeal from "~/components/kanban/CreateDeal.vue"
import { useKanbanQuery } from "~/components/kanban/useKanbanQuery"
import { DB } from "~/lib/appwrite"
import { convertCurrency } from "~/lib/convertCurrency"
import type { EnumStatus } from "~/types/deals.types"

useHead({
	title: "Home | CRM System",
})

const { data, isLoading, refetch } = useKanbanQuery()

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

type TypeMutationVariables = {
	docId: string
	status?: EnumStatus
}

const { mutate } = useMutation({
	mutationKey: ["move-card"],
	mutationFn: ({ docId, status }: TypeMutationVariables) => {
		return DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, { status })
	},
	onSuccess: () => {
		refetch()
	},
})

function handleDragStart(card: ICard, column: IColumn) {
	dragCardRef.value = card
	sourceColumnRef.value = column
}

function handleDragOver(event: DragEvent) {
	event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
	if (dragCardRef.value && sourceColumnRef.value) {
		mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
	}
}
</script>

<!-- TODO: Create deal -->
<!-- TODO: DND Card -->

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-5">CRM System</h1>

		<div>
			<div v-if="isLoading">Loading...</div>
			<div v-else>
				<div class="grid grid-cols-5 gap-8">
					<div
						v-for="(column, index) in data"
						:key="column.id"
						@dragover="handleDragOver"
						@drop="() => handleDrop(column)"
					>
						<div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
							{{ column.name }}
						</div>

						<CreateDeal :refetch="refetch" :status="column.id" />

						<Card
							v-for="card in column.items"
							:key="card.id"
							class="mb-5"
							draggable="true"
							@dragstart="() => handleDragStart(card, column)"
						>
							<CardHeader role="button">
								<CardTitle>{{ card.name }}</CardTitle>
								<CardDescription>{{
									convertCurrency(card.price)
								}}</CardDescription>
							</CardHeader>
							<CardContent class="text-sm"
								><div>Company</div>
								{{ card.companyName }}
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
