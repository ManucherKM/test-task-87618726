import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App.tsx'
import './styles/index.scss'

const IS_DEV = import.meta.env.VITE_IS_DEV

const root = createRoot(document.getElementById('root')!)

root.render(
	<>
		{IS_DEV ? (
			<StrictMode>
				<App />
			</StrictMode>
		) : (
			<App />
		)}
	</>,
)
