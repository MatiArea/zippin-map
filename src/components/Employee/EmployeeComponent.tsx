import { Employee } from '../../types/Employee.types'
import { EmployeeItem } from './EmployeeItem/EmployeeItem'

interface EmployeeComponentProps {
	employees: Employee[]
}

const EmployeeComponent: React.FC<EmployeeComponentProps> = ({ employees }) => {
	return (
		<div className="h-48 md:h-96 border shadow rounded-md p-2 overflow-y-auto">
			<ul role="list" className="divide-y divide-gray-100">
				{employees.map((person) => (
					<EmployeeItem person={person} />
				))}
			</ul>
		</div>
	)
}

export default EmployeeComponent
