import React, { useState } from 'react'

import { MapPoint } from '../../types/MapPoint.types'
import { PaginateComponent } from './Paginate/PaginateComponent'
import { TableBody } from './Body/TableBody'

interface TableComponentProps {
	data: MapPoint[]
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
	// Datos de ejemplo
	// const data = [
	// 	{
	// 		id: 1,
	// 		name: 'Ubicacion A',
	// 		address: 'john@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Ubicacion B',
	// 		address: 'jane@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Ubicacion C',
	// 		address: 'sam@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Ubicacion E',
	// 		address: 'alice@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Ubicacion E',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 6,
	// 		name: 'Ubicacion F',
	// 		address: 'bob@example.com',
	// 		asign: false,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 7,
	// 		name: 'Ubicacion G',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 8,
	// 		name: 'Ubicacion H',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 9,
	// 		name: 'Ubicacion I',
	// 		address: 'bob@example.com',
	// 		asign: false,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 10,
	// 		name: 'Ubicacion J',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 11,
	// 		name: 'Ubicacion K',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 12,
	// 		name: 'Ubicacion L',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 13,
	// 		name: 'Ubicacion M',
	// 		address: 'bob@example.com',
	// 		asign: false,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 14,
	// 		name: 'Ubicacion N',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 15,
	// 		name: 'Ubicacion O',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 16,
	// 		name: 'Ubicacion P',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 17,
	// 		name: 'Ubicacion Q',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 18,
	// 		name: 'Ubicacion R',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 19,
	// 		name: 'Ubicacion S',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// 	{
	// 		id: 20,
	// 		name: 'Ubicacion T',
	// 		address: 'bob@example.com',
	// 		asign: true,
	// 		lat: 0,
	// 		lng: 0,
	// 	},
	// ]

	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(5) // Cambia este valor para más elementos por página

	// Calcular el índice de inicio y final de los datos
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

	// Cambiar página
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	// Calcular el número total de páginas
	const totalPages = Math.ceil(data.length / itemsPerPage)

	return (
		<div className="flex flex-col justify-center items-center py-4 w-full md:w-9/12">
			<table className="w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Name
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Address
						</th>
						<th className="px-6 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Asign
						</th>
					</tr>
				</thead>
				<TableBody items={currentItems} />
			</table>

			{/* Paginación */}
			<PaginateComponent
				currentPage={currentPage}
				totalPages={totalPages}
				paginate={paginate}
			/>
		</div>
	)
}

export default TableComponent
