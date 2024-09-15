import { Employee } from '../../../types/Employee.types'

interface EmployeeItemProps {
	person: Employee
}

export const EmployeeItem: React.FC<EmployeeItemProps> = ({ person }) => {
	return (
		<li key={person.id} className="flex justify-between gap-x-6 p-4">
			<div className="flex min-w-0 gap-x-4">
				<img
					alt=""
					src={person.imageUrl}
					className="hidden h-10 w-10 flex-none rounded-full bg-gray-50 md:block"
				/>
				<div className="min-w-0 flex-auto">
					<p className="text-sm font-semibold leading-6 text-gray-900">
						{person.name}
					</p>
				</div>
			</div>
			<div className="shrink-0 flex flex-col items-end mt-2">
				<div
					style={{
						backgroundColor: person.color,
						width: '0.75rem',
						height: '0.75rem',
						borderRadius: '50%',
					}}
				></div>
			</div>
		</li>
	)
}
