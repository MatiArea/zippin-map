import React, { useState } from 'react'

import { MapPoint } from '../../types/MapPoint.types'
import { PaginateComponent } from './Paginate/PaginateComponent'
import { TableBody } from './Body/TableBody'

interface TableComponentProps {
	data: MapPoint[]
	onRowClick: (mapPoint: MapPoint[]) => void
}

const TableComponent: React.FC<TableComponentProps> = ({
	data,
	onRowClick,
}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(5)
	const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())

	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	const totalPages = Math.ceil(data.length / itemsPerPage)

	const handleRowSelection = (id: number) => {
		const updatedSelectedRows = new Set(selectedRows)
		if (updatedSelectedRows.has(id)) {
			updatedSelectedRows.delete(id)
		} else {
			updatedSelectedRows.add(id)
		}
		setSelectedRows(updatedSelectedRows)
	}

	const handleAssign = () => {
		const arrayMapPoints = data.filter((item) => selectedRows.has(item.id))
		onRowClick(arrayMapPoints)
		setSelectedRows(new Set())
	}

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			const allIds = new Set(data.map((item) => item.id))
			setSelectedRows(allIds)
		} else {
			setSelectedRows(new Set())
		}
	}

	return (
		<div className="flex flex-col justify-center items-center py-4 w-full md:w-9/12">
			{selectedRows.size > 0 && (
				<button
					className="bg-zippin hover:bg-green-400 text-white font-medium p-1 px-4 rounded-xl self-end m-2"
					onClick={() => handleAssign()}
				>
					Asignar
				</button>
			)}
			<table className="w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-4 py-3 text-left">
							<input
								className="rounded"
								type="checkbox"
								onChange={(e) => {
									handleOnChange(e)
								}}
							/>
						</th>
						<th className="px-4 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Name
						</th>
						<th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Address
						</th>
						<th className="px-4 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Asign
						</th>
					</tr>
				</thead>
				<TableBody
					items={currentItems}
					selectedRows={selectedRows}
					onItemSelected={handleRowSelection}
				/>
			</table>

			<PaginateComponent
				currentPage={currentPage}
				totalPages={totalPages}
				paginate={paginate}
			/>
		</div>
	)
}

export default TableComponent
