import 'leaflet/dist/leaflet.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { About } from './routes/about'
import { Contact } from './routes/contact'
import { Home } from './routes/home'
import { Layout } from './components/Layout/Layout'

export const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Routes>
	</Router>
)
