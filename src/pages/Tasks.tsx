import { ITask, TaskList } from '@/components/TaskList'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { TypographyH1 } from '@/components/ui/Typographyh1'
import { TypographyH3 } from '@/components/ui/Typographyh3'
import { FC, useState } from 'react'

export const defaultTasks: ITask[] = [
	{
		id: 1,
		body: 'Задача 1',
		completed: true,
	},
	{
		id: 2,
		body: 'Задача 2',
		completed: true,
	},
	{
		id: 3,
		body: 'Задача 3',
		completed: true,
	},
	{
		id: 4,
		body: 'Задача 4',
		completed: false,
	},
	{
		id: 5,
		body: 'Задача 5',
		completed: false,
	},
	{
		id: 6,
		body: 'Задача 6',
		completed: false,
	},
]

export const Tasks: FC = () => {
	const [tasks, setTasks] = useState<ITask[]>(defaultTasks)
	const [value, setValue] = useState('')

	function addTask() {
		if (value.trim() === '') {
			return
		}

		setTasks(prev => [
			...prev,
			{ id: Date.now(), body: value, completed: false },
		])

		setValue('')
	}

	function removeTask(task: ITask) {
		setTasks(prev => prev.filter(pred => pred.id !== task.id))
	}

	function changeStatusTask(task: ITask) {
		const newTasks = tasks.map(value => {
			if (value.id === task.id) {
				return {
					...value,
					completed: !value.completed,
				}
			}

			return value
		})

		setTasks(newTasks)
	}

	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<TypographyH1 className="mb-5">Tasks</TypographyH1>
			<Card className="w-2/4 pt-6">
				<CardContent>
					<TypographyH3 className="mb-5">Выполненые</TypographyH3>
					<TaskList
						tasks={tasks.filter(task => task.completed)}
						onChangeStatus={changeStatusTask}
						onRemoveTask={removeTask}
					/>
					<TypographyH3 className="my-5">Не выполненые</TypographyH3>
					<TaskList
						tasks={tasks.filter(task => !task.completed)}
						onChangeStatus={changeStatusTask}
						onRemoveTask={removeTask}
					/>
				</CardContent>
			</Card>
			<div className="w-1/3 mt-10 flex gap-5">
				<Input
					autoFocus
					placeholder="Сходить за покупками"
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={e => {
						if (e.key === 'Enter') {
							addTask()
						}
					}}
				/>
				<Button onClick={addTask}>Добавить</Button>
			</div>
		</div>
	)
}
