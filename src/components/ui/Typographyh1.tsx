import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

export interface ITypographyH1 extends HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH1: FC<ITypographyH1> = ({
	className,
	children,
	...props
}) => {
	return (
		<h1
			className={cn([
				'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
				className,
			])}
			{...props}
		>
			{children}
		</h1>
	)
}
