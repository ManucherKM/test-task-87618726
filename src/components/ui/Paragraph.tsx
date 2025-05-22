import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

export interface IParagraph extends HTMLAttributes<HTMLParagraphElement> {}

export const Paragraph: FC<IParagraph> = ({
	className,
	children,
	...props
}) => {
	return (
		<p
			className={cn(['leading-7 [&:not(:first-child)]:mt-6', className])}
			{...props}
		>
			{children}
		</p>
	)
}
