import { AnimatePresence } from 'motion/react'
import { ReactNode } from 'react'

export interface IList<T> {
	arr: T[]
	callback: (value: T, index: number, array: T[]) => ReactNode
	animate?: boolean
}

export function List<T>({ arr, callback, animate = false }: IList<T>) {
	return (
		<>
			{animate ? (
				<AnimatePresence initial={false}>{arr.map(callback)}</AnimatePresence>
			) : (
				<>{arr.map(callback)}</>
			)}
		</>
	)
}
