import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

export interface ITypographyH3 extends HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH3: FC<ITypographyH3> = ({
	className,
	children,
	...props
}) => {
	return (
		<h3
			className={cn([
				'scroll-m-20 text-2xl font-semibold tracking-tight',
				className,
			])}
			{...props}
		>
			{children}
		</h3>
	)
}
