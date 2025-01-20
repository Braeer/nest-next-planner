import { IBase } from './root.types'

export interface IPomodoroRoundResponse extends IBase {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodotoSessionResponse extends IBase {
	isCompleted?: boolean
	rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionFromState = Partial<
	Omit<IPomodotoSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
