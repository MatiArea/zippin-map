import { FaCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

import { MapPoint } from '../../../types/MapPoint.types'
import React from 'react'

interface TableBodyProps {
	items: MapPoint[]
	selectedRows: Set<number>
	onItemSelected: (id: number) => void
}

export const TableBody: React.FC<TableBodyProps> = ({
	items,
	selectedRows,
	onItemSelected,
}: TableBodyProps) => {
	return (
		<tbody className="bg-white divide-y divide-gray-200">
			{items.map((item) => (
				<tr key={item.id}>
					<td className="p-4">
						<input
							type="checkbox"
							checked={selectedRows.has(item.id)}
							onChange={() => onItemSelected(item.id)}
						/>
					</td>
					<td className="p-4 text-sm text-gray-900">{item.name}</td>
					<td className="p-4 text-sm text-gray-900">{item.address}</td>
					<td className="p-4 text-sm text-gray-900">
						{item.assignedDriverId ? (
							<FaCheckCircle
								className="text-green-500"
								height={250}
								width={250}
							/>
						) : (
							<FaRegTimesCircle className="text-red-500 h-10" />
						)}
					</td>
				</tr>
			))}
		</tbody>
	)
}
