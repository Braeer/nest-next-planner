import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypePomodoroRoundState } from '@/types/pomodoto.types'

import { pomodoroService } from '@/services/pomodoto.service'

export function useUpdateRound() {
	const queryClient = useQueryClient()

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update round'],
		mutationFn: ({ id, data }: { id: string; data: TypePomodoroRoundState }) =>
			pomodoroService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] })
		}
	})

	return { updateRound, isUpdateRoundPending }
}
