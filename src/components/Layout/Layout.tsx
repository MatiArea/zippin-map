import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div className={`flex flex-col min-h-screen bg-background text-foreground`}>
			<Header />
			<main className="flex-1 p-4 ">
				<Outlet />
			</main>
		</div>
	)
}
