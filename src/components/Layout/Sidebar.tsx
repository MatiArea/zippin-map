import { FaAlignJustify, FaHome, FaInfo, FaMailBulk } from 'react-icons/fa'

import { Link } from 'react-router-dom'

type SidebarProps = {
	isOpen: boolean
	toggle: () => void
}

export const Sidebar = ({ isOpen, toggle }: SidebarProps) => (
	<div
		className={`bg-background border-r border-border shadow-md w-64 fixed left-0 top-0 bottom-0 transition-transform duration-300 ease-in-out transform ${
			isOpen ? 'translate-x-0' : '-translate-x-full'
		} lg:translate-x-0 lg:static z-20`}
	>
		<button onClick={toggle} className="lg:hidden absolute right-4 top-4">
			<FaAlignJustify className="h-4 w-4" />
			<span className="sr-only">Close menu</span>
		</button>
	</div>
)
