import { Button, ButtonProps } from '@/components/ui/Button'
import { Moon, Sun } from 'lucide-react'
import { FC, MouseEvent } from 'react'
import { useTheme } from './ThemeProvider'

export interface IModeToggle extends ButtonProps {}

export const ModeToggle: FC<IModeToggle> = ({
	size,
	variant,
	onClick,
	...props
}) => {
	const { setTheme, theme } = useTheme()

	function clickHandler(e: MouseEvent<HTMLButtonElement>) {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}

		if (onClick) {
			onClick(e)
		}
	}

	return (
		<Button
			variant={variant || 'outline'}
			size={size || 'icon'}
			onClick={e => clickHandler(e)}
			{...props}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
