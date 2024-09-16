import { useEffect, useState } from 'react'

import { Employee } from '../types/Employee.types'
import EmployeeComponent from '../components/Employee/EmployeeComponent'
import EmployeeService from '../services/EmployeeService'
import MapComponent from '../components/Map/MapComponent'
import { MapPoint } from '../types/MapPoint.types'
import MapPointService from '../services/MapPointService'
import SelectModalComponent from '../components/Modal/SelectModalComponent'
import TableComponent from '../components/Table/TableComponent'
import { groupMapPointsByColor } from '../utils/functions'

export const Home: React.FC = () => {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [mapPoints, setMapPoints] = useState<MapPoint[]>([])
	const [selectedMapPoint, setSelectedMapPoint] = useState<MapPoint[] | []>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [fetchData, setFetchData] = useState(false)
	const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
		null,
	)

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
	}, [fetchData])

	const handleTableRowClick = (mapPoint: MapPoint[]) => {
		setSelectedMapPoint(mapPoint)
		setIsModalOpen(true)
	}

	const handleEmployeeAssign = (employee: Employee | null) => {
		if (selectedMapPoint) {
			selectedMapPoint.forEach(async (point) => {
				await MapPointService.updatePoint(point.id, employee ? employee.id : -1)
			})
		}

		setSelectedMapPoint([]) // Reinicia la selección
		setIsModalOpen(false)
		setFetchData(!fetchData)
	}

	const handleEmployeeFilter = (employee: Employee | null) => {
		setSelectedEmployee(employee)
	}

	const filteredMapPoints = selectedEmployee
		? mapPoints.filter(
				(point) => point.assignedDriverId === selectedEmployee.id,
		  )
		: mapPoints

	const mapPointsByColor = groupMapPointsByColor(filteredMapPoints, employees)

	return (
		<div className="p-4">
			<div className="flex flex-wrap-reverse justify-between items-stretch w-full">
				<div className="w-full md:w-1/6 mb-4">
					<EmployeeComponent
						employees={employees}
						selected={selectedEmployee}
						onEmployeeClick={handleEmployeeFilter}
					/>
				</div>
				<div className="w-full md:w-4/5 h-96 mb-4">
					<MapComponent points={mapPointsByColor} />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center w-full py-4">
				<TableComponent data={mapPoints} onRowClick={handleTableRowClick} />
			</div>
			{isModalOpen && selectedMapPoint && (
				<SelectModalComponent
					employees={employees}
					isOpen={isModalOpen}
					onConfirm={handleEmployeeAssign}
					onClose={() => setIsModalOpen(false)}
					title="Asignar empleado"
				/>
			)}
		</div>
	)
}
