import { FaHome, FaInfo, FaMailBulk } from 'react-icons/fa'

import { Header } from './Header'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<div className={`flex flex-col min-h-screen bg-background text-foreground`}>
			<Header />
			<div className="flex flex-1">
				{/* <nav className="p-4">
					<ul className="space-y-2">
						<li>
							<Link
								to="/"
								className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
							>
								<FaHome className="h-5 w-5" />
								<span>Inicio</span>
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
							>
								<FaInfo className="h-5 w-5" />
								<span>Acerca de</span>
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
							>
								<FaMailBulk className="h-5 w-5" />
								<span>Contacto</span>
							</Link>
						</li>
					</ul>
				</nav> */}
				<main className="flex-1 p-4">
					<Outlet />
				</main>
			</div>
		</div>
	)
}
