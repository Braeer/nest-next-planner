import type { Dispatch, SetStateAction } from 'react'

import { IPomodoroRoundResponse } from '@/types/pomodoto.types'

export interface ITimerState {
	isRunning: boolean
	secondsLeft: number
	activeRound: IPomodoroRoundResponse | undefined

	setIsRunning: Dispatch<SetStateAction<boolean>>
	setSecondsLeft: Dispatch<SetStateAction<number>>
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>
}
