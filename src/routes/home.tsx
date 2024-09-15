import { createColorArray, groupMapPointsByColor } from '../utils/functions'
import { useEffect, useState } from 'react'

import { Employee } from '../types/Employee.types'
import EmployeeComponent from '../components/Employee/EmployeeComponent'
import EmployeeService from '../services/EmployeeService'
import MapComponent from '../components/Map/MapComponent'
import { MapPoint } from '../types/MapPoint.types'
import MapPointService from '../services/MapPointService'
import TableComponent from '../components/Table/TableComponent'

export const Home: React.FC = () => {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [mapPoints, setMapPoints] = useState<MapPoint[]>([])

	useEffect(() => {
		try {
			const employees = EmployeeService.getEmployees()
			setEmployees(employees)
		} catch (e) {
			console.error(e)
		}
	}, [])

	useEffect(() => {
		try {
			const mapPoints = MapPointService.getPoints()
			setMapPoints(mapPoints)
		} catch (e) {
			console.error(e)
		}
	}, [])

	const colorArray = createColorArray(employees)
	const mapPointsByColor = groupMapPointsByColor(mapPoints, employees)

	console.log('COLOR ARRAY', colorArray)
	console.log('MAP POINT', mapPointsByColor)

	return (
		<div className="p-4">
			<div className="flex flex-wrap-reverse justify-between items-stretch w-full">
				<div className="w-full md:w-1/6 mb-4">
					<EmployeeComponent employees={employees} />
				</div>
				<div className="w-full md:w-4/5 h-96 mb-4">
					<MapComponent points={mapPointsByColor} />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center  w-full py-4">
				<TableComponent data={mapPoints} />
			</div>
		</div>
	)
}
