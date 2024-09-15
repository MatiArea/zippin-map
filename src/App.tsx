import 'leaflet/dist/leaflet.css'

import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import EmployeeService from './services/EmployeeService'
import { Home } from './routes/home'
import { Layout } from './components/Layout/Layout'
import MapPointsService from './services/MapPointService'

const App: React.FC = () => {
	useEffect(() => {
		EmployeeService.loadInitialEmployeesFromFile()
		MapPointsService.loadInitialPointsFromFile()
	}, [])

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					{/* <Route path="about" element={<About />} /> */}
					{/* <Route path="contact" element={<Contact />} /> */}
				</Route>
			</Routes>
		</Router>
	)
}

export default App
