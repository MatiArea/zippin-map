import React, { useState } from 'react'

import { Employee } from '../../types/Employee.types'

interface SelectModalComponentProps {
	employees: Employee[]
	isOpen: boolean
	onConfirm: (selectedEmployee: Employee | null) => void
	onClose: () => void
	title: string
}

const SelectModalComponent: React.FC<SelectModalComponentProps> = ({
	employees,
	isOpen,
	onConfirm,
	onClose,
	title,
}) => {
	const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>('')

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedEmployeeId(e.target.value)
	}

	const handleConfirm = () => {
		const employeeId = Number(selectedEmployeeId)
		const selectedEmployee =
			employeeId > 0
				? employees.find((employee) => employee.id === employeeId) || null
				: null
		onConfirm(selectedEmployee)
	}

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
				<div className="flex justify-between items-center px-4 py-2 border-b">
					<h3 className="text-lg font-semibold">{title}</h3>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						✖
					</button>
				</div>

				<div className="px-4 py-6">
					<p>Selecciona un empleado para asignar:</p>
					<select
						value={selectedEmployeeId !== null ? selectedEmployeeId : ''}
						onChange={handleSelectChange}
						className="mt-2 w-full p-2 border border-gray-300 rounded"
					>
						<option value="" disabled>
							Selecciona un empleado
						</option>
						<option value={0}>Sin asignar</option>
						{employees.map((employee) => (
							<option key={employee.id} value={employee.id}>
								{employee.name}
							</option>
						))}
					</select>
				</div>

				<div className="flex justify-end space-x-4 px-4 py-2 border-t">
					<button
						className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
						onClick={onClose}
					>
						Cancelar
					</button>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
						onClick={handleConfirm}
						disabled={selectedEmployeeId === null}
					>
						Confirmar
					</button>
				</div>
			</div>
		</div>
	)
}

export default SelectModalComponent
