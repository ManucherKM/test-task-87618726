import { AppRouter } from './AppRouter'
import { ThemeProvider } from './ThemeProvider'

export const App = () => {
	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<AppRouter />
			</ThemeProvider>
		</>
	)
}
