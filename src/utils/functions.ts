import { Employee } from '../types/Employee.types'
import { MapPoint } from '../types/MapPoint.types'

type ColorMap = {
	[color: string]: number[]
}

type GroupedMapPoints = {
	[color: string]: MapPoint[]
}

export const createColorArray = (employees: Employee[]): ColorMap => {
	return employees.reduce((map: ColorMap, employee) => {
		if (!map[employee.color]) {
			map[employee.color] = []
		}
		map[employee.color].push(employee.id)
		return map
	}, {} as ColorMap)
}

export const groupMapPointsByColor = (
	mapPoints: MapPoint[],
	employees: Employee[],
): GroupedMapPoints => {
	return mapPoints.reduce((result: GroupedMapPoints, point) => {
		const employee = employees.find((emp) => emp.id === point.assignedDriverId)

		if (employee) {
			const color = employee.color
			if (!result[color]) {
				result[color] = []
			}
			result[color].push(point)
		} else {
			if (!result['red']) {
				result['red'] = []
			}
			result['red'].push(point)
		}

		return result
	}, {} as GroupedMapPoints)
}
