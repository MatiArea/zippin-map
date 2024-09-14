import { Employee } from '../../../types/Employee.types'

interface EmployeeItemProps {
	person: Employee
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({ person }) => {
	return (
		<li key={person.id} className="flex justify-between gap-x-6 py-5">
			<div className="flex min-w-0 gap-x-4">
				<img
					alt=""
					src={person.imageUrl}
					className="h-10 w-10 flex-none rounded-full bg-gray-50"
				/>
				<div className="min-w-0 flex-auto">
					<p className="text-sm font-semibold leading-6 text-gray-900">
						{person.name}
					</p>
				</div>
			</div>
			<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
				<p className="text-sm leading-6 text-gray-900">{person.color}</p>
			</div>
		</li>
	)
}
