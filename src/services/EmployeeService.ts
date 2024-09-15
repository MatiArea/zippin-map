// src/services/EmployeeService.ts

import { Employee } from '../types/Employee.types'

class EmployeeService {
	private static readonly key = 'employees'

	static async loadInitialEmployeesFromFile(): Promise<void> {
		try {
			const response = await fetch('/data/employees.json')
			const employees: Employee[] = await response.json()
			localStorage.setItem(this.key, JSON.stringify(employees))
		} catch (error) {
			console.error('Error cargando los empleados del archivo:', error)
		}
	}

	static getEmployees(): Employee[] {
		const employeesString = localStorage.getItem(this.key)
		if (!employeesString) {
			return []
		}
		return JSON.parse(employeesString) as Employee[]
	}
}

export default EmployeeService
