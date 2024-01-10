import { COLLECTION_DEALS, DB_ID } from "@/app.constants"
import { KANBAN_DATA } from "@/components/kanban/kanban.data"
import { DB } from "@/lib/appwrite"
import type { IDeal } from "@/types/deals.types"
import { useQuery } from "@tanstack/vue-query"

export function useKanbanQuery() {
	//TODO: Kanban queries
	return useQuery({
		queryKey: ["deals"],
		queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
		select(data) {
			const newBoard = [...KANBAN_DATA]
			const deals = data.documents as unknown as IDeal[]
			console.log(deals, newBoard)
		},
	})
}
