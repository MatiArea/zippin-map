import { EmployeeItem } from './EmployeeItem/EmployeeItem'

export const EmployeeComponent = () => {
	const employees = [
		{
			id: 1,
			name: 'Leslie Alexander',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			color: '3h ago',
		},
		{
			id: 2,
			name: 'Michael Foster',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			color: '3h ago',
		},
		{
			id: 3,
			name: 'Dries Vincent',
			email: 'dries.vincent@example.com',
			imageUrl:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			color: 'red',
		},
		{
			id: 4,
			name: 'Lindsay Walton',
			imageUrl:
				'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			color: '3h ago',
		},
		{
			id: 5,
			name: 'Courtney Henry',
			imageUrl:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			color: '3h ago',
		},
	]

	return (
		<div className="w-1/6 h-96 border shadow rounded-md p-2 overflow-y-auto">
			<ul role="list" className="divide-y divide-gray-100">
				{employees.map((person) => (
					<EmployeeItem person={person} />
				))}
			</ul>
		</div>
	)
}
