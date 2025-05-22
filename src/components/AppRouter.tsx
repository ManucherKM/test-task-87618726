import { privateRoutes, publicRoutes } from '@/routes'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				{publicRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
				{privateRoutes.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	)
}
