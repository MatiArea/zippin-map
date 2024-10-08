import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import React from 'react'

interface PaginateProps {
	currentPage: number
	totalPages: number
	paginate: (pageNumber: number) => void
}

export const PaginateComponent: React.FC<PaginateProps> = ({
	currentPage,
	totalPages,
	paginate,
}) => {
	return (
		<div className="flex justify-center mt-4">
			<button
				className={`px-4 py-2 bg-transparent rounded-xl ${
					currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
				}`}
				onClick={() => paginate(currentPage - 1)}
				disabled={currentPage === 1}
			>
				<FaAngleLeft color="#49E8A8" />
			</button>

			<div>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(number) => (
						<button
							key={number}
							className={`mx-1 px-4 py-1 rounded-xl ${
								currentPage === number
									? 'bg-zippin text-white'
									: 'bg-gray-200 text-gray-700'
							}`}
							onClick={() => paginate(number)}
						>
							{number}
						</button>
					),
				)}
			</div>

			<button
				className={`px-4 py-2 bg-transparent rounded-xl ${
					currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
				}`}
				onClick={() => paginate(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				<FaAngleRight color="#49E8A8" />
			</button>
		</div>
	)
}
