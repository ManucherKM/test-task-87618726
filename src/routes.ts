import { FC } from 'react'
import { Tasks } from './pages/Tasks'

export interface IRoute {
	path: string

	component: FC
}

export enum ERoutes {
	tasks = '/',
}

export const publicRoutes: IRoute[] = [
	{
		path: ERoutes.tasks,
		component: Tasks,
	},
]

export const privateRoutes: IRoute[] = []
