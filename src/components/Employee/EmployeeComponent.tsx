import { Employee } from '../../types/Employee.types'
import { EmployeeItem } from './EmployeeItem/EmployeeItem'

interface EmployeeComponentProps {
	employees: Employee[]
	selected: Employee | null
	onEmployeeClick: (employee: Employee | null) => void
}

const EmployeeComponent: React.FC<EmployeeComponentProps> = ({
	employees,
	selected,
	onEmployeeClick,
}) => {
	return (
		<div className="h-48 md:h-96 border shadow rounded-md p-2 overflow-y-auto">
			<ul role="list" className="divide-y divide-gray-100">
				{selected && (
					<a
						className="cursor-pointer hover:bg-gray-100 text-end self-end text-sm underline"
						onClick={() => onEmployeeClick(null)}
					>
						No filter
					</a>
				)}
				{employees.map((person) => (
					<EmployeeItem
						key={person.id}
						person={person}
						onEmployeeClick={onEmployeeClick}
					/>
				))}
			</ul>
		</div>
	)
}

export default EmployeeComponent
