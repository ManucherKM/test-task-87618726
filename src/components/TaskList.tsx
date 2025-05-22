import { ArrowDownUp, CircleX, Trash2 } from 'lucide-react'
import { motion } from 'motion/react'
import { FC } from 'react'
import { List } from './List'
import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'
import { Paragraph } from './ui/Paragraph'
import { ScrollArea } from './ui/scroll-area'

const MotionCard = motion.create(Card)

export interface ITask {
	id: number
	body: string
	completed: boolean
}

export interface ITaskList {
	tasks: ITask[]
	onChangeStatus: (task: ITask) => void
	onRemoveTask: (task: ITask) => void
}

export const TaskList: FC<ITaskList> = ({
	tasks,
	onChangeStatus,
	onRemoveTask,
}) => {
	return (
		<ScrollArea className="h-72">
			{tasks.length === 0 ? (
				<div className="h-72 flex flex-col justify-center items-center gap-5">
					<CircleX className="w-20 h-20 text-border" />
					<Paragraph className="!mt-0">Список задач пуст</Paragraph>
				</div>
			) : (
				<div className="flex flex-col gap-5">
					<List
						animate={true}
						arr={tasks}
						callback={task => (
							<MotionCard
								key={task.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2, ease: 'easeOut' }}
								className="p-4"
								data-testid="task"
							>
								<CardContent className="flex justify-between items-center p-0">
									<Paragraph>{task.body}</Paragraph>
									<div className="flex gap-2">
										<Button
											data-testid="change-status"
											onClick={() => onChangeStatus(task)}
											size={'icon'}
										>
											<ArrowDownUp />
										</Button>
										<Button
											data-testid="remove-task"
											onClick={() => onRemoveTask(task)}
											size={'icon'}
										>
											<Trash2 />
										</Button>
									</div>
								</CardContent>
							</MotionCard>
						)}
					/>
				</div>
			)}
		</ScrollArea>
	)
}
